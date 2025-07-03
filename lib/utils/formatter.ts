// Format angka ke Rupiah
export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format tanggal
export function formatTanggal(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(d);
}

// Format persentase
export function formatPersen(value: number, fractionDigits = 0): string {
  return `${(value * 100).toFixed(fractionDigits)}%`;
}

// Format angka biasa
export function formatAngka(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value);
}

// Format durasi dari menit ke jam & menit
export function formatDurasiMenit(menit: number): string {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;
  const jamStr = jam > 0 ? `${jam} jam` : "";
  const menitStr = sisaMenit > 0 ? `${sisaMenit} menit` : "";
  return [jamStr, menitStr].filter(Boolean).join(" ");
}
