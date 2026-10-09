import { Link } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PackageQuoteButton } from "@/components/safari/PackageQuoteButton";
import { additionalPackages } from "@/data/additionalPackages";

export function AdditionalPackages({ country }: { country?: "Kenya" | "Tanzania" }) {
  const packages = additionalPackages.filter((p) => !country || p.country === country);
  return (
    <section id="safari-packages" className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-16 lg:px-10 lg:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-safari-gold">Safari packages</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">{country ? `${country} journeys` : "More journeys to discover"}</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 60} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-safari-line bg-safari-surface transition-all duration-500 hover:-translate-y-1 hover:border-safari-gold/50">
            <img src={p.photo.src} alt={p.photo.alt} width={1200} height={800} loading="lazy" decoding="async" className="aspect-3/2 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-safari-gold">{p.country}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4 text-safari-gold" />{p.days} Days / {p.days - 1} Nights</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">{p.itinerary.map((day, index) => <li key={day}><span className="font-semibold text-foreground">Day {index + 1}: </span>{day}</li>)}</ol>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <Button asChild className="h-auto min-h-11 rounded-full px-4"><Link to="/destinations/$slug" params={{ slug: p.destinationSlug }}>Explore Destination <ArrowRight className="h-4 w-4" /></Link></Button>
                <PackageQuoteButton name={p.title} destination={p.country} duration={`${p.days} Days / ${p.days - 1} Nights`} />
              </div>
              <a href={p.photo.source} target="_blank" rel="noreferrer" className="mt-4 text-xs text-muted-foreground underline">Photo: {p.photo.creator} · {p.photo.license}</a>
            </div>
          </article>
        </Reveal>)}
      </div>
    </section>
  );
}