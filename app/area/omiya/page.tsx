import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "【2026最新】パーソナルジム大宮おすすめ6選",
  description:
    "大宮でおすすめのパーソナルジム6選を厳選紹介。大宮駅周辺の料金相場・特徴・アクセスを徹底比較。埼玉県最大のターミナル駅周辺のジムを解説。",
};

const areaName = "大宮";

const selectionPoints = [
  {
    title: "埼玉県最大のターミナル駅の利便性を活かす",
    desc: "大宮駅はJR・東武・ニューシャトルなど多数の路線が乗り入れる埼玉県最大のターミナル駅。県内各地からアクセスしやすく、広範囲の方が通えるジムが揃っています。",
  },
  {
    title: "都心より手頃な料金設定に注目",
    desc: "大宮は東京都心と比べてテナント料が抑えめなため、同品質のサービスをよりリーズナブルに受けられるのが大きな魅力です。",
  },
  {
    title: "東口・西口のエリア特性を理解して選ぶ",
    desc: "大宮駅の東口は商業施設が充実し、西口はオフィス街。ライフスタイルや通い方に合わせてエリアを絞ると効率的にジムを見つけられます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "18万〜35万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜7万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "大宮駅徒歩3分", "朝7時〜夜23時営業"],
    access: "大宮店（大宮駅徒歩3分）",
    point: "低価格で手ぶら通い可能。大宮で最も気軽に始められるパーソナルジムです。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "大宮西口店（大宮駅西口徒歩5分）",
    point: "埼玉エリアで確実に結果を出したい方に。食事管理まで徹底サポートします。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "入会金無料で質の高いトレーニング。大宮で本格ボディメイクを目指す方に。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "深夜まで営業で仕事帰りにも通える。食事指導も充実しています。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "大宮店（大宮駅徒歩3分）",
    point: "20分で完了するコスパ最強ジム。埼玉県内でも人気急上昇中です。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "大宮店（大宮駅徒歩5分）",
    point: "月額制で無理なく継続。体の不調改善にも対応する丁寧な指導が好評です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "大宮のパーソナルジムの料金相場はいくらですか？", a: "大宮のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円です。都心と比べて手頃な価格設定が特徴です。" },
  { q: "大宮で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。低価格で気軽に始められます。" },
  { q: "大宮で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "大宮のパーソナルジムは駅から近いですか？", a: "ほとんどのジムが大宮駅徒歩5分以内にあり、JR各線からのアクセスも良好です。" },
  { q: "大宮で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えたい方におすすめです。" },
  { q: "大宮のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "埼玉", href: "/area/saitama/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "川崎", href: "/area/kawasaki/" },
  { name: "横浜", href: "/area/yokohama/" },
];

export default function OmiyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "埼玉", href: "/area/saitama/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム大宮おすすめ6選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          大宮は埼玉県最大のターミナル駅を擁し、県内はもちろん北関東からのアクセスも良好なエリアです。都心より手頃な料金でパーソナルトレーニングを始められるのが大きな魅力です。本記事では、料金・実績・アクセスの観点から厳選した6ジムを紹介します。
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
