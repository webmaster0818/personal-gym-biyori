import storeGmap from "@/data/store-gmap.json";
import { GMAP_STATS } from "@/data/brand-gmap-stats";

// 店舗別レビューページの「利用者の口コミ」枠の置き換え。
//
// 2026-09-30: 店舗ページ340本に、要約・再構成した口コミ本文1,690件と
// 「入会3ヶ月のユーザー」のような検証できない属性表記が残っていたため全撤去した。
// 代わりに出すのは、誰でもGoogleマップ上で同じ数字を確認できる実測値だけにする。
//
// 実測値を持っていない店舗では、数値を作らずに「持っていない」と書いてマップへ送る。
// 空欄を埋めるために推定値や定型文を入れない(それが元の問題だったため)。

type Entry = {
  storeName: string; gmapName: string; rating: number; reviews: number;
  address: string; maps: string; fetchedAt: string;
};
const DB = storeGmap as Record<string, Entry>;

export default function StoreGmapBox({
  k, storeName, brandSlug, brandName, mapsSearchUrl,
}: {
  k: string; storeName: string; brandSlug: string; brandName: string; mapsSearchUrl: string;
}) {
  const e = DB[k];
  const b = GMAP_STATS[brandSlug];

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
        Googleマップ実測データ
      </h2>

      {e ? (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-800">{e.gmapName}</p>
            <p className="text-[11px] text-gray-500 mt-1">
              当サイトがGoogle Places APIで取得した実測値です（取得日: {e.fetchedAt}）。同じ数字はGoogleマップ上でそのまま確認できます。
            </p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">
            <div className="p-4 text-center">
              <p className="text-[11px] text-gray-500">Googleマップ評点</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{e.rating}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-[11px] text-gray-500">口コミ件数</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{e.reviews.toLocaleString()}</p>
            </div>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-28 align-top whitespace-nowrap">所在地</th>
                <td className="px-4 py-3 text-gray-800">{e.address.replace(/^日本、/, "")}</td>
              </tr>
              {b && (
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 align-top whitespace-nowrap">ブランド内の位置</th>
                  <td className="px-4 py-3 text-gray-800">
                    {brandName}で当サイトが実測した{b.rated}店舗の平均は<strong>{b.avg}</strong>（幅 {b.min}〜{b.max}）。
                    この店舗は<strong>{e.rating}</strong>です。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <a href={e.maps} target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-teal-700 underline hover:text-teal-900">
              この店舗のGoogleマップを開く（口コミ本文はマップでご確認ください）
            </a>
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>{storeName}</strong>の評点・口コミ件数は、当サイトではまだ実測できていません。
            推定値を載せることはしないため、数値は掲載していません。最新の評点と口コミ本文はGoogleマップでご確認ください。
          </p>
          <p className="mt-3">
            <a href={mapsSearchUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-teal-700 underline hover:text-teal-900">
              Googleマップで{storeName}の口コミを見る
            </a>
          </p>
          {b && (
            <p className="text-xs text-gray-600 leading-relaxed mt-4 bg-gray-50 rounded p-3">
              参考までに、{brandName}については当サイトが<strong>{b.rated}店舗</strong>を実測しており、
              平均評点は<strong>{b.avg}</strong>、店舗ごとの幅は<strong>{b.min}〜{b.max}</strong>でした。
              同じブランドでも店舗差があるため、通う予定の店舗をマップで確認することをおすすめします。
            </p>
          )}
        </div>
      )}

      <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
        ※ 当サイトでは、投稿された口コミ本文を要約・再構成して掲載することはしていません（投稿を書き換えて載せない方針のため）。
        評点は投稿数が少ないほど振れやすく、店舗の良し悪しをそのまま表す指標ではありません。
      </p>
    </section>
  );
}
