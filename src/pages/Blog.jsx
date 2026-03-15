import { Link } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Blog</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Research-backed notes on interview prep, systems, and hiring signals.
            </p>
          </div>
          <Button className="h-10 bg-[#3d6bff] text-white hover:bg-[#335ce0]">Subscribe</Button>
        </div>

        <section className="rounded-2xl border border-border bg-gradient-to-br from-[#1c2b52] via-[#0d1426] to-[#1a1635] p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{featured.category}</p>
              <h2 className="text-2xl font-semibold text-foreground">{featured.title}</h2>
              <p className="text-sm text-muted-foreground">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.minutes} min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="h-10 bg-[#3d6bff] text-white hover:bg-[#335ce0]">
                <Link to={`/blog/${featured.slug}`}>
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className={`h-full min-h-[220px] rounded-xl border border-border/60 bg-gradient-to-br ${featured.imageTheme}`}>
                <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,_rgba(90,120,255,0.25),_transparent_60%)]" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {rest.map((post) => (
            <div key={post.slug} className="rounded-2xl border border-border bg-card/40 p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-[0.3em]">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.minutes} min read</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-4 border-border">
                <Link to={`/blog/${post.slug}`}>Read article</Link>
              </Button>
            </div>
          ))}
        </section>
      </div>
    </AppLayout>
  );
}
