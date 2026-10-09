import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { listPackages } from "@/lib/safari.functions";
import { SafariCard, type PackageRow } from "@/components/safari/SafariCard";

export const Route = createFileRoute("/safaris/")({
  head: () => ({
    meta: [
      { title: "Safari Packages — 3jay Tour & Safari" },
      {
        name: "description",
        content:
          "Browse tailor-made East Africa safari packages across Kenya, Tanzania, Uganda, Rwanda and Zanzibar.",
      },
      { property: "og:title", content: "Safari Packages — 3jay Tour & Safari" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "Tailor-made East Africa safari packages with day-by-day itineraries and pricing.",
      },
    ],
  }),
  component: SafarisPage,
});

function SafarisPage() {
  const fetchPackages = useServerFn(listPackages);
  const { data, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: () => fetchPackages(),
  });

  const packages = (data ?? []) as unknown as PackageRow[];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-gold">
        Safari packages
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Choose your East African journey
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Every safari is fully tailor-made — durations, lodges and routes can be adjusted to suit
        you.
      </p>

      {isLoading ? (
        <p className="mt-10 text-muted-foreground">Loading safaris…</p>
      ) : packages.length === 0 ? (
        <p className="mt-10 text-muted-foreground">No safaris published yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <SafariCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}
    </main>
  );
}
