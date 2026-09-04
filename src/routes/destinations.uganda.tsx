import { createFileRoute } from "@tanstack/react-router";

import { CountrySection } from "@/components/africa/CountrySection";

export const Route = createFileRoute("/destinations/uganda")({
  head: () => ({
    meta: [
      { title: "Uganda Gorilla Trekking & Safari Destinations | 3jay Tour & Safari" },
      { name: "description", content: "Ten Uganda destinations including Bwindi gorilla trekking, Queen Elizabeth, Murchison Falls and Kibale \u2014 with permits guidance, trip lengths and estimated costs." },
      { property: "og:title", content: "Uganda Gorilla Trekking & Safari Destinations | 3jay Tour & Safari" },
      { property: "og:description", content: "Ten Uganda destinations including Bwindi gorilla trekking, Queen Elizabeth, Murchison Falls and Kibale \u2014 with permits guidance, trip lengths and estimated costs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/destinations/uganda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://wonder-nav-maker.lovable.app/destinations/uganda" },
    ],
  }),
  component: () => (
    <CountrySection
      code="uganda"
      intro={"Uganda pairs mountain gorillas and chimpanzees in ancient rainforest with savannah parks along the Albertine Rift, the Rwenzori peaks and the Nile at its source. Gorilla and chimpanzee permits are limited and priced separately, so early booking matters."}
      safetyNote={"Gorilla and chimpanzee trekking permits are issued by the Uganda Wildlife Authority, are capped in number each day and are reviewed for price periodically. We confirm current permit availability and pricing at the time of booking, and treks require reasonable fitness on steep, often muddy terrain."}
    />
  ),
});
