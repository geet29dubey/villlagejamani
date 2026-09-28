import manifest from "@/content/generated/image-manifest.json";

type ManifestEntry = {
  width: number;
  height: number;
  blur: string;
  variants: { width: number; src: string }[];
};

const images = manifest as Record<string, ManifestEntry>;

export function getImage(id: string): ManifestEntry | null {
  return images[id] ?? null;
}

export function largestSrc(id: string): string | null {
  const img = getImage(id);
  return img ? img.variants[img.variants.length - 1].src : null;
}

/**
 * Responsive, layout-stable image from the pre-optimised manifest.
 * Width/height attributes reserve space (no CLS); a tiny blurred preview shows while loading.
 */
export function ArchiveImage({
  id,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
}: {
  id: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const img = getImage(id);
  if (!img) return null;
  const srcSet = img.variants.map((v) => `${v.src} ${v.width}w`).join(", ");
  const fallback =
    img.variants.find((v) => v.width >= 960) ?? img.variants[img.variants.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- images are pre-optimised for static export
    <img
      src={fallback.src}
      srcSet={srcSet}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={["archive-img", className].filter(Boolean).join(" ")}
      style={{ backgroundImage: `url(${img.blur})` }}
    />
  );
}
