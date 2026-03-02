import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Section data configuration for the landing page
 */
const sections = [
  {
    id: "expertise",
    title: "Expertise",
    subtitle: "Strategic capability blocks focused on high-scale solution delivery.",
    items: ["Platform Architecture", "Backend Engineering", "Data Engineering", "Cloud Migration", "Cost Optimization"],
  },
  {
    id: "stack",
    title: "Stack",
    subtitle: "Core technology pillars used to build resilient and scalable systems.",
    items: ["Java + Spring", "Python + PySpark", "Azure/AWS Cloud", "Snowflake Data Lake", "Kubernetes"],
  },
  {
    id: "carreira",
    title: "Carreira",
    subtitle: "Extensive track record delivering value in enterprise environments.",
    items: ["Enterprise Systems", "High Throughput Pipelines", "Technical Leadership", "Agile Management"],
  },
  {
    id: "contato",
    title: "Contato",
    subtitle: "Get in touch for specialized consulting and strategic technical projects.",
    items: ["Technical Assessment", "Discovery Call", "Delivery Roadmap"],
  },
] as const;

export default function Home() {
  return (
    <main className="bg-brand-navy">
      <Navbar />
      <Hero />
      
      {/* Iterate through sections with improved information density */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="border-t border-white/5 py-20 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              
              {/* Section Header */}
              <div className="sticky top-28">
                <p className="text-[10px] font-bold tracking-[0.3em] text-brand-cyan uppercase">
                  {"// "}
                  {section.id}
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ui-muted">
                  {section.subtitle}
                </p>
              </div>

              {/* Grid of items to maximize horizontal space usage */}
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="group flex flex-col justify-between rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.05] hover:shadow-glow"
                  >
                    <div className="mb-4 h-1 w-8 rounded-full bg-white/10 transition-all group-hover:bg-brand-cyan" />
                    <span className="text-sm font-semibold tracking-wide text-ui-fg uppercase">
                      {item}
                    </span>
                  </div>
                ))}

                {/* Specific layout for the Contact section footer */}
                {section.id === "contato" && (
                  <div className="col-span-full mt-6 flex flex-col gap-4 rounded-[var(--radius-xl)] bg-brand-cyan/5 p-8 border border-brand-cyan/10">
                    <p className="text-sm text-ui-muted">Ready to discuss your project?</p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="mailto:contact@phaiffertech.com" variant="primary">
                        contact@phaiffertech.com
                      </Button>
                      <Button href="#inicio" variant="ghost">
                        Back to top
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
