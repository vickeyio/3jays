import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { VideoCard } from "@/components/africa/VideoCard";
import { Reveal } from "@/components/Reveal";
import { countries, destinationVideos } from "@/data/africaDestinations";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Africa Travel Videos — Kenya, Uganda, Tanzania & Somalia | 3jay Tour & Safari" },
      {
        name: "description",
        content:
          "Watch official tourism films from Kenya, Uganda, Tanzania and Somaliland before you plan your safari — wildlife, landscapes, coastline and culture.",
      },
      { property: "og:title", content: "Africa Travel Videos — 3jay Tour & Safari" },
      {
        property: "og:description",
        content:
          "Official tourism films and destination videos from across East Africa and the Horn of Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/videos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://wonder-nav-maker.lovable.app/videos" }],
  }),
  component: VideosPage,
});

function VideosPage() {
  const [country, setCountry] = useState("all");
  const list = destinationVideos.filter((v) => country === "all" || v.country === country);

  return (
    <main>
      <section className="border-b border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-32 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safari-gold">
            Watch
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Africa on film
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Official tourism films and destination videos, embedded from YouTube. Videos only load
            when you press play, so the page stays fast.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter videos by country">
          {[{ value: "all", label: "All Countries" }, ...countries.map((c) => ({
            value: c.code,
            label: `${c.flag} ${c.name}`,
          }))].map((o) => (
            <button
              key={o.value}
              type="button"
              aria-pressed={country === o.value}
              onClick={() => setCountry(o.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                country === o.value
                  ? "border-safari-gold bg-safari-gold text-safari-gold-foreground"
                  : "border-safari-line text-foreground/85 hover:border-safari-gold hover:text-safari-gold"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {list.map((v, i) => (
            <Reveal key={v.id} delay={(i % 2) * 80}>
              <VideoCard video={v} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
