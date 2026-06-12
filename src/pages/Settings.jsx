import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function Settings() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
          <p className="mt-2 text-sm text-muted-foreground">Manage your account, preferences, and notifications.</p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Account</h2>
              <Badge variant="outline" className="border-border text-xs">Personal</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Full name" defaultValue="Jordan Parker" className="border-border bg-background/60" />
              <Input placeholder="Email address" defaultValue="jordan@hirepath.com" className="border-border bg-background/60" />
              <Input placeholder="Role" defaultValue="Software Engineer" className="border-border bg-background/60" />
              <Input placeholder="Target company" defaultValue="Google" className="border-border bg-background/60" />
            </div>
            <Button className="mt-4 h-10">Save changes</Button>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="mb-4 text-sm font-semibold text-foreground">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Weekly progress summary", desc: "Receive a recap of your study streaks and coverage." },
                { label: "New company appearances", desc: "Get alerted when new interview data is added." },
                { label: "Roadmap milestone reminders", desc: "Stay on track with upcoming weekly goals." },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card/60 p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="mb-4 text-sm font-semibold text-foreground">Appearance</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {["Comfort", "Compact", "Focus"].map((mode) => (
                <button key={mode} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/35 hover:text-foreground">
                  {mode} view
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="mb-4 text-sm font-semibold text-foreground">Security</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Current password" type="password" className="border-border bg-background/60" />
              <Input placeholder="New password" type="password" className="border-border bg-background/60" />
            </div>
            <Button variant="outline" className="mt-4 border-border">Update password</Button>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
