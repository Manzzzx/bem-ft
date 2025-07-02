export type Platform = "Instagram" | "Email" | "LinkedIn";

export interface SocialMedia {
  platform: Platform;
  url: string;
  icon?: string;
}
