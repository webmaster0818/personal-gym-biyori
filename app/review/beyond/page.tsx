import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BEYONDの口コミ・評判｜料金・特徴を徹底解説",
  description:
    "BEYONDの口コミ・評判を徹底調査。ボディメイク特化、コンテスト入賞トレーナー在籍、糖質制限なしの食事指導など特徴を詳しく解説。",
};

const overview = {
  name: "BEYOND（ビヨンド）",
  company: "株式会社ワールドフィット",
  price: "月額8,250円〜（税込）/ 短期集中コース281,600円〜",
  locations: "全国80店舗以上（東京・大阪・名古屋・横浜など）",
  hours: "10:00〜22:00（店舗により異なる）",
  features: "ボディメイク特化 / コンテスト入賞トレーナー / 糖質制限なし / 完全個室",
};

const strengths = [
  {
    title: "コンテスト入賞者による質の高い指導",
    desc: "トレーナー全員がボディメイクコンテストの入賞経験者。自ら体を鍛え上げた経験に基づく、実践的で効果の高い指導を受けられます。",
  },
  {
    title: "糖質制限なしの柔軟な食事指導",
    desc: "過度な糖質制限は行わず、バランスの良い食事を推奨。食べることを楽しみながら、理想の体型を目指すことができます。",
  },
  {
    title: "見た目の変化にこだわるボディメイク",
    desc: "体重の数値だけでなく、体のラインや筋肉の付き方など「見た目の変化」にこだわったプログラム。男女問わず理想の体型を実現します。",
  },
];

const pros = [
  "トレーナー全員がコンテスト入賞者",
  "糖質制限なしで無理なく続けられる",
  "見た目重視のボディメイクが得意",
  "入会金無料キャンペーンが多い",
];

const cons = [
  "店舗が都市部に集中しており地方は少ない",
  "プランの料金体系がやや複雑",
  "早朝の営業がない店舗が多い",
];

const reviews = [
  {
    label: "20代男性・ボディメイク目的",
    stars: 5,
    date: "2025年12月",
    source: "自社アンケート調査",
    text: "トレーナーが現役のコンテスト選手で、説得力が違います。フォームの修正が的確で、効率よく筋肉がついてきました。体重より見た目が変わるのが嬉しいです。",
  },
  {
    label: "30代女性・体型改善目的",
    stars: 5,
    date: "2025年11月",
    source: "自社アンケート調査",
    text: "糖質制限がないのが決め手でした。パンもご飯も食べながら、でも確実に体が引き締まっています。女性にもおすすめできるジムです。",
  },
  {
    label: "40代男性・筋力アップ目的",
    stars: 4,
    date: "2025年10月",
    source: "自社アンケート調査",
    text: "トレーナーの質は間違いなくトップクラス。ただ、営業時間が10時からなので、早朝にトレーニングしたい自分には少し不便でした。",
  },
  {
    label: "20代女性・ダイエット目的",
    stars: 4,
    date: "2025年9月",
    source: "自社アンケート調査",
    text: "プランがいくつかあって最初は迷いましたが、カウンセリングで丁寧に説明してもらえました。3ヶ月で体脂肪率が5%下がって大満足です。",
  },
];

const faqItems = [
  { q: "BEYONDの入会金はいくらですか？", a: "通常の入会金は無料です。体験トレーニングも実施しており、まずは気軽に試すことができます。" },
  { q: "BEYONDのトレーナーはどんな人？", a: "全員がボディメイクコンテストの入賞経験者です。JBBF、FWJ、SSAなどの大会実績を持つトレーナーが在籍しています。" },
  { q: "BEYONDのトレーニング頻度は？", a: "週2〜3回が推奨されています。回数券プランなら、自分のペースで無理なく通えます。" },
  { q: "BEYONDは女性でも大丈夫？", a: "はい、女性の利用者も多いです。女性トレーナーも在籍しており、女性ならではの悩みにも対応しています。" },
  { q: "BEYONDの食事指導は厳しいですか？", a: "糖質制限は行いません。バランスの良い食事を心がける指導なので、ストレスなく続けられます。LINEでの食事相談にも対応しています。" },
  { q: "BEYONDのプランの種類は？", a: "回数券プラン（10回・20回・30回）と短期集中コース（2ヶ月・3ヶ月）があります。目的やライフスタイルに合わせて選べます。" },
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
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function BeyondReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BEYOND" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">BEYONDの口コミ・評判</h1>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-3">BEYONDが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは体験トレーニングで、コンテスト入賞トレーナーの指導を体感してみましょう。</p>
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
