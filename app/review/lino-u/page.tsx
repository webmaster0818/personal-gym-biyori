import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "Lino Uの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Lino U（リノユー）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Lino U（リノユー）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額30,000円〜100,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "マンツーマン / ライフスタイル重視 / 食事指導 / 長期サポート" },
];

const strengths = [
  {
    title: "ライフスタイルに寄り添ったプログラム",
    desc: "一人ひとりのライフスタイルに合わせたトレーニングプログラムを設計。無理なく日常生活に運動を取り入れられるよう配慮された指導が特徴です。",
  },
  {
    title: "長期的な健康を見据えた指導",
    desc: "短期的なダイエットだけでなく、長期的な健康維持を見据えたプログラムを提供。一時的な変化ではなく、一生続けられる運動習慣の構築を目指します。",
  },
  {
    title: "丁寧なコミュニケーション",
    desc: "トレーナーとの密なコミュニケーションを重視。体調や気分に合わせてメニューを柔軟に調整し、無理なく続けられる環境を提供しています。",
  },
];

const merits = [
  {
    title: "無理のないペースで続けられる",
    desc: "ライフスタイルに合わせたプログラムのため、仕事や家事との両立がしやすく、長期的に通い続けられます。",
  },
  {
    title: "運動習慣の定着に効果的",
    desc: "一時的なダイエットではなく、運動を生活の一部にすることを目標としているため、コース終了後も自主的に運動を続けやすくなります。",
  },
  {
    title: "トレーナーとの信頼関係を築きやすい",
    desc: "丁寧なコミュニケーションにより、トレーナーとの信頼関係が構築されやすく、何でも相談しやすい環境です。",
  },
];

const demerits = [
  {
    title: "短期間での劇的な変化は期待しにくい",
    desc: "長期的な健康を重視するため、短期間でのドラスティックな体重変化を求める方には物足りない場合があります。",
  },
  {
    title: "店舗数が限られている",
    desc: "小規模展開のため店舗数が少なく、通える方が限定される場合があります。",
  },
  {
    title: "口コミ情報が少ない",
    desc: "知名度が大手と比較して低いため、事前の情報収集がしにくいことがあります。体験で実際の雰囲気を確認するのがおすすめです。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額32,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額58,000円〜", note: "週2回ペース・おすすめ" },
  { name: "ライフスタイルコース", duration: "60分/回", price: "月額45,000円〜", note: "月6回・柔軟スケジュール" },
];

const reviewSummary = "Lino Uの口コミでは「無理なく続けられる」「トレーナーが親切で相談しやすい」「生活に運動が定着した」という声が見られます。一方で「もう少しハードなメニューも欲しい」「店舗が少ない」といった指摘もあります。長期的に運動習慣を身につけたい方に向いています。";

const faqItems = [
  { q: "Lino Uの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、運動初心者の方こそ歓迎です。ライフスタイルに合わせた無理のないメニューから始められます。" },
  { q: "食事指導はありますか？", a: "プランにより食事アドバイスが含まれています。無理な食事制限ではなく、続けやすい食生活の改善を提案します。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "退会に違約金はかかりますか？", a: "月額制の場合、基本的に違約金はありません。前月までに退会の申告が必要です。" },
  { q: "オンライン対応はありますか？", a: "店舗によりオンライントレーニングに対応している場合があります。詳細はお問い合わせください。" },
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
  { name: "ASmake", href: "/review/asmake/" },
  { name: "LEADING", href: "/review/leading/" },
];

export default function LinoUReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Lino U" }]} />
      <ReviewSummary gymName="Lino U" />
      <GymCta slug="lino-u" name="Lino U" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Lino Uの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">Lino U（リノユー）はライフスタイルに寄り添ったパーソナルトレーニングジムです。短期的なダイエットではなく、長期的な健康維持と運動習慣の定着を目指したプログラムが特徴。無理なく続けられるトレーニングで、一生モノの運動習慣を手に入れられます。本記事では、Lino Uの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lino Uの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lino Uの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Lino Uのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lino Uの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lino Uの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lino Uのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Lino Uが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたのライフスタイルに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
