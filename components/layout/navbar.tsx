'use client';

import Link from "next/link";

export const Navbar = () => (
  <nav className="w-full py-4 px-6 flex justify-between items-center shadow bg-white sticky top-0 z-50">
    <Link href="/" className="font-bold text-xl text-primary">BEM FT</Link>
    <div className="flex gap-4 text-sm">
      <Link href="/tentang">Tentang</Link>
      <Link href="/pengurus">Pengurus</Link>
      <Link href="/pmb-teknik">PMB</Link>
      <Link href="/dosen">Dosen</Link>
      <Link href="/kontak">Kontak</Link>
    </div>
  </nav>
);
