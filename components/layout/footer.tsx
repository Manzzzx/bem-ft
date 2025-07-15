import Link from "next/link";
import { footerLinks } from "@/lib/constants/nav";
import { socialLinks, socialIcons } from "@/lib/constants/social";
import { Icon } from "@iconify/react";
import { campusInfo } from "@/lib/constants/info";

export function Footer() {
  return (
    <footer className="border-t bg-muted text-muted-foreground mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logos/logo.png" 
                  alt="BEM FT Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">BEM FT</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Badan Eksekutif Mahasiswa Fakultas Teknik Universitas Muhadi Setiabudi.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Icon icon={socialIcons[item.platform]} className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Halaman */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Halaman
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-600 hover:underline transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Link */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Link
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-sm text-muted-foreground hover:text-blue-600 hover:underline transition-colors"
                  >
                    {link.platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Kontak
            </h3>
            <p className="text-sm text-muted-foreground">
              {campusInfo.contact.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {campusInfo.contact.phone}
            </p>
            <p className="text-sm text-muted-foreground">
              {campusInfo.contact.address}
            </p>
            {campusInfo.contact.mapsUrl && (
              <Link
                href={campusInfo.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mt-2"
              >
                Lihat di Google Maps
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} BEM FT - Badan Eksekutif Mahasiswa Fakultas Teknik Universitas Muhadi Setiabudi. All Right Reserved <br /> Created With <span className="text-pink-500">❤️</span> By{" "}
          <Link
            href="https://github.com/manzzzx"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Manzzzx
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;