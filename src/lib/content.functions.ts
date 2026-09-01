import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { mergeTanzaniaContent, type TanzaniaContent } from "@/data/tanzaniaContent";

const CONTENT_KEY = "tanzania";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  const url = process.env["SUPABASE_URL"]!;
  return createClient(url, key, {
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

const stringList = z.array(z.string().max(2000)).max(50);

const contentSchema = z.object({
  seo: z.object({
    title: z.string().min(1).max(200),
    description: z.string().min(1).max(500),
    h1: z.string().min(1).max(200),
  }),
  hero: z.object({
    label: z.string().max(120),
    heading: z.string().max(300),
    paragraph: z.string().max(2000),
  }),
  intro: z.object({ heading: z.string().max(300), body: stringList }),
  whyTanzania: z.array(z.object({ title: z.string().max(200), body: z.string().max(2000) })).max(24),
  destinations: z
    .array(
      z.object({
        slug: z.string().max(80),
        name: z.string().max(200),
        blurb: z.string().max(2000),
        experience: stringList,
        idealFor: z.string().max(1000),
      }),
    )
    .max(24),
  packageIdeas: z
    .array(
      z.object({
        duration: z.string().max(60),
        title: z.string().max(200),
        summary: z.string().max(2000),
        couldInclude: stringList,
      }),
    )
    .max(24),
  customOptions: stringList,
  experienceItems: stringList,
  seasons: z.array(z.object({ title: z.string().max(200), body: z.string().max(2000) })).max(12),
  inclusions: stringList,
  exclusions: stringList,
  faqs: z.array(z.object({ q: z.string().max(300), a: z.string().max(3000) })).max(40),
  finalCta: z.object({
    heading: z.string().max(300),
    body: z.string().max(2000),
    ctaLabel: z.string().max(120),
  }),
});

/** Public read — falls back to the defaults shipped in code. */
export const getTanzaniaContent = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { data } = await publicClient()
      .from("site_content")
      .select("data, updated_at")
      .eq("key", CONTENT_KEY)
      .maybeSingle();
    return {
      content: mergeTanzaniaContent(data?.data),
      updatedAt: (data?.updated_at as string | undefined) ?? null,
    };
  } catch {
    return { content: mergeTanzaniaContent(null), updatedAt: null };
  }
});

/** Is the signed-in caller an admin? */
export const isAdminUser = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (error) throw error;
    return { isAdmin: Boolean(data) };
  });

/** Admin write. */
export const saveTanzaniaContent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => contentSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (roleError) throw roleError;
    if (!isAdmin) throw new Error("Admins only");

    const { error } = await context.supabase
      .from("site_content")
      .upsert(
        { key: CONTENT_KEY, data, updated_at: new Date().toISOString(), updated_by: context.userId },
        { onConflict: "key" },
      );
    if (error) throw error;
    return { ok: true, content: data as TanzaniaContent };
  });
