import { createFileRoute } from "@tanstack/react-router";
import { QuoteRequestForm } from "@/components/safari/QuoteRequestForm";
import { whatsappLink } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 3jay Tour & Safari" },
      { name: "description", content: "Get in touch to plan your next trip." },
      { property: "og:title", content: "Contact — 3jay Tour & Safari" },
      { property: "og:description", content: "Get in touch to plan your next trip." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Have questions? We&apos;re here to help plan your journey.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="mailto:imotemusyoka@gmail.com" className="break-all text-safari-gold underline">imotemusyoka@gmail.com</a>
        <Button asChild variant="outline" className="rounded-full"><a href={whatsappLink("Hello 3jay Tour & Safari, I would like to enquire about your safari packages.")} target="_blank" rel="noreferrer">Contact us on WhatsApp</a></Button>
      </div>
      <div className="mt-10 max-w-2xl"><QuoteRequestForm source="contact_form" title="Plan your journey" /></div>
    </main>
  );
}
