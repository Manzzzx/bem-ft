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
          </div>
        </Container>
      </section>
    )
}