import { Card, CardContent, CardDescription } from "@/components";

export type ListCardProps = {
  description?: string;
};

export function ListCards({
  description = "Some Description of the goal",
}: ListCardProps) {

  return (
    <Card className="grow">
      <CardContent className="space-y-4">
        <CardDescription className="text-md flex">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
