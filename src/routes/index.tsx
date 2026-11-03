import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Car,
  Compass,
  Headset,
  MapPin,
  Sparkles,
} from "lucide-react";

import { countries, type Country } from "@/data/africaDestinations";
import {
  countryPhotos,
  itineraryPhotos,
  publicDomainPhotos,
} from "@/data/homepageMedia";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { TravelBlog } from "@/components/TravelBlog";
import { TravelHighlightsCarousel } from "@/components/TravelHighlightsCarousel";
import { TravelMosaic } from "@/components/TravelMosaic";

const countryImages: Record<Country, string> = {
  kenya: countryPhotos.kenya.src,
  uganda: countryPhotos.uganda.src,
  tanzania: countryPhotos.tanzania.src,
  somalia: countryPhotos.somalia.src,
};

const countryRoutes = {
  kenya: "/destinations/kenya",
  uganda: "/destinations/uganda",
  tanzania: "/destinations/tanzania",
  somalia: "/destinations/somalia",
} as const;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3jay Tour & Safari — Luxury Kenya Safaris" },
      {
        name: "description",
        content:
          "Discover Kenya in luxury with 3jay Tour & Safari — expert-guided Maasai Mara, Amboseli, Tsavo and Diani Coast journeys, tailored to you.",
      },
      { property: "og:title", content: "3jay Tour & Safari — Luxury Kenya Safaris" },
      {
        property: "og:description",
        content:
          "Savannah sunrises, warm lodge decks and breathtaking game drives. Tailor-made Kenyan safaris by local experts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const itineraries = [
  {
    image: itineraryPhotos.kenya.src,
    alt: itineraryPhotos.kenya.alt,
    name: "Kenya",
    tags: ["Maasai Mara", "Nairobi", "Indian Ocean coast"],
    description:
      "Track wildlife across open plains, discover Nairobi's energy, then slow down beside the Indian Ocean.",
  },
  {
    image: itineraryPhotos.uganda.src,
    alt: itineraryPhotos.uganda.alt,
    name: "Uganda",
    tags: ["Murchison Falls", "Forest trekking", "Great Lakes"],
    description:
      "Follow the Nile, explore wildlife-rich parks and make time for Uganda's forests, lakes and welcoming towns.",
  },
  {
    image: itineraryPhotos.tanzania.src,
    alt: itineraryPhotos.tanzania.alt,
    name: "Tanzania",
    tags: ["Serengeti", "Ngorongoro", "Zanzibar"],
    description:
      "Cross the Serengeti, look into the Ngorongoro Crater and finish with island time on Zanzibar.",
  },
  {
    image: itineraryPhotos.somalia.src,
    alt: itineraryPhotos.somalia.alt,
    name: "Somalia",
    tags: ["Mogadishu", "Coast", "Living culture"],
    description:
      "Experience coastal landscapes and cultural history through careful, locally informed trip planning.",
  },
];

const benefits = [
  {
    icon: Compass,
    title: "Experienced Local Guides",
    description: "Born-and-raised Kenyan guides who read the bush like a first language.",
  },
  {
    icon: Car,
    title: "Comfortable Safari Vehicles",
    description: "Custom 4×4 Land Cruisers with pop-up roofs, charging ports and coolers.",
  },
  {
    icon: Sparkles,
    title: "Tailor-Made Packages",
    description: "Every itinerary is built around your dates, pace and wishlist — never off the shelf.",
  },
  {
    icon: Headset,
    title: "24/7 Guest Support",
    description: "A real person on call around the clock, from arrival in Nairobi to your flight home.",
  },
];

function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Parallax background */}
      <img
        src={publicDomainPhotos.hero.src}
        alt={publicDomainPhotos.hero.alt}
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-110 object-cover will-change-transform"
        style={{ transform: `translateY(${offset * 0.22}px) scale(1.12)` }}
      />
      <div className="absolute inset-0 overlay-hero" />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 pt-32 pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:px-10">
        {/* Left: headline */}
        <div className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            ✦ Adventure Meets Comfort
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Discover Kenya in luxury, wildlife, and style.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Savannah sunrises, warm lodge decks and breathtaking game drives.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="itinerary"
              className="inline-flex items-center gap-2 rounded-full bg-safari-gold px-7 py-3.5 text-base font-semibold text-safari-gold-foreground shadow-[0_14px_36px_-12px] shadow-safari-gold/50 transition-all hover:-translate-y-0.5 hover:shadow-safari-gold/70"
            >
              View Itinerary <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="why-us"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-safari-gold hover:text-safari-gold"
            >
              Why Choose Us
            </Link>
          </div>
        </div>

        {/* Right: glass season card */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="glass-card rounded-3xl p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
              This Season
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground">
              Great Migration, bush dinners, and stunning sunsets await.
            </h2>
            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-safari-line pt-6">
              {[
                { value: "5", label: "Iconic parks" },
                { value: "4×4", label: "Safari vehicles" },
                { value: "100%", label: "Tailored trips" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2 mt-1 text-xs leading-snug text-foreground/70">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-3xl font-semibold text-safari-gold">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            Travel Highlights
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Every detail is shaped for wonder and comfort.
          </h2>
        </Reveal>

        <TravelHighlightsCarousel />
      </div>
    </section>
  );
}

function ItinerarySection() {
  return (
    <section id="itinerary" className="scroll-mt-24 bg-safari-surface/50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            Itinerary
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Explore Kenya Your Way
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Four signature journeys — combine them, slow them down, or let us build something
            entirely your own.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {itineraries.map((trip, i) => (
            <Reveal key={trip.name} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-safari-line bg-safari-surface transition-all duration-500 hover:-translate-y-2 hover:border-safari-gold/40 hover:shadow-[0_30px_60px_-20px_rgb(60_40_20/0.18)]">
                <div className="relative overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 overlay-card" />
                  <h3 className="absolute bottom-4 left-5 flex items-center gap-2 font-display text-2xl font-semibold text-white">
                    <MapPin className="h-5 w-5 text-safari-gold" /> {trip.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <ul className="flex flex-wrap gap-1.5">
                    {trip.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-safari-line px-2.5 py-1 text-[11px] font-medium text-foreground/75"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {trip.description}
                  </p>
                  <Link
                    to="/plan"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-safari-gold/50 px-5 py-2.5 text-sm font-semibold text-safari-gold transition-all hover:bg-safari-gold hover:text-safari-gold-foreground"
                  >
                    Explore Trip <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-safari-line">
            <img
              src={publicDomainPhotos.culture.src}
              alt={publicDomainPhotos.culture.alt}
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="absolute inset-0 overlay-card" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
              Why Choose Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Safari, perfected by the people who call it home.
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-safari-line bg-safari-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-safari-gold/40">
                  <b.icon className="h-6 w-6 text-safari-gold" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-safari-surface/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            Let&apos;s Plan Your Journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ready to explore Kenya with 3jay Tour and Safari?
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Share your travel dates and preferred experience and we&apos;ll help you build the
            perfect safari — from first game drive to final sundowner.
          </p>
          <a href="mailto:imotemusyoka@gmail.com" className="mt-5 inline-block break-all text-safari-gold underline">imotemusyoka@gmail.com</a>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            {[
              "Response within 24 hours, guaranteed",
              "No obligation — revise your itinerary freely",
              "Family, honeymoon, photography and group specialists",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

function ExploreAfricaSection() {
  return (
    <section id="explore-africa" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-iris">
            Explore Africa
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Four countries, one unforgettable journey.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Browse our destinations country by country — wildlife, mountains, rainforest and coast.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <Reveal key={c.code} delay={i * 90} className="h-full">
              <Link
                to={countryRoutes[c.code]}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-safari-line bg-safari-surface transition-all duration-500 hover:-translate-y-2 hover:border-safari-gold/50 hover:shadow-[0_30px_60px_-20px_rgb(60_40_20/0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safari-gold"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={countryImages[c.code]}
                    alt={`Safari landscape in ${c.name}`}
                    width={1024}
                    height={683}
                    loading="lazy"
                    decoding="async"
                    className="aspect-3/2 w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 overlay-card" />
                  <h3 className="absolute bottom-4 left-5 font-display text-2xl font-semibold text-white">
                    <span aria-hidden="true">{c.flag}</span> {c.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-iris">
                    {c.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-safari-gold/50 px-5 py-2.5 text-sm font-semibold text-safari-gold transition-all group-hover:bg-safari-gold group-hover:text-safari-gold-foreground">
                    View Safaris <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-safari-bg">
      <HeroSection />
      <TravelMosaic />
      <SafariDestinationsSection />
      <HighlightsSection />
      <ExploreAfricaSection />
      <ItinerarySection />
      <TravelBlog />
      <WhyUsSection />
      <ContactSection />
    </main>
  );
}

