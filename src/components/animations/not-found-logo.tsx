"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import acruxLogo from "@/assets/acrux-logo.jpeg";
import { animateAcruxConstellation } from "@/components/animations/constellation-animation";
import { HeroConstellation } from "@/features/home/hero-constellation";

export function NotFoundLogo() {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = scope.current;
    if (!element) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      // The complete mark is visible without JavaScript or with reduced motion.
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = animateAcruxConstellation(element);
        timeline
          .fromTo(".not-found-logo-image", { opacity: 0.4, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.45 }, 1.05)
          .repeat(-1)
          .repeatDelay(0.65);
      });
    }, element);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div aria-hidden="true" className="not-found-logo" ref={scope}>
      <div className="relative">
        <div className="pointer-events-none absolute inset-[12%] -z-10 rounded-full bg-acrux-cyan/10 blur-2xl" />
        <HeroConstellation />
        <Image
          alt=""
          className="not-found-logo-image absolute right-0 top-0 h-auto w-10 rounded-full ring-1 ring-white/20 sm:w-12 lg:w-20"
          height={80}
          sizes="(min-width: 1024px) 80px, (min-width: 640px) 48px, 40px"
          src={acruxLogo}
          width={80}
        />
      </div>
    </div>
  );
}
