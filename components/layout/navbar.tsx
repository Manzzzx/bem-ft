"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { socialLinks, socialIcons } from "@/constants/social";
import { navLinks } from "@/constants/nav";
import { Icon } from "@iconify/react";


export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          BEM FT
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation (Sheet Drawer) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 px-6 py-6 space-y-6">
              <div>
                <SheetTitle className="text-lg font-bold text-primary">Menu Navigasi</SheetTitle>
                <p className="text-sm text-muted-foreground">Jelajahi informasi seputar BEM Fakultas Teknik</p>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                ))}
              </nav>

              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Media Sosial</p>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <Link key={item.platform} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.platform}>
                      <Icon icon={socialIcons[item.platform]} className="w-5 h-5 text-slate-700 hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
