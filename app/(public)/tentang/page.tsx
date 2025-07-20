// components/pages/tentang.tsx
"use client";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { Eye, Target, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TentangPage() {
  return (
    <section className="py-24">
      <Container className="space-y-16">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-4 text-center">
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400">Tentang Kami</Badge>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">BEM Fakultas Teknik</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            BEM-KM FT adalah organisasi kemahasiswaan di Fakultas Teknik Universitas Muhadi Setiabudi yang menjadi wadah kreativitas, aspirasi, dan pengembangan potensi mahasiswa.
          </p>
        </motion.div>

        {/* Visi & Misi */}
        <motion.div className="grid md:grid-cols-2 gap-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-white/80 dark:bg-slate-800/80 border-l-4 border-blue-500 shadow-md">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Eye size={20} />
                <h3 className="font-semibold text-xl">Visi</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Menjadi organisasi kemahasiswaan yang aktif, inovatif, dan berdampak nyata dalam kehidupan kampus.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 border-l-4 border-emerald-500 shadow-md">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Target size={20} />
                <h3 className="font-semibold text-xl">Misi</h3>
              </div>
              <ul className="list-disc ml-5 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Mengembangkan potensi mahasiswa melalui program kerja terstruktur.</li>
                <li>Menjadi penyambung aspirasi antara mahasiswa dan pihak kampus.</li>
                <li>Menghadirkan kegiatan sosial, akademik, dan kemasyarakatan.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Nilai-nilai / Tujuan */}
        <motion.div className="grid md:grid-cols-3 gap-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-white/80 dark:bg-slate-800/80 shadow">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Users size={20} />
                <h4 className="font-semibold text-lg">Kebersamaan</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Kami percaya bahwa keberhasilan organisasi berawal dari solidaritas dan kolaborasi.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 shadow">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <Rocket size={20} />
                <h4 className="font-semibold text-lg">Inovasi</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Kami mendorong ide-ide kreatif untuk menjawab tantangan masa depan.
              </p>
            </CardContent>
          </Card>

        </motion.div>
      </Container>
    </section>
  );
}
