import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import {
  getTanzaniaContent,
  isAdminUser,
  saveTanzaniaContent,
} from "@/lib/content.functions";
import { defaultTanzaniaContent, type TanzaniaContent } from "@/data/tanzaniaContent";

export const Route = createFileRoute("/admin/tanzania")({
  head: () => ({
    meta: [
      { title: "Edit Tanzania Page | 3 Jays Tours & Safaris Admin" },
      {
        name: "description",
        content: "Admin editor for the Tanzania Safaris page copy of 3 Jays Tours & Safaris.",
      },
      { property: "og:title", content: "Edit Tanzania Page | 3 Jays Tours & Safaris Admin" },
      { property: "og:description", content: "Admin editor for the Tanzania Safaris page copy." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminTanzaniaPage,
});

/* --------------------------------- fields -------------------------------- */

const field =
  "w-full rounded-xl border border-safari-line bg-safari-raised/50 px-4 py-2.5 text-foreground outline-none transition-colors focus:border-safari-gold";

function Text({
  label,
  value,
  onChange,
  multiline,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/85">{label}</span>
      {multiline ? (
        <textarea rows={rows} className={field} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type="text" className={field} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-medium text-foreground/85">{label}</span>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              className={field}
              value={item}
              aria-label={`${label} item ${i + 1}`}
              onChange={(e) => onChange(items.map((v, j) => (j === i ? e.target.value : v)))}
            />
            <button
              type="button"
              aria-label={`Remove ${label} item ${i + 1}`}
              className="rounded-xl border border-safari-line px-3 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-safari-line px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
        onClick={() => onChange([...items, ""])}
      >
        <Plus className="h-4 w-4" aria-hidden="true" /> Add item
      </button>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-safari-line bg-safari-surface p-6">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

/* ---------------------------------- page ---------------------------------- */

function AdminTanzaniaPage() {
  const checkAdmin = useServerFn(isAdminUser);
  const loadContent = useServerFn(getTanzaniaContent);
  const save = useServerFn(saveTanzaniaContent);

  const [status, setStatus] = useState<"loading" | "signed-out" | "denied" | "ready">("loading");
  const [content, setContent] = useState<TanzaniaContent>(defaultTanzaniaContent);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    const run = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      if (!data.session) {
        setStatus("signed-out");
        return;
      }
      try {
        const [{ isAdmin }, loaded] = await Promise.all([checkAdmin(), loadContent()]);
        if (!active) return;
        setContent(loaded.content);
        setStatus(isAdmin ? "ready" : "denied");
      } catch {
        if (active) setStatus("denied");
      }
    };
    void run();
    const { data: sub } = supabase.auth.onAuthStateChange(() => void run());
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [checkAdmin, loadContent]);

  const patch = (p: Partial<TanzaniaContent>) => setContent((c) => ({ ...c, ...p }));

  const onSave = async () => {
    setSaving(true);
    try {
      await save({ data: content });
      toast.success("Tanzania page updated");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save changes");
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading") {
    return (
      <main className="mx-auto max-w-[900px] px-6 py-40 text-center">
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-safari-gold" aria-hidden="true" />
        <p className="mt-3 text-muted-foreground">Checking your access…</p>
      </main>
    );
  }

  if (status === "signed-out") return <SignIn />;

  if (status === "denied") {
    return (
      <main className="mx-auto max-w-[700px] px-6 py-40 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">Admins only</h1>
        <p className="mt-3 text-muted-foreground">
          Your account does not have admin access to the content editor.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-safari-line px-6 py-2.5 font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
          onClick={() => void supabase.auth.signOut()}
        >
          Sign out
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[980px] px-6 pb-28 pt-32 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-safari-gold">
            Content editor
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tanzania Safaris page
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Edit the page copy and save — changes appear on /tanzania-safaris straight away. Images
            stay managed in the design.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-safari-line px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            onClick={() => setContent(defaultTanzaniaContent)}
          >
            Reset to original copy
          </button>
          <button
            type="button"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-6 py-2.5 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            onClick={() => void onSave()}
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Save className="h-4 w-4" aria-hidden="true" />
            )}
            Save changes
          </button>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <Card title="Search engine listing">
          <Text label="Page title" value={content.seo.title} onChange={(v) => patch({ seo: { ...content.seo, title: v } })} />
          <Text
            label="Meta description"
            multiline
            rows={3}
            value={content.seo.description}
            onChange={(v) => patch({ seo: { ...content.seo, description: v } })}
          />
          <Text label="Main heading (H1)" value={content.seo.h1} onChange={(v) => patch({ seo: { ...content.seo, h1: v } })} />
        </Card>

        <Card title="Hero">
          <Text label="Label" value={content.hero.label} onChange={(v) => patch({ hero: { ...content.hero, label: v } })} />
          <Text label="Heading" value={content.hero.heading} onChange={(v) => patch({ hero: { ...content.hero, heading: v } })} />
          <Text
            label="Paragraph"
            multiline
            value={content.hero.paragraph}
            onChange={(v) => patch({ hero: { ...content.hero, paragraph: v } })}
          />
        </Card>

        <Card title="Introduction">
          <Text label="Heading" value={content.intro.heading} onChange={(v) => patch({ intro: { ...content.intro, heading: v } })} />
          <ListEditor
            label="Paragraphs"
            items={content.intro.body}
            onChange={(body) => patch({ intro: { ...content.intro, body } })}
          />
        </Card>

        <Card title="Why choose Tanzania">
          {content.whyTanzania.map((item, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-safari-line/70 p-4">
              <Text
                label={`Reason ${i + 1} title`}
                value={item.title}
                onChange={(v) =>
                  patch({ whyTanzania: content.whyTanzania.map((x, j) => (j === i ? { ...x, title: v } : x)) })
                }
              />
              <Text
                label="Body"
                multiline
                rows={3}
                value={item.body}
                onChange={(v) =>
                  patch({ whyTanzania: content.whyTanzania.map((x, j) => (j === i ? { ...x, body: v } : x)) })
                }
              />
              <button
                type="button"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-destructive"
                onClick={() => patch({ whyTanzania: content.whyTanzania.filter((_, j) => j !== i) })}
              >
                Remove reason {i + 1}
              </button>
            </div>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-safari-line px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            onClick={() => patch({ whyTanzania: [...content.whyTanzania, { title: "", body: "" }] })}
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> Add reason
          </button>
        </Card>

        <Card title="Destinations">
          <p className="text-sm text-muted-foreground">
            Photos are matched to each destination by its short name below, so keep the existing ones
            unless you also want the design updated.
          </p>
          {content.destinations.map((d, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-safari-line/70 p-4">
              <Text
                label="Name"
                value={d.name}
                onChange={(v) =>
                  patch({ destinations: content.destinations.map((x, j) => (j === i ? { ...x, name: v } : x)) })
                }
              />
              <Text
                label="Intro"
                multiline
                rows={3}
                value={d.blurb}
                onChange={(v) =>
                  patch({ destinations: content.destinations.map((x, j) => (j === i ? { ...x, blurb: v } : x)) })
                }
              />
              <ListEditor
                label="What you may experience"
                items={d.experience}
                onChange={(experience) =>
                  patch({ destinations: content.destinations.map((x, j) => (j === i ? { ...x, experience } : x)) })
                }
              />
              <Text
                label="Ideal for"
                multiline
                rows={2}
                value={d.idealFor}
                onChange={(v) =>
                  patch({ destinations: content.destinations.map((x, j) => (j === i ? { ...x, idealFor: v } : x)) })
                }
              />
            </div>
          ))}
        </Card>

        <Card title="Package ideas">
          {content.packageIdeas.map((p, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-safari-line/70 p-4">
              <Text
                label="Duration badge"
                value={p.duration}
                onChange={(v) =>
                  patch({ packageIdeas: content.packageIdeas.map((x, j) => (j === i ? { ...x, duration: v } : x)) })
                }
              />
              <Text
                label="Title"
                value={p.title}
                onChange={(v) =>
                  patch({ packageIdeas: content.packageIdeas.map((x, j) => (j === i ? { ...x, title: v } : x)) })
                }
              />
              <Text
                label="Summary"
                multiline
                rows={3}
                value={p.summary}
                onChange={(v) =>
                  patch({ packageIdeas: content.packageIdeas.map((x, j) => (j === i ? { ...x, summary: v } : x)) })
                }
              />
              <ListEditor
                label="Could include"
                items={p.couldInclude}
                onChange={(couldInclude) =>
                  patch({ packageIdeas: content.packageIdeas.map((x, j) => (j === i ? { ...x, couldInclude } : x)) })
                }
              />
              <button
                type="button"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-destructive"
                onClick={() => patch({ packageIdeas: content.packageIdeas.filter((_, j) => j !== i) })}
              >
                Remove package idea {i + 1}
              </button>
            </div>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-safari-line px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            onClick={() =>
              patch({
                packageIdeas: [
                  ...content.packageIdeas,
                  { duration: "", title: "", summary: "", couldInclude: [] },
                ],
              })
            }
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> Add package idea
          </button>
        </Card>

        <Card title="Custom safari options">
          <ListEditor label="Options" items={content.customOptions} onChange={(customOptions) => patch({ customOptions })} />
        </Card>

        <Card title="Safari experience">
          <ListEditor
            label="Experience list"
            items={content.experienceItems}
            onChange={(experienceItems) => patch({ experienceItems })}
          />
        </Card>

        <Card title="When to visit">
          {content.seasons.map((s, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-safari-line/70 p-4">
              <Text
                label="Title"
                value={s.title}
                onChange={(v) => patch({ seasons: content.seasons.map((x, j) => (j === i ? { ...x, title: v } : x)) })}
              />
              <Text
                label="Body"
                multiline
                rows={3}
                value={s.body}
                onChange={(v) => patch({ seasons: content.seasons.map((x, j) => (j === i ? { ...x, body: v } : x)) })}
              />
            </div>
          ))}
        </Card>

        <Card title="Inclusions & exclusions">
          <ListEditor label="Commonly included" items={content.inclusions} onChange={(inclusions) => patch({ inclusions })} />
          <ListEditor label="Commonly excluded" items={content.exclusions} onChange={(exclusions) => patch({ exclusions })} />
        </Card>

        <Card title="FAQ">
          {content.faqs.map((f, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-safari-line/70 p-4">
              <Text
                label="Question"
                value={f.q}
                onChange={(v) => patch({ faqs: content.faqs.map((x, j) => (j === i ? { ...x, q: v } : x)) })}
              />
              <Text
                label="Answer"
                multiline
                rows={3}
                value={f.a}
                onChange={(v) => patch({ faqs: content.faqs.map((x, j) => (j === i ? { ...x, a: v } : x)) })}
              />
              <button
                type="button"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-destructive"
                onClick={() => patch({ faqs: content.faqs.filter((_, j) => j !== i) })}
              >
                Remove question {i + 1}
              </button>
            </div>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-safari-line px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            onClick={() => patch({ faqs: [...content.faqs, { q: "", a: "" }] })}
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> Add question
          </button>
        </Card>

        <Card title="Final call to action">
          <Text label="Heading" value={content.finalCta.heading} onChange={(v) => patch({ finalCta: { ...content.finalCta, heading: v } })} />
          <Text
            label="Body"
            multiline
            value={content.finalCta.body}
            onChange={(v) => patch({ finalCta: { ...content.finalCta, body: v } })}
          />
          <Text
            label="Button label"
            value={content.finalCta.ctaLabel}
            onChange={(v) => patch({ finalCta: { ...content.finalCta, ctaLabel: v } })}
          />
        </Card>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-7 py-3 font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          onClick={() => void onSave()}
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Save className="h-4 w-4" aria-hidden="true" />
          )}
          Save changes
        </button>
      </div>
    </main>
  );
}

/* --------------------------------- sign in -------------------------------- */

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast.error(error.message);
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[440px] flex-col justify-center px-6 py-32">
      <h1 className="font-display text-3xl font-semibold text-foreground">Admin sign in</h1>
      <p className="mt-2 text-muted-foreground">
        Sign in with your admin account to edit the Tanzania page.
      </p>
      <form className="mt-8 space-y-4" onSubmit={(e) => void submit(e)}>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground/85">Email address</span>
          <input
            type="email"
            required
            autoComplete="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground/85">Password</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            className={field}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-full bg-safari-gold px-6 py-3 font-semibold text-safari-gold-foreground disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
