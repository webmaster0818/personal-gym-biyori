import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dr.トレーニング 新宿店の口コミ・評判",
  description:
    "Dr.トレーニング 新宿店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "Dr.トレーニング 新宿店" },
  { label: "住所", value: "東京都新宿区新宿（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "JR新宿駅 徒歩約5分" },
  { label: "営業時間", value: "9:00〜22:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "Dr.トレーニング新宿店の料金はいくらですか？", a: "Dr.トレーニング新宿店の料金は、都度払い制で1回60分7,100円（税込）〜が目安です。入会金は35,600円（税込）です。最新の料金は公式サイトでご確認ください。" },
  { q: "Dr.トレーニング新宿店の営業時間は？", a: "9:00〜22:00です。※最新情報は公式サイトでご確認ください）" },
  { q: "Dr.トレーニング新宿店は無料カウンセリングを受けられますか？", a: "はい、無料カウンセリング（体験）が用意されています。公式サイトから予約可能です。最新情報は公式サイトでご確認ください。" },
  { q: "Dr.トレーニング新宿店のアクセスは？", a: "JR新宿駅 徒歩約5分の立地です。詳しいアクセスは公式サイトでご確認ください。" },
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
  { name: "Dr.トレーニング 恵比寿店", href: "/review/dr-training/ebisu/" },
  { name: "Dr.トレーニング 池袋店", href: "/review/dr-training/ikebukuro/" },
  { name: "Dr.トレーニング 銀座店", href: "/review/dr-training/ginza/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "Dr.トレーニング", href: "/review/dr-training/" },
          { name: "新宿店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Dr.トレーニング 新宿店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        {/* ---------- 基本情報テーブル ---------- */}
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

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Dr.トレーニング 新宿店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/Dr.トレーニング+新宿店"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Googleマップで見る
            </a>
          </div>
        </section>

        {/* ---------- 口コミ概要 ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            口コミ概要
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dr.トレーニング新宿店は、新宿駅からアクセス良好な店舗です。医学的アプローチを取り入れたパーソナルトレーニングが特徴で、ダイエットから筋力アップまで幅広いニーズに対応しています。都度払い制のため、自分のペースで通えると好評です。トレーナーの知識量と指導力を評価する口コミが多く見られます。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">
            ※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。
          </p>
        </section>

        {/* ---------- FAQ ---------- */}
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

        {/* ---------- CTA ---------- */}
        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">
              Dr.トレーニングの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/dr-training/"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Dr.トレーニングの総合レビューを見る
              </Link>
              <a
                href="https://drtraining.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Dr.トレーニング公式サイト
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 関連店舗 ---------- */}
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
