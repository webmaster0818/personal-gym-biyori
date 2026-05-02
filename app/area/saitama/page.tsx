import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジムさいたまおすすめ5選",
  description:
    "さいたまでおすすめのパーソナルジム5選を厳選紹介。大宮・浦和エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "さいたま";

const selectionPoints = [
  {
    title: "大宮駅周辺を中心に探す",
    desc: "さいたま市のパーソナルジムは大宮駅周辺に最も集中しています。JR・東武・ニューシャトルが乗り入れるターミナル駅で、埼玉県内のどこからでもアクセスしやすいエリアです。",
  },
  {
    title: "東京のジムとの比較も視野に入れる",
    desc: "大宮から池袋・新宿へは電車で30〜40分程度。埼玉県内の選択肢が限られる場合は、都内のジムも検討する価値があります。特にJR沿線の方は都内ジムへのアクセスも良好です。",
  },
  {
    title: "駐車場の有無を確認する",
    desc: "埼玉県は車利用が多い地域のため、駐車場完備や近隣にパーキングがあるジムを選ぶと通いやすくなります。大宮駅周辺は駐車場も豊富です。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜35万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜6万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "大宮駅近立地", "手ぶらで通える"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "大宮エリアで低価格にパーソナルトレーニングを始めたい初心者に最適です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "大宮西口店（大宮駅西口徒歩5分）",
    point: "埼玉エリアでの実績も豊富。確実に結果を出したい方に選ばれています。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "全額返金保証あり", "深夜まで営業"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "大宮駅から徒歩圏内で完全個室のマンツーマントレーニングを受けられます。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "入会金無料で始めやすい。本格的なボディメイクを目指す方におすすめです。",
    reviewed: true,
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "さいたまで最も手軽に始められるパーソナルジムの一つ。20分で完了するため忙しい方にも。",
    reviewed: true,
  },
];

const faqItems = [
  { q: "さいたまのパーソナルジムの料金相場はいくらですか？", a: "さいたまのパーソナルジムの料金相場は、2ヶ月コースで20万〜35万円程度です。月額制では月1万〜6万円が目安で、東京と同程度か若干安い傾向にあります。" },
  { q: "大宮エリアでおすすめのパーソナルジムは？", a: "大宮駅周辺にはチキンジム、RIZAP、24/7ワークアウト、BEYOND、エクササイズコーチなど主要ジムが揃っています。" },
  { q: "さいたまで初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。いずれも大宮駅から徒歩圏内で低価格で始められます。" },
  { q: "さいたまで安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "さいたまと東京、どちらのジムに通うべきですか？", a: "大宮在住・在勤なら大宮のジムが便利です。都内に通勤している方は、職場近くの都内ジムの方が通いやすい場合もあります。" },
  { q: "パーソナルジムの解約は簡単にできますか？", a: "月額制のジムは比較的簡単に解約できます。コース契約の場合はクーリングオフ期間内であれば無条件解約、それ以降は解約手数料がかかることがあります。契約前に解約条件を確認しましょう。" },
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
  { name: "東京", href: "/area/tokyo/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "横浜", href: "/area/yokohama/" },
];

export default function SaitamaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジムさいたまおすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          さいたま市は大宮駅を中心にパーソナルジムが充実している埼玉県の中心エリアです。大手チェーンが大宮駅周辺に揃っており、都内に出なくても質の高いパーソナルトレーニングを受けられます。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">カテゴリ</th><th className="px-4 py-3 text-left font-medium">料金目安</th></tr></thead>
              <tbody>{priceRange.map((row) => (<tr key={row.category} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{row.category}</td><td className="px-4 py-3 text-gray-700">{row.range}</td></tr>))}</tbody>
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
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
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
