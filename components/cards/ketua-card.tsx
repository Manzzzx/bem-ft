// components/cards/ketua-card.tsx
import { Ketua } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KetuaCardProps {
  data: Ketua;
}

export function KetuaCard({ data }: KetuaCardProps) {
  if (!data) return null;

  return (
    <Card className="text-center">
      <CardHeader className="flex flex-col items-center space-y-2">
        <p className="text-blue-600 dark:text-blue-400 text-lg">
          <strong>Gubernur</strong>
        </p>
        {data.imageUrl && (
          <img src={data.imageUrl} alt={data.name} className="w-24 h-24 rounded-full object-cover" />
        )}
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{data.year}</p>
      </CardHeader>
      <CardContent className="space-y-1">
        {data.kabinet && (
          <p className="text-sm text-foreground">
            <strong>Kabinet:</strong> {data.kabinet}
          </p>
        )}
        {data.motto && (
          <p className="text-sm italic text-muted-foreground">“{data.motto}”</p>
        )}
      </CardContent>
    </Card>
  );
}
