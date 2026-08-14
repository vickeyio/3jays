import { useState } from "react";

import { destinations } from "@/data/destinations";

// Rough outlines (lng, lat) — simplified for an interactive picker, not for navigation.
const shapes: Record<string, [number, number][]> = {
  sudan: [
    [24, 22],
    [37, 22],
    [37, 18.5],
    [38.6, 18],
    [37, 17],
    [36.5, 14],
    [36, 12.7],
    [34, 10.7],
    [33.9, 9.5],
    [33, 9.5],
    [29, 9.7],
    [25, 10],
    [24, 9.5],
    [23.5, 15],
    [24, 20],
  ],
  "south-sudan": [
    [24, 9.5],
    [25, 10],
    [29, 9.7],
    [33, 9.5],
    [33.9, 9.5],
    [34, 10.7],
    [35, 9],
    [34.5, 7],
    [35.9, 5.2],
    [34, 4.6],
    [33.5, 3.8],
    [31, 3.7],
    [30.8, 4.5],
    [29.5, 4.6],
    [28, 4.3],
    [27, 5.6],
    [25.3, 7.4],
    [24, 8.7],
  ],
  ethiopia: [
    [35.9, 5.2],
    [34.5, 7],
    [35, 9],
    [34, 10.7],
    [36, 12.7],
    [36.5, 14],
    [37.5, 14.3],
    [39, 14.5],
    [40, 14.5],
    [41.8, 11],
    [43, 10.9],
    [43.5, 10],
    [45, 9],
    [46.9, 8],
    [45, 4.9],
    [41.8, 3.9],
    [40.8, 4.3],
    [39, 3.5],
    [38, 3.6],
    [35.9, 4.6],
  ],
  djibouti: [
    [41.8, 11],
    [43, 10.9],
    [43.4, 11.6],
    [42.6, 12.7],
  ],
  somalia: [
    [43, 10.9],
    [43.5, 10],
    [45, 9],
    [46.9, 8],
    [45, 4.9],
    [41.8, 3.9],
    [41, -1.6],
    [44, -0.9],
    [48, 3],
    [51.4, 11.9],
    [48, 11.5],
    [44.5, 11.5],
    [43.4, 11.6],
  ],
  kenya: [
    [33.9, -1],
    [34, 0.6],
    [34.9, 1.9],
    [35.9, 4.6],
    [38, 3.6],
    [39, 3.5],
    [40.8, 4.3],
    [41.8, 3.9],
    [41, -1.6],
    [40.1, -2.6],
    [39.2, -4.7],
    [37.6, -3.5],
    [34, -1.05],
  ],
  uganda: [
    [29.6, -1.35],
    [29.6, 1.1],
    [30.8, 3.6],
    [31, 3.7],
    [33.5, 3.8],
    [34, 4.6],
    [34.9, 1.9],
    [34, 0.6],
    [33.9, -1],
    [30.5, -1.05],
  ],
};

const LNG_MIN = 21;
const LNG_MAX = 52;
const LAT_MAX = 23;
const LAT_MIN = -5;

const x = (lng: number) => ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * 100;
const y = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100;

const points = (coords: [number, number][]) =>
  coords.map(([lng, lat]) => `${x(lng).toFixed(2)},${y(lat).toFixed(2)}`).join(" ");

const centroid = (coords: [number, number][]) => {
  const cx = coords.reduce((s, c) => s + x(c[0]), 0) / coords.length;
  const cy = coords.reduce((s, c) => s + y(c[1]), 0) / coords.length;
  return { cx, cy };
};

export function EastAfricaMap({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (slug: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 100 100"
        role="group"
        aria-label="Interactive map of East Africa — choose a country"
        className="h-auto w-full rounded-3xl bg-brand-navy p-2"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Interactive map of the seven countries 3 Jays travels in</title>
        {destinations.map((d) => {
          const coords = shapes[d.slug];
          if (!coords) return null;
          const isOn = selected === d.slug || hovered === d.slug;
          const { cx, cy } = centroid(coords);
          return (
            <g key={d.slug}>
              <polygon
                points={points(coords)}
                tabIndex={0}
                role="button"
                aria-label={`${d.name} — ${d.tagline}`}
                aria-pressed={selected === d.slug}
                onClick={() => onSelect(d.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(d.slug);
                  }
                }}
                onMouseEnter={() => setHovered(d.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(d.slug)}
                onBlur={() => setHovered(null)}
                className={`cursor-pointer outline-none transition-[fill] duration-200 ${
                  isOn ? "fill-brand-accent" : "fill-white/25 hover:fill-white/40"
                }`}
                stroke="white"
                strokeWidth={0.4}
                strokeLinejoin="round"
              />
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                className="pointer-events-none select-none fill-white font-semibold"
                style={{ fontSize: 2.6 }}
              >
                {d.name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        Tap a country on the map — or use the buttons below — to open its safari.
      </figcaption>
    </figure>
  );
}
