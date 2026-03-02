import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

const repositoryUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse";

const reproducibilityCommands = `make setup
make download YEAR=2024 MONTH=1
make reset
make run YEAR=2024 MONTH=1
make inspect
make demo
python orchestration/local/run_pipeline.py run-backfill --from 2024-01 --to 2024-02
dbt build --select tag:contract_enforced
great_expectations checkpoint run bronze_to_silver`;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EnterpriseDataPlatformPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("engineeringCases.enterpriseDataPlatform");

  const governanceItems = [t("governance.item1"), t("governance.item2"), t("governance.item3"), t("governance.item4")];

  const twoModeItems = [
    t("twoModeArchitecture.item1"),
    t("twoModeArchitecture.item2"),
    t("twoModeArchitecture.item3"),
    t("twoModeArchitecture.item4"),
  ];

  const observabilityItems = [
    t("observability.item1"),
    t("observability.item2"),
    t("observability.item3"),
    t("observability.item4"),
  ];

  const cicdItems = [t("cicd.item1"), t("cicd.item2"), t("cicd.item3"), t("cicd.item4")];

  const adrItems = [t("adrs.item1"), t("adrs.item2"), t("adrs.item3"), t("adrs.item4")];

  const recruiterProofItems = [
    t("recruiterProof.item1"),
    t("recruiterProof.item2"),
    t("recruiterProof.item3"),
    t("recruiterProof.item4"),
  ];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20">
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
              href={`/${locale}/case-studies/enterprise-data-platform`}
              className="rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
            >
              {t("caseStudyCta")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("executiveSummary.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("executiveSummary.body")}</p>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("architectureOverview.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("architectureOverview.intro")}</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-[var(--radius-xl)] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-brand-cyan uppercase">
                    {t("architectureOverview.mode1Label")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{t("architectureOverview.mode1Title")}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ui-muted">{t("architectureOverview.mode1Body")}</p>
                </div>

                <div className="rounded-[var(--radius-xl)] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-brand-cyan uppercase">
                    {t("architectureOverview.mode2Label")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{t("architectureOverview.mode2Title")}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ui-muted">{t("architectureOverview.mode2Body")}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ui-muted">{t("architectureOverview.tradeoff")}</p>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("governance.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {governanceItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("twoModeArchitecture.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {twoModeItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("observability.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {observabilityItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("cicd.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {cicdItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("adrs.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {adrItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("reproducibility.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("reproducibility.intro")}</p>
              <pre className="mt-5 overflow-x-auto rounded-[var(--radius-xl)] border border-white/10 bg-black/25 p-4 text-xs leading-relaxed text-ui-muted">
                {reproducibilityCommands}
              </pre>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("reproducibility.note")}</p>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("recruiterProof.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {recruiterProofItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
