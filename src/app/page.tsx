import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="expertise" className="border-t border-white/10 py-20">
        <Container>
          <h2 className="text-2xl font-extrabold">Expertise</h2>
          <p className="mt-3 text-ui-muted">
            Vamos migrar sua seção atual de cards para React com design system.
          </p>
        </Container>
      </section>

      <section id="stack" className="border-t border-white/10 py-20">
        <Container>
          <h2 className="text-2xl font-extrabold">Stack</h2>
          <p className="mt-3 text-ui-muted">
            Aqui entra o grid de tecnologias com badges.
          </p>
        </Container>
      </section>

      <section id="carreira" className="border-t border-white/10 py-20">
        <Container>
          <h2 className="text-2xl font-extrabold">Carreira</h2>
          <p className="mt-3 text-ui-muted">
            Timeline com seus highlights e impacto.
          </p>
        </Container>
      </section>

      <section id="contato" className="border-t border-white/10 py-20">
        <Container>
          <h2 className="text-2xl font-extrabold">Contato</h2>
          <p className="mt-3 text-ui-muted">
            Form + botões rápidos (e-mail/LinkedIn) com validação.
          </p>
        </Container>
      </section>
    </main>
  );
}
