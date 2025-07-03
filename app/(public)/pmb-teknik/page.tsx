"use client";

import { studyPrograms } from "@/lib/data/akademik";
import { admissionPaths } from "@/lib/data//akademik";
import { tuitionFees } from "@/lib/data//akademik";
import { Card, CardContent } from "@/components/ui/card";
import { formatIDR } from "@/lib/utils/formatter";

export default function PmbTeknikPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 md:px-6 space-y-20">

        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Penerimaan Mahasiswa Baru</h1>
          <p className="text-muted-foreground text-base max-w-prose">
            Informasi lengkap seputar jalur masuk, program studi, dan rincian biaya kuliah untuk Fakultas Teknik UMUS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Jalur Masuk</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {admissionPaths.map((path) => (
              <li key={path.name} className="rounded-lg bg-secondary p-4">
                <p className="font-medium text-primary">{path.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{path.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Program Studi</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {studyPrograms.map((prodi) => (
              <Card key={prodi.code}>
                <CardContent className="p-5 space-y-1">
                  <h3 className="text-lg font-semibold">{prodi.name}</h3>
                  <p className="text-sm text-muted-foreground">{prodi.degree} • Akreditasi: {prodi.accreditation}</p>
                  <p className="text-sm text-muted-foreground">Kaprodi: {prodi.headOfProgram}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Biaya Kuliah</h2>
          {tuitionFees.map((fee, idx) => (
            <ul key={idx} className="grid gap-2 text-sm text-muted-foreground">
              <li>💰 Biaya Pendaftaran: <strong>{formatIDR(fee.registrationFee)}</strong></li>
              <li>🎓 Biaya Awal Masuk: <strong>{formatIDR(fee.initialFee)}</strong></li>
              <li>📚 SPP / Semester: <strong>{formatIDR(fee.perSemester)}</strong></li>
              <li>📅 Total per Tahun: <strong>{formatIDR(fee.annualTotal)}</strong></li>
            </ul>
          ))}
        </section>

      </div>
    </main>
  );
}