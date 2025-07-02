export interface ProgramStudi {
  kode: string;
  nama: string;
  akreditasi: string;
  gelar: string;
  kaprodi: string;
}

export interface JalurMasuk {
  nama: string;
  deskripsi: string;
}

export interface BiayaPendidikan {
  uangPendaftaran: number;
  sppPerSemester: number;
  biayaAwal: number;
  totalPerTahun: number;
}
