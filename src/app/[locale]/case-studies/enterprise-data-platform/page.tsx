import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { CaseStudyImageSlot } from "@/components/ui/CaseStudyImageSlot";
import { Container } from "@/components/ui/Container";

const repositoryUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EnterpriseDataPlatformCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("publicCases.enterpriseDataPlatform");

  const kpis = [
    {
      value: t("kpis.item1.value"),
      label: t("kpis.item1.label"),
      detail: t("kpis.item1.detail"),
    },
    {
      value: t("kpis.item2.value"),
      label: t("kpis.item2.label"),
      detail: t("kpis.item2.detail"),
    },
    {
      value: t("kpis.item3.value"),
      label: t("kpis.item3.label"),
      detail: t("kpis.item3.detail"),
    },
    {
      value: t("kpis.item4.value"),
      label: t("kpis.item4.label"),
      detail: t("kpis.item4.detail"),
    },
  ];

  const governanceItems = [
    t("governance.item1"),
    t("governance.item2"),
    t("governance.item3"),
    t("governance.item4"),
  ];

  const qualityItems = [t("quality.item1"), t("quality.item2"), t("quality.item3"), t("quality.item4")];

  const outcomeItems = [t("outcomes.item1"), t("outcomes.item2"), t("outcomes.item3"), t("outcomes.item4")];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-bold tracking-[0.28em] text-brand-cyan uppercase">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ui-muted">{t("summary")}</p>

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
          <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("kpisTitle")}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ui-muted">{t("kpisSubtitle")}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-[var(--radius-xl)] border border-white/10 bg-black/20 p-5">
                  <p className="text-3xl font-black tracking-tight text-brand-cyan">{kpi.value}</p>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-ui-fg uppercase">{kpi.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ui-muted">{kpi.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("governance.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {governanceItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("quality.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {qualityItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("screenshots.title")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("screenshots.subtitle")}</p>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <CaseStudyImageSlot
                src="/case-studies/enterprise-data-platform/dbt-lineage.png"
                alt={t("screenshots.dbtLineageAlt")}
                caption={t("screenshots.dbtLineageCaption")}
                placeholderLabel={t("screenshots.placeholder")}
              />
              <CaseStudyImageSlot
                src="/case-studies/enterprise-data-platform/great-expectations-data-docs.png"
                alt={t("screenshots.greatExpectationsAlt")}
                caption={t("screenshots.greatExpectationsCaption")}
                placeholderLabel={t("screenshots.placeholder")}
              />
              <CaseStudyImageSlot
                src="/case-studies/enterprise-data-platform/grafana-mode2-dashboard.png"
                alt={t("screenshots.grafanaAlt")}
                caption={t("screenshots.grafanaCaption")}
                placeholderLabel={t("screenshots.placeholder")}
              />
            </div>
          </article>

          <article className="mt-8 rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("outcomes.title")}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
              {outcomeItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
    </main>
  );
}
