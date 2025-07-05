import { Container } from "@/components/layout/container"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen py-20 md:py-28 flex items-center">
      <Container className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            BEM FT: Suara Mahasiswa, Wadah Perubahan
          </h1>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            Kami hadir untuk menyuarakan semangat inovasi, memperkuat solidaritas, dan mewujudkan program kerja yang berdampak nyata bagi mahasiswa teknik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <a href="/tentang" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-transparent bg-secondary-foreground px-6 py-3 text-base font-semibold text-background shadow-sm transition focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-primary dark:hover:bg-primary/80 dark:text-muted dark:focus:ring-primary/60">
              Kenali Kami
            </a>
            <a href="/pengurus" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-primary dark:text-primary dark:hover:bg-primary/10 dark:focus:ring-primary/50">
              Lihat Divisi
            </a>
          </div>
        </div>

        <div className="flex-1">
            <img
                src="https://picsum.photos/600/400"
                alt="Ilustrasi BEM FT"
                className="mx-auto max-h-[400px] w-full rounded-xl object-cover shadow-xl dark:shadow-primary/30"
            />
        </div>
      </Container>
    </section>
  )
}
