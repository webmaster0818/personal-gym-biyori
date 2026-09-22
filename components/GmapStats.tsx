import { GMAP_STATS, GMAP_FETCHED_AT } from "@/data/brand-gmap-stats";

// ブランドの全店舗のGoogleマップ評点を実測して集計したボックス。
// 「利用歴◯ヶ月のユーザー」のような検証できない属性つきの声ではなく、
// 誰でもGoogleマップで追える評点・件数だけを出す。
//
// 掲載方針(2026-09-23): 評点が相対的に低い店舗を名指しで並べることはしない。
// 読者に必要なのは「店舗ごとに違うので自分が通う店舗を見る」という行動であって、
// 特定店舗の格付けではないため。集計値と上位店舗のみを出し、
// 自分の店舗はマップで確認してもらう導線にする。
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
          同じブランドでも、店舗によって評点は<strong>{s.min}〜{s.max}</strong>の幅があります。
          これはトレーナーの顔ぶれや立地・設備が店舗ごとに違うためで、
          ブランド名だけで決めるより<strong>通う予定の店舗をマップで確認する</strong>ほうが、実際の通いやすさに近づきます。
          気になる店舗があれば、体験や無料カウンセリングで雰囲気を見てから決めるのが確実です。
        </p>
        <div>
          <p className="text-xs font-bold text-gray-600 mb-2">評点の高い店舗（参考）</p>
          <ul className="space-y-1">
            {s.top.map((t) => (
              <li key={t.name} className="text-xs text-gray-600">
                <a href={t.maps} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-900">{t.name}</a>
                <span className="ml-1 text-gray-800 font-medium">{t.rating}</span>
                <span className="text-gray-400">（{t.reviews}件）</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
            ※ 評点は投稿数が少ないほど振れやすく、店舗の良し悪しをそのまま表す指標ではありません。
            当サイトでは評点の低い店舗を名指しで並べることはしていません。通う予定の店舗の状況は、Googleマップと無料カウンセリングでご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
