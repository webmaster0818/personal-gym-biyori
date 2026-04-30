import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "base BODYの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "base BODY（ベースボディ）の口コミ・評判を徹底解説。ボディメイク×コンディショニングのパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "base BODY（ベースボディ）" },
  { label: "タイプ", value: "ボディメイク×コンディショニングジム" },
  { label: "料金帯", value: "月額25,000円〜65,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "ボディメイク×コンディショニング / 姿勢改善 / ストレッチ / 食事指導" },
];

const strengths = [
  {
    title: "ボディメイクとコンディショニングの融合",
    desc: "見た目を変えるボディメイクと、身体の機能を整えるコンディショニングを組み合わせた独自のアプローチ。トレーニングだけでなく、ストレッチや姿勢矯正も取り入れた総合的なプログラムです。",
  },
  {
    title: "身体の土台から整える指導方針",
    desc: "いきなりハードなトレーニングを行うのではなく、まず姿勢や柔軟性など身体の土台を整えてからトレーニングに移行。怪我のリスクを抑えながら、効率的に身体を変えていきます。",
  },
  {
    title: "トレーニング後のケアまで一貫サポート",
    desc: "トレーニング後のストレッチやリカバリーケアまでセッションに含まれています。翌日の筋肉痛を軽減し、日常生活への影響を最小限に抑えます。",
  },
];

const merits = [
  {
    title: "見た目と身体の調子の両方が改善する",
    desc: "ボディメイクで見た目が変わるだけでなく、肩こりや腰痛の軽減、疲れにくい身体づくりなど、日常生活の質も向上します。",
  },
  {
    title: "怪我のリスクが少ないトレーニング",
    desc: "身体の状態を確認してからトレーニングを行うため、無理な負荷がかからず怪我のリスクが低い。運動経験が少ない方や関節に不安がある方にも安心です。",
  },
  {
    title: "ストレッチ込みで身体がほぐれる",
    desc: "セッション内にストレッチの時間が確保されているため、デスクワークで凝り固まった身体をリフレッシュできます。",
  },
];

const demerits = [
  {
    title: "ハードなトレーニングを求める方には物足りない可能性",
    desc: "コンディショニングを重視するため、ガンガン追い込むハードなトレーニングを求める方には物足りなく感じることがあります。",
  },
  {
    title: "短期間での劇的な変化は期待しにくい",
    desc: "身体の土台から整えるアプローチのため、即効性よりも中長期的な改善を重視しています。",
  },
  {
    title: "店舗数が限られている",
    desc: "展開店舗数は大手と比べて少なめのため、通える範囲に店舗があるか事前確認が必要です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額25,000円〜", note: "維持・メンテナンス向け" },
  { name: "月8回プラン", duration: "60分/回", price: "月額45,000円〜", note: "週2回・スタンダード" },
  { name: "プレミアムプラン", duration: "90分/回・月8回", price: "月額65,000円〜", note: "コンディショニング強化" },
];

const reviewSummary = "base BODYの口コミでは「ボディメイクだけでなく身体の調子も良くなった」「ストレッチが気持ちいい」と好評です。特にデスクワーカーからの支持が高く、肩こりや腰痛の改善を実感する声が多数。一方で「もっとハードにトレーニングしたい」「店舗が少ない」という意見もあります。";

const faqItems = [
  { q: "base BODYの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "コンディショニングとは何ですか？", a: "身体の機能を整えるためのストレッチ、姿勢矯正、可動域改善などのアプローチです。トレーニングの効果を高め、怪我を予防します。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、身体の状態に合わせて無理のないプログラムを組んでもらえます。初心者の方も多く利用しています。" },
  { q: "肩こりや腰痛の改善にも効果がありますか？", a: "はい、コンディショニングを通じて姿勢改善や筋バランスの調整を行うため、肩こりや腰痛の軽減が期待できます。" },
  { q: "無料体験はありますか？", a: "初回カウンセリング・体験セッションが用意されています。公式サイトから予約できます。" },
  { q: "ウェアのレンタルはありますか？", a: "店舗によりレンタルサービスが異なります。詳細は公式サイトでご確認ください。" },
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
  { name: "STUDIO KOMPAS", href: "/review/studio-kompas/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function BaseBodyReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "base BODY" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">base BODYの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          base BODY（ベースボディ）はボディメイクとコンディショニングを融合したパーソナルジムです。見た目の変化だけでなく、身体の機能改善にも注力。本記事では、base BODYの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">base BODYの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">base BODYの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">base BODYのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">base BODYの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">base BODYの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">base BODYのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">base BODYが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたの身体の状態をチェックしてみましょう。</p>
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
