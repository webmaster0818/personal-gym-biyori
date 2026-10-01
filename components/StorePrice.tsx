import Link from "next/link";
import { BRAND_PRICES } from "@/data/brand-prices";

/*
 * ブランドの公表料金を店舗ページにも出す(2026-10-01 施主指示「不足している情報の追記」)。
 * 料金は店舗ページに一切出ていなかったため、ユーザーが比較できなかった。
 * 数値は data/brand-prices.ts(各レビューの実査記録)をそのまま使い、店舗ごとの推定はしない。
 */
export default function StorePrice({ brandSlug, brandName }: { brandSlug: string; brandName: string }) {
  const p = BRAND_PRICES.find((x) => x.slug === brandSlug);
  if (!p) return null;
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">料金（{brandName}の公表料金）</h2>
      <div className="rounded-lg border border-gray-200 p-4">
        <p className="text-2xl font-bold text-gray-900">{p.price}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {brandName}が公表している料金です。<strong>店舗・プラン・時期によって異なる場合があります。</strong>
          入会金・事務手数料・オプションが別にかかることがあるため、総額は無料カウンセリングでご確認ください。
        </p>
        <p className="mt-3 text-sm">
          <Link href="/price/" className="text-teal-700 underline">→ 61ブランドの公表料金を一覧で比べる</Link>
        </p>
      </div>
    </section>
  );
}
