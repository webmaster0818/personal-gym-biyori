import storeGmap from "@/data/store-gmap.json";
import { BRAND_PRICES, priceSummary } from "@/data/brand-prices";

/*
 * 店舗ページの構造化データ(2026-10-01 施主指示)。
 *
 * 方針: 検証できた値だけを入れる。
 *  - address は、Googleマップ実測DBに所在地がある店舗だけ出す。
 *    掲載データ側の住所は区レベルのプレースホルダ(例「東京都新宿区（※最新情報は…）」)なので
 *    構造化データには入れない。誤った住所をマークアップしない。
 *  - aggregateRating は入れない。Googleマップの第三者評点を自サイトの集計として
 *    マークアップするのは不適切なため、sameAs でマップへ参照だけ渡す。
 *  - priceRange はブランドの公表料金(data/brand-prices.ts)がある場合のみ。
 */

type Entry = { gmapName: string; rating: number; reviews: number; address: string; maps: string; fetchedAt: string };
const DB = storeGmap as Record<string, Entry>;

export default function StoreJsonLd({
  k, storeName, brandSlug, brandName, pageUrl, mapsSearchUrl,
}: {
  k: string; storeName: string; brandSlug: string; brandName: string; pageUrl: string; mapsSearchUrl: string;
}) {
  const e = DB[k];
  const price = BRAND_PRICES.find((p) => p.slug === brandSlug);

  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: storeName,
    brand: { "@type": "Brand", name: brandName },
    url: pageUrl,
    sameAs: [e ? e.maps : mapsSearchUrl],
  };
  if (e?.address) {
    node.address = { "@type": "PostalAddress", streetAddress: e.address.replace(/^日本、/, ""), addressCountry: "JP" };
  }
  // priceRange は短い表記のみ。公式が金額を公表していないブランドには付けない。
  if (price && price.lowest !== null) node.priceRange = priceSummary(price);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />;
}
