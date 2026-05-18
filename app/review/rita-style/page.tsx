import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "RITA STYLEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "RITA STYLE（リタスタイル）の口コミ・評判を徹底解説。九州発・食事指導付き低価格パーソナルジムの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "RITA STYLE（リタスタイル）" },
  { label: "タイプ", value: "食事指導付きパーソナルジム" },
  { label: "料金帯", value: "2ヶ月156,200円〜" },
  { label: "エリア", value: "福岡・熊本・佐賀・長崎・岡山など" },
  { label: "特徴", value: "九州発 / 食事指導付き / 低価格 / 完全個室 / 短期集中" },
];

const strengths = [
  {
    title: "九州エリアで最安級のパーソナルジム",
    desc: "2ヶ月156,200円〜と、大手パーソナルジムの約半額で通える低価格を実現。九州・中国地方を中心に展開しており、地方でも本格的なパーソナルトレーニングが受けられます。",
  },
  {
    title: "充実の食事指導",
    desc: "毎日の食事をLINEで報告し、専門スタッフからアドバイスを受けられます。食事管理が苦手な方でも、プロの指導のもとで正しい食習慣を身につけられます。",
  },
  {
    title: "完全個室・マンツーマン指導",
    desc: "全店舗完全個室でマンツーマン指導を実施。他の会員と顔を合わせることなく、集中してトレーニングに取り組めます。",
  },
];

const merits = [
  {
    title: "大手の半額以下で食事指導付き",
    desc: "RIZAPなど大手の半額以下の料金ながら、食事指導付きのフルサポート。コスパを重視する方に最適です。",
  },
  {
    title: "地方でも通えるパーソナルジム",
    desc: "九州・中国地方に店舗を展開しており、都心部にしかないパーソナルジムが多い中、地方在住者にとって貴重な選択肢です。",
  },
  {
    title: "30日間全額返金保証",
    desc: "効果に満足できなかった場合の全額返金保証があり、初めてのパーソナルジムでも安心して始められます。",
  },
];

const demerits = [
  {
    title: "関東・関西には店舗がない",
    desc: "九州・中国地方中心の展開のため、東京や大阪など主要都市圏からは通えません。",
  },
  {
    title: "トレーナーの質にばらつきがある可能性",
    desc: "急速に店舗を拡大しているため、店舗やトレーナーによって指導の質に差がある場合があります。",
  },
  {
    title: "設備が大手ほど充実していない",
    desc: "低価格を実現するため、設備やアメニティは大手と比較するとシンプルな場合があります。",
  },
];

const pricingPlans = [
  { name: "2ヶ月コース（16回）", duration: "60分/回", price: "156,200円", note: "食事指導付き" },
  { name: "3ヶ月コース（24回）", duration: "60分/回", price: "213,400円", note: "食事指導付き" },
  { name: "デイタイムコース", duration: "60分/回", price: "130,900円〜", note: "平日日中限定・2ヶ月" },
];

const reviewSummary = "RITA STYLEの口コミでは「この価格で食事指導付きはすごい」「地方でもパーソナルが受けられて嬉しい」という声が目立ちます。コスパの良さが最大の魅力で、九州在住者からの支持が高いです。一方で「設備がシンプル」「トレーナーによって当たり外れがある」という意見も見られます。";

const faqItems = [
  { q: "RITA STYLEの入会金はいくらですか？", a: "入会金は39,800円です。キャンペーンで無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "食事制限は厳しいですか？", a: "過度な食事制限は行わず、3食しっかり食べながらのボディメイクを推奨しています。LINEで毎日の食事をサポートします。" },
  { q: "30日間返金保証の条件は？", a: "所定の条件を満たした場合に全額返金されます。詳細はカウンセリング時にご確認ください。" },
  { q: "ウェアのレンタルはありますか？", a: "はい、ウェアやタオルのレンタルが用意されています。手ぶらで通えます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "分割払いはできますか？", a: "はい、分割払いに対応しています。月々の支払い額は回数により異なります。" },
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
  { name: "リプレシャス", href: "/review/reprecious/" },
  { name: "CALORIE TRADE", href: "/review/calorie-trade/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
];

export default function RitaStyleReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RITA STYLEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
        "author": {
          "@type": "Person",
          "name": "山田 拓也",
          "url": "https://personal-gym-biyori.com/about/",
          "jobTitle": "パーソナルジム専門ライター"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-05-18"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RITA STYLE" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RITA STYLEの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            RITA STYLE の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          RITA STYLE（リタスタイル）は九州発の<span className="font-bold bg-yellow-100 px-0.5">食事指導付き</span>低価格パーソナルジムです。大手の半額以下で<span className="font-bold bg-yellow-100 px-0.5">完全個室</span><span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>と食事サポートが受けられます。本記事では、RITA STYLEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">RITA STYLEのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの料金</h2>
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

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEのよくある質問</h2>
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

        {/* バナー広告 */}
        <section className="mb-10">
          <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/Q8343U.31275172.Q136169A" alt="RITA STYLE" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        {/* Author Box */}
        <AuthorBox />

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">RITA STYLEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、低価格パーソナルの魅力を体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
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
