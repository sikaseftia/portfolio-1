/** Menggabungkan nama class. Versi ringan tanpa dependensi tambahan.
 * Hanya string dan angka yang dipakai; nilai lain (misalnya fungsi className dari base-ui) diabaikan.
 */
export function cn(...inputs: unknown[]): string {
  const out: string[] = [];
  const walk = (value: unknown) => {
    if (Array.isArray(value)) value.forEach(walk);
    else if (typeof value === "string" && value.trim()) out.push(value.trim());
    else if (typeof value === "number") out.push(String(value));
  };
  inputs.forEach(walk);
  return out.join(" ");
}
