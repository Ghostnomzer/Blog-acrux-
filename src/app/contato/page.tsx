import { ContactPage } from "@/features/contact/contact-page";
import { publicPageMetadata } from "@/lib/seo/public-metadata";

export const metadata = publicPageMetadata({
  path: "/contato/",
  title: "Contato e apoio",
  description: "Fale com a equipe ACRUX ROBOCEP, acompanhe os canais oficiais e conheça formas de apoiar nossos projetos.",
});

export default function Page() {
  return <ContactPage />;
}
