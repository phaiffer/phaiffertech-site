import Image from "next/image";

type ScreenshotCardProps = {
  src: string;
  alt: string;
  caption: string;
  sizes?: string;
};

export function ScreenshotCard({ src, alt, caption, sizes = "(min-width: 1024px) 50vw, 100vw" }: ScreenshotCardProps) {
  return (
    <figure className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-black/20">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className="mt-3 text-sm font-medium text-ui-muted">{caption}</figcaption>
    </figure>
  );
}
