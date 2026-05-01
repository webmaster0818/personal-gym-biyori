import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム麻布十番おすすめ5選",
  description:
    "麻布十番でおすすめのパーソナルジム5選を厳選紹介。麻布十番駅周辺の料金相場・特徴・アクセスを徹底比較。高級エリアで通えるジムを解説。",
};

const areaName = "麻布十番";

const selectionPoints = [
  {
    title: "高級住宅街ならではのプレミアムなジムを選ぶ",
    desc: "麻布十番は高級住宅街として知られ、サービス品質にこだわったプレミアムなパーソナルジムが多数。上質な空間でトレーニングしたい方に最適です。",
  },
  {
    title: "六本木・広尾エリアも合わせて検討",
    desc: "麻布十番は六本木・広尾と隣接しており、徒歩圏内に選択肢が広がります。通いやすさとサービス内容を比較して最適なジムを見つけましょう。",
  },
  {
    title: "プライバシー重視の完全個室ジムを優先",
    desc: "麻布十番エリアはプライバシーを重視する方が多いため、完全個室・完全予約制のジムが充実しています。人目を気にせずトレーニングに集中できます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "25万〜45万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月5万〜10万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月2万〜4万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "麻布十番店（麻布十番駅徒歩3分）",
    point: "麻布十番の上質な環境で確実に結果を出したい方に。プレミアムな空間でトレーニングできます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "麻布十番店（麻布十番駅徒歩5分）",
    point: "入会金無料で高品質なトレーニング。本格ボディメイクを目指す方に人気です。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "麻布十番駅徒歩5分", "朝7時〜夜23時営業"],
    access: "麻布十番店（麻布十番駅徒歩5分）",
    point: "高級エリアでも低価格で通える。初心者でも気軽に始められます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "六本木店（麻布十番駅徒歩10分）",
    point: "完全個室でプライバシーを確保。深夜まで営業で多忙な方にも対応しています。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "Dr.トレーニング",
    price: "月35,200円〜（月4回）",
    features: ["医学的根拠に基づくトレーニング", "完全オーダーメイドプログラム", "姿勢改善・腰痛改善にも対応", "麻布十番駅徒歩3分"],
    access: "麻布十番店（麻布十番駅徒歩3分）",
    point: "医学的アプローチで体の根本から改善。健康意識の高い麻布十番の方に支持されています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "麻布十番のパーソナルジムの料金相場はいくらですか？", a: "麻布十番のパーソナルジムの料金相場は、2ヶ月コースで25万〜45万円です。高級エリアのため、プレミアムなサービスが多い傾向があります。" },
  { q: "麻布十番で初心者におすすめのパーソナルジムは？", a: "チキンジムが初心者向けです。低価格で手ぶら通い可能、初心者の利用者が90%以上です。" },
  { q: "麻布十番で完全個室のパーソナルジムは？", a: "24/7ワークアウトやRIZAPは完全個室でプライバシーが確保されています。" },
  { q: "麻布十番で安いパーソナルジムは？", a: "チキンジム（月々6,800円〜/分割時）が低価格帯です。高級エリアでもリーズナブルに通えます。" },
  { q: "麻布十番で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えたい方におすすめです。" },
  { q: "麻布十番のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "六本木", href: "/area/roppongi/" },
  { name: "赤坂", href: "/area/akasaka/" },
  { name: "恵比寿", href: "/area/ebisu/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function AzabuAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム麻布十番おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          麻布十番は東京を代表する高級住宅街であり、上質なパーソナルジムが集まるエリアです。プライバシーを重視した完全個室ジムやプレミアムなサービスが充実しています。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
                {gym.storeHref && <Link href={gym.storeHref} className="inline-block text-sm text-orange-500 hover:underline mt-3">店舗の詳細を見る →</Link>}
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
