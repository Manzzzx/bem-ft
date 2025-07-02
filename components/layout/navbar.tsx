"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/constants/nav";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          BEM FT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {navLinks.map(({ href, title }) => (
            <Link key={href} href={href} className={`hover:text-blue-600 transition-colors ${pathname === href ? "text-blue-600 font-semibold" : ""}`}>
              {title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-slate-700" />
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map(({ href, title }) => (
                  <Link key={href} href={href} className={`hover:text-blue-600 transition-colors ${pathname === href ? "text-blue-600 font-semibold" : ""}`}>
                    {title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
