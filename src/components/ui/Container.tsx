import React from "react";

type Props = { children: React.ReactNode; className?: string };

export function Container({ children, className = "" }: Props) {
  /**
   * High-density layout container:
   * - Removed restrictive max-width to eliminate excessive side gaps
   * - Uses full-width fluid layout with minimal padding for edge-to-edge presence
   */
  return (
    <div className={`mx-auto w-full px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}