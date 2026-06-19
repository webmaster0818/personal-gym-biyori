import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "STUDIO KOMPASの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "STUDIO KOMPAS（スタジオコンパス）の口コミ・評判を徹底解説。機能改善特化・姿勢矯正のパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "STUDIO KOMPAS（スタジオコンパス）" },
  { label: "タイプ", value: "機能改善特化パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜80,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "機能改善特化 / 姿勢矯正 / 慢性痛改善 / 理学療法士在籍" },
];

const strengths = [
  {
    title: "機能改善に特化した専門的アプローチ",
    desc: "一般的なダイエットや筋肥大ではなく、身体の機能改善に特化。姿勢の歪み、慢性的な腰痛・肩こり、関節の可動域制限など、身体の不調を根本から改善するプログラムを提供しています。",
  },
  {
    title: "理学療法士などの有資格者が在籍",
    desc: "理学療法士やアスレティックトレーナーなどの医療系資格を持つスタッフが在籍。医学的知識に基づいた安全かつ効果的な指導が受けられます。",
  },
  {
    title: "姿勢矯正で見た目も改善",
    desc: "姿勢を整えることで、猫背や反り腰を改善し、見た目の印象も大きく変化します。姿勢が良くなることで基礎代謝も向上し、痩せやすい身体づくりにもつながります。",
  },
];

const merits = [
  {
    title: "身体の不調を根本から改善できる",
    desc: "デスクワークで固まった身体、慢性的な肩こりや腰痛など、日常生活で感じる不調を専門的なアプローチで改善できます。病院や整体では改善しなかった症状が改善したという声もあります。",
  },
  {
    title: "医学的根拠に基づいた安全な指導",
    desc: "理学療法士が在籍しているため、既往歴のある方や関節に不安がある方でも安心してトレーニングを受けられます。",
  },
  {
    title: "日常生活の質（QOL）が向上する",
    desc: "姿勢改善や可動域の拡大により、日常の動作が楽になります。「階段が楽になった」「長時間座っても疲れにくくなった」という声が多数あります。",
  },
];

const demerits = [
  {
    title: "ダイエット・筋肥大目的には不向きな場合がある",
    desc: "機能改善に特化しているため、短期間で大幅な減量や筋肥大を目指す方には物足りない可能性があります。",
  },
  {
    title: "効果を実感するまでに時間がかかることも",
    desc: "身体の根本的な改善を目指すため、即効性よりも継続的な改善を重視しています。効果を実感するまでに2〜3ヶ月程度かかる場合があります。",
  },
  {
    title: "店舗数が少ない",
    desc: "専門性が高いため店舗数が限られています。通える範囲に店舗があるか事前に確認が必要です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額30,000円〜", note: "維持・予防向け" },
  { name: "月8回プラン", duration: "60分/回", price: "月額55,000円〜", note: "改善・スタンダード" },
  { name: "集中改善プラン", duration: "60分/回・月12回", price: "月額80,000円〜", note: "短期集中改善" },
];

const reviewSummary = "STUDIO KOMPASの口コミでは「長年の腰痛が改善した」「姿勢が良くなって見た目が変わった」と身体の変化を実感する声が多く見られます。理学療法士の専門的な指導に対する信頼感も高評価です。一方「ダイエット目的には向かない」「料金が高い」という声もあります。";

const faqItems = [
  { q: "STUDIO KOMPASは医療機関ですか？", a: "いいえ、医療機関ではありません。ただし理学療法士などの有資格者が在籍しており、医学的知識に基づいた指導を行っています。" },
  { q: "慢性的な腰痛でも通えますか？", a: "はい、腰痛改善は得意分野の一つです。ただし、急性期の症状がある場合はまず医療機関の受診をおすすめします。" },
  { q: "ダイエット目的でも利用できますか？", a: "はい、姿勢改善や機能改善を通じて基礎代謝を向上させるアプローチでダイエットにも対応しています。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差がありますが、多くの方が2〜3ヶ月程度で身体の変化を実感されています。" },
  { q: "無料体験はありますか？", a: "初回カウンセリング・体験セッションが用意されています。公式サイトから予約できます。" },
  { q: "高齢者でも利用できますか？", a: "はい、年齢に関係なく利用可能です。身体の状態に合わせた安全なプログラムを提案してもらえます。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function StudioKompasReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "STUDIO KOMPAS" }]} />
      <ReviewSummary gymName="STUDIO KOMPAS" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">STUDIO KOMPASの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          STUDIO KOMPAS（スタジオコンパス）は機能改善・姿勢矯正に特化したパーソナルジムです。理学療法士などの専門家が、身体の不調を根本から改善するプログラムを提供。本記事では、STUDIO KOMPASの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">STUDIO KOMPASの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">STUDIO KOMPASの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">STUDIO KOMPASのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">STUDIO KOMPASの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">STUDIO KOMPASの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">STUDIO KOMPASのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">STUDIO KOMPASが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは初回カウンセリングで、あなたの身体の状態をチェックしてみましょう。</p>
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
