import { type Division } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DivisiCardProps {
  data: Division;
}

export function DivisiCard({ data }: DivisiCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <p className="text-sm text-muted-foreground">Koordinator: {data.coordinator}</p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          {data.members.map((members, index) => (
            <li key={index} className="text-sm text-foreground">
              {members.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
