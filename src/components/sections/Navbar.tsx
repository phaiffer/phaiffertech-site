import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Enhanced Navbar for Phaiffer Tech:
 * - Increased logo scale (h-20 md:h-24) to dominate visually
 * - Tightened gap with brand text for cohesive identity
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/80 backdrop-blur-xl">
      <Container className="flex h-28 items-center justify-between">
        
        {/* Brand Identity: Larger logo scale compared to text */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="relative h-20 w-20 md:h-24 md:w-24 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt={site.brand.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-3xl font-black tracking-tighter text-white md:text-4xl">
              PHAIFFER <span className="text-brand-cyan">TECH</span>
            </div>
            <div className="text-[12px] font-bold tracking-[0.4em] text-ui-muted uppercase">
              SOFTWARE & DATA
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {site.nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-[12px] font-bold tracking-[0.25em] text-ui-muted hover:text-brand-cyan transition-colors"
            >
              {i.label.toUpperCase()}
            </Link>
          ))}

          <Link href="#contato">
            <Button variant="primary" className="px-10 py-3.5 text-[12px] tracking-[0.2em] uppercase">
              Consultoria
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
}