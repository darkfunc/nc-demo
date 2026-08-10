import { Quote } from "lucide-react";

export function PrincipalSection() {
  return (
    <section id="principal" className="py-24 lg:py-32 bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-2">
              Leadership Message
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              A Message from the Principal
            </h2>
          </div>
          <div className="hidden md:block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Nalanda College Colombo
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-maroon/10 -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-ink/5 -z-10 hidden lg:block" />

            <div className="relative max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-2xl bg-background">
              <div className="aspect-3/4 relative">
                <img
                  src="/principal.jpg"
                  alt="Mr. Iran Champika de Silva, Principal of Nalanda College Colombo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-paper">
                    Mr. Iran Champika de Silva
                  </h3>
                  <p className="text-paper/75 text-sm">Principal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full bg-maroon/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-maroon mb-6">
              Principal&apos;s Message
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              Guiding every student toward <span className="text-maroon">wisdom and character</span>
            </h3>

            <div className="relative">
              <Quote className="absolute -top-3 -left-2 h-10 w-10 text-maroon/15" />
              <div className="space-y-4 pl-8 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  It gives me immense pleasure to welcome you to Nalanda College, Colombo, an
                  institution that has stood at the forefront of Buddhist education in Sri Lanka
                  for nearly a century.
                </p>
                <p>
                  At Nalanda, we believe true education goes beyond textbooks and examinations.
                  Our mission is to nurture well-rounded individuals who embody our motto,
                  <em className="text-foreground font-medium"> Character Illumines Wisdom.</em>
                </p>
                <p>
                  We remain committed to academic excellence while instilling compassion,
                  integrity, and service. With dedicated teachers, strong traditions, and vibrant
                  co-curricular life, every Nalandian is encouraged to grow with confidence and
                  purpose.
                </p>
                <p>
                  As we continue our journey, we stay focused on producing noble sons who will
                  contribute meaningfully to Sri Lanka and beyond.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-display text-lg font-bold text-foreground">
                Mr. Iran Champika de Silva
              </p>
              <p className="text-sm text-muted-foreground">
                Principal, Nalanda College Colombo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}