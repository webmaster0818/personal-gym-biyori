// アフィリエイトリンク一元管理(A8・コード改変禁止)。未提携ブランドはundefined→診断CTAにフォールバック
export const AFFILIATES: Record<string, string> = {
  beyond: "https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL",
  rizap: "https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX",
};
export function affiliateFor(slug: string): string | undefined {
  return AFFILIATES[slug];
}
