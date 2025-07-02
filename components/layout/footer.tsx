import { Icon } from '@iconify/react';
import { socialLinks, socialIcons } from '@/constants/social';

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 px-4 py-6 mt-16 text-sm text-slate-600">
      <div className="container flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <a
              key={`${item.platform}-${item.url}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Icon icon={socialIcons[item.platform]} className="w-5 h-5 text-slate-700" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center leading-relaxed">
          © 2025 BEM Fakultas Teknik. All rights reserved.
          <br />
          Created with <span className="text-red-500">❤️</span> by{" "}
          <a href="https://github.com/manzzx" className="underline hover:text-blue-600">
            Manzzx
          </a>
        </p>
      </div>
    </footer>
  );
}
