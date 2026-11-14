import { createFileRoute } from "@tanstack/react-router";

import { CountrySection } from "@/components/africa/CountrySection";

export const Route = createFileRoute("/destinations/tanzania")({
  head: () => ({
    meta: [
      { title: "Tanzania Safari Destinations \u2014 Serengeti, Ngorongoro, Zanzibar | 3 Jays Tours & Safaris" },
      { name: "description", content: "Twelve Tanzania destinations from the Serengeti and Ngorongoro Crater to Kilimanjaro, Zanzibar and the southern parks \u2014 with durations, estimated costs and best seasons." },
      { property: "og:title", content: "Tanzania Safari Destinations \u2014 Serengeti, Ngorongoro, Zanzibar | 3 Jays Tours & Safaris" },
      { property: "og:description", content: "Twelve Tanzania destinations from the Serengeti and Ngorongoro Crater to Kilimanjaro, Zanzibar and the southern parks \u2014 with durations, estimated costs and best seasons." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/destinations/tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://wonder-nav-maker.lovable.app/destinations/tanzania" },
    ],
  }),
  component: () => (
    <CountrySection
      code="tanzania"
      intro={"Tanzania holds the Serengeti and Ngorongoro Crater, Africa's highest summit and the reefs of Zanzibar, plus quieter southern parks such as Ruaha and Nyerere. This page expands our existing Tanzania safari packages with destination-level detail."}
      
    />
  ),
});
