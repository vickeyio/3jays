import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/logo3jays.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/destination", label: "Destinations" },
  { to: "/package", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-navy text-brand-navy-foreground">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:h-[100px] lg:px-10">
        <Link to="/" className="flex items-center" aria-label="3 Jays Tours & Safaris — home">
          <img
            src={logoAsset.url}
            alt="3 Jays Tours & Safaris logo"
            className="h-10 w-auto lg:h-[54px]"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative py-1 text-[17px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-accent after:transition-transform hover:after:scale-x-100 ${
                  isActive(link.to)
                    ? "text-brand-accent after:scale-x-100"
                    : "text-brand-navy-foreground hover:text-brand-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy-foreground transition-colors hover:text-brand-accent md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-brand-navy-foreground/15 bg-brand-navy md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-2 py-3 text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-brand-accent"
                      : "text-brand-navy-foreground hover:text-brand-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
