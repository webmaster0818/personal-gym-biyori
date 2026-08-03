import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "4Fのパーソナルジム（用賀）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "4Fのパーソナルジム（世田谷区用賀・用賀駅徒歩2分）の口コミ・評判を徹底解説。QUICK DIET TRIAL 4は月26,620円（税込）から。朝7時〜21時・年中無休、25歳以下割引もある隠れ家ジムの料金・メリット・デメリットを紹介。",
};

const basicInfo = [
  { label: "ジム名", value: "4Fのパーソナルジム" },
  { label: "店舗", value: "用賀店（1店舗）" },
  { label: "住所", value: "東京都世田谷区用賀4丁目1-5 東京コーポレーション第10ビル4階" },
  { label: "アクセス", value: "用賀駅 徒歩2分（※公式サイト内に徒歩5分の表記もあり）" },
  { label: "営業時間", value: "7:00〜21:00・年中無休" },
  { label: "電話番号", value: "03-6411-7730" },
  { label: "料金帯", value: "月額26,620円（QUICK DIET TRIAL 4・税込）〜" },
  { label: "特徴", value: "隠れ家的空間 / マンツーマン / 朝7時から営業 / 25歳以下・モニター20%オフ" },
];

const strengths = [
  {
    title: "用賀駅徒歩2分・朝7時から年中無休で通いやすい",
    desc: "用賀駅から徒歩2分（公式サイト内に徒歩5分の表記もあり）とアクセス良好。営業時間は7:00〜21:00で年中無休のため、出勤前の朝トレから仕事帰りまで、生活リズムに合わせて無理なく通えます。",
  },
  {
    title: "隠れ家的なプライベート空間でのマンツーマン指導",
    desc: "ビル4階に位置する隠れ家的な雰囲気のジム。人目を気にせず、リラックスした環境でトレーニングに集中できます。トレーナーとの信頼関係を築きながら、長期的なボディメイクを進められます。",
  },
  {
    title: "25歳以下割引・モニター割引で20%オフ",
    desc: "25歳以下の方向けの割引と、モニター利用による割引が用意されており、いずれも20%オフ。若い世代や費用を抑えて始めたい方が挑戦しやすい料金設計です。",
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
    title: "朝7時から夜21時まで・年中無休",
    desc: "早朝から営業しており定休日もないため、シフト勤務や不規則な生活リズムの方でもスケジュールを組みやすい体制です。",
  },
];

const demerits = [
  {
    title: "店舗は用賀の1店舗のみ",
    desc: "公式サイトで確認できる店舗は世田谷区用賀の1店舗のみです（2026年8月3日確認）。用賀駅周辺に通える方向けのジムです。",
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
  { name: "QUICK DIET TRIAL 4", duration: "30分/回", price: "月額26,620円", note: "月4回" },
  { name: "QUICK DIET TRIAL 8", duration: "30分/回", price: "月額51,040円", note: "月8回" },
  { name: "LIGHT", duration: "60分/回", price: "総額202,400円", note: "2ヶ月16回" },
  { name: "STANDARD", duration: "60分/回", price: "総額274,560円", note: "3ヶ月24回" },
  { name: "PREMIUM", duration: "60分/回", price: "総額348,480円", note: "4ヶ月32回" },
  { name: "COMPLETE", duration: "60分/回", price: "総額627,200円", note: "64回" },
  { name: "MONTHLY 4", duration: "60分/回", price: "月額40,700円", note: "月4回・継続プラン" },
  { name: "MONTHLY 8", duration: "60分/回", price: "月額76,450円", note: "月8回・継続プラン" },
];

const reviewSummary = "4Fのパーソナルジムの口コミでは「隠れ家的な雰囲気が好き」「トレーナーが親切でアットホーム」という声が見られます。一方で「店舗が用賀の1店舗のみ」「ネット上の情報が少なく事前に判断しにくい」といった指摘もあります。用賀駅周辺でプライベート感を重視してじっくり取り組みたい方に向いています。";

const faqItems = [
  { q: "4Fのパーソナルジムの入会金はいくらですか？", a: "公式サイトに入会金の記載はありません（2026年8月3日確認）。無料カウンセリングの際にご確認ください。" },
  { q: "4Fのパーソナルジムはどこにありますか？", a: "東京都世田谷区用賀4丁目1-5 東京コーポレーション第10ビル4階の1店舗です。用賀駅から徒歩2分（公式サイト内に徒歩5分の表記もあり）とアクセス良好です。" },
  { q: "営業時間・定休日は？", a: "営業時間は7:00〜21:00で年中無休です。朝7時から営業しているため、出勤前のトレーニングにも利用しやすい環境です。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心して始められます。" },
  { q: "見学や体験はできますか？", a: "無料カウンセリングが用意されています。体験トレーニングの価格は公式サイトに記載がないため、カウンセリング予約時にご確認ください。" },
  { q: "割引はありますか？", a: "25歳以下の方向けの割引と、モニター利用による割引があり、いずれも20%オフです。対象条件の詳細は無料カウンセリングでご確認ください。" },
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
      <GymCta slug="4f-gym" name="4Fのパーソナルジム" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">4Fのパーソナルジム（用賀）の口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年8月</p>
        <p className="text-gray-700 leading-relaxed mb-10">4Fのパーソナルジムは、<span className="font-bold bg-yellow-100 px-0.5">用賀駅徒歩2分</span>（東京都世田谷区用賀・公式サイト内に徒歩5分の表記もあり）のビル4階に位置する隠れ家的なパーソナルジムです。朝7時〜21時・年中無休で通いやすく、プライベート感の高い空間でアットホームな<span className="font-bold bg-yellow-100 px-0.5">マンツーマン</span>トレーニングが受けられます。25歳以下割引・モニター割引（20%オフ）も用意されています。本記事では、4Fのパーソナルジムの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

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
          <p className="text-xs text-gray-500 mt-3">※ 料金はすべて税込・公式サイト掲載の金額です（2026年8月3日確認）。25歳以下割引・モニター割引（いずれも20%オフ）あり。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="4f-gym" name="4Fのパーソナルジム" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムのよくある質問</h2>
          <div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">4Fのパーソナルジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">用賀駅徒歩2分・朝7時から年中無休。まずは無料カウンセリングで、隠れ家ジムの雰囲気を体験してみましょう。</p>
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
