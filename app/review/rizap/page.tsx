import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RIZAPの口コミ・評判｜料金・特徴を徹底解説",
  description:
    "RIZAPの口コミ・評判を徹底調査。結果にコミットする指導、食事管理、30日間全額返金保証など特徴を詳しく解説。",
};

const overview = {
  name: "RIZAP（ライザップ）",
  company: "RIZAP株式会社",
  price: "月額9,900円〜（税込）/ 短期集中コース298,000円〜",
  locations: "全国100店舗以上（47都道府県対応）",
  hours: "7:00〜23:00",
  features: "結果にコミット / 食事指導付き / 30日間全額返金保証 / 専属トレーナー",
};

const strengths = [
  {
    title: "圧倒的な実績と信頼の知名度",
    desc: "累計20万人以上の会員実績を持つ業界最大手。テレビCMでおなじみの「結果にコミット」を実現する独自メソッドは、医学的根拠に基づいています。",
  },
  {
    title: "食事管理まで徹底したトータルサポート",
    desc: "トレーニングだけでなく、毎日の食事をトレーナーが管理。栄養士監修の食事ガイドラインに沿って、無理なく食生活を改善できます。",
  },
  {
    title: "30日間全額返金保証の安心感",
    desc: "入会後30日間は全額返金保証付き。「本当に効果があるのか不安」という方でも、リスクなく始められます。",
  },
];

const pros = [
  "業界No.1の実績と知名度",
  "食事管理まで含めたトータルサポート",
  "30日間全額返金保証あり",
  "全国100店舗以上でアクセス良好",
];

const cons = [
  "料金は業界の中でも高め",
  "食事制限が厳しいと感じる方もいる",
  "契約期間の縛りがある",
];

const reviews = [
  {
    label: "40代男性・ダイエット目的",
    stars: 5,
    date: "2025年12月",
    source: "自社アンケート調査",
    text: "3ヶ月で15kg減量に成功しました。トレーナーの方が毎日食事をチェックしてくれるので、自然と正しい食生活が身につきました。料金は高いですが、結果を考えると十分な価値があります。",
  },
  {
    label: "30代女性・体型改善目的",
    stars: 4,
    date: "2025年11月",
    source: "自社アンケート調査",
    text: "食事制限はたしかに厳しいですが、トレーナーさんが励ましてくれるので頑張れました。体重以上に体のラインが変わったのが嬉しいです。",
  },
  {
    label: "50代男性・健康改善目的",
    stars: 5,
    date: "2025年10月",
    source: "自社アンケート調査",
    text: "健康診断の数値が全て改善されました。血圧も血糖値も正常範囲に。トレーニングだけでなく、生活習慣全体を見直すきっかけになりました。",
  },
  {
    label: "20代女性・ボディメイク目的",
    stars: 4,
    date: "2025年9月",
    source: "自社アンケート調査",
    text: "料金は覚悟していましたが、やはり高いです。ただ、一人では絶対にここまで追い込めなかったと思います。返金保証があったので安心して始められました。",
  },
];

const faqItems = [
  { q: "RIZAPの入会金はいくらですか？", a: "入会金は55,000円（税込）です。コースによって総額が異なりますので、無料カウンセリングで詳しい料金をご確認ください。" },
  { q: "RIZAPのトレーニング頻度は？", a: "基本的には週2回、1回50分のトレーニングが推奨されています。コースによっては週3回以上のプランもあります。" },
  { q: "RIZAPの返金保証の条件は？", a: "入会日から30日以内であれば、コース料金を全額返金してもらえます。手続きは店舗で行います。" },
  { q: "RIZAPの食事制限はどの程度ですか？", a: "低糖質・高タンパクの食事が基本です。完全に糖質をカットするのではなく、適切な量をコントロールする指導を受けられます。" },
  { q: "RIZAPは卒業後もサポートがありますか？", a: "はい、卒業後もリバウンド防止のためのボディマネジメントプログラムが用意されています。月1回のトレーニングとカウンセリングが受けられます。" },
  { q: "RIZAPのトレーナーはどんな人？", a: "厳しい社内研修（約190時間）を修了した専属トレーナーが担当します。栄養学やメンタルサポートの知識も豊富です。" },
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
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RizapReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RIZAP" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">RIZAPの口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-8">料金・特徴・利用者の声を徹底解説</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {Object.entries(overview).map(([key, val]) => {
                  const labels: Record<string, string> = { name: "ジム名", company: "運営会社", price: "料金", locations: "店舗数", hours: "営業時間", features: "特徴" };
                  return (
                    <tr key={key} className="border-b border-gray-100">
                      <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32">{labels[key]}</th>
                      <td className="px-4 py-3 text-gray-800">{val}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {pros.map((p) => (
                  <li key={p} className="text-sm flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {cons.map((c) => (
                  <li key={c} className="text-sm flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{r.label}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={`text-sm ${j < r.stars ? "text-yellow-500" : "text-gray-300"}`}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{r.text}</p>
                <p className="text-xs text-gray-400 mt-2">出典: {r.source}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-3 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">RIZAPが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたの目標に合ったプランを相談してみましょう。</p>
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
