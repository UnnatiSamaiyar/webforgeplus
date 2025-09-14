import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { PrivacyContent } from "@/sections/PrivacyContent";
import SEO from "@/sections/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="WebForgePlus – Privacy Policy | Web Development Services Company"
        description="Read our Privacy Policy to learn how we collect, use, and protect your personal information. We value your privacy and ensure data security across our services."
        canonical="https://www.webforgeplus.in/privacy-policy"
      />
      <Header />
      <PrivacyContent />
      <Footer />
    </>
  );
}
