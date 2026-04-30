import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ASmakeの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ASmake（アズメイク）パーソナルジムの口コミ・評判を徹底解説。姿勢改善×ボディメイクの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ASmake（アズメイク）" },
  { label: "タイプ", value: "姿勢改善×ボディメイク特化パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜100,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "姿勢改善×ボディメイク / 根本原因へのアプローチ / マンツーマン / 食事指導付き" },
];

const strengths = [
  {
    title: "姿勢改善とボディメイクの同時実現",
    desc: "体の歪みや姿勢の問題を根本から改善しながらボディメイクを行う独自のアプローチ。見た目の変化だけでなく、体の不調改善にもつながります。",
  },
  {
    title: "根本原因にアプローチする指導法",
    desc: "太りやすい原因や体の不調の根本を分析し、そこにアプローチするプログラムを設計。一時的な変化ではなく、長期的な体質改善を目指します。",
  },
  {
    title: "食事指導で体の内側から変える",
    desc: "栄養学に基づいた食事指導で、体の内側からも変化を促します。無理な食事制限ではなく、体質に合った食事法を提案してくれます。",
  },
];

const merits = [
  {
    title: "姿勢が整うことで見た目が大きく変わる",
    desc: "姿勢改善により、体重が変わらなくてもスタイルが良く見えるようになります。猫背や反り腰など姿勢の悩みも同時に解決できます。",
  },
  {
    title: "体の不調改善にも効果的",
    desc: "肩こり・腰痛・冷え性など、姿勢に起因する体の不調が改善されたという声が多く寄せられています。",
  },
  {
    title: "リバウンドしにくい体づくり",
    desc: "根本原因へのアプローチにより、一時的なダイエットではなく、太りにくい体質への改善を目指します。",
  },
];

const demerits = [
  {
    title: "即効性を求める方には不向き",
    desc: "姿勢改善には時間がかかるため、短期間での劇的な体重減少を求める方には期待と異なる場合があります。",
  },
  {
    title: "店舗が限られている",
    desc: "特化型ジムのため店舗数が少なく、通える範囲に店舗がない場合があります。",
  },
  {
    title: "ハードなトレーニングが少ない場合も",
    desc: "姿勢改善を重視するため、ガッツリ追い込むトレーニングを求める方には物足りない場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額33,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額60,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中コース（3ヶ月）", duration: "60分/回", price: "総額200,000円〜", note: "24回・体質改善" },
];

const reviewSummary = "ASmakeの口コミでは「姿勢が良くなって周りから褒められた」「肩こりが改善した」「体重よりも見た目の変化が大きい」という声が多く見られます。一方で「もう少し筋トレ要素も欲しい」「店舗が少ない」といった指摘もあります。";

const faqItems = [
  { q: "ASmakeの入会金はいくらですか？", a: "入会金は30,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "姿勢改善だけでも通えますか？", a: "はい、ダイエット目的でなくても姿勢改善や体の不調改善を目的として通うことができます。" },
  { q: "どのくらいで効果を実感できますか？", a: "姿勢の変化は1〜2ヶ月程度、体型の変化は3ヶ月程度で実感される方が多いです。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、姿勢改善から始めるため、運動が苦手な方でも安心して取り組めます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "オンライン指導はありますか？", a: "店舗によりオンライン対応している場合があります。詳細は各店舗にお問い合わせください。" },
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
  { name: "1to1", href: "/review/1to1/" },
  { name: "ASPI", href: "/review/aspi/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function AsmakeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ASmake" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">ASmakeの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">ASmake（アズメイク）は姿勢改善とボディメイクを同時に実現するパーソナルジムです。体の歪みや不調の根本原因にアプローチし、見た目だけでなく体の機能も改善する独自のプログラムが特徴です。本記事では、ASmakeの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASmakeの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASmakeの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ASmakeのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASmakeの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASmakeの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASmakeのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">ASmakeが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、姿勢チェックを受けてみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
