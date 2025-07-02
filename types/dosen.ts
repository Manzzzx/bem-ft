export interface Dosen {
  name: string;
  department: string;       // contoh: "Teknik Informatika"
  academicTitle: string;    // contoh: "S.Kom., M.Kom"
  position?: string;        // contoh: "Kaprodi", opsional
  photoUrl?: string;        // opsional: bisa untuk halaman profil
}
