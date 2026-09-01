// Editable Tanzania page copy.
//
// The shape below is what the admin CMS (/admin/tanzania) stores in the
// `site_content` table under the key `tanzania`. Images stay in code and are
// matched to destination cards by slug — only the text is editable.

import {
  customOptions,
  destinationCards,
  exampleExclusions,
  exampleInclusions,
  experienceItems,
  faqs,
  finalCta,
  hero,
  intro,
  packageIdeas,
  seasons,
  tanzaniaSeo,
  whyTanzania,
} from "@/data/tanzania";

export type TanzaniaContent = {
  seo: { title: string; description: string; h1: string };
  hero: { label: string; heading: string; paragraph: string };
  intro: { heading: string; body: string[] };
  whyTanzania: { title: string; body: string }[];
  destinations: {
    slug: string;
    name: string;
    blurb: string;
    experience: string[];
    idealFor: string;
  }[];
  packageIdeas: { duration: string; title: string; summary: string; couldInclude: string[] }[];
  customOptions: string[];
  experienceItems: string[];
  seasons: { title: string; body: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { q: string; a: string }[];
  finalCta: { heading: string; body: string; ctaLabel: string };
};

export const defaultTanzaniaContent: TanzaniaContent = {
  seo: { ...tanzaniaSeo },
  hero: { label: hero.label, heading: hero.heading, paragraph: hero.paragraph },
  intro: { heading: intro.heading, body: [...intro.body] },
  whyTanzania: whyTanzania.map((w) => ({ ...w })),
  destinations: destinationCards.map((d) => ({
    slug: d.slug,
    name: d.name,
    blurb: d.blurb,
    experience: [...d.experience],
    idealFor: d.idealFor,
  })),
  packageIdeas: packageIdeas.map((p) => ({ ...p, couldInclude: [...p.couldInclude] })),
  customOptions: [...customOptions],
  experienceItems: [...experienceItems],
  seasons: seasons.map((s) => ({ ...s })),
  inclusions: [...exampleInclusions],
  exclusions: [...exampleExclusions],
  faqs: faqs.map((f) => ({ ...f })),
  finalCta: { ...finalCta },
};

/** Merge stored content over the defaults so partial/legacy rows still render. */
export function mergeTanzaniaContent(stored: unknown): TanzaniaContent {
  const d = defaultTanzaniaContent;
  if (!stored || typeof stored !== "object") return d;
  const s = stored as Partial<TanzaniaContent>;
  return {
    seo: { ...d.seo, ...(s.seo ?? {}) },
    hero: { ...d.hero, ...(s.hero ?? {}) },
    intro: { ...d.intro, ...(s.intro ?? {}) },
    whyTanzania: s.whyTanzania?.length ? s.whyTanzania : d.whyTanzania,
    destinations: s.destinations?.length ? s.destinations : d.destinations,
    packageIdeas: s.packageIdeas?.length ? s.packageIdeas : d.packageIdeas,
    customOptions: s.customOptions?.length ? s.customOptions : d.customOptions,
    experienceItems: s.experienceItems?.length ? s.experienceItems : d.experienceItems,
    seasons: s.seasons?.length ? s.seasons : d.seasons,
    inclusions: s.inclusions?.length ? s.inclusions : d.inclusions,
    exclusions: s.exclusions?.length ? s.exclusions : d.exclusions,
    faqs: s.faqs?.length ? s.faqs : d.faqs,
    finalCta: { ...d.finalCta, ...(s.finalCta ?? {}) },
  };
}
