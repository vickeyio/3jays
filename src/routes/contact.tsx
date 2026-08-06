import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wanderlust" },
      { name: "description", content: "Get in touch to plan your next trip." },
      { property: "og:title", content: "Contact — Wanderlust" },
      { property: "og:description", content: "Get in touch to plan your next trip." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Have questions? We&apos;re here to help plan your journey.
      </p>
    </main>
  );
}
