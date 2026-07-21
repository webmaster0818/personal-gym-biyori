import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム梅田おすすめ7選",
  description:
    "梅田でおすすめのパーソナルジム7選を厳選紹介。梅田駅周辺の料金相場・特徴・アクセスを徹底比較。大阪キタで通えるジムを解説。",
};

const areaName = "梅田";

const selectionPoints = [
  {
    title: "大阪キタの中心地で通勤動線上のジムを選ぶ",
    desc: "梅田は大阪キタの中心地でオフィスワーカーが多いエリア。通勤ルート上のジムを選ぶことで、仕事帰りに無理なく通い続けられます。",
  },
  {
    title: "JR・阪急・阪神・地下鉄のアクセスを活かす",
    desc: "梅田にはJR大阪駅・阪急梅田駅・阪神梅田駅・地下鉄梅田駅が集結。利用路線に合わせてジムを選ぶと通いやすさが格段にアップします。",
  },
  {
    title: "激戦区ならではのキャンペーンを比較する",
    desc: "梅田はパーソナルジムの激戦区で、各ジムが入会金無料や初月割引などのキャンペーンを実施しています。お得なタイミングで入会しましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "18万〜38万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "梅田駅徒歩3分", "朝7時〜夜23時営業"],
    access: "梅田店（梅田駅徒歩3分）",
    point: "低価格で手ぶら通い可能。梅田で最も気軽に始められるジムです。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "梅田店（梅田駅徒歩5分）",
    point: "大阪キタで確実に結果を出したい方に。食事管理まで徹底サポートします。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "梅田店（梅田駅徒歩5分）",
    point: "入会金無料で始めやすい。梅田で本格ボディメイクを目指す方に人気です。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "梅田店（梅田駅徒歩5分）",
    point: "深夜まで営業で残業後もOK。しっかり食べながらダイエットできます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "梅田店（梅田駅徒歩3分）",
    point: "20分で完了のコスパ最強ジム。ランチタイムにも通えます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "梅田店（梅田駅徒歩5分）",
    point: "月額制で無理なく続けられる。姿勢改善や腰痛持ちの方にもおすすめです。",
    reviewed: false,
  },
  {
    name: "UNDEUX SUPERBODY（アンドゥスーパーボディ）",
    price: "月29,800円〜（月4回）",
    features: ["女性専用パーソナルジム", "食事宅配サービス付き", "おしゃれな内装", "梅田駅徒歩5分"],
    access: "梅田スタジオ（梅田駅徒歩5分）",
    point: "女性専用で食事までトータルサポート。大阪の女性に人気のジムです。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "梅田のパーソナルジムの料金相場はいくらですか？", a: "梅田のパーソナルジムの料金相場は、2ヶ月コースで18万〜38万円です。激戦区のためキャンペーンも多く、実質的にお得に通えることもあります。" },
  { q: "梅田で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。低価格で気軽に始められます。" },
  { q: "梅田で女性におすすめのパーソナルジムは？", a: "UNDEUX SUPERBODYは女性専用で食事宅配サービスも付いており、女性に特化したプログラムが人気です。" },
  { q: "梅田で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "梅田で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えたい方におすすめです。" },
  { q: "梅田のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "なんば", href: "/area/namba/" },
  { name: "大阪", href: "/area/osaka/" },
  { name: "神戸", href: "/area/kobe/" },
  { name: "京都", href: "/area/kyoto/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function UmedaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "大阪", href: "/area/osaka/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム梅田おすすめ7選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          梅田は大阪キタの中心地であり、JR大阪駅・阪急・阪神・地下鉄が集結する大阪最大のターミナルエリアです。パーソナルジムの激戦区で、各ジムがキャンペーンを積極的に展開しています。本記事では、料金・実績・アクセスの観点から厳選した7ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム7選</h2>
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

        <AreaGymList area="umeda" areaName="梅田" />

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
