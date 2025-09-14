import AboutContent from "@/sections/AboutContent";
import AboutHeader from "@/sections/AboutHeader";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { Portfolio } from "@/sections/Portfolio";
import SEO from "@/sections/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="WebForgePlus – About Us | Expert Web Development & Digital Solutions"
        description="Learn more about WebForgePlus – a trusted web development and IT solutions company. Discover our mission, expertise, and commitment to helping businesses grow online."
        canonical="https://www.webforgeplus.in/about"
      />
      <Header />
      <AboutHeader />
      <AboutContent />
      <CallToAction />
      <LogoTicker />
      <Portfolio />
      <Footer />
    </>
  );
}
