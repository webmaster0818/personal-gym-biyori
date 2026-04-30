import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Bellphaの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Bellpha（ベルファ）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Bellpha（ベルファ）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額30,000円〜120,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "マンツーマン / ボディメイク / 食事指導 / カスタマイズプログラム" },
];

const strengths = [
  {
    title: "美しいボディラインを重視した指導",
    desc: "単純な体重減少ではなく、美しいボディラインの形成を重視したトレーニングプログラムを提供。女性のボディメイクにも定評があります。",
  },
  {
    title: "経験豊富なトレーナーによる指導",
    desc: "ボディメイクの実績が豊富なトレーナーが在籍。利用者の目標に合わせた的確なアドバイスと指導で、効率的な変化を実現します。",
  },
  {
    title: "食事指導で内側からもサポート",
    desc: "トレーニングに合わせた食事指導を提供。栄養バランスを考慮した食事法で、健康的なボディメイクをサポートします。",
  },
];

const merits = [
  {
    title: "ボディラインの変化を実感しやすい",
    desc: "見た目の美しさを重視したプログラムにより、体重以上に見た目の変化を実感しやすいと評判です。",
  },
  {
    title: "マンツーマンで丁寧な指導",
    desc: "一人ひとりに合わせた丁寧な指導で、運動初心者でも安心してトレーニングを進められます。",
  },
  {
    title: "モチベーション管理もサポート",
    desc: "トレーナーがメンタル面もサポートし、途中で挫折しないように寄り添った指導を行います。",
  },
];

const demerits = [
  {
    title: "店舗数が限られている",
    desc: "大手チェーンと比較すると店舗数が少なく、通える方が限定される場合があります。",
  },
  {
    title: "知名度がまだ低い",
    desc: "大手と比較すると知名度が低いため、口コミ情報が少なく事前の情報収集がしにくいことがあります。",
  },
  {
    title: "料金は標準的なパーソナルジム水準",
    desc: "セルフ型ジムと比較すると料金は高めですが、パーソナルジムとしては標準的な価格帯です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額35,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額60,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中コース（2ヶ月）", duration: "50分/回", price: "総額120,000円〜", note: "16回" },
];

const reviewSummary = "Bellphaの口コミでは「体のラインが変わった」「トレーナーが丁寧で続けやすい」「食事指導も参考になる」という声が見られます。一方で「もう少し店舗数が多ければ」「口コミが少なくて不安だった」といった指摘もあります。";

const faqItems = [
  { q: "Bellphaの入会金はいくらですか？", a: "入会金は20,000円〜40,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "女性でも通えますか？", a: "はい、男女ともに利用可能です。女性のボディメイクにも対応しています。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心して始められます。" },
  { q: "食事指導は厳しいですか？", a: "極端な制限ではなく、継続しやすい食事改善を提案してくれます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "退会に違約金はかかりますか？", a: "プランにより異なります。詳細は入会時にご確認ください。" },
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
  { name: "OUTLINE", href: "/review/outline/" },
  { name: "UNDEUX SUPERBODY", href: "/review/undeux/" },
  { name: "PEACH GYM", href: "/review/peach-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function BellphaReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Bellpha" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Bellphaの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">Bellpha（ベルファ）は美しいボディラインの形成を重視したパーソナルトレーニングジムです。経験豊富なトレーナーによるマンツーマン指導と食事サポートで、見た目の変化を実感できるボディメイクを提供しています。本記事では、Bellphaの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Bellphaの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Bellphaの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Bellphaのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Bellphaの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Bellphaの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Bellphaのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Bellphaが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
