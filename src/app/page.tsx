import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Portfolio } from "@/sections/Portfolio";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import SEO from "@/sections/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="WebForgePlus – Top Web Development Company | Frontend & Backend Solutions, UI/UX Experts"
        description="We build world-class web development solutions with expert frontend & backend developers, UI/UX designers, QA specialists, and DevOps engineers. From ideation, research, and prototyping to launch and maintenance – we deliver complete digital products that help businesses achieve unique goals."
        canonical="https://www.webforgeplus.in"
      />
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Portfolio />
      <LogoTicker />
      <CallToAction />
      <Footer />
    </>
  );
}
