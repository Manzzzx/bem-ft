'use client';

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, easeOut, Variants } from "framer-motion";
import { ArrowRight, Eye, Target } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Main About Content */}
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src="https://picsum.photos/500/400"
                    alt="BEM FT - Bersama Membangun Masa Depan"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute -top-3 -right-3 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  BEM FT 2024
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Badge variant="outline" className="text-sm border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                    Tentang Kami
                  </Badge>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight"
                >
                  Badan Eksekutif Mahasiswa
                  <motion.span
                    className="text-blue-600 dark:text-blue-400 block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Fakultas Teknik
                  </motion.span>
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  Fakultas Teknik Universitas Muhadi Setiabudi sebagai institusi pendidikan perguruan tinggi yang memiliki peran penting dalam mengembangkan kemampuan dan potensi Mahasiswa. <br/> Badan Eksekutif Mahasiswa Keluarga Mahasiswa Fakultas Teknik (BEM-KM FT) adalah organisasi kemahasiswaan yang berperan sebagai wadah aspirasi dan kegiatan Mahasiswa Fakultas Teknik di perguruan tinggi Universitas Muhadi Setiabudi.
                </motion.p> 
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <Link href="/tentang">
                  <Button
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Simplified Vision & Mission */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={cardVariants}>
              <Card className="border-l-4 border-l-blue-500 dark:border-l-blue-400 hover:shadow-lg transition-all duration-300 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center"
                      >
                        <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Visi</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Menjadi organisasi yang kreatif, inofatif, adaptif, serta mampu memberikan kontribusi nyata dalam pengembangan potensi mahasiswa Fakultas Teknik.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="border-l-4 border-l-emerald-500 dark:border-l-emerald-400 hover:shadow-lg transition-all duration-300 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center"
                      >
                        <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Misi</h3>
                    </div>
                    <li className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Menjadi sarana bagi mahasiswa Fakultas Teknik untuk mengembangkan potensi.
                    </li>
                    <li className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Menjadikan seluruh keluarga mahasiswa Fakultas Teknik menjadi solid dan terarah.
                    </li>
                    <Link href="/tentang">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 p-0 mt-2"
                      >
                        Lihat misi lengkap
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}