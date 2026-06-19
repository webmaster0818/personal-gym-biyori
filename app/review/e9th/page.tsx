import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "E9th PRIVATE GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "E9th PRIVATE GYM（イーナインス）の口コミ・評判を徹底解説。完全プライベート空間のパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "E9th PRIVATE GYM（イーナインス プライベートジム）" },
  { label: "タイプ", value: "完全プライベートパーソナルジム" },
  { label: "料金帯", value: "月額40,000円〜100,000円程度" },
  { label: "エリア", value: "東京都内" },
  { label: "特徴", value: "完全プライベート空間 / 1対1指導 / 高級感のある内装 / オーダーメイドプログラム" },
];

const strengths = [
  {
    title: "完全プライベート空間でのトレーニング",
    desc: "他の利用者と一切顔を合わせることのない完全プライベート空間でトレーニングが可能。入室から退室まで、施設を独占して利用できるため、最高のプライバシーが確保されます。",
  },
  {
    title: "高級感のある洗練された空間",
    desc: "ホテルラウンジのような洗練された内装で、トレーニングへのモチベーションが自然と高まります。アメニティやシャワー設備も充実しており、トレーニング後も快適に過ごせます。",
  },
  {
    title: "完全オーダーメイドのプログラム",
    desc: "利用者一人ひとりの体質、目標、ライフスタイルに合わせた完全オーダーメイドのプログラムを作成。画一的なメニューではなく、あなただけの最適なトレーニングプランを提供します。",
  },
];

const merits = [
  {
    title: "究極のプライバシー保護",
    desc: "芸能人や経営者など、人目を避けたい方にも対応できる完全プライベート空間。予約制で他の利用者とバッティングしない設計のため、安心してトレーニングに集中できます。",
  },
  {
    title: "ラグジュアリーな空間でモチベーション維持",
    desc: "高級感のある内装はトレーニングの質を高めるだけでなく、ジム通いを特別な時間として楽しめます。自分へのご褒美としてモチベーション維持にもつながります。",
  },
  {
    title: "柔軟なスケジュール対応",
    desc: "早朝や深夜など、一般的なジムでは対応していない時間帯にもトレーニングが可能な場合があり、忙しい方でも通いやすい環境です。",
  },
];

const demerits = [
  {
    title: "料金が高め",
    desc: "完全プライベート空間と高級な設備を維持するため、一般的なパーソナルジムよりも料金は高めに設定されています。",
  },
  {
    title: "店舗が非常に限定的",
    desc: "プライベート空間を重視しているため店舗数が少なく、通える方が限られます。",
  },
  {
    title: "カジュアルな雰囲気を求める方には合わない場合も",
    desc: "高級路線のため、気軽に通いたい方やカジュアルな雰囲気を求める方には敷居が高く感じる可能性があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額40,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額75,000円〜", note: "週2回ペース" },
  { name: "プレミアムプラン", duration: "90分/回・月8回", price: "月額100,000円〜", note: "ストレッチ込み" },
];

const reviewSummary = "E9th PRIVATE GYMの口コミでは「完全プライベートで快適」「内装がおしゃれでモチベーションが上がる」と高評価が目立ちます。プライバシーを重視する方から特に支持されています。一方で「料金が高い」「店舗が少ない」という声もあります。";

const faqItems = [
  { q: "E9th PRIVATE GYMは完全個室ですか？", a: "はい、完全プライベート空間でトレーニングを行います。他の利用者と顔を合わせることはありません。" },
  { q: "入会金はいくらですか？", a: "入会金は50,000円程度です。キャンペーンで割引になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "シャワーはありますか？", a: "はい、シャワー設備とアメニティが完備されています。トレーニング後も快適に過ごせます。" },
  { q: "早朝や深夜のトレーニングは可能ですか？", a: "対応可能な時間帯は店舗により異なります。詳細は公式サイトでご確認ください。" },
  { q: "無料体験はありますか？", a: "初回カウンセリング・施設見学が用意されています。公式サイトから予約できます。" },
  { q: "ウェアのレンタルはありますか？", a: "はい、ウェア・タオル・シューズのレンタルが用意されています。手ぶらで通えます。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "ACCEPT", href: "/review/accept/" },
];

export default function E9thReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "E9th PRIVATE GYM" }]} />
      <ReviewSummary gymName="E9th PRIVATE GYM" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">E9th PRIVATE GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          E9th PRIVATE GYM（イーナインス）は完全プライベート空間を提供するパーソナルジムです。ホテルのような高級感ある空間で、他の利用者と一切顔を合わせることなくトレーニングに集中できます。本記事では、E9th PRIVATE GYMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">E9th PRIVATE GYMのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">E9th PRIVATE GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは施設見学・カウンセリングで、プライベート空間を体験してみましょう。</p>
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
