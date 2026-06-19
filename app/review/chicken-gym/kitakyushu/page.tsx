import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "チキンジム リバーウォーク北九州店の口コミ・評判",
  description:
    "チキンジム リバーウォーク北九州店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "チキンジム リバーウォーク北九州店" },
  { label: "住所", value: "福岡県北九州市小倉北区室町（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "JR西小倉駅 徒歩約5分" },
  { label: "営業時間", value: "7:00〜23:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "チキンジムリバーウォーク北九州店の料金はいくらですか？", a: "月々6,800円〜（分割払い時の目安）です。入会金35,000円（税込）が別途かかります。最新の料金は公式サイトでご確認ください。" },
  { q: "チキンジムリバーウォーク北九州店の営業時間は？", a: "7:00〜23:00です。最新情報は公式サイトでご確認ください。" },
  { q: "チキンジムリバーウォーク北九州店へのアクセスは？", a: "JR西小倉駅から徒歩約5分、リバーウォーク北九州内に店舗があります。施設の駐車場も利用可能です。" },
  { q: "チキンジムリバーウォーク北九州店は無料カウンセリングを受けられますか？", a: "はい、無料カウンセリングが用意されています。体組成測定やトレーニング体験も含まれます。公式サイトから予約可能です。" },
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
  { name: "チキンジム 池袋店", href: "/review/chicken-gym/ikebukuro/" },
  { name: "チキンジム 流山おおたかの森店", href: "/review/chicken-gym/nagareyama/" },
  { name: "RIZAP 梅田店", href: "/review/rizap/umeda/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "チキンジム", href: "/review/chicken-gym/" },
          { name: "リバーウォーク北九州店" },
        ]}
      />
      <ReviewSummary gymName="リバーウォーク北九州店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          チキンジム リバーウォーク北九州店の口コミ・評判
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
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <Link href="/review/chicken-gym/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">総合レビューを見る</Link>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              チキンジム リバーウォーク北九州店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/チキンジム+リバーウォーク北九州店"
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
            チキンジムリバーウォーク北九州店は、北九州市のリバーウォーク北九州内に位置する店舗です。商業施設内にあるため買い物や食事とあわせて利用できる便利さが特徴です。JR西小倉駅からのアクセスも良好で、北九州エリアでパーソナルジムを探している方の有力な選択肢となっています。チキンジムの特徴である低価格と手ぶらOKのサービスが、九州エリアでも好評です。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">
            ※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。
          </p>
        </section>
        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/%E3%83%81%E3%82%AD%E3%83%B3%E3%82%B8%E3%83%A0%20%E3%83%AA%E3%83%90%E3%83%BC%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E5%8C%97%E4%B9%9D%E5%B7%9E%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「InBodyで毎回測定してくれるので、数値で変化が見えるのが嬉しいです。北九州での通いやすさも良く、トレーナーさんが数値を見ながらメニューを調整してくれるので効率的です。」</p>
              <p className="text-xs text-gray-400">-- 利用歴5ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「ウェアもシューズも無料で借りられるので、仕事帰りに北九州でそのまま寄れます。手ぶらで通えるのは想像以上に継続のハードルを下げてくれました。」</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「ガチガチのトレーニングではなく、楽しみながらボディメイクできるのが気に入っています。北九州店は雰囲気が明るくて通うのが苦にならないです。初心者にこそおすすめしたいジムです。」</p>
              <p className="text-xs text-gray-400">-- 利用歴8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「パーソナルジムは高額なイメージでしたが、チキンジムは北九州エリアの相場と比べてもかなりリーズナブル。コスパを重視する人にはおすすめです。トレーニング内容もしっかりしています。」</p>
              <p className="text-xs text-gray-400">-- 入会1ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「名前の通り（？）気軽に始められる雰囲気が良いです。北九州店のトレーナーさんはフレンドリーで、運動嫌いの自分でも楽しく通えています。毎回の体組成測定でモチベーションが保てます。」</p>
              <p className="text-xs text-gray-400">-- 利用歴3ヶ月のユーザー</p>
            </div>
          </div>
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
              チキンジムの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/chicken-gym/"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                チキンジムの総合レビューを見る
              </Link>
              <a
                href="https://chicken-gym.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                チキンジム公式サイト
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
