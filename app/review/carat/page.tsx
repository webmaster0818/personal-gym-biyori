import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "Caratの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Carat（カラット）パーソナルジムの口コミ・評判を徹底解説。都内中心のパーソナルトレーニングの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Carat（カラット）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額35,000円〜150,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "マンツーマン / オーダーメイドプログラム / 都内アクセス良好 / 食事指導対応" },
];

const strengths = [
  {
    title: "都内好立地でアクセス良好",
    desc: "東京都内の駅近に店舗を展開。通勤・通学の途中に立ち寄りやすい立地で、継続しやすい環境を提供しています。",
  },
  {
    title: "完全オーダーメイドのトレーニング",
    desc: "一人ひとりの体型・目標・運動経験に合わせた完全オーダーメイドのプログラムを設計。効率的にボディメイクを進められます。",
  },
  {
    title: "質の高いトレーナー陣",
    desc: "厳選されたトレーナーが在籍し、専門的な知識と経験に基づいた指導を提供。利用者のモチベーション維持にも配慮しています。",
  },
];

const merits = [
  {
    title: "駅近で通いやすい",
    desc: "都内の主要駅近くに位置しているため、仕事帰りや休日でも気軽に通えます。継続の大きなポイントになるアクセスの良さです。",
  },
  {
    title: "個々のペースに合わせた指導",
    desc: "無理のないペースでトレーニングを進められるため、運動が苦手な方や久しぶりに体を動かす方にも安心です。",
  },
  {
    title: "食事面のサポートも充実",
    desc: "トレーニングと並行して食事指導も受けられるため、トータルでのボディメイクが可能です。",
  },
];

const demerits = [
  {
    title: "店舗が都内に限定",
    desc: "東京都内中心の展開のため、都外にお住まいの方は通いにくい場合があります。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "大手チェーンと比較すると知名度が低く、口コミ情報が限られています。",
  },
  {
    title: "料金は標準的〜やや高め",
    desc: "マンツーマン指導のため、セルフ型ジムと比較すると料金は高めです。ただし品質を考えると妥当な水準です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額38,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額68,000円〜", note: "週2回ペース・人気" },
  { name: "集中コース（2ヶ月）", duration: "60分/回", price: "総額150,000円〜", note: "16回" },
];

const reviewSummary = "Caratの口コミでは「駅近で通いやすい」「トレーナーが親切で続けやすい」「オーダーメイドのプログラムが良い」という声が見られます。一方で「もう少し知名度があれば安心」「店舗が都内のみ」といった指摘もあります。";

const faqItems = [
  { q: "Caratの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心して始められます。" },
  { q: "食事指導はありますか？", a: "プランにより食事指導が含まれています。LINEでの相談対応もあります。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "退会に違約金はかかりますか？", a: "月額制の場合、基本的に違約金はありません。コース制の場合は入会時にご確認ください。" },
  { q: "ウェアのレンタルはありますか？", a: "ウェア・タオルのレンタルサービスがあります。手ぶらで通えます。" },
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
  { name: "BELION", href: "/review/belion/" },
  { name: "LEADING", href: "/review/leading/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function CaratReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Carat" }]} />
      <ReviewSummary gymName="Carat" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Caratの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">Carat（カラット）は東京都内を中心に展開するパーソナルトレーニングジムです。駅近のアクセス良好な立地と、完全オーダーメイドのプログラムで効率的なボディメイクを提供しています。本記事では、Caratの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Caratの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Caratの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Caratのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Caratの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Caratの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Caratのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Caratが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
