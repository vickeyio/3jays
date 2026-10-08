import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { travelHighlights } from "@/data/homepageMedia";

const AUTOPLAY_DELAY = 5500;

export function TravelHighlightsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateSelected = useCallback(() => {
    if (api) setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateSelected();
    api.on("select", updateSelected);
    return () => {
      api.off("select", updateSelected);
    };
  }, [api, updateSelected]);

  useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => api.scrollNext(), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [api, paused]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: "start" }}
      className="mt-12"
      aria-label="Travel highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <CarouselContent>
        {travelHighlights.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <article className="group h-full overflow-hidden rounded-2xl border border-safari-line bg-safari-surface transition-all duration-500 hover:-translate-y-1 hover:border-safari-gold/40 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src={item.src} alt={item.alt} width={1600} height={1067} loading="lazy" decoding="async" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-safari-bg/85 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-safari-gold" aria-hidden="true" /> {item.place}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{item.category}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="group" aria-label="Choose a travel highlight">
          {travelHighlights.map((item, index) => (
            <Button key={item.id} type="button" variant="ghost" size="icon" onClick={() => api?.scrollTo(index)} aria-label={`Show ${item.category}`} aria-current={selected === index ? "true" : undefined} className="h-8 w-8 rounded-full p-0 hover:bg-transparent">
              <span className={`block h-2.5 rounded-full transition-all ${selected === index ? "w-8 bg-safari-gold" : "w-2.5 bg-safari-raised group-hover:bg-safari-gold/60"}`} />
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="icon" className="rounded-full border-safari-line" onClick={() => api?.scrollPrev()} aria-label="Previous travel highlight"><ChevronLeft className="h-4 w-4" /></Button>
          <Button type="button" variant="outline" size="icon" className="rounded-full border-safari-line" onClick={() => api?.scrollNext()} aria-label="Next travel highlight"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </Carousel>
  );
}