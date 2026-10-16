import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム自由が丘おすすめ5選",
  description:
    "自由が丘でおすすめのパーソナルジム5選をご紹介します。自由が丘駅周辺の料金相場・特徴・アクセスを比較しています。女性に人気のジムについても解説します。",
};

const areaName = "自由が丘";

const selectionPoints = [
  {
    title: "住宅街ならではの通いやすさを重視",
    desc: "自由が丘は住宅街として人気のエリアです。自宅からの距離や通いやすさを最優先に考え、生活圏内のジムを選ぶことで長く続けられます。",
  },
  {
    title: "女性向けプログラムが充実しているか確認",
    desc: "自由が丘は女性人気の高いエリアで、女性向けのプログラムや女性専用ジムが充実しています。美容やダイエットを目的とする方に適しています。",
  },
  {
    title: "アットホームな雰囲気のジムを選ぶ",
    desc: "自由が丘には大手チェーンだけでなく、個人経営のアットホームなジムも多数あります。一人ひとりに寄り添った丁寧な指導を受けたい方におすすめです。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜38万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5万円" },
];

const gyms = [
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "自由が丘店（自由が丘駅徒歩3分）",
    point: "入会金無料で、質の高いトレーニングを受けられます。自由が丘で本格的なボディメイクを目指す方に適しています。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "自由が丘店（自由が丘駅徒歩2分）",
    point: "1回20分で完了する時短トレーニングです。お買い物のついでに立ち寄れます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "自由が丘店（自由が丘駅徒歩3分）",
    point: "月額制のため、無理なく続けられます。姿勢改善や慢性的な不調の改善を目指す方にも適しています。",
    reviewed: false,
  },
  {
    name: "Apple GYM（アップルジム）",
    price: "月27,280円〜（月4回）",
    features: ["海外式ボディメイク", "完全個室", "手ぶらで通える", "自由が丘駅徒歩2分"],
    access: "自由が丘店（自由が丘駅徒歩2分）",
    point: "モデル体型を目指すメソッドが女性に人気です。駅から近く、通いやすい点も特徴です。",
    reviewed: false,
  },
  {
    name: "OUTLINE（アウトライン）",
    price: "184,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "完全個室・完全予約制", "生涯アフターフォロー付き", "ベビーカーでの入店可"],
    access: "自由が丘店（自由が丘駅徒歩5分）",
    point: "女性専用のため、安心して通えます。子育て中の方にも通いやすい環境が整っています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "自由が丘のパーソナルジムの料金相場はいくらですか？", a: "自由が丘のパーソナルジムの料金相場は、2ヶ月コースで20万〜38万円、月額制で3万〜8万円です。" },
  { q: "自由が丘で女性におすすめのパーソナルジムを教えてください。", a: "OUTLINE（アウトライン）は完全個室の女性専用ジムです。ベビーカーでの入店も可能で、子育て中の方にも人気です。" },
  { q: "自由が丘で安いパーソナルジムを教えてください。", a: "エクササイズコーチ（月9,900円〜）が最も低価格です。短時間で通えるのもメリットです。" },
  { q: "自由が丘で入会金無料のパーソナルジムを教えてください。", a: "BEYOND（ビヨンド）は入会金無料で始められます。初期費用を抑えたい方におすすめです。" },
  { q: "自由が丘のパーソナルジムは駅から近い立地にありますか？", a: "ほとんどのジムが自由が丘駅徒歩5分以内にあり、アクセスは良好です。" },
  { q: "自由が丘のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。まずは体験トレーニングから始めることをおすすめします。" },
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
  { name: "中目黒", href: "/area/nakameguro/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "恵比寿", href: "/area/ebisu/" },
  { name: "川崎", href: "/area/kawasaki/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function JiyugaokaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム自由が丘おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          自由が丘はおしゃれな街並みと住みやすさで人気のエリアです。女性向けのプログラムやプライベートジムが充実しており、ライフスタイルに合わせた通い方ができます。本記事では、料金・実績・アクセスの観点から選定した5つのジムをご紹介します。
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
