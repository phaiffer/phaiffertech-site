"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { type NavItemKey, site } from "@/content/site";
import { type AppLocale, routing } from "@/i18n/routing";

function switchLocalePath(pathname: string, targetLocale: AppLocale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && routing.locales.includes(segments[1] as AppLocale)) {
    segments[1] = targetLocale;
    return segments.join("/");
  }
  return `/${targetLocale}`;
}

function withLocale(locale: AppLocale, path: string): string {
  return path ? `/${locale}${path}` : `/${locale}`;
}

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();

  const targetLocale = locale === "pt-br" ? "en-us" : "pt-br";
  const localeHref = switchLocalePath(pathname, targetLocale);
  const homeHref = withLocale(locale, "");
  const lakehouseHref = pathname === homeHref ? "#lakehouse" : `${homeHref}#lakehouse`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/80 backdrop-blur-xl">
      <Container className="flex h-28 items-center justify-between">
        <Link href={homeHref} className="group flex items-center gap-3">
          <div className="relative h-20 w-20 transition-transform group-hover:scale-105 md:h-24 md:w-24">
            <Image src="/logo.png" alt={site.brand.name} fill className="object-contain" priority />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-3xl font-black tracking-tighter text-white md:text-4xl">
              PHAIFFER <span className="text-brand-cyan">TECH</span>
            </div>
            <div className="text-[12px] font-bold tracking-[0.4em] text-ui-muted uppercase">SOFTWARE & DATA</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.key}
              href={withLocale(locale, item.path)}
              className="text-[11px] font-bold tracking-[0.22em] text-ui-muted transition-colors hover:text-brand-cyan"
            >
              {t(`nav.${item.key as NavItemKey}` as const).toUpperCase()}
            </Link>
          ))}

          <Link
            href={lakehouseHref}
            className="text-[11px] font-bold tracking-[0.22em] text-ui-muted transition-colors hover:text-brand-cyan"
          >
            {t("nav.lakehouse").toUpperCase()}
          </Link>

          <Link
            href={localeHref}
            aria-label={t("localeSwitcher.aria")}
            className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-ui-muted transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan"
          >
            {t("localeSwitcher.label")}
          </Link>

          <Link href={withLocale(locale, "/contact")}>
            <Button variant="primary" className="px-8 py-3.5 text-[12px] tracking-[0.2em] uppercase">
              {t("nav.consulting")}
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
