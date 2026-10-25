export interface PublicSocialLink {
  name: string;
  label: string;
  href: string;
}

export interface PublicContactConfig {
  email: string;
  whatsappNumber: string;
  whatsappLabel: string;
  socialLinks: PublicSocialLink[];
}

// Only confirmed public team contacts belong here. Notification recipients are private.
export const publicContact: PublicContactConfig = {
  email: "robocepacrux@gmail.com",
  whatsappNumber: "",
  whatsappLabel: "",
  socialLinks: [
    { name: "Instagram", label: "@acruxrobocep", href: "https://www.instagram.com/acruxrobocep/" },
  ],
};

type ContactTopic = "general" | "support";

export interface ContactAction {
  href: string;
  label: string;
  newTab: boolean;
}

export function emailContactHref(topic: ContactTopic, config = publicContact): string | null {
  const email = config.email.trim();
  if (!email) return null;

  const subject = topic === "support"
    ? "Quero apoiar a equipe ACRUX ROBOCEP"
    : "Contato com a equipe ACRUX ROBOCEP";
  const body = topic === "support"
    ? "Olá, equipe ACRUX!\n\nGostaria de conversar sobre uma possibilidade de apoio.\n\nNome ou organização: \nComo gostaria de contribuir: \nContato para retorno: \n"
    : "Olá, equipe ACRUX!\n\nGostaria de conversar com vocês sobre: \n";

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappContactHref(topic: ContactTopic, config = publicContact): string | null {
  const number = config.whatsappNumber.replace(/\D/g, "");
  if (!/^\d{10,15}$/.test(number)) return null;

  const message = topic === "support"
    ? "Olá, equipe ACRUX! Gostaria de conversar sobre uma possibilidade de apoio ou parceria."
    : "Olá, equipe ACRUX! Gostaria de conversar com vocês.";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function primaryContactAction(topic: ContactTopic, config = publicContact): ContactAction | null {
  const email = emailContactHref(topic, config);
  if (email) return { href: email, label: topic === "support" ? "Conversar sobre uma parceria" : "Escrever e-mail", newTab: false };

  const whatsapp = whatsappContactHref(topic, config);
  if (whatsapp) return { href: whatsapp, label: "Conversar no WhatsApp", newTab: true };

  const social = config.socialLinks[0];
  return social ? { href: social.href, label: `Abrir ${social.name}`, newTab: true } : null;
}
