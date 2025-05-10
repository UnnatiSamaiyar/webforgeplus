import AboutContent from "@/sections/AboutContent";
import AboutHeader from "@/sections/AboutHeader";
import { BlogCarousel } from "@/sections/BlogsCarousel";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { Portfolio } from "@/sections/Portfolio";


export default function About() {
    return (
        <>
        <Header />
        <AboutHeader />
        <AboutContent />
        <CallToAction />
        <LogoTicker />
        <Portfolio />
        <BlogCarousel />
        <Footer />
        </>
    );
}
