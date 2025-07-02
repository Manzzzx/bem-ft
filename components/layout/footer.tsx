import Link from "next/link";
import { footerLinks } from "@/lib/constants/nav";
import { socialLinks } from "@/lib/constants/social";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t mt-10">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Navigasi</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-600 transition-colors">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sosial */}
        <div className="flex flex-col items-center">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Media Sosial</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 transition-colors">
                <Icon icon={`mdi:${social.platform.toLowerCase()}`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="sm:text-right">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Kontak</h3>
          <p>bem.ft@example.com</p>
          <p>Jl. Kampus Teknik No. 123</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} BEM Fakultas Teknik. All rights reserved. <br />
        Created with <span className="text-pink-500">❤️</span> by{" "}
        <Link href="https://github.com/manzzzx" className="text-blue-600 hover:underline" target="_blank">
          Manzzzx
        </Link>
      </div>
    </footer>
  );
}
