import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

import { studyPrograms, admissionPaths, tuitionFees } from "@/lib/data/akademik";
import type { StudyProgram, AdmissionPath, TuitionFee } from "@/lib/types/akademik";

export default function PMBTeknikPage() {
  return (
    <Container className="py-10 space-y-10">
      <PageHeader title="Penerimaan Mahasiswa Baru" description="Informasi lengkap tentang prodi, jalur masuk, dan biaya pendidikan di Fakultas Teknik." />

      {/* Program Studi */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Program Studi</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {studyPrograms.map((prodi: StudyProgram) => (
            <div key={prodi.code} className="border rounded-xl p-4 shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold">{prodi.name}</h3>
              <p>Akreditasi: {prodi.accreditation}</p>
              <p>Gelar: {prodi.degree}</p>
              <p>Kaprodi: {prodi.headOfProgram}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jalur Masuk */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Jalur Masuk</h2>
        <ul className="list-disc pl-5 space-y-2">
          {admissionPaths.map((path: AdmissionPath, idx: number) => (
            <li key={idx}>
              <strong>{path.name}</strong>: {path.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Biaya Pendidikan */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Biaya Pendidikan</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tuitionFees.map((fee: TuitionFee, idx: number) => (
            <div key={idx} className="border rounded-xl p-4 shadow hover:shadow-md transition">
              <p>Uang Pendaftaran: Rp{fee.registrationFee.toLocaleString()}</p>
              <p>SPP per Semester: Rp{fee.perSemester.toLocaleString()}</p>
              <p>Biaya Awal: Rp{fee.initialFee.toLocaleString()}</p>
              <p>Total per Tahun: Rp{fee.annualTotal.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
