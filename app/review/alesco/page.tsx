import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Alescoの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Alesco（アレスコ）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Alesco（アレスコ）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額40,000円〜200,000円程度" },
  { label: "エリア", value: "名古屋を中心に展開" },
  { label: "特徴", value: "完全個室 / マンツーマン / リバウンド保証 / 食事指導付き" },
];

const strengths = [
  {
    title: "リバウンド保証つきの安心感",
    desc: "コース終了後にリバウンドした場合、無料でアフターサポートが受けられるリバウンド保証を用意。ダイエット後の不安を解消する手厚いサポート体制です。",
  },
  {
    title: "完全個室でのプライベート空間",
    desc: "トレーニングルームは完全個室。周囲の目を気にせず、自分のペースでトレーニングに集中できます。",
  },
  {
    title: "医学的根拠に基づいた食事指導",
    desc: "単なるカロリー制限ではなく、医学的根拠に基づいた食事指導を提供。健康的に痩せることを重視したアプローチです。",
  },
];

const merits = [
  {
    title: "リバウンド保証で安心",
    desc: "コース終了後のリバウンドが心配な方にとって、保証があることは大きな安心材料です。長期的な体型維持をサポートしてくれます。",
  },
  {
    title: "完全個室で集中できる",
    desc: "他の利用者と顔を合わせることがなく、初心者でも恥ずかしさを感じずにトレーニングに取り組めます。",
  },
  {
    title: "名古屋エリアで通いやすい",
    desc: "名古屋エリアに特化した展開で、地元の方にとって通いやすい立地に店舗があります。",
  },
];

const demerits = [
  {
    title: "展開エリアが名古屋中心",
    desc: "名古屋を中心とした展開のため、他の地域からは通えません。全国展開を希望する方には不向きです。",
  },
  {
    title: "コース料金はまとまった金額が必要",
    desc: "コース制のため、初期にまとまった費用が必要です。分割払いの可否は事前に確認しましょう。",
  },
  {
    title: "口コミ情報がまだ少ない",
    desc: "地域密着型のため、ネット上の口コミ情報が大手と比べて少なく、判断材料が限られることがあります。",
  },
];

const pricingPlans = [
  { name: "2ヶ月コース", duration: "60分/回", price: "総額198,000円〜", note: "16回・食事指導込み" },
  { name: "3ヶ月コース", duration: "60分/回", price: "総額270,000円〜", note: "24回・じっくりプラン" },
  { name: "メンテナンスプラン", duration: "60分/回", price: "月額20,000円〜", note: "月2回・卒業後用" },
];

const reviewSummary = "Alescoの口コミでは「リバウンド保証が安心」「完全個室で集中できる」「食事指導が丁寧」という声が見られます。名古屋エリアでパーソナルジムを探している方に好評です。一方で「店舗が名古屋限定」「もう少し料金が安ければ」といった指摘もあります。";

const faqItems = [
  { q: "Alescoの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "リバウンド保証の条件は？", a: "コースを修了した方が対象です。詳細な条件はカウンセリング時にご確認ください。" },
  { q: "名古屋以外に店舗はありますか？", a: "現在は名古屋エリアを中心に展開しています。最新の店舗情報は公式サイトでご確認ください。" },
  { q: "運動初心者でも大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心してトレーニングを始められます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "分割払いは可能ですか？", a: "クレジットカードの分割払いに対応している場合があります。詳細はカウンセリング時にご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "LEADING", href: "/review/leading/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function AlescoReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Alesco" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Alescoの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">Alesco（アレスコ）は名古屋を中心に展開するパーソナルトレーニングジムです。リバウンド保証付きのコースと<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>での<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>が特徴。医学的根拠に基づいた<span className="font-bold bg-yellow-100 px-0.5">食事指導</span>で健康的なダイエットを目指します。本記事では、Alescoの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Alescoの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Alescoの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Alescoのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Alescoの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Alescoの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Alescoのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Alescoが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
