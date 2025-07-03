import Link from "next/link";

type NavItem = {
  title: string;
  href: string;
};

export default function DesktopNav({ links }: { links: NavItem[] }) {
  return (
    <nav className="flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
