"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/layout/container';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(147, 197, 253, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 197, 253, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
    <motion.div 
      className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute top-40 right-20 w-32 h-32 bg-blue-400/5 rounded-full blur-xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    <motion.div 
      className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </div>
);

export default function HeroSection() {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen py-20 md:py-28 flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      <GridBackground />
      
      <Container className="relative z-10 flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
        <motion.div 
          variants={itemVariants}
          className="flex-1 space-y-8 text-center md:text-left"
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl"
          >
            BEM FT: <span className="text-blue-400">Suara Mahasiswa</span>,
            <br className="hidden md:block" />
            <span className="text-blue-400">Wadah Perubahan</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed"
          >
            Kami hadir untuk menyuarakan semangat inovasi, memperkuat solidaritas, dan mewujudkan program kerja yang berdampak nyata bagi mahasiswa teknik.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <motion.a 
              href="/tentang" 
              className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-black bg-primary px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Kenali Kami</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredButton === 'primary' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a 
              href="/pengurus" 
              className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-black bg-primary px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 overflow-hidden"
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Lihat Divisi</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredButton === 'secondary' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="flex-1 relative"
        >
          <div className="relative">
            <motion.div 
              className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <motion.img
              src="https://picsum.photos/600/400"
              alt="Mahasiswa Teknik BEM FT sedang berkolaborasi dalam kegiatan organisasi"
              className="relative z-10 mx-auto max-h-[400px] w-full rounded-xl object-cover shadow-2xl border border-border/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}