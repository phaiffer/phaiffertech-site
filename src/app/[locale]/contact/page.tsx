import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string }>;
};

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const query = await searchParams;
  const t = await getTranslations("contactPage");

  const selectedProduct = query.product ?? "";

  const productLabels: Record<string, string> = {
    iot: t("products.iot"),
    crm: t("products.crm"),
    petflow: t("products.petflow"),
  };

  const selectedLabel = productLabels[selectedProduct];

  return (
    <main className="bg-brand-navy">
      <Navbar />

      <section className="border-b border-white/10 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-bold tracking-[0.28em] text-brand-cyan uppercase">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ui-muted">{t("subtitle")}</p>

          {selectedLabel ? (
            <div className="mt-8 rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-5">
              <p className="text-sm font-semibold text-ui-fg">
                {t("requestedDemo")} <span className="text-brand-cyan">{selectedLabel}</span>
              </p>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("directContact.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("directContact.description")}</p>
              <a
                href="mailto:contact@phaiffertech.com"
                className="mt-6 inline-flex rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
              >
                contact@phaiffertech.com
              </a>
            </article>

            <article className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-2xl font-bold tracking-tight">{t("pathways.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ui-muted">{t("pathways.description")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/services`}
                  className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
                >
                  {t("pathways.servicesCta")}
                </Link>
                <Link
                  href={`/${locale}/products`}
                  className="rounded-[var(--radius-xl)] border border-white/10 px-4 py-2 text-sm font-semibold text-ui-fg transition-colors hover:border-brand-cyan"
                >
                  {t("pathways.productsCta")}
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
