import { createFileRoute } from "@tanstack/react-router";
import { ImagePlus } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Photographs from our safaris and cultural journeys across East Africa, with stories from the road.",
      },
      { property: "og:title", content: "Gallery — 3 Jays Tours & Safaris" },
      {
        property: "og:description",
        content: "Moments captured on 3 Jays safaris across East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const slots = Array.from({ length: 9 }, (_, i) => i + 1);

function GalleryPage() {
  return (
    <main>
      <section className="bg-brand-navy text-brand-navy-foreground">
        <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Gallery
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Moments from the road
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-navy-foreground/80">
            Photographs from our guides and travellers across Ethiopia, Djibouti, Kenya,
            Uganda, Sudan, South Sudan and Somalia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        {/* Intro text block — replace with your own words */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-border p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">Write something here</h2>
          <p className="mt-3 text-muted-foreground">
            This space is reserved for your gallery introduction — a short paragraph about the
            trips these photos come from, the seasons, or the people in them. Tell me the text
            you want and I will drop it straight in.
          </p>
        </div>

        {/* Photo grid — placeholders ready for your images */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((n) => (
            <figure key={n} className="overflow-hidden rounded-2xl border border-border">
              <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-2 bg-secondary/60 text-muted-foreground">
                <ImagePlus className="h-8 w-8" />
                <span className="text-sm font-medium">Photo slot {n}</span>
              </div>
              <figcaption className="space-y-1 p-4">
                <p className="font-semibold text-foreground">Caption title</p>
                <p className="text-sm text-muted-foreground">
                  Add a short line about where this photo was taken and what is happening in
                  it.
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Send me your photos and captions and I will place them into these slots.
        </p>
      </section>
    </main>
  );
}
