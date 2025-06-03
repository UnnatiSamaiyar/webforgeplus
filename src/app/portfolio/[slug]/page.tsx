import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { SinglePortfolioHero } from "@/sections/SinglePortfolioHero";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cashrivo from '@/assets/portfolio/cashrivo.png'
import Cosmo from '@/assets/portfolio/cosmo.png'
import Gym from '@/assets/portfolio/gym.png'
import Jwellery from '@/assets/portfolio/jwellery.png'
import Realestate from '@/assets/portfolio/realestate.png'
import Resturant from '@/assets/portfolio/resturant.png'
import Sbtechentreprises from '@/assets/portfolio/sbtechenterprise.png'
import Sbtechprintingpress from '@/assets/portfolio/sbtechprintingpress.png'
import Timewatch from '@/assets/portfolio/timewatch.png'
import DreamNest from '@/assets/portfolio/dreamnest.png'

const portfolioData = {
  "landing-page": {
    title: "Landing Page",
    tagline: "High-converting pages that capture leads",
    description:
      "We specialize in building landing pages that convert visitors into leads. Our designs are A/B tested and optimized for performance marketing, with fast load times and clear CTAs that drive action.",
    projects: [
      {
        id: "lp-001",
        name: "PropertyNest",
        image: Realestate,
        summary: "A conversion-focused landing page for a modern real estate listing platform.",
        link: "https://realestate.webforgeplus.in/",
      },
      {
        id: "lp-002",
        name: "BrewBite Cafe",
        image: Resturant,
        summary: "Designed to highlight BrewBite Cafe’s menu, and increase engagement.",
        link: "https://resturant.webforgeplus.in/",
      },
      {
        id: "lp-003",
        name: "IronPulse Fitness",
        image: Gym,
        summary: "An engaging landing page designed to attract gym memberships and class signups.",
        link: "https://gym.webforgeplus.in/",
      },
      {
        id: "lp-004",
        name: "Lustra Jewels",
        image: Jwellery,
        summary: "A premium product showcase landing page tailored for an online jewelry brand.",
        link: "https://jwellery.webforgeplus.in/",
      },

    ],
  },

  "corporate-website": {
    title: "Corporate Website",
    tagline: "Professional websites for powerful brands",
    description:
      "Built with scalability and brand consistency in mind, our corporate websites are tailored to reflect your company’s mission, culture, and services with elegance and trust.",
    projects: [

      {
        id: "cw-001",
        name: "SBTech Printing Press",
        image: Sbtechprintingpress,
        summary: "High-quality commercial printing service based in Greater Noida.",
        link: "https://sbtechprintingpress.in/"
      },
      {
        id: "cw-002",
        name: "SBTech Enterprises",
        image: Sbtechentreprises,
        summary: "",
        link: "https://sbtechenterprises.com/"
      },
      {
        id: "cw-003",
        name: "Cashrivo",
        image: Cashrivo,
        summary: "Engaging platform for digital coupons, and deals.",
        link: "https://cashrivo.com/",
      },
      {
        id: "cw-004",
        name: "TimeWatch Infocom",
        image: Timewatch,
        summary: "Technology site for biometric access and inspection control systems.",
        link: "https://www.timewatchindia.com/",
      },
      {
        id: "cw-005",
        name: "DreamNest",
        image: DreamNest,
        summary: "Modern, responsive platform showcasing premium real estate listings.",
        link: "https://dreamnest.webforgeplus.in/",
      }

    ],
  },

  "ecommerce-platform": {
    title: "E-commerce Platform",
    tagline: "Drive sales with a seamless shopping experience",
    description:
      "From product catalogs to secure checkout systems, we design and develop e-commerce platforms that are robust, responsive, and conversion-driven.",
    projects: [
      {
        id: "ec-001",
        name: "EchoWear",
        image: Cosmo,
        summary: "Fashion brand with seamless mobile experience.",
        link: "https://echowear.webforgeplus.in/",
      },
      {
        id: "ec-002",
        name: "Cosmo",
        image: Cosmo,
        summary: "Argan-infused care for soft, healthy, frizz-free hair.",
        link: "https://cosmo.webforgeplus.in/",
      },
    ],
  },

  "saas-product": {
    title: "SaaS Product",
    tagline: "Optimized for performance and scaling",
    description:
      "Our SaaS product solutions are engineered for scalability, seamless onboarding, and clean UI/UX. Whether you're launching a startup or enhancing an existing tool, we’ve got you covered.",
    projects: [
      {
        id: "sp-001",
        name: "StoreIt",
        image: "/images/portfolio/saas/collabhub.png",
        summary: "Team collaboration tool with real-time editing.",
        link: "https://storeit-hazel.vercel.app/",
      },

    ],
  },

  "web-application": {
    title: "Web Application",
    tagline: "Complex solutions with simple UX",
    description:
      "We build full-stack web applications that solve real-world problems with efficient logic and intuitive interfaces — from dashboards to workflow automation tools.",
    projects: [
      {
        id: "wa-001",
        name: "TaskTrackr",
        image: "/images/portfolio/webapp/tasktrackr.png",
        summary: "Project and task management for agile teams.",
        link: "/projects/wa-001",
      },
      {
        id: "wa-002",
        name: "EduPortal",
        image: "/images/portfolio/webapp/eduportal.png",
        summary: "Online education portal with live classes and grading.",
        link: "/projects/wa-002",
      },
      {
        id: "wa-003",
        name: "HealthDash",
        image: "/images/portfolio/webapp/healthdash.png",
        summary: "Healthcare analytics dashboard for hospitals.",
        link: "/projects/wa-003",
      },
    ],
  },

  "mobile-app": {
    title: "Mobile App",
    tagline: "User-centric app design for engagement",
    description:
      "Our mobile apps focus on user experience, speed, and cross-platform compatibility. We develop apps that users love — be it for iOS, Android, or hybrid environments.",
    projects: [
      {
        id: "ma-001",
        name: "EventBooking App",
        image: "/images/portfolio/mobile/fitlife.png",
        summary: "Fitness tracking app with personalized goals.",
        link: "/projects/ma-001",
      },
      {
        id: "ma-001",
        name: "Expense Tracker",
        image: "/images/portfolio/mobile/fitlife.png",
        summary: "Fitness tracking app with personalized goals.",
        link: "/projects/ma-001",
      },

    ],
  },
};





export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const data = portfolioData[params.slug as keyof typeof portfolioData];
  if (!data) return notFound();

  return (
    <>
      <Header />
      <SinglePortfolioHero />
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-visible relative" id="our-work">
        <div className="container relative z-10">
          <div className="section-heading text-center">
            <div className="tag mx-auto">Our Portfolio</div>
            <h1 className="section-title mt-5">{data.title}</h1>
            <p className="section-description mt-5 max-w-2xl mx-auto">{data.tagline}</p>
          </div>



          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 relative z-10">
            {data.projects.map((project) => (
              <>
                <Link href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 ">
                  <div key={project.id} className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
                    <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden">

                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-[#010d3e] mb-2">{project.summary}</p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-blue-500 hover:underline"
                    >
                      View Project →
                    </Link>

                  </div>
                </Link>
              </>

            ))}
          </div>
        </div>
      </section>
      <Pricing />
      <CallToAction />
      <LogoTicker />
      <Footer />
    </>
  );
}
