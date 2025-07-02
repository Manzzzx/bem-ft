import type { SocialMedia } from "@/types";

export const socialLinks: SocialMedia[] = [
  {
    platform: "Instagram",
    url: "https://instagram.com/bem.ft",
  },
  {
    platform: "Email",
    url: "mailto:bemft@example.com",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/bem-ft",
  },
];
export const socialIcons: Record<string, string> = {
  Instagram: "i-logos-instagram",
  Email: "i-logos-email",
  LinkedIn: "i-logos-linkedin",
};