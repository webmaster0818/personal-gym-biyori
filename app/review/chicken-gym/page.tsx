import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "チキンジムの口コミ・評判｜料金・特徴を徹底解説",
  description:
    "チキンジムの口コミ・評判を徹底調査。月額6,800円〜の低価格、全国30店舗以上、手ぶらOKなど特徴を詳しく解説。実際の利用者の声もご紹介します。",
};

const overview = {
  name: "チキンジム",
  company: "株式会社CHICKEN GYM",
  price: "月額6,800円〜（税込）",
  locations: "全国30店舗以上（東京・大阪・名古屋・福岡など）",
  hours: "7:00〜23:00（店舗により異なる）",
  features: "初心者向け / 手ぶらOK / ウェア無料レンタル / 食事指導あり",
};

const strengths = [
  {
    title: "業界最安クラスの月額料金",
    desc: "月額6,800円〜という低価格で、パーソナルトレーニングを受けられます。初期費用も抑えめで、コスパ重視の方に最適です。",
  },
  {
    title: "手ぶらで通える充実のレンタル",
    desc: "ウェア・シューズ・タオルがすべて無料レンタル。仕事帰りや買い物のついでに、荷物なしで気軽に通えます。",
  },
  {
    title: "初心者に寄り添った丁寧な指導",
    desc: "運動経験がない方でも安心。トレーナーが一からフォームを教え、無理のないペースでトレーニングを進めてくれます。",
  },
];

const pros = [
  "月額6,800円〜と業界最安クラス",
  "駅近の店舗が多く通いやすい",
  "初心者向けの丁寧な指導",
  "手ぶらOKで荷物不要",
];

const cons = [
  "上級者には物足りない場合がある",
  "人気店舗は予約が取りにくい時間帯あり",
  "食事指導は基本的なアドバイスが中心",
];

const reviews = [
  {
    label: "30代女性・ダイエット目的",
    stars: 5,
    date: "2025年12月",
    source: "自社アンケート調査",
    text: "運動経験ゼロでしたが、トレーナーさんが毎回優しく教えてくれるので楽しく通えています。3ヶ月で5kg減量できました。料金も安くて助かります。",
  },
  {
    label: "20代男性・筋力アップ目的",
    stars: 4,
    date: "2025年11月",
    source: "自社アンケート調査",
    text: "コスパは間違いなく良いです。ただ、もう少しハードなトレーニングを希望すると物足りなさを感じることも。初心者〜中級者にはおすすめ。",
  },
  {
    label: "40代女性・健康維持目的",
    stars: 5,
    date: "2025年10月",
    source: "自社アンケート調査",
    text: "仕事帰りに手ぶらで通えるのが最高です。体力がついて疲れにくくなりました。スタッフの方も明るくて、毎回行くのが楽しみです。",
  },
  {
    label: "30代男性・体型改善目的",
    stars: 4,
    date: "2025年9月",
    source: "自社アンケート調査",
    text: "駅から近くて通いやすい。食事のアドバイスももらえるので、自然と食生活が改善されました。もう少し食事指導が詳しいとなお良い。",
  },
];

const faqItems = [
  { q: "チキンジムの入会金はいくらですか？", a: "入会金は35,000円（税込）です。キャンペーン期間中は入会金が無料になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "チキンジムは予約制ですか？", a: "はい、完全予約制です。公式アプリやWebサイトから簡単に予約・変更ができます。" },
  { q: "チキンジムのトレーニング時間はどのくらいですか？", a: "1回あたり30分〜60分です。プランによって異なりますが、初心者の方は30分から始める方が多いです。" },
  { q: "チキンジムに食事指導はありますか？", a: "はい、プランに応じて食事アドバイスが含まれています。LINEでの食事報告に対応しているプランもあります。" },
  { q: "チキンジムは女性でも通いやすいですか？", a: "はい、利用者の約6割が女性です。ウェア・シューズの無料レンタルがあり、女性も気軽に通える環境が整っています。" },
  { q: "チキンジムの退会方法は？", a: "店舗での退会手続きが必要です。契約期間満了後は翌月末日での退会が可能です。詳しくは店舗スタッフにお問い合わせください。" },
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
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function ChickenGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "チキンジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">チキンジムの口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-8">料金・特徴・利用者の声を徹底解説</p>

        {/* Overview */}
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

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
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

        {/* Reviews */}
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

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">チキンジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        {/* Related */}
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
