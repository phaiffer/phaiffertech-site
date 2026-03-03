import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

const repositoryUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse";
const enterpriseRepositoryUrl = "https://github.com/phaiffer/enterprise-industrial-data-platform";
const runbookUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse/blob/main/docs/runbook.md";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("caseStudiesPage");

  const privateCards = [
    {
      href: `/${locale}/engineering/iot-platform`,
      title: t("privateCards.iot.title"),
      summary: t("privateCards.iot.summary"),
    },
    {
      href: `/${locale}/engineering/crm-saas`,
      title: t("privateCards.crm.title"),
      summary: t("privateCards.crm.summary"),
    },
    {
      href: `/${locale}/engineering/petflow`,
      title: t("privateCards.petflow.title"),
      summary: t("privateCards.petflow.summary"),
    },
  ];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-bold tracking-[0.28em] text-brand-cyan uppercase">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ui-muted">{t("subtitle")}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs font-bold tracking-[0.22em] text-brand-cyan uppercase">{t("lakehouse.tag")}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("lakehouse.title")}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ui-muted">{t("lakehouse.summary")}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
                >
                  {t("lakehouse.repositoryCta")}
                </a>
                <a
                  href={runbookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
                >
                  {t("lakehouse.runbookCta")}
                </a>
                <Link
                  href={`/${locale}`}
                  className="rounded-[var(--radius-xl)] border border-brand-cyan/40 px-4 py-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                >
                  {t("lakehouse.homeCta")}
                </Link>
              </div>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs font-bold tracking-[0.22em] text-brand-cyan uppercase">
                {t("enterpriseDataPlatform.tag")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("enterpriseDataPlatform.title")}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ui-muted">{t("enterpriseDataPlatform.summary")}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/case-studies/enterprise-data-platform`}
                  className="rounded-[var(--radius-xl)] border border-brand-cyan/40 px-4 py-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                >
                  {t("enterpriseDataPlatform.viewCaseCta")}
                </Link>
                <a
                  href={enterpriseRepositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
                >
                  {t("enterpriseDataPlatform.repositoryCta")}
                </a>
              </div>
            </article>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight">{t("privateSection.title")}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ui-muted">{t("privateSection.subtitle")}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {privateCards.map((card) => (
                <article key={card.href} className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ui-muted">{card.summary}</p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex text-sm font-semibold tracking-[0.16em] text-brand-cyan uppercase transition-colors hover:text-white"
                  >
                    {t("privateSection.viewCase")}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
