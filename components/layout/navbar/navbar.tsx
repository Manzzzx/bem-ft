"use client";

import Link from "next/link";
import { navLinks } from "@/lib/constants/nav";
import ThemeToggle from "@/components/theme/theme-toggle";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          BEM FT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <DesktopNav links={navLinks} />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
