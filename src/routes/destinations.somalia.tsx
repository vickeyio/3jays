import { createFileRoute } from "@tanstack/react-router";

import { CountrySection } from "@/components/africa/CountrySection";

export const Route = createFileRoute("/destinations/somalia")({
  head: () => ({
    meta: [
      { title: "Somalia & Somaliland Tourism \u2014 Laas Geel, Berbera, Mogadishu | 3 Jays Tours & Safaris" },
      { name: "description", content: "Ten Somalia and Somaliland destinations including Laas Geel rock art, Berbera beaches and the Cal Madow mountains, with clear travel and safety information." },
      { property: "og:title", content: "Somalia & Somaliland Tourism \u2014 Laas Geel, Berbera, Mogadishu | 3 Jays Tours & Safaris" },
      { property: "og:description", content: "Ten Somalia and Somaliland destinations including Laas Geel rock art, Berbera beaches and the Cal Madow mountains, with clear travel and safety information." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/destinations/somalia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://wonder-nav-maker.lovable.app/destinations/somalia" },
    ],
  }),
  component: () => (
    <CountrySection
      code="somalia"
      intro={"Somalia has Africa's longest coastline, the Neolithic paintings of Laas Geel and the juniper forests of Cal Madow. This is pioneering travel that needs careful planning, local guiding and up-to-date official advice."}
      safetyNote={"Security conditions vary significantly by region across Somalia and Somaliland and can change at short notice. Always check your own government's current travel advisory before booking or travelling, confirm visa and regional permit requirements, and travel with reputable local operators and licensed guides. Some areas require pre-arranged permits or escorts. We do not make safety guarantees and plan any itinerary around current official advice."}
    />
  ),
});
