import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム神戸おすすめ5選",
  description:
    "神戸でおすすめのパーソナルジム5選を厳選紹介。三宮・元町エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "神戸";

const selectionPoints = [
  {
    title: "三宮・元町エリアを中心に探す",
    desc: "神戸のパーソナルジムは三宮駅・元町駅周辺に集中しています。JR・阪急・阪神の3路線が乗り入れる三宮はアクセスが良く、通いやすい環境が整っています。",
  },
  {
    title: "大阪のジムも比較対象にする",
    desc: "神戸から大阪（梅田・心斎橋）は電車で20〜30分程度とアクセスが良いため、大阪のジムも選択肢に入ります。特に大阪の方が選択肢が豊富なため、両エリアで比較検討することをおすすめします。",
  },
  {
    title: "体験・カウンセリングを活用する",
    desc: "神戸エリアのジムは店舗数が限られるため、選択肢を広げるためにも複数の無料カウンセリングに足を運び、トレーナーとの相性や施設の雰囲気を直接確認しましょう。",
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
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "三宮駅近立地", "手ぶらで通える"],
    access: "神戸三宮店（三宮駅徒歩3分）",
    point: "三宮エリアで低価格にパーソナルトレーニングを始めたい初心者に最適です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "神戸店（三宮駅徒歩5分）",
    point: "神戸エリアで確実に結果を出したい方に。全額返金保証があるのも安心ポイントです。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "全額返金保証あり", "深夜まで営業"],
    access: "三宮店（三宮駅徒歩3分）",
    point: "三宮駅から徒歩3分の好立地。食事制限が緩やかで、神戸グルメを楽しみながらダイエットできます。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "神戸元町店（元町駅徒歩3分）",
    point: "元町エリアに展開。入会金無料で始めやすく、質の高いトレーニングが受けられます。",
    reviewed: true,
  },
  {
    name: "Bodyke（ボディーク）",
    price: "215,600円〜（2ヶ月/16回）",
    features: ["食べて痩せるメソッド", "完全個室トレーニング", "卒業後のサポートプログラム", "分割払い対応"],
    access: "神戸三宮店（三宮駅徒歩5分）",
    point: "「食べながら痩せる」独自メソッドが人気。食事制限が苦手な方に支持されています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "神戸のパーソナルジムの料金相場はいくらですか？", a: "神戸のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円程度です。月額制では月1万〜6万円が目安で、大阪と同程度の水準です。" },
  { q: "神戸で初心者におすすめのパーソナルジムは？", a: "チキンジム神戸三宮店が初心者に特におすすめです。利用者の90%以上が初心者で、低価格かつ手ぶらで通えます。" },
  { q: "三宮エリアにパーソナルジムは多いですか？", a: "はい、三宮は神戸のパーソナルジム集積地です。チキンジム、RIZAP、24/7ワークアウトなど大手チェーンが揃っています。" },
  { q: "神戸と大阪、どちらのジムに通うべきですか？", a: "通いやすさを最優先に考えましょう。神戸在住・在勤なら三宮のジムが便利です。大阪に通勤している方は大阪のジムの方が選択肢が多く、料金比較もしやすいでしょう。" },
  { q: "神戸にエクササイズコーチはありますか？", a: "2026年4月時点で神戸にエクササイズコーチの店舗はありません。低価格ジムをお探しの方はチキンジムが候補になります。" },
  { q: "パーソナルジムに通う前に準備することはありますか？", a: "特別な準備は不要です。多くのジムで無料カウンセリングを受けられるので、まずは予約して足を運ぶことが第一歩です。手ぶらで通えるジムも多いため、ウェアなどの購入も急ぐ必要はありません。" },
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
  { name: "京都", href: "/area/kyoto/" },
  { name: "名古屋", href: "/area/nagoya/" },
];

export default function KobeAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム神戸おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          神戸は三宮・元町エリアを中心にパーソナルジムが増加している都市です。JR・阪急・阪神の3路線が集まる三宮はアクセスが良く、大手チェーンも出店しています。大阪にも近いため、両エリアで比較検討するのもおすすめです。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム5選</h2>
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

        <AreaGymList area="kobe" areaName="神戸" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/kobe/" className="underline text-teal-700 font-medium">→ 神戸のパーソナルジム全データベース(Gマップ実測・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
