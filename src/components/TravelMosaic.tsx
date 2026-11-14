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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-sm">
                  {photo.category}
                </span>
                <span className="mt-1.5 flex items-center gap-1.5 font-display text-lg font-semibold text-white [text-shadow:0_2px_8px_rgb(0_0_0/0.9),0_1px_3px_rgb(0_0_0/0.8)]">
                  <MapPin className="h-4 w-4 drop-shadow-[0_1px_3px_rgb(0_0_0/0.8)]" aria-hidden="true" /> {photo.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}