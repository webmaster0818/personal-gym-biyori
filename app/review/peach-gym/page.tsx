import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "PEACH GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "PEACH GYM（ピーチジム）の口コミ・評判を徹底解説。女性向け・お尻（ピーチ）特化トレーニングの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "PEACH GYM（ピーチジム）" },
  { label: "タイプ", value: "女性向けヒップ特化パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜120,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "女性向け / お尻（ヒップ）特化 / 美尻メイク / マンツーマン指導" },
];

const strengths = [
  {
    title: "お尻（ヒップ）トレーニングに特化",
    desc: "「ピーチ」の名の通り、桃のような丸みのある美尻づくりに特化したプログラムを提供。ヒップアップに必要な筋肉を的確に鍛えるメソッドが特徴です。",
  },
  {
    title: "女性の体を知り尽くしたプログラム",
    desc: "女性特有の体の仕組みやホルモンバランスを考慮したプログラム設計。生理周期に合わせたトレーニング調整なども行っています。",
  },
  {
    title: "下半身のラインを美しく整える",
    desc: "ヒップだけでなく、太もも・ウエストとの比率を考慮した全体的な下半身のラインづくりを重視。脚長効果やくびれメイクにもつながるプログラムです。",
  },
];

const merits = [
  {
    title: "美尻に特化した専門知識",
    desc: "ヒップアップに特化したノウハウを持つトレーナーが在籍。一般的なジムでは得られない専門的な指導が受けられます。",
  },
  {
    title: "女性が通いやすい環境",
    desc: "女性のニーズを考慮した空間づくりやサービスが充実。更衣室やアメニティにもこだわりがあります。",
  },
  {
    title: "見た目の変化を実感しやすい",
    desc: "ヒップは筋肉がつきやすい部位のため、比較的早い段階で見た目の変化を実感できる方が多いです。",
  },
];

const demerits = [
  {
    title: "全身トレーニングを求める方には物足りない",
    desc: "ヒップ特化のため、上半身や全身をバランスよく鍛えたい方には物足りない場合があります。",
  },
  {
    title: "店舗数が限られている",
    desc: "特化型ジムのため店舗数が少なく、通える方が限定されます。",
  },
  {
    title: "男性は利用しにくい",
    desc: "女性向けに特化しているため、男性が利用しにくい雰囲気があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額35,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額60,000円〜", note: "週2回ペース・おすすめ" },
  { name: "美尻集中コース（2ヶ月）", duration: "50分/回", price: "総額120,000円〜", note: "16回・短期集中" },
];

const reviewSummary = "PEACH GYMの口コミでは「お尻の形が明らかに変わった」「ヒップアップ効果を実感」「女性に嬉しい環境」という声が多く見られます。一方で「ヒップ以外のメニューも欲しい」「店舗が近くにない」といった指摘もあります。美尻を目指す女性に特に人気です。";

const faqItems = [
  { q: "PEACH GYMの入会金はいくらですか？", a: "入会金は20,000円〜40,000円程度です。キャンペーンで割引になることもあります。" },
  { q: "ヒップアップ以外のトレーニングもできますか？", a: "ヒップ特化ですが、ウエストや太ももなど下半身全体のトレーニングも含まれています。上半身メニューの追加も相談可能です。" },
  { q: "どのくらいで効果が出ますか？", a: "個人差はありますが、2〜3ヶ月で見た目の変化を実感される方が多いです。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、初心者向けのメニューも用意されています。マンツーマンで丁寧に指導してもらえます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "食事指導はありますか？", a: "プランにより食事アドバイスが含まれています。ヒップアップに効果的な栄養摂取もアドバイスしてもらえます。" },
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
  { name: "Bellpha", href: "/review/bellpha/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function PeachGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "PEACH GYM" }]} />
      <ReviewSummary gymName="PEACH GYM" />
      <GymCta slug="peach-gym" name="PEACH GYM" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">PEACH GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-gray-700 leading-relaxed mb-10">PEACH GYM（ピーチジム）は、女性向けにお尻（ヒップ）トレーニングに特化したパーソナルジムです。桃のような美しいヒップラインを目指す専門プログラムと、女性が通いやすい環境づくりが特徴です。本記事では、PEACH GYMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。</p>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PEACH GYMの基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PEACH GYMの3つの強み</h2><div className="space-y-4">{strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}</div></section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">PEACH GYMのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">{merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}</div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">{demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}</div>
        </section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PEACH GYMの料金</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PEACH GYMの口コミ概要</h2><div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div><p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p></section>

        <section className="mb-12"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PEACH GYMのよくある質問</h2><div className="space-y-3">{faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}</div></section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">PEACH GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、美尻プログラムを体験してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section><h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}</div></section>
      </div>
    </>
  );
}
