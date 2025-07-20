"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { divisions } from "@/lib/data/divisi";
import { Users, Target, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DivisiSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.7,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <Container className="space-y-16">
        {/* Header */}
        <motion.div className="text-center space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div variants={headerVariants}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">Struktur Organisasi</span>
            </motion.div>
          </motion.div>

          <motion.h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400" variants={itemVariants}>
            Divisi BEM FT
          </motion.h2>

          <motion.p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            Setiap divisi memiliki peran strategis dalam membentuk ekosistem organisasi yang solid, inovatif, dan berdampak nyata bagi kemajuan Fakultas Teknik.
          </motion.p>
        </motion.div>

        {/* Divisi Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {divisions.slice(0, 6).map((divisi, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              custom={idx}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-yellow-400/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <motion.div variants={cardHoverVariants}>
                {/* Content */}
                <div className="relative p-6">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center shadow-lg" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <Target className="w-7 h-7 text-white" />
                    </motion.div>

                    <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{ scale: 1.1 }}></motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {divisi.name}
                  </motion.h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div className="max-w-2xl mx-auto" variants={itemVariants}>
            <motion.h3 className="text-2xl font-semibold text-foreground mb-3" variants={itemVariants}>
              Bergabung dengan Divisi Impianmu
            </motion.h3>
            <motion.p className="text-muted-foreground" variants={itemVariants}>
              Temukan divisi yang sesuai dengan passion dan minatmu. Mari bersama-sama berkontribusi untuk kemajuan Fakultas Teknik.
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}></motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                <a href="/pengurus">
                  Lihat Selengkapnya
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
