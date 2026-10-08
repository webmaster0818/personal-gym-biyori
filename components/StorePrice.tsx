import Link from "next/link";
import { BRAND_PRICES, FEE_SURVEYED_AT } from "@/data/brand-prices";

/*
 * ブランドの公表料金を店舗ページにも出す(2026-10-01 施主指示「不足している情報の追記」)。
 * 2026-10-08: 全ブランドの公式サイトを実査し直したデータに差し替え。
 * 公式サイトが金額を公表していないブランドは、推定を書かずにその旨を出す。
 */
export default function StorePrice({ brandSlug, brandName }: { brandSlug: string; brandName: string }) {
  const p = BRAND_PRICES.find((x) => x.slug === brandSlug);
  if (!p) return null;
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">料金（{brandName}の公表料金）</h2>
      <div className="rounded-lg border border-gray-200 p-4">
        <p className="text-base font-bold leading-relaxed text-gray-900">{p.price}</p>
        {p.note && <p className="mt-2 text-sm text-gray-600">※{p.note}</p>}
        <p className="mt-2 text-sm text-gray-700">入会金：{p.entry}</p>
        <p className="mt-2 text-xs leading-relaxed text-gray-500">
          {FEE_SURVEYED_AT}に{p.officialUrl ? "公式サイト" : "公開情報"}で確認した掲載値です。
          <strong>店舗・プラン・時期によって異なる場合があります。</strong>
          入会金・事務手数料・オプションが別にかかることがあるため、総額は無料カウンセリングでご確認ください。
          {p.officialUrl && (
            <>
              {" "}
              <a href={p.officialUrl} target="_blank" rel="nofollow noopener" className="underline">
                {brandName}公式サイトの料金ページ
              </a>
            </>
          )}
        </p>
        <p className="mt-3 text-sm">
          <Link href="/price/" className="text-teal-700 underline">→ {BRAND_PRICES.length}ブランドの公表料金を一覧で比べる</Link>
        </p>
      </div>
    </section>
  );
}
