import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ASPIの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ASPI（アスピ）パーソナルジムの口コミ・評判を徹底解説。米国資格トレーナー・科学的アプローチの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ASPI（アスピ）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額7,600円〜109,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "米国資格保有トレーナー / 科学的アプローチ / 低価格帯プランあり / 食事指導付き" },
];

const strengths = [
  {
    title: "全トレーナーが米国資格を保有",
    desc: "NSCA-CPTやNASMなどの米国認定パーソナルトレーナー資格を全トレーナーが保有。エビデンスに基づいた質の高い指導が受けられます。",
  },
  {
    title: "科学的根拠に基づくプログラム",
    desc: "最新のスポーツ科学や栄養学の知見を取り入れたプログラム設計。感覚的な指導ではなく、データと科学に基づいたアプローチで効率的な結果を目指します。",
  },
  {
    title: "月額7,600円からの低価格プラン",
    desc: "パーソナルジムとしては非常にリーズナブルな月額7,600円からのプランを用意。質の高い指導をより多くの人が利用できる価格設定です。",
  },
];

const merits = [
  {
    title: "トレーナーの質が高い",
    desc: "米国資格の取得を全トレーナーに義務づけているため、指導の質にバラつきが少なく、安定して高品質なトレーニングが受けられます。",
  },
  {
    title: "低価格から始められる",
    desc: "月額7,600円からのマンスリープランがあり、パーソナルジムのハードルを大幅に下げています。まずは気軽に試したい方にも最適です。",
  },
  {
    title: "オンライン食事指導が充実",
    desc: "LINEを使った食事報告・アドバイスが受けられ、日常の食事管理をしっかりサポートしてくれます。",
  },
];

const demerits = [
  {
    title: "店舗が東京中心",
    desc: "東京都内を中心とした展開のため、東京以外にお住まいの方は通いにくい場合があります。",
  },
  {
    title: "低価格プランは回数が少ない",
    desc: "月額7,600円のプランは月1〜2回程度のため、週2回以上通いたい場合は上位プランの検討が必要です。",
  },
  {
    title: "人気トレーナーの予約が取りにくい場合も",
    desc: "質の高いトレーナーに人気が集中し、希望の時間帯に予約が取れないことがあります。",
  },
];

const pricingPlans = [
  { name: "マンスリープランA", duration: "30分/回", price: "月額7,600円〜", note: "月2回" },
  { name: "マンスリープランB", duration: "30分/回", price: "月額15,200円〜", note: "月4回" },
  { name: "シェイプアップコース", duration: "50分/回", price: "総額109,000円〜", note: "7回・集中プラン" },
];

const reviewSummary = "ASPIの口コミでは「トレーナーの知識量がすごい」「科学的なアプローチで納得感がある」「低価格プランが嬉しい」という声が多く見られます。一方で「低価格プランだけでは回数が足りない」「店舗が東京に偏っている」といった指摘もあります。";

const faqItems = [
  { q: "ASPIの入会金はいくらですか？", a: "入会金は11,000円〜55,000円程度です。プランによって異なります。キャンペーンで割引になることもあります。" },
  { q: "ASPIのトレーナーはどんな資格を持っていますか？", a: "NSCA-CPT、NASM-CPTなどの米国認定パーソナルトレーナー資格を全トレーナーが保有しています。" },
  { q: "運動初心者でも大丈夫ですか？", a: "はい、科学的根拠に基づいた安全なプログラムで、初心者でも安心してトレーニングを始められます。" },
  { q: "食事指導はどのように行われますか？", a: "LINEでの食事報告に対してトレーナーからアドバイスが受けられます。プランによって内容が異なります。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "月の途中から入会できますか？", a: "はい、月の途中からでも入会可能です。初月は日割り計算になる場合があります。" },
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
  { name: "1to1", href: "/review/1to1/" },
];

export default function AspiReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ASPI" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ASPIの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ASPI（アスピ）は全トレーナーが米国資格を保有する科学的アプローチのパーソナルジムです。月額7,600円からの低価格プランも用意されており、高品質な指導をリーズナブルに受けられます。本記事では、ASPIの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASPIの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASPIの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ASPIのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASPIの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASPIの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ASPIのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">ASPIが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、科学的なアプローチを体験してみましょう。</p>
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
