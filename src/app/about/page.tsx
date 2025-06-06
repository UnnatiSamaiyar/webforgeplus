import AboutContent from "@/sections/AboutContent";
import AboutHeader from "@/sections/AboutHeader";
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
        <Footer />
        </>
    );
}
