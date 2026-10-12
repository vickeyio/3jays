import { Link } from "@tanstack/react-router";

import { DestinationCard } from "@/components/africa/DestinationCard";
import { Reveal } from "@/components/Reveal";
import type { Country } from "@/data/africaDestinations";
import { countryInfo, destinationsByCountry } from "@/data/africaDestinations";

export function CountrySection({
  code,
  intro,
  safetyNote,
  children,
}: {
  code: Country;
  intro: string;
  safetyNote?: string;
  children?: React.ReactNode;
}) {
  const info = countryInfo(code);
  const list = destinationsByCountry(code);
  const heroImage = list[0]?.imageUrl;

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
             alt={list[0]?.imageAlt ?? `${info.name} landscape`}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
            loading="eager"
            decoding="async"
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-safari-bg/70 via-safari-bg/85 to-safari-bg" />
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safari-gold">
            <span aria-hidden="true">{info.flag}</span> {info.tagline}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {info.name} Destinations
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {list.length} destinations · journeys tailored to your dates, accommodation and group size.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/plan"
              className="inline-flex items-center rounded-full bg-safari-gold px-6 py-3 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Plan My Trip
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center rounded-full border border-safari-line px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
            >
              All destinations
            </Link>
          </div>
        </div>
      </section>

      {safetyNote ? (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="rounded-2xl border border-safari-gold/40 bg-safari-surface p-6">
            <h2 className="font-display text-xl font-semibold text-safari-gold">
              Travel &amp; Safety Information
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{safetyNote}</p>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((dest, i) => (
            <Reveal key={dest.slug} delay={(i % 3) * 80}>
              <DestinationCard dest={dest} />
            </Reveal>
          ))}
        </div>
      </section>

      {children}
    </main>
  );
}
