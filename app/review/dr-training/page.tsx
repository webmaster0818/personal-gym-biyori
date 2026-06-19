import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "Dr.トレーニングの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Dr.トレーニングの口コミ・評判を徹底解説。医学的根拠に基づくトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Dr.トレーニング" },
  { label: "タイプ", value: "医学的根拠に基づくパーソナルジム" },
  { label: "料金帯", value: "1回6,700円〜（都度払い対応）" },
  { label: "エリア", value: "東京都内を中心に20店舗以上" },
  { label: "特徴", value: "医学的アプローチ / 都度払い可 / 管理栄養士在籍 / 柔軟な料金体系" },
];

const strengths = [
  {
    title: "医学的根拠に基づいたトレーニング",
    desc: "医師監修のプログラムを採用し、解剖学・運動生理学に基づいた科学的なトレーニングを提供。ケガのリスクを最小限に抑えながら、効率的な身体づくりが可能です。",
  },
  {
    title: "都度払いで通いやすい料金体系",
    desc: "一括払いではなく、1回ごとの都度払いに対応。月額プランも用意されていますが、自分のペースで通えるため、無駄なく続けられます。",
  },
  {
    title: "管理栄養士による食事サポート",
    desc: "トレーナーだけでなく管理栄養士が在籍しており、栄養面からも科学的にサポート。身体の内側からのボディメイクを実現します。",
  },
];

const merits = [
  {
    title: "都度払いでリスクが低い",
    desc: "高額な一括契約が不要で、1回ごとに支払えるため、始めるハードルが非常に低いのが特徴です。合わなければいつでもやめられます。",
  },
  {
    title: "科学的なアプローチで効果を実感しやすい",
    desc: "感覚的な指導ではなく、医学的な根拠に基づいたメニュー作成のため、効率的に結果が出やすいと評判です。",
  },
  {
    title: "駅近で通いやすい立地",
    desc: "都内を中心に駅から徒歩5分以内の好立地に店舗を展開。仕事帰りや休日にも通いやすい環境が整っています。",
  },
];

const demerits = [
  {
    title: "都度払いだと総額が高くなる場合がある",
    desc: "1回あたりの料金は手頃ですが、週2回以上通う場合は月額プランの方がお得になるケースがあります。利用頻度に合わせたプラン選びが重要です。",
  },
  {
    title: "東京以外の店舗が少ない",
    desc: "都内中心の展開のため、地方在住の方にはアクセスが難しい場合があります。",
  },
  {
    title: "人気店舗は予約が取りにくい",
    desc: "駅近の人気店舗では予約が集中しやすく、希望の時間帯に予約が取れないことがあります。",
  },
];

const pricingPlans = [
  { name: "都度払い（45分）", duration: "45分/回", price: "6,700円〜/回", note: "入会金不要プランあり" },
  { name: "都度払い（60分）", duration: "60分/回", price: "8,900円〜/回", note: "スタンダード" },
  { name: "月額プラン（月4回）", duration: "45分/回", price: "月額25,000円〜", note: "都度払いよりお得" },
  { name: "月額プラン（月8回）", duration: "45分/回", price: "月額48,000円〜", note: "週2回ペース" },
];

const reviewSummary = "Dr.トレーニングの口コミでは「科学的な指導で信頼できる」「都度払いで気軽に通える」という声が多く見られます。トレーナーの知識レベルが高く、身体の仕組みを丁寧に説明してくれると好評です。一方で「人気店舗は予約が取りにくい」「都度払いだと割高になる場合がある」といった声も見られます。";

const faqItems = [
  { q: "Dr.トレーニングの入会金はいくらですか？", a: "入会金は35,400円です。キャンペーンで無料になることもあるため、公式サイトで最新情報をご確認ください。" },
  { q: "都度払いと月額制はどちらがお得ですか？", a: "週1回程度なら都度払い、週2回以上通うなら月額プランがお得です。カウンセリングで最適なプランを相談できます。" },
  { q: "トレーナーの資格は？", a: "医学的知識を持つトレーナーが在籍しており、NSCA-CPTやNESTA-PFTなどの有資格者が多数います。" },
  { q: "食事指導は受けられますか？", a: "はい、管理栄養士による食事指導が受けられます。プランによっては追加料金が必要な場合があります。" },
  { q: "無料体験はありますか？", a: "初回体験トレーニングが用意されています。料金や内容は公式サイトでご確認ください。" },
  { q: "ウェアやシューズのレンタルはありますか？", a: "レンタルサービスがあります。手ぶらで通える環境が整っています。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "ACCEPT", href: "/review/accept/" },
];

export default function DrTrainingReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Dr.トレーニング" }]} />
      <ReviewSummary gymName="Dr.トレーニング" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Dr.トレーニングの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Dr.トレーニングは医学的根拠に基づいたトレーニングを提供するパーソナルジムです。都度払いにも対応した柔軟な料金体系と、管理栄養士による食事サポートが特徴。本記事では、Dr.トレーニングの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Dr.トレーニングのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">Dr.トレーニングが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは体験トレーニングで、医学的アプローチの効果を実感してみましょう。</p>
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
