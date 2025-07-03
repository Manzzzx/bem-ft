import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { socialLinks, socialIcons } from "@/lib/constants/social";
import { Icon } from "@iconify/react";
import ThemeToggle from "@/components/theme/theme-toggle";

type NavItem = {
  title: string;
  href: string;
};

export default function MobileNav({ links }: { links: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-6 w-6 text-slate-800 dark:text-slate-200" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72 sm:w-80 px-6 py-6 space-y-6">
        <div>
          <SheetTitle className="text-lg font-bold text-primary">Menu Navigasi</SheetTitle>
          <p className="text-sm text-muted-foreground">Jelajahi informasi seputar BEM Fakultas Teknik</p>
        </div>

        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Media Sosial */}
        <div className="border-t pt-4 mt-4">
          <p className="text-sm font-semibold text-muted-foreground mb-2">Media Sosial</p>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <Link key={item.platform} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.platform}>
                <Icon icon={socialIcons[item.platform]} className="w-5 h-5 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="border-t pt-4">
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
