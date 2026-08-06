import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Check, MapPin } from "lucide-react";

import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/destination")({
  head: () => ({
    meta: [
      { title: "Destinations — 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Safaris and cultural journeys across Ethiopia, Djibouti, Kenya, Uganda, Sudan, South Sudan and Somalia.",
      },
      { property: "og:title", content: "Destinations — 3 Jays Tours & Safaris" },
      {
        property: "og:description",
        content:
          "Explore seven East African countries with 3 Jays Tours & Safaris — gorillas, migrations, pyramids and reefs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  const [activeSlug, setActiveSlug] = useState(destinations[0].slug);
  const active = destinations.find((d) => d.slug === activeSlug) ?? destinations[0];

  return (
    <main>
      <section className="bg-brand-navy text-brand-navy-foreground">
        <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Where we travel
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Seven countries. One region. Endless stories.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-navy-foreground/80">
            From gorilla forests to Nubian pyramids, choose a country below to see what
            makes it unmissable — and let us build the trip around you.
          </p>
        </div>

        {/* Country navigation */}
        <div className="border-t border-brand-navy-foreground/15">
          <div className="mx-auto max-w-[1440px] overflow-x-auto px-6 lg:px-10">
            <ul className="flex min-w-max gap-2 py-3">
              {destinations.map((d) => {
                const isActive = d.slug === active.slug;
                return (
                  <li key={d.slug}>
                    <button
                      type="button"
                      onClick={() => setActiveSlug(d.slug)}
                      aria-current={isActive ? "true" : undefined}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-brand-accent text-brand-navy"
                          : "bg-brand-navy-foreground/10 text-brand-navy-foreground hover:bg-brand-navy-foreground/20"
                      }`}
                    >
                      {d.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <img
            src={active.image}
            alt={`${active.name} — ${active.tagline}`}
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-4/3 w-full rounded-2xl object-cover shadow-lg"
          />

          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <MapPin className="h-4 w-4" /> {active.tagline}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {active.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {active.intro}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Trip highlights</h3>
            <ul className="mt-3 space-y-2">
              {active.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground">
              <CalendarDays className="h-4 w-4" /> Best time to visit: {active.bestTime}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
