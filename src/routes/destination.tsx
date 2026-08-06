import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination")({
  head: () => ({
    meta: [
      { title: "Destinations — Wanderlust" },
      { name: "description", content: "Browse destinations for your next adventure." },
      { property: "og:title", content: "Destinations — Wanderlust" },
      { property: "og:description", content: "Browse destinations for your next adventure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Destinations</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        From tropical beaches to mountain retreats, find your perfect getaway.
      </p>
    </main>
  );
}
