import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wanderlust" },
      { name: "description", content: "A visual journey through our favorite places." },
      { property: "og:title", content: "Gallery — Wanderlust" },
      { property: "og:description", content: "A visual journey through our favorite places." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Gallery</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Moments captured from around the world.
      </p>
    </main>
  );
}
