export interface StudyProgram {
  code: string;         // "TI"
  name: string;         // "Teknik Informatika"
  accreditation: string;// "B"
  degree: string;       // "S.Kom."
  headOfProgram: string;// "Bambang Irawan, S.Kom., M.Kom"
}

export interface AdmissionPath {
  name: string;         // "SNBT"
  description: string;  // "Seleksi Berdasarkan Tes UTBK"
}

export interface TuitionFee {
  registrationFee: number; // in Rupiah
  perSemester: number;     // SPP per semester
  initialFee: number;      // biaya awal masuk
  annualTotal: number;     // total per tahun
}
