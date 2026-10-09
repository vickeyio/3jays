import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2 } from "lucide-react";

import { submitInquiry } from "@/lib/safari.functions";
import { whatsappLink } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";

type Props = {
  safariName?: string;
  destination?: string;
  duration?: string;
  source?: "quote_request" | "quick_inquiry" | "contact_form";
  title?: string;
  compact?: boolean;
};

const field =
  "w-full rounded-lg border border-safari-line bg-safari-bg/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-safari-gold focus:outline-none focus:ring-2 focus:ring-safari-gold/40";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

export function QuoteRequestForm({
  safariName,
  destination,
  duration,
  source = "quote_request",
  title = "Request a Quote",
  compact = false,
}: Props) {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);
    try {
      await send({
        data: {
          customer_name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? "") || null,
          country: String(form.get("country") ?? "") || null,
          travel_date: String(form.get("travel_date") ?? "") || null,
          adults: Number(form.get("adults") ?? 2),
          children: Number(form.get("children") ?? 0),
          destination: destination ?? (String(form.get("destination") ?? "") || null),
          safari_package: safariName ?? null,
          duration: duration ?? (String(form.get("duration") ?? "") || null),
          budget: String(form.get("budget") ?? "") || null,
          accommodation_preference: String(form.get("accommodation") ?? "") || null,
          message: String(form.get("message") ?? "") || null,
          source,
        },
      });
      setStatus("done");
    } catch (err) {
      setError("We could not send that just now. Please try WhatsApp or email us directly.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-safari-gold/40 bg-safari-surface p-6 text-center">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Thank you! Your request has been received.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A safari specialist will reply with exact pricing and availability, usually within a few
           hours.
        </p>
        <a
          href={whatsappLink(
            safariName
              ? `Hello, I am interested in the ${safariName}. Please send me more information and pricing.`
              : "Hello, I am interested in booking a safari and would like more information.",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground"
        >
          Contact us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-safari-line bg-safari-surface/80 p-6 backdrop-blur"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      {safariName ? (
        <p className="mt-1 text-sm text-muted-foreground">
          {safariName}
          {duration ? ` · ${duration}` : ""}
          {destination ? ` · ${destination}` : ""}
        </p>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="q-name">
            Full name
          </label>
          <input id="q-name" name="name" required minLength={2} className={`mt-1 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="q-email">
            Email
          </label>
          <input id="q-email" name="email" type="email" required className={`mt-1 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="q-phone">
            Phone / WhatsApp
          </label>
          <input id="q-phone" name="phone" className={`mt-1 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="q-country">
            Country
          </label>
          <input id="q-country" name="country" className={`mt-1 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="q-date">
            Travel date
          </label>
          <input id="q-date" name="travel_date" type="date" className={`mt-1 ${field}`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls} htmlFor="q-adults">
              Adults
            </label>
            <input
              id="q-adults"
              name="adults"
              type="number"
              min={1}
              max={40}
              defaultValue={2}
              className={`mt-1 ${field}`}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-children">
              Children
            </label>
            <input
              id="q-children"
              name="children"
              type="number"
              min={0}
              max={20}
              defaultValue={0}
              className={`mt-1 ${field}`}
            />
          </div>
        </div>

        {!safariName ? (
          <>
            <div>
              <label className={labelCls} htmlFor="q-dest">
                Destination
              </label>
              <select id="q-dest" name="destination" className={`mt-1 ${field}`} defaultValue="">
                <option value="">Not sure yet</option>
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Uganda</option>
                <option>Rwanda</option>
                <option>Zanzibar</option>
                <option>Kenya &amp; Tanzania</option>
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="q-duration">
                Safari duration
              </label>
              <select id="q-duration" name="duration" className={`mt-1 ${field}`} defaultValue="">
                <option value="">Flexible</option>
                <option>1–2 Days</option>
                <option>3–4 Days</option>
                <option>5–7 Days</option>
                <option>8–14 Days</option>
                <option>14+ Days</option>
              </select>
            </div>
          </>
        ) : null}

        <div>
          <label className={labelCls} htmlFor="q-acc">
            Accommodation preference
          </label>
          <select id="q-acc" name="accommodation" className={`mt-1 ${field}`} defaultValue="">
            <option value="">No preference</option>
            <option>Lodge</option>
            <option>Tented Camp</option>
            <option>Luxury Lodge</option>
            <option>Luxury Tented Camp</option>
            <option>Mixed</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="q-budget">
            Budget range
          </label>
          <select id="q-budget" name="budget" className={`mt-1 ${field}`} defaultValue="">
            <option value="">Tell us later</option>
            <option>Under $1,000 pp</option>
            <option>$1,000 – $2,500 pp</option>
            <option>$2,500 – $5,000 pp</option>
            <option>$5,000+ pp</option>
          </select>
        </div>
      </div>

      {!compact ? (
        <div className="mt-4">
          <label className={labelCls} htmlFor="q-message">
            Additional requests
          </label>
          <textarea id="q-message" name="message" rows={4} className={`mt-1 ${field}`} />
        </div>
      ) : null}

      {error ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
          {" "}<a href="mailto:imotemusyoka@gmail.com" className="underline">imotemusyoka@gmail.com</a>
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex h-auto min-h-11 w-full items-center justify-center gap-2 rounded-full bg-safari-gold px-6 py-3 text-sm font-semibold text-safari-gold-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : null}
        {status === "sending" ? "Sending…" : "Request My Quote"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No account needed — we reply by email or WhatsApp.
      </p>
    </form>
  );
}
