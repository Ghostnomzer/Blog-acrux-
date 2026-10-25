import Link from "next/link";

import { ExternalLinkIcon } from "@/components/ui/external-link-icon";
import { emailContactHref, primaryContactAction, publicContact, whatsappContactHref } from "@/config/contact";

interface ContactCardProps {
  title: string;
  detail: string;
  href: string;
  action: string;
  kind: "email" | "message" | "social" | "instagram";
  newTab?: boolean;
}

function ContactIcon({ kind }: { kind: ContactCardProps["kind"] }) {
  const paths = {
    email: <><rect height="14" rx="2" width="20" x="2" y="5" /><path d="m3 6 9 7 9-7" /></>,
    message: <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />,
    instagram: <><rect height="18" rx="5" width="18" x="3" y="3" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" fill="currentColor" r="0.8" stroke="none" /></>,
    social: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a17 17 0 0 1 0 18 17 17 0 0 1 0-18Z" /></>,
  };
  return (
    <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="24">
      {paths[kind]}
    </svg>
  );
}

function ContactCard({ title, detail, href, action, kind, newTab = false }: ContactCardProps) {
  return (
    <article className="glass-panel flex min-w-0 flex-col rounded-3xl p-6 sm:p-7">
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/5 text-acrux-cyan-bright"><ContactIcon kind={kind} /></span>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 min-w-0 break-words text-base leading-7 text-acrux-muted">{detail}</p>
      <a className="button-secondary mt-6 w-full sm:w-auto sm:self-start" href={href} rel={newTab ? "noopener noreferrer" : undefined} target={newTab ? "_blank" : undefined}>
        {action} {newTab ? <ExternalLinkIcon /> : <span aria-hidden="true">→</span>}
        {newTab ? <span className="sr-only">(abre em nova aba)</span> : null}
      </a>
      {kind === "email" ? <p className="mt-3 text-sm leading-6 text-acrux-muted">Abre seu aplicativo de e-mail para escrever à equipe.</p> : null}
    </article>
  );
}

const supportOptions = [
  { title: "Patrocínio e recursos", description: "Converse sobre possibilidades de apoio financeiro para os projetos e as atividades da equipe." },
  { title: "Materiais e serviços", description: "Componentes, ferramentas, fabricação e serviços podem abrir novas possibilidades para os projetos." },
  { title: "Conhecimento e conexões", description: "Compartilhe conhecimento técnico, apresente oportunidades ou proponha uma colaboração." },
];

export function ContactPage() {
  const emailHref = emailContactHref("general");
  const whatsappHref = whatsappContactHref("general");
  const supportAction = primaryContactAction("support");
  const hasContacts = Boolean(emailHref || whatsappHref || publicContact.socialLinks.length);
  const channelCount = Number(Boolean(emailHref)) + Number(Boolean(whatsappHref)) + publicContact.socialLinks.length;

  return (
    <main className="pb-16 pt-[calc(7rem+env(safe-area-inset-top))] sm:pb-24 sm:pt-[calc(8rem+env(safe-area-inset-top))]">
      <div className="shell">
        <header className="max-w-3xl">
          <p className="eyebrow">Contato e apoio</p>
          <h1 className="display-heading mt-5">Fale com a Acrux.</h1>
          <p className="body-copy mt-6 leading-relaxed">Quer conhecer melhor a equipe, apresentar uma ideia ou apoiar nossos projetos? Uma boa conversa pode ser o começo de uma nova parceria.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="#canais-oficiais">Ver canais de contato <span aria-hidden="true">↓</span></Link>
            <Link className="button-secondary" href="#apoie-a-equipe">Quero apoiar a equipe <span aria-hidden="true">↓</span></Link>
          </div>
        </header>

        <section aria-labelledby="contact-channels-title" className="mt-14 scroll-mt-28 sm:mt-18" id="canais-oficiais">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl" id="contact-channels-title">Nossos canais oficiais</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-acrux-muted">Escolha o canal que preferir para falar com a equipe ou acompanhar o que acontece na Acrux.</p>
          {hasContacts ? (
            <div className={`mt-7 grid gap-4 md:grid-cols-2${channelCount > 2 ? " xl:grid-cols-3" : ""}`}>
              {emailHref ? <ContactCard action="Escrever e-mail" detail={publicContact.email} href={emailHref} kind="email" title="E-mail da equipe" /> : null}
              {whatsappHref ? <ContactCard action="Abrir WhatsApp" detail={publicContact.whatsappLabel || publicContact.whatsappNumber} href={whatsappHref} kind="message" newTab title="WhatsApp" /> : null}
              {publicContact.socialLinks.map((social) => <ContactCard action={`Abrir ${social.name}`} detail={social.label} href={social.href} key={social.href} kind={social.name === "Instagram" ? "instagram" : "social"} newTab title={social.name} />)}
            </div>
          ) : <p className="mt-7 rounded-2xl border border-white/10 bg-white/3 p-6 text-base leading-7 text-acrux-muted">Os canais oficiais de contato da Acrux serão divulgados aqui.</p>}
        </section>

        <section aria-labelledby="support-title" className="relative mt-14 scroll-mt-28 overflow-hidden rounded-3xl border border-[#e6c56e]/25 bg-[linear-gradient(135deg,#10203b,#06163f_55%,#020817)] p-5 sm:mt-18 sm:p-10" id="apoie-a-equipe">
          <p className="eyebrow" style={{ color: "#e6c56e" }}>Apoie a Acrux</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="support-title">Quero apoiar a equipe.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-acrux-muted">Cada parceria pode contribuir para transformar ideias em aprendizado e projetos. Conheça algumas formas de colaborar e converse com a equipe sobre as possibilidades.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {supportOptions.map((option) => (
              <article className="min-w-0 rounded-2xl border border-white/10 bg-[#020817]/45 p-5" key={option.title}>
                <span aria-hidden="true" className="text-lg text-[#e6c56e]">✦</span>
                <h3 className="mt-3 text-lg font-bold text-white">{option.title}</h3>
                <p className="mt-3 text-base leading-7 text-acrux-muted">{option.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-base leading-7 text-acrux-muted">Conte quem você é, como gostaria de contribuir e um contato para retorno. As possibilidades de apoio e parceria são combinadas diretamente com a equipe.</p>
          <div className="mt-7 flex flex-col items-start gap-4">
            {supportAction ? <a className="button-primary w-full sm:w-auto" href={supportAction.href} rel={supportAction.newTab ? "noopener noreferrer" : undefined} target={supportAction.newTab ? "_blank" : undefined}>{supportAction.label} {supportAction.newTab ? <ExternalLinkIcon /> : <span aria-hidden="true">→</span>}{supportAction.newTab ? <span className="sr-only">(abre em nova aba)</span> : null}</a> : <Link className="button-primary w-full sm:w-auto" href="#canais-oficiais">Ver canais de contato <span aria-hidden="true">↑</span></Link>}
            <Link className="inline-flex min-h-11 items-center rounded-lg py-2 text-base font-semibold text-acrux-cyan-bright hover:text-white" href="/#patrocinadores">Conheça quem já apoia a Acrux <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
