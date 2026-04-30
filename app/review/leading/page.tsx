import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "LEADINGの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "LEADING（リーディング）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "LEADING（リーディング）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額35,000円〜150,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "マンツーマン / 結果重視 / 食事管理 / モチベーションサポート" },
];

const strengths = [
  {
    title: "結果にこだわった指導方針",
    desc: "「結果を出す」ことに徹底的にこだわった指導方針。トレーニングだけでなく、食事・生活習慣・メンタルケアまでトータルでアプローチし、確実な成果を目指します。",
  },
  {
    title: "モチベーション管理の徹底",
    desc: "トレーニングの継続には モチベーション維持が不可欠。LEADINGでは定期的なカウンセリングやフィードバックで、途中で挫折しないためのメンタルサポートも充実しています。",
  },
  {
    title: "科学的なアプローチで効率的に",
    desc: "最新のトレーニング理論と栄養学に基づいたプログラム設計。感覚的な指導ではなく、科学的根拠のあるメソッドで効率的に結果を出します。",
  },
];

const merits = [
  {
    title: "確実に結果を出したい人に最適",
    desc: "結果重視の方針のため、「今度こそ変わりたい」という強い意志を持った方に特に適しています。トレーナーが目標達成まで伴走してくれます。",
  },
  {
    title: "食事管理が充実",
    desc: "日々の食事を報告・アドバイスする仕組みが整っており、トレーニングと食事の両輪でボディメイクを進められます。",
  },
  {
    title: "挫折しにくいサポート体制",
    desc: "メンタル面のサポートも重視しているため、過去にダイエットに失敗した経験がある方でも続けやすい環境です。",
  },
];

const demerits = [
  {
    title: "ストイックな面がある",
    desc: "結果重視のため、ゆるく通いたい方にはやや厳しく感じる可能性があります。",
  },
  {
    title: "店舗展開が限定的",
    desc: "大手チェーンと比較すると店舗数が少なく、通える範囲に店舗がない場合があります。",
  },
  {
    title: "料金は標準〜やや高め",
    desc: "充実したサポート体制の分、料金は安くはありません。予算と目標のバランスを考慮しましょう。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額40,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額72,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中コース（2ヶ月）", duration: "60分/回", price: "総額150,000円〜", note: "16回・結果重視" },
];

const reviewSummary = "LEADINGの口コミでは「本気で変わりたい人におすすめ」「トレーナーの熱意がすごい」「食事管理のおかげで結果が出た」という声が見られます。一方で「結果重視なので少しストイック」「店舗が近くにない」といった指摘もあります。";

const faqItems = [
  { q: "LEADINGの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "運動が苦手でも大丈夫ですか？", a: "はい、一人ひとりのレベルに合わせたプログラムを作成するため、運動が苦手な方でも始められます。" },
  { q: "食事管理はどのように行いますか？", a: "LINEなどで日々の食事を報告し、トレーナーからアドバイスを受けるスタイルです。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "どのくらいで結果が出ますか？", a: "個人差はありますが、2〜3ヶ月で見た目の変化を実感される方が多いです。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "BELION", href: "/review/belion/" },
  { name: "Carat", href: "/review/carat/" },
];

export default function LeadingReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "LEADING" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">LEADINGの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">LEADING（リーディング）は結果にこだわった指導方針が特徴のパーソナルジムです。トレーニング・食事管理・メンタルサポートのトータルアプローチで、確実な成果を目指します。本記事では、LEADINGの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LEADINGの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LEADINGの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">LEADINGのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LEADINGの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LEADINGの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LEADINGのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">LEADINGが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたの目標を相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
