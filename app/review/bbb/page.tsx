import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "BBB（トリプルビー）の口コミ・評判は？料金・効果を徹底解説【2026年】",
  description:
    "BBB（トリプルビー）の口コミ・評判を徹底解説。ボディメイク特化パーソナルジムの料金の目安、体組成分析・食事指導の効果、良い口コミ・気になる口コミの傾向、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "BBB（トリプルビー）" },
  { label: "タイプ", value: "ボディメイク特化パーソナルジム" },
  { label: "料金帯", value: "月額25,000円〜70,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "ボディメイク特化 / 体組成分析 / 食事指導 / 完全個室" },
];

const strengths = [
  {
    title: "ボディメイクに特化した独自メソッド",
    desc: "単なるダイエットではなく、理想のボディラインを作ることに特化した独自のトレーニングメソッドを採用。体脂肪を落としながら必要な筋肉をつけるバランスの取れたアプローチが特徴です。",
  },
  {
    title: "定期的な体組成分析で進捗を可視化",
    desc: "高精度の体組成計を使用し、体脂肪率・筋肉量・基礎代謝量などを定期的に測定。数値で変化を確認できるため、モチベーション維持と目標達成に役立ちます。",
  },
  {
    title: "完全個室でのマンツーマン指導",
    desc: "完全個室のトレーニングルームでマンツーマン指導を実施。他の利用者を気にすることなく、集中してトレーニングに取り組めます。",
  },
];

const merits = [
  {
    title: "見た目の変化を実感しやすい",
    desc: "ボディメイクに特化しているため、体重だけでなくボディラインの変化を重視。体重計の数字以上に見た目が変わったと実感する方が多いです。",
  },
  {
    title: "データに基づいた科学的なアプローチ",
    desc: "体組成データを基にトレーニングメニューや食事内容を最適化。感覚ではなくデータに基づいた指導のため、効率的に身体を変えていけます。",
  },
  {
    title: "食事指導で生活習慣が変わる",
    desc: "プログラム期間中の食事指導を通じて、健康的な食習慣が身につきます。卒業後もリバウンドしにくい食生活を維持できるようになります。",
  },
];

const demerits = [
  {
    title: "料金はパーソナルジムの平均的な水準",
    desc: "低価格帯のパーソナルジムと比較するとやや高めです。ただし、体組成分析や食事指導込みのため、総合的なコスパは悪くありません。",
  },
  {
    title: "店舗数が限られている",
    desc: "東京都内中心の展開で、地方には店舗がありません。通える範囲に店舗があるか確認が必要です。",
  },
  {
    title: "食事制限が厳しいと感じる場合がある",
    desc: "ボディメイクの成果を出すために、食事の管理がやや厳しめに設定されることがあります。食事の自由度を求める方には負担に感じる場合もあります。",
  },
];

const pricingPlans = [
  { name: "ベーシックプラン", duration: "50分/回・月8回", price: "月額48,000円〜", note: "食事指導込み" },
  { name: "スタンダードプラン", duration: "50分/回・全16回", price: "総額180,000円〜", note: "2ヶ月集中" },
  { name: "プレミアムプラン", duration: "75分/回・全24回", price: "総額280,000円〜", note: "3ヶ月集中+アフターフォロー" },
];

const reviewSummary = "BBBの口コミでは「体組成分析で変化が数値で分かるのが良い」「見た目が大きく変わった」と高評価が多数。ボディメイクの成果を実感している利用者が多い傾向です。一方で「食事管理が厳しい」「料金が安くはない」という声もあります。";

const faqItems = [
  { q: "BBBの入会金はいくらですか？", a: "入会金は30,000円程度です。キャンペーンで割引になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "体組成分析はどのくらいの頻度で行いますか？", a: "月1〜2回程度、定期的に測定を行います。トレーニングの効果を数値で確認できます。" },
  { q: "食事指導は厳しいですか？", a: "目標に応じて食事プランを調整します。無理な制限ではなく、継続できる範囲での改善を提案してもらえます。" },
  { q: "女性でも通えますか？", a: "はい、女性の利用者も多く在籍しています。完全個室のため安心してトレーニングに集中できます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体組成測定が用意されています。公式サイトから予約できます。" },
  { q: "卒業後のサポートはありますか？", a: "プランによって卒業後のフォローアップセッションが含まれています。メンテナンスプランへの切り替えも可能です。" },
  { q: "BBB（トリプルビー）の口コミ・評判は良いですか？", a: "「体組成分析で変化が数値で分かる」「見た目が大きく変わった」という好意的な口コミが多い傾向です。一方で「食事管理が厳しい」「料金が安くはない」という声もあります。最新の個別の口コミはGoogleマップでご確認ください。" },
  { q: "BBBはどのくらいで効果が出ますか？", a: "効果には個人差があります。多くのプランが2〜3ヶ月の集中型で組まれており、その期間で見た目の変化を実感する声が見られます。具体的な目標と期間はカウンセリングで相談することをおすすめします。" },
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
  { name: "ARISANFIT", href: "/review/arisanfit/" },
];

export default function BbbReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BBB" }]} />
      <ReviewSummary gymName="BBB" />
      <GymCta slug="bbb" name="BBB" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">BBB（トリプルビー）の口コミ・評判は？料金・効果を徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          BBB（トリプルビー）はボディメイクに特化したパーソナルジムです。体組成分析による科学的なアプローチと、<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>での<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>が特徴。本記事では、BBBの口コミ・評判の傾向、料金の目安、メリット・デメリットを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：BBB（トリプルビー）はこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>体重より見た目・ボディライン</strong>を変えたい人（ボディメイク特化）</li>
            <li>・体組成分析の<strong>数値で変化を確認</strong>しながら進めたい人</li>
            <li>・口コミは「見た目が変わった」「数値で分かる」が中心。一方「食事管理が厳しい」という声も</li>
            <li>・料金・入会金・店舗は変動するため<strong>公式サイトでの確認が必要</strong></li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は一般的な目安です。最新は公式でご確認ください。比較は<a href="/compare/" className="text-teal-600 underline">おすすめ比較</a>もご覧ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BBBの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BBBの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">BBBのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BBBの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BBBの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="bbb" name="BBB" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BBBのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">BBBが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたの体組成を測定してみましょう。</p>
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
