import { Ketua } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KetuaCardProps {
  data: Ketua;
}

export function KetuaCard({ data }: KetuaCardProps) {
  return (
    <Card className="text-center">
      <CardHeader className="flex flex-col items-center space-y-2">
        {data.imageUrl && <img src={data.imageUrl} alt={data.name} className="w-24 h-24 rounded-full object-cover" />}
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{data.year}</p>
      </CardHeader>
      <CardContent>{data.kabinet && <p className="text-sm italic text-foreground">Kabinet: {data.kabinet}</p>}</CardContent>
    </Card>
  );
}
