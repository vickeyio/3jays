import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wanderlust — Discover Your Next Adventure" },
      { name: "description", content: "Explore curated travel packages, destinations, and unforgettable experiences with Wanderlust." },
      { property: "og:title", content: "Wanderlust — Discover Your Next Adventure" },
      { property: "og:description", content: "Explore curated travel packages, destinations, and unforgettable experiences with Wanderlust." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Discover Your Next Adventure
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Curated travel packages, breathtaking destinations, and seamless planning — all in one place.
      </p>
    </main>
  );
}
