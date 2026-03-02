"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="z-10">
            <div className="mb-8 inline-block border-l-4 border-brand-cyan pl-6 text-xs font-bold tracking-[0.4em] text-ui-muted uppercase">
              {t("eyebrow")}
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl lg:text-[9rem]"
            >
              {t("titleTop")} <br />
              <span className="text-brand-cyan">{t("titleMid")}</span>
            </motion.h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-ui-muted md:text-2xl">{t("subtitle")}</p>

            <div className="mt-14 flex flex-wrap gap-8">
              <Button href="#expertise" className="px-12 py-5 text-base tracking-[0.2em] uppercase">
                {t("ctaPrimary")}
              </Button>
              <Button href="#career" variant="secondary" className="px-12 py-5 text-base tracking-[0.2em] uppercase">
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden justify-end lg:flex"
          >
            <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/20 blur-[100px]" />

            <div className="relative h-[600px] w-[600px] drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              <Image className="object-contain" src="/logo.png" alt={`${site.brand.name} logo`} fill priority />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
