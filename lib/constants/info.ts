import type { CampusInfo } from "@/lib/types/info";
import type { HeroStats } from "@/lib/types/info";

export const campusInfo: CampusInfo = {
  name: "Universitas Muhadi Setiabudi",
  faculty: "Fakultas Teknik",
  abbreviation: "BEM FT",
  description: "Organisasi Mahasiswa Fakultas Teknik yang bergerak dalam bidang kolaborasi, inovasi, dan aksi nyata.",
  contact: {
    email: "bem.ft@gmail.com",
    phone: "+62 8773 3207 373",
    address: "Jalan Pangeran Diponegoro No.KM2, Rw. 11, Pesantunan, Kec. Wanasari, Kabupaten Brebes, Jawa Tengah 52212",
    mapsUrl: "https://maps.app.goo.gl/U78pdXQsQLdhnoWq9",
  },
};

export const heroStats: HeroStats = {
  members: "250+",
  programs: "12+",
  events: "35+",
  impact: "1500+"
};