import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#expertise", label: "Expertise" },
  { href: "#stack", label: "Stack" },
  { href: "#carreira", label: "Carreira" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt="Phaiffer Tech"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide">
              PHAIFFER <span className="text-brand-cyan">TECH</span>
            </div>
            <div className="text-[11px] text-ui-muted">
              Architecture • Engineering • Data
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-xs font-semibold tracking-widest text-ui-muted hover:text-ui-fg transition"
            >
              {i.label.toUpperCase()}
            </Link>
          ))}

          <Link href="#contato">
            <Button variant="primary" className="px-4 py-2 text-xs tracking-widest">
              CONSULTORIA
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="#contato">
            <Button variant="secondary" className="px-4 py-2 text-xs">
              Contato
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
