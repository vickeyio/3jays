import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, X } from "lucide-react";

export const Route = createFileRoute("/package")({
  head: () => ({
    meta: [
      { title: "Safari Packages — 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Ready-made and tailor-made safari packages across East Africa — migration safaris, gorilla treks, Nubian pyramids and beach extensions.",
      },
      { property: "og:title", content: "Safari Packages — 3 Jays Tours & Safaris" },
      {
        property: "og:description",
        content:
          "Migration safaris, gorilla trekking, desert archaeology and coastal escapes — priced per person and fully customisable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagePage,
});

const packages = [
  {
    name: "Classic Kenya Safari",
    duration: "7 days / 6 nights",
    from: "$1,850 per person",
    countries: "Kenya",
    summary:
      "Maasai Mara, Lake Nakuru and Amboseli in one loop — the Big Five, flamingos and elephants under Kilimanjaro.",
    includes: ["Park fees", "Full board lodges", "4x4 with pop-up roof", "English-speaking guide"],
  },
  {
    name: "Gorillas & Chimps of Uganda",
    duration: "6 days / 5 nights",
    from: "$2,650 per person",
    countries: "Uganda",
    summary:
      "One gorilla permit in Bwindi, chimpanzee tracking in Kibale, and a boat safari on the Kazinga Channel.",
    includes: ["Gorilla permit", "Chimp permit", "Lodges & meals", "Private transfers"],
  },
  {
    name: "Ethiopia Historic Route",
    duration: "9 days / 8 nights",
    from: "$2,190 per person",
    countries: "Ethiopia",
    summary:
      "Lalibela, Gondar, Axum and the Simien Mountains — 2,000 years of history with highland trekking.",
    includes: ["Domestic flights", "Site entries", "Hotels & meals", "Local historian guide"],
  },
  {
    name: "Nubian Pyramids Expedition",
    duration: "8 days / 7 nights",
    from: "$2,400 per person",
    countries: "Sudan",
    summary:
      "Meroe, Naqa and Musawwarat with two nights of desert camping beside the pyramids.",
    includes: ["Permits", "Desert camping kit", "4x4 convoy", "All meals"],
  },
  {
    name: "Djibouti Sea & Salt",
    duration: "5 days / 4 nights",
    from: "$1,690 per person",
    countries: "Djibouti",
    summary:
      "Whale shark snorkelling in the Gulf of Tadjoura, Lake Assal salt flats and sunrise at Lake Abbe.",
    includes: ["Boat charter", "Snorkel gear", "Hotels & meals", "Guide & driver"],
  },
  {
    name: "Frontier East Africa",
    duration: "12 days / 11 nights",
    from: "$4,950 per person",
    countries: "South Sudan & Somalia",
    summary:
      "Mundari cattle camps, the Sudd wetlands, Laas Geel rock art and the beaches of Berbera.",
    includes: ["All permits", "Security liaison", "Internal flights", "Full board"],
  },
];

const excluded = [
  "International flights",
  "Visas and travel insurance",
  "Tips and personal items",
  "Drinks unless stated",
];

function PackagePage() {
  return (
    <main>
      <section className="bg-brand-navy text-brand-navy-foreground">
        <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Our packages
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Trips you can book today — or reshape entirely
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-navy-foreground/80">
            Every package below is a starting point. Change the dates, the lodges, the length
            or the countries and we will re-quote within 24 hours. Prices are per person
            sharing, based on two travellers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {p.countries}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">{p.name}</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> {p.duration}
              </p>
              <p className="mt-3 flex-1 text-muted-foreground">{p.summary}</p>

              <ul className="mt-4 space-y-1.5">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    {i}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-lg font-bold text-foreground">From {p.from}</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-navy-foreground transition-opacity hover:opacity-90"
              >
                Request this trip
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-secondary/60 p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">What is always included</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Airport pick-up and drop-off",
                "Accommodation as listed with meals",
                "Park and conservancy fees",
                "Professional driver-guide and 4x4 vehicle",
                "Bottled water on game drives",
                "24/7 support while you travel",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Not included</h2>
            <ul className="mt-3 space-y-2">
              {excluded.map((i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                  {i}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-foreground">How booking works</h3>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted-foreground">
              <li>Tell us your dates and interests</li>
              <li>We send a detailed itinerary and quote</li>
              <li>30% deposit secures permits and lodges</li>
              <li>Balance due 30 days before arrival</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
