import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Layers, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const companySlides = [
  {
    company: "Google",
    role: "SWE",
    question: "Design a rate limiter for a global API gateway.",
    focus: "System design, scalability",
  },
  {
    company: "Meta",
    role: "Data Engineer",
    question: "Detect anomalous growth in event streams.",
    focus: "SQL, time-series",
  },
  {
    company: "Amazon",
    role: "SWE",
    question: "Optimize a warehouse routing algorithm.",
    focus: "Graphs, optimization",
  },
  {
    company: "Microsoft",
    role: "PM",
    question: "Prioritize feature tradeoffs for an AI assistant.",
    focus: "Product sense, metrics",
  },
  {
    company: "Stripe",
    role: "Backend",
    question: "Design idempotent payment processing.",
    focus: "Distributed systems",
  },
  {
    company: "Netflix",
    role: "ML",
    question: "Improve recommendations for cold-start users.",
    focus: "ML strategy",
  },
];

const clarityPoints = [
  {
    title: "Canonical Question",
    description: "Problem statement, hints, solution, and prep advice in one consistent format.",
    icon: Target,
  },
  {
    title: "Interview Appearances",
    description: "Company, role, round, year, difficulty, and trend frequency in one view.",
    icon: Layers,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,120,255,0.35),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(18,28,60,0.9),_transparent_70%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4b7bff] to-[#7d5cff] text-sm font-bold text-white">
              H
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">HirePath</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            <Link to="/questions" className="hover:text-white transition-colors">Questions</Link>
            <Link to="/companies" className="hover:text-white transition-colors">Companies</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/learn" className="hover:text-white transition-colors">Practice</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden border border-white/10 text-white hover:bg-white/10 md:inline-flex" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button className="h-10 px-5 bg-[#3d6bff] text-white hover:bg-[#335ce0]" asChild>
              <Link to="/questions">
                Start practicing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(45,76,170,0.45),_transparent_65%)]" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-[#6e8bff]" />
                Interview prep, clarified
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
                Interview preparation built on real interview data.
              </h1>
              <p className="text-lg text-white/70">
                HirePath organizes canonical questions alongside their real-world appearances, so you prepare with clarity,
                not repetition.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="h-12 px-7 bg-[#3d6bff] text-white hover:bg-[#335ce0]" asChild>
                  <Link to="/questions">
                    Explore questions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-7 border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/dashboard">View dashboard</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6e8bff]" />
                  10k+ appearances indexed
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6e8bff]" />
                  Canonical + variations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6e8bff]" />
                  Signal-first prep flow
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-[#4b7bff]/30 blur-[90px]" />
              <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-[#7d5cff]/20 blur-[90px]" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">HirePath preview</p>
                    <h2 className="text-xl font-semibold text-white font-serif">Interview prep workspace</h2>
                  </div>
                  <span className="rounded-full bg-[#3d6bff]/20 px-3 py-1 text-xs font-semibold text-[#9db1ff]">Live data</span>
                </div>

                <div className="mt-6 relative">
                  <div className="relative rounded-3xl border border-white/10 bg-[#0f172a] p-6">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#3d6bff]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#5b7dff]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7d5cff]" />
                      <span className="ml-3">HirePath — Dashboard</span>
                    </div>
                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-2xl border border-white/10 bg-[#111b33] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Canonical question</p>
                        <div className="mt-3 space-y-2 text-sm text-white/80">
                          <div className="flex items-start gap-2">
                            <Target className="mt-0.5 h-4 w-4 text-[#6e8bff]" />
                            Model constraints + tradeoffs first.
                          </div>
                          <div className="flex items-start gap-2">
                            <Layers className="mt-0.5 h-4 w-4 text-[#6e8bff]" />
                            Clear steps + variants.
                          </div>
                          <div className="flex items-start gap-2">
                            <BarChart3 className="mt-0.5 h-4 w-4 text-[#6e8bff]" />
                            Sample metrics + outcomes.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-[#111b33] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Appearance trends</p>
                        <div className="mt-4 flex h-24 items-end gap-2">
                          {[38, 52, 30, 64, 46, 70].map((h, i) => (
                            <span key={i} className="w-full rounded-md bg-gradient-to-t from-[#3d6bff] to-[#7d5cff]" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 right-6 w-44 rounded-3xl border border-white/10 bg-[#0f172a] p-4 shadow-xl">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Mobile view</span>
                      <span className="text-[#9db1ff]">Live</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-12 rounded-xl bg-[#111b33]" />
                      <div className="h-12 rounded-xl bg-[#111b33]" />
                      <div className="h-8 rounded-xl bg-gradient-to-r from-[#3d6bff] to-[#7d5cff]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1222]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">About the questions</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                  One canonical question. Multiple real appearances.
                </h2>
                <p className="text-base text-white/70">
                  We separate the problem itself from how it shows up across companies, roles, and years. That keeps prep
                  structured and reveals patterns you can reuse.
                </p>
                <Button variant="outline" className="h-11 px-6 border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/learn">Try a guided session</Link>
                </Button>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Typical Question Bank</span>
                  <span className="text-xs text-white/50">Real appearances</span>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-white/80">
                  {["Two Sum — Google 2023", "Two Sum — Meta 2022", "Two Sum — Amazon 2024"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#10182f] px-4 py-3">
                      <span>{item}</span>
                      <span className="text-xs text-white/50">Tagged</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0a0f1d]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-semibold text-white">10k+</p>
                <p className="text-sm text-white/60 mt-2">Interview appearances indexed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-semibold text-white">120+</p>
                <p className="text-sm text-white/60 mt-2">Companies covered</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-semibold text-white">600+</p>
                <p className="text-sm text-white/60 mt-2">Canonical questions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1222]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">How it works</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                Three steps to structured prep.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Pick your path", text: "Choose a roadmap or start from a company-focused list." },
                { title: "Study canonicals", text: "Learn the core question once, then see real appearances." },
                { title: "Track progress", text: "Measure coverage and focus on high-signal gaps." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs text-white/60 uppercase tracking-[0.3em]">Step {i + 1}</div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a0f1d]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Designed for focus</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                  Designed for clarity and focus.
                </h2>
                <p className="text-base text-white/70">
                  Every question keeps the prompt tight, surfaces the key signal, and stays consistent across appearances.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {clarityPoints.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2a3f7a] text-[#b2c2ff]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0b1222]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(86,120,255,0.18),_transparent_70%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Top companies</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                  Interview questions from the teams you want to join.
                </h2>
                <p className="text-base text-white/70">
                  Swipe through the most common prompts and see what each company emphasizes.
                </p>
              </div>
              <Button variant="ghost" className="text-[#9db1ff] hover:bg-white/10" asChild>
                <Link to="/companies">Explore all companies</Link>
              </Button>
            </div>
            <div className="mt-10">
              <Carousel opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {companySlides.map((slide) => (
                    <CarouselItem key={slide.company} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{slide.company}</p>
                            <h3 className="text-lg font-semibold text-white">{slide.role}</h3>
                          </div>
                          <span className="rounded-full bg-[#3d6bff]/20 px-3 py-1 text-xs font-semibold text-[#9db1ff]">Top prompt</span>
                        </div>
                        <p className="mt-4 text-sm text-white/85">{slide.question}</p>
                        <p className="mt-3 text-xs text-white/60">{slide.focus}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 border-white/20 bg-[#0f182e] text-white hover:bg-[#1b2b52]" />
                <CarouselNext className="right-2 border-white/20 bg-[#0f182e] text-white hover:bg-[#1b2b52]" />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="bg-[#0a0f1d]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Success stories</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                Candidates who prepped with clarity.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "Priya M.", role: "SWE @ Google", quote: "The canonical structure kept me focused and confident." },
                { name: "Adrian K.", role: "Backend @ Amazon", quote: "Seeing real appearances helped me prioritize fast." },
                { name: "Sara L.", role: "PM @ Microsoft", quote: "The roadmap flow made prep feel deliberate and calm." },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-white/70">"{t.quote}"</p>
                  <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b1222]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Pricing</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                Choose your prep track.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { tier: "Starter", price: "$0", desc: "Core question access and basic tracking." },
                { tier: "Pro", price: "$19", desc: "Full company appearances and roadmaps." },
                { tier: "Institution", price: "$49", desc: "Teams, analytics, and coaching support." },
              ].map((p, idx) => (
                <div key={p.tier} className={`rounded-2xl border ${idx === 1 ? "border-[#3d6bff]" : "border-white/10"} bg-white/5 p-6`}>
                  <div className="text-sm text-white/60">{p.tier}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{p.price}</div>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                  <Button className="mt-6 h-10 w-full bg-[#3d6bff] text-white hover:bg-[#335ce0]">Choose plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a0f1d]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">FAQ</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                Common questions, answered.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { q: "How is this different from LeetCode?", a: "HirePath maps canonical questions to real interview appearances and patterns." },
                { q: "Do you cover system design?", a: "Yes — roadmaps include focused system design modules and prompts." },
                { q: "Can I track progress by company?", a: "Absolutely. Filter by company and see recent appearance trends." },
                { q: "Is there a free plan?", a: "Starter includes core question access and basic tracking." },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a0f1d]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1c2b52] via-[#0d1426] to-[#1a1635] p-10 sm:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Prepare with structure</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-serif">
                    Prepare with structure. Not guesswork.
                  </h2>
                  <p className="text-base text-white/70">
                    Start exploring canonical interview knowledge and track your progress across companies and roles.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/65">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#6e8bff]" />
                      Verified patterns
                    </span>
                    <span className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#6e8bff]" />
                      Company context
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="h-12 px-7 bg-[#3d6bff] text-white hover:bg-[#335ce0]" asChild>
                    <Link to="/questions">
                      Get started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-7 border-white/20 text-white hover:bg-white/10" asChild>
                    <Link to="/dashboard">Open dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#080d19]">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-3">
                <div className="text-lg font-semibold text-white">HirePath</div>
                <p className="text-sm text-white/60">Interview prep built on real interview data.</p>
              </div>
              {[
                { title: "Product", links: ["Questions", "Roadmaps", "Companies"] },
                { title: "Company", links: ["About", "Careers", "Contact"] },
                { title: "Resources", links: ["Blog", "FAQ", "Support"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-white">{col.title}</div>
                  <div className="mt-3 space-y-2 text-sm text-white/60">
                    {col.links.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-xs text-white/40">© 2026 HirePath. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
