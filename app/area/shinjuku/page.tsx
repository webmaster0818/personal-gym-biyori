import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム新宿おすすめ8選",
  description:
    "新宿でおすすめのパーソナルジム8選を厳選紹介。新宿駅周辺の料金相場・特徴・アクセスを徹底比較。西口・東口・南口エリア別に解説。",
};

const areaName = "新宿";

const selectionPoints = [
  {
    title: "出口別にエリアを絞って探す",
    desc: "新宿駅は西口・東口・南口と出口によって雰囲気が大きく異なります。西口はオフィス街でビジネスパーソン向けジムが多く、東口・南口は繁華街に近いため営業時間が長い店舗が充実しています。",
  },
  {
    title: "激戦区ならではの競争価格を活かす",
    desc: "新宿はパーソナルジムの激戦区のため、各ジムがキャンペーンや割引を積極的に実施しています。入会金無料・初月割引などの特典を比較し、お得なタイミングで入会しましょう。",
  },
  {
    title: "通勤・通学の動線上にあるジムを選ぶ",
    desc: "新宿は1日の乗降客数が世界最多級の駅です。自宅や職場からの通勤ルート上にあるジムを選ぶと、余計な移動時間なく通えるため継続しやすくなります。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "新宿駅徒歩3分", "朝7時〜夜23時営業"],
    access: "新宿店（新宿駅徒歩3分）",
    point: "新宿駅近で低価格。初めてパーソナルジムを利用する方に特におすすめです。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "新宿店・新宿三丁目店",
    point: "新宿エリアに2店舗。結果重視で投資を惜しまない方に。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "新宿東口店・新宿西口店",
    point: "深夜24時まで営業。残業後でも通える環境が新宿のビジネスパーソンに支持されています。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "新宿店（新宿駅徒歩5分）",
    point: "入会金無料でハイクオリティ。新宿で本格ボディメイクを目指す方に人気です。",
    reviewed: true,
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "新宿西口店（新宿駅西口徒歩3分）",
    point: "20分で完了するため、ランチタイムや隙間時間にも通えます。",
    reviewed: true,
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "新宿店（新宿駅徒歩5分）",
    point: "月額制で無理なく続けられる。姿勢改善や慢性的な不調の改善を目指す方にも。",
    reviewed: false,
  },
  {
    name: "ASPI（アスピ）",
    price: "月7,600円〜（月2回）",
    features: ["全トレーナーが有資格者", "月額7,600円〜の低コスト", "オンライン食事指導対応", "ストレッチ指導も充実"],
    access: "新宿店（新宿三丁目駅徒歩3分）",
    point: "米国資格保有トレーナーの指導を低価格で受けられる。コスパ重視の方に。",
    reviewed: false,
  },
  {
    name: "OUTLINE（アウトライン）",
    price: "184,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "完全個室・完全予約制", "生涯アフターフォロー付き", "ベビーカー入店OK"],
    access: "新宿店（新宿駅徒歩5分）",
    point: "女性専用で安心。新宿で女性がリラックスしてトレーニングできる環境です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "新宿のパーソナルジムの料金相場はいくらですか？", a: "新宿のパーソナルジムの料金相場は、2ヶ月コースで20万〜40万円です。激戦区のため割引キャンペーンが多く、実質的にはやや安くなることもあります。" },
  { q: "新宿で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。チキンジムは手ぶらで通えて低価格、エクササイズコーチは1回20分で気軽に始められます。" },
  { q: "新宿で深夜まで営業しているパーソナルジムは？", a: "24/7ワークアウトは深夜24時まで営業しています。残業が多いビジネスパーソンに特に人気です。" },
  { q: "新宿で女性におすすめのパーソナルジムは？", a: "OUTLINE（アウトライン）は女性専用で完全個室のため安心して通えます。ベビーカー入店も可能です。" },
  { q: "新宿で安いパーソナルジムは？", a: "ASPI（月7,600円〜）、エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "新宿のパーソナルジムは予約が取りやすいですか？", a: "激戦区のため各ジムが顧客確保に積極的で、予約枠も十分用意されている傾向があります。ただし平日夜・土日は人気のため、早めの予約がおすすめです。" },
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
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function ShinjukuAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム新宿おすすめ8選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          新宿は日本屈指のターミナル駅であり、パーソナルジムの激戦区です。西口のオフィス街から東口の繁華街まで、多種多様なジムが出店しています。競争が激しい分、料金やサービスの質が高い水準にあるのが新宿エリアの魅力です。本記事では、料金・実績・アクセスの観点から厳選した8ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム8選</h2>
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
