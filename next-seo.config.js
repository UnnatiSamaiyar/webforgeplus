// next-seo.config.js
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://webforgeplus.com";

const SEO = {
  title: "WebforgePlus — Web Development Agency",
  description:
    "WebforgePlus is a top web development agency offering end-to-end solutions — from frontend and backend development, UI/UX design, and cloud services, to product strategy, research, prototyping, launch, and maintenance.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    site_name: "WebforgePlus",
    title: "WebforgePlus — Web Development Agency",
    description:
      "We provide expert web development solutions including frontend, backend, full-stack, UI/UX design, low-code, cloud, DevOps, QA, and project management to fulfill unique business goals.",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: `
        development, web, solutions, best, company, build, frontend, backend, stack,
        ui, ux, designers, developers, project, services, development services, process,
        website, solve, leverage, featured, case studies, class, offer, service, need,
        product, role, client, unique, business goals, low code, cloud, ideation, market research,
        wireframing, prototyping, design, launch, maintenance, devops, engineers, qa, specialists,
        manager, prepare, description, decide, tech stack, define budget, expert,
        web development, web development company, web development services,
        development solutions, web development solutions, web development process,
        case studies, best class web development, service build solutions,
        frontend development, backend development, full stack development,
        low code development, cloud development, ideation, prototyping, UI UX design,
        launch and maintenance, project management, devops engineers, qa specialists
      `,
    },
  ],
};

export default SEO;
