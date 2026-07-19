import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "ハコジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ハコジムの口コミ・評判を徹底解説。完全個室レンタルジム・セルフ型の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ハコジム" },
  { label: "タイプ", value: "完全個室レンタルジム（セルフ型）" },
  { label: "料金帯", value: "月額3,800円〜8,800円程度" },
  { label: "エリア", value: "広島を中心に展開" },
  { label: "特徴", value: "完全個室 / セルフトレーニング / 低価格 / 24時間利用可 / 予約制" },
];

const strengths = [
  {
    title: "完全個室で人目を気にせずトレーニング",
    desc: "一室一人の完全個室レンタルジムのため、他の利用者と顔を合わせることがありません。音楽をかけながら自分のペースでトレーニングでき、服装も自由です。",
  },
  {
    title: "月額3,800円〜の圧倒的低価格",
    desc: "パーソナルジムの中ではなく、一般的なフィットネスジムと比較しても低価格な料金設定。完全個室でありながらこの価格帯は業界でも珍しい存在です。",
  },
  {
    title: "セルフ型で自由度が高い",
    desc: "トレーナー不在のセルフトレーニング方式のため、自分のペースで好きなメニューに取り組めます。トレーニング経験者にとっては、指示を待つ必要がなく効率的です。",
  },
];

const merits = [
  {
    title: "圧倒的なコストパフォーマンス",
    desc: "月額3,800円〜で完全個室のジムが利用できるのは、他に類を見ないコストパフォーマンスです。一般的なフィットネスジムよりも安い場合があります。",
  },
  {
    title: "完全個室で自分だけの空間",
    desc: "周りの目を気にせず、自由にトレーニングできます。好きな音楽をかける、声を出す、自撮りするなど、一般的なジムではしにくいことも気兼ねなくできます。",
  },
  {
    title: "24時間利用可能",
    desc: "24時間いつでも予約・利用が可能なため、早朝や深夜でも自分のスケジュールに合わせてトレーニングできます。",
  },
];

const demerits = [
  {
    title: "トレーナーの指導は受けられない（セルフ型）",
    desc: "基本的にセルフトレーニングのため、フォームの指導やメニューの作成は自分で行う必要があります。初心者には不安に感じる場合があります。",
  },
  {
    title: "設備はコンパクト",
    desc: "個室のため、大型のマシンやフリーウェイトエリアは限られます。本格的なウェイトトレーニングを行いたい方には物足りない場合があります。",
  },
  {
    title: "展開エリアが限定的",
    desc: "広島を中心とした展開のため、他地域では利用できません。今後の店舗拡大に期待されています。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "利用回数制限あり", price: "月額3,800円〜", note: "月の利用回数に上限あり" },
  { name: "スタンダードプラン", duration: "使い放題", price: "月額5,800円〜", note: "回数無制限" },
  { name: "プレミアムプラン", duration: "使い放題+オプション", price: "月額8,800円〜", note: "全店舗利用可など" },
];

const reviewSummary = "ハコジムの口コミでは「この料金で個室は最高」「人目を気にせず集中できる」と低価格と個室のコンビネーションが大好評です。自分のペースでトレーニングしたい経験者から特に支持されています。一方で「初心者にはフォーム指導がないのが不安」「設備が限定的」という声もあります。";

const faqItems = [
  { q: "ハコジムにトレーナーはいますか？", a: "基本的にセルフ型のため常駐のトレーナーはいません。ただし、オプションでパーソナルトレーニングが受けられる場合もあります。詳細は公式サイトでご確認ください。" },
  { q: "入会金はいくらですか？", a: "入会金は無料〜数千円程度です。キャンペーンによって異なります。最新情報は公式サイトでご確認ください。" },
  { q: "予約なしでも利用できますか？", a: "予約制です。アプリやWebから空き状況を確認し、予約してからご利用ください。" },
  { q: "どのような設備がありますか？", a: "ダンベル、ベンチ、ケーブルマシンなど基本的なトレーニング設備が備わっています。店舗により設備内容が異なります。" },
  { q: "広島以外に店舗はありますか？", a: "広島を中心に展開していますが、他エリアへの出店も進んでいます。最新の店舗情報は公式サイトでご確認ください。" },
  { q: "1回の利用時間は？", a: "1枠あたり50分〜60分程度です。プランや店舗により異なります。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "E9th PRIVATE GYM", href: "/review/e9th/" },
  { name: "FIT24", href: "/review/fit24/" },
];

export default function HakogymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ハコジム" }]} />
      <ReviewSummary gymName="ハコジム" />
      <GymCta slug="hakogym" name="ハコジム" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">ハコジムの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ハコジムは<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>・セルフ型のレンタルジムです。月額<span className="font-bold bg-yellow-100 px-0.5">3,800円</span>〜という圧倒的な低価格で、人目を気にせずトレーニングできる個室空間を提供。本記事では、ハコジムの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ハコジムの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ハコジムの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ハコジムのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ハコジムの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">利用条件</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ハコジムの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="hakogym" name="ハコジム" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ハコジムのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">ハコジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは公式サイトで最寄りの店舗と料金プランをチェックしてみましょう。</p>
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
