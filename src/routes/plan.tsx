import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Loader2,
  MapPin,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import { destinations } from "@/data/destinations";
import { generateTripPlan, type TripPlan } from "@/lib/trip-planner.functions";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner — 3 Jays Tours & Safaris" },
      {
        name: "description",
        content:
          "Tell us where you want to go, your budget and your days — our planner drafts a day-by-day East Africa itinerary with hotels, activities and estimated costs.",
      },
      { property: "og:title", content: "AI Trip Planner — 3 Jays Tours & Safaris" },
      {
        property: "og:description",
        content:
          "Generate a realistic day-by-day East Africa itinerary with hotels, activities and budget estimates in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPage,
});

const budgetOptions = [
  { value: "shoestring (under $100/day)", label: "Shoestring — under $100/day" },
  { value: "mid-range ($150–$350/day)", label: "Mid-range — $150–$350/day" },
  { value: "comfort ($350–$700/day)", label: "Comfort — $350–$700/day" },
  { value: "luxury ($700+/day)", label: "Luxury — $700+/day" },
];

function PlanPage() {
  const [destination, setDestination] = useState("Kenya");
  const [days, setDays] = useState(7);
  const [budget, setBudget] = useState("mid-range ($150–$350/day)");
  const [travellers, setTravellers] = useState(2);
  const [interests, setInterests] = useState("");
  const [plan, setPlan] = useState<TripPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPlan(null);
    try {
      const result = await generateTripPlan({
        data: { destination, days, budget, travellers, interests },
      });
      setPlan(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            AI Trip Planner
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-navy-foreground sm:text-5xl">
            Your East Africa itinerary, drafted in seconds
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-navy-foreground/85">
            Answer five quick questions and our planner sketches a realistic day-by-day
            journey — lodges, parks, driving times and a budget estimate. Then our human
            guides refine it with you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[900px] px-6 py-14 lg:px-10">
        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="plan-destination"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <MapPin className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                Where do you want to travel?
              </label>
              <select
                id="plan-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                {destinations.map((d) => (
                  <option key={d.slug} value={d.name}>
                    {d.name}
                  </option>
                ))}
                <option value="Multi-country East Africa">
                  Multi-country — combine several
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="plan-days"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <CalendarDays className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                Number of days: {days}
              </label>
              <input
                id="plan-days"
                type="range"
                min={3}
                max={21}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="mt-4 w-full accent-brand-accent"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>3 days</span>
                <span>21 days</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="plan-budget"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Wallet className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                Budget per person
              </label>
              <select
                id="plan-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                {budgetOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="plan-travellers"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Users className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                Travellers
              </label>
              <input
                id="plan-travellers"
                type="number"
                min={1}
                max={20}
                value={travellers}
                onChange={(e) => setTravellers(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="plan-interests" className="text-sm font-semibold text-foreground">
              Anything you especially want to see? <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="plan-interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              rows={3}
              maxLength={300}
              placeholder="e.g. gorillas, the Great Migration, photography, beaches at the end…"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Planning your journey…
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                Generate my itinerary
              </>
            )}
          </button>
        </form>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-foreground"
          >
            {error}
          </div>
        )}

        {/* Result */}
        {plan && (
          <article className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Your draft itinerary
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-card-foreground">
              {plan.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{plan.summary}</p>

            <ol className="mt-8 space-y-5">
              {plan.days.map((day) => (
                <li
                  key={day.day}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{day.title}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                    {day.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-foreground">
                    <span className="font-semibold">Overnight:</span> {day.hotel}
                    {day.meals ? (
                      <>
                        {" "}
                        · <span className="font-semibold">Meals:</span> {day.meals}
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl bg-brand-navy p-6 text-brand-navy-foreground">
              <h3 className="text-lg font-semibold">Estimated budget</h3>
              <p className="mt-2">
                <span className="font-semibold">Per person:</span> {plan.estimatedBudget.perPerson}
              </p>
              <p>
                <span className="font-semibold">Group total:</span> {plan.estimatedBudget.total}
              </p>
              {plan.estimatedBudget.notes && (
                <p className="mt-2 text-sm text-brand-navy-foreground/80">
                  {plan.estimatedBudget.notes}
                </p>
              )}
            </div>

            {plan.tips && plan.tips.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">Good to know</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                  {plan.tips.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-8 text-sm text-muted-foreground">
              This is an AI-drafted starting point. Our local planners will confirm
              availability, exact lodges and current park fees.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 font-semibold text-brand-navy transition-opacity hover:opacity-90"
            >
              Refine this with a human planner
            </Link>
          </article>
        )}
      </section>
    </main>
  );
}
