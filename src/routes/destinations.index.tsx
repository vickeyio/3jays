import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { DestinationCard } from "@/components/africa/DestinationCard";
import { Reveal } from "@/components/Reveal";
import {
  activityOptions,
  africaDestinations,
  budgetOptions,
  countries,
  durationOptions,
  matchesDuration,
} from "@/data/africaDestinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "African Destinations — Kenya, Uganda, Tanzania & Somalia | 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Browse 42 destinations across Kenya, Uganda, Tanzania and Somalia with recommended trip length, daily activity time, estimated costs and the best time to visit.",
      },
      {
        property: "og:title",
        content: "African Destinations — Kenya, Uganda, Tanzania & Somalia",
      },
      {
        property: "og:description",
        content:
          "Filter African safari, beach, hiking and cultural destinations by country, budget, duration and activity.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/destinations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://wonder-nav-maker.lovable.app/destinations" }],
  }),
  component: DestinationsIndex,
});

const chip =
  "rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer";
const chipOn = "border-safari-gold bg-safari-gold text-safari-gold-foreground";
const chipOff = "border-safari-line text-foreground/85 hover:border-safari-gold hover:text-safari-gold";

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`${chip} ${value === o.value ? chipOn : chipOff}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DestinationsIndex() {
  const [country, setCountry] = useState("all");
  const [budget, setBudget] = useState("all");
  const [duration, setDuration] = useState("all");
  const [activity, setActivity] = useState("all");

  const results = useMemo(
    () =>
      africaDestinations.filter(
        (d) =>
          (country === "all" || d.country === country) &&
          (budget === "all" || d.budget === budget) &&
          (duration === "all" || matchesDuration(d.recommendedDays, duration)) &&
          (activity === "all" ||
            d.tags.includes(activity) ||
            d.activities.some((a) => a.toLowerCase() === activity)),
      ),
    [country, budget, duration, activity],
  );

  return (
    <main>
      <section className="border-b border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-32 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safari-gold">
            Explore Africa
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            African destinations, country by country
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Kenya, Uganda, Tanzania and Somalia — with recommended trip length, typical daily
            activity time, estimated starting costs and the best months to travel. All prices are
            estimates and vary with season, accommodation and group size.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <div className="grid gap-7 rounded-2xl border border-safari-line bg-safari-surface p-6 md:grid-cols-2">
          <FilterRow
            label="Country"
            value={country}
            onChange={setCountry}
            options={[
              { value: "all", label: "All Countries" },
              ...countries.map((c) => ({ value: c.code, label: `${c.flag} ${c.name}` })),
            ]}
          />
          <FilterRow
            label="Budget"
            value={budget}
            onChange={setBudget}
            options={[
              { value: "all", label: "Any budget" },
              ...budgetOptions.map((b) => ({
                value: b,
                label: b === "mid-range" ? "Mid-range" : b[0]!.toUpperCase() + b.slice(1),
              })),
            ]}
          />
          <FilterRow
            label="Duration"
            value={duration}
            onChange={setDuration}
            options={[
              { value: "all", label: "Any length" },
              ...durationOptions.map((d) => ({ value: d.value, label: d.label })),
            ]}
          />
          <FilterRow
            label="Activity"
            value={activity}
            onChange={setActivity}
            options={[
              { value: "all", label: "All activities" },
              ...activityOptions.map((a) => ({ value: a.toLowerCase(), label: a })),
            ]}
          />
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          Showing {results.length} of {africaDestinations.length} destinations
        </p>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((dest, i) => (
            <Reveal key={dest.slug} delay={(i % 3) * 80}>
              <DestinationCard dest={dest} />
            </Reveal>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-safari-line bg-safari-surface p-10 text-center">
            <p className="text-muted-foreground">
              No destinations match those filters yet. Try widening your budget or duration.
            </p>
            <Link
              to="/plan"
              className="mt-5 inline-flex items-center rounded-full bg-safari-gold px-5 py-2.5 text-sm font-semibold text-safari-gold-foreground"
            >
              Ask us to build a custom trip
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
