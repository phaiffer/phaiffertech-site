"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Hero Section:
 * - High-visibility brand logo with custom glow effect
 * - Optimized contrast for dark theme
 */
export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background radial gradient to improve contrast */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
          
          <div className="z-10">
            <div className="mb-8 inline-block border-l-4 border-brand-cyan pl-6 text-xs font-bold tracking-[0.4em] text-ui-muted uppercase">
              {site.hero.eyebrow}
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl lg:text-[9rem]"
            >
              {site.hero.titleTop} <br />
              <span className="text-brand-cyan">{site.hero.titleMid}</span>
            </motion.h1>

            <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-ui-muted">
              {site.hero.subtitle}
            </p>

            <div className="mt-14 flex flex-wrap gap-8">
              <Button href={site.hero.ctaPrimary.href} className="px-12 py-5 text-base tracking-[0.2em] uppercase">
                {site.hero.ctaPrimary.label}
              </Button>
              <Button href={site.hero.ctaSecondary.href} variant="secondary" className="px-12 py-5 text-base tracking-[0.2em] uppercase">
                {site.hero.ctaSecondary.label}
              </Button>
            </div>
          </div>

          {/* Enhanced Logo Section:
              - Higher opacity (opacity-60)
              - Drop-shadow and Glow effect
              - Subtle floating animation
          */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-end relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] bg-brand-cyan/20 blur-[100px] rounded-full" />
            
            <div className="relative h-[600px] w-[600px] drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              <Image
                className="object-contain"
                src="/logo.png"
                alt="Phaiffer Tech High Vis Logo"
                fill
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
