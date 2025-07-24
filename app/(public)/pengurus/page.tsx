"use client";

import { useState } from "react";
import { ketuaList } from "@/lib/data/ketua";
import { KetuaCard } from "@/components/cards/ketua-card";
import { divisions } from "@/lib/data/divisi";
import { DivisiCard } from "@/components/cards/divisi-card";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";

export default function PengurusPage() {
  const [selectedYear, setSelectedYear] = useState(ketuaList[0].year);

  const selectedKetua = ketuaList.find((k) => k.year === selectedYear);

  return (
    <Container className="space-y-12 pt-24 md:pt-28 pb-12">
      
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Struktur Kepengurusan</h1>
        <p className="text-muted-foreground text-sm md:text-base">Mengenal lebih dekat para pengurus BEM FT</p>
      </motion.div>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <label htmlFor="year" className="text-sm font-medium">
            Tahun Kepengurusan:
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="text-sm px-4 py-2 rounded-lg border border-muted bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 dark:bg-muted dark:border-muted-foreground/20 dark:text-white"
          >
            {ketuaList.map((k) => (
              <option key={k.year} value={k.year} className="dark:bg-muted dark:text-white">
                {k.year}
              </option>
            ))}
          </select>
        </div>

        <KetuaCard data={selectedKetua!} />
      </div>

      <div className="space-y-10">
        {divisions.map((division, index) => (
          <motion.div key={division.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
            <DivisiCard data={division} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
