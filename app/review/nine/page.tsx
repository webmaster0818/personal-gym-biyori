import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "NINEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "NINE（ナイン）パーソナルジムの口コミ・評判を徹底解説。トレーニング×食事指導の総合サポート、料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "NINE（ナイン）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額35,000円〜90,000円程度" },
  { label: "エリア", value: "東京・大阪を中心に展開" },
  { label: "特徴", value: "トレーニング×食事指導 / 科学的アプローチ / 完全マンツーマン / リバウンド防止" },
];

const strengths = [
  {
    title: "トレーニングと食事指導の両輪で結果を出す",
    desc: "NINEではトレーニング指導と食事管理を一体化したプログラムを提供。運動だけでなく食事面からも徹底サポートすることで、短期間での目標達成とリバウンド防止を実現しています。",
  },
  {
    title: "科学的根拠に基づいたトレーニングメソッド",
    desc: "最新のスポーツ科学に基づいたトレーニングプログラムを採用。体組成データや筋力テストの結果をもとに、最適な負荷とメニューを設計します。",
  },
  {
    title: "リバウンドしにくい身体づくりを重視",
    desc: "短期的な減量だけでなく、基礎代謝を高めてリバウンドしにくい身体を作ることを重視。卒業後も自分でトレーニングを続けられるよう知識の提供にも力を入れています。",
  },
];

const merits = [
  {
    title: "食事指導が本格的で実践しやすい",
    desc: "管理栄養士監修の食事プランが提供され、コンビニやスーパーで手に入る食材を使った現実的なメニュー提案が好評です。極端な食事制限ではなく、継続可能な食習慣の構築を目指します。",
  },
  {
    title: "トレーナーの質が高い",
    desc: "有資格者のトレーナーが在籍しており、解剖学・栄養学の知識を持ったスタッフが指導にあたります。フォームの修正や怪我の予防にも配慮した指導が受けられます。",
  },
  {
    title: "卒業後のフォローアップ体制",
    desc: "プログラム終了後もフォローアップセッションや相談窓口が用意されており、リバウンド防止のためのサポートが充実しています。",
  },
];

const demerits = [
  {
    title: "料金がやや高め",
    desc: "トレーニングと食事指導を組み合わせた総合プログラムのため、他のパーソナルジムと比較するとやや高額です。ただし、食事指導込みと考えればコスパは悪くありません。",
  },
  {
    title: "店舗数が限定的",
    desc: "展開エリアが都市部に限られており、地方在住の方は通いにくい可能性があります。",
  },
  {
    title: "食事報告が負担に感じる場合がある",
    desc: "毎食の食事報告が推奨されるため、面倒に感じる方もいます。ただし、これが成果につながる重要な要素でもあります。",
  },
];

const pricingPlans = [
  { name: "スタンダードプラン", duration: "60分/回・全16回", price: "総額200,000円〜", note: "2ヶ月集中" },
  { name: "プレミアムプラン", duration: "60分/回・全24回", price: "総額280,000円〜", note: "3ヶ月コース" },
  { name: "メンテナンスプラン", duration: "60分/回・月4回", price: "月額35,000円〜", note: "卒業後の継続向け" },
];

const reviewSummary = "NINEの口コミでは「食事指導が本格的で結果が出た」「トレーナーの知識が豊富」と高評価が目立ちます。特にリバウンド防止に重点を置いている点が支持されています。一方で「料金が高い」「食事報告が面倒」という声もあります。総合的な満足度は高い傾向です。";

const faqItems = [
  { q: "NINEの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "食事指導はどのように行われますか？", a: "LINEやアプリを通じて毎食の写真を送り、管理栄養士やトレーナーからフィードバックを受ける形式が一般的です。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、初心者の方も多数利用しています。基礎的なフォームから丁寧に指導してもらえます。" },
  { q: "プログラム終了後のサポートはありますか？", a: "卒業後のメンテナンスプランやフォローアップセッションが用意されています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリングが用意されています。体組成測定やトレーニング体験が含まれる場合もあります。" },
  { q: "途中解約はできますか？", a: "契約条件に応じて途中解約が可能です。詳細は契約時にご確認ください。" },
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
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function NineReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "NINE" }]} />
      <ReviewSummary gymName="NINE" />
      <GymCta slug="nine" name="NINE" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">NINEの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          NINE（ナイン）はトレーニングと<span className="font-bold bg-yellow-100 px-0.5">食事指導</span>を一体化した総合パーソナルジムです。科学的根拠に基づいたトレーニングメソッドと本格的な食事管理で、リバウンドしにくい身体づくりを目指します。本記事では、NINEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">NINEの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">NINEの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">NINEのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">NINEの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">NINEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="nine" name="NINE" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">NINEのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">NINEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
