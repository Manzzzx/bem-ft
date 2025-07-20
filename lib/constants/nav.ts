import type { NavLink } from "@/lib/types/nav";

export const navLinks: NavLink[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang", href: "/tentang" },
  { title: "Pengurus", href: "/pengurus" },
  { title: "Dosen", href: "/dosen" },
  { title: "Kontak", href: "/kontak" },
];

export const footerLinks: NavLink[] = [...navLinks];
