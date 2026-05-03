import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "カーブス 上野店の口コミ・評判",
  description:
    "カーブス 上野店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "カーブス 上野店" },
  { label: "住所", value: "東京都台東区（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "上野駅 徒歩5分" },
  { label: "営業時間", value: "平日 10:00〜19:00（13:00〜15:00はクローズ）/ 土曜 10:00〜13:00（※最新情報は公式サイトでご確認ください）" },
  { label: "定休日", value: "日曜・祝日" },
  { label: "料金", value: "月額6,820円〜（税込）" },
];

const faqItems = [
  { q: "カーブス上野店は女性専用ですか？", a: "はい、カーブスは全店舗女性専用のフィットネスクラブです。男性会員・男性スタッフはおりませんので、安心してご利用いただけます。" },
  { q: "カーブス上野店の料金はいくらですか？", a: "月額6,820円〜（税込）です。プランによって料金が異なりますので、最新の料金は公式サイトでご確認ください。" },
  { q: "1回のトレーニング時間はどれくらいですか？", a: "1回わずか30分の独自サーキットトレーニングです。予約不要なので、お好きな時間にお越しいただけます。" },
  { q: "カーブスは全国に何店舗ありますか？", a: "全国に2,000店舗以上展開しています。引っ越しや転勤の際も、お近くの店舗で継続してご利用いただけます。" },
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

const relatedStores = [
  { name: "カーブス 池袋店", href: "/review/curves/ikebukuro/" },
  { name: "カーブス 銀座店", href: "/review/curves/ginza/" },
  { name: "カーブス 大宮店", href: "/review/curves/omiya/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "カーブス", href: "/review/curves/" },
          { name: "上野店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">カーブス 上野店の口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">カーブス 上野店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/カーブス+上野" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">
            カーブス上野店は、上野駅から徒歩5分の女性専用フィットネスです。下町エリアならではのアットホームな雰囲気が特徴で、地元の主婦やシニア層を中心に愛されています。30分のサーキットトレーニングは体力に自信がない方でも取り組みやすく、膝や腰に不安がある方にも配慮したプログラムが好評です。スタッフが名前を覚えて声をかけてくれるので、通うのが楽しみになったという声が多く寄せられています。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">カーブスの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/curves/" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">カーブスの総合レビューを見る</Link>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">関連店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedStores.map((store) => (
              <Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
