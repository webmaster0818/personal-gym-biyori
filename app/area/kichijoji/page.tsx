import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム吉祥寺おすすめ5選",
  description:
    "吉祥寺でおすすめのパーソナルジム5選を厳選紹介。吉祥寺駅周辺の料金相場・特徴・アクセスを徹底比較。住みたい街No.1で通えるジムを解説。",
};

const areaName = "吉祥寺";

const selectionPoints = [
  {
    title: "住みたい街No.1の生活圏内で選ぶ",
    desc: "吉祥寺は「住みたい街ランキング」常連の人気エリア。自宅から徒歩や自転車で通えるジムを選べば、日常生活の一部としてトレーニングを習慣化できます。",
  },
  {
    title: "中央線・井の頭線のアクセスを活かす",
    desc: "吉祥寺駅はJR中央線と京王井の頭線が乗り入れ。新宿・渋谷方面からも通いやすく、仕事帰りに立ち寄るスタイルも可能です。",
  },
  {
    title: "おしゃれな街の雰囲気に合ったジムを探す",
    desc: "吉祥寺にはおしゃれなカフェやショップが多く、トレーニング後のリフレッシュも楽しめます。街の雰囲気に合った居心地の良いジムを選びましょう。",
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
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "吉祥寺駅徒歩3分", "朝7時〜夜23時営業"],
    access: "吉祥寺店（吉祥寺駅徒歩3分）",
    point: "低価格で手ぶら通い可能。吉祥寺での日常に組み込みやすいジムです。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "吉祥寺店（吉祥寺駅徒歩5分）",
    point: "入会金無料で本格ボディメイク。質の高いトレーニングが受けられます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "吉祥寺店（吉祥寺駅徒歩2分）",
    point: "20分の時短トレーニング。お買い物やカフェのついでに立ち寄れます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "吉祥寺店（吉祥寺駅徒歩5分）",
    point: "月額制で無理なく通える。吉祥寺の落ち着いた雰囲気で丁寧な指導を受けられます。",
    reviewed: false,
  },
  {
    name: "Apple GYM（アップルジム）",
    price: "月27,280円〜（月4回）",
    features: ["海外式ボディメイク", "完全個室", "手ぶらで通える", "吉祥寺駅徒歩3分"],
    access: "吉祥寺店（吉祥寺駅徒歩3分）",
    point: "モデル体型を目指す海外式メソッド。おしゃれな吉祥寺にマッチしたジムです。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "吉祥寺のパーソナルジムの料金相場はいくらですか？", a: "吉祥寺のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円、月額制で3万〜7万円です。" },
  { q: "吉祥寺で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。低価格で気軽に始められます。" },
  { q: "吉祥寺で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "吉祥寺のパーソナルジムは駅から近いですか？", a: "ほとんどのジムが吉祥寺駅徒歩5分以内にあり、アクセス良好です。" },
  { q: "吉祥寺で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えたい方におすすめです。" },
  { q: "吉祥寺のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "立川", href: "/area/tachikawa/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "中目黒", href: "/area/nakameguro/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function KichijojiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム吉祥寺おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          吉祥寺は「住みたい街」として常に上位にランクインする人気エリア。おしゃれなカフェやショップが立ち並ぶ中、質の高いパーソナルジムも充実しています。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
