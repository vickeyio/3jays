import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  Clock,
  Hotel,
  Luggage,
  MapPin,
  ShieldAlert,
  Wallet,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/africa/VideoCard";
import {
  africaDestinations,
  countryInfo,
  destinationVideos,
  getDestination,
} from "@/data/africaDestinations";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Destination not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const d = loaderData.dest;
    const info = countryInfo(d.country);
    const title = `${d.destinationName}, ${info.name} — Travel Guide | 3 Jays Tours & Safaris`;
    const url = `https://wonder-nav-maker.lovable.app/destinations/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: d.shortDescription.slice(0, 158) },
        { property: "og:title", content: title },
        { property: "og:description", content: d.shortDescription.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: d.imageUrl },
        { name: "twitter:image", content: d.imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: d.destinationName,
            description: d.shortDescription,
            image: d.imageUrl,
            address: { "@type": "PostalAddress", addressCountry: info.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-6 py-40 text-center">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Destination not found
      </h1>
      <Link
        to="/destinations"
        className="mt-6 inline-flex rounded-full bg-safari-gold px-5 py-2.5 text-sm font-semibold text-safari-gold-foreground"
      >
        Browse all destinations
      </Link>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-6 py-40 text-center" role="alert">
      <p className="text-muted-foreground">{error instanceof Error ? error.message : "This destination could not be loaded. Please try again."}</p>
    </main>
  ),
  component: DestinationDetail,
});

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-safari-line bg-safari-surface p-5">
      <Icon className="h-5 w-5 text-safari-gold" aria-hidden="true" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

function DestinationDetail() {
  const { dest } = Route.useLoaderData();
  const info = countryInfo(dest.country);
  const gallery = africaDestinations
    .filter((d) => d.country === dest.country && d.slug !== dest.slug)
    .slice(0, 6);
  const video = destinationVideos.find((v) => v.country === dest.country);

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={dest.imageUrl}
          alt={dest.imageAlt}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-safari-bg/70 via-safari-bg/85 to-safari-bg" />
        <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safari-gold">
            <span aria-hidden="true">{info.flag}</span> {info.name}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {dest.destinationName}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {dest.shortDescription}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-safari-gold px-6 py-3 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <Link
              to="/plan"
              className="inline-flex items-center rounded-full border border-safari-line px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            >
              Book / Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={CalendarDays}
            label="Recommended trip"
            value={`${dest.recommendedDays} Days${dest.recommendedNights ? ` / ${dest.recommendedNights} Nights` : ""}`}
          />
          <Stat icon={Clock} label="Typical activity time" value={dest.activityDuration} />
          <Stat icon={Wallet} label="Estimated cost" value={dest.priceRange} />
          <Stat icon={MapPin} label="Best time to visit" value={dest.bestTimeToVisit} />
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {dest.fullDescription}
            </p>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">
              Why visit
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{dest.whyVisit}</p>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">
              Top things to do
            </h3>
            <ul className="mt-4 space-y-2">
              {dest.thingsToDo.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">
              Suggested itinerary
            </h3>
            <ol className="mt-4 space-y-4">
              {Array.from({ length: Math.max(dest.recommendedDays, 1) }).map((_, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-safari-line bg-safari-surface p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-safari-gold">
                    Day {i + 1}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {i === 0
                      ? `Arrival and transfer, orientation with your guide, and your first activity: ${dest.thingsToDo[0] ?? "a guided introduction"}.`
                      : dest.thingsToDo[i] ??
                        `A flexible day for ${dest.activities[i % dest.activities.length]?.toLowerCase() ?? "exploring"} at your own pace, shaped around your interests.`}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              Every itinerary is a starting point — we adjust the pace, order and accommodation
              level to suit you.
            </p>

            {dest.faqs.length > 0 ? (
              <>
                <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">
                  Frequently asked questions
                </h3>
                <div className="mt-4 space-y-3">
                  {dest.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="rounded-2xl border border-safari-line bg-safari-surface p-5"
                    >
                      <summary className="cursor-pointer text-base font-semibold text-foreground">
                        {f.q}
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-safari-line bg-safari-surface p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Hotel className="h-5 w-5 text-safari-gold" aria-hidden="true" /> Accommodation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {dest.accommodation}
              </p>
              <h3 className="mt-6 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <MapPin className="h-5 w-5 text-safari-gold" aria-hidden="true" /> Getting there
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {dest.transportation}
              </p>
              <h3 className="mt-6 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Luggage className="h-5 w-5 text-safari-gold" aria-hidden="true" /> What to bring
              </h3>
              <ul className="mt-3 space-y-2">
                {dest.whatToBring.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {dest.safetyNotes ? (
              <div className="rounded-2xl border border-safari-gold/40 bg-safari-surface p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-safari-gold">
                  <ShieldAlert className="h-5 w-5" aria-hidden="true" /> Travel &amp; safety notes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {dest.safetyNotes}
                </p>
              </div>
            ) : null}

            <div className="overflow-hidden rounded-2xl border border-safari-line bg-safari-surface">
              <h3 className="px-6 pt-6 font-display text-lg font-semibold text-foreground">
                Location
              </h3>
              <p className="px-6 pb-4 pt-2 text-sm text-muted-foreground">{dest.mapLocation}</p>
              <iframe
                title={`Map showing the general location of ${dest.destinationName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(dest.mapLocation)}&z=7&output=embed`}
              />
              <p className="px-6 py-4 text-xs text-muted-foreground">
                Approximate general location only.
              </p>
            </div>

            <div className="rounded-2xl border border-safari-line bg-safari-surface p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Image credit
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {dest.imageCredit} —{" "}
                <a
                  href={dest.imageSource}
                  target="_blank"
                  rel="noreferrer"
                  className="text-safari-gold underline"
                >
                  view file &amp; licence
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Video */}
      {video ? (
        <section className="mx-auto max-w-[1440px] px-6 pb-14 lg:px-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Watch {info.name}
          </h2>
          <div className="mt-6 max-w-2xl">
            <VideoCard video={video} />
          </div>
        </section>
      ) : null}

      {/* Related gallery */}
      {gallery.length > 0 ? (
        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            More in {info.name}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 3) * 80}>
                <Link
                  to="/destinations/$slug"
                  params={{ slug: g.slug }}
                  className="group block overflow-hidden rounded-2xl border border-safari-line bg-safari-surface"
                >
                  <img
                    src={g.imageUrl}
                    alt={g.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <p className="p-4 font-display text-lg font-semibold text-foreground">
                    {g.destinationName}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
