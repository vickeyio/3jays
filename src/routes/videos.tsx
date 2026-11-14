import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { VideoCard } from "@/components/africa/VideoCard";
import { OwnerVideoCard, type OwnerVideo } from "@/components/africa/OwnerVideoCard";
import { Reveal } from "@/components/Reveal";
import { countries, destinationVideos } from "@/data/africaDestinations";

const ownerVideos: OwnerVideo[] = [
  {
    id: "owner-elephant",
    src: "/videos/elephant.mp4",
    title: "Elephants in the Wild",
    description: "A close encounter with elephants on a 3 Jays Tours & Safaris game drive through Kenya's savannah.",
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    id: "owner-lion-walking",
    src: "/videos/lion-walking.mp4",
    title: "Lion on the Move",
    description: "Watch a lion stride across the open plains — the kind of sighting that defines a Kenya safari.",
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    id: "owner-lion-night",
    src: "/videos/lion-night.mp4",
    title: "Lion at Night",
    description: "A rare after-dark encounter with a lion, captured on a 3 Jays Tours & Safaris night drive.",
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    id: "owner-lion-roadside",
    src: "/videos/lion-roadside.mp4",
    title: "Lion by the Road",
    description: "Up-close footage of a lion resting right alongside the vehicle — an unforgettable moment in the bush.",
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    id: "owner-rhino",
    src: "/videos/rhino.mp4",
    title: "Rhino Sighting",
    description: "A rare rhino encounter during a 3 Jays Tours & Safaris safari — one of Africa's most endangered animals.",
    country: "Kenya",
    flag: "🇰🇪",
  },
];

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Africa Travel Videos — Kenya, Uganda, Tanzania & Somalia | 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Watch official tourism films from Kenya, Uganda, Tanzania and Somaliland before you plan your safari — wildlife, landscapes, coastline and culture.",
      },
      { property: "og:title", content: "Africa Travel Videos — 3 Jays Tours & Safaris" },
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

      {/* Owner's real footage section */}
      <section className="border-t border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
              🇰🇪 Real Footage
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Filmed on our safaris
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Raw, unedited moments captured by our guides during actual game drives in Kenya — the wildlife encounters our guests experience every day.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ownerVideos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 80}>
                <OwnerVideoCard video={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
