import { Camera, MapPin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { travelMosaic } from "@/data/homepageMedia";

export function TravelMosaic() {
  return (
    <section aria-labelledby="journey-glimpse-heading" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
                Seen on the road
              </p>
              <h2 id="journey-glimpse-heading" className="mt-4 max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-5xl">
                Five glimpses. One remarkable region.
              </h2>
            </div>
            <Camera className="hidden h-8 w-8 text-safari-gold sm:block" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:grid-rows-2">
          {travelMosaic.map((photo, index) => (
            <figure
              key={photo.id}
              className={`group relative min-w-[82%] snap-center overflow-hidden rounded-2xl sm:min-w-0 ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                sizes={index === 0 ? "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 82vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 ? "aspect-[4/3] h-full sm:aspect-auto" : "aspect-4/3"}`}
              />
              <div className="absolute inset-0 overlay-card" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-brand-navy-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-safari-gold">{photo.category}</span>
                <span className="mt-1 flex items-center gap-1.5 font-display text-lg font-semibold">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> {photo.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}