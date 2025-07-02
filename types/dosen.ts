export type JabatanDosen = "Dekan" | "Kaprodi TI" | "Kaprodi TS";

export interface Dosen {
  nama: string;
  jabatan: JabatanDosen;
  foto: string;
  bio?: string;
}
