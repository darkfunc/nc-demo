import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UnitPapersDirectory, type UnitPaperGrade } from "@/components/unit-papers-directory";

const grades: UnitPaperGrade[] = [
  { label: "Grade 4", number: "04", href: "https://drive.google.com/drive/folders/1p9JX45-lTHkqLmuGqJ5jSb2Z8KiFooxN" },
  { label: "Grade 5", number: "05" },
  { label: "Grade 6", number: "06" },
  { label: "Grade 7", number: "07", href: "https://drive.google.com/drive/folders/1DGJejjI0B1G5w0dCFJn7OqOcty7vGGxG" },
  { label: "Grade 8", number: "08", href: "https://drive.google.com/drive/folders/1xUPWwYo8f3zeM8z1FQdkNlvHx093k58r" },
  { label: "Grade 9", number: "09", href: "https://drive.google.com/drive/folders/1zypq-Uh9mNDzALH-84jYLxmL9a8ZOfel" },
  { label: "Grade 10", number: "10", href: "https://drive.google.com/drive/folders/1dcZhOa7IAUMg2WUbBNVIikDqe03s5I5j" },
  { label: "Grade 11", number: "11" },
  { label: "Grade 12/13", number: "12/13", href: "https://drive.google.com/drive/folders/1G7Gy5OI1Ua3bKJ-AAoTgDF2k4YwmWvua" },
];

export const metadata: Metadata = {
  title: "Unit Test Papers by Grade — Nalanda College Colombo",
  description:
    "Find official Nalanda College Colombo unit test paper folders by grade, with direct access to the published Google Drive resources.",
  keywords: [
    "Nalanda College unit test papers",
    "Nalanda College past papers",
    "Sri Lanka school unit test papers",
    "Grade 4 unit test papers",
    "Grade 10 unit test papers",
  ],
  alternates: { canonical: "/unit-test-papers" },
  openGraph: {
    title: "Unit Test Papers by Grade — Nalanda College Colombo",
    description: "Access official Nalanda College unit test paper folders by grade.",
    url: "/unit-test-papers",
    type: "website",
  },
};

const resourceJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nalanda College Colombo Unit Test Papers",
  description: "Official unit test paper folders organized by grade.",
  url: "https://www.nalandacolleges.lk/unit-test-papers",
  isPartOf: { "@type": "WebSite", name: "Nalanda College Colombo" },
  hasPart: grades.filter((grade) => grade.href).map((grade) => ({
    "@type": "LearningResource",
    name: `${grade.label} unit test papers`,
    learningResourceType: "Assessment resource",
    url: grade.href,
  })),
};

export default function UnitTestPapersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Student Resources · Official Folders"
          title={
            <>
              Unit test
              <br />
              <span className="text-maroon">papers.</span>
            </>
          }
          intro="A clear starting point for finding the unit test papers currently published by Nalanda College Colombo."
        />
        <UnitPapersDirectory grades={grades} />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceJsonLd) }} />
    </div>
  );
}