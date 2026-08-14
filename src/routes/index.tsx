import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, Users } from "lucide-react";

import heroImage from "@/assets/hero-safari.webp";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3 Jays Tours & Safaris — East Africa Safari Specialists" },
      {
        name: "description",
        content:
          "Tailor-made safaris and cultural journeys across Ethiopia, Djibouti, Kenya, Uganda, Sudan, South Sudan and Somalia, run by local experts.",
      },
      { property: "og:title", content: "3 Jays Tours & Safaris — East Africa Safari Specialists" },
      {
        property: "og:description",
        content:
          "Tailor-made safaris across seven East African countries, designed and guided by locals who know them best.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const blogPosts = [
  {
    title: "When to see the Great Migration in the Maasai Mara",
    date: "July 2026",
    excerpt:
      "River crossings peak between late July and early October. Here is how to time your days in the Mara so you are parked at the right bend of the Mara River when the herds go.",
  },
  {
    title: "Gorilla trekking in Bwindi: what nobody tells you",
    date: "June 2026",
    excerpt:
      "Permits, fitness, porters, and the hour that changes people. A practical guide to preparing for the most emotional sixty minutes of your travelling life.",
  },
  {
    title: "Sudan's pyramids: more than Egypt, a fraction of the crowds",
    date: "May 2026",
    excerpt:
      "Meroe holds over 200 Nubian pyramids and most mornings you will have them entirely to yourself. Here is how to get there and what to expect on the ground.",
  },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Sunset over the East African savanna with elephants and a safari vehicle"
          width={1920}
          height={1080}
          className="h-[60vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              3 Jays Tours &amp; Safaris
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-navy-foreground sm:text-6xl">
              East Africa, the way locals would show you
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-navy-foreground/85">
              Hand-built safaris and cultural journeys across seven countries — with the
              guides, camps and timing that turn a holiday into the story you tell for years.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/destination"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
              >
                Explore destinations <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/package"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy-foreground/40 px-6 py-3 text-base font-semibold text-brand-navy-foreground transition-colors hover:bg-brand-navy-foreground/10"
              >
                View packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Locally owned, locally guided",
              body: "Every itinerary is designed and led by guides who grew up in the regions you visit.",
            },
            {
              icon: ShieldCheck,
              title: "Safe, licensed and insured",
              body: "Fully licensed operations, well-maintained 4x4s and 24/7 support while you travel.",
            },
            {
              icon: Users,
              title: "Private and small group",
              body: "No crowded buses. Family trips, honeymoons, photographers and small groups only.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border p-6">
              <f.icon className="h-7 w-7 text-brand-accent" />
              <h2 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h2>
              <p className="mt-2 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destination teasers */}
      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Seven countries we know inside out
              </h2>
              <p className="mt-2 text-muted-foreground">
                Ethiopia · Djibouti · Kenya · Uganda · Sudan · South Sudan · Somalia
              </p>
            </div>
            <Link
              to="/destination"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-accent"
            >
              See all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 4).map((d) => (
              <Link
                key={d.slug}
                to="/destination"
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          From the 3 Jays journal
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Travel notes, timing tips and stories from the road, written by our guides.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-border p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {post.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{post.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-[1440px] px-6 py-14 text-center lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy-foreground">
            Ready to plan your journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-navy-foreground/80">
            Tell us your dates, your budget and what you dream of seeing. We will design the
            rest.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 font-semibold text-brand-navy transition-opacity hover:opacity-90"
          >
            Start planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
