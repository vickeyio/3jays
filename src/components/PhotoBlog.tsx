import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";

import { photoStories } from "@/data/photoBlog";

const INTERVAL = 6000;

export function PhotoBlog() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + photoStories.length) % photoStories.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % photoStories.length);
    }, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const active = photoStories[index]!;

  return (
    <section
      className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10"
      aria-labelledby="photo-blog-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            id="photo-blog-heading"
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            Picture blog: East Africa, one frame at a time
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Beaches, national parks, the Maasai Mara, Nubian pyramids and more — the photos
            change every few seconds.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {playing ? "Pause slideshow" : "Play slideshow"}
        </button>
      </div>

      <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy shadow-lg">
          <div className="relative aspect-16/10 w-full">
            {photoStories.map((story, i) => (
              <img
                key={story.id}
                src={story.image}
                alt={story.alt}
                width={1600}
                height={1067}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                aria-hidden={i === index ? undefined : true}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === index ? "animate-ken-burns opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-navy to-transparent" />
            <p className="absolute bottom-5 left-6 flex items-center gap-2 text-sm font-semibold text-brand-navy-foreground">
              <MapPin className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              {active.place}
            </p>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Show previous photo"
              className="rounded-full bg-brand-navy/70 p-2 text-brand-navy-foreground transition-colors hover:bg-brand-navy"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Show next photo"
              className="rounded-full bg-brand-navy/70 p-2 text-brand-navy-foreground transition-colors hover:bg-brand-navy"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-border p-7">
          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {active.place}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">{active.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{active.story}</p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {photoStories.map((story, i) => (
              <li key={story.id}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    i === index
                      ? "bg-brand-navy text-brand-navy-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
                >
                  {story.place}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
