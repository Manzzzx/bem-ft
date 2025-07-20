export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[.'"]/g, "") // hapus titik, apostrof, kutip
    .replace(/\s+/g, "-"); // ganti spasi jadi dash
}
