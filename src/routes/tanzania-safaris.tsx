import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Minus, Sparkles } from "lucide-react";

import { AdditionalPackages } from "@/components/safari/AdditionalPackages";
import { Reveal } from "@/components/Reveal";
import {
  customOptions,
  destinationCards,
  exampleExclusions,
  exampleInclusions,
  experienceImage,
  experienceItems,
  faqs,
  finalCta,
  hero,
  intro,
  packageIdeas,
  seasons,
  tanzaniaSeo,
  whyTanzania,
} from "@/data/tanzania";

const canonical = "https://wonder-nav-maker.lovable.app/tanzania-safaris";

export const Route = createFileRoute("/tanzania-safaris")({
  head: () => ({
    meta: [
      { title: tanzaniaSeo.title },
      { name: "description", content: tanzaniaSeo.description },
      { property: "og:title", content: tanzaniaSeo.title },
      { property: "og:description", content: tanzaniaSeo.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: TanzaniaSafarisPage,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-safari-gold">{children}</p>
  );
}

function TanzaniaSafarisPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-safari-bg via-safari-bg/75 to-safari-bg/40" />

        <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 lg:px-10">
          <Reveal>
            <SectionLabel>✦ {hero.label}</SectionLabel>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              {tanzaniaSeo.h1}
            </h1>
            <p className="mt-3 max-w-3xl font-display text-xl text-safari-gold sm:text-2xl">
              {hero.heading}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.paragraph}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to={hero.primaryCta.to}
                className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-7 py-3.5 text-base font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-full border border-safari-line px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1100px] px-6 py-20 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            {intro.heading}
          </h2>
          {intro.body.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* WHY TANZANIA */}
      <section className="border-y border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <Reveal>
            <SectionLabel>Why choose Tanzania</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              A safari region with genuine range
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyTanzania.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-safari-line bg-safari-surface p-6 transition-all hover:-translate-y-1 hover:border-safari-gold/50">
                  <Compass className="h-6 w-6 text-safari-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <Reveal>
          <SectionLabel>Top safari destinations</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Where a Tanzania safari usually takes you
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {destinationCards.map((d, i) => (
            <Reveal key={d.slug} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-safari-line bg-safari-surface">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={d.image.src}
                    alt={d.image.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{d.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d.blurb}</p>

                  <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                    What you may experience
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {d.experience.map((e) => (
                      <li key={e} className="flex gap-2 text-muted-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 rounded-xl bg-safari-raised/60 p-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for: </span>
                    {d.idealFor}
                  </p>

                  <div className="mt-6">
                    <Link
                      to="/plan"
                      className="inline-flex items-center gap-2 rounded-full border border-safari-line px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
                      aria-label={`Explore ${d.name}`}
                    >
                      Explore Destination <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-y border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <Reveal>
            <SectionLabel>Safari packages</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Example Tanzania safari durations
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              The outlines below are examples of what different trip lengths allow, not fixed
              itineraries. Exact routes, lodges and prices are confirmed in writing when we quote.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packageIdeas.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-safari-line bg-safari-surface p-6 transition-all hover:-translate-y-1 hover:border-safari-gold/50">
                  <span className="inline-flex w-fit rounded-full bg-safari-raised px-3 py-1 text-xs font-semibold uppercase tracking-wide text-safari-gold">
                    {p.duration}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {p.couldInclude.map((c) => (
                      <li key={c} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs italic text-muted-foreground/80">
                    Example / customisable outline
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      to="/safaris"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-safari-gold hover:underline"
                    >
                      See published packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdditionalPackages country="Tanzania" />

      {/* CUSTOM SAFARIS */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <Reveal>
          <div className="rounded-3xl border border-safari-line bg-safari-surface p-8 sm:p-12">
            <SectionLabel>Custom safaris</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Tell us how you like to travel and we will design around it
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              A personalised Tanzania safari can be shaped by any of the following. Share as much or
              as little as you like — we will fill in the rest and come back with options.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {customOptions.map((o) => (
                <li
                  key={o}
                  className="flex items-center gap-2 rounded-xl bg-safari-raised/60 px-4 py-3 text-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <Link
              to="/plan"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-safari-gold px-7 py-3.5 text-base font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Design My Safari <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SAFARI EXPERIENCE */}
      <section className="border-y border-safari-line bg-safari-surface/40">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <img
              src={experienceImage.src}
              alt={experienceImage.alt}
              width={1280}
              height={860}
              loading="lazy"
              decoding="async"
              className="w-full rounded-3xl border border-safari-line object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionLabel>The safari experience</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              What your days in the bush can look like
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every trip differs, but most safari days settle into a comfortable rhythm. Wildlife is
              wild, so we describe what is possible rather than promising particular sightings.
            </p>
            <ul className="mt-7 space-y-3">
              {experienceItems.map((e) => (
                <li key={e} className="flex gap-3 text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHEN TO VISIT */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <Reveal>
          <SectionLabel>When to visit</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tanzania travels well all year — the experience simply changes
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {seasons.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-safari-line bg-safari-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INCLUSIONS / EXCLUSIONS */}
      <section className="border-y border-safari-line bg-safari-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <Reveal>
            <SectionLabel>Inclusions &amp; exclusions</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              What a Tanzania safari quote typically covers
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              These lists are examples to help you compare. Your written quotation will state exactly
              what is and is not included for your trip.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-safari-line bg-safari-surface p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Commonly included (example)
                </h3>
                <ul className="mt-4 space-y-2">
                  {exampleInclusions.map((x) => (
                    <li key={x} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-safari-gold" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-safari-line bg-safari-surface p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Commonly excluded (example)
                </h3>
                <ul className="mt-4 space-y-2">
                  {exampleExclusions.map((x) => (
                    <li key={x} className="flex gap-3 text-muted-foreground">
                      <Minus className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[900px] px-6 py-20 lg:px-10">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tanzania safari questions, answered
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="group rounded-2xl border border-safari-line bg-safari-surface p-6 transition-colors hover:border-safari-gold/50">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        <Reveal>
          <div className="rounded-3xl border border-safari-gold/30 bg-safari-surface p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{finalCta.body}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-8 py-4 text-base font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                {finalCta.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/safaris"
                className="inline-flex items-center gap-2 rounded-full border border-safari-line px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
              >
                Browse safari packages
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
