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
          <p className="text-sm text-muted-foreground mt-2">Manage your account, preferences, and notifications.</p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-foreground">Account</h2>
              <Badge variant="outline" className="border-border text-xs">Personal</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Full name" defaultValue="Jordan Parker" className="bg-background/60 border-border" />
              <Input placeholder="Email address" defaultValue="jordan@hirepath.com" className="bg-background/60 border-border" />
              <Input placeholder="Role" defaultValue="Software Engineer" className="bg-background/60 border-border" />
              <Input placeholder="Target company" defaultValue="Google" className="bg-background/60 border-border" />
            </div>
            <Button className="mt-4 h-10 bg-[#3d6bff] text-white hover:bg-[#335ce0]">Save changes</Button>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Weekly progress summary", desc: "Receive a recap of your study streaks and coverage." },
                { label: "New company appearances", desc: "Get alerted when new interview data is added." },
                { label: "Roadmap milestone reminders", desc: "Stay on track with upcoming weekly goals." },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card/60 p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Appearance</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {["Comfort", "Compact", "Focus"].map((mode) => (
                <button key={mode} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground hover:text-foreground">
                  {mode} view
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Security</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Current password" type="password" className="bg-background/60 border-border" />
              <Input placeholder="New password" type="password" className="bg-background/60 border-border" />
            </div>
            <Button variant="outline" className="mt-4 border-border">Update password</Button>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
