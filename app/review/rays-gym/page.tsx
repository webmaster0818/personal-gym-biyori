import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "Rays GyMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Rays GyM（レイズジム）パーソナルジムの口コミ・評判を徹底解説。トレーナー指名制の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Rays GyM（レイズジム）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額30,000円〜75,000円程度" },
  { label: "エリア", value: "関東エリアを中心に展開" },
  { label: "特徴", value: "トレーナー指名制 / マンツーマン指導 / 目標別プログラム / 食事サポートあり" },
];

const strengths = [
  {
    title: "トレーナー指名制で相性の良い指導者を選べる",
    desc: "トレーナーを自分で指名できるシステムを採用。体験トレーニングで相性を確認してから、担当トレーナーを決められるため、長期的に安心して通えます。",
  },
  {
    title: "目標に応じた柔軟なプログラム設計",
    desc: "ダイエット、筋力アップ、競技パフォーマンス向上など、利用者の目標に合わせて完全オーダーメイドのプログラムを作成。進捗に応じて都度メニューを調整してくれます。",
  },
  {
    title: "質の高いトレーナー陣",
    desc: "資格保有者やコンテスト入賞経験のあるトレーナーが在籍。専門知識に基づいた的確な指導で、効率的なトレーニングを実現します。",
  },
];

const merits = [
  {
    title: "トレーナーを自分で選べる安心感",
    desc: "相性の良いトレーナーを指名できるため、モチベーション維持につながります。途中でトレーナーを変更することも可能です。",
  },
  {
    title: "経験豊富なトレーナーの指導",
    desc: "資格保有者や実績のあるトレーナーが多数在籍しており、初心者から上級者まで満足できる指導が受けられます。",
  },
  {
    title: "食事指導が充実している",
    desc: "トレーニングだけでなく、食事面からもしっかりサポート。目標達成に向けた栄養アドバイスが含まれています。",
  },
];

const demerits = [
  {
    title: "人気トレーナーは予約が取りにくい",
    desc: "指名制のため人気トレーナーに予約が集中しやすく、希望の時間帯に予約が取れないことがあります。",
  },
  {
    title: "トレーナーによって指導スタイルが異なる",
    desc: "指名制の特性上、トレーナーごとに指導方針が異なります。合わない場合は変更できますが、最初の選択に迷う方もいます。",
  },
  {
    title: "指名料が別途かかる場合がある",
    desc: "一部のトレーナーは指名料が追加で発生する場合があります。料金体系は事前に確認しておきましょう。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額30,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額55,000円〜", note: "週2回ペース・人気プラン" },
  { name: "短期集中コース（16回）", duration: "60分/回", price: "総額140,000円〜", note: "2ヶ月集中" },
];

const reviewSummary = "Rays GyMの口コミでは「トレーナーを選べるのが良い」「指導の質が高い」という声が多く見られます。トレーナーの専門性と人柄に関する高評価が目立ちます。一方で「人気トレーナーの予約が取りにくい」「指名料がかかる場合がある」といった指摘もあります。トレーナーとの相性を重視する方に支持されています。";

const faqItems = [
  { q: "Rays GyMの入会金はいくらですか？", a: "入会金は20,000円〜40,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーナーの指名は無料ですか？", a: "基本的には無料で指名可能ですが、一部人気トレーナーは指名料が発生する場合があります。詳細は公式サイトでご確認ください。" },
  { q: "トレーナーの変更は可能ですか？", a: "はい、トレーナーの変更は可能です。相性が合わないと感じた場合はスタッフに相談してください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者からアスリートまで幅広いレベルに対応しています。経験に合わせたプログラムを組んでもらえます。" },
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
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RaysGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rays GyM" }]} />
      <ReviewSummary gymName="Rays GyM" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Rays GyMの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Rays GyM（レイズジム）はトレーナー指名制を採用したパーソナルトレーニングジムです。相性の良いトレーナーを自分で選び、完全オーダーメイドのプログラムで効率的なボディメイクを目指せます。本記事では、Rays GyMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Rays GyMのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">Rays GyMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったトレーナーを見つけましょう。</p>
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
