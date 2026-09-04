import { useState } from "react";
import { Play } from "lucide-react";

import type { DestinationVideo } from "@/data/africaDestinations";
import { countryInfo } from "@/data/africaDestinations";

/** Click-to-load YouTube facade: the iframe only loads after the user presses play. */
export function VideoCard({ video }: { video: DestinationVideo }) {
  const [playing, setPlaying] = useState(false);
  const info = countryInfo(video.country);

  return (
    <article className="overflow-hidden rounded-2xl border border-safari-line bg-safari-surface shadow-lg shadow-black/30">
      <div className="relative aspect-video bg-safari-raised">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group relative block h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={`Video thumbnail for ${video.title} — ${info.name}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center bg-safari-bg/35 transition-colors group-hover:bg-safari-bg/20">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-safari-gold text-safari-gold-foreground shadow-lg">
                <Play className="h-7 w-7 translate-x-0.5" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safari-gold">
          <span aria-hidden="true">{info.flag}</span> {info.name}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          Embedded from YouTube · {video.channel}
        </p>
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-safari-gold px-4 py-2 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            <Play className="h-4 w-4" aria-hidden="true" /> Watch Video
          </button>
        ) : null}
      </div>
    </article>
  );
}
