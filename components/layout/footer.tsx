import Link from "next/link";
import { footerLinks } from "@/lib/constants/nav";
import { socialLinks, socialIcons } from "@/lib/constants/social";
import { Icon } from "@iconify/react";
import { campusInfo } from "@/lib/constants/info";

export function Footer() {
  return (
    <footer className="border-t bg-muted text-muted-foreground mt-16">
      <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 items-start">
        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
            Navigasi
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-blue-600 hover:underline hover:dark:text-chart-3 dark:hover:underline transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Sosial */}
        <div className="flex flex-col items-start sm:items-center">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
            Ikuti Kami
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.platform}
                className="hover:text-primary transition-colors"
              >
                <Icon icon={socialIcons[item.platform]} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Info Kampus */}
        <div className="sm:text-right space-y-1 text-sm">
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Kontak</h3>
          <p>{campusInfo.contact.email}</p>
          <p>{campusInfo.contact.phone}</p>
          <p>{campusInfo.contact.address}</p>
          {campusInfo.contact.mapsUrl && (
            <Link
              href={campusInfo.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Lihat di Google Maps
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} BEM Fakultas Teknik <br /> Created With <span className="text-pink-500">❤️</span> By{" "}
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