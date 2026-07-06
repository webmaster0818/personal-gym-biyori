import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "UNDEUX SUPERBODY LIFEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "UNDEUX SUPERBODY LIFE（アンドゥスーパーボディライフ）の口コミ・評判を徹底解説。ライフスタイル重視の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "UNDEUX SUPERBODY LIFE（アンドゥスーパーボディライフ）" },
  { label: "タイプ", value: "ライフスタイル型パーソナルジム" },
  { label: "料金帯", value: "月額20,000円〜60,000円程度" },
  { label: "エリア", value: "東京・大阪を中心に展開" },
  { label: "特徴", value: "UNDEUX派生 / ライフスタイル重視 / 長期継続型 / 食事管理付き" },
];

const strengths = [
  {
    title: "ライフスタイルに溶け込む長期継続型プログラム",
    desc: "短期集中型ではなく、日常生活に無理なく運動を取り入れる長期継続型のアプローチを採用。生活習慣そのものを改善し、リバウンドしにくい体づくりを目指します。",
  },
  {
    title: "UNDEUX品質をよりリーズナブルに",
    desc: "UNDEUX SUPERBODYの指導ノウハウを活かしながら、より手頃な料金で利用できるライフスタイル向けプラン。コストを抑えつつ質の高いトレーニングが受けられます。",
  },
  {
    title: "食事・睡眠・運動のトータルサポート",
    desc: "トレーニングだけでなく、食事習慣や睡眠の質など生活全体を見直すトータルサポートを提供。健康的なライフスタイルの構築をトレーナーと一緒に目指せます。",
  },
];

const merits = [
  {
    title: "リーズナブルな料金で継続しやすい",
    desc: "UNDEUX SUPERBODYの派生ブランドとして、品質を維持しながら手頃な価格設定を実現。長期的に通い続けやすい料金体系が魅力です。",
  },
  {
    title: "生活習慣全体の改善をサポート",
    desc: "運動だけでなく食事・睡眠・ストレス管理など、生活全体をトータルでケアしてもらえます。根本的な体質改善につながります。",
  },
  {
    title: "UNDEUX品質のトレーニングノウハウ",
    desc: "実績のあるUNDEUX SUPERBODYの指導メソッドをベースにしているため、トレーニングの質が担保されています。",
  },
];

const demerits = [
  {
    title: "短期で結果を求める方には不向き",
    desc: "ライフスタイル重視の長期型アプローチのため、2ヶ月で大幅減量したい方には不向きです。じっくり取り組みたい方向けのサービスです。",
  },
  {
    title: "展開エリアが限られている",
    desc: "東京・大阪を中心とした展開で、地方には店舗が少ない状況です。今後の拡大に期待されます。",
  },
  {
    title: "トレーニング頻度が少なめのプランもある",
    desc: "月額を抑えたプランでは月4回程度のため、頻繁に通いたい方は上位プランの検討が必要です。",
  },
];

const pricingPlans = [
  { name: "ライトプラン（月4回）", duration: "50分/回", price: "月額20,000円〜", note: "週1回ペース" },
  { name: "スタンダードプラン（月8回）", duration: "50分/回", price: "月額38,000円〜", note: "週2回ペース・人気プラン" },
  { name: "プレミアムプラン（月12回）", duration: "50分/回", price: "月額55,000円〜", note: "週3回ペース" },
];

const reviewSummary = "UNDEUX SUPERBODY LIFEの口コミでは「無理なく続けられる」「生活習慣が変わった」という声が多く見られます。UNDEUXの品質を維持しながらリーズナブルな点も好評です。一方で「短期で劇的に痩せたい人には物足りない」「店舗がまだ少ない」といった指摘もあります。長期的に健康的な体を目指す方に支持されています。";

const faqItems = [
  { q: "UNDEUX SUPERBODY LIFEの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーン期間中は割引や無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "UNDEUX SUPERBODYとの違いは何ですか？", a: "UNDEUX SUPERBODY LIFEはライフスタイル重視・長期継続型のプランが中心で、より手頃な料金設定になっています。指導ノウハウはUNDEUX SUPERBODYがベースです。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差はありますが、2〜3ヶ月程度で体の変化を実感する方が多いです。長期継続型のため、焦らず取り組むことが推奨されています。" },
  { q: "食事制限は厳しいですか？", a: "極端な制限は行わず、日常に取り入れやすい食事改善を提案しています。無理のない範囲で生活習慣を見直します。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "月額制のため、基本的に違約金はありません。退会を希望する場合は前月までに申告が必要です。" },
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
  { name: "UNDEUX", href: "/review/undeux/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function UndeuxLifeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "UNDEUX SUPERBODY LIFE" }]} />
      <ReviewSummary gymName="UNDEUX SUPERBODY LIFE" />
      <GymCta slug="undeux-life" name="UNDEUX SUPERBODY LIFE" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          UNDEUX SUPERBODY LIFEの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          UNDEUX SUPERBODY LIFE（アンドゥスーパーボディライフ）は、UNDEUX SUPERBODYから派生したライフスタイル重視のパーソナルジムです。短期集中ではなく長期継続型のアプローチで、日常生活に運動を取り入れながら健康的な体づくりを目指します。本記事では、UNDEUX SUPERBODY LIFEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEの基本情報</h2>
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

        {/* 3つの強み */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEのメリット・デメリット</h2>
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

        {/* 料金 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEの料金</h2>
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

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="undeux-life" name="UNDEUX SUPERBODY LIFE" />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODY LIFEのよくある質問</h2>
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">UNDEUX SUPERBODY LIFEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたのライフスタイルに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        {/* 関連ジム */}
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
