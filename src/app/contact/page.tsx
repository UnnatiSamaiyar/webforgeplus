import { CallToAction } from "@/sections/CallToAction";
import ContactHeader from "@/sections/ContactHeader";
import { FAQs } from "@/sections/FAQs";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Pricing } from "@/sections/Pricing";

export default function Contact() {
    return (
        <>
            <Header />
            <ContactHeader />
            <Pricing />
            <CallToAction />
            <FAQs />
            <Footer />
        </>
    );
}
