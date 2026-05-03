import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BEYOND 立川店の口コミ・評判",
  description:
    "BEYOND 立川店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "BEYOND 立川店" },
  { label: "住所", value: "東京都立川市（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "JR立川駅 徒歩約5分" },
  { label: "営業時間", value: "10:00〜22:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

const faqItems = [
  { q: "BEYOND立川店の料金はいくらですか？", a: "回数券制で、STANDARD 10プラン（10回）が96,800円（税込）が目安です。入会金は無料です。最新の料金は公式サイトでご確認ください。" },
  { q: "BEYOND立川店の営業時間は？", a: "10:00〜22:00です。最新情報は公式サイトでご確認ください。" },
  { q: "BEYOND立川店のトレーナーの特徴は？", a: "ボディメイクコンテストの入賞経験者や、有資格者のトレーナーが在籍しています。専門知識に基づいた本格的な指導が特徴です。" },
  { q: "BEYOND立川店は入会金がかかりますか？", a: "いいえ、BEYONDは全店舗入会金無料です。コース料金のみでパーソナルトレーニングを始められます。" },
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
  { name: "BEYOND 新宿店", href: "/review/beyond/shinjuku/" },
  { name: "BEYOND 町田店", href: "/review/beyond/machida/" },
  { name: "BEYOND 池袋店", href: "/review/beyond/ikebukuro/" }
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BEYOND", href: "/review/beyond/" }, { name: "立川店" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">BEYOND 立川店の口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            BEYOND の公式サイトはこちら
          </a>
        </p>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">BEYOND 立川店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/BEYOND+立川店" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">BEYOND立川店は、多摩エリアの主要ターミナルであるJR立川駅から徒歩圏内に位置しています。入会金無料・回数券制で始めやすく、コンテスト経験者のトレーナーによる本格的な指導が受けられます。立川市内だけでなく、多摩地域各地からの利用者があり、都心まで出なくても質の高いパーソナルトレーニングを受けられると好評です。</p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-4">{faqItems.map((item, i) => (<details key={i} className="group bg-gray-50 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors"><span className="pr-4">{item.q}</span><span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span></summary><div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div></details>))}</div>
        </section>
        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">BEYONDの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/beyond/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">BEYONDの総合レビューを見る</Link>
              <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">関連店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedStores.map((store) => (<Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>))}</div>
        </section>
      </div>
    </>
  );
}
