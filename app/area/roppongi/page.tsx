import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム六本木おすすめ5選",
  description:
    "六本木でおすすめのパーソナルジム5選を厳選紹介。六本木駅・麻布十番エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "六本木";

const selectionPoints = [
  {
    title: "六本木のハイクラスなジムに注目する",
    desc: "六本木は外資系企業や大使館が多いエリアで、パーソナルジムもハイクラスな施設が充実しています。ラグジュアリーな空間でトレーニングしたい方に適したエリアです。",
  },
  {
    title: "深夜営業のジムが多い",
    desc: "六本木はナイトライフの街でもあるため、深夜まで営業しているジムが多いのが特徴です。不規則な勤務形態の方や、夜遅くにトレーニングしたい方にとって便利なエリアです。",
  },
  {
    title: "麻布十番・赤坂のジムも検討する",
    desc: "六本木駅周辺だけでなく、隣接する麻布十番や赤坂エリアにもパーソナルジムがあります。地下鉄で1駅圏内のため、選択肢を広げることができます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "22万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月5万〜10万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "六本木店（六本木駅徒歩3分）",
    point: "六本木の一等地に立地。ハイクラスな環境で確実に結果を出したい方に。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "六本木店（六本木駅徒歩5分）",
    point: "深夜24時まで営業で六本木の不規則な生活リズムにも対応。食事を楽しみながらダイエットできます。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "六本木店（六本木駅徒歩5分）",
    point: "入会金無料で質の高いトレーニング。六本木で本格ボディメイクを目指す方に。",
    reviewed: true,
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "六本木店（六本木駅徒歩3分）",
    point: "六本木エリアで最もリーズナブル。忙しいビジネスパーソンの隙間時間トレーニングに。",
    reviewed: true,
  },
  {
    name: "Dr.トレーニング",
    price: "月35,200円〜（月4回）",
    features: ["医学的根拠に基づくトレーニング", "理学療法士・柔道整復師が在籍", "完全マンツーマン指導", "都度払いにも対応"],
    access: "六本木店（六本木駅徒歩3分）",
    point: "医学的エビデンスに基づいたトレーニングが特徴。体の不調改善も同時に目指せます。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "六本木のパーソナルジムの料金相場はいくらですか？", a: "六本木のパーソナルジムの料金相場は、2ヶ月コースで22万〜40万円です。高級ジムは月10万円以上のところもありますが、エクササイズコーチなど月1万円以下で通えるジムもあります。" },
  { q: "六本木で初心者におすすめのパーソナルジムは？", a: "エクササイズコーチが初心者に最適です。1回20分・月9,900円〜と敷居が低く、AI主導なので気軽に始められます。" },
  { q: "六本木で深夜まで営業しているジムは？", a: "24/7ワークアウトが深夜24時まで営業しています。六本木の不規則な生活リズムに合わせやすい営業時間です。" },
  { q: "六本木にチキンジムはありますか？", a: "2026年4月時点で六本木にチキンジムの店舗はありません。近隣では渋谷店や恵比寿店が最寄りになります。" },
  { q: "六本木で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）が最もリーズナブルです。BEYOND（入会金無料）も総額で考えるとコスパが良い選択肢です。" },
  { q: "パーソナルジムのトレーナーは選べますか？", a: "ジムによります。指名制度があるジムでは希望のトレーナーを選べますが、担当がランダムに変わるジムもあります。トレーナーとの相性は重要なので、体験時に確認しましょう。" },
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
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function RoppongiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム六本木おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          六本木は外資系企業やIT企業が集まる国際的なビジネスエリアで、ハイクラスなパーソナルジムが充実しています。深夜まで営業する店舗も多く、不規則な生活リズムの方にも通いやすいのが特徴です。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3"><h3 className="text-lg font-bold text-gray-800">{i + 1}. {gym.name}</h3>{gym.reviewed && <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">レビュー済</span>}</div>
                <p className="text-sm text-gray-600 mb-3">月額料金: <span className="font-medium text-gray-800">{gym.price}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">{gym.features.map((f, j) => (<li key={j} className="flex items-start gap-2"><span className="text-teal-500 shrink-0 mt-0.5">--</span><span>{f}</span></li>))}</ul>
                <p className="text-sm text-gray-600 mb-2">アクセス: {gym.access}</p>
                <div className="bg-gray-50 rounded p-3 mt-3"><p className="text-sm text-gray-700"><span className="font-medium text-teal-700">おすすめポイント:</span> {gym.point}</p></div>
              </div>
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
