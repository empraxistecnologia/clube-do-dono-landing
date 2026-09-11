import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/club/Header";
import { Hero } from "@/components/club/Hero";
import { ClubBenefits } from "@/components/club/ClubBenefits";
import { VideoGallery } from "@/components/club/VideoGallery";
import { ProductTabs } from "@/components/club/ProductTabs";
import { MembershipPlans } from "@/components/club/MembershipPlans";
import { Education } from "@/components/club/Education";
import { FAQ } from "@/components/club/FAQ";
import { FinalCta } from "@/components/club/FinalCta";
import { Footer } from "@/components/club/Footer";

const title = "Clube do Dono — Clube de benefícios para barbeiros";
const description =
  "Descontos em produtos, cursos, condições especiais em mentorias e uma comunidade para barbeiros e donos de barbearia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <ClubBenefits />
        <VideoGallery />
        <ProductTabs />
        <MembershipPlans />
        <Education />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
