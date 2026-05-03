import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム福岡おすすめ6選",
  description:
    "福岡でおすすめのパーソナルジム6選を厳選紹介。天神・博多エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "福岡";

const selectionPoints = [
  {
    title: "天神・博多駅エリアを中心に探す",
    desc: "福岡のパーソナルジムは天神エリアと博多駅周辺に集中しています。地下鉄空港線沿線はアクセスが良く、仕事帰りにも通いやすい立地の店舗が多いです。",
  },
  {
    title: "九州エリアの料金相場を把握する",
    desc: "福岡は九州最大の都市ですが、東京・大阪と比べると全体的に料金がやや安い傾向にあります。大手チェーンでも福岡限定のキャンペーンを実施していることがあるため、公式サイトを要チェックです。",
  },
  {
    title: "地元で実績のあるジムにも注目する",
    desc: "福岡には全国チェーンだけでなく、地元で長年の実績を持つパーソナルジムも存在します。口コミやGoogleマップの評価を参考に、地域密着型のジムも候補に入れましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "18万〜35万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜6万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "天神店・博多駅前店の2店舗", "手ぶらで通える"],
    access: "天神店（天神駅徒歩3分）、博多駅前店（博多駅徒歩5分）",
    point: "天神・博多の両エリアに店舗があり、低価格で始められるため初心者に人気です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "天神店・博多店・小倉店",
    point: "福岡県内に3店舗。短期集中で結果を出したい方に確かな実績があります。",
    reviewed: true,
    storeHref: "/review/rizap/fukuoka/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜まで営業", "全額返金保証あり"],
    access: "福岡天神店（天神駅徒歩5分）",
    point: "天神エリアで完全個室のマンツーマントレーニングを受けられます。",
    reviewed: true,
    storeHref: "/review/247workout/fukuoka/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "福岡天神店・博多店",
    point: "入会金無料でハイクオリティなトレーニングを受けられる。ボディメイク志向の方に人気です。",
    reviewed: true,
    storeHref: "/review/beyond/fukuoka/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "天神店（天神駅徒歩3分）",
    point: "福岡で最も手軽に始められるパーソナルジムの一つ。忙しい方でも20分で完了します。",
    reviewed: true,
  },
  {
    name: "MAKE BODY（メイクボディー）",
    price: "月38,500円〜（月4回）",
    features: ["福岡発のパーソナルジム", "完全個室マンツーマン指導", "食事管理サポート付き", "天神エリアの好立地"],
    access: "天神店（天神駅徒歩5分）",
    point: "福岡で人気の地元密着型ジム。丁寧なカウンセリングと個別プログラムが好評です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "福岡のパーソナルジムの料金相場はいくらですか？", a: "福岡のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円程度です。東京・大阪と比べてやや安い傾向にあります。" },
  { q: "福岡で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。いずれも天神駅から徒歩圏内で、低価格で始められます。" },
  { q: "天神エリアでおすすめのパーソナルジムは？", a: "天神エリアにはチキンジム、RIZAP、24/7ワークアウト、BEYOND、エクササイズコーチなど主要ジムが集結しています。" },
  { q: "福岡で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "博多駅周辺にパーソナルジムはありますか？", a: "はい、チキンジム博多駅前店やRIZAP博多店、BEYOND博多店など複数のジムがあります。" },
  { q: "パーソナルジムに通う期間はどのくらいが目安ですか？", a: "ダイエット目的であれば2〜3ヶ月、ボディメイクや体質改善が目的であれば3〜6ヶ月が一般的な目安です。継続的な運動習慣をつけたい方は月額制のジムが向いています。" },
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

const relatedAreas = [
  { name: "大阪", href: "/area/osaka/" },
  { name: "名古屋", href: "/area/nagoya/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function FukuokaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム福岡おすすめ6選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          福岡は九州最大の都市で、天神・博多エリアを中心にパーソナルジムの出店が増加しています。大手チェーンが主要エリアに揃っているほか、地元発の実力派ジムもあり、選択肢が充実しています。本記事では、料金・実績・アクセスの観点から厳選した6ジムを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">カテゴリ</th><th className="px-4 py-3 text-left font-medium">料金目安</th></tr></thead>
              <tbody>
                {priceRange.map((row) => (<tr key={row.category} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{row.category}</td><td className="px-4 py-3 text-gray-700">{row.range}</td></tr>))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は目安です。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム6選</h2>
          <div className="space-y-6">
            {gyms.map((gym, i) => (
              <AreaGymCard key={i} gym={gym} index={i} areaName={areaName} />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 料金・店舗情報は2026年4月時点の公開情報に基づきます。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジムに関するよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">当サイトのランキングページで、目的別・料金別にジムを比較できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
