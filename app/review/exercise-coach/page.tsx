import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エクササイズコーチの口コミ・評判｜料金・特徴を徹底解説",
  description:
    "エクササイズコーチの口コミ・評判を徹底調査。AI搭載マシン、1回20分の時短トレーニング、月額9,900円〜など特徴を詳しく解説。",
};

const overview = {
  name: "エクササイズコーチ",
  company: "株式会社エクササイズコーチジャパン",
  price: "月額9,900円〜（税込）",
  locations: "全国40店舗以上（東京・大阪・名古屋・福岡など）",
  hours: "10:00〜22:00（店舗により異なる）",
  features: "AI搭載マシン / 1回20分 / 月4回からOK / 予約不要プランあり",
};

const strengths = [
  {
    title: "1回20分の超時短トレーニング",
    desc: "AI搭載マシンが最適な負荷を自動調整するため、わずか20分で効果的なトレーニングが完了。忙しい方でもスキマ時間に通えます。",
  },
  {
    title: "AIが個人に最適な負荷を自動調整",
    desc: "独自開発のAI搭載マシンが、あなたの筋力や体調をリアルタイムで測定。毎回最適な負荷でトレーニングできるため、効率的に結果を出せます。",
  },
  {
    title: "月額9,900円からの手軽な料金設定",
    desc: "パーソナルトレーニングとしては非常にリーズナブルな価格帯。月4回からのプランがあり、気軽に始められます。",
  },
];

const pros = [
  "1回20分で忙しい方にぴったり",
  "AIマシンが最適な負荷を自動調整",
  "月額9,900円〜と低価格",
  "予約不要で通えるプランがある",
];

const cons = [
  "フリーウェイトでのトレーニングが少ない",
  "トレーナーとの密なコミュニケーションは少なめ",
  "マシン中心のため種目のバリエーションが限定的",
];

const reviews = [
  {
    label: "30代女性・ダイエット目的",
    stars: 5,
    date: "2025年12月",
    source: "自社アンケート調査",
    text: "20分で終わるので、ランチタイムに通っています。短いのに効果はしっかりあって、3ヶ月で体脂肪率が3%ダウン。忙しい人には本当におすすめです。",
  },
  {
    label: "40代男性・健康維持目的",
    stars: 4,
    date: "2025年11月",
    source: "自社アンケート調査",
    text: "AIマシンが自動で負荷を調整してくれるので、筋トレ初心者の自分でも安心でした。ただ、ダンベルやバーベルを使いたい人には物足りないかも。",
  },
  {
    label: "20代女性・体型維持目的",
    stars: 5,
    date: "2025年10月",
    source: "自社アンケート調査",
    text: "予約不要で行きたいときに行けるのが最高です。マシンがその日の調子に合わせてくれるので、体調が悪い日でも無理なくできます。",
  },
  {
    label: "50代男性・筋力低下予防",
    stars: 4,
    date: "2025年9月",
    source: "自社アンケート調査",
    text: "年齢的に無理はしたくないので、AIが適切な負荷を設定してくれるのは安心感があります。月額料金も手頃で長く続けられそうです。",
  },
];

const faqItems = [
  { q: "エクササイズコーチの入会金はいくらですか？", a: "入会金は19,800円（税込）です。キャンペーン期間中は入会金無料になることもあります。" },
  { q: "エクササイズコーチは本当に20分で効果がありますか？", a: "はい、AIマシンが最適な負荷を毎秒調整するため、短時間でも通常の60分トレーニングに匹敵する効果が得られます。" },
  { q: "エクササイズコーチのAIマシンとは？", a: "アメリカで開発された独自のAI搭載トレーニングマシンです。筋力をリアルタイムで計測し、最適な負荷を自動で調整します。" },
  { q: "エクササイズコーチは予約なしで通えますか？", a: "プランによります。予約不要プランを選べば、営業時間内ならいつでも利用可能です。予約制プランもあります。" },
  { q: "エクササイズコーチに食事指導はありますか？", a: "基本的な食事アドバイスは受けられますが、毎日の食事管理のような詳細な指導は含まれていません。" },
  { q: "エクササイズコーチの退会方法は？", a: "前月の10日までに店舗で退会届を提出することで、翌月末日での退会が可能です。" },
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
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function ExerciseCoachReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "エクササイズコーチ" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">エクササイズコーチの口コミ・評判</h1>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-3">エクササイズコーチが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは体験トレーニングで、AIマシンの効果を実感してみましょう。</p>
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
