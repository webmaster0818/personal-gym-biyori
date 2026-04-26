import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "24/7ワークアウトの口コミ・評判｜料金・特徴を徹底解説",
  description:
    "24/7ワークアウトの口コミ・評判を徹底調査。3食食べて痩せるダイエット、深夜営業、完全個室など特徴を詳しく解説。",
};

const overview = {
  name: "24/7ワークアウト",
  company: "株式会社トゥエンティーフォーセブン",
  price: "月額7,500円〜（税込）/ 2ヶ月コース257,400円〜",
  locations: "全国70店舗以上（東京・大阪・名古屋・福岡など）",
  hours: "7:00〜24:00（店舗により異なる）",
  features: "3食食べるダイエット / 深夜営業 / 完全個室 / 全額返金保証",
};

const strengths = [
  {
    title: "3食しっかり食べるダイエット指導",
    desc: "極端な食事制限ではなく、3食しっかり食べながら痩せるメソッドを採用。無理な食事制限によるリバウンドを防ぎ、長期的に健康的な体を維持できます。",
  },
  {
    title: "深夜24時まで営業で通いやすい",
    desc: "多くの店舗が深夜24時まで営業。残業が多い方や夜型の方でも、仕事帰りに無理なく通えます。早朝7時からの営業もあり、朝活トレーニングも可能です。",
  },
  {
    title: "完全個室でプライバシー確保",
    desc: "トレーニングルームは全て完全個室。他の利用者の目を気にせず、集中してトレーニングに取り組めます。初心者や体型にコンプレックスがある方にも安心です。",
  },
];

const pros = [
  "3食食べられるので食事制限のストレスが少ない",
  "深夜まで営業で忙しい方も通いやすい",
  "完全個室で集中できる環境",
  "全額返金保証制度あり",
];

const cons = [
  "店舗数が大手に比べるとやや少ない",
  "人気トレーナーの予約が取りにくい場合がある",
  "プランの最低契約期間が2ヶ月",
];

const reviews = [
  {
    label: "30代女性・ダイエット目的",
    stars: 5,
    date: "2025年12月",
    source: "自社アンケート調査",
    text: "食事制限が嫌で今まで続けられなかったのですが、ここは3食食べていいので本当に楽でした。2ヶ月で8kg痩せて、リバウンドもしていません。",
  },
  {
    label: "40代男性・体型改善目的",
    stars: 4,
    date: "2025年11月",
    source: "自社アンケート調査",
    text: "仕事が遅くなっても22時から通えるのが助かります。完全個室なのでお腹が出ていても恥ずかしくなかったです。トレーナーの質も高いと思います。",
  },
  {
    label: "20代女性・ボディメイク目的",
    stars: 5,
    date: "2025年10月",
    source: "自社アンケート調査",
    text: "完全個室で周りの目が気にならないのが良かったです。食事も「これは食べていいよ」と具体的にアドバイスしてくれるので実践しやすかったです。",
  },
  {
    label: "30代男性・ダイエット目的",
    stars: 4,
    date: "2025年9月",
    source: "自社アンケート調査",
    text: "全額返金保証があったので思い切って入会。結果的に3ヶ月で12kg減量できました。人気のトレーナーは予約が取りにくいのが唯一の不満です。",
  },
];

const faqItems = [
  { q: "24/7ワークアウトの入会金はいくらですか？", a: "入会金は41,800円（税込）です。キャンペーンで割引になる場合もあります。" },
  { q: "24/7ワークアウトの返金保証の条件は？", a: "入会後30日以内に満足できなかった場合、コース料金の全額が返金されます。返金手続きは店舗で行います。" },
  { q: "24/7ワークアウトのトレーニング時間は？", a: "1回75分（着替え含む）で、実質のトレーニング時間は約60分です。" },
  { q: "24/7ワークアウトは手ぶらで通えますか？", a: "はい、ウェア・タオル・シューズ・ドリンクが無料で提供されます。手ぶらで通えます。" },
  { q: "24/7ワークアウトの食事制限はどの程度？", a: "3食しっかり食べることが基本です。糖質を完全にカットするのではなく、適切な食事バランスを身につける指導を受けられます。" },
  { q: "24/7ワークアウトの退会方法は？", a: "契約期間満了後、店舗にて退会手続きが可能です。契約期間中の途中解約については違約金が発生する場合があります。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function Workout247Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "24/7ワークアウト" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">24/7ワークアウトの口コミ・評判</h1>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-3">24/7ワークアウトが気になった方へ</h2>
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
