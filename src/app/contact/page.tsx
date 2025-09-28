import { CallToAction } from "@/sections/CallToAction";
import ContactHeader from "@/sections/ContactHeader";
import { FAQs } from "@/sections/FAQs";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Pricing } from "@/sections/Pricing";
import SEO from "@/sections/SEO";

export default function Contact() {
  return (
    <>
        <SEO
            title="WebForgePlus – Contact Us | Get in Touch with WebForgePlus – Web Development & IT Solutions"
            description="Have questions or need a custom website? Contact WebForgePlus today for expert web development, IT solutions, and digital services. Quick response guaranteed!"
            canonical="https://www.webforgeplus.in/contact"
        />
      <Header />
      <ContactHeader />
      <Pricing />
      <CallToAction />
      <FAQs />
      <Footer />
    </>
  );
}
