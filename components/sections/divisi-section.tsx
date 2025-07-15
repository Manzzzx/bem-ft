'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { divisions } from "@/lib/data/divisi"
import { Users, Target, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function DivisiSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.7
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <Container className="space-y-16">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headerVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                Struktur Organisasi
              </span>
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400"
            variants={itemVariants}
          >
            Divisi BEM FT
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Setiap divisi memiliki peran strategis dalam membentuk ekosistem organisasi yang solid, 
            inovatif, dan berdampak nyata bagi kemajuan Fakultas Teknik.
          </motion.p>
        </motion.div>

        {/* Divisi Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {divisions.slice(0, 6).map((divisi, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-card text-card-foreground hover:border-primary/20"
              variants={cardVariants}
              whileHover="hover"
              custom={idx}
            >
              <motion.div variants={cardHoverVariants}>
                {/* Icon/Badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {divisi.name}
                  </motion.h3>
                </div>

                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold text-foreground mb-3"
              variants={itemVariants}
            >
              Bergabung dengan Divisi Impianmu
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={itemVariants}
            >
              Temukan divisi yang sesuai dengan passion dan minatmu. Mari bersama-sama berkontribusi untuk kemajuan Fakultas Teknik.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="group bg-accent-foreground">
                <a href="/divisi">
                  Lihat Semua Divisi
                  <motion.div
                    className="inline-block ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg">
                <a href="/pengurus">
                  Struktur Pengurus
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}