import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "トリプルMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "トリプルM（Triple M）パーソナルジムの口コミ・評判を徹底解説。ボディメイク×メンタルケアの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "トリプルM（Triple M）" },
  { label: "タイプ", value: "ボディメイク×メンタルケア融合パーソナルジム" },
  { label: "料金帯", value: "月額50,000円〜150,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "メンタルケア融合 / ボディメイク / ストレス管理 / オーダーメイド" },
];

const strengths = [
  {
    title: "ボディメイクとメンタルケアの融合",
    desc: "身体を鍛えるだけでなく、メンタル面のケアも同時に行う独自のアプローチ。ストレス管理やモチベーション維持のサポートにより、心身ともに健康的なボディメイクを実現します。",
  },
  {
    title: "一人ひとりに寄り添うオーダーメイドプログラム",
    desc: "体力レベルや生活環境、メンタルの状態まで考慮したオーダーメイドのプログラムを作成。無理なく続けられるメニューが好評です。",
  },
  {
    title: "トレーナーの質が高い",
    desc: "心理学やカウンセリングの知識を持つトレーナーが在籍。トレーニング中の会話やコミュニケーションも大切にしており、安心感のある指導が受けられます。",
  },
];

const merits = [
  {
    title: "精神面もサポートしてくれる",
    desc: "ダイエットはメンタルが続かないと挫折しがち。トリプルMではメンタル面のケアも行うため、モチベーションを維持しやすく、結果につながりやすいです。",
  },
  {
    title: "ストレスフリーなトレーニング環境",
    desc: "追い込みすぎない適度な運動強度と、リラックスできる環境づくりにこだわっています。運動が苦手な方にも好評です。",
  },
  {
    title: "食事指導が柔軟",
    desc: "厳しい食事制限ではなく、生活スタイルに合わせた無理のない食事アドバイスが受けられます。",
  },
];

const demerits = [
  {
    title: "ハードなトレーニングを求める方には物足りない",
    desc: "メンタルケアを重視するため、追い込みタイプのトレーニングを望む方には物足りない場合があります。",
  },
  {
    title: "知名度がまだ低い",
    desc: "大手と比較すると知名度が低く、口コミや情報が少ないため、入会前の情報収集がしにくい面があります。",
  },
  {
    title: "店舗数が少ない",
    desc: "展開エリアが限られており、通える範囲に店舗がない場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額50,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額90,000円〜", note: "週2回ペース・おすすめ" },
  { name: "短期集中2ヶ月プラン", duration: "60分×16回", price: "総額250,000円〜", note: "食事指導・メンタルサポート付き" },
];

const reviewSummary = "トリプルMの口コミでは「精神面もケアしてくれるので続けやすい」「トレーナーが優しくて安心」という声が特徴的です。ストレスを感じずにトレーニングに取り組める環境が高評価。一方で「もっと追い込んでほしい」「料金が高め」という意見も見られます。メンタル面に不安がある方に特におすすめです。";

const faqItems = [
  { q: "トリプルMの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "メンタルケアとは具体的に何をしますか？", a: "カウンセリング要素を含むヒアリングや、ストレス管理のアドバイス、モチベーション維持のための目標設定サポートなどを行います。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、運動初心者の方も多く通われています。個人の体力レベルに合わせたプログラムを組むため安心です。" },
  { q: "食事指導はありますか？", a: "はい、プランに応じて食事アドバイスが含まれています。厳しい制限ではなく、生活に合わせた提案を行います。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は前月までに申告が必要です。詳細は入会時にご確認ください。" },
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
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function TripleMReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "トリプルM" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          トリプルMの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          トリプルM（Triple M）はボディメイクとメンタルケアを融合させた新しいタイプのパーソナルジムです。心身の健康を同時にサポートするアプローチで、無理なく続けられるトレーニングを提供。本記事では、トリプルMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">トリプルMの基本情報</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">トリプルMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">トリプルMのメリット・デメリット</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">トリプルMの料金</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">トリプルMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">トリプルMのよくある質問</h2>
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

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">トリプルMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、心身のお悩みを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

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
