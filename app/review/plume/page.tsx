import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "PLUMEの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "PLUME（プリュム）の口コミ・評判を徹底解説。おしゃれ空間で女性人気の高いパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "PLUME（プリュム）" },
  { label: "タイプ", value: "デザイナーズパーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜75,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "おしゃれな空間 / 女性人気 / SNS映え / ボディメイク特化" },
];

const strengths = [
  {
    title: "デザイナーズ空間でモチベーションアップ",
    desc: "インテリアデザイナーが手がけたおしゃれな空間で、一般的なジムとは一線を画す居心地の良さ。トレーニングが特別な時間になり、モチベーション維持に大きく貢献します。",
  },
  {
    title: "女性に支持される細やかなサービス",
    desc: "パウダールームやアメニティの充実、清潔感のある設備など、女性が心地よく過ごせるサービスが充実。トレーニング後もそのまま外出できる環境が整っています。",
  },
  {
    title: "ボディメイクに特化した指導",
    desc: "美しいボディラインを作ることに特化したトレーニングプログラム。くびれ作り、ヒップアップ、二の腕引き締めなど、部位別のアプローチで理想のシルエットを目指します。",
  },
];

const merits = [
  {
    title: "おしゃれな空間がトレーニングの楽しさを倍増",
    desc: "従来の「きつい・汗臭い」というジムのイメージを覆すスタイリッシュな空間。ジム通いが楽しみになり、継続率の向上につながっています。",
  },
  {
    title: "SNS映えする空間で成果を共有",
    desc: "洗練された空間はSNSでの発信にも最適。トレーニングの成果を記録・共有することでモチベーション維持に役立てている利用者が多数います。",
  },
  {
    title: "パウダールーム・アメニティが充実",
    desc: "ドライヤー、化粧品、スキンケア用品など女性向けアメニティが充実。トレーニング後にメイクを直してそのまま仕事やお出かけに行けます。",
  },
];

const demerits = [
  {
    title: "料金が平均よりやや高め",
    desc: "デザイナーズ空間の維持や充実したアメニティのため、一般的なパーソナルジムよりも料金は高めに設定されています。",
  },
  {
    title: "ハードコアなトレーニング環境ではない",
    desc: "おしゃれさを重視した空間のため、汗だくで追い込むような本格的なウェイトトレーニングには雰囲気が合わない場合があります。",
  },
  {
    title: "店舗数が限定的",
    desc: "デザインにこだわった店舗のため、大規模な展開は行っておらず、通える範囲に店舗があるか確認が必要です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額30,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額55,000円〜", note: "週2回ペース・人気" },
  { name: "プレミアムプラン", duration: "75分/回・月8回", price: "月額75,000円〜", note: "ストレッチ＋カウンセリング付き" },
];

const reviewSummary = "PLUMEの口コミでは「空間がおしゃれでテンションが上がる」「女性スタッフが多くて安心」と高評価が目立ちます。特に20〜30代の女性からの支持が厚く、「ジム通いが楽しくなった」という声が多数。一方で「料金が高い」「空間重視で設備は普通」という意見もあります。";

const faqItems = [
  { q: "PLUMEは女性専用ですか？", a: "女性専用ではありませんが、女性利用者が多い傾向にあります。男性も利用可能です。" },
  { q: "入会金はいくらですか？", a: "入会金は30,000円程度です。キャンペーンで割引になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "ウェアのレンタルはありますか？", a: "はい、ウェア・タオルのレンタルサービスが用意されています。手ぶらで通えます。" },
  { q: "パウダールームはありますか？", a: "はい、ドライヤーやアメニティを完備したパウダールームがあります。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・施設見学が用意されています。公式サイトから予約できます。" },
  { q: "どのような方が通っていますか？", a: "20〜40代の女性が中心ですが、男性の利用者もいます。ボディメイクやダイエット目的の方が多いです。" },
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
  { name: "TOKIEL", href: "/review/tokiel/" },
  { name: "LALA FIT", href: "/review/lala-fit/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function PlumeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "PLUME" }]} />
      <ReviewSummary gymName="PLUME" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">PLUMEの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          PLUME（プリュム）はおしゃれなデザイナーズ空間が特徴のパーソナルジムです。女性を中心に人気が高く、ボディメイクに特化した指導と充実したアメニティが魅力。本記事では、PLUMEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PLUMEの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PLUMEの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">PLUMEのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PLUMEの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PLUMEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">PLUMEのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">PLUMEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは施設見学・カウンセリングで、おしゃれな空間を体験してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
