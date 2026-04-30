import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "LALA FITの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "LALA FIT（ララフィット）の口コミ・評判を徹底解説。女性向け・低価格パーソナルジムの料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "LALA FIT（ララフィット）" },
  { label: "タイプ", value: "女性向け低価格パーソナルジム" },
  { label: "料金帯", value: "月額15,000円〜45,000円程度" },
  { label: "エリア", value: "東京・神奈川を中心に展開" },
  { label: "特徴", value: "女性向け / 低価格 / 短時間集中 / ダイエット特化" },
];

const strengths = [
  {
    title: "業界最安級の低価格パーソナルトレーニング",
    desc: "月額15,000円〜という業界でもトップクラスの低価格で、パーソナルトレーニングを提供。費用面でパーソナルジムを諦めていた方にも手が届く価格設定です。",
  },
  {
    title: "女性の悩みに寄り添ったプログラム",
    desc: "ダイエット、産後ケア、むくみ解消など女性に多い悩みに特化したプログラムを提供。女性スタッフが在籍しており、気軽に相談できる環境です。",
  },
  {
    title: "短時間集中型で忙しい方にも最適",
    desc: "1回30〜40分の短時間集中プログラムのため、仕事や育児で忙しい方でも無理なく通えます。短時間でも効果的なトレーニングメニューが組まれています。",
  },
];

const merits = [
  {
    title: "パーソナルジム最安級の料金",
    desc: "月額15,000円〜という低価格で本格的なパーソナル指導が受けられます。一般的なフィットネスジムに少しプラスする感覚で、マンツーマン指導が受けられるのは大きな魅力です。",
  },
  {
    title: "短時間で効率的なトレーニング",
    desc: "1回30〜40分のコンパクトなセッションで、ポイントを絞った効率的なトレーニングが受けられます。長時間の運動が苦手な方にも好評です。",
  },
  {
    title: "女性が通いやすい雰囲気",
    desc: "女性利用者が中心のため、気後れせずに通える環境です。おしゃれで清潔感のある店舗デザインも好評です。",
  },
];

const demerits = [
  {
    title: "1回のセッション時間が短い",
    desc: "30〜40分のセッションは効率的ですが、じっくりトレーニングしたい方やストレッチまで含めたい方には時間が足りないと感じることがあります。",
  },
  {
    title: "男性は利用しにくい",
    desc: "女性向けを打ち出しているため、男性の利用者は少なく、男性にとっては通いにくい雰囲気がある場合があります。",
  },
  {
    title: "本格的な筋力トレーニングには不向き",
    desc: "ダイエットやボディメイクに特化しているため、本格的な筋肥大やパワーリフティングを目指す方には物足りない可能性があります。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "30分/回・月4回", price: "月額15,000円〜", note: "お試し向け" },
  { name: "スタンダードプラン", duration: "40分/回・月8回", price: "月額28,000円〜", note: "人気プラン" },
  { name: "集中プラン", duration: "40分/回・月12回", price: "月額38,000円〜", note: "しっかり結果を出したい方" },
];

const reviewSummary = "LALA FITの口コミでは「この価格でパーソナル指導が受けられるのはすごい」「短時間で効率的」と好評です。女性利用者から「通いやすい雰囲気」「気軽にダイエット相談できる」という声が多数。一方で「もう少し長い時間トレーニングしたい」「設備がコンパクト」という意見もあります。";

const faqItems = [
  { q: "LALA FITの入会金はいくらですか？", a: "入会金は10,000円〜20,000円程度です。キャンペーンで無料になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "男性も利用できますか？", a: "店舗によって対応が異なります。詳細は公式サイトまたは店舗にお問い合わせください。" },
  { q: "30分で効果はありますか？", a: "はい、ポイントを絞った効率的なプログラムのため、30分でも十分な運動効果が期待できます。" },
  { q: "食事指導は受けられますか？", a: "プランに応じて食事アドバイスが含まれます。詳細はカウンセリング時にご確認ください。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "産後でも通えますか？", a: "はい、産後ダイエットに対応したプログラムがあります。産後の回復状況に合わせてメニューを調整してもらえます。" },
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
  { name: "fis.lady's", href: "/review/fis-ladys/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function LalaFitReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "LALA FIT" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">LALA FITの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          LALA FIT（ララフィット）は女性向け・低価格を特徴とするパーソナルジムです。月額15,000円〜という手頃な価格で、短時間集中型のトレーニングプログラムを提供。本記事では、LALA FITの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LALA FITの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LALA FITの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">LALA FITのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LALA FITの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LALA FITの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">LALA FITのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">LALA FITが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
