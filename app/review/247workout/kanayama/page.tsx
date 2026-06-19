import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "24/7ワークアウト 金山店の口コミ・評判",
  description:
    "24/7ワークアウト 金山店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "24/7ワークアウト 金山店" },
  { label: "住所", value: "愛知県名古屋市中区金山（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "金山駅 徒歩約5分" },
  { label: "営業時間", value: "7:00〜24:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

const faqItems = [
  { q: "24/7ワークアウト金山店の料金はいくらですか？", a: "2ヶ月コース（全16回）で月額33,000円〜の月額制プランです。入会金は無料です。最新の料金は公式サイトでご確認ください。" },
  { q: "24/7ワークアウト金山店は完全個室ですか？", a: "はい、完全個室のマンツーマン指導です。他の利用者の目を気にせずトレーニングに集中できます。" },
  { q: "24/7ワークアウト金山店の食事指導の特徴は？", a: "3食しっかり食べるダイエットメソッドが特徴です。極端な糖質制限ではなく、栄養バランスを考えた食事指導を行います。" },
  { q: "24/7ワークアウト金山店は夜遅くまで営業していますか？", a: "深夜24時まで営業しています。仕事帰りの遅い時間でも通いやすい環境です。" },
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
  { name: "24/7ワークアウト 名古屋店", href: "/review/247workout/nagoya/" },
  { name: "24/7ワークアウト 名駅店", href: "/review/247workout/meieki/" },
  { name: "24/7ワークアウト 京都店", href: "/review/247workout/kyoto/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "24/7ワークアウト", href: "/review/247workout/" },
          { name: "金山店" },
        ]}
      />
      <ReviewSummary gymName="金山店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">24/7ワークアウト 金山店の口コミ・評判</h1>
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
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <Link href="/review/247workout/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">総合レビューを見る</Link>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">24/7ワークアウト 金山店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/24/7ワークアウト+金山店" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">
            24/7ワークアウト金山店は、金山駅から徒歩圏内に位置する名古屋市の店舗です。JR・名鉄・地下鉄が乗り入れる金山駅は交通の要所で、名古屋市内各方面からのアクセスに優れています。完全個室でのマンツーマン指導で、仕事帰りに気軽に立ち寄れると評判です。3食しっかり食べるダイエットメソッドで名古屋めしを楽しみながらも健康的に体重管理でき、深夜24時まで営業しているため柔軟に通えます。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p>
        </section>
        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/24/7%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A2%E3%82%A6%E3%83%88%20%E9%87%91%E5%B1%B1%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「3食しっかり食べていいというのが衝撃でした。金山で他のジムも検討しましたが、食事制限が厳しくないのにしっかり痩せられるのはここだけでした。2ヶ月で7kg減です。」</p>
              <p className="text-xs text-gray-400">-- 入会3ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「仕事が不規則なので深夜まで営業しているのが決め手。金山の夜遅い時間でもトレーナーさんがしっかり指導してくれます。ウェアもタオルも貸してもらえるので身軽に通えます。」</p>
              <p className="text-xs text-gray-400">-- 利用歴6ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「完全個室なので周りの目が気にならず、集中してトレーニングできます。金山店のトレーナーさんは褒め上手で、モチベーションを保ちやすいです。全額返金保証があるのも安心材料でした。」</p>
              <p className="text-xs text-gray-400">-- 利用歴4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「産後太りの解消で通い始めました。金山で子育てしながらでも通える時間帯の柔軟さがありがたいです。食事もしっかり食べるスタイルなので授乳中でも無理なくダイエットできました。」</p>
              <p className="text-xs text-gray-400">-- 入会2ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「朝7時から開いているので金山での仕事前に通っています。早朝は空いていることが多く、予約も取りやすいです。手ぶらで行けるので荷物の心配がないのも助かります。」</p>
              <p className="text-xs text-gray-400">-- 利用歴1年のユーザー</p>
            </div>
          </div>
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
            <p className="font-bold text-gray-800">24/7ワークアウトの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/247workout/" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">24/7ワークアウトの総合レビューを見る</Link>
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
