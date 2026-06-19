import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "Apple GYM（アップルジム）横浜店の口コミ・評判",
  description:
    "Apple GYM（アップルジム）横浜店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

const AFF_URL = "https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L";
const BANNER_URL = "https://t.felmat.net/fmimg/E45324.T82347J.A132329L";

const basicInfo = [
  { label: "店舗名", value: "Apple GYM（アップルジム）横浜店" },
  { label: "住所", value: "神奈川県横浜市（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "横浜駅 徒歩5分" },
  { label: "営業時間", value: "7:00〜23:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

const faqItems = [
  { q: "Apple GYM横浜店の料金はいくらですか？", a: "月額24,200円〜（月4回）です。入会金は33,000円（税込）ですが、キャンペーン中は無料になる場合があります。最新の料金は公式サイトでご確認ください。" },
  { q: "Apple GYM横浜店の営業時間は？", a: "7:00〜23:00です。最新情報は公式サイトでご確認ください。" },
  { q: "Apple GYM横浜店の特徴は？", a: "海外式ボディメイクメソッドを取り入れた姿勢改善ベースのパーソナルトレーニングが特徴です。完全個室で食事指導付きのプランが用意されています。" },
  { q: "Apple GYM横浜店は神奈川の他の店舗と併用できますか？", a: "プランの詳細については公式サイトでご確認ください。神奈川エリアには横浜店・川崎店などがあります。" },
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
  { name: "Apple GYM 川崎店", href: "/review/apple-gym/kawasaki/" },
  { name: "Apple GYM 新宿店", href: "/review/apple-gym/shinjuku/" },
  { name: "Apple GYM 渋谷店", href: "/review/apple-gym/shibuya/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Apple GYM（アップルジム）", href: "/review/apple-gym/" }, { name: "横浜店" }]} />
      <ReviewSummary gymName="横浜店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Apple GYM（アップルジム）横浜店の口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6"><a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">Apple GYM（アップルジム）の公式サイトはこちら</a></p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div>
        </section>

        <div className="mb-10 text-center"><a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a></div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Apple GYM 横浜店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/Apple+GYM+アップルジム+横浜店" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">Apple GYM横浜店は横浜駅から徒歩5分の好立地にある海外式ボディメイクパーソナルジムです。完全個室で姿勢改善をベースとしたトレーニングが受けられます。月額24,200円〜で全プラン食事指導付き。横浜エリアで手頃な価格のパーソナルジムを探している方に人気の店舗です。</p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/Apple+GYM+アップルジム+横浜店" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed mb-2">「横浜駅から近くて通いやすいです。海外式のボディメイクメソッドが気になって入会しましたが、姿勢から整えるアプローチが自分に合っています。」</p><p className="text-xs text-gray-400">-- 入会3ヶ月のユーザー</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed mb-2">「横浜のパーソナルジムは高いイメージがありましたが、月額24,200円から始められるのは手軽です。食事指導もついていてこの価格はコスパが良いと思います。」</p><p className="text-xs text-gray-400">-- 利用歴4ヶ月のユーザー</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed mb-2">「完全個室なので横浜の繁華街の喧騒を忘れて集中できます。トレーナーさんが姿勢のチェックを毎回してくれるので、変化を実感しやすいです。」</p><p className="text-xs text-gray-400">-- 入会2ヶ月のユーザー</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed mb-2">「朝7時から夜23時まで営業しているので、横浜で仕事をしている自分には通いやすい時間帯です。週末の買い物ついでにも利用しています。」</p><p className="text-xs text-gray-400">-- 利用歴5ヶ月のユーザー</p></div>
          </div>
        </section>

        <section className="mb-10 text-center"><a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow"><img src={BANNER_URL} alt="Apple GYM（アップルジム）" width="300" height="250" className="mx-auto rounded-lg" /></a></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-4">{faqItems.map((item, i) => (<details key={i} className="group bg-gray-50 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors"><span className="pr-4">{item.q}</span><span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span></summary><div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div></details>))}</div>
        </section>

        <section className="mb-10"><div className="bg-teal-50 rounded-lg p-6 text-center space-y-4"><p className="font-bold text-gray-800">Apple GYMの詳しい口コミ・料金情報はこちら</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/review/apple-gym/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">Apple GYMの総合レビューを見る</Link><a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a></div></div></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">関連店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedStores.map((store) => (<Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>))}</div>
        </section>
      </div>
    </>
  );
}
