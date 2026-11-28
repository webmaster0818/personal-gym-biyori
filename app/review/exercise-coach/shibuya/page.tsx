import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import StoreGmapBox from "@/components/StoreGmapBox";
import StorePrice from "@/components/StorePrice";
import StoreJsonLd from "@/components/StoreJsonLd";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "エクササイズコーチ 渋谷店の口コミ・評判",
  description:
    "エクササイズコーチ 渋谷店の口コミ・評判をご紹介します。住所・アクセス・営業時間などの基本情報と、利用者の評価の傾向をご説明します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "エクササイズコーチ 渋谷店" },
  { label: "エリア", value: "東京都渋谷区渋谷（正確な所在地は公式サイト・Googleマップでご確認ください）" },
  { label: "営業時間", value: "公式サイトの店舗一覧に渋谷店の掲載がないため（2026年11月28日確認）、掲載していません" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "エクササイズコーチ渋谷店の料金はいくらですか？", a: "公式サイトの店舗一覧に渋谷店の掲載がないため（2026年11月27日確認）、当サイトでは渋谷店の料金を確認できていません。公式の店舗ページに掲載されている他店舗の料金は、コーチと1対1のパーソナル（スタンダード）が月4回17,600円（税込）からです。入会金は19,800円です。" },
  { q: "エクササイズコーチ渋谷店の営業時間を教えてください。", a: "公式サイトの店舗一覧に渋谷店の掲載がないため（2026年11月28日確認）、当サイトでは営業時間を確認できていません。営業している店舗と営業時間は、公式サイトの店舗一覧でご確認ください。" },
  { q: "エクササイズコーチ渋谷店へのアクセスを教えてください。", a: "公式サイトの店舗一覧に渋谷店の掲載がないため（2026年11月27日確認）、当サイトでは所在地・アクセスを確認できていません。近隣の店舗は公式サイトの店舗一覧でご確認ください。" },
  { q: "エクササイズコーチ渋谷店のAIマシンとは何ですか？", a: "個人の筋力データに基づいてAIが最適な負荷を自動設定するマシンです。毎回のトレーニングで筋力の変化を測定し、常に最適な強度でトレーニングできます。" },
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
  { name: "エクササイズコーチ 新宿店", href: "/review/exercise-coach/shinjuku/" },
  { name: "BEYOND 渋谷表参道店", href: "/review/beyond/shibuya-omotesando/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StoreJsonLd k="exercise-coach/shibuya" storeName="エクササイズコーチ 渋谷店" brandSlug="exercise-coach" brandName="エクササイズコーチ" pageUrl="https://personal-gym-biyori.com/review/exercise-coach/shibuya/" mapsSearchUrl="https://www.google.com/maps/search/エクササイズコーチ+渋谷店" />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
          { name: "渋谷店" },
        ]}
      />
      <ReviewSummary gymName="渋谷店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          エクササイズコーチ 渋谷店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月28日</p>
        {/* 2026-11-27 saburo-2 判断：公式の店舗一覧に渋谷店がないことを注記（削除・noindex変更・301はしない） */}
        <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-gray-800">
          <p className="font-bold">ご注意：エクササイズコーチの公式サイトの店舗一覧に、渋谷店の掲載がありません（2026年11月27日確認）</p>
          <p className="mt-1">当サイトで公式サイトの店舗一覧を確認したところ、渋谷店は掲載されていませんでした。東京23区では銀座・池袋西口・池袋東口・新宿西口・東京駅・品川・自由が丘の各店が掲載されています。このページの情報は以前のものです。ご利用の前に、<a href="https://exercisecoach.co.jp/store" target="_blank" rel="noopener nofollow" className="underline">公式サイト</a>で店舗の有無をご確認ください。</p>
        </div>

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
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <Link href="/review/exercise-coach/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">総合レビューを見る</Link>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              エクササイズコーチ 渋谷店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/エクササイズコーチ+渋谷店"
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
            店舗の概要
          </h2>
          <p className="text-gray-700 leading-relaxed">
            エクササイズコーチは、1回20分のAIマシンを使ったパーソナルトレーニングジムです。渋谷店は、2026年11月27日時点で公式サイトの店舗一覧に掲載がありません。
          </p>
        </section>
                
        <StorePrice brandSlug="exercise-coach" brandName="エクササイズコーチ" />
<StoreGmapBox k="exercise-coach/shibuya" storeName="エクササイズコーチ 渋谷店" brandSlug="exercise-coach" brandName="エクササイズコーチ" mapsSearchUrl="https://www.google.com/maps/search/エクササイズコーチ+渋谷店" />


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
              エクササイズコーチの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/exercise-coach/"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                エクササイズコーチの総合レビューを見る
              </Link>
              <a
                href="https://exercisecoach.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                エクササイズコーチ公式サイト
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
