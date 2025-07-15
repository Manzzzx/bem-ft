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
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main grid pattern */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(147, 197, 253, 0.12) 2px, transparent 2px),
          linear-gradient(90deg, rgba(147, 197, 253, 0.12) 2px, transparent 2px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
    {/* Subtle overlay grid */}
    <div 
      className="absolute inset-0 dark:opacity-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}
    />
    
    {/* Enhanced floating elements */}
    <motion.div 
      className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-primary/8 to-blue-400/8 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.4, 0.8, 0.4],
        x: [0, 20, 0],
        y: [0, -10, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-full blur-xl"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.7, 0.3],
        x: [0, -15, 0],
        y: [0, 15, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    <motion.div 
      className="absolute bottom-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/6 to-blue-400/6 rounded-full blur-xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.9, 0.5],
        x: [0, 10, 0],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    {/* Additional accent elements */}
    <motion.div 
      className="absolute top-2/3 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-400/5 to-primary/5 rounded-full blur-lg"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.6, 1, 0.6]
      }}
      transition={{
        duration: 4,
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
      className="relative w-full min-h-screen py-20 md:py-28 flex items-center bg-gradient-to-br from-background via-background to-primary/3 dark:bg-gradient-to-br dark:from-background dark:via-background dark:to-background overflow-hidden"
    >
      <GridBackground />
      
      <Container className="relative z-10 flex flex-col-reverse items-center justify-between gap-16 md:flex-row px-4 md:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="flex-1 space-y-10 text-center md:text-left max-w-2xl"
        >
          <motion.div variants={titleVariants} className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-blue-600 bg-clip-text text-transparent">
                BEM FT
              </span>
              <br />
              <span className="text-primary">UMUS 2025</span>
            </h1>
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                "<span className="text-blue-600">SAHITYA</span> <span className="text-amber-500">BHAVANA</span>"
              </h2>
            </motion.div>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed"
          >
            Kami hadir untuk menyuarakan semangat inovasi, memperkuat solidaritas, dan mewujudkan program kerja yang berdampak nyata bagi mahasiswa teknik.
          </motion.p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="flex-1 relative px-4 md:px-8"
        >
          <div className="relative max-w-lg mx-auto">
            <motion.div 
              className="absolute -top-8 -left-8 w-80 h-80 bg-gradient-to-br from-primary/8 to-blue-400/8 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [360, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div className="relative">
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src="/logos/logo.png"
                alt="Logo BEM FT UMUS 2025"
                className="relative z-10 w-full h-auto max-h-[500px] object-contain filter drop-shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 1, -1, 0],
                  filter: "drop-shadow(0 25px 25px rgba(59, 130, 246, 0.15))"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}