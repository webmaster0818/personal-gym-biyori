// エリア別 実在パーソナルジム一覧(Googleマップ実データ・捏造ゼロ)
// 評点・件数・住所はGoogle Places APIの実数のみ。提携ブランドは自社レビュー/公式CTAへ、未提携はGoogleマップURLへ。
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { gymMetadata } from "@/lib/gym-metadata";

type Gym = { name: string; rating?: number; count: number; address: string; mapsUri?: string; website?: string };

// 自社レビュー/提携があるブランドを店名から判定(gymMetadataのgoogleMapQueryで部分一致)
function matchBrand(gymName: string) {
  for (const [brand, meta] of Object.entries(gymMetadata)) {
    const q = meta.googleMapQuery;
    if (q && gymName.includes(q)) return { brand, meta };
  }
  return null;
}

export default function AreaGymList({ area, areaName }: { area: string; areaName: string }) {
  const raw = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data-area-gyms.json"), "utf-8"));
  const all: Gym[] = raw[area] || [];
  const gyms = all.filter((g) => g.count >= 5).slice(0, 30);
  const surveyedAt: string = raw.surveyedAt;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${areaName}のパーソナルジム一覧`,
    numberOfItems: gyms.length,
    itemListElement: gyms.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.name })),
  };

  return (
    <section className="mb-10">
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <h2 className="text-2xl font-bold text-center mb-3">{areaName}のパーソナルジム一覧【Google口コミ実データ】</h2>
        <p className="text-center text-gray-500 text-sm mb-2">
          {areaName}周辺の実在パーソナルジムを、<strong>Googleマップの実データ（評点・口コミ件数）</strong>をもとに口コミ件数順で掲載しています（{surveyedAt}取得・全{all.length}件を調査し口コミ5件以上の{gyms.length}件を掲載）。
        </p>
        <p className="text-center text-gray-400 text-xs mb-8">出典: Google マップ（Google Places API・{surveyedAt}時点）。評点・件数は当サイトの創作ではなく実数で、その後変動する場合があります。料金は各ジムの公式サイト等でご確認ください。</p>

        <div className="space-y-4">
          {gyms.map((g, i) => {
            const b = matchBrand(g.name);
            return (
              <div key={g.name + i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-bold">#{i + 1}</p>
                    <h3 className="font-bold text-lg text-gray-800 leading-snug">{g.name}</h3>
                  </div>
                  {typeof g.rating === "number" && (
                    <div className="shrink-0 text-right">
                      <p className="text-orange-500 font-extrabold text-lg">★ {g.rating.toFixed(1)}</p>
                      <p className="text-xs text-gray-500">Google口コミ {g.count}件</p>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">{g.address}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-sm font-bold">
                  {b && (
                    <Link href={b.meta.reviewHref} className="text-orange-600 underline underline-offset-2">
                      {b.brand}の詳細レビュー
                    </Link>
                  )}
                  {b?.meta.affiliateUrl && (
                    <a href={b.meta.affiliateUrl} target="_blank" rel="sponsored nofollow noopener" className="text-white bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-1 rounded">
                      公式サイト（PR）
                    </a>
                  )}
                  {g.mapsUri && (
                    <a href={g.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-700 underline underline-offset-2">
                      Googleマップで口コミを見る
                    </a>
                  )}
                  {!b && g.website && (
                    <a href={g.website} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-700 underline underline-offset-2">
                      公式サイト
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
