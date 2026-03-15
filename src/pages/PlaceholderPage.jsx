import { AppLayout } from "@/layouts/AppLayout";
export function PlaceholderPage({ title, description }) {
    return (<AppLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </AppLayout>);
}
