import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ELEMENTの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ELEMENT（エレメント）パーソナルジムの口コミ・評判を徹底解説。マシンピラティス×パーソナルトレーニング通い放題の料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ELEMENT（エレメント）" },
  { label: "タイプ", value: "マシンピラティス×パーソナルトレーニング" },
  { label: "料金帯", value: "月額38,280円〜（通い放題）" },
  { label: "エリア", value: "東京・神奈川を中心に展開" },
  { label: "特徴", value: "通い放題 / マシンピラティス / パーソナル融合 / 30分セッション" },
];

const strengths = [
  {
    title: "マシンピラティス×パーソナルの融合",
    desc: "リフォーマーなどのマシンピラティスとパーソナルトレーニングを組み合わせた独自プログラム。姿勢改善・インナーマッスル強化と筋力アップを同時に叶えます。",
  },
  {
    title: "月額制の通い放題で通うほどお得",
    desc: "月額固定で何回でも通える通い放題プランが最大の魅力。週3回以上通えば1回あたりの単価が大幅に下がり、コスパの良いパーソナルトレーニングが実現します。",
  },
  {
    title: "1回30分の効率的なセッション",
    desc: "1回のセッションは30分と短時間。忙しい方でもスキマ時間を活用して通いやすく、短時間でも効果的なトレーニングが受けられます。",
  },
];

const merits = [
  {
    title: "通い放題で費用対効果が高い",
    desc: "回数を気にせず通えるため、トレーニング習慣を身につけやすく、月あたりのコストパフォーマンスが非常に優れています。",
  },
  {
    title: "ピラティスの姿勢改善効果",
    desc: "マシンピラティスにより猫背や反り腰などの姿勢改善が期待でき、見た目の美しさだけでなく腰痛や肩こりの緩和にもつながります。",
  },
  {
    title: "短時間で通いやすい",
    desc: "30分のセッションのため、仕事前や昼休み、仕事帰りなど、忙しいスケジュールの中でも無理なく組み込めます。",
  },
];

const demerits = [
  {
    title: "通い放題を活かさないと割高に",
    desc: "月4回程度しか通わない場合は、都度払いのジムの方がお得になる可能性があります。週2回以上通える方におすすめです。",
  },
  {
    title: "展開エリアが限定的",
    desc: "東京・神奈川中心の展開のため、他の地域からはアクセスが難しい場合があります。",
  },
  {
    title: "ハードな筋トレを求める方には物足りない場合も",
    desc: "ピラティス要素が強いため、バーベルやダンベルを使った本格的な筋力トレーニングを求める方には物足りない可能性があります。",
  },
];

const pricingPlans = [
  { name: "通い放題プラン", duration: "30分/回", price: "月額38,280円〜", note: "回数無制限" },
  { name: "月8回プラン", duration: "30分/回", price: "月額28,600円〜", note: "週2回ペース" },
  { name: "デイタイムプラン", duration: "30分/回", price: "月額32,780円〜", note: "平日日中限定・通い放題" },
];

const reviewSummary = "ELEMENTの口コミでは「通い放題でコスパが良い」「ピラティスで姿勢が改善された」という声が目立ちます。30分セッションで手軽に通える点も高評価です。一方で「店舗が少ない」「予約が埋まりやすい」といった声も見られます。運動習慣をしっかり身につけたい方に特に人気です。";

const faqItems = [
  { q: "ELEMENTの入会金はいくらですか？", a: "入会金は33,000円です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "ピラティス未経験でも大丈夫ですか？", a: "はい、未経験の方がほとんどです。トレーナーが一から丁寧に指導するため、初心者でも安心して始められます。" },
  { q: "通い放題は本当に何回でも通えますか？", a: "はい、1日1回の制限はありますが、月の回数制限はありません。予約制のため、空き枠があれば何回でも通えます。" },
  { q: "男性も利用できますか？", a: "はい、男女ともに利用可能です。男性会員も増えています。" },
  { q: "体験トレーニングはありますか？", a: "はい、初回体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "最低契約期間が設定されている場合があります。詳細は入会時にご確認ください。" },
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

export default function ElementReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ELEMENT" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ELEMENTの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ELEMENT（エレメント）はマシンピラティスとパーソナルトレーニングを融合させた<span className="font-bold bg-yellow-100 px-0.5">通い放題</span>型のジムです。30分の短時間セッションで効率的にボディメイクができるため、忙しい方にも人気。本記事では、ELEMENTの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ELEMENTの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ELEMENTの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ELEMENTのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ELEMENTの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ELEMENTの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ELEMENTのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">ELEMENTが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは体験トレーニングで、ピラティス×パーソナルの効果を体感してみましょう。</p>
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
