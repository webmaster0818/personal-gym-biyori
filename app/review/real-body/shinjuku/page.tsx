import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リアルボディに新宿店はある？最寄り店舗と新宿のジム比較【2026年】",
  description:
    "「リアルボディ 新宿」で探す方へ。リアルボディ（REAL BODY）は仙台・東北を中心に千葉・埼玉に展開する回数券制パーソナルジムで、新宿・東京都内に店舗はありません（2026年時点）。最寄りの実在店舗（千葉・埼玉）と、新宿で通えるパーソナルジムの比較をご案内します。",
};

// 公式サイト（personalgym-realbody.com/shop-list/）記載の実在店舗のうち、関東（千葉・埼玉）の店舗。
const nearestStores = [
  { name: "北習志野店", area: "千葉県船橋市", address: "千葉県船橋市習志野台3-18-9 フラワービル2階" },
  { name: "松戸八柱店", area: "千葉県松戸市", address: "千葉県松戸市稔台1-1-2 祥城ビル1階" },
  { name: "四街道店", area: "千葉県四街道市", address: "千葉県四街道市四街道2-2-7 ラインヴィラ四街道2階" },
  { name: "坂戸店", area: "埼玉県坂戸市", address: "埼玉県坂戸市南町12-12 幸陽ビル102" },
];

const faqItems = [
  {
    q: "リアルボディに新宿店はありますか？",
    a: "2026年時点で、リアルボディ（REAL BODY）に新宿店および東京都内の店舗はありません。公式サイトの店舗一覧では、仙台・東北エリア（宮城・福島・山形・青森・岩手）を中心に、関東は千葉県・埼玉県にのみ店舗が掲載されています。最新の店舗状況は公式サイトでご確認ください。",
  },
  {
    q: "新宿から最も近いリアルボディの店舗はどこですか？",
    a: "関東圏では千葉県（北習志野店・松戸八柱店・四街道店）と埼玉県（坂戸店）に店舗があります。新宿から電車で向かう場合、これらが最寄りの実在店舗となります。本社は宮城県仙台市です。",
  },
  {
    q: "新宿でリアルボディのようなジムを探すには？",
    a: "リアルボディは回数券制・食事指導無料・契約縛りなしが特徴です。新宿エリアで同様に通いやすいパーソナルジムを探す場合は、当サイトの「新宿のパーソナルジム比較」で料金やエリアから比較できます。",
  },
  {
    q: "リアルボディの料金はいくらですか？",
    a: "回数券制で、2回券12,000円から16回券56,000円（1回3,500円）まで8券種があります（2026年8月3日公式確認）。1回のセッションは45分です。詳しくはリアルボディの総合レビューと公式サイトをご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function RealBodyShinjukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "リアルボディ", href: "/review/real-body/" },
          { name: "新宿で探す方へ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 mt-6">
          リアルボディに新宿店はある？最寄り店舗と新宿のジム比較
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年7月</p>

        {/* 結論ボックス */}
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-2">結論：リアルボディに新宿店・東京都内の店舗はありません（2026年時点）</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            リアルボディ（REAL BODY）は宮城県仙台市に本社を置き、<strong>仙台・東北エリアを中心に、関東では千葉県・埼玉県</strong>に店舗を展開する回数券制のパーソナルジムです。
            公式サイトの店舗一覧に<strong>新宿店や東京都内の店舗は掲載されていません</strong>。「リアルボディ 新宿」で検索された方に向けて、最寄りの実在店舗と、新宿で通えるパーソナルジムの比較をご案内します。
          </p>
        </div>

        {/* リアルボディの展開エリア（事実） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの店舗があるエリア</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            リアルボディは地域密着型のパーソナルジムで、公式サイトには次のエリアに店舗が掲載されています（東京都内・新宿には未出店です）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">本社</th>
                  <td className="px-4 py-3 text-gray-800">宮城県仙台市</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">東北エリア</th>
                  <td className="px-4 py-3 text-gray-800">宮城（仙台・多賀城・石巻・岩沼）／福島（郡山・いわき）／山形／青森（八戸）／岩手（盛岡）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">関東エリア</th>
                  <td className="px-4 py-3 text-gray-800">千葉（北習志野・松戸八柱・四街道）／埼玉（坂戸）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">東京都内</th>
                  <td className="px-4 py-3 text-gray-800">店舗なし（新宿店なし）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 店舗情報は公式サイト（店舗一覧）にもとづく2026年7月時点の情報です。出店状況は変わる可能性があるため、最新は
            <a href="https://personalgym-realbody.com/shop-list/" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 underline">公式サイトの店舗一覧</a>
            でご確認ください。
          </p>
        </section>

        {/* 最寄りの実在店舗 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">新宿から最も近いリアルボディの店舗（千葉・埼玉）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            関東でリアルボディに通いたい場合、新宿から向かえる最寄りの実在店舗は次のとおりです。いずれも千葉県・埼玉県にあります。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearestStores.map((s) => (
              <div key={s.name} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">{s.name}</h3>
                <p className="text-xs text-teal-700 mb-1">{s.area}</p>
                <p className="text-sm text-gray-700">{s.address}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 住所は公式サイト掲載の情報です。営業時間・アクセス等の詳細は公式サイトでご確認ください。</p>
        </section>

        {/* 新宿で探す方への案内（内部リンク） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">新宿でパーソナルジムを探している方へ</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            リアルボディは新宿に店舗がないため、新宿エリアで通えるパーソナルジムをお探しの場合は、料金・特徴・アクセスから比較するのがおすすめです。リアルボディの「回数券制・食事指導無料・契約縛りなし」のような、費用を抑えて続けやすいジムも比較できます。
          </p>
          <div className="bg-teal-50 rounded-lg p-6 space-y-3">
            <Link href="/area/shinjuku/" className="block bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors text-center text-sm">
              新宿のパーソナルジム比較を見る →
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/review/real-body/" className="block border border-teal-600 text-teal-600 py-2.5 px-4 rounded-lg hover:bg-teal-50 transition-colors text-center text-sm">
                リアルボディの総合レビュー
              </Link>
              <Link href="/area/chiba/" className="block border border-teal-600 text-teal-600 py-2.5 px-4 rounded-lg hover:bg-teal-50 transition-colors text-center text-sm">
                千葉のパーソナルジム比較
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">リアルボディの料金・口コミをもっと知る</h2>
          <p className="text-teal-100 text-sm mb-6">回数券制の料金目安や口コミの傾向は、総合レビューで詳しく解説しています。</p>
          <Link href="/review/real-body/" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            リアルボディの総合レビューを見る
          </Link>
        </section>
      </div>
    </>
  );
}
