import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ピラティス&ジム1to1の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ピラティス&ジム1to1の口コミ・評判を徹底解説。ピラティス×パーソナルトレーニング融合の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ピラティス&ジム1to1" },
  { label: "タイプ", value: "ピラティス×パーソナルトレーニング融合ジム" },
  { label: "料金帯", value: "月額20,000円〜80,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "ピラティス×筋トレ融合 / マンツーマン / 姿勢改善 / ボディメイク" },
];

const strengths = [
  {
    title: "ピラティスとパーソナルトレーニングの融合",
    desc: "ピラティスの体幹・柔軟性トレーニングと、パーソナルジムの筋力トレーニングを組み合わせた独自プログラム。両方の長所を活かした効率的なボディメイクが可能です。",
  },
  {
    title: "姿勢改善からボディメイクまで対応",
    desc: "ピラティスの専門知識を持つトレーナーが、姿勢の歪みを整えながら筋力をつけるプログラムを設計。見た目だけでなく体の機能改善にも効果的です。",
  },
  {
    title: "マンツーマンで丁寧な指導",
    desc: "1対1の完全マンツーマンレッスンで、一人ひとりの体の状態に合わせた細やかな指導が受けられます。正しいフォームを身につけることで効果を最大化します。",
  },
];

const merits = [
  {
    title: "ピラティスと筋トレの良いとこ取り",
    desc: "ピラティスだけでは物足りない、筋トレだけでは柔軟性が不安という方に最適。一度のセッションで両方の要素を取り入れられます。",
  },
  {
    title: "姿勢改善で見た目の印象が変わる",
    desc: "体重の変化だけでなく、姿勢の改善により見た目の印象が大きく変わります。猫背やO脚など姿勢の悩みにも対応しています。",
  },
  {
    title: "怪我のリスクが低い安全なトレーニング",
    desc: "ピラティスの要素を取り入れることで、関節への負担を抑えた安全なトレーニングが可能。運動が苦手な方やリハビリ目的の方にも適しています。",
  },
];

const demerits = [
  {
    title: "ハードな筋トレを求める方には不向き",
    desc: "ピラティス要素が含まれるため、ガッツリ重量を扱いたい上級者には物足りない場合があります。",
  },
  {
    title: "店舗数が少ない",
    desc: "ピラティス×パーソナルの融合型ジムはまだ珍しく、店舗数が限られています。通える範囲にあるか事前に確認しましょう。",
  },
  {
    title: "効果を実感するまでに時間がかかることも",
    desc: "姿勢改善や体幹強化は即効性があるものではなく、継続的な取り組みが必要です。短期間での劇的な変化を求める方には向いていないことも。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額28,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額50,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中コース（2ヶ月）", duration: "60分/回", price: "総額160,000円〜", note: "16回集中" },
];

const reviewSummary = "1to1の口コミでは「ピラティスと筋トレの両方ができるのが嬉しい」「姿勢が改善して周りから褒められた」という声が多く見られます。トレーナーの知識の深さも好評です。一方で「もっと筋トレ寄りのメニューも欲しい」「店舗が少ない」といった指摘もあります。";

const faqItems = [
  { q: "ピラティス経験がなくても大丈夫ですか？", a: "はい、初心者でも安心して始められます。マンツーマンで丁寧に指導してもらえます。" },
  { q: "1to1の入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることもあります。" },
  { q: "ピラティスマシンは使えますか？", a: "店舗によりリフォーマーなどのピラティスマシンを完備しています。詳細は各店舗にお問い合わせください。" },
  { q: "男性も通えますか？", a: "はい、男女ともに利用可能です。男性のボディメイクや姿勢改善にも対応しています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験レッスンが用意されています。公式サイトから予約可能です。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差はありますが、姿勢の変化は2〜3ヶ月、ボディラインの変化は3〜6ヶ月程度が目安です。" },
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
  { name: "ASPI", href: "/review/aspi/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ASmake", href: "/review/asmake/" },
];

export default function OneToOneReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "1to1" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ピラティス&ジム1to1の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ピラティス&ジム1to1は、ピラティスとパーソナルトレーニングを融合させた新しいタイプのジムです。姿勢改善から本格的なボディメイクまで、一人ひとりの目標に合わせたマンツーマンプログラムを提供しています。本記事では、1to1の料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">1to1の基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">1to1の3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">1to1のメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">1to1の料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">1to1の口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">1to1のよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">1to1が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料体験レッスンで、ピラティス×筋トレの新感覚を体験してみましょう。</p>
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
