import { BRAND_PRICES, FEE_SURVEYED_AT } from "@/data/brand-prices";

// /area/ 各ページの料金相場は、/price/ と同じ公式実査データ（全国のブランド単位）から算出する。
// エリア別の料金差は公式の値で集計できていないため、エリア別の目安は出さない。

const median = (xs: number[]) => {
  const a = [...xs].sort((x, y) => x - y);
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
};

export type PriceDist = { kind: "月額制" | "コース制"; n: number; med: number; min: number; max: number };

export function priceDist(): PriceDist[] {
  return (["月額制", "コース制"] as const)
    .map((kind) => {
      const xs = BRAND_PRICES.filter((b) => b.kind === kind && b.lowest !== null).map((b) => b.lowest as number);
      return { kind, n: xs.length, med: xs.length ? median(xs) : 0, min: Math.min(...xs), max: Math.max(...xs) };
    })
    .filter((d) => d.n > 0);
}

export const unpublishedCount = () => BRAND_PRICES.filter((b) => b.kind === "未公表").length;

const y = (n: number) => n.toLocaleString();

export function areaPriceFaq(areaName: string) {
  const dist = priceDist();
  const mo = dist.find((d) => d.kind === "月額制");
  const co = dist.find((d) => d.kind === "コース制");
  const parts = [
    mo ? `月額制（${mo.n}ブランド）が月${y(mo.min)}円〜${y(mo.max)}円（中央値${y(mo.med)}円）` : "",
    co ? `コース制（${co.n}ブランド）がコース総額${y(co.min)}円〜${y(co.max)}円（中央値${y(co.med)}円）` : "",
  ].filter(Boolean);
  return {
    q: `${areaName}のパーソナルジムの料金相場はいくらですか？`,
    a: `当サイトでは、エリア別の料金差を公式サイトの値で集計できていないため、${areaName}に限定した相場は掲載していません。参考として、当サイトが${FEE_SURVEYED_AT}に${BRAND_PRICES.length}ブランドの公式サイトで確認した各ブランドの最安プランは、${parts.join("、")}です（全国の値）。同じブランドでも店舗によって料金が異なる場合があるため、通う店舗の料金は公式サイトでご確認ください。`,
  };
}
