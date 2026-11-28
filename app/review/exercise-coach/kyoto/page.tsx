import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import StoreGmapBox from "@/components/StoreGmapBox";
import StorePrice from "@/components/StorePrice";
import StoreJsonLd from "@/components/StoreJsonLd";

export const metadata: Metadata = {
  title: "エクササイズコーチ 四条烏丸店の口コミ・評判",
  description:
    "エクササイズコーチ 四条烏丸店の口コミ・評判をご紹介します。住所・アクセス・営業時間などの基本情報と、利用者の評価の傾向をご説明します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "エクササイズコーチ 四条烏丸店" },
  { label: "エリア", value: "京都府京都市（正確な所在地は公式サイト・Googleマップでご確認ください）" },
  { label: "営業時間", value: "平日10:00〜21:00・土日祝9:00〜20:00（公式の店舗ページ・2026年11月28日確認。最終受付は終了の20〜30分前）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "エクササイズコーチ四条烏丸店の料金はいくらですか？", a: "公式の店舗ページ（2026年11月27日確認）では、コーチと1対1のパーソナルはスタンダードが月4回17,600円・月6回26,400円・月8回35,200円、デイプラン（全日：平日10:00〜17:00／土日祝12:00〜17:00）が月4回15,840円・月6回23,760円・月8回31,680円です。コーチ1名にお客様2名のパートナーコースはスタンダードが月4回13,200円・月6回19,800円・月8回26,400円、デイプラン（全日：平日10:00〜17:00／土日祝12:00〜17:00）が月4回9,900円・月6回14,850円・月8回19,800円です。金額はいずれも税込で、入会金19,800円が別途必要です。" },
  { q: "エクササイズコーチ四条烏丸店の営業時間を教えてください。", a: "公式の店舗ページ（2026年11月28日確認）では、平日10:00〜21:00・土日祝9:00〜20:00です。最新情報は公式サイトでご確認ください。" },
  { q: "エクササイズコーチ四条烏丸店のAIマシンとは何ですか？", a: "個人の筋力データに基づいてAIが最適な負荷を自動設定するマシンです。毎回のトレーニングで筋力の変化を測定し、常に最適な強度でトレーニングできます。" },
  { q: "エクササイズコーチ四条烏丸店へのアクセスを教えてください。", a: "河原町駅から徒歩2分です。京都市の中心部・四条エリアに位置し、観光やお仕事の合間にも通いやすい立地です。" },
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
  { name: "エクササイズコーチ リンクス梅田店", href: "/review/exercise-coach/umeda/" },
  { name: "エクササイズコーチ 三宮店", href: "/review/exercise-coach/sannomiya/" },
  { name: "エクササイズコーチ 名古屋駅店", href: "/review/exercise-coach/nagoya/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StoreJsonLd k="exercise-coach/kyoto" storeName="エクササイズコーチ 四条烏丸店" brandSlug="exercise-coach" brandName="エクササイズコーチ" pageUrl="https://personal-gym-biyori.com/review/exercise-coach/kyoto/" mapsSearchUrl="https://www.google.com/maps/search/エクササイズコーチ+四条烏丸店" />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
          { name: "四条烏丸店" },
        ]}
      />
      <ReviewSummary gymName="四条烏丸店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          エクササイズコーチ 四条烏丸店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月28日</p>

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
              エクササイズコーチ 四条烏丸店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/エクササイズコーチ+四条烏丸店"
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
            エクササイズコーチ四条烏丸店は、河原町駅から徒歩2分の京都市中心部にある店舗です。AI主導のマシンが個人の筋力データに基づいて最適な負荷を自動設定し、1回20分の短時間で効率的なトレーニングが可能です。
          </p>
        </section>
                
        <StorePrice brandSlug="exercise-coach" brandName="エクササイズコーチ" />
<StoreGmapBox k="exercise-coach/kyoto" storeName="エクササイズコーチ 四条烏丸店" brandSlug="exercise-coach" brandName="エクササイズコーチ" mapsSearchUrl="https://www.google.com/maps/search/エクササイズコーチ+四条烏丸店" />


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
              <Link href="/review/exercise-coach/" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">エクササイズコーチの総合レビューを見る</Link>
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
