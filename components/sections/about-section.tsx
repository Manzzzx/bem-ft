import { Container } from "@/components/layout/container";

export default function AboutSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-background">
        <Container className="flex flex-col-reverse items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/500/500"
              alt="Logo Filosofis BEM FT"
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-primary dark:text-chart-3">Tentang Kami</h2>
            <p className="text-muted-foreground dark:text-foreground">
              BEM FT adalah organisasi mahasiswa yang menjadi representasi aspirasi, kolaborasi, dan motor penggerak perubahan di lingkungan Fakultas Teknik.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-chart-3">Visi</h3>
              <p className="text-muted-foreground dark:text-foreground">
                Menjadi organisasi mahasiswa teknik yang inklusif, inovatif, dan berdampak nyata bagi seluruh civitas akademika.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-chart-3">Misi</h3>
              <ul className="list-disc list-inside text-muted-foreground dark:text-foreground">
                <li>Mengembangkan program kerja berbasis kebutuhan mahasiswa</li>
                <li>Meningkatkan solidaritas antar himpunan dan UKM teknik</li>
                <li>Menjembatani aspirasi mahasiswa ke pihak fakultas</li>
                <li>Memperkuat karakter kepemimpinan dan integritas</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-chart-3">Nilai Organisasi</h3>
              <ul className="flex flex-wrap gap-2 text-sm dark:text-foreground">
                <li className="rounded-full bg-muted px-3 py-1 text-muted-foreground">Inklusif</li>
                <li className="rounded-full bg-muted px-3 py-1 text-muted-foreground">Transparan</li>
                <li className="rounded-full bg-muted px-3 py-1 text-muted-foreground">Kolaboratif</li>
                <li className="rounded-full bg-muted px-3 py-1 text-muted-foreground">Profesional</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Filosofi Logo</h3>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Gear</strong> menggambarkan kerja sama yang saling terhubung, di mana setiap komponen memiliki peran penting dalam menciptakan solusi. Selain itu, gear juga melambangkan ketahanan, keandalan, dan proses keberlanjutan yang dihadapi mahasiswa teknik dalam setiap tantangan yang mereka hadapi.</p>
                <p><strong>Tangan Menadah</strong> melambangkan simbol harapan dan doa yang tulus dalam memupuk impian. Tangan yang terbuka menggambarkan kesiapan untuk menerima dan mengembangkan potensi serta kesempatan yang ada untuk tumbuh dan berkembang.</p>
                <p><strong>Atom</strong> melambangkan simbol tak terbatas, menggambarkan potensi tanpa akhir dalam ilmu pengetahuan dan teknologi. Struktur atom yang kompleks mencerminkan eksplorasi tanpa batas dalam pencapaian dan inovasi yang terus berkembang.</p>
                <p><strong>Rantai</strong> menggambarkan kekuatan dalam kebersamaan, di mana setiap bagian saling terhubung dan mendukung satu sama lain. Rantai yang utuh mencerminkan pentingnya kebersamaan dan solidaritas dalam mencapai tujuan bersama.</p>
                <p><strong>Pilar</strong> melambangkan jumlah 4 divisi yaitu:
                  <ul className="list-disc list-inside pl-4">
                    <li>INFOKOM (Informasi dan Komunikasi)</li>
                    <li>PSDM (Pengembangan Sumber Daya Manusia)</li>
                    <li>HUMAS (Hubungan Masyarakat)</li>
                    <li>Minat dan Bakat</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
}