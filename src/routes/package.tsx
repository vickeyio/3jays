import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/package")({
  head: () => ({
    meta: [
      { title: "Packages — Wanderlust" },
      { name: "description", content: "Explore our curated travel packages." },
      { property: "og:title", content: "Packages — Wanderlust" },
      { property: "og:description", content: "Explore our curated travel packages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagePage,
});

function PackagePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Travel Packages</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Discover hand-picked itineraries for every kind of traveler.
      </p>
    </main>
  );
}
