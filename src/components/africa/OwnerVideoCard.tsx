import { Video } from "lucide-react";

export type OwnerVideo = {
  id: string;
  src: string;   // path under /public, e.g. "/videos/elephant.mp4"
  poster?: string;
  title: string;
  description: string;
  country: string;
  flag: string;
};

export function OwnerVideoCard({ video }: { video: OwnerVideo }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-safari-line bg-safari-surface shadow-lg shadow-black/30">
      <div className="relative aspect-video bg-safari-raised">
        <video
          src={video.src}
          poster={video.poster}
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          aria-label={video.title}
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safari-gold">
          <span aria-hidden="true">{video.flag}</span> {video.country}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Video className="h-3.5 w-3.5" aria-hidden="true" />
          Filmed by 3 Jays Tours &amp; Safaris · Kenya
        </p>
      </div>
    </article>
  );
}
