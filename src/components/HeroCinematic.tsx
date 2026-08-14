import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, Sparkles } from "lucide-react";

import heroPoster from "@/assets/hero-safari.webp";
import heroVideo from "@/assets/hero-eastafrica.mp4.asset.json";
import { destinations } from "@/data/destinations";

export function HeroCinematic() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [offset, setOffset] = useState(0);
  const frame = useRef<number | null>(null);

  // Subtle parallax: the video drifts slower than the page scroll.
  useEffect(() => {
    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        setOffset(Math.min(window.scrollY, 900) * 0.3);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const suggestions = query.trim()
    ? destinations
        .filter((d) =>
          `${d.name} ${d.tagline} ${d.highlights.join(" ")}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
        )
        .slice(0, 5)
    : [];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = suggestions[0];
    if (match) {
      navigate({ to: "/destination", search: { country: match.slug } });
    } else {
      navigate({ to: "/plan" });
    }
  };

  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
      >
        <video
          className="h-full w-full object-cover"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Aerial footage of elephants crossing the East African savanna at golden hour"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/75 via-brand-navy/55 to-brand-navy/90" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <p
            className="animate-fade-up text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent"
            style={{ animationDelay: "80ms" }}
          >
            3 Jays Tours &amp; Safaris
          </p>
          <h1
            className="animate-fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "220ms" }}
          >
            East Africa, the way locals would show you
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg text-brand-navy-foreground/90"
            style={{ animationDelay: "380ms" }}
          >
            Seven countries. Gorillas, migrations, pyramids and reefs — planned around your
            dates, your budget and the things you actually want to see.
          </p>

          <form
            onSubmit={submit}
            role="search"
            className="animate-fade-up mt-9 max-w-xl"
            style={{ animationDelay: "520ms" }}
          >
            <label htmlFor="hero-search" className="sr-only">
              Search destinations and experiences
            </label>
            <div
              className={`flex items-center gap-2 rounded-full border bg-brand-navy/70 px-4 py-2 backdrop-blur transition-all duration-300 ${
                focused
                  ? "border-brand-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand-accent)_25%,transparent)]"
                  : "border-brand-navy-foreground/35"
              }`}
            >
              <Search
                className="h-5 w-5 shrink-0 text-brand-accent"
                aria-hidden="true"
              />
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Try “gorillas”, “Maasai Mara”, “pyramids”…"
                className="w-full bg-transparent py-2 text-brand-navy-foreground placeholder:text-brand-navy-foreground/60 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-brand-navy transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </div>

            {focused && suggestions.length > 0 && (
              <ul className="mt-2 overflow-hidden rounded-2xl border border-brand-navy-foreground/20 bg-brand-navy/95 backdrop-blur">
                {suggestions.map((d) => (
                  <li key={d.slug}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() =>
                        navigate({ to: "/destination", search: { country: d.slug } })
                      }
                      className="block w-full px-5 py-3 text-left text-brand-navy-foreground transition-colors hover:bg-brand-navy-foreground/10"
                    >
                      <span className="font-semibold">{d.name}</span>
                      <span className="ml-2 text-sm text-brand-navy-foreground/70">
                        {d.tagline}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </form>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "660ms" }}
          >
            <Link
              to="/plan"
              className="animate-soft-pulse inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy transition-transform hover:scale-[1.03]"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Plan My Trip
            </Link>
            <Link
              to="/destination"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy-foreground/50 px-7 py-4 text-base font-semibold text-brand-navy-foreground transition-colors hover:bg-brand-navy-foreground/10"
            >
              Explore the map <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
