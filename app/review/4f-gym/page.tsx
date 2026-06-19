import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "4Fのパーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "4Fのパーソナルジムの口コミ・評判を徹底解説。ビル4階の隠れ家的ジムの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "4Fのパーソナルジム" },
  { label: "タイプ", value: "隠れ家型パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜100,000円程度" },
  { label: "エリア", value: "東京都内" },
  { label: "特徴", value: "隠れ家的空間 / マンツーマン / プライベート感重視 / アットホーム" },
];

const strengths = [
  {
    title: "隠れ家的なプライベート空間",
    desc: "ビル4階に位置する隠れ家的な雰囲気のジム。人目を気にせず、リラックスした環境でトレーニングに集中できます。アットホームな空間が通い続けやすさにつながっています。",
  },
  {
    title: "きめ細やかなマンツーマン指導",
    desc: "少人数運営だからこそ実現できる、一人ひとりへのきめ細やかな対応。トレーナーとの信頼関係を築きながら、長期的なボディメイクを進められます。",
  },
  {
    title: "利用者に寄り添ったプログラム設計",
    desc: "大手チェーンにはない柔軟なプログラム設計が可能。ライフスタイルや体調に合わせてメニューを臨機応変に調整してくれます。",
  },
];

const merits = [
  {
    title: "アットホームな雰囲気で続けやすい",
    desc: "大型ジムの緊張感が苦手な方にも好評。トレーナーとの距離が近く、気軽に相談できる環境です。",
  },
  {
    title: "プライベート感が高い",
    desc: "隠れ家的な立地のため、ジムに通っていることを周囲に知られたくない方にも配慮された環境です。",
  },
  {
    title: "柔軟なスケジュール対応",
    desc: "小規模運営のメリットを活かし、予約の融通が利きやすい場合があります。忙しい方にも対応しやすい体制です。",
  },
];

const demerits = [
  {
    title: "店舗数が非常に限られる",
    desc: "隠れ家型のため店舗数は少なく、通える方が限定されます。立地を事前に確認しましょう。",
  },
  {
    title: "大手のような設備の充実度は期待しにくい",
    desc: "コンパクトな空間のため、大型マシンの種類は限られる場合があります。",
  },
  {
    title: "口コミ情報が少ない",
    desc: "小規模ジムのため、ネット上の口コミや評判が少なく、事前の情報収集がしにくいことがあります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額35,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額60,000円〜", note: "週2回ペース" },
  { name: "集中コース", duration: "60分/回", price: "総額100,000円〜", note: "回数・期間要相談" },
];

const reviewSummary = "4Fのパーソナルジムの口コミでは「隠れ家的な雰囲気が好き」「トレーナーが親切でアットホーム」という声が見られます。一方で「店舗が限られている」「情報が少なくて事前に判断しにくい」といった指摘もあります。プライベート感を重視する方に向いています。";

const faqItems = [
  { q: "4Fのパーソナルジムの入会金はいくらですか？", a: "入会金は20,000円〜40,000円程度です。詳細はカウンセリング時にご確認ください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心して始められます。" },
  { q: "見学や体験はできますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトまたは電話で予約可能です。" },
  { q: "駐車場はありますか？", a: "店舗によって異なります。事前にお問い合わせください。近隣にコインパーキングがある場合が多いです。" },
  { q: "食事指導はありますか？", a: "プランにより食事アドバイスが含まれています。詳細はカウンセリング時にご確認ください。" },
  { q: "退会に違約金はかかりますか？", a: "プランにより異なります。入会時に退会条件をご確認ください。" },
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
  { name: "Carat", href: "/review/carat/" },
  { name: "LEADING", href: "/review/leading/" },
];

export default function FourFGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "4Fのパーソナルジム" }]} />
      <ReviewSummary gymName="4Fのパーソナルジム" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">4Fのパーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">4Fのパーソナルジムは、ビル4階に位置する隠れ家的なパーソナルジムです。プライベート感の高い空間で、アットホームな雰囲気のなか<span className="font-bold bg-yellow-100 px-0.5">マンツーマン</span>トレーニングが受けられます。本記事では、4Fのパーソナルジムの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの3つの強み</h2>
          <div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムのよくある質問</h2>
          <div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">4Fのパーソナルジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、隠れ家ジムの雰囲気を体験してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div>
        </section>
      </div>
    </>
  );
}
