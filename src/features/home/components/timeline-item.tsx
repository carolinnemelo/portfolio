import { Card, CardContent, CardHeader, CardTitle } from "@/components";

type Props = {
  icon?: string;
  title: string;
  subtitle: string;
};

export function TimelineItem({ icon, title, subtitle }: Props) {
  icon = icon || "🔹";

  return (
    <Card className="w-full">
      <CardHeader>
        <p className="text-5xl">{icon}</p>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>{subtitle}</CardContent>
    </Card>
  );
}
