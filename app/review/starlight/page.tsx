import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "スターライトフィットネスの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "スターライトフィットネスの口コミ・評判を徹底解説。24時間営業のパーソナルジムの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "スターライトフィットネス" },
  { label: "タイプ", value: "24時間営業パーソナルジム" },
  { label: "料金帯", value: "月額20,000円〜60,000円程度" },
  { label: "エリア", value: "首都圏を中心に展開" },
  { label: "特徴", value: "24時間営業 / 深夜早朝対応 / セキュリティ完備 / 柔軟な予約" },
];

const strengths = [
  {
    title: "24時間営業でいつでもトレーニング可能",
    desc: "早朝5時でも深夜23時でも、自分のライフスタイルに合わせてトレーニングが可能。シフト勤務や不規則な生活リズムの方でも無理なく通えます。",
  },
  {
    title: "セキュリティ完備で深夜でも安心",
    desc: "24時間営業に対応したセキュリティシステムを完備。カードキーによる入退室管理、防犯カメラの設置など、深夜帯でも安全にトレーニングできる環境が整っています。",
  },
  {
    title: "予約の柔軟性が高い",
    desc: "営業時間が長いぶん予約枠も多く、希望の時間帯でトレーニングを受けやすい環境です。急なスケジュール変更にも柔軟に対応してもらえます。",
  },
];

const merits = [
  {
    title: "生活リズムに合わせて通える",
    desc: "一般的なジムの営業時間外でもトレーニングが可能なため、シフト勤務の方、早朝に運動したい方、仕事が遅くなりがちな方にとって大きなメリットです。",
  },
  {
    title: "混雑を避けてトレーニングできる",
    desc: "深夜や早朝は利用者が少ないため、ゴールデンタイムを避けて快適にトレーニングできます。",
  },
  {
    title: "予約が取りやすい",
    desc: "営業時間が長いため、一般的なジムよりも予約枠が豊富。人気の時間帯を避ければ、希望の日時で予約が取りやすい環境です。",
  },
];

const demerits = [
  {
    title: "深夜帯はトレーナーが限定される場合がある",
    desc: "深夜・早朝のセッションでは対応可能なトレーナーが限られることがあり、希望のトレーナーを指名できない場合があります。",
  },
  {
    title: "深夜のトレーニングは生活リズムに影響する可能性",
    desc: "深夜の激しい運動は睡眠に影響する場合があります。トレーナーと相談の上、適切な時間帯と強度を選びましょう。",
  },
  {
    title: "立地によっては深夜の通勤が不便",
    desc: "深夜帯は公共交通機関が限られるため、車や自転車での通勤が必要になる場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額20,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額38,000円〜", note: "週2回ペース" },
  { name: "通い放題プラン", duration: "60分/回", price: "月額60,000円〜", note: "回数無制限" },
];

const reviewSummary = "スターライトフィットネスの口コミでは「24時間営業が本当に助かる」「夜勤明けにも通える」と、営業時間の柔軟性が高く評価されています。予約の取りやすさやセキュリティの安心感も好評です。一方で「深夜帯はトレーナーの選択肢が少ない」「深夜の立地が不便」という声もあります。";

const faqItems = [
  { q: "本当に24時間いつでもトレーニングできますか？", a: "パーソナルトレーニングは予約制のため、トレーナーの対応可能な時間帯に限られます。詳細は公式サイトでご確認ください。" },
  { q: "深夜のセキュリティは大丈夫ですか？", a: "カードキーによる入退室管理、防犯カメラの設置など、セキュリティ対策が施されています。" },
  { q: "入会金はいくらですか？", a: "入会金は15,000円〜30,000円程度です。キャンペーンで割引になることもあります。" },
  { q: "シャワーは深夜でも使えますか？", a: "はい、シャワー設備は24時間利用可能です。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "女性一人でも深夜に安心して通えますか？", a: "セキュリティ対策は施されていますが、深夜帯の通勤経路の安全性もご自身でご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
];

export default function StarlightReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "スターライトフィットネス" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">スターライトフィットネスの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          スターライトフィットネスは24時間営業を特徴とするパーソナルジムです。早朝から深夜まで、ライフスタイルに合わせた柔軟なトレーニングが可能。本記事では、スターライトフィットネスの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">スターライトフィットネスの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">スターライトフィットネスの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">スターライトフィットネスのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">スターライトフィットネスの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">スターライトフィットネスの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">スターライトフィットネスのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">スターライトフィットネスが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
