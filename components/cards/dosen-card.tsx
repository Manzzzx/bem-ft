import { Dosen } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface DosenCardProps {
  data: Dosen;
}

export function DosenCard({ data }: DosenCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      {data.photoUrl && <Image src={data.photoUrl} alt={data.name} className="w-24 h-24 rounded-full object-cover mt-4" />}
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{data.academicTitle}</p>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="text-sm font-medium text-foreground">{data.department}</p>
        {data.position && <p className="text-sm text-muted-foreground">{data.position}</p>}
      </CardContent>
    </Card>
  );
}
