import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";
import { ScreenshotCard } from "@/components/ui/ScreenshotCard";
import { type AppLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as AppLocale, namespace: "privateCases.iot.seo" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function IoTPlatformPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("privateCases.iot");

  const whatItShowsItems = [
    t("whatItShows.item1"),
    t("whatItShows.item2"),
    t("whatItShows.item3"),
    t("whatItShows.item4"),
  ];

  const whatItSolvesItems = [
    t("whatItSolves.item1"),
    t("whatItSolves.item2"),
    t("whatItSolves.item3"),
    t("whatItSolves.item4"),
  ];

  const architectureItems = [
    t("architecture.item1"),
    t("architecture.item2"),
    t("architecture.item3"),
    t("architecture.item4"),
  ];

  const securityGovernanceItems = [
    t("securityGovernance.item1"),
    t("securityGovernance.item2"),
    t("securityGovernance.item3"),
    t("securityGovernance.item4"),
  ];

  const evidenceItems = [
    t("evidence.item1"),
    t("evidence.item2"),
    t("evidence.item3"),
  ];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20">
        <Container>
          <p className="text-xs font-bold tracking-[0.28em] text-brand-cyan uppercase">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ui-muted">{t("subtitle")}</p>

          <p className="mt-4 inline-flex rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-brand-cyan uppercase">
            {t("privateRepoLabel")}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("whatItShows.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("whatItShows.subtitle")}</p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <ScreenshotCard
                  src="/cases/iot-system/dashboard.webp"
                  alt={t("screenshots.commandAlt")}
                  caption={t("screenshots.commandCaption")}
                />
                <ScreenshotCard
                  src="/cases/iot-system/observability.webp"
                  alt={t("screenshots.observabilityAlt")}
                  caption={t("screenshots.observabilityCaption")}
                />
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ui-muted">
                {whatItShowsItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("whatItSolves.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {whatItSolvesItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("architecture.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {architectureItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("securityGovernance.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {securityGovernanceItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("evidence.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {evidenceItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("executiveSummary.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("executiveSummary.body")}</p>
            </article>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex rounded-[var(--radius-xl)] border border-white/10 px-5 py-3 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
              >
                {t("caseStudiesCta")}
              </Link>
              <Link
                href={`/${locale}/contact?product=iot`}
                className="inline-flex rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
              >
                {t("consultingCta")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
