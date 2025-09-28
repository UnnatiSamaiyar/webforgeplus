import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/toaster";
import DefaultSeoClient from "../components/DefaultSeoClient";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebforgePlus — Next.js Web Development Agency",
  description:
    "WebforgePlus builds fast, SEO-optimized, and scalable websites with Next.js, React, and modern technologies.",
  alternates: {
    canonical: "https://webforgeplus.com",
  },
  openGraph: {
    type: "website",
    url: "https://webforgeplus.com",
    title: "WebforgePlus — Next.js Web Development Agency",
    description:
      "WebforgePlus builds fast, SEO-optimized, and scalable websites with Next.js, React, and modern technologies.",
    siteName: "WebforgePlus",
    // images: [
    //   {
    //     url: "https://webforgeplus.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "WebforgePlus — Next.js Agency",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "WebforgePlus — Next.js Web Development Agency",
  //   description:
  //     "WebforgePlus builds fast, SEO-optimized, and scalable websites with Next.js, React, and modern technologies.",
  //   images: ["https://webforgeplus.com/og-image.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WebforgePlus",
            url: "https://webforgeplus.com",
            logo: "https://www.webforgeplus.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebForgeplus.0eafd13e.png&w=256&q=75",
            sameAs: [
              "https://www.linkedin.com/company/106771089/",
            ],
          }),
        }}
      />

      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
