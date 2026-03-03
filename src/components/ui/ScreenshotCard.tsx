"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type ScreenshotCardProps = {
  src: string;
  alt: string;
  caption: string;
  sizes?: string;
  zoomLabel?: string;
  closeLabel?: string;
};

export function ScreenshotCard({
  src,
  alt,
  caption,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  zoomLabel = "Click to zoom",
  closeLabel = "Close",
}: ScreenshotCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <figure className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-4 shadow-[0_12px_32px_rgba(2,6,23,0.28)]">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${zoomLabel}: ${caption}`}
          className="group block w-full text-left"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-black/20">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="rounded-[var(--radius-xl)] object-contain p-1 transition-transform duration-200 group-hover:scale-[1.01]"
            />
          </div>
        </button>
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm font-medium text-ui-muted">
          <span>{caption}</span>
          <span className="text-[11px] font-semibold tracking-[0.12em] text-brand-cyan uppercase">{zoomLabel}</span>
        </figcaption>
      </figure>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="presentation">
          <button
            type="button"
            aria-label={closeLabel}
            className="absolute inset-0 bg-black/85"
            onClick={() => setIsOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative z-10 w-full max-w-6xl rounded-[var(--radius-xl)] border border-white/15 bg-brand-navy p-3 shadow-[0_24px_80px_rgba(2,6,23,0.65)] sm:p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p id={dialogTitleId} className="text-sm font-semibold text-ui-fg">
                {caption}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/20 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-ui-fg uppercase transition-colors hover:border-brand-cyan"
              >
                {closeLabel}
              </button>
            </div>

            <div className="relative h-[72vh] w-full overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-black/30">
              <Image src={src} alt={alt} fill sizes="100vw" className="object-contain p-2" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
