import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "UNDEUX SUPERBODYの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "UNDEUX SUPERBODY（アンドゥスーパーボディ）の口コミ・評判を徹底解説。女性専用・ボディメイク・食事管理付きの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "UNDEUX SUPERBODY（アンドゥスーパーボディ）" },
  { label: "タイプ", value: "女性専用パーソナルジム" },
  { label: "料金帯", value: "月額60,000円〜220,000円程度（コースにより異なる）" },
  { label: "エリア", value: "東京・大阪・神戸など都市部を中心に展開" },
  { label: "特徴", value: "女性専用 / ボディメイク特化 / 食事管理付き / 宅配食サービス連携" },
];

const strengths = [
  {
    title: "女性のボディメイクに特化",
    desc: "女性の体の特性を理解した専門トレーナーが、美しいボディラインを作るためのプログラムを提供。女性ならではの悩みに寄り添った指導が受けられます。",
  },
  {
    title: "食事管理サービスが充実",
    desc: "専属の管理栄養士による食事指導に加え、宅配食サービスとの連携も。忙しい女性でも手軽に栄養バランスの取れた食事管理ができます。",
  },
  {
    title: "おしゃれで清潔感のある空間",
    desc: "女性が通いたくなるような洗練されたインテリアと清潔感のある店内。アメニティも充実しており、仕事帰りにそのまま通えます。",
  },
];

const merits = [
  {
    title: "女性専用で安心して通える",
    desc: "トレーナーも女性が多く、男性の目を気にせずトレーニングに集中できます。女性特有の体の悩みも相談しやすい環境です。",
  },
  {
    title: "宅配食で食事管理の手間を削減",
    desc: "提携の宅配食サービスを利用すれば、自炊の手間なく適切な食事管理が可能。忙しい女性に特に好評のサービスです。",
  },
  {
    title: "卒業後のサポートプランも用意",
    desc: "コース終了後もリバウンド防止のためのアフターサポートプランが用意されており、長期的な体型維持をサポートしてくれます。",
  },
];

const demerits = [
  {
    title: "料金が高め",
    desc: "女性専用で充実したサービスの分、料金は一般的なパーソナルジムより高めの設定です。予算に余裕を持って検討しましょう。",
  },
  {
    title: "男性は利用できない",
    desc: "女性専用のため、男性は利用できません。カップルや夫婦で一緒に通いたい場合は別のジムを検討する必要があります。",
  },
  {
    title: "店舗が都市部に集中",
    desc: "東京・大阪・神戸など都市部が中心で、地方にはまだ展開が少ない状況です。",
  },
];

const pricingPlans = [
  { name: "2ヶ月集中コース", duration: "50分/回", price: "総額220,000円〜", note: "16回・食事管理込み" },
  { name: "3ヶ月コース", duration: "50分/回", price: "総額280,000円〜", note: "24回・食事管理込み" },
  { name: "アフターコース", duration: "50分/回", price: "月額18,000円〜", note: "月2回・卒業後プラン" },
];

const reviewSummary = "UNDEUX SUPERBODYの口コミでは「女性専用で気楽に通える」「食事管理の宅配食が便利」「トレーナーが親身で続けやすい」という声が多く見られます。一方で「料金がやや高い」「店舗が遠い」といった指摘もあります。女性のボディメイクに本気で取り組みたい方に支持されています。";

const faqItems = [
  { q: "UNDEUX SUPERBODYの入会金はいくらですか？", a: "入会金は33,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "食事指導は厳しいですか？", a: "極端な食事制限ではなく、栄養バランスを重視した実践的な指導です。宅配食も活用できます。" },
  { q: "トレーナーは女性ですか？", a: "女性トレーナーが多数在籍しています。希望があれば女性トレーナーを指定できます。" },
  { q: "子連れでも通えますか？", a: "店舗によって託児サービスの有無が異なります。詳細は各店舗にお問い合わせください。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "コース途中での退会は可能ですか？", a: "コース途中での退会は違約金が発生する場合があります。詳細は入会時にご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "PEACH GYM", href: "/review/peach-gym/" },
  { name: "Bellpha", href: "/review/bellpha/" },
];

export default function UndeuxReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "UNDEUX SUPERBODY" }]} />
      <ReviewSummary gymName="UNDEUX SUPERBODY" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          UNDEUX SUPERBODYの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          UNDEUX SUPERBODY（アンドゥスーパーボディ）は<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>のパーソナルジムです。ボディメイクに特化したトレーニングと充実の食事管理サービスで、理想の体型づくりをトータルサポート。本記事では、UNDEUX SUPERBODYの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>{m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>{d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">料金</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.duration}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">UNDEUX SUPERBODYが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
