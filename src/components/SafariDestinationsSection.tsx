import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { safariDestinations } from "@/data/homepageMedia";

export function SafariDestinationsSection() {
  return (
    <section id="safari-destinations" className="scroll-mt-24 bg-safari-surface/50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            Safari Destinations
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Explore Our Safari Destinations
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Six signature journeys across Kenya, Tanzania and Uganda — each built around the
            wildlife, landscapes and moments that make it unforgettable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safariDestinations.map((dest, i) => (
            <Reveal key={dest.id} delay={(i % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-safari-line bg-safari-surface shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:border-safari-gold/50 hover:shadow-[0_30px_60px_-20px_rgb(60_40_20/0.18)]">
                <div className="relative overflow-hidden">
                  <img
                    src={dest.photo.src}
                    alt={dest.photo.alt}
                    width={1600}
                    height={1067}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-background backdrop-blur">
                    {dest.country}
                  </span>
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-semibold leading-tight text-white">
                    {dest.title}
                    <span className="mt-1 block text-sm font-medium tracking-wide text-white/85">
                      {dest.tagline}
                    </span>
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-safari-iris">
                    <MapPin className="h-3.5 w-3.5 text-safari-gold" aria-hidden="true" />
                    {dest.photo.place}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>
                  <Link
                    to="/destinations/$slug"
                    params={{ slug: dest.slug }}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-safari-gold/50 px-5 py-2.5 text-sm font-semibold text-safari-gold transition-all hover:bg-safari-gold hover:text-safari-gold-foreground"
                  >
                    Explore Itinerary <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
