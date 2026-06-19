import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "24/7ワークアウト 新宿店の口コミ・評判",
  description:
    "24/7ワークアウト 新宿店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "24/7ワークアウト 新宿店" },
  { label: "住所", value: "東京都新宿区西新宿（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "JR新宿駅 徒歩約5分" },
  { label: "営業時間", value: "7:00〜24:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "24/7ワークアウト新宿店の料金はいくらですか？", a: "2ヶ月コース（全16回）で月額33,000円〜の月額制プランです。入会金は無料です。最新の料金は公式サイトでご確認ください。" },
  { q: "24/7ワークアウト新宿店の営業時間は？", a: "7:00〜24:00です。最新情報は公式サイトでご確認ください。" },
  { q: "24/7ワークアウト新宿店のダイエットメソッドの特徴は？", a: "3食しっかり食べながら痩せるメソッドが特徴です。極端な糖質制限ではなく、栄養バランスを考えた食事指導を行います。" },
  { q: "24/7ワークアウト新宿店へのアクセスは？", a: "JR新宿駅から徒歩約5分です。西新宿エリアに位置しており、複数路線からアクセス可能です。" },
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
  { name: "24/7ワークアウト 渋谷店", href: "/review/247workout/shibuya/" },
  { name: "24/7ワークアウト 池袋店", href: "/review/247workout/ikebukuro/" },
  { name: "24/7ワークアウト 横浜店", href: "/review/247workout/yokohama/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "24/7ワークアウト", href: "/review/247workout/" },
          { name: "新宿店" },
        ]}
      />
      <ReviewSummary gymName="新宿店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          24/7ワークアウト 新宿店の口コミ・評判
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
          <Link href="/review/247workout/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">総合レビューを見る</Link>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              24/7ワークアウト 新宿店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/24/7ワークアウト+新宿店"
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
            24/7ワークアウト新宿店は、新宿駅から徒歩圏内に位置する主要店舗です。3食しっかり食べるダイエットメソッドが特徴で、極端な食事制限を避けたい方に支持されています。完全個室のマンツーマン指導で、深夜24時まで営業しているため、夜遅くまで仕事がある方にも通いやすい環境です。トレーナーの質とコストパフォーマンスの良さが高評価を得ています。
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
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/24/7%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A2%E3%82%A6%E3%83%88%20%E6%96%B0%E5%AE%BF%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「産後太りの解消で通い始めました。新宿で子育てしながらでも通える時間帯の柔軟さがありがたいです。食事もしっかり食べるスタイルなので授乳中でも無理なくダイエットできました。」</p>
              <p className="text-xs text-gray-400">-- 利用歴5ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「朝7時から開いているので新宿での仕事前に通っています。早朝は空いていることが多く、予約も取りやすいです。手ぶらで行けるので荷物の心配がないのも助かります。」</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「3食しっかり食べていいというのが衝撃でした。新宿で他のジムも検討しましたが、食事制限が厳しくないのにしっかり痩せられるのはここだけでした。2ヶ月で7kg減です。」</p>
              <p className="text-xs text-gray-400">-- 利用歴8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「仕事が不規則なので深夜まで営業しているのが決め手。新宿の夜遅い時間でもトレーナーさんがしっかり指導してくれます。ウェアもタオルも貸してもらえるので身軽に通えます。」</p>
              <p className="text-xs text-gray-400">-- 入会1ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「完全個室なので周りの目が気にならず、集中してトレーニングできます。新宿店のトレーナーさんは褒め上手で、モチベーションを保ちやすいです。全額返金保証があるのも安心材料でした。」</p>
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
              24/7ワークアウトの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/247workout/"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                24/7ワークアウトの総合レビューを見る
              </Link>
              <a
                href="https://247-workout.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                24/7ワークアウト公式サイト
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
