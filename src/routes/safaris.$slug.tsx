import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { getPackage } from "@/lib/safari.functions";
import { formatPrice } from "@/components/safari/SafariCard";
import { QuoteRequestForm } from "@/components/safari/QuoteRequestForm";
import { resolveImage } from "@/lib/imageMap";

type PkgDetail = {
  title: string;
  country: string;
  destination: string;
  duration_days: number;
  duration_nights: number;
  safari_type: string;
  starting_price: number | null;
  currency: string;
  main_image: string | null;
  overview?: string | null;
  short_description?: string | null;
};

type DayRow = {
  id?: string;
  day_number: number;
  title: string;
  location?: string | null;
  description?: string | null;
};

export const Route = createFileRoute("/safaris/$slug")({
  head: () => ({
    meta: [
      { title: "Safari Itinerary — 3jay Tour & Safari" },
      {
        name: "description",
        content:
          "Day-by-day safari itinerary with inclusions, accommodation and pricing from 3jay Tour & Safari.",
      },
      { property: "og:title", content: "Safari Itinerary — 3jay Tour & Safari" },
      {
        property: "og:description",
        content: "Day-by-day safari itinerary, inclusions and pricing.",
      },
    ],
  }),
  component: SafariDetail,
});

function SafariDetail() {
  const { slug } = Route.useParams();
  const fetchPackage = useServerFn(getPackage);
  const { data, isLoading } = useQuery({
    queryKey: ["package", slug],
    queryFn: () => fetchPackage({ data: { slug } }),
  });

  if (isLoading) {
    return <main className="mx-auto max-w-5xl px-4 py-20 text-muted-foreground">Loading…</main>;
  }

  if (!data) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20">
        <h1 className="font-display text-3xl font-semibold text-foreground">Safari not found</h1>
        <p className="mt-2 text-muted-foreground">
          This itinerary may have been moved or unpublished.
        </p>
      </main>
    );
  }

  const pkg = data.pkg as unknown as PkgDetail;
  const img = resolveImage(pkg.main_image);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-gold">
          {pkg.country} · {pkg.destination}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">{pkg.title}</h1>
        <p className="mt-3 text-muted-foreground">
          {pkg.duration_days} Days / {pkg.duration_nights} Nights · {pkg.safari_type} · from{" "}
          <span className="font-semibold text-safari-gold">
            {formatPrice(pkg.starting_price, pkg.currency)}
          </span>{" "}
          per person
        </p>
      </header>

      {img ? (
        <img
          src={img}
          alt={`${pkg.title} — safari in ${pkg.destination}, ${pkg.country}`}
          className="mt-8 aspect-[16/7] w-full rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : null}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {pkg.overview || pkg.short_description ? (
            <p className="leading-relaxed text-muted-foreground">
              {pkg.overview ?? pkg.short_description}
            </p>
          ) : null}

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">
            Day-by-day itinerary
          </h2>
          <ol className="mt-5 space-y-4">
            {data.days.map((day: DayRow) => (
              <li
                key={day.id ?? day.day_number}
                className="rounded-2xl border border-safari-line bg-safari-surface/70 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-safari-gold">
                  Day {day.day_number}
                  {day.location ? ` · ${day.location}` : ""}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {day.title}
                </h3>
                {day.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {day.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div id="quote" className="lg:sticky lg:top-28 lg:self-start">
          <QuoteRequestForm
            safariName={pkg.title}
            destination={pkg.destination}
            duration={`${pkg.duration_days} Days / ${pkg.duration_nights} Nights`}
          />
        </div>
      </div>
    </main>
  );
}
