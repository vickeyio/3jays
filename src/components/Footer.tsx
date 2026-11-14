import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

import logoAsset from "@/assets/logo3jays.png.asset.json";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/", hash: "highlights", label: "Highlights" },
  { to: "/", hash: "itinerary", label: "Itinerary" },
  { to: "/about", label: "About Us" },
  { to: "/", hash: "contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/plan", label: "Plan My Trip" },
];

const destinationLinks = [
  { to: "/destinations", label: "All Destinations" },
  { to: "/destinations/kenya", label: "🇰🇪 Kenya" },
  { to: "/destinations/uganda", label: "🇺🇬 Uganda" },
  { to: "/destinations/tanzania", label: "🇹🇿 Tanzania" },
  { to: "/destinations/somalia", label: "🇸🇴 Somalia" },
  { to: "/tanzania-safaris", label: "Tanzania Safaris" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13V9.4a6.33 6.33 0 0 0-5.94 10.14 6.33 6.33 0 0 0 10.98-4.32V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.58-.12Z" />
    </svg>
  );
}

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/imotemusyoka" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/imotemusyoka" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@imotemusyoka" },
];

export function Footer() {
  return (
    <footer className="border-t border-safari-line bg-safari-bg">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_minmax(0,1fr)]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label="3 Jays Tours & Safaris — home">
              <img src={logoAsset.url} alt="3 Jays Tours & Safaris logo" className="h-10 w-auto" />
              <span className="font-display text-lg font-semibold text-foreground">
                3 Jays <span className="text-safari-gold">Tours &amp; Safaris</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Kenya-based, East Africa-focused — we craft unforgettable safari experiences across Kenya, Uganda, Tanzania and Somalia. Expert local guides, comfortable 4×4 vehicles and journeys tailored entirely to you.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`3 Jays Tours & Safaris on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-safari-line text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-safari-gold hover:text-safari-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links — two columns */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer quick links">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-gold">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {"hash" in link ? (
                      <Link to="/" hash={link.hash} className="text-sm text-muted-foreground transition-colors hover:text-safari-gold">
                        {link.label}
                      </Link>
                    ) : (
                      <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-safari-gold">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer destinations">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-gold">
                Destinations
              </h3>
              <ul className="mt-4 space-y-2.5">
                {destinationLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-safari-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact snippet */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-safari-gold">
              Safari desk
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>Mombasa, Kenya</li>
              <li>
                <a href="mailto:imotemusyoka@gmail.com" className="break-all transition-colors hover:text-safari-gold">
                  imotemusyoka@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254791239939" className="transition-colors hover:text-safari-gold">
                  +254 791 239 939
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-safari-line pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} 3 Jays Tours &amp; Safaris. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
