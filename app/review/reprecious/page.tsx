import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リプレシャスの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Reprecious（リプレシャス）の口コミ・評判を徹底解説。女性専用・低価格パーソナルジムの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Reprecious（リプレシャス）" },
  { label: "タイプ", value: "女性専用パーソナルジム" },
  { label: "料金帯", value: "2ヶ月87,120円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "女性専用 / 低価格 / 完全個室 / 食事指導付き" },
];

const strengths = [
  {
    title: "業界最安級の低価格パーソナルジム",
    desc: "2ヶ月87,120円〜と、パーソナルジム業界では破格の料金設定。入会金も低額に抑えられており、初めてパーソナルジムを試したい方でも始めやすい価格帯です。",
  },
  {
    title: "女性専用で安心の環境",
    desc: "会員は女性のみ。完全個室でのトレーニングのため、人目を気にせず安心して運動に集中できる環境が整っています。",
  },
  {
    title: "食事指導が料金に含まれている",
    desc: "低価格ながらも食事指導がプランに含まれており、追加料金なしでトレーニングと食事の両面からボディメイクをサポートしてもらえます。",
  },
];

const merits = [
  {
    title: "圧倒的なコストパフォーマンス",
    desc: "大手パーソナルジムの半額以下で通えるため、予算が限られている方でもパーソナルトレーニングを体験できます。",
  },
  {
    title: "女性トレーナーが在籍",
    desc: "女性トレーナーが在籍しているため、男性トレーナーに抵抗がある方でも安心して通えます。",
  },
  {
    title: "手ぶらで通える",
    desc: "ウェアやシューズのレンタルが用意されており、仕事帰りでも手ぶらで気軽に通えます。",
  },
];

const demerits = [
  {
    title: "トレーニング時間が短め",
    desc: "低価格の分、1回あたりのセッション時間が短い場合があります。じっくりトレーニングしたい方は確認が必要です。",
  },
  {
    title: "男性は利用不可",
    desc: "女性専用のため、男性は利用できません。",
  },
  {
    title: "店舗数が限定的",
    desc: "東京都内中心の展開のため、地方在住の方は通いにくい場合があります。",
  },
];

const pricingPlans = [
  { name: "2ヶ月コース（月8回）", duration: "40分/回", price: "87,120円", note: "16回・食事指導付き" },
  { name: "3ヶ月コース（月8回）", duration: "40分/回", price: "118,800円", note: "24回・食事指導付き" },
  { name: "デイタイムコース", duration: "40分/回", price: "75,600円〜", note: "平日日中限定・2ヶ月" },
];

const reviewSummary = "リプレシャスの口コミでは「この価格でパーソナルトレーニングが受けられるのは嬉しい」「女性専用で安心」という声が多数。コスパの良さが最大の評価ポイントです。一方で「セッション時間が短い」「設備がシンプル」という意見も。初めてパーソナルジムを試してみたい女性に特におすすめです。";

const faqItems = [
  { q: "リプレシャスの入会金はいくらですか？", a: "入会金は22,000円です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "なぜこんなに安いのですか？", a: "広告費の削減や設備のシンプル化により、低価格を実現しています。トレーニングの質は維持しながらコストを最適化しています。" },
  { q: "ダイエット効果はありますか？", a: "食事指導とパーソナルトレーニングを組み合わせたプログラムのため、多くの方がダイエット効果を実感されています。" },
  { q: "予約は取りやすいですか？", a: "完全予約制でWebから予約可能です。人気の時間帯は早めの予約をおすすめします。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリング・体験が用意されています。公式サイトからお申し込みください。" },
  { q: "途中解約はできますか？", a: "契約内容により異なります。詳細は入会時にご確認ください。" },
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
  { name: "ビーコンセプト", href: "/review/b-concept/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "RITA STYLE", href: "/review/rita-style/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function RepreciousReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "リプレシャス" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          リプレシャスの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Reprecious（リプレシャス）は女性専用・低価格を実現したパーソナルジムです。業界最安級の料金ながら食事指導付きで、初めてパーソナルジムに通う女性に人気。本記事では、リプレシャスの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リプレシャスの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リプレシャスの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">リプレシャスのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リプレシャスの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リプレシャスの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リプレシャスのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">リプレシャスが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、低価格パーソナルの魅力を体感してみましょう。</p>
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
