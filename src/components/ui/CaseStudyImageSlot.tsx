"use client";

import Image from "next/image";
import { useState } from "react";

type CaseStudyImageSlotProps = {
  src: string;
  alt: string;
  caption: string;
  placeholderLabel: string;
};

export function CaseStudyImageSlot({ src, alt, caption, placeholderLabel }: CaseStudyImageSlotProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-4">
      {hasError ? (
        <div className="flex h-56 w-full items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-white/20 bg-white/[0.01] text-sm text-ui-muted">
          {placeholderLabel}
        </div>
      ) : (
        <div className="relative h-56 w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            onError={() => setHasError(true)}
            className="rounded-[var(--radius-xl)] object-cover"
          />
        </div>
      )}
      <figcaption className="mt-3 text-xs tracking-[0.12em] text-ui-muted uppercase">{caption}</figcaption>
    </figure>
  );
}
