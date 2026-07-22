import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム名古屋おすすめ7選",
  description:
    "名古屋でおすすめのパーソナルジム7選を厳選紹介。栄・名駅エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "名古屋";

const selectionPoints = [
  {
    title: "名駅・栄エリアを中心に探す",
    desc: "名古屋のパーソナルジムは名古屋駅（名駅）周辺と栄エリアに集中しています。地下街から直結のビルに入っている店舗も多く、天候を気にせず通えるのが名古屋ならではの利点です。",
  },
  {
    title: "車通いも視野に入れる",
    desc: "名古屋は車社会のため、駐車場完備のジムや近隣にコインパーキングがあるジムを選ぶのも有効です。駅から離れていても車でアクセスしやすい店舗もあります。",
  },
  {
    title: "地元密着型ジムもチェックする",
    desc: "名古屋には大手チェーンに加えて、地元密着型の質の高いパーソナルジムも多数あります。口コミ評価や実績を確認し、大手以外の選択肢も検討してみましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜38万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜7万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "名古屋栄店・豊田店の2店舗", "手ぶらで通える"],
    access: "名古屋栄店（栄駅徒歩3分）、豊田店",
    point: "栄駅から徒歩圏内で通いやすく、低価格で始められるのが魅力。初心者にとくにおすすめです。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "名駅南店・栄店・金山店",
    point: "名古屋エリアに複数店舗展開。確実に結果を出したい方に選ばれています。",
    reviewed: true,
    storeHref: "/review/rizap/nagoya/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜まで営業", "全額返金保証あり"],
    access: "名古屋栄店・名古屋久屋大通店",
    point: "栄エリアに2店舗。3食食べながらダイエットできる手法が名古屋でも人気です。",
    reviewed: true,
    storeHref: "/review/247workout/nagoya/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "名古屋栄店・名古屋駅前店",
    point: "入会金無料で始めやすい。トレーナーの質が高く、ボディメイクに本気の方に好評です。",
    reviewed: true,
    storeHref: "/review/beyond/nagoya/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "名古屋栄店・名古屋駅店・金山店",
    point: "名古屋市内に複数店舗。短時間・低価格で気軽にパーソナルトレーニングを始められます。",
    reviewed: true,
  },
  {
    name: "ACHT（アハト）",
    price: "月44,000円〜（月4回）",
    features: ["名古屋発のパーソナルジム", "完全個室マンツーマン", "姿勢改善にも注力", "経験豊富なトレーナー在籍"],
    access: "栄店（栄駅徒歩5分）",
    point: "名古屋発の地域密着型ジム。丁寧なカウンセリングと個別対応が評判です。",
    reviewed: false,
  },
  {
    name: "メルメイク",
    price: "月39,800円〜（月4回）",
    features: ["完全個室マンツーマン指導", "月額制で通いやすい", "食事指導サポート付き", "名古屋に複数店舗"],
    access: "栄店・名駅店・藤が丘店",
    point: "月額制で無理なく通えるのが魅力。名古屋市内に複数店舗があり、通いやすい環境です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "名古屋のパーソナルジムの料金相場はいくらですか？", a: "名古屋のパーソナルジムの料金相場は、2ヶ月コースで20万〜38万円程度です。月額制では月1万〜7万円が目安です。東京・大阪と比べて同程度か若干安い傾向にあります。" },
  { q: "名古屋で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。いずれも栄駅から徒歩圏内にあり、低価格で始められます。" },
  { q: "栄エリアでおすすめのパーソナルジムは？", a: "栄エリアにはチキンジム、RIZAP、24/7ワークアウト、BEYOND、エクササイズコーチなど主要ジムが揃っています。" },
  { q: "名古屋で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）が低価格帯でおすすめです。" },
  { q: "名古屋のパーソナルジムに駐車場はありますか？", a: "専用駐車場を持つジムは少ないですが、栄・名駅エリアには近隣にコインパーキングが多数あります。駐車場サービスの有無は各ジムにお問い合わせください。" },
  { q: "パーソナルジムの効果はいつから実感できますか？", a: "一般的に2〜3ヶ月で体型の変化を実感する方が多いです。週2回の通いと食事管理を併せて行うことで、より早く効果を感じられます。" },
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
  { name: "大阪", href: "/area/osaka/" },
  { name: "京都", href: "/area/kyoto/" },
  { name: "東京", href: "/area/tokyo/" },
  { name: "福岡", href: "/area/fukuoka/" },
];

export default function NagoyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム名古屋おすすめ7選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          名古屋は名駅・栄を中心にパーソナルジムの出店が活発なエリアです。大手チェーンから地元密着型ジムまで選択肢が豊富で、車社会ならではの駐車場付き店舗もあります。本記事では、料金・実績・アクセスの観点から厳選した7ジムを紹介します。
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

        <AreaGymList area="nagoya" areaName="名古屋" />

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
