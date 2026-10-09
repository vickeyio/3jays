import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/logo3jays.png.asset.json";
import { Button } from "@/components/ui/button";

const sectionLinks = [
  { hash: "highlights", label: "Highlights" },
  { hash: "itinerary", label: "Itinerary" },
  { hash: "contact", label: "Contact" },
];

const pageLinks = [
  { to: "/destinations" as const, label: "Destinations" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/videos" as const, label: "Videos" },
];

const countryLinks = [
  { to: "/destinations/kenya" as const, label: "🇰🇪 Kenya" },
  { to: "/destinations/uganda" as const, label: "🇺🇬 Uganda" },
  { to: "/destinations/tanzania" as const, label: "🇹🇿 Tanzania" },
  { to: "/destinations/somalia" as const, label: "🇸🇴 Somalia" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-b border-safari-line bg-safari-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:h-[88px] lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="3jay Tour & Safari — home">
          <img
            src={logoAsset.url}
            alt="3jay Tour & Safari logo"
            className="h-9 w-auto lg:h-11"
          />
          <span className="hidden font-display text-lg font-semibold tracking-wide text-foreground sm:block">
            3jay <span className="text-safari-gold">Tour &amp; Safari</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 xl:flex xl:gap-8">
          {sectionLinks.map((link) => (
            <li key={link.hash}>
              <Link
                to="/"
                hash={link.hash}
                className="relative py-1 text-[15px] font-medium text-foreground/85 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-safari-gold after:transition-transform hover:text-safari-gold hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {pageLinks.map((link) => (
            <li key={link.to} className={link.to === "/destinations" ? "group relative" : ""}>
              <Link
                to={link.to}
                activeProps={{ className: "text-safari-gold after:scale-x-100" }}
                className="relative py-1 text-[15px] font-medium text-foreground/85 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-safari-gold after:transition-transform hover:text-safari-gold hover:after:scale-x-100"
              >
                {link.label}
              </Link>
              {link.to === "/destinations" ? (
                <ul className="invisible absolute left-0 top-full z-50 w-52 translate-y-1 rounded-xl border border-safari-line bg-safari-bg/95 p-2 opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {countryLinks.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        activeProps={{ className: "text-safari-gold" }}
                        className="block rounded-lg px-3 py-2 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-safari-surface hover:text-safari-gold"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}

          <li>
            <Link
              to="/plan"
              className="inline-flex items-center rounded-full bg-safari-gold px-5 py-2.5 text-[15px] font-semibold text-safari-gold-foreground shadow-[0_10px_30px_-10px] shadow-safari-gold/50 transition-all hover:-translate-y-0.5 hover:shadow-safari-gold/70"
            >
              Plan My Trip
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <Button variant="ghost"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:text-safari-gold xl:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile navigation */}
      <div
        inert={!mobileOpen}
        className={`overflow-y-auto bg-safari-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out xl:hidden ${
          mobileOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {sectionLinks.map((link) => (
            <li key={link.hash}>
              <Link
                to="/"
                hash={link.hash}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-safari-surface hover:text-safari-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {pageLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: "text-safari-gold" }}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-safari-surface hover:text-safari-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {countryLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: "text-safari-gold" }}
                className="block rounded-lg py-2.5 pl-7 pr-3 text-[15px] font-medium text-foreground/70 transition-colors hover:bg-safari-surface hover:text-safari-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="pt-2">
            <Link
              to="/plan"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-safari-gold px-5 py-3 text-center text-base font-semibold text-safari-gold-foreground"
            >
              Plan My Trip
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
