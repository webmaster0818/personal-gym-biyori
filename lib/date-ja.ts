/** "2026-08-29" → "2026年8月29日"（それ以外の形式はそのまま返す） */
export function jaDate(d: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d);
  return m ? `${m[1]}年${Number(m[2])}月${Number(m[3])}日` : d;
}
