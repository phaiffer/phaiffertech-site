import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 outline outline-2 outline-red-500 ${className}`}>
      {children}
    </div>
  );
}
