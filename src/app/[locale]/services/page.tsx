import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("servicesPage");

  const services = [
    {
      title: t("offerings.cloudDataArchitecture.title"),
      description: t("offerings.cloudDataArchitecture.description"),
    },
    {
      title: t("offerings.saasHardening.title"),
      description: t("offerings.saasHardening.description"),
    },
    {
      title: t("offerings.observability.title"),
      description: t("offerings.observability.description"),
    },
    {
      title: t("offerings.securityByDesign.title"),
      description: t("offerings.securityByDesign.description"),
    },
    {
      title: t("offerings.dataPlatforms.title"),
      description: t("offerings.dataPlatforms.description"),
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
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-2xl font-bold tracking-tight">{service.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ui-muted">{service.description}</p>
              </article>
            ))}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="mt-10 inline-flex rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
          >
            {t("contactCta")}
          </Link>
        </Container>
      </section>
    </main>
  );
}
