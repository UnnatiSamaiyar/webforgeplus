import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { RefundContent } from "@/sections/RefundContent";
import SEO from "@/sections/SEO";

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="WebForgePlus – Refund Policy | Web Development Services Company"
        description="Read our Refund Policy for web development services. Understand eligibility, timelines, and conditions for refunds on projects, services, and digital solutions."
        canonical="https://www.webforgeplus.in/refund-policy"
      />
      <Header />
      <RefundContent />
      <Footer />
    </>
  );
}
