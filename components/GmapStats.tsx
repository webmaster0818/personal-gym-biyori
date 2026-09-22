import { GMAP_STATS, GMAP_FETCHED_AT } from "@/data/brand-gmap-stats";

// ブランドの全店舗のGoogleマップ評点を実測して集計したボックス。
// 「利用歴◯ヶ月のユーザー」のような検証できない属性つきの声ではなく、
// 誰でもGoogleマップで追える評点・件数だけを出す。各店舗名はマップへのリンク付き。
export default function GmapStats({ slug, brand }: { slug: string; brand: string }) {
  const s = GMAP_STATS[slug];
  if (!s) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <p className="text-sm font-bold text-gray-800">
          {brand}のGoogleマップ実測データ（当サイト収録{s.rated}店舗・口コミ{s.reviews.toLocaleString()}件）
        </p>
        <p className="text-[11px] text-gray-500 mt-1">
          当サイトがGoogle Places APIで取得した実店舗データベース（全国49市区・約2,700店舗）から{brand}の店舗を抽出して集計しました（取得日: {GMAP_FETCHED_AT}）。全店舗を網羅したものではありませんが、数値は各店舗のマップページでそのまま確認できます。
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200 border-b border-gray-200">
        <div className="p-4 text-center">
          <p className="text-[11px] text-gray-500">平均評点（店舗単純平均）</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{s.avg}</p>
        </div>
        <div className="p-4 text-center">
          <p className="text-[11px] text-gray-500">口コミ数で加重した平均</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{s.wavg}</p>
        </div>
        <div className="p-4 text-center border-t sm:border-t-0 border-gray-200">
          <p className="text-[11px] text-gray-500">4.5以上の店舗</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">
            {s.ge45}<span className="text-sm font-normal text-gray-500">/{s.rated}</span>
          </p>
        </div>
        <div className="p-4 text-center border-t sm:border-t-0 border-gray-200">
          <p className="text-[11px] text-gray-500">評点の幅</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{s.min}〜{s.max}</p>
        </div>
      </div>

      <div className="p-4 text-sm">
        <p className="text-gray-700 leading-relaxed mb-3">
          同じブランドでも店舗によって評点は<strong>{s.min}〜{s.max}</strong>まで開きがあります
          {s.lt40 > 0 ? (
            <>（4.0を下回る店舗が<strong>{s.lt40}店舗</strong>あります）</>
          ) : (
            <>（4.0を下回る店舗はありませんでした）</>
          )}
          。ブランド名だけでなく<strong>通う予定の店舗</strong>の評点を必ず確認してください。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-gray-600 mb-2">評点の高い店舗</p>
            <ul className="space-y-1">
              {s.top.map((t) => (
                <li key={t.name} className="text-xs text-gray-600">
                  <a href={t.maps} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-900">{t.name}</a>
                  <span className="ml-1 text-gray-800 font-medium">{t.rating}</span>
                  <span className="text-gray-400">（{t.reviews}件）</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-600 mb-2">評点の低い店舗</p>
            <ul className="space-y-1">
              {s.bottom.map((t) => (
                <li key={t.name} className="text-xs text-gray-600">
                  <a href={t.maps} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-900">{t.name}</a>
                  <span className="ml-1 text-gray-800 font-medium">{t.rating}</span>
                  <span className="text-gray-400">（{t.reviews}件）</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
