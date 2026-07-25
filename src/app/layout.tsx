import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../styles.css";

export const metadata: Metadata = {
  title: "Nalanda College Colombo — Character Illumines Wisdom",
  description:
    "Official website of Nalanda College Colombo. Vision, mission, admissions notices, co-curricular life, alumni information and contact details.",
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
        <link rel="icon" href="/nc-crest.png" type="image/png" />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}