import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "MIYAZAKI GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "MIYAZAKI GYM（ミヤザキジム）の口コミ・評判を徹底解説。高品質×低価格・科学的根拠に基づくパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "MIYAZAKI GYM（ミヤザキジム）" },
  { label: "タイプ", value: "高品質×低価格パーソナルジム" },
  { label: "料金帯", value: "1回あたり7,000円〜13,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "高品質×低価格 / 科学的根拠 / 有資格トレーナー / 都度払い対応" },
];

const strengths = [
  {
    title: "高品質なトレーニングを低価格で提供",
    desc: "有資格者のトレーナーによる質の高い指導を、業界平均を下回る低価格で提供。広告費を抑えた運営により、利用者に還元する料金設定を実現しています。",
  },
  {
    title: "科学的根拠に基づいたトレーニング",
    desc: "最新のスポーツ科学や運動生理学に基づいたプログラムを採用。根拠のあるトレーニング方法で、効率的かつ安全に身体を変えていきます。",
  },
  {
    title: "有資格トレーナーによる専門的な指導",
    desc: "NSCA-CPTやNESTA-PFTなどの認定資格を持つトレーナーが在籍。解剖学や栄養学の専門知識を持ったスタッフが、一人ひとりに最適な指導を行います。",
  },
];

const merits = [
  {
    title: "トレーナーの質が業界トップクラス",
    desc: "有資格者のみが在籍するため、フォーム指導の正確さや怪我予防の配慮が行き届いています。質の高い指導をリーズナブルな価格で受けられるのは大きな魅力です。",
  },
  {
    title: "都度払いに対応で始めやすい",
    desc: "月額制だけでなく都度払いにも対応しているため、まずは試してみたいという方や、不定期に通いたい方にも利用しやすい料金体系です。",
  },
  {
    title: "エビデンスに基づく信頼性の高い指導",
    desc: "「なぜこのトレーニングが効果的なのか」を科学的に説明してもらえるため、納得感を持ってトレーニングに取り組めます。知識も身につくため、自走力が高まります。",
  },
];

const demerits = [
  {
    title: "知名度が大手に劣る",
    desc: "広告費を抑えた運営のため、RIZAPやBEYONDなどの大手と比較すると知名度は低め。口コミや情報が少なく、事前のリサーチが難しい場合があります。",
  },
  {
    title: "店舗数が限定的",
    desc: "東京都内を中心とした展開のため、地方在住の方は利用が難しい状況です。",
  },
  {
    title: "華やかな設備やサービスは控えめ",
    desc: "コスト削減のため、高級感のある内装や豊富なアメニティといった付加サービスは大手ほど充実していない場合があります。トレーニングの質に投資するスタンスです。",
  },
];

const pricingPlans = [
  { name: "都度払い", duration: "60分/回", price: "1回13,000円〜", note: "入会金不要の場合あり" },
  { name: "月4回プラン", duration: "60分/回", price: "月額28,000円〜", note: "1回あたり7,000円〜" },
  { name: "月8回プラン", duration: "60分/回", price: "月額52,000円〜", note: "1回あたり6,500円〜" },
];

const reviewSummary = "MIYAZAKI GYMの口コミでは「トレーナーの知識量がすごい」「この価格でこの品質は破格」と品質と価格のバランスが高く評価されています。科学的なアプローチに納得感を持って通えるという声が多数。一方で「知名度が低いので最初は不安だった」「店舗がもっと増えてほしい」という声もあります。";

const faqItems = [
  { q: "MIYAZAKI GYMの入会金はいくらですか？", a: "入会金は20,000円程度です。都度払いの場合は入会金不要の場合もあります。最新情報は公式サイトでご確認ください。" },
  { q: "都度払いと月額制、どちらがお得ですか？", a: "定期的に通う場合は月額制のほうが1回あたりの料金がお得です。まずは都度払いで試してから月額制に切り替える方も多いです。" },
  { q: "トレーナーの資格は何を持っていますか？", a: "NSCA-CPT、NESTA-PFTなどの国際的に認知された認定資格を保有するトレーナーが在籍しています。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、初心者の方も多く利用しています。基礎から丁寧に指導してもらえます。" },
  { q: "無料体験はありますか？", a: "初回カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "食事指導は受けられますか？", a: "プランによって食事アドバイスが含まれます。詳細はカウンセリング時にご確認ください。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
];

export default function MiyazakiGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "MIYAZAKI GYM" }]} />
      <ReviewSummary gymName="MIYAZAKI GYM" />
      <GymCta slug="miyazaki-gym" name="MIYAZAKI GYM" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">MIYAZAKI GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          MIYAZAKI GYM（ミヤザキジム）は高品質なトレーニングを低価格で提供するパーソナルジムです。科学的根拠に基づいた指導と有資格トレーナーの在籍が特徴。本記事では、MIYAZAKI GYMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="miyazaki-gym" name="MIYAZAKI GYM" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">MIYAZAKI GYMのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">MIYAZAKI GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは体験トレーニングで、科学的なアプローチを実感してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
