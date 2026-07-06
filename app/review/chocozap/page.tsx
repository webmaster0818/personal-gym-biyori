import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "chocoZAP（チョコザップ）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "chocoZAP（チョコザップ）の口コミ・評判を徹底解説。RIZAP監修・月額3,278円のコンビニジム、24時間セルフ型の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "chocoZAP（チョコザップ）" },
  { label: "タイプ", value: "24時間セルフ型コンビニジム" },
  { label: "料金帯", value: "月額3,278円（税込）" },
  { label: "エリア", value: "全国1,700店舗以上" },
  { label: "特徴", value: "RIZAP監修 / 24時間365日 / 着替え不要 / セルフエステ・脱毛付き" },
];

const strengths = [
  {
    title: "月額3,278円の圧倒的コスパ",
    desc: "RIZAP監修のトレーニングマシンを月額3,278円で使い放題。セルフエステやセルフ脱毛も追加料金なしで利用でき、他のジムと比較して圧倒的なコストパフォーマンスを実現しています。",
  },
  {
    title: "24時間365日いつでも通える",
    desc: "早朝でも深夜でも、自分のライフスタイルに合わせていつでも利用可能。仕事帰りや隙間時間に気軽に立ち寄れる「コンビニジム」というコンセプトが多忙な方に支持されています。",
  },
  {
    title: "着替え不要・1日5分からOK",
    desc: "普段着のままトレーニングできるため、ジム通いのハードルが極めて低い設計です。短時間でも効果的なRIZAPメソッドに基づいたプログラムが用意されています。",
  },
];

const merits = [
  {
    title: "業界最安水準の月額料金",
    desc: "月額3,278円で全店舗使い放題。入会金・事務手数料も頻繁にキャンペーンで無料になるため、ジム初心者でも気軽に始められます。",
  },
  {
    title: "セルフエステ・脱毛が追加料金なし",
    desc: "通常数千円〜数万円かかるエステマシンや脱毛マシンが追加料金なしで利用可能。トレーニング以外の美容ニーズもカバーしています。",
  },
  {
    title: "全国どの店舗でも利用可能",
    desc: "1,700店舗以上が全国に展開されており、出張先や旅行先でも利用可能。自宅近くと職場近くの両方で通えるのも大きな利点です。",
  },
];

const demerits = [
  {
    title: "トレーナーの指導がない",
    desc: "完全セルフ型のため、マシンの使い方やフォームを教えてくれるスタッフは常駐していません。初心者はアプリの動画を参考にする必要があります。",
  },
  {
    title: "マシンの種類が限られている",
    desc: "コンパクトな店舗設計のため、本格的なフリーウェイトや大型マシンは設置されていません。上級者には物足りない可能性があります。",
  },
  {
    title: "混雑時はマシン待ちが発生",
    desc: "人気店舗ではピーク時間帯にマシンの順番待ちが発生することがあります。時間帯をずらして利用するのがおすすめです。",
  },
];

const pricingPlans = [
  { name: "スタンダードプラン", duration: "使い放題", price: "月額3,278円", note: "全サービス込み" },
];

const reviewSummary = "chocoZAPの口コミでは「月額3,278円でこれだけ使えるのはコスパ最強」「着替え不要で気軽に通える」という声が多く見られます。セルフエステや脱毛も好評です。一方で「マシンが少ない」「スタッフがいなくて不安」「混雑時に使えない」といった指摘もあります。運動習慣をつけたい初心者に特に人気です。";

const faqItems = [
  { q: "chocoZAPの入会金はいくらですか？", a: "通常は入会金3,000円＋事務手数料2,000円ですが、キャンペーン期間中は無料になることが多いです。最新情報は公式サイトでご確認ください。" },
  { q: "chocoZAPにシャワーはありますか？", a: "基本的にシャワー設備はありません。着替え不要・短時間利用のコンセプトのため、シャワーなしの設計です。" },
  { q: "chocoZAPは予約制ですか？", a: "マシン利用に予約は不要です。セルフエステ・セルフ脱毛はアプリから事前予約が必要です。" },
  { q: "chocoZAPの退会方法は？", a: "アプリから退会手続きが可能です。毎月10日までに手続きすると翌月末退会となります。" },
  { q: "chocoZAPは見学できますか？", a: "無人店舗のため見学制度はありませんが、入会後すぐに利用開始できます。合わなければ退会も簡単です。" },
  { q: "chocoZAPのRIZAP監修とは？", a: "RIZAPのトレーニングメソッドを基にしたマシン選定やアプリ内プログラムが提供されています。パーソナル指導はありません。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function ChocozapReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "chocoZAP" }]} />
      <ReviewSummary gymName="chocoZAP" />
      <GymCta slug="chocozap" name="chocoZAP" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          chocoZAP（チョコザップ）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          chocoZAP（チョコザップ）はRIZAPが監修する月額<span className="font-bold bg-yellow-100 px-0.5">3,278円</span>のコンビニジムです。24時間365日利用可能で、着替え不要・1日5分からOKという手軽さが特徴。セルフエステや脱毛も追加料金なしで使えます。本記事では、chocoZAPの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">chocoZAPの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">chocoZAPの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">chocoZAPのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">chocoZAPの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">chocoZAPの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="chocozap" name="chocoZAP" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">chocoZAPのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">chocoZAPが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは公式サイトで最寄りの店舗を確認してみましょう。</p>
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
