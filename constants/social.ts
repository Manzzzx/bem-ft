import type { SocialMedia } from "@/types";
import { Icon } from "@iconify/react";


export const socialLinks: SocialMedia[] = [
  {
    platform: "Instagram",
    url: "https://instagram.com/bem.ft",
  },
  {
    platform: "Email",
    url: "mailto:bemft@gmail.com",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/bem-ft",
  },
];

export const socialIcons: Record<string, string> = {
  Instagram: "mdi:instagram",
  Email: "mdi:email-outline",
  LinkedIn: "mdi:linkedin",
};