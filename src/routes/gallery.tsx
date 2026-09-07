import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";

import { africaDestinations, countries, countryInfo } from "@/data/africaDestinations";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — African Wildlife, Landscapes, Beaches & Culture | 3jay Tour & Safari" },
      {
        name: "description",
        content:
          "Browse photographs from Kenya, Uganda, Tanzania and Somalia — wildlife, landscapes, beaches, mountains, culture and adventure — filtered by country and theme.",
      },
      { property: "og:title", content: "Gallery — 3jay Tour & Safari" },
      {
        property: "og:description",
        content:
          "Photographs from across East Africa and the Horn of Africa: wildlife, landscapes, beaches, culture and adventure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://wonder-nav-maker.lovable.app/gallery" }],
  }),
  component: GalleryPage,
});

const themes = ["wildlife", "culture", "beach", "mountains", "adventure", "safari", "photography"];
const themeLabels: Record<string, string> = {
  wildlife: "Wildlife",
  culture: "Culture",
  beach: "Beaches",
  mountains: "Mountains",
  adventure: "Adventure",
  safari: "Safari",
  photography: "Photography",
};

function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      africaDestinations.map((d) => ({
        src: d.imageUrl,
        alt: d.imageAlt,
        title: d.destinationName,
        country: d.country,
        countryName: countryInfo(d.country).name,
        tags: d.tags,
        credit: d.imageCredit,
        source: d.imageSource,
      })),
    [],
  );

  const visible = items.filter(
    (i) => filter === "all" || i.country === filter || i.tags.includes(filter),
  );

  const open = lightbox != null ? visible[lightbox] : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i == null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i == null ? i : (i - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, visible.length]);

  const filters = [
    { value: "all", label: "All" },
    ...countries.map((c) => ({ value: c.code, label: `${c.flag} ${c.name}` })),
    ...themes.map((t) => ({ value: t, label: themeLabels[t]! })),
  ];

  return (
    <main>
      <section className="border-b border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-32 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safari-gold">
            Gallery
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Moments from across Africa
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Wildlife, landscapes, beaches, mountains and culture from Kenya, Uganda, Tanzania and
            Somalia. Filter by country or theme, and select any photograph to view it larger.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => {
                setFilter(f.value);
                setLightbox(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.value
                  ? "border-safari-gold bg-safari-gold text-safari-gold-foreground"
                  : "border-safari-line text-foreground/85 hover:border-safari-gold hover:text-safari-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} photographs
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`View larger photograph: ${item.alt}`}
                className="group block w-full overflow-hidden rounded-2xl border border-safari-line bg-safari-surface text-left transition-all hover:-translate-y-1 hover:border-safari-gold/50"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="block p-4">
                  <span className="block font-display text-base font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {item.countryName}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close photograph"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-safari-line bg-safari-surface text-foreground hover:text-safari-gold"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure
            className="max-h-full w-full max-w-5xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.alt}
              className="mx-auto max-h-[75vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{open.title}</span> — {open.alt}
              <br />
              {open.credit} ·{" "}
              <a
                href={open.source}
                target="_blank"
                rel="noreferrer"
                className="text-safari-gold underline"
              >
                file &amp; licence
              </a>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </main>
  );
}
