import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム赤坂おすすめ5選",
  description:
    "赤坂でおすすめのパーソナルジム5選を厳選紹介。赤坂駅周辺の料金相場・特徴・アクセスを徹底比較。ビジネスパーソン向けのジムを解説。",
};

const areaName = "赤坂";

const selectionPoints = [
  {
    title: "オフィス街の立地を活かして通勤ルート上で選ぶ",
    desc: "赤坂はオフィス街として発展しており、仕事前・仕事後にスムーズに通えるジムを選ぶことが継続のカギです。駅徒歩5分以内のジムがおすすめです。",
  },
  {
    title: "早朝・深夜営業のジムを優先",
    desc: "赤坂で働くビジネスパーソンは多忙な方が多いため、早朝7時〜深夜23時以降営業のジムを選ぶと、スケジュールに柔軟に対応できます。",
  },
  {
    title: "溜池山王・赤坂見附駅からのアクセスも確認",
    desc: "赤坂エリアには赤坂駅のほか、溜池山王駅・赤坂見附駅もあります。利用する路線に合わせてアクセスの良いジムを選びましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "22万〜42万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月4万〜9万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "赤坂見附店（赤坂見附駅徒歩3分）",
    point: "赤坂のビジネスパーソンに支持。結果重視の方に最適なプログラムです。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "赤坂店（赤坂駅徒歩3分）",
    point: "入会金無料で始めやすい。赤坂で質の高いボディメイクを目指せます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "赤坂駅徒歩5分", "朝7時〜夜23時営業"],
    access: "赤坂店（赤坂駅徒歩5分）",
    point: "低価格で手ぶら通い可能。ビジネス街でも気軽に始められます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "赤坂店（赤坂駅徒歩3分）",
    point: "20分で完了するのでランチタイムにも通える。忙しいビジネスパーソンに最適です。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "Dr.トレーニング",
    price: "月35,200円〜（月4回）",
    features: ["医学的根拠に基づくトレーニング", "完全オーダーメイドプログラム", "姿勢改善・腰痛改善にも対応", "赤坂駅徒歩3分"],
    access: "赤坂店（赤坂駅徒歩3分）",
    point: "デスクワークによる姿勢の崩れや腰痛を根本から改善したい方におすすめです。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "赤坂のパーソナルジムの料金相場はいくらですか？", a: "赤坂のパーソナルジムの料金相場は、2ヶ月コースで22万〜42万円です。ビジネス街のため高品質なサービスが多い傾向があります。" },
  { q: "赤坂で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。手ぶらで通えて低価格なので気軽に始められます。" },
  { q: "赤坂で短時間で通えるパーソナルジムは？", a: "エクササイズコーチは1回20分で完了。ランチタイムや隙間時間に通えます。" },
  { q: "赤坂で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "赤坂で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えたい方におすすめです。" },
  { q: "赤坂のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "麻布十番", href: "/area/azabu/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function AkasakaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム赤坂おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          赤坂は東京を代表するビジネス街のひとつで、多忙なビジネスパーソンが効率的に通えるパーソナルジムが充実しています。駅近でアクセスが良く、早朝から深夜まで営業するジムも多いのが特徴です。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
