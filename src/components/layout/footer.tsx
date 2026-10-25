import Link from "next/link";

import { publicContact } from "@/config/contact";
import { publicNavigation, siteConfig } from "@/config/site";
import { SiteLogo } from "@/components/layout/site-logo";
import { ExternalLinkIcon } from "@/components/ui/external-link-icon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]/70 pb-[env(safe-area-inset-bottom)]">
      <div className="shell grid gap-10 py-12 sm:grid-cols-[1.25fr_1fr] lg:grid-cols-[1.4fr_1fr_0.8fr]">
        <div>
          <SiteLogo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-acrux-muted">
            Tecnologia, engenharia, criatividade e conexão entre pessoas. Conteúdos oficiais da equipe serão publicados aqui.
          </p>
          <Link className="mt-3 inline-flex min-h-11 max-w-full items-center rounded-lg py-2 text-base font-semibold text-acrux-cyan-bright hover:text-white" href="/contato">Fale com a Acrux <span aria-hidden="true" className="ml-2">→</span></Link>
          <div className="flex flex-wrap gap-x-5">
            {publicContact.socialLinks.map((social) => <a className="inline-flex min-h-11 items-center gap-2 rounded-lg py-2 text-sm font-semibold text-acrux-muted hover:text-white" href={social.href} key={social.href} rel="noopener noreferrer" target="_blank">{social.name} <ExternalLinkIcon /><span className="sr-only">(abre em nova aba)</span></a>)}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">Explorar</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            {publicNavigation.map((item) => (
              <li key={item.href}>
                <Link className="flex min-h-11 items-center rounded-lg py-2 text-sm text-acrux-muted transition-colors hover:text-acrux-cyan-bright" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">Área interna</p>
          <p className="mt-4 text-sm leading-6 text-acrux-muted">
            A edição do conteúdo é reservada às contas autorizadas da ACRUX.
          </p>
          <Link className="mt-3 inline-flex min-h-11 max-w-full items-center rounded-lg py-2 text-sm font-bold leading-6 text-acrux-cyan-bright hover:text-white" href="/admin">
            Acessar administração →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-acrux-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Identidade visual baseada na marca oficial da ACRUX.</p>
        </div>
      </div>
    </footer>
  );
}

