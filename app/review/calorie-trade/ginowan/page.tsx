import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CALORIE TRADE JAPAN 宜野湾店の口コミ・評判",
  description:
    "CALORIE TRADE JAPAN 宜野湾店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "CALORIE TRADE JAPAN 宜野湾店" },
  { label: "住所", value: "宜野湾市我如古3-8-8" },
  { label: "最寄駅", value: "※公式サイトでご確認ください" },
  { label: "営業時間", value: "※公式サイトでご確認ください" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "CALORIE TRADE JAPAN 宜野湾店の料金はいくらですか？", a: "コースや回数によって料金が異なります。最新の料金プランは公式サイトでご確認ください。" },
  { q: "CALORIE TRADE JAPAN 宜野湾店の営業時間は？", a: "営業時間は店舗により異なります。最新情報は公式サイトでご確認ください。" },
  { q: "CALORIE TRADE JAPAN 宜野湾店ではどんなトレーニングができますか？", a: "ダイエットに特化したパーソナルトレーニングを提供しています。食事指導も含めた総合的なボディメイクプログラムが特徴です。" },
  { q: "CALORIE TRADE JAPAN 宜野湾店は駐車場がありますか？", a: "駐車場の有無は公式サイトでご確認ください。沖縄では車移動が一般的なため、多くの店舗で駐車場を完備しています。" },
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

/* ---------- 関連店舗 ---------- */
const relatedStores = [
  { name: "CALORIE TRADE JAPAN 別府店", href: "/review/calorie-trade/beppu/" },
  { name: "CALORIE TRADE JAPAN 名古屋瑞穂区店", href: "/review/calorie-trade/nagoya-mizuho/" },
  { name: "CALORIE TRADE JAPAN 松戸八柱店", href: "/review/calorie-trade/matsudo/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "CALORIE TRADE JAPAN", href: "/review/calorie-trade/" },
          { name: "宜野湾店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          CALORIE TRADE JAPAN 宜野湾店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CALORIE TRADE JAPAN の公式サイトはこちら
          </a>
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              CALORIE TRADE JAPAN 宜野湾店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/CALORIE+TRADE+JAPAN+宜野湾店"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Googleマップで見る
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            口コミ概要
          </h2>
          <p className="text-gray-700 leading-relaxed">
            CALORIE TRADE JAPAN 宜野湾店は、沖縄県宜野湾市の我如古エリアに位置するパーソナルジムです。沖縄本島中部の利便性の高い立地で、宜野湾市や近隣の北谷町・中城村からも通いやすい環境です。沖縄の食文化に合わせたカロリー管理と食事指導が特徴で、地元の方の健康づくりやダイエットをサポートしています。暑い気候でも快適な室内環境でトレーニングに取り組めると好評です。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">
            ※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S9777P.F142081F.Q136169A" alt="CALORIE TRADE JAPAN" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">
              CALORIE TRADE JAPANの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/calorie-trade/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                CALORIE TRADE JAPANの総合レビューを見る
              </Link>
              <a
                href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                公式サイトへ
              </a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            関連店舗
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedStores.map((store) => (
              <Link
                key={store.href}
                href={store.href}
                className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center"
              >
                {store.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
