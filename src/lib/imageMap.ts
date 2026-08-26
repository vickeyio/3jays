// Resolves database-stored asset paths (e.g. "/src/assets/it-mara.jpg") to
// hashed build URLs so images work in dev and production.
const assets = import.meta.glob("/src/assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function resolveImage(path?: string | null): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;
  return assets[path] ?? assets[`/src/assets/${path.split("/").pop()}`];
}
