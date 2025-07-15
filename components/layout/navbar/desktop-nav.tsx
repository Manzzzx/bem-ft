"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItem = {
  title: string;
  href: string;
};

export default function DesktopNav({ links }: { links: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative group"
          >
            <motion.span
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.title}
            </motion.span>
            
            {/* Active indicator */}
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                layoutId="activeTab"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Hover indicator */}
            {!isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600/0 dark:bg-blue-400/0 rounded-full group-hover:bg-blue-600/30 dark:group-hover:bg-blue-400/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}