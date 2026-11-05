import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import StoreGmapBox from "@/components/StoreGmapBox";
import StorePrice from "@/components/StorePrice";
import StoreJsonLd from "@/components/StoreJsonLd";

export const metadata: Metadata = {
  title: "BEYOND 渋谷表参道店の口コミ・評判",
  description:
    "BEYOND 渋谷表参道店の口コミ・評判をご紹介します。公式サイトに掲載の住所・アクセス・営業時間などの基本情報と、Googleマップの掲載データをまとめています。",
};

/* ---------- 基本情報（BEYOND公式 店舗ページ https://beyond-gym.com/gym/gym-shibuyaomotesando/ を2026年11月5日に確認） ----------
 * 旧「渋谷宮益坂店」ページ（/review/beyond/shibuya-miyamasuzaka/）は同じ所在地（渋谷区渋谷2-10-9）のため、このページへ301で統合した。
 * 公式の旧URL /gym/gym-miyamasuzaka/ も /gym/gym-shibuyaomotesando/ へ転送されている。 */
const OFFICIAL_STORE_URL = "https://beyond-gym.com/gym/gym-shibuyaomotesando/";
const basicInfo = [
  { label: "店舗名", value: "BEYOND 渋谷表参道店" },
  { label: "住所", value: "〒150-0002 東京都渋谷区渋谷2丁目10-9 210野村ビル B1F" },
  { label: "アクセス", value: "渋谷駅B5出口から徒歩5分／表参道駅から徒歩8分" },
  { label: "営業時間", value: "10:00〜22:00" },
  { label: "定休日", value: "なし" },
  { label: "電話番号", value: "03-3797-1150" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "BEYOND渋谷表参道店はどこにありますか？", a: "公式サイトの店舗ページでは、所在地は東京都渋谷区渋谷2丁目10-9 210野村ビル B1F、アクセスは「渋谷駅B5出口から徒歩5分／表参道駅から徒歩8分」と案内されています（2026年11月5日確認）。" },
  { q: "BEYOND渋谷表参道店の料金はいくらですか？", a: "公式サイトの店舗ページでは、回数券のSTANDARD 10（10回）が102,300円（税込）と案内されています（2026年11月5日確認）。入会金は全コース無料です。最新の料金は公式サイトでご確認ください。" },
  { q: "BEYOND渋谷表参道店の営業時間を教えてください。", a: "公式サイトの店舗ページでは、営業時間は10:00〜22:00、定休日はなしと案内されています（2026年11月5日確認）。" },
  { q: "BEYOND渋谷表参道店は入会金がかかりますか？", a: "いいえ、BEYONDの公式料金ページでは全コース入会金無料と案内されています。" },
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
  { name: "BEYOND 恵比寿店", href: "/review/beyond/ebisu/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StoreJsonLd k="beyond/shibuya-omotesando" storeName="BEYOND 渋谷表参道店" brandSlug="beyond" brandName="BEYOND" pageUrl="https://personal-gym-biyori.com/review/beyond/shibuya-omotesando/" mapsSearchUrl="https://www.google.com/maps/search/BEYOND+渋谷表参道店" />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "BEYOND", href: "/review/beyond/" },
          { name: "渋谷表参道店" },
        ]}
      />
      <ReviewSummary gymName="渋谷表参道店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          BEYOND 渋谷表参道店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月5日</p>
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            BEYOND の公式サイトはこちら
          </a>
        </p>

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
          <p className="mt-2 text-xs text-gray-500">
            ※ 2026年11月5日に
            <a href={OFFICIAL_STORE_URL} target="_blank" rel="nofollow noopener" className="underline">BEYOND公式サイトの渋谷表参道店ページ</a>
            で確認した内容です。最新情報は公式サイトでご確認ください。
          </p>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              BEYOND 渋谷表参道店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/BEYOND+渋谷表参道店"
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
            BEYOND渋谷表参道店は、公式サイトの店舗ページで「渋谷駅B5出口から徒歩5分／表参道駅から徒歩8分」と案内されている店舗です（所在地は渋谷区渋谷2丁目）。当サイトでは店舗の口コミ本文は掲載せず、下の「Googleマップの掲載データ」で、Googleマップ上で確認できる評価・件数のみをご紹介しています。
            BEYOND公式サイトでは、旧「渋谷宮益坂店」のURL（/gym/gym-miyamasuzaka/）が渋谷表参道店のページへ転送されています（2026年11月5日確認）。
          </p>
        </section>
                
        <StorePrice brandSlug="beyond" brandName="BEYOND" />
<StoreGmapBox k="beyond/shibuya-omotesando" storeName="BEYOND 渋谷表参道店" brandSlug="beyond" brandName="BEYOND" mapsSearchUrl="https://www.google.com/maps/search/BEYOND+渋谷表参道店" />


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
              BEYONDの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/beyond/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                BEYONDの総合レビューを見る
              </Link>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                公式サイトへ
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
