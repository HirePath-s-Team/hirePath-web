import { Link, useParams } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];
  const nextPost = blogPosts[postIndex + 1] || blogPosts[0];

  if (!post) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card/40 p-8">
          <p className="text-foreground">Post not found.</p>
          <Button asChild variant="outline" className="mt-4 border-border">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className={`rounded-2xl border border-border bg-gradient-to-br ${post.heroTheme} p-2 shadow-sm`}>
          <div className={`h-64 w-full rounded-xl bg-gradient-to-br ${post.imageTheme}`}>
            <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.14),transparent_55%)]" />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{post.category}</p>
            <h1 className="text-3xl font-semibold text-foreground">{post.title}</h1>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{post.author}</span>
              <span>-</span>
              <span>{post.date}</span>
              <span>-</span>
              <span>{post.minutes} min read</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {post.sections.map((section) => (
            <div key={section.heading} className="rounded-2xl border border-border bg-card/40 p-6">
              <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{section.body}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="text-lg font-semibold text-foreground">Code Snapshot</h2>
            <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-border bg-background/60 p-5 font-mono text-sm leading-relaxed text-foreground/90">
{post.code}
            </pre>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/40 p-6">
          <div>
            <p className="text-sm text-muted-foreground">Up next</p>
            <h3 className="text-lg font-semibold text-foreground">{nextPost.title}</h3>
          </div>
          <Button asChild className="h-10">
            <Link to={`/blog/${nextPost.slug}`}>
              Read next
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
