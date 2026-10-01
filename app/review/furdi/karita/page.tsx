import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import StoreGmapBox from "@/components/StoreGmapBox";
import StorePrice from "@/components/StorePrice";
import StoreJsonLd from "@/components/StoreJsonLd";

export const metadata: Metadata = {
  title: "FURDI 苅田店の口コミ・評判",
  description:
    "FURDI（ファディー）苅田店の口コミ・評判を紹介。AI指導・女性専用サーキット型フィットネスの基本情報から利用者の評価傾向まで詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "FURDI（ファディー）苅田店" },
  { label: "エリア", value: "福岡県京都郡苅田町（正確な所在地は公式サイト・Googleマップでご確認ください）" },
  { label: "営業時間（ブランド標準）", value: "6:00〜23:00（店舗により異なります。公式サイトでご確認ください）" },
  { label: "月額料金", value: "月額7,678円〜" },
];

const faqItems = [
  { q: "FURDI苅田店の月額料金はいくらですか？", a: "FURDI苅田店は月額7,678円〜で通い放題です。プランにより異なりますので、最新の料金は公式サイトでご確認ください。" },
  { q: "FURDI苅田店はAI指導ですか？", a: "はい、大型モニターにAIトレーナーが表示され、フォームの指導やメニューの提案を行います。200種類以上のトレーニングメニューが用意されています。" },
  { q: "FURDI苅田店は予約が必要ですか？", a: "いいえ、予約不要で好きな時間に通えます。サーキット型のトレーニングなので、自分のペースで取り組めます。" },
  { q: "FURDI苅田店は男性も利用できますか？", a: "いいえ、FURDIは女性専用のフィットネスジムです。女性だけの空間で安心してトレーニングできます。" },
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
  { name: "FURDI 福岡店", href: "/review/furdi/fukuoka/" },
  { name: "FURDI 徳山デッキ店", href: "/review/furdi/tokuyama/" },
  { name: "FURDI 岡山野田店", href: "/review/furdi/okayama-noda/" },
];

const affiliateLink = "https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A";

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StoreJsonLd k="furdi/karita" storeName="FURDI（ファディー）苅田店" brandSlug="furdi" brandName="FURDI" pageUrl="https://personal-gym-biyori.com/review/furdi/karita/" mapsSearchUrl="https://www.google.com/maps/search/FURDI+ファディー+苅田店" />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "FURDI", href: "/review/furdi/" },
          { name: "苅田店" },
        ]}
      />
      <ReviewSummary gymName="苅田店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FURDI 苅田店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FURDI の公式サイトはこちら
          </a>
        </p>

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
        <div className="mb-10 text-center">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">FURDI 苅田店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/FURDI+ファディー+苅田店" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">
            FURDI苅田店は、福岡県京都郡苅田町にある女性専用AIフィットネスジムです。月額7,678円〜という低価格で通い放題のサーキット型トレーニングが特徴。AIトレーナーが画面上でフォームを指導してくれるため、人目を気にせず自分のペースでトレーニングできると好評です。苅田町で気軽に通えるフィットネス施設として地元女性に人気です。
          </p>
        </section>

                
        <StorePrice brandSlug="furdi" brandName="FURDI" />
<StoreGmapBox k="furdi/karita" storeName="FURDI（ファディー）苅田店" brandSlug="furdi" brandName="FURDI" mapsSearchUrl="https://www.google.com/maps/search/FURDI+ファディー+苅田店" />
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

        <section className="mb-10 text-center">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/F6058J.T101150Z.Q136169A" alt="FURDI" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">FURDIの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/furdi/" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">FURDIの総合レビューを見る</Link>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">FURDI公式サイト</a>
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
