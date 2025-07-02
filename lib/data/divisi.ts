// data/divisi.ts

import type { Division } from "@/types/divisi";

export const divisions: Division[] = [
  {
    name: "BPH (Badan Pengurus Harian)",
    coordinator: "Alvin Satrio Purnomo",
    members: [
      { name: "Aisyah Romadhona", role: "Sekretaris Umum" },
      { name: "Luna Audya Faradila", role: "Sekretaris Umum" },
      { name: "Nabila Rizqi Maulida", role: "Bendahara Umum" },
      { name: "Shinta Nuriyah", role: "Bendahara Umum" },
    ],
  },
  {
    name: "PSDM (Pengembangan Sumber Daya Manusia)",
    coordinator: "Moch.Malik Badly Ba'adilah",
    members: [
      { name: "Fatkhul Arifin" },
      { name: "Ibnu Fikri Haikal" },
      { name: "Aldi Alfariz" },
      { name: "Nur Salma Salsabila" },
    ],
  },
  {
    name: "Infokom (Informasi dan Komunikasi)",
    coordinator: "Akhmad Faridin",
    members: [
      { name: "Ramadhan Saputra" },
      { name: "Rifqoh Nur Nafi'ah" },
      { name: "Mas Roro Tasya Y" },
    ],
  },
  {
    name: "Humas (Hubungan Masyarakat)",
    coordinator: "Aldi Ferdiansyah",
    members: [
      { name: "Slamet Sugiarto" },
      { name: "M. Helmi Mustaqim" },
      { name: "Nazarul Ali Mukhtar" },
      { name: "Ahmad Iwan Gunawan" },
    ],
  },
  {
    name: "Minbak (Minat dan Bakat)",
    coordinator: "M. Idi Salis",
    members: [
      { name: "Refy Azhar Muzaki" },
      { name: "Ahmad Faiz Abidin" },
      { name: "Naufal Hilmiya Faiq" },
    ],
  },
];
