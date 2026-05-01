import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム札幌おすすめ5選",
  description:
    "札幌でおすすめのパーソナルジム5選を厳選紹介。大通・すすきの・札幌駅エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "札幌";

const selectionPoints = [
  {
    title: "札幌駅・大通エリアを中心に探す",
    desc: "札幌のパーソナルジムは札幌駅周辺と大通・すすきのエリアに集まっています。地下鉄南北線・東西線沿線のジムが特に通いやすく、冬場も地下通路でアクセスできる店舗がおすすめです。",
  },
  {
    title: "冬の通いやすさを考慮する",
    desc: "札幌は積雪期が長いため、駅直結や地下通路でアクセスできるジムを選ぶと年間を通して通いやすくなります。駐車場付きのジムも冬場は重宝します。",
  },
  {
    title: "北海道の料金相場を確認する",
    desc: "札幌のパーソナルジムは東京と比べて料金がやや安い傾向にありますが、大手チェーンは全国統一料金の場合が多いです。地元ジムの方が料金面で有利なケースもあります。",
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
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "札幌駅近立地", "手ぶらで通える"],
    access: "札幌店（札幌駅徒歩5分）",
    point: "札幌で低価格にパーソナルトレーニングを始めたい初心者に最適です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "札幌店（大通駅徒歩5分）",
    point: "北海道唯一の店舗。確実に結果を出したい方に選ばれています。",
    reviewed: true,
    storeHref: "/review/rizap/sapporo/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "全額返金保証あり", "駅チカ立地"],
    access: "札幌店（大通駅徒歩3分）",
    point: "大通エリアでアクセス抜群。食事制限が緩やかで続けやすいと評判です。",
    reviewed: true,
    storeHref: "/review/247workout/sapporo/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "札幌店（札幌駅徒歩5分）",
    point: "入会金無料で始めやすい。本格的なボディメイクを目指す方におすすめです。",
    reviewed: true,
    storeHref: "/review/beyond/sapporo/",
  },
  {
    name: "ダイエットラボ",
    price: "月35,200円〜（月4回）",
    features: ["札幌発のパーソナルジム", "完全個室マンツーマン指導", "食事アドバイス付き", "駅チカの好立地"],
    access: "大通店（大通駅徒歩3分）",
    point: "札幌で長年の実績がある地元密着型ジム。丁寧なカウンセリングが好評です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "札幌のパーソナルジムの料金相場はいくらですか？", a: "札幌のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円程度です。月額制では月1万〜6万円が目安です。" },
  { q: "札幌で初心者におすすめのパーソナルジムは？", a: "チキンジムが初心者に特におすすめです。利用者の90%以上が初心者で、低価格かつ手ぶらで通えます。" },
  { q: "札幌のパーソナルジムは冬でも通いやすいですか？", a: "札幌駅・大通エリアのジムは地下鉄でアクセスしやすく、地下通路を利用できる店舗もあります。冬場の通いやすさを考慮して駅近のジムを選ぶことをおすすめします。" },
  { q: "札幌で安いパーソナルジムは？", a: "チキンジム（月々6,800円〜/分割時）が最も低価格帯です。大手の中ではBEYOND（入会金無料）もコスパが良いと評価されています。" },
  { q: "札幌にエクササイズコーチはありますか？", a: "2026年4月時点で札幌にエクササイズコーチの店舗はありません。低価格ジムをお探しの方はチキンジムが候補になります。" },
  { q: "パーソナルジムを途中で辞めることはできますか？", a: "多くのジムで途中解約は可能ですが、コース契約の場合は解約手数料がかかることがあります。月額制のジムは比較的辞めやすい傾向にあります。契約前に解約条件を必ず確認しましょう。" },
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
  { name: "仙台", href: "/area/sendai/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function SapporoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム札幌おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          札幌は北海道最大の都市で、札幌駅・大通・すすきのエリアを中心にパーソナルジムが増加しています。積雪期が長い札幌では駅チカの店舗が特に重宝されます。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{i + 1}. {gym.name}</h3>
                  {gym.reviewed && <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">レビュー済</span>}
                </div>
                <p className="text-sm text-gray-600 mb-3">月額料金: <span className="font-medium text-gray-800">{gym.price}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  {gym.features.map((f, j) => (<li key={j} className="flex items-start gap-2"><span className="text-teal-500 shrink-0 mt-0.5">--</span><span>{f}</span></li>))}
                </ul>
                <p className="text-sm text-gray-600 mb-2">アクセス: {gym.access}</p>
                <div className="bg-gray-50 rounded p-3 mt-3">
                  <p className="text-sm text-gray-700"><span className="font-medium text-teal-700">おすすめポイント:</span> {gym.point}</p>
                </div>
                {gym.storeHref && <Link href={gym.storeHref} className="inline-block text-sm text-orange-500 hover:underline mt-3">店舗の詳細を見る →</Link>}
              </div>
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
