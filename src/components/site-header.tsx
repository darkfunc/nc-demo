"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "News", href: "/news" },
  { label: "Achievements", href: "/achievements" },
  { label: "Co-Curricular", href: "/co-curricular" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      {/* Utility bar */}
      <div className="bg-maroon text-maroon-foreground border-b border-maroon">
        <div className="max-w-7xl mx-auto py-2.5 px-6 flex flex-col items-center text-center gap-1 sm:flex-row sm:justify-between sm:text-left sm:items-center sm:gap-2 text-[11px] font-mono tracking-widest uppercase">
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            <span>info@nalandacollege.lk</span>
            <span className="hidden sm:inline">Official website</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            <span className="hidden md:inline opacity-80">Vision · virtues and wisdom</span>

          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 lg:py-5 flex flex-col items-center gap-4 lg:gap-5">
          <Link href="/" className="flex items-center justify-center gap-4 text-center">
            <img
              src="/nc-crest.png"
              alt="Nalanda College crest"
              className="h-12 w-12 object-contain shrink-0"
            />
            <div className="leading-none">
              <span className="block font-display font-extrabold text-lg tracking-tight uppercase">
                Nalanda College
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Colombo · Sri Lanka
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8 text-[13px] font-medium flex-wrap">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`pb-1 border-b-2 transition-colors ${
                  pathname === l.href
                    ? "border-maroon text-maroon"
                    : "border-transparent hover:text-maroon hover:border-maroon"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="border-2 border-maroon bg-maroon text-maroon-foreground px-5 py-2.5 rounded-sm text-[12px] font-bold tracking-tight uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-maroon/20"
            >
              Apply Now
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:border-maroon hover:text-maroon hover:shadow-md"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm bg-paper p-0">
              <div className="flex h-full flex-col">
                <SheetHeader className="border-b border-border px-6 py-6 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/80">
                    <img
                      src="/nc-crest.png"
                      alt="Nalanda College crest"
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <SheetTitle className="font-display text-2xl font-extrabold tracking-tight">
                    Nalanda College
                  </SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">
                    Navigate the school website.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 px-4 py-5">
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all ${
                        pathname === "/"
                          ? "border-maroon/30 bg-maroon/5 text-maroon shadow-sm"
                          : "border-border/70 bg-background hover:border-maroon/30 hover:bg-secondary/70"
                      }`}
                    >
                      Home
                      <ArrowRight className="h-4 w-4 opacity-60" />
                    </Link>
                    {navLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all ${
                          pathname === l.href
                            ? "border-maroon/30 bg-maroon/5 text-maroon shadow-sm"
                            : "border-border/70 bg-background hover:border-maroon/30 hover:bg-secondary/70"
                        }`}
                      >
                        {l.label}
                        <ArrowRight className="h-4 w-4 opacity-60" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border/70 px-1 pt-5">
                    <Link
                      href="/admissions"
                      className="inline-flex w-full items-center justify-center rounded-full bg-maroon px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-maroon-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-ink hover:shadow-md"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
