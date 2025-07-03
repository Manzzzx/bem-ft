import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  title: string;
  href: string;
};

export default function DesktopNav({ links }: { links: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-sm font-medium text-muted-foreground dark:text-slate-300">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
              isActive ? "text-primary font-semibold" : ""
            }`}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
