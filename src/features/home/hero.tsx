"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { animateAcruxConstellation } from "@/components/animations/constellation-animation";
import { ArrowLink } from "@/components/ui/arrow-link";
import acruxLogo from "@/assets/acrux-logo.jpeg";
import { HeroConstellation } from "@/features/home/hero-constellation";
import { HeroSouthernCross } from "@/features/home/hero-southern-cross";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const element = scope.current;
    if (!element) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      // Default markup is complete and visible, including without JavaScript.
      // matchMedia also restores it if the motion preference changes at runtime.
      media.add("(prefers-reduced-motion: no-preference)", () => {
        animateAcruxConstellation(element)
          .fromTo(".hero-copy", { opacity: 0.65, y: 12 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.06 }, 0);

      });
    }, scope);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[40rem] items-center overflow-hidden pt-22 sm:min-h-[47rem] sm:pt-24"
      ref={scope}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(7,155,185,0.26),transparent_17rem),radial-gradient(circle_at_50%_5%,rgba(9,59,120,0.56),transparent_29rem),linear-gradient(180deg,#020817_0%,#061a49_70%,#020817_100%)]" />
        <HeroSouthernCross />
      </div>

      <div className="shell relative z-10 grid items-center gap-6 pb-12 pt-6 text-center sm:gap-8 sm:pb-20 lg:grid-cols-2 lg:gap-16 lg:pt-12 lg:text-left">
        <div className="relative mx-auto w-[min(54vw,13rem)] sm:w-[min(68vw,16rem)] lg:order-2 lg:w-full lg:max-w-[27rem]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] rounded-full bg-acrux-cyan/10 blur-3xl" />
          <div className="pointer-events-none relative">
            <HeroConstellation />
          </div>
          <motion.div
            className="hero-logo absolute right-0 top-0 w-16 sm:w-20 lg:w-28"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-acrux-cyan/24 blur-3xl" />
            <div className="relative overflow-hidden rounded-full ring-1 ring-white/20 shadow-[0_1rem_4rem_rgba(7,155,185,0.3)]">
              <Image
                alt="Logo oficial da ACRUX ROBOCEP"
                className="aspect-square h-auto w-full object-cover"
                height={112}
                priority
                sizes="(min-width: 1024px) 112px, (min-width: 640px) 80px, 64px"
                src={acruxLogo}
                width={112}
              />
            </div>
          </motion.div>
        </div>

        <div className="min-w-0 lg:order-1">
          <div>
            <p className="hero-copy text-sm font-bold tracking-[0.34em] text-acrux-cyan-bright sm:text-base">ACRUX</p>
            <h1 className="hero-copy mt-2 text-5xl font-black tracking-[-0.08em] text-white sm:text-7xl" id="hero-title">
              ROBOCEP
            </h1>
          </div>

          <p className="hero-copy mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-semibold tracking-[0.04em] text-acrux-muted sm:mt-6 sm:text-lg lg:justify-start">
            <span>Tecnologia</span><span aria-hidden="true">•</span><span>Engenharia</span><span aria-hidden="true">•</span><span>Inovação</span>
          </p>
          <p className="hero-copy mx-auto mt-4 max-w-xl text-base leading-7 text-white/72 lg:mx-0">
            O espaço oficial para acompanhar a jornada da equipe, seus robôs, projetos e histórias.
          </p>

          <div className="hero-copy mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <ArrowLink href="/equipe" variant="primary">
              Conheça a equipe
            </ArrowLink>
            <ArrowLink href="/blog" variant="secondary">
              Nosso blog
            </ArrowLink>
          </div>

          <a
            aria-label="Ir para a apresentação da ACRUX"
            className="hero-copy mt-8 inline-flex min-h-11 flex-col items-center gap-2 py-2 text-xs font-bold uppercase tracking-[0.16em] text-acrux-muted transition-colors hover:text-white sm:mt-12"
            href="#sobre-acrux"
          >
            Explorar
            <span aria-hidden="true" className="text-lg leading-none">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
