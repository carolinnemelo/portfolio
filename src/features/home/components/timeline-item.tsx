import { Card, CardContent, CardHeader, CardTitle } from "@/components";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  subtitle: string;
};

export function TimelineItem({ icon, title, subtitle }: Props) {
  return (
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-paragraph">{subtitle}</CardContent>
      </Card>
  );
}
