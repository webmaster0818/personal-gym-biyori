import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "レクサーの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "レクサー（LEXER）パーソナルジムの口コミ・評判を徹底解説。パーソナルトレーニングの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "レクサー（LEXER）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "2ヶ月180,000円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "完全個室 / マンツーマン / 食事指導付き / ボディメイク特化" },
];

const strengths = [
  {
    title: "完全マンツーマンの丁寧な指導",
    desc: "1対1のマンツーマン指導に特化しており、トレーナーが一人ひとりの身体の状態や目標に合わせたオーダーメイドのプログラムを提供します。",
  },
  {
    title: "トレーナーの質にこだわり",
    desc: "厳しい採用基準をクリアしたトレーナーのみが在籍。解剖学や栄養学の知識を持ち、的確なアドバイスでトレーニング効果を最大化します。",
  },
  {
    title: "食事指導込みの総合サポート",
    desc: "トレーニングと食事指導がセットのプランを提供。日々の食事をサポートしてもらえるため、自己管理が苦手な方でも結果を出しやすい環境です。",
  },
];

const merits = [
  {
    title: "個人に最適化されたプログラム",
    desc: "カウンセリングで身体の状態を詳しくチェックし、一人ひとりに合わせたメニューを作成。効率的にボディメイクを進められます。",
  },
  {
    title: "完全個室でプライバシーが守られる",
    desc: "他の会員と顔を合わせることなく、安心してトレーニングに集中できる環境が整っています。",
  },
  {
    title: "アフターケアが充実",
    desc: "コース終了後のリバウンド防止サポートがあり、長期的な体型維持をサポートしてもらえます。",
  },
];

const demerits = [
  {
    title: "料金は中〜高価格帯",
    desc: "2ヶ月18万円〜と、格安ジムと比較すると費用が高め。ただし食事指導込みの価格としては相場並みです。",
  },
  {
    title: "店舗数が限られている",
    desc: "都内中心の少数店舗展開のため、通える範囲に店舗がない場合があります。",
  },
  {
    title: "口コミ・情報が少ない",
    desc: "大手チェーンと比べて知名度が低く、事前に情報を収集しにくい面があります。体験で直接確認することをおすすめします。",
  },
];

const pricingPlans = [
  { name: "2ヶ月コース（16回）", duration: "60分/回", price: "180,000円", note: "食事指導付き" },
  { name: "3ヶ月コース（24回）", duration: "60分/回", price: "250,000円", note: "食事指導付き" },
  { name: "月額コース（月4回）", duration: "60分/回", price: "月額44,000円〜", note: "継続利用向け" },
];

const reviewSummary = "レクサーの口コミでは「トレーナーが親身になってくれる」「プログラムが自分に合っていた」という声が見られます。個々に合わせた丁寧な指導が好評です。一方で「店舗が少ない」「もう少し安いと嬉しい」という意見も。質の高いマンツーマン指導を求める方におすすめです。";

const faqItems = [
  { q: "レクサーの入会金はいくらですか？", a: "入会金は33,000円です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "どのくらいで効果が出ますか？", a: "個人差がありますが、2ヶ月のコースで多くの方が体型の変化を実感されています。" },
  { q: "食事指導は厳しいですか？", a: "過度な食事制限は行わず、生活スタイルに合わせた無理のない食事指導を行います。" },
  { q: "ウェアのレンタルはありますか？", a: "はい、ウェアやタオルのレンタルが用意されています。手ぶらで通えます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "分割払いはできますか？", a: "はい、分割払いに対応しています。詳細はカウンセリング時にご確認ください。" },
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
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function LexerReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "レクサー" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          レクサーの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          レクサー（LEXER）は完全マンツーマン指導にこだわるパーソナルトレーニングジムです。質の高いトレーナーによるオーダーメイドプログラムと食事指導で、効率的なボディメイクをサポート。本記事では、レクサーの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">レクサーの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">レクサーの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">レクサーのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">レクサーの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">レクサーの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">レクサーのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">レクサーが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
