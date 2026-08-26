import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  const url = process.env["SUPABASE_URL"]!;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

function stripUndefined<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as Partial<T>;
}

/* ---------------------------------- reads --------------------------------- */

export const listPackages = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicClient()
    .from("safari_packages")
    .select("*")
    .eq("published", true)
    .order("featured", { ascending: false })
    .order("duration_days", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export const getPackage = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string().min(1).max(160) }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: pkg, error } = await sb
      .from("safari_packages")
      .select("*")
      .eq("slug", data.slug)
      .eq("published", true)
      .maybeSingle();
    if (error) throw error;
    if (!pkg) return null;
    const [{ data: days }, { data: accommodations }] = await Promise.all([
      sb
        .from("package_itineraries")
        .select("*")
        .eq("package_id", pkg.id)
        .order("day_number", { ascending: true }),
      sb.from("accommodations").select("*").order("category", { ascending: true }),
    ]);
    return { pkg, days: days ?? [], accommodations: accommodations ?? [] };
  });

export const listParks = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicClient()
    .from("national_parks")
    .select("*")
    .eq("published", true)
    .order("country", { ascending: true })
    .order("name", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export const getPark = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string().min(1).max(160) }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: park, error } = await sb
      .from("national_parks")
      .select("*")
      .eq("slug", data.slug)
      .eq("published", true)
      .maybeSingle();
    if (error) throw error;
    if (!park) return null;
    const { data: packages } = await sb
      .from("safari_packages")
      .select("*")
      .eq("published", true)
      .ilike("country", `%${park.country.split(" ")[0]}%`)
      .limit(3);
    return { park, packages: packages ?? [] };
  });

export const listAccommodations = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicClient().from("accommodations").select("*").order("name");
  if (error) throw error;
  return data ?? [];
});

export const listReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicClient()
    .from("testimonials")
    .select("customer_name, country, rating, review, safari_booked, photo, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
});

export const listTeam = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicClient()
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export const searchSite = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ q: z.string().min(1).max(80) }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const term = `%${data.q}%`;
    const [pkgs, parks] = await Promise.all([
      sb
        .from("safari_packages")
        .select("title, slug, country, destination, duration_days, starting_price")
        .eq("published", true)
        .or(`title.ilike.${term},destination.ilike.${term},country.ilike.${term}`)
        .limit(6),
      sb
        .from("national_parks")
        .select("name, slug, country")
        .eq("published", true)
        .or(`name.ilike.${term},country.ilike.${term}`)
        .limit(6),
    ]);
    return { packages: pkgs.data ?? [], parks: parks.data ?? [] };
  });

/* --------------------------------- writes --------------------------------- */

const inquirySchema = z.object({
  customer_name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional().nullable(),
  country: z.string().max(80).optional().nullable(),
  travel_date: z.string().max(20).optional().nullable(),
  flexible_dates: z.boolean().optional().nullable(),
  adults: z.number().int().min(0).max(50).optional().nullable(),
  children: z.number().int().min(0).max(50).optional().nullable(),
  infants: z.number().int().min(0).max(50).optional().nullable(),
  destination: z.string().max(120).optional().nullable(),
  safari_package: z.string().max(200).optional().nullable(),
  duration: z.string().max(60).optional().nullable(),
  budget: z.string().max(60).optional().nullable(),
  travel_style: z.string().max(60).optional().nullable(),
  travel_type: z.string().max(60).optional().nullable(),
  interests: z.array(z.string().max(60)).max(20).optional(),
  accommodation_preference: z.string().max(80).optional().nullable(),
  transport: z.string().max(80).optional().nullable(),
  message: z.string().max(4000).optional().nullable(),
  source: z.enum(["quick_inquiry", "quote_request", "safari_planner", "contact_form", "inquiry_form"]),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => inquirySchema.parse(d))
  .handler(async ({ data }) => {
    const payload = {
      ...data,
      travel_date: data.travel_date ? data.travel_date : null,
      interests: data.interests ?? [],
    };
    const { error } = await publicClient().from("inquiries").insert(stripUndefined(payload) as never);
    if (error) throw error;
    return { ok: true as const };
  });

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z
      .object({
        customer_name: z.string().min(2).max(120),
        country: z.string().max(80).optional().nullable(),
        rating: z.number().int().min(1).max(5),
        review: z.string().min(10).max(2000),
        safari_booked: z.string().max(200).optional().nullable(),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const { error } = await publicClient()
      .from("testimonials")
      .insert(stripUndefined({ ...data, approved: false }) as never);
    if (error) throw error;
    return { ok: true as const };
  });

/* ---------------------------------- admin --------------------------------- */

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("Forbidden");
}

export const adminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context as never);
    const sb = context.supabase;
    const [inq, pkgs] = await Promise.all([
      sb.from("inquiries").select("*").order("created_at", { ascending: false }).limit(100),
      sb.from("safari_packages").select("*").order("title", { ascending: true }),
    ]);
    if (inq.error) throw inq.error;
    if (pkgs.error) throw pkgs.error;
    return {
      inquiries: inq.data ?? [],
      packages: pkgs.data ?? [],
      unread: (inq.data ?? []).filter((i: { admin_read: boolean }) => !i.admin_read).length,
    };
  });

export const updateInquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum([
          "New",
          "Contacted",
          "In Progress",
          "Quoted",
          "Booked",
          "Completed",
          "Cancelled",
        ]),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { error } = await context.supabase
      .from("inquiries")
      .update({ status: data.status, admin_read: true })
      .eq("id", data.id);
    if (error) throw error;
    return { ok: true as const };
  });

export const setPackagePublished = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ id: z.string().uuid(), published: z.boolean() }).parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { error } = await context.supabase
      .from("safari_packages")
      .update({ published: data.published })
      .eq("id", data.id);
    if (error) throw error;
    return { ok: true as const };
  });

export const upsertPackage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z
      .object({
        id: z.string().uuid().optional(),
        title: z.string().min(3).max(200),
        slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/),
        country: z.string().min(2).max(80),
        destination: z.string().min(2).max(120),
        duration_days: z.number().int().min(1).max(60),
        duration_nights: z.number().int().min(0).max(60),
        safari_type: z.string().max(60),
        travel_style: z.string().max(60),
        accommodation_level: z.string().max(60),
        starting_price: z.number().min(0).max(1000000).nullable(),
        short_description: z.string().max(400).nullable(),
        full_description: z.string().max(4000).nullable(),
        main_image: z.string().max(400).nullable(),
        published: z.boolean(),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { error } = await context.supabase
      .from("safari_packages")
      .upsert(stripUndefined(data) as never, { onConflict: "slug" });
    if (error) throw error;
    return { ok: true as const };
  });
