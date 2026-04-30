import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RACINE（ラシーヌ）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "RACINE（ラシーヌ）女性専用パーソナルジムの口コミ・評判を徹底解説。ボディメイク特化の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "RACINE（ラシーヌ）" },
  { label: "タイプ", value: "女性専用パーソナルジム" },
  { label: "料金帯", value: "月額35,000円〜80,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "女性専用 / ボディメイク特化 / 完全個室 / 栄養指導付き" },
];

const strengths = [
  {
    title: "女性専用で安心のトレーニング環境",
    desc: "会員もトレーナーも女性のみの環境で、人目を気にせずトレーニングに集中できます。女性特有の体の悩みにも理解のあるスタッフが対応してくれます。",
  },
  {
    title: "ボディメイクに特化したプログラム",
    desc: "単なる減量ではなく、美しいボディラインを作ることに特化。くびれ作りやヒップアップなど、女性が求めるスタイルに合わせたトレーニングメニューを提供しています。",
  },
  {
    title: "栄養士監修の食事指導",
    desc: "管理栄養士が監修した食事プログラムで、トレーニングと食事の両面からボディメイクをサポート。美容と健康を両立する食事アドバイスが受けられます。",
  },
];

const merits = [
  {
    title: "女性専用で周囲の目が気にならない",
    desc: "男性会員がいないため、体型やトレーニングフォームを気にせず集中できます。女性同士ならではのリラックスした雰囲気で通えます。",
  },
  {
    title: "美容面も考慮したプログラム",
    desc: "筋力アップだけでなく、肌質改善やむくみ解消など美容面も考慮したトレーニングと食事指導が受けられます。",
  },
  {
    title: "完全個室でプライバシーを確保",
    desc: "トレーニングルームは完全個室のため、自分だけの空間で集中して取り組めます。",
  },
];

const demerits = [
  {
    title: "男性は利用できない",
    desc: "女性専用のため、カップルや夫婦で通いたい方には不向きです。男性向けのサービスは別途探す必要があります。",
  },
  {
    title: "店舗数が限られている",
    desc: "展開エリアがまだ限定的で、通える範囲に店舗がない場合があります。今後の店舗展開に期待されます。",
  },
  {
    title: "料金がやや高めの設定",
    desc: "女性専用の環境維持やきめ細やかなサービスのため、一般的なパーソナルジムよりやや高めの料金設定になっています。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額35,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額60,000円〜", note: "週2回ペース・人気プラン" },
  { name: "集中ボディメイクコース", duration: "50分/回", price: "総額200,000円〜", note: "2ヶ月16回" },
];

const reviewSummary = "RACINEの口コミでは「女性専用で安心して通える」「ボディラインが変わった」という声が多く見られます。栄養士による食事指導の質の高さも好評です。一方で「料金が高い」「店舗が少ない」といった指摘もあります。女性特化のきめ細やかなサービスに満足する方が多い傾向です。";

const faqItems = [
  { q: "RACINEの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーナーは全員女性ですか？", a: "はい、女性専用ジムのためトレーナーも女性が担当します。女性の体に詳しいトレーナーが指導してくれます。" },
  { q: "産後ダイエットにも対応していますか？", a: "はい、産後のボディメイクプログラムにも対応しています。体の回復状況に合わせたメニューを組んでもらえます。" },
  { q: "食事制限は厳しいですか？", a: "極端な制限ではなく、美容と健康を両立する食事プランを提案しています。管理栄養士監修のアドバイスが受けられます。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "プランによって異なります。月額制プランの場合は基本的に違約金なしで退会可能です。詳細は入会時にご確認ください。" },
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
  { name: "UNDEUX", href: "/review/undeux/" },
  { name: "FIS LADY'S", href: "/review/fis-ladys/" },
  { name: "Curves", href: "/review/curves/" },
];

export default function RacineReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RACINE" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RACINE（ラシーヌ）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          RACINE（ラシーヌ）は女性専用・ボディメイク特化のパーソナルジムです。女性トレーナーによるマンツーマン指導と管理栄養士監修の食事プログラムで、美しいボディラインづくりをサポートしています。本記事では、RACINEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RACINEの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RACINEの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">RACINEのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RACINEの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RACINEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RACINEのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">RACINEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
