"use client";

import Link from "next/link";
import { navLinks } from "@/lib/constants/nav";
import ThemeToggle from "@/components/theme/theme-toggle";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm">
      <div className="container mx-auto relative flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-200"
        >
          <Image
          src={"/logos/logo.png"}
          alt="BEM Fakultas Teknik Logo"
          width={40}
          height={40}
          />
        </Link>

        {/* Desktop Nav Center */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <DesktopNav links={navLinks} />
        </div>

        {/* Theme Toggle Right */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}