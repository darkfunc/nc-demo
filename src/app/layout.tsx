import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../styles.css";

const SITE_URL = "https://www.nalandacolleges.lk";
const SITE_NAME = "Nalanda College Colombo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Character Illumines Wisdom`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Official website of Nalanda College Colombo. Vision, mission, admissions notices, co-curricular life, alumni information and contact details.",
  applicationName: SITE_NAME,
  keywords: [
    "Nalanda College Colombo",
    "Nalanda College",
    "Colombo school",
    "Buddhist education Sri Lanka",
    "NC",
    "Mother Nalanda",
    "Nalanda",
    "NJOBA",
    "NCCU",
    "Nalanda College Colombo Old Boys Association",
    "Nalanda College Colombo Union",
    "Nalanda College Colombo Alumni",
    "Nalanda College Colombo Admissions",
    "Nalanda College Colombo News",
    "Nalanda College Colombo Announcements",
    "100Nalanda",
    "Nalanda College Colombo Co-curricular",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Character Illumines Wisdom`,
    description:
      "Official website of Nalanda College Colombo. Vision, mission, admissions notices, co-curricular life, alumni information and contact details.",
    images: [
      {
        url: "/og-image.jpg", // TODO: add a real 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Character Illumines Wisdom`,
    description:
      "Official website of Nalanda College Colombo. Vision, mission, admissions notices, co-curricular life, alumni information and contact details.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/nc-crest.png", type: "image/png" }],
    shortcut: "/nc-crest.png",
    apple: "/apple-touch-icon.png", // TODO: add 180x180 apple-touch-icon.png to /public
  },
  manifest: "/site.webmanifest", // TODO: add a basic web manifest to /public
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/nc-crest.png`,
  foundingDate: "1925",
  sameAs: [
    // TODO: add real social profile URLs, e.g.
    // "https://www.facebook.com/NalandaCollegeColombo",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=Epilogue:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}