import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "more fitの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "more fit（モアフィット）パーソナルジムの口コミ・評判を徹底解説。初心者歓迎の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "more fit（モアフィット）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額25,000円〜70,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "初心者歓迎 / マンツーマン指導 / 丁寧なカウンセリング / 食事指導付き" },
];

const strengths = [
  {
    title: "初心者に寄り添った指導スタイル",
    desc: "運動未経験や筋トレ初心者でも安心して始められるよう、フォームの基礎から丁寧に指導。トレーナーが一人ひとりのレベルに合わせてメニューを調整してくれます。",
  },
  {
    title: "無理のない食事アドバイス",
    desc: "極端な食事制限ではなく、日常生活に取り入れやすい食事改善を提案。ストレスなく続けられる食事管理で、リバウンドしにくい体づくりをサポートします。",
  },
  {
    title: "通いやすい料金設定",
    desc: "パーソナルジムとしてはリーズナブルな価格帯で、月額制プランも用意。初めてパーソナルジムに通う方でも始めやすい料金設計になっています。",
  },
];

const merits = [
  {
    title: "初心者でも安心のサポート体制",
    desc: "運動経験がなくても基礎から丁寧に教えてもらえるため、ジム通いが初めての方にも好評です。無理なく段階的にレベルアップできるプログラムが魅力です。",
  },
  {
    title: "リーズナブルな料金設定",
    desc: "他のパーソナルジムと比較して手頃な価格帯のため、コストパフォーマンスを重視する方に適しています。",
  },
  {
    title: "食事指導がプランに含まれている",
    desc: "追加料金なしで食事アドバイスが受けられるため、トレーニングと食事の両面からボディメイクに取り組めます。",
  },
];

const demerits = [
  {
    title: "店舗数が少ない",
    desc: "大手チェーンと比較すると店舗数が限られており、通える範囲に店舗がない場合があります。事前にアクセスを確認しましょう。",
  },
  {
    title: "上級者には物足りない可能性",
    desc: "初心者向けの丁寧な指導がメインのため、すでにトレーニング経験が豊富な方には強度が物足りなく感じる場合があります。",
  },
  {
    title: "予約枠が限られる時間帯がある",
    desc: "夕方以降の人気時間帯は予約が集中しやすく、希望通りの時間に予約が取れないことがあります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額25,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額45,000円〜", note: "週2回ペース・人気プラン" },
  { name: "集中コース（16回）", duration: "50分/回", price: "総額120,000円〜", note: "2ヶ月短期集中" },
];

const reviewSummary = "more fitの口コミでは「初心者でも分かりやすい指導」「料金が良心的」という声が多く見られます。トレーナーの人柄やコミュニケーション力に関する高評価も目立ちます。一方で「店舗が少ない」「上級者向けメニューが少ない」といった指摘もあります。全体的に初心者からの満足度が高い傾向です。";

const faqItems = [
  { q: "more fitの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーン期間中は無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "運動未経験でも大丈夫ですか？", a: "はい、初心者歓迎のジムです。運動経験がなくてもトレーナーが基礎から丁寧に指導してくれます。" },
  { q: "食事制限は厳しいですか？", a: "極端な食事制限は行わず、日常に取り入れやすい食事改善を提案しています。無理のない範囲で指導してもらえます。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリングや体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "プランによって異なります。詳細は入会時に確認することをおすすめします。" },
  { q: "ウェアやタオルのレンタルはありますか？", a: "店舗によりレンタルサービスが異なります。手ぶらで通えるプランがある場合もあるため、公式サイトでご確認ください。" },
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

const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];

export default function MoreFitReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "more fit" }]} />
      <ReviewSummary gymName="more fit" />
      <GymCta slug="more-fit" name="more fit" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          more fitの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          more fit（モアフィット）は初心者歓迎を掲げるパーソナルトレーニングジムです。運動未経験の方でも安心して通えるよう、丁寧な指導と無理のない食事アドバイスを特徴としています。本記事では、more fitの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">more fitの基本情報</h2>
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

        {/* 3つの強み */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">more fitの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">more fitのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>{m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>{d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">more fitの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">料金</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.duration}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">more fitの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="more-fit" name="more fit" />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">more fitのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">more fitが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        {/* 関連ジム */}
        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
