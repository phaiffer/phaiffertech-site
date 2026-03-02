import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("productsPage");

  const products = [
    {
      key: "iot",
      title: t("cards.iot.title"),
      summary: t("cards.iot.summary"),
      href: `/${locale}/contact?product=iot`,
    },
    {
      key: "crm",
      title: t("cards.crm.title"),
      summary: t("cards.crm.summary"),
      href: `/${locale}/contact?product=crm`,
    },
    {
      key: "petflow",
      title: t("cards.petflow.title"),
      summary: t("cards.petflow.summary"),
      href: `/${locale}/contact?product=petflow`,
    },
  ] as const;

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
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.key}
                className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{product.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-ui-muted">{product.summary}</p>
                </div>

                <Link
                  href={product.href}
                  className="mt-8 inline-flex rounded-[var(--radius-xl)] border border-brand-cyan/40 px-5 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                >
                  {t("requestDemo")}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
