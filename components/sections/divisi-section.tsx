import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { divisions } from "@/lib/data/divisi"

export default function DivisiSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <Container className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Divisi BEM FT</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tiap divisi memiliki peran strategis dalam membentuk ekosistem organisasi yang solid dan berdampak nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((divisi, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition bg-card text-card-foreground"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{divisi.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild variant="outline" className="text-foreground border-border hover:bg-muted">
            <a href="/pengurus">Lihat Selengkapnya</a>
          </Button>
        </div>
      </Container>
    </section>
  )
}
