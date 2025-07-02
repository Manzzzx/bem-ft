import { StudyProgram } from "@/lib/types/akademik";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StudyProgramCardProps {
  data: StudyProgram;
}

export function StudyProgramCard({ data }: StudyProgramCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Gelar: {data.degree} • Akreditasi: {data.accreditation}
        </p>
      </CardHeader>
      <CardContent className="text-sm">
        <p>
          <span className="font-medium">Kaprodi:</span> {data.headOfProgram}
        </p>
      </CardContent>
    </Card>
  );
}
