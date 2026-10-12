import { createFileRoute } from "@tanstack/react-router";

import { CountrySection } from "@/components/africa/CountrySection";
import { AdditionalPackages } from "@/components/safari/AdditionalPackages";

export const Route = createFileRoute("/destinations/kenya")({
  head: () => ({
    meta: [
      { title: "Kenya Safari Tours & Destinations \u2014 Maasai Mara, Amboseli, Diani | 3jay Tour & Safari" },
      { name: "description", content: "Ten Kenya destinations with trip lengths, daily activity times, estimated costs and best travel months \u2014 Maasai Mara, Amboseli, Tsavo, Diani Beach, Mount Kenya and more." },
      { property: "og:title", content: "Kenya Safari Tours & Destinations \u2014 Maasai Mara, Amboseli, Diani | 3jay Tour & Safari" },
      { property: "og:description", content: "Ten Kenya destinations with trip lengths, daily activity times, estimated costs and best travel months \u2014 Maasai Mara, Amboseli, Tsavo, Diani Beach, Mount Kenya and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wonder-nav-maker.lovable.app/destinations/kenya" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://wonder-nav-maker.lovable.app/destinations/kenya" },
    ],
  }),
  component: () => (
    <CountrySection
      code="kenya"
      intro={"Kenya combines the Great Migration plains of the Maasai Mara, elephants beneath Kilimanjaro in Amboseli, Rift Valley lakes and a warm Indian Ocean coast \u2014 often within a single week. These are the destinations we build Kenyan itineraries around."}

    >
      <AdditionalPackages country="Kenya" />
    </CountrySection>
  ),
});
