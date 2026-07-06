import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "BELIONの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "BELION（ベリオン）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "BELION（ベリオン）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額40,000円〜150,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "マンツーマン指導 / カスタマイズプログラム / ダイエット・筋力アップ対応" },
];

const strengths = [
  {
    title: "一人ひとりに最適化されたプログラム",
    desc: "体質・目標・生活習慣を詳しくヒアリングし、完全オーダーメイドのトレーニングプログラムを作成。効率的に理想の体へ導きます。",
  },
  {
    title: "経験豊富なトレーナー陣",
    desc: "実績のあるトレーナーが在籍し、ダイエットからバルクアップまで幅広いニーズに対応。適切なフォーム指導で安全にトレーニングを進められます。",
  },
  {
    title: "食事指導で生活習慣から改善",
    desc: "トレーニングだけでなく、日々の食事についてもアドバイスを提供。栄養バランスを意識した食生活への改善をサポートします。",
  },
];

const merits = [
  {
    title: "マンツーマンで密度の高い指導",
    desc: "トレーナーがつきっきりで指導するため、効率的にトレーニングを進められます。フォームの修正もその場で受けられます。",
  },
  {
    title: "幅広い目的に対応",
    desc: "ダイエット・筋力アップ・健康維持・姿勢改善など、多様な目的に合わせたプログラムを提供しています。",
  },
  {
    title: "丁寧なカウンセリング",
    desc: "入会前のカウンセリングで目標や不安をしっかりヒアリング。納得した上でトレーニングをスタートできます。",
  },
];

const demerits = [
  {
    title: "店舗展開が限定的",
    desc: "店舗数が少なく、通える範囲に店舗がない場合があります。事前にアクセスを確認しましょう。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "大手チェーンと比較すると知名度が低いため、口コミ情報が少なく判断材料が限られることがあります。",
  },
  {
    title: "予約が取りにくい場合がある",
    desc: "人気の時間帯やトレーナーには予約が集中することがあります。早めの予約を心がけましょう。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額40,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額70,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中コース（2ヶ月）", duration: "60分/回", price: "総額150,000円〜", note: "16回" },
];

const reviewSummary = "BELIONの口コミでは「トレーナーが丁寧で続けやすい」「オーダーメイドのプログラムが効果的」という声が見られます。一方で「もう少し知名度があれば安心」「店舗が少ない」といった指摘もあります。丁寧な指導を重視する方に向いています。";

const faqItems = [
  { q: "BELIONの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、マンツーマン指導のため初心者でも安心してトレーニングを始められます。" },
  { q: "食事指導は含まれていますか？", a: "プランにより食事指導が含まれています。詳細はカウンセリング時にご確認ください。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "退会方法を教えてください。", a: "退会を希望する場合は前月までにジムに申告が必要です。詳細は入会時にご確認ください。" },
  { q: "ウェアのレンタルはありますか？", a: "店舗によりウェア・タオルのレンタルサービスがあります。詳細は各店舗にお問い合わせください。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "LEADING", href: "/review/leading/" },
  { name: "Carat", href: "/review/carat/" },
];

export default function BelionReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BELION" }]} />
      <ReviewSummary gymName="BELION" />
      <GymCta slug="belion" name="BELION" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">BELIONの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">BELION（ベリオン）は一人ひとりに最適化されたオーダーメイドプログラムが特徴のパーソナルトレーニングジムです。経験豊富なトレーナーによる<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>で、ダイエットから筋力アップまで幅広い目的に対応しています。本記事では、BELIONの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BELIONの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BELIONの3つの強み</h2>
          <div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">BELIONのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BELIONの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BELIONの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="belion" name="BELION" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BELIONのよくある質問</h2>
          <div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">BELIONが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
