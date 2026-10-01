# Authentic Photography Homepage Enhancement

## Goal
Improve the existing 3jay Tour & Safari homepage with authentic public-domain travel photography and subtle premium interactions, while preserving the current architecture, navigation, routes, forms, backend features, branding, typography, and light visual theme.

## Existing sections to preserve
- **Header/navigation:** shared `Navbar` rendered by the root layout; all current page, country, section, and Plan My Trip links remain.
- **Hero:** homepage `HeroSection`; retain its headline, statistics, CTAs, and parallax behavior while replacing its image only if public-domain provenance cannot be verified.
- **Home travel images:** homepage highlight, itinerary, lodge, and country-card images.
- **Travel Highlights:** current three-card homepage section; expand into the requested five-experience carousel.
- **Explore Africa:** existing four-card homepage section for Kenya, Uganda, Tanzania, and Somalia; keep current routes and copy structure.
- **Itineraries:** current homepage itinerary cards; retain links and content while improving authentic country representation.
- **Blog:** an existing six-image `PhotoBlog` slideshow is available but not mounted; use it as the visual story section and add article-style blog cards on the homepage.
- **Footer:** shared `Footer` rendered by the root layout; keep all links and structure.

## Photography and licensing rules
- Use **public-domain/CC0 photographs only** for newly added or replacement media.
- Verify each selected file’s source page, author/creator, and public-domain status before use.
- Do not use AI image generation, scraped competitor media, unverified stock URLs, or copied website assets.
- Keep an in-project media manifest containing source, creator, public-domain statement/licence, destination, and descriptive alt text.
- Retain an existing image/video only when its provenance can be verified; replace or stop displaying uncertain homepage media.
- Download approved photographs, optimize them to responsive WebP/AVIF-sized assets, and serve them through the project asset flow rather than hotlinking.

## Homepage changes
1. **Hero**
   - Preserve text, CTAs, statistics, layout, and parallax.
   - Use a verified real public-domain East African travel photograph.
   - Add a very slow, reduced-motion-safe image drift and a restrained readability overlay.

2. **Travel image mosaic below the hero**
   - Add five visibly different public-domain photographs: wildlife, coast, culture/museum, historical site, and mountain/nature.
   - Use a featured-image grid on desktop and a touch-scroll carousel on mobile.
   - Include concise location/category labels and descriptive alt text.

3. **Travel Highlights carousel**
   - Replace the static three-card presentation with five experiences: Wildlife & Safari, Beaches & Islands, Historical Sites, Museums & Culture, and Mountains & Nature.
   - Reuse the installed carousel library for looping, swipe/touch support, previous/next controls, pagination, pause on hover/focus, and 5–6 second autoplay.
   - Keep controls accessible and respect reduced-motion preferences.

4. **Explore Africa**
   - Preserve the four existing country routes and copy.
   - Replace/retain imagery according to verified public-domain provenance for Kenya, Uganda, Tanzania, and Somalia.
   - Keep consistent aspect ratios, natural cropping, location cues, and subtle hover movement.

5. **Itineraries**
   - Keep the current itinerary cards and Plan links functional.
   - Present Kenya, Uganda, Tanzania, and Somalia with authentic public-domain travel photographs and destination-specific summaries.
   - Preserve estimated/planning language and avoid unsupported claims.

6. **Blog**
   - Mount and refine the existing visual story slideshow with verified public-domain photos.
   - Add responsive article cards with image, category, title, summary, date, and a clear Read More link to existing relevant pages or in-page story details—no dead or duplicate routes.
   - Use consistent image ratios, lazy loading, gentle zoom/lift effects, and descriptive alt text.

## Technical details
- Keep the shared root layout and existing route structure unchanged.
- Create focused homepage data/components rather than rewriting the entire route.
- Use semantic design tokens and existing button/link patterns.
- Use eager/high-priority loading only for the hero and first visible image; lazy-load all lower images and decode asynchronously.
- Add stable dimensions, responsive `sizes`, `object-cover`, and appropriate focal positioning.
- Do not modify authentication, database tables, server functions, forms, booking flows, or admin/CMS behavior.

## Verification
- Confirm every displayed travel image has recorded public-domain provenance and accurate destination/topic matching.
- Test autoplay, infinite loop, pause, controls, dots, keyboard behavior, and mobile swipe.
- Verify desktop at 1440px, tablet/laptop, and mobile at 375px and 430px.
- Check image cropping, text/button fit, no overlap or horizontal scrolling, readable contrast, and reduced-motion behavior.
- Recheck existing navigation, country cards, itinerary/package links, Plan My Trip, contact/inquiry, gallery, and footer links.
- Confirm no missing images, client errors, broken routes, or build errors.
