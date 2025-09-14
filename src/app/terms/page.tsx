import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import SEO from "@/sections/SEO";
import { TermsContent } from "@/sections/TermsContent";

export default function Terms() {
  return (
    <>
      <SEO
        title="WebForgePlus – Terms & Conditions | Web Development Services Company"
        description="Read the Terms & Conditions for using our web development services. Learn about user responsibilities, project process, payments, confidentiality, and service limitations."
        canonical="https://www.webforgeplus.in/terms"
      />
      <Header />
      <TermsContent />
      <Footer />
    </>
  );
}
