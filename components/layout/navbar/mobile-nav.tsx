"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { socialLinks, socialIcons } from "@/lib/constants/social";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type NavItem = {
  title: string;
  href: string;
};

export default function MobileNav({ links }: { links: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          aria-label="Menu"
          className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>

      <SheetContent 
        side="right" 
        className="w-72 sm:w-80 px-6 py-6 space-y-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-l border-slate-200/80 dark:border-slate-800/80"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SheetTitle className="text-lg font-bold text-blue-600 dark:text-blue-400">
            Menu Navigasi
          </SheetTitle>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Jelajahi informasi seputar BEM Fakultas Teknik
          </p>
        </motion.div>

        <motion.nav 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-2"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  onClick={handleNavClick}
                  className={`group flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold" 
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <span className="text-base font-medium">{link.title}</span>
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <motion.div 
          className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
            Media Sosial
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((item, index) => (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.2 }}
              >
                <Link 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.platform}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors duration-200 group"
                >
                  <Icon 
                    icon={socialIcons[item.platform]} 
                    className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          className="border-t border-slate-200 dark:border-slate-800 pt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} BEM Fakultas Teknik
          </p>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}