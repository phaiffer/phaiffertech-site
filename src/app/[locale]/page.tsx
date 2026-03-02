import { useTranslations } from "next-intl";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CaseStudyLakehouse } from "@/components/sections/CaseStudyLakehouse";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type HomeSection = {
  id: "expertise" | "stack" | "career" | "contact";
  title: string;
  subtitle: string;
  items: string[];
};

export default function LocalizedHomePage() {
  const t = useTranslations("home");

  const sections: HomeSection[] = [
    {
      id: "expertise",
      title: t("sections.expertise.title"),
      subtitle: t("sections.expertise.subtitle"),
      items: [
        t("sections.expertise.item1"),
        t("sections.expertise.item2"),
        t("sections.expertise.item3"),
        t("sections.expertise.item4"),
        t("sections.expertise.item5"),
      ],
    },
    {
      id: "stack",
      title: t("sections.stack.title"),
      subtitle: t("sections.stack.subtitle"),
      items: [
        t("sections.stack.item1"),
        t("sections.stack.item2"),
        t("sections.stack.item3"),
        t("sections.stack.item4"),
        t("sections.stack.item5"),
      ],
    },
    {
      id: "career",
      title: t("sections.career.title"),
      subtitle: t("sections.career.subtitle"),
      items: [
        t("sections.career.item1"),
        t("sections.career.item2"),
        t("sections.career.item3"),
        t("sections.career.item4"),
      ],
    },
    {
      id: "contact",
      title: t("sections.contact.title"),
      subtitle: t("sections.contact.subtitle"),
      items: [
        t("sections.contact.item1"),
        t("sections.contact.item2"),
        t("sections.contact.item3"),
      ],
    },
  ];

  return (
    <main className="bg-brand-navy">
      <Navbar />
      <Hero />
      <CaseStudyLakehouse />

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="border-t border-white/5 py-20 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold tracking-[0.3em] text-brand-cyan uppercase">
                  {"// "}
                  {section.id}
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{section.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-ui-muted">{section.subtitle}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="group flex flex-col justify-between rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.05] hover:shadow-glow"
                  >
                    <div className="mb-4 h-1 w-8 rounded-full bg-white/10 transition-all group-hover:bg-brand-cyan" />
                    <span className="text-sm font-semibold tracking-wide text-ui-fg uppercase">{item}</span>
                  </div>
                ))}

                {section.id === "contact" && (
                  <div className="col-span-full mt-6 flex flex-col gap-4 rounded-[var(--radius-xl)] border border-brand-cyan/10 bg-brand-cyan/5 p-8">
                    <p className="text-sm text-ui-muted">{t("sections.contact.ready")}</p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="mailto:contact@phaiffertech.com" variant="primary">
                        {t("emailCta")}
                      </Button>
                      <Button href="#home" variant="ghost">
                        {t("backToTop")}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      ))}
    </main>
  );
}
