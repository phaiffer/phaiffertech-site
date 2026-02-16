"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-ui-muted">
              <span className="text-brand-cyan">[</span>
              WILLlIAN_PHAIFFER_ARCH
              <span className="text-brand-cyan">]</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
            >
              Software <br />
              & Data <br />
              <span className="text-brand-cyan">Synthesis.</span>
            </motion.h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ui-muted">
              Arquitetura e engenharia para sistemas resilientes. Unindo robustez de{" "}
              <span className="text-ui-fg">Java/Spring</span> com inteligência de{" "}
              <span className="text-ui-fg">Python/PySpark</span> em stacks cloud.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#expertise">
                <Button variant="primary">Explorar Expertise</Button>
              </a>
              <a href="#carreira">
                <Button variant="secondary">Track Record</Button>
              </a>
            </div>
          </div>

          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 shadow-soft">
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-56 w-56">
                  <Image
                    src="/logo.png"
                    alt="Phaiffer Tech Logo"
                    fill
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-2xl font-extrabold">
                  Phaiffer <span className="text-brand-cyan">Tech</span>
                </div>
                <div className="mt-2 text-sm tracking-[0.3em] text-ui-muted">
                  BUILDING THE FUTURE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
