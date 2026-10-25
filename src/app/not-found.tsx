import type { Metadata } from "next";
import Link from "next/link";

import { NotFoundLogo } from "@/components/animations/not-found-logo";

export const metadata: Metadata = {
  title: "404 — Página não encontrada",
  description: "Este endereço pode estar incorreto ou a página pode ter sido removida. Volte ao início ou explore o blog da ACRUX ROBOCEP.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="not-found-page relative isolate flex min-h-[min(48rem,100svh)] items-center overflow-hidden pb-10 pt-[calc(6rem+env(safe-area-inset-top))] sm:pb-16 sm:pt-[calc(7rem+env(safe-area-inset-top))]"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(58rem,140%)] -translate-x-1/2 -translate-y-1/2 text-[var(--not-found-gold)]"
        fill="none"
        focusable="false"
        viewBox="0 0 600 400"
      >
        <ellipse cx="300" cy="200" opacity="0.08" rx="240" ry="165" stroke="currentColor" />
        <path d="m95 110 4 10 10 4-10 4-4 10-4-10-10-4 10-4Zm407 147 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="currentColor" opacity="0.6" />
        <path d="m485 80 2 5 5 2-5 2-2 5-2-5-5-2 5-2Zm-365 223 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="currentColor" opacity="0.3" />
      </svg>

      <div className="shell not-found-layout">
        <NotFoundLogo />
        <div className="not-found-copy min-w-0">
          <h1 className="font-extrabold" id="not-found-title">
            <span className="not-found-code">404</span>
            <span className="sr-only"> — </span>
            <span className="not-found-title">Página não encontrada</span>
          </h1>
          <p className="not-found-description">
            Este endereço pode estar incorreto ou a página pode ter sido removida.
          </p>
          <nav aria-label="Opções para continuar" className="not-found-actions">
            <Link className="button-primary not-found-home w-full sm:w-auto" href="/" prefetch={false}>
              Voltar ao início <span aria-hidden="true">→</span>
            </Link>
            <Link className="button-secondary w-full sm:w-auto" href="/blog" prefetch={false}>
              Ir para o blog <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}

