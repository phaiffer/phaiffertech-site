import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EngineeringPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("engineeringPage");
  const projectSummary = await getTranslations("projectSummaries");

  const cards = [
    {
      href: `/${locale}/engineering/iot-platform`,
      title: t("cards.iotPlatform.title"),
      summary: projectSummary("iot"),
    },
    {
      href: `/${locale}/engineering/enterprise-data-platform`,
      title: t("cards.enterpriseDataPlatform.title"),
      summary: t("cards.enterpriseDataPlatform.summary"),
    },
    {
      href: `/${locale}/engineering/crm-saas`,
      title: t("cards.crmSaas.title"),
      summary: projectSummary("crm"),
    },
    {
      href: `/${locale}/engineering/petflow`,
      title: t("cards.petflow.title"),
      summary: projectSummary("petflow"),
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ui-muted">{t("hiringNote")}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.href}
                className="flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{card.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ui-muted">{card.summary}</p>
                </div>
                <Link
                  href={card.href}
                  className="mt-8 text-sm font-semibold tracking-[0.16em] text-brand-cyan uppercase transition-colors hover:text-white"
                >
                  {t("readCase")}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
