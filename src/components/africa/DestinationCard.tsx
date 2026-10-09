import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Wallet } from "lucide-react";

import type { AfricaDestination } from "@/data/africaDestinations";
import { countryInfo } from "@/data/africaDestinations";
import { PackageQuoteButton } from "@/components/safari/PackageQuoteButton";
import { Button } from "@/components/ui/button";

export function DestinationCard({ dest }: { dest: AfricaDestination }) {
  const info = countryInfo(dest.country);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-safari-line bg-safari-surface shadow-lg shadow-black/30 transition-all hover:-translate-y-1 hover:border-safari-gold/50">
      <div className="relative aspect-16/10 overflow-hidden bg-safari-raised">
        <img
          src={dest.imageUrl}
          alt={dest.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-safari-bg/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          <span aria-hidden="true">{info.flag}</span> {info.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
          {dest.destinationName}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {dest.shortDescription}
        </p>

        <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Recommended trip</dt>
            <dd>
              Recommended trip: {dest.recommendedDays} Days
              {dest.recommendedNights > 0 ? ` / ${dest.recommendedNights} Nights` : ""}
            </dd>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Typical activity time</dt>
            <dd>{dest.activityDuration}</dd>
          </div>
          {dest.country !== "kenya" && dest.country !== "tanzania" ? <div className="flex items-start gap-2">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Estimated cost</dt>
            <dd>
              Estimated from{" "}
              <span className="font-semibold text-safari-gold">
                ${dest.priceFrom.toLocaleString("en-US")}
              </span>{" "}
              per person
            </dd>
          </div> : null}
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Best time to visit</dt>
            <dd>Best time: {dest.bestTimeToVisit}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {dest.activities.slice(0, 4).map((a) => (
            <li
              key={a}
              className="rounded-full border border-safari-line px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          <Button asChild className="h-auto min-h-11 rounded-full">
          <Link
            to="/destinations/$slug"
            params={{ slug: dest.slug }}
            className="inline-flex items-center rounded-full bg-safari-gold px-4 py-2 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore Destination
          </Link>
          </Button>
          <PackageQuoteButton name={dest.destinationName} destination={info.name} duration={`${dest.recommendedDays} Days`} />
        </div>
      </div>
    </article>
  );
}
