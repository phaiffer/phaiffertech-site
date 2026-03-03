import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";
import { ScreenshotCard } from "@/components/ui/ScreenshotCard";
import { type AppLocale } from "@/i18n/routing";

const repositoryUrl = "https://github.com/phaiffer/enterprise-industrial-data-platform";

type Props = {
  params: Promise<{ locale: string }>;
};

const architectureMermaid = `flowchart LR
  S[Source Systems] --> B[Bronze Ingestion]
  B --> S1[Silver Standardization]
  S1 --> G[Gold Data Products]
  G --> R[Portfolio Reports]
  S1 --> Q[Quality Gates]
  Q --> R
  O[Observability + SLAs] --> R`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as AppLocale, namespace: "publicCases.enterpriseDataPlatform.seo" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function EnterpriseDataPlatformCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("publicCases.enterpriseDataPlatform");

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

  const dataFlowItems = [t("dataFlow.item1"), t("dataFlow.item2"), t("dataFlow.item3"), t("dataFlow.item4")];
  const slaItems = [t("slas.item1"), t("slas.item2"), t("slas.item3"), t("slas.item4")];
  const contractItems = [t("contracts.item1"), t("contracts.item2"), t("contracts.item3"), t("contracts.item4")];
  const qualityGateItems = [
    t("qualityGates.item1"),
    t("qualityGates.item2"),
    t("qualityGates.item3"),
    t("qualityGates.item4"),
  ];
  const observabilityItems = [
    t("observabilitySignals.item1"),
    t("observabilitySignals.item2"),
    t("observabilitySignals.item3"),
    t("observabilitySignals.item4"),
  ];
  const securityItems = [
    t("securityGovernance.item1"),
    t("securityGovernance.item2"),
    t("securityGovernance.item3"),
    t("securityGovernance.item4"),
  ];

  const evidenceArtifacts = [
    {
      href: repositoryUrl,
      label: t("evidenceArtifacts.repoLabel"),
      description: t("evidenceArtifacts.repoDescription"),
    },
    {
      href: `${repositoryUrl}/blob/main/docs/runbook.md`,
      label: t("evidenceArtifacts.runbookLabel"),
      description: t("evidenceArtifacts.runbookDescription"),
    },
    {
      href: `${repositoryUrl}/blob/main/docs/data_contracts.md`,
      label: t("evidenceArtifacts.contractsLabel"),
      description: t("evidenceArtifacts.contractsDescription"),
    },
    {
      href: `${repositoryUrl}/blob/main/docs/PRODUCTION_PATH.md`,
      label: t("evidenceArtifacts.productionPathLabel"),
      description: t("evidenceArtifacts.productionPathDescription"),
    },
    {
      href: `${repositoryUrl}/blob/main/scripts/export_portfolio_pack.py`,
      label: t("evidenceArtifacts.portfolioScriptLabel"),
      description: t("evidenceArtifacts.portfolioScriptDescription"),
    },
    {
      href: `${repositoryUrl}/blob/main/.github/workflows/ci.yml`,
      label: t("evidenceArtifacts.ciLabel"),
      description: t("evidenceArtifacts.ciDescription"),
    },
  ];

  const demoAssetsStrategyItems = [
    t("demoAssetsStrategy.item1"),
    t("demoAssetsStrategy.item2"),
    t("demoAssetsStrategy.item3"),
    t("demoAssetsStrategy.item4"),
    t("demoAssetsStrategy.item5"),
    t("demoAssetsStrategy.item6"),
  ];

  const screenshotCards = [
    {
      key: "overview",
      src: "/cases/enterprise-platform/overview.webp",
      title: t("visualShowcase.cards.overview.title"),
      description: t("visualShowcase.cards.overview.description"),
      alt: t("visualShowcase.cards.overview.alt"),
      caption: t("visualShowcase.cards.overview.caption"),
    },
    {
      key: "architecture",
      src: "/cases/enterprise-platform/architecture.webp",
      title: t("visualShowcase.cards.architecture.title"),
      description: t("visualShowcase.cards.architecture.description"),
      alt: t("visualShowcase.cards.architecture.alt"),
      caption: t("visualShowcase.cards.architecture.caption"),
    },
    {
      key: "lineage",
      src: "/cases/enterprise-platform/lineage.webp",
      title: t("visualShowcase.cards.lineage.title"),
      description: t("visualShowcase.cards.lineage.description"),
      alt: t("visualShowcase.cards.lineage.alt"),
      caption: t("visualShowcase.cards.lineage.caption"),
    },
    {
      key: "dataQuality",
      src: "/cases/enterprise-platform/dataquality.webp",
      title: t("visualShowcase.cards.dataQuality.title"),
      description: t("visualShowcase.cards.dataQuality.description"),
      alt: t("visualShowcase.cards.dataQuality.alt"),
      caption: t("visualShowcase.cards.dataQuality.caption"),
    },
  ];

  const deterministicEvidenceItems = [
    t("deterministicEvidence.item1"),
    t("deterministicEvidence.item2"),
    t("deterministicEvidence.item3"),
    t("deterministicEvidence.item4"),
  ];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-bold tracking-[0.28em] text-brand-cyan uppercase">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ui-muted">{t("summary")}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ui-muted">{t("businessContext")}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[var(--radius-xl)] border border-white/10 px-5 py-3 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
            >
              {t("repositoryCta")}
            </a>
            <Link
              href={`/${locale}/engineering/enterprise-data-platform`}
              className="rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
            >
              {t("engineeringCta")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("whatItShows.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
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
          </div>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("visualShowcase.title")}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ui-muted">{t("visualShowcase.subtitle")}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {screenshotCards.map((card) => (
                <article key={card.key} className="rounded-[var(--radius-xl)] border border-white/10 bg-black/20 p-4">
                  <h3 className="text-lg font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ui-muted">{card.description}</p>
                  <div className="mt-4">
                    <ScreenshotCard
                      src={card.src}
                      alt={card.alt}
                      caption={card.caption}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      zoomLabel={t("visualShowcase.zoomLabel")}
                      closeLabel={t("visualShowcase.closeLabel")}
                    />
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("deterministicEvidence.title")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("deterministicEvidence.summary")}</p>
            <p className="mt-3 text-sm leading-relaxed text-ui-muted">{t("deterministicEvidence.artifacts")}</p>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
              {deterministicEvidenceItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("architecture.title")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("architecture.subtitle")}</p>

            <pre className="mt-5 overflow-x-auto rounded-[var(--radius-xl)] border border-white/10 bg-black/25 p-4 text-xs leading-relaxed text-ui-muted">
{`mermaid
${architectureMermaid}`}
            </pre>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
              {architectureItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("dataFlow.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {dataFlowItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("slas.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {slaItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("contracts.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {contractItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("qualityGates.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {qualityGateItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("observabilitySignals.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {observabilityItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("securityGovernance.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {securityItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("evidenceArtifacts.title")}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {evidenceArtifacts.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-xl)] border border-white/10 bg-black/20 p-4 transition-colors hover:border-brand-cyan"
                >
                  <h3 className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ui-muted">{item.description}</p>
                </a>
              ))}
            </div>
          </article>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("demoAssetsStrategy.title")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("demoAssetsStrategy.subtitle")}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
              {demoAssetsStrategyItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
    </main>
  );
}
