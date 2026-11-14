import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Heart, MapPin, TrendingUp, Users } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ownerPhotos } from "@/data/homepageMedia";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — 3 Jays Tours & Safaris | Our Story Since 2016" },
      {
        name: "description",
        content:
          "Learn how 3 Jays Tours & Safaris started from humble beginnings in 2016 and grew into a trusted Kenya safari company committed to wildlife, culture and community.",
      },
      { property: "og:title", content: "About 3 Jays Tours & Safaris" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://wonder-nav-maker.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden border-b border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pt-44">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
              Our Story
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built from the ground up, one safari at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              3 Jays Tours &amp; Safaris began taking shape in 2016. We started from the very
              bottom — and we have been moving upward ever since.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Our Story section ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Text */}
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
                How It Started
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                From a Facebook page to the open savannah
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  We built our first presence through a Facebook page, diligently sharing photos of
                  our work so that people could see us in action. We also established ourselves on
                  Instagram, which we have maintained ever since.
                </p>
                <p>
                  Our primary goal has always been to demonstrate our capacity for growth —
                  starting from humble beginnings and steadily advancing to higher levels. Every
                  trip we run is proof of that commitment.
                </p>
              </div>

              {/* Facebook reel CTA */}
              <a
                href="https://www.facebook.com/share/r/1FTnuUYWZA/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/50"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Watch us in action on Facebook
              </a>
            </Reveal>

            {/* Photo */}
            <Reveal delay={120}>
              <figure className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
                <img
                  src={ownerPhotos.lion.src}
                  alt={ownerPhotos.lion.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="flex items-center gap-1.5 bg-safari-surface px-5 py-3 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-safari-gold" aria-hidden="true" />
                  {ownerPhotos.lion.place} · Photo by 3 Jays Tours &amp; Safaris
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="border-y border-safari-line bg-safari-surface/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
              What Drives Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Three things we prioritise above all else
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Steady Growth",
                body: "We measure success not in years but in the trust earned with every client. Starting small gave us the discipline to improve continuously — and to never take a single guest experience for granted.",
              },
              {
                icon: Heart,
                title: "Community First",
                body: "We regularly visit orphanages and contribute to the well-being of the communities where we live and work. Tourism, for us, is a vehicle for positive impact — not just a business.",
              },
              {
                icon: Users,
                title: "Strength in Unity",
                body: "We believe that together we can reach new heights. Our guests, our guides, our local partners — every journey is built on collaboration, trust and a shared love of this remarkable region.",
              },
            ].map((pillar) => (
              <Reveal key={pillar.title}>
                <div className="flex h-full flex-col rounded-3xl border border-safari-line bg-safari-bg p-8 shadow-sm transition-shadow hover:shadow-md">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-safari-gold/10">
                    <pillar.icon className="h-6 w-6 text-safari-gold" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promoting Kenya section ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Photos grid */}
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-4">
                <figure className="overflow-hidden rounded-2xl">
                  <img
                    src={ownerPhotos.tsavo.src}
                    alt={ownerPhotos.tsavo.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
                <figure className="overflow-hidden rounded-2xl">
                  <img
                    src={ownerPhotos.vehicle.src}
                    alt={ownerPhotos.vehicle.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
                <figure className="col-span-2 overflow-hidden rounded-2xl">
                  <img
                    src={ownerPhotos.nakuruLounge.src}
                    alt={ownerPhotos.nakuruLounge.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/7] w-full object-cover"
                  />
                </figure>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
                Promoting Kenya
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Showcasing the country we love
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  We are committed to promoting Kenya's reputation by showcasing our national parks
                  and wildlife reserves — from Tsavo to the Maasai Mara. We also visit historical
                  sites like Fort Jesus and cities across the country, ensuring our clients gain a
                  comprehensive understanding of Kenya's rich history and culture.
                </p>
                <p>
                  Every itinerary we design is an invitation to see Kenya the way locals know it —
                  not just the highlights reel, but the living, breathing country behind it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Welcome / CTA ── */}
      <section className="border-t border-safari-line bg-safari-surface/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
              Welcome
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Welcome to 3 Jays Tours &amp; Safaris
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We look forward to providing you with a wonderful experience. With your support, we
              can continue reaching new heights — for there is strength in unity.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/plan"
                className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-7 py-3.5 text-sm font-semibold text-safari-gold-foreground shadow-[0_10px_30px_-10px] shadow-safari-gold/50 transition-all hover:-translate-y-0.5"
              >
                Plan My Safari <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-safari-line px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-safari-gold hover:text-safari-gold"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
