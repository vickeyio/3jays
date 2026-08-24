import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const destinations = [
  "Masai Mara",
  "Amboseli",
  "Tsavo",
  "Diani Coast",
  "Samburu",
  "Lake Nakuru",
  "Multi-park / Not sure yet",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  dates: string;
  travelers: string;
  destination: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  dates: "",
  travelers: "",
  destination: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-safari-line bg-safari-bg/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/30";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.phone.trim() && !/^[+0-9()\-\s]{7,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!form.dates.trim()) next.dates = "Tell us your rough travel dates.";
    const travelers = Number(form.travelers);
    if (!form.travelers || !Number.isFinite(travelers) || travelers < 1 || travelers > 30)
      next.travelers = "Between 1 and 30 travelers.";
    if (!form.destination) next.destination = "Choose a destination.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate request; backend wiring comes later.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="glass-card flex h-full flex-col items-center justify-center rounded-3xl p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-safari-gold" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Asante sana, {form.name.split(" ")[0]}!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your safari inquiry is on its way. One of our travel designers will reach out within
          24 hours with a tailored itinerary for {form.destination}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-7 rounded-full border border-safari-line px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-safari-gold hover:text-safari-gold"
        >
          Plan another safari
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="glass-card rounded-3xl p-6 sm:p-8"
      aria-label="Safari inquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className={labelClass}>Name *</label>
          <input
            id="inq-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>Email *</label>
          <input
            id="inq-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>Phone</label>
          <input
            id="inq-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 700 000 000"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="inq-dates" className={labelClass}>Travel Dates *</label>
          <input
            id="inq-dates"
            type="text"
            placeholder="e.g. 10–20 July 2026"
            value={form.dates}
            onChange={(e) => set("dates", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.dates}
          />
          {errors.dates && <p className="mt-1 text-xs text-destructive">{errors.dates}</p>}
        </div>
        <div>
          <label htmlFor="inq-travelers" className={labelClass}>Number of Travelers *</label>
          <input
            id="inq-travelers"
            type="number"
            min={1}
            max={30}
            placeholder="2"
            value={form.travelers}
            onChange={(e) => set("travelers", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.travelers}
          />
          {errors.travelers && <p className="mt-1 text-xs text-destructive">{errors.travelers}</p>}
        </div>
        <div>
          <label htmlFor="inq-destination" className={labelClass}>Preferred Destination *</label>
          <select
            id="inq-destination"
            value={form.destination}
            onChange={(e) => set("destination", e.target.value)}
            className={`${inputClass} appearance-none`}
            aria-invalid={!!errors.destination}
          >
            <option value="" disabled>Select a destination</option>
            {destinations.map((d) => (
              <option key={d} value={d} className="bg-safari-surface text-foreground">
                {d}
              </option>
            ))}
          </select>
          {errors.destination && <p className="mt-1 text-xs text-destructive">{errors.destination}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className={labelClass}>Message *</label>
          <textarea
            id="inq-message"
            rows={4}
            placeholder="Tell us about your dream safari — wildlife you want to see, lodge style, pace…"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className={`${inputClass} resize-none`}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-safari-gold px-6 py-3.5 text-base font-semibold text-safari-gold-foreground shadow-[0_14px_36px_-12px] shadow-safari-gold/50 transition-all hover:-translate-y-0.5 hover:shadow-safari-gold/70 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Plan My Safari <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam, no obligation — just a tailored itinerary from our Nairobi team.
      </p>
    </form>
  );
}
