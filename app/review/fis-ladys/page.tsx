import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "fis.lady'sの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "fis.lady's（フィスレディース）の口コミ・評判を徹底解説。女性専用・ダイエット特化パーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "fis.lady's（フィスレディース）" },
  { label: "タイプ", value: "女性専用ダイエット特化パーソナルジム" },
  { label: "料金帯", value: "月額20,000円〜55,000円程度" },
  { label: "エリア", value: "大阪・関西エリアを中心に展開" },
  { label: "特徴", value: "女性専用 / ダイエット特化 / 低価格 / 食事指導込み" },
];

const strengths = [
  {
    title: "女性専用でダイエットに特化",
    desc: "女性のダイエットに特化したプログラムを提供。女性ホルモンのバランスや生理周期を考慮したトレーニングメニューで、女性ならではの悩みに寄り添った指導が受けられます。",
  },
  {
    title: "関西エリア最安級の料金設定",
    desc: "月額20,000円〜という関西エリアのパーソナルジムでは最安級の料金設定。食事指導込みの料金のため、追加費用を心配する必要がありません。",
  },
  {
    title: "食事指導込みで総合的にサポート",
    desc: "全プランに食事指導が含まれており、トレーニングと食事の両面からダイエットをサポート。管理栄養士監修の食事プランで、健康的に痩せることを目指します。",
  },
];

const merits = [
  {
    title: "ダイエット成功率が高い",
    desc: "ダイエットに特化したプログラムのため、多くの利用者が目標体重の達成を実感しています。食事指導とトレーニングの相乗効果で、短期間での成果が期待できます。",
  },
  {
    title: "食事指導が追加料金なし",
    desc: "他社では別料金になることが多い食事指導がプランに含まれています。トータルで見るとコストパフォーマンスの高さが際立ちます。",
  },
  {
    title: "女性トレーナーが在籍",
    desc: "女性トレーナーが在籍しているため、身体の悩みや不安を気軽に相談できます。女性ならではの視点でのアドバイスが好評です。",
  },
];

const demerits = [
  {
    title: "関西エリア中心の展開",
    desc: "大阪・関西エリアが中心のため、関東や他地域在住の方は利用が難しい状況です。",
  },
  {
    title: "筋肥大目的には向かない",
    desc: "ダイエットに特化しているため、筋肉を大きくしたい方や本格的なウェイトトレーニングを求める方には物足りない可能性があります。",
  },
  {
    title: "男性は利用できない",
    desc: "完全女性専用のため、男性の利用はできません。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "50分/回・月4回", price: "月額20,000円〜", note: "食事指導込み" },
  { name: "スタンダードプラン", duration: "50分/回・月8回", price: "月額38,000円〜", note: "食事指導込み・人気" },
  { name: "集中ダイエットプラン", duration: "50分/回・全16回", price: "総額110,000円〜", note: "2ヶ月集中・食事指導込み" },
];

const reviewSummary = "fis.lady'sの口コミでは「女性専用で安心」「食事指導込みでこの価格は安い」と好評です。特にダイエット目的の女性から「しっかり結果が出た」という声が多数。一方で「関西にしか店舗がない」「設備がコンパクト」という意見もあります。";

const faqItems = [
  { q: "fis.lady'sは女性専用ですか？", a: "はい、完全女性専用のパーソナルジムです。男性は利用できません。" },
  { q: "入会金はいくらですか？", a: "入会金は10,000円〜20,000円程度です。キャンペーンで無料になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "食事指導はどのように行われますか？", a: "LINEなどで食事内容を報告し、トレーナーからフィードバックを受ける形式が一般的です。" },
  { q: "どのくらいで効果が出ますか？", a: "個人差がありますが、2ヶ月程度で体重・体脂肪率の変化を実感される方が多いです。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "大阪以外に店舗はありますか？", a: "関西エリアを中心に展開しています。最新の店舗情報は公式サイトでご確認ください。" },
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
  { name: "TOKIEL", href: "/review/tokiel/" },
  { name: "LALA FIT", href: "/review/lala-fit/" },
  { name: "RIZAP", href: "/review/rizap/" },
];

export default function FisLadysReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "fis.lady's" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">fis.lady&apos;sの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          fis.lady&apos;s（フィスレディース）は女性専用・ダイエット特化のパーソナルジムです。関西エリアを中心に展開し、食事指導込みの低価格な料金設定が特徴。本記事では、fis.lady&apos;sの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">fis.lady&apos;sの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">fis.lady&apos;sの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">fis.lady&apos;sのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">fis.lady&apos;sの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">fis.lady&apos;sの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">fis.lady&apos;sのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">fis.lady&apos;sが気になった方へ</h2>
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
