import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Star, Users } from "lucide-react";

import { resolveImage } from "@/lib/imageMap";
import { Button } from "@/components/ui/button";

export type PackageRow = {
  id: string;
  title: string;
  slug: string;
  country: string;
  destination: string;
  duration_days: number;
  duration_nights: number;
  safari_type: string;
  travel_style: string;
  accommodation_level: string;
  starting_price: number | null;
  currency: string;
  short_description: string | null;
  main_image: string | null;
  featured: boolean;
  interests?: string[];
};

export function formatPrice(value: number | null, currency = "USD") {
  if (value == null) return "On request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function SafariCard({ pkg }: { pkg: PackageRow }) {
  const img = resolveImage(pkg.main_image);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-safari-line bg-safari-surface shadow-lg shadow-black/30 transition-all hover:-translate-y-1 hover:border-safari-gold/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-safari-raised">
        {img ? (
          <img
            src={img}
            alt={`${pkg.title} — safari in ${pkg.destination}, ${pkg.country}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        {pkg.featured ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-safari-gold px-3 py-1 text-xs font-semibold text-safari-gold-foreground">
            <Star className="h-3 w-3" aria-hidden="true" /> Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
          {pkg.title}
        </h3>

        <dl className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Duration</dt>
            <dd>
              {pkg.duration_days} Days / {pkg.duration_nights} Nights
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Destination</dt>
            <dd>{pkg.country}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Safari style</dt>
            <dd>{pkg.safari_type}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-safari-gold" aria-hidden="true" />
            <dt className="sr-only">Accommodation</dt>
            <dd>{pkg.accommodation_level}</dd>
          </div>
        </dl>

        {pkg.short_description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {pkg.short_description}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild className="h-auto min-h-11 rounded-full">
          <Link
            to="/safaris/$slug"
            params={{ slug: pkg.slug }}
            className="inline-flex items-center rounded-full bg-safari-gold px-4 py-2 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore Destination
          </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto min-h-11 rounded-full">
          <Link
            to="/safaris/$slug"
            params={{ slug: pkg.slug }}
            hash="quote"
            className="inline-flex items-center rounded-full border border-safari-line px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
          >
            Request a Quote
          </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
