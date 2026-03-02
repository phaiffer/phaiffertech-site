import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { CaseStudyImageSlot } from "@/components/ui/CaseStudyImageSlot";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CrmSaasPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("privateCases.crm");

  const architectureItems = [
    t("architecture.item1"),
    t("architecture.item2"),
    t("architecture.item3"),
    t("architecture.item4"),
  ];

  const reliabilityItems = [
    t("reliability.item1"),
    t("reliability.item2"),
    t("reliability.item3"),
    t("reliability.item4"),
  ];

  const securityItems = [
    t("security.item1"),
    t("security.item2"),
    t("security.item3"),
    t("security.item4"),
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
          <p className="mt-4 inline-flex rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-brand-cyan uppercase">
            {t("privateRepoLabel")}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("executiveSummary.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("executiveSummary.body")}</p>
            </article>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-2xl font-bold tracking-tight">{t("architecture.title")}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                  {architectureItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-2xl font-bold tracking-tight">{t("reliability.title")}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                  {reliabilityItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-2xl font-bold tracking-tight">{t("security.title")}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ui-muted">
                  {securityItems.map((item) => (
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
            </div>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("screenshots.title")}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <CaseStudyImageSlot
                  src="/case-studies/crm-platform/workspace.png"
                  alt={t("screenshots.slot1Alt")}
                  caption={t("screenshots.slot1Caption")}
                  placeholderLabel={t("screenshots.placeholder")}
                />
                <CaseStudyImageSlot
                  src="/case-studies/crm-platform/access-controls.png"
                  alt={t("screenshots.slot2Alt")}
                  caption={t("screenshots.slot2Caption")}
                  placeholderLabel={t("screenshots.placeholder")}
                />
              </div>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("roadmap.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("roadmap.body")}</p>
            </article>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/products`}
                className="inline-flex rounded-[var(--radius-xl)] border border-white/10 px-5 py-3 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
              >
                {t("productsCta")}
              </Link>
              <Link
                href={`/${locale}/contact?product=crm`}
                className="inline-flex rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
              >
                {t("requestDemoCta")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
