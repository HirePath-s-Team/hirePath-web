import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Layers, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const companySlides = [
  {
    company: "Google",
    slug: "google",
    role: "SWE",
    question: "Design a rate limiter for a global API gateway.",
    focus: "System design, scalability",
  },
  {
    company: "Meta",
    slug: "meta",
    role: "Data Engineer",
    question: "Detect anomalous growth in event streams.",
    focus: "SQL, time-series",
  },
  {
    company: "Amazon",
    slug: "amazon",
    role: "SWE",
    question: "Optimize a warehouse routing algorithm.",
    focus: "Graphs, optimization",
  },
  {
    company: "Microsoft",
    slug: "microsoft",
    role: "PM",
    question: "Prioritize feature tradeoffs for an AI assistant.",
    focus: "Product sense, metrics",
  },
  {
    company: "Stripe",
    slug: "stripe",
    role: "Backend",
    question: "Design idempotent payment processing.",
    focus: "Distributed systems",
  },
  {
    company: "Netflix",
    slug: "netflix",
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

const testimonials = [
  { name: "Priya M.", role: "SWE @ Google", quote: "The canonical structure kept me focused and confident." },
  { name: "Adrian K.", role: "Backend @ Amazon", quote: "Seeing real appearances helped me prioritize fast." },
  { name: "Sara L.", role: "PM @ Microsoft", quote: "The roadmap flow made prep feel deliberate and calm." },
];

const pricingPlans = [
  {
    tier: "Starter",
    price: "INR 0",
    desc: "Perfect for getting started with interview preparation.",
    button: "Get Started Free",
    features: [
      "100+ core interview questions",
      "Basic progress tracking",
      "Practice by topic",
      "Limited AI assistance",
      "Community support",
    ],
  },
  {
    tier: "Pro",
    price: "INR 1,599",
    desc: "For serious candidates targeting top companies.",
    button: "Start Pro Plan",
    popular: true,
    features: [
      "Everything in Starter",
      "Company-specific roadmaps",
      "AI mock interviews",
      "Advanced analytics",
      "Personalized study plans",
      "Resume review tools",
      "Priority support",
    ],
  },
  {
    tier: "Institution",
    price: "INR 4,199",
    desc: "Built for colleges, bootcamps, and training institutes.",
    button: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team and student management",
      "Instructor dashboard",
      "Cohort analytics",
      "Custom learning paths",
      "Progress reports and exports",
      "Dedicated onboarding support",
    ],
  },
];

const faqs = [
  { q: "How is this different from LeetCode?", a: "HirePath maps canonical questions to real interview appearances and patterns." },
  { q: "Do you cover system design?", a: "Yes. Roadmaps include focused system design modules and prompts." },
  { q: "Can I track progress by company?", a: "Absolutely. Filter by company and see recent appearance trends." },
  { q: "Is there a free plan?", a: "Starter includes core question access and basic tracking." },
];

const Index = () => {
  const navigate = useNavigate();

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const handleViewQuestions = (companyName) => {
    const destination = `/questions?company=${encodeURIComponent(companyName)}`;
    const token = localStorage.getItem("token");

    if (token) {
      navigate(destination);
      return;
    }

    navigate(`/login?redirect=${encodeURIComponent(destination)}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-sm">
              H
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">HirePath</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link to="/questions" className="transition-colors hover:text-foreground">Questions</Link>
            <Link to="/companies" className="transition-colors hover:text-foreground">Companies</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground">Blog</Link>
            <Link to="/learn" className="transition-colors hover:text-foreground">Practice</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button className="h-10 px-5" asChild>
              <Link to="/questions">
                Start practicing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--secondary)/0.55),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,hsl(var(--accent)/0.32),transparent_24%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Interview prep, clarified
              </span>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Interview preparation built on real interview data.
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground">
                HirePath organizes canonical questions alongside their real-world appearances, so you prepare with clarity, not repetition.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="h-12 px-7" asChild>
                  <Link to="/questions">
                    Explore questions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-7 bg-background/70" asChild>
                  <Link to="/dashboard">View dashboard</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  10k+ appearances indexed
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Canonical + variations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Signal-first prep flow
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "10k+", label: "Interview appearances indexed" },
                  { value: "120+", label: "Companies covered" },
                  { value: "600+", label: "Canonical questions" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-card/70 px-4 py-4 shadow-sm">
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-5 -top-4 h-36 w-36 rounded-full bg-secondary/60 blur-[70px]" />
              <div className="absolute -bottom-6 -left-4 h-36 w-36 rounded-full bg-accent/45 blur-[80px]" />

              <div className="relative rounded-[2rem] border border-border bg-card/80 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">HirePath preview</p>
                    <h2 className="text-xl font-semibold text-foreground">Interview prep workspace</h2>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Live data</span>
                </div>

                <div className="relative mt-6">
                  <div className="rounded-[1.75rem] border border-border bg-background/80 p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--difficulty-medium))]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent-glow))]" />
                      <span className="ml-3">HirePath - Dashboard</span>
                    </div>

                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-2xl border border-border bg-card/85 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Canonical question</p>
                        <div className="mt-3 space-y-2 text-sm text-foreground/85">
                          <div className="flex items-start gap-2">
                            <Target className="mt-0.5 h-4 w-4 text-primary" />
                            Model constraints and tradeoffs first.
                          </div>
                          <div className="flex items-start gap-2">
                            <Layers className="mt-0.5 h-4 w-4 text-primary" />
                            Clear steps and variants.
                          </div>
                          <div className="flex items-start gap-2">
                            <BarChart3 className="mt-0.5 h-4 w-4 text-primary" />
                            Sample metrics and outcomes.
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border bg-card/85 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Appearance trends</p>
                        <div className="mt-4 flex h-24 items-end gap-2">
                          {[38, 52, 30, 64, 46, 70].map((h, i) => (
                            <span
                              key={i}
                              className="w-full rounded-md bg-gradient-to-t from-primary to-[hsl(var(--accent-glow))]"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 right-6 w-44 rounded-[1.5rem] border border-border bg-background/90 p-4 shadow-xl">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Mobile view</span>
                      <span className="text-primary">Live</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-12 rounded-xl bg-card/90" />
                      <div className="h-12 rounded-xl bg-card/90" />
                      <div className="h-8 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--accent-glow))]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">About the questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                One canonical question. Multiple real appearances.
              </h2>
              <p className="text-base text-muted-foreground">
                We separate the problem itself from how it shows up across companies, roles, and years. That keeps prep structured and reveals patterns you can reuse.
              </p>
              <Button variant="outline" className="h-11 bg-background/75" asChild>
                <Link to="/learn">Try a guided session</Link>
              </Button>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-card/80 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Typical Question Bank</span>
                <span className="text-xs text-muted-foreground">Real appearances</span>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-foreground/85">
                {["Two Sum - Google 2023", "Two Sum - Meta 2022", "Two Sum - Amazon 2024"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-border bg-background/80 px-4 py-3">
                    <span>{item}</span>
                    <span className="text-xs text-muted-foreground">Tagged</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 text-center space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Three steps to structured prep.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Pick your path", text: "Choose a roadmap or start from a company-focused list." },
                { title: "Study canonicals", text: "Learn the core question once, then see real appearances." },
                { title: "Track progress", text: "Measure coverage and focus on high-signal gaps." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-2xl border border-border bg-card/75 p-6 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Step {i + 1}</div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card/20">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Designed for focus</p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Designed for clarity and focus.
                </h2>
                <p className="text-base text-muted-foreground">
                  Every question keeps the prompt tight, surfaces the key signal, and stays consistent across appearances.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {clarityPoints.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-background/85 p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/55 text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent/15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--secondary)/0.45),transparent_55%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Top companies</p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Interview questions from the teams you want to join.
                </h2>
                <p className="text-base text-muted-foreground">
                  Swipe through the most common prompts and see what each company emphasizes.
                </p>
              </div>

              <Button variant="outline" className="bg-background/75" asChild>
                <Link to="/companies">Explore all companies</Link>
              </Button>
            </div>

            <div className="mt-10">
              <Carousel
                plugins={[autoplay.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4">
                  {companySlides.map((slide) => (
                    <CarouselItem key={slide.company} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                      <div className="flex h-full flex-col rounded-2xl border border-border bg-background/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{slide.company}</p>
                            <h3 className="text-lg font-semibold text-foreground">{slide.role}</h3>
                          </div>

                          <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold text-foreground">
                            Top Prompt
                          </span>
                        </div>

                        <p className="mt-4 text-sm text-foreground/85">{slide.question}</p>
                        <p className="mt-3 text-xs text-muted-foreground">{slide.focus}</p>

                        <div className="mt-auto pt-6">
                          <Button className="w-full" onClick={() => handleViewQuestions(slide.company)}>
                            View Questions
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 border-border bg-background/90 text-foreground shadow-sm hover:bg-secondary/55" />
                <CarouselNext className="right-2 border-border bg-background/90 text-foreground shadow-sm hover:bg-secondary/55" />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 text-center space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Success stories</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Candidates who prepped with clarity.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-card/75 p-6 shadow-sm">
                  <p className="text-sm text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-4 text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/18">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Choose your prep track.
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Select the plan that matches your interview preparation goals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.tier}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-primary bg-background/90 shadow-lg"
                      : "border-border bg-card/75"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="text-sm text-muted-foreground">{plan.tier}</div>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="mb-1 text-sm text-muted-foreground">/month</span>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/85">
                        <span className="text-primary">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Button className="h-11 w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.button}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Common questions, answered.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl border border-border bg-card/75 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary/55 via-background to-accent/35">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="rounded-[2rem] border border-border bg-background/80 p-10 shadow-xl sm:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Prepare with structure</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Prepare with structure. Not guesswork.
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Start exploring canonical interview knowledge and track your progress across companies and roles.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Verified patterns
                    </span>
                    <span className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Company context
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="h-12 px-7" asChild>
                    <Link to="/questions">
                      Get started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-7 bg-background/75" asChild>
                    <Link to="/dashboard">Open dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border bg-background/95">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-3">
                <div className="text-lg font-semibold text-foreground">HirePath</div>
                <p className="text-sm text-muted-foreground">
                  Interview prep built on real interview data.
                </p>
              </div>

              {[
                {
                  title: "Product",
                  links: [
                    { name: "Questions", path: "/questions" },
                    { name: "Roadmaps", path: "/roadmaps" },
                    { name: "Companies", path: "/companies" },
                  ],
                },
                {
                  title: "Company",
                  links: [
                    { name: "About", path: "/about" },
                    { name: "Careers", path: "/careers" },
                    { name: "Contact", path: "/contact" },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    { name: "Blog", path: "/blog" },
                    { name: "FAQ", path: "/faq" },
                    { name: "Support", path: "/support" },
                  ],
                },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-foreground">{col.title}</div>

                  <div className="mt-3 space-y-2">
                    {col.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
              <p className="text-xs text-muted-foreground">
                Copyright 2026 HirePath. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
