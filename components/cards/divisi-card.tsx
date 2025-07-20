// components/cards/DivisiCard.tsx
import { type Division } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnggotaCard } from "@/components/cards/anggota-card";
import { slugify } from "@/lib/utils/slugify";

interface DivisiCardProps {
  data: Division;
}

export function DivisiCard({ data }: DivisiCardProps) {
  const divisionSlug = slugify(data.name);

  return (
    <div className="space-y-4">
      <Card className="bg-blue-50 dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">
            {data.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnggotaCard
            name={data.coordinator}
            role="Koordinator"
            divisionSlug={divisionSlug}
          />
          {data.members.map((member, index) => (
            <AnggotaCard
              key={index}
              name={member.name}
              role={member.role}
              divisionSlug={divisionSlug}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
