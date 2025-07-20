"use client";

import Image from "next/image";
import { useState } from "react";

interface AnggotaCardProps {
  name: string;
  role?: string;
  divisionSlug: string;
  isKoordinator?: boolean;
}

const slugify = (str: string) =>
  str.toLowerCase().replace(/[.'"]/g, "").replace(/\s+/g, "-");

export function AnggotaCard({
  name,
  role,
  divisionSlug,
  isKoordinator = false,
}: AnggotaCardProps) {
  const slug = slugify(name);
  const imagePath = `/images/pengurus/${divisionSlug}/${slug}.jpg`;

  const [showImage, setShowImage] = useState(true);

  return (
    <div className="text-center space-y-2">
      {showImage && (
        <Image
          src={imagePath}
          alt={name}
          width={96}
          height={96}
          onError={() => setShowImage(false)}
          className={`mx-auto rounded-full object-cover w-24 h-24 border ${
            isKoordinator
              ? "border-blue-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
      )}
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">
          {isKoordinator ? "Koordinator" : role || "Anggota"}
        </p>
      </div>
    </div>
  );
}
