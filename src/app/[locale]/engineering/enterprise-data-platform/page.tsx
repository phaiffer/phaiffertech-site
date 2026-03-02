import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

const repositoryUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse";
const runbookUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse/blob/main/docs/runbook.md";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EnterpriseDataPlatformPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("engineeringCases.enterpriseDataPlatform");

  const architecture = [
    t("architecture.item1"),
    t("architecture.item2"),
    t("architecture.item3"),
    t("architecture.item4"),
  ];

  const delivery = [
    t("delivery.item1"),
    t("delivery.item2"),
    t("delivery.item3"),
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
            <a
              href={runbookUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[var(--radius-xl)] border border-white/10 px-5 py-3 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
            >
              {t("runbookCta")}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("architecture.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {architecture.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("delivery.title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                {delivery.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <Link
            href={`/${locale}/case-studies`}
            className="mt-10 inline-flex text-sm font-semibold tracking-[0.16em] text-brand-cyan uppercase transition-colors hover:text-white"
          >
            {t("caseStudiesCta")}
          </Link>
        </Container>
      </section>
    </main>
  );
}
