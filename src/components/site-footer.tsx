import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-secondary border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <img
            src="/nc-crest.png"
            alt="Nalanda College crest"
            className="w-12 h-14 object-contain mb-6"
          />
          <h4 className="font-display font-extrabold text-2xl uppercase tracking-tight mb-4">
            Nalanda College Colombo
          </h4>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            To gift the world great humans who are endowed with virtues and wisdom. To
            reward mother Lanka with noble sons with balanced personality, dedicated to
            serve the country, nation and religion.
          </p>
        </div>
        <div>
          <h5 className="font-mono text-[11px] uppercase tracking-widest text-maroon font-bold mb-6">
            Explore
          </h5>
          <ul className="text-sm text-muted-foreground space-y-4">
            <li>
              <Link href="/news" className="hover:text-maroon">
                News
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-maroon">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/co-curricular" className="hover:text-maroon">
                Co-Curricular
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-maroon">
                Admissions
              </Link>
            </li>
            <li>
              <a href="https://nalandacollege.lk/news/" className="hover:text-maroon">
                Official News
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-[11px] uppercase tracking-widest text-maroon font-bold mb-6">
            Community
          </h5>
          <ul className="text-sm text-muted-foreground space-y-4">
            <li>
              <Link href="/alumni" className="hover:text-maroon">
                Old Boys' Association
              </Link>
            </li>
            <li>
              <a href="https://web.facebook.com/NalandaCollegeColombo/" className="hover:text-maroon">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCCOaxljN65_1vKFuJpmHCsw" className="hover:text-maroon">
                YouTube
              </a>
            </li>
            <li>
              <a href="mailto:info@nalandacollege.lk" className="hover:text-maroon">
                info@nalandacollege.lk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span>© 2026 Nalanda College Colombo. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="https://drive.google.com/file/d/1_ihO6YaPWpLJ61hZu3lWUJ03h-OY-W4O/view?usp=sharing" className="hover:text-maroon">
            E-Newspaper
          </a>
          <a href="https://web.facebook.com/NalandaCollegeColombo/" className="hover:text-maroon">
            Facebook
          </a>
          <a href="mailto:info@nalandacollege.lk" className="hover:text-maroon">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
