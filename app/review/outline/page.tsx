import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "OUTLINEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "OUTLINE（アウトライン）パーソナルジムの口コミ・評判を徹底解説。女性専用・完全個室・生涯アフターフォローの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "OUTLINE（アウトライン）" },
  { label: "タイプ", value: "女性専用完全個室パーソナルジム" },
  { label: "料金帯", value: "月額46,200円〜184,800円程度（コースにより異なる）" },
  { label: "エリア", value: "東京・神奈川を中心に展開" },
  { label: "特徴", value: "女性専用 / 完全個室 / 生涯アフターフォロー / 女性トレーナー在籍" },
];

const strengths = [
  {
    title: "生涯アフターフォロー",
    desc: "コース卒業後も生涯にわたって食事・トレーニングのアドバイスが受けられる独自のアフターフォロー制度。リバウンド防止に大きく貢献する他社にない強みです。",
  },
  {
    title: "女性専用の完全個室空間",
    desc: "女性のお客様のみが利用する完全個室ジム。女性トレーナーも在籍しており、女性ならではの体の悩みを安心して相談できます。",
  },
  {
    title: "高品質なトレーニング指導",
    desc: "採用率3%以下の厳選されたトレーナーが在籍。一人ひとりの体質や目標に合わせた最適なプログラムを設計し、効率的なボディメイクを実現します。",
  },
];

const merits = [
  {
    title: "卒業後も無料でサポートが続く",
    desc: "生涯アフターフォローにより、コース終了後もLINEで食事やトレーニングの相談ができます。長期的な体型維持に心強いサービスです。",
  },
  {
    title: "完全個室で人目を気にしない",
    desc: "完全個室のため他の利用者と顔を合わせることがなく、体型に自信がない方やジム初心者でも安心して通えます。",
  },
  {
    title: "手ぶらで通える充実のアメニティ",
    desc: "ウェア・シューズ・タオル・アメニティが無料レンタル。仕事帰りでも手ぶらで通えるので、継続しやすい環境が整っています。",
  },
];

const demerits = [
  {
    title: "男性は利用できない",
    desc: "女性専用のため男性は利用不可。パートナーと一緒に通いたい場合は別のジムを検討する必要があります。",
  },
  {
    title: "展開エリアが限定的",
    desc: "東京・神奈川が中心のため、他の地域からは通いにくい場合があります。今後の店舗拡大に期待です。",
  },
  {
    title: "コース料金は一括払いが基本",
    desc: "コース制のため、まとまった費用が初期に必要になります。分割払いに対応している場合もあるので、相談してみましょう。",
  },
];

const pricingPlans = [
  { name: "クイックコース（1ヶ月）", duration: "75分/回", price: "総額92,400円〜", note: "8回" },
  { name: "ダイエットコース（2ヶ月）", duration: "75分/回", price: "総額184,800円〜", note: "16回・人気プラン" },
  { name: "下半身SPコース（2ヶ月）", duration: "75分/回", price: "総額184,800円〜", note: "16回・下半身特化" },
];

const reviewSummary = "OUTLINEの口コミでは「生涯アフターフォローが心強い」「完全個室で安心」「トレーナーの質が高い」という声が多く見られます。女性専用ならではの配慮も好評です。一方で「料金がもう少し安ければ」「店舗が限られている」といった指摘もあります。";

const faqItems = [
  { q: "OUTLINEの入会金はいくらですか？", a: "入会金は33,000円〜55,000円程度です。キャンペーンで無料になることもあります。" },
  { q: "生涯アフターフォローとは何ですか？", a: "コース卒業後も無期限でLINEによる食事・トレーニングアドバイスが受けられるサービスです。追加料金はかかりません。" },
  { q: "女性トレーナーを指名できますか？", a: "はい、女性トレーナーの指名が可能です。希望がある場合はカウンセリング時に相談しましょう。" },
  { q: "子連れでも通えますか？", a: "店舗によりベビーサークルを用意しているところがあります。事前に各店舗にご確認ください。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "分割払いは可能ですか？", a: "クレジットカードの分割払いに対応しています。月々の支払い額はプランにより異なります。" },
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
  { name: "UNDEUX SUPERBODY", href: "/review/undeux/" },
  { name: "PEACH GYM", href: "/review/peach-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "Bellpha", href: "/review/bellpha/" },
];

export default function OutlineReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "OUTLINE" }]} />
      <ReviewSummary gymName="OUTLINE" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          OUTLINEの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          OUTLINE（アウトライン）は<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>・<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>のパーソナルジムです。最大の特徴は業界でも珍しい「生涯アフターフォロー」制度。コース卒業後もずっとサポートが続くため、リバウンドが心配な方にも安心です。本記事では、OUTLINEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">OUTLINEの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">OUTLINEの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">OUTLINEのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">OUTLINEの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody>
            {pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}
          </tbody></table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">OUTLINEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">OUTLINEのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">OUTLINEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
