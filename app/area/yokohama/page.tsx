import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム横浜おすすめ7選",
  description:
    "横浜でおすすめのパーソナルジム7選を厳選紹介。横浜駅・みなとみらい・関内エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "横浜";

const selectionPoints = [
  {
    title: "横浜駅周辺に集中するジムから選ぶ",
    desc: "横浜のパーソナルジムは横浜駅西口・東口周辺に多く集中しています。複数路線が乗り入れる横浜駅は、神奈川県内のどこからでもアクセスしやすいため、まずは横浜駅周辺で探すのがおすすめです。",
  },
  {
    title: "東京のジムと料金を比較する",
    desc: "横浜エリアは東京都心と比べてやや安い傾向にありますが、大手チェーンは同一料金の場合が多いです。都内への通勤圏内の方は、東京と横浜の両方で比較検討する価値があります。",
  },
  {
    title: "駅からの距離と営業時間を確認する",
    desc: "横浜駅周辺は繁華街が広がっており、駅から5分以上歩く店舗もあります。特に夜遅い時間帯に通う予定の方は、営業時間と駅からの距離をしっかり確認しましょう。",
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
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "みなとみらい駅近立地", "手ぶらで通える"],
    access: "横浜みなとみらい店（みなとみらい駅徒歩3分）",
    point: "みなとみらいエリアで低価格にパーソナルトレーニングを受けられる。初心者に特におすすめです。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "横浜西口店・横浜東口店・関内店",
    point: "横浜エリアに3店舗展開。自宅や職場に近い店舗を選べます。",
    reviewed: true,
    storeHref: "/review/rizap/yokohama/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "横浜店（横浜駅西口徒歩7分）",
    point: "食事制限が緩やかなため、無理なく続けやすいと横浜エリアでも人気です。",
    reviewed: true,
    storeHref: "/review/247workout/yokohama/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "横浜店・横浜元町店",
    point: "入会金無料で始めやすい。本格的なボディメイクを目指す方に選ばれています。",
    reviewed: true,
    storeHref: "/review/beyond/yokohama/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "横浜店（横浜駅徒歩5分）",
    point: "横浜で最もリーズナブルにパーソナルトレーニングを始められる選択肢の一つです。",
    reviewed: true,
  },
  {
    name: "OUTLINE（アウトライン）",
    price: "184,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "完全個室・完全予約制", "生涯アフターフォロー付き", "横浜発のジム"],
    access: "横浜店（横浜駅西口徒歩5分）",
    point: "横浜発祥の女性専用パーソナルジム。生涯リバウンドサポートが大きな強みです。",
    reviewed: false,
  },
  {
    name: "WHOEVER（フーエバー）",
    price: "月92,400円〜（月8回）",
    features: ["完全個室のマンツーマン指導", "キックボクシングも取り入れたトレーニング", "食事指導サポート付き", "横浜に複数店舗"],
    access: "横浜店・武蔵小杉店",
    point: "キックボクシングを取り入れた楽しいトレーニングが特徴。飽きずに続けやすいと評判です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "横浜のパーソナルジムの料金相場はいくらですか？", a: "横浜のパーソナルジムの料金相場は、2ヶ月コースで20万〜38万円程度です。月額制では月1万〜7万円が目安です。" },
  { q: "横浜駅周辺でおすすめのパーソナルジムは？", a: "RIZAP、24/7ワークアウト、エクササイズコーチ、OUTLINEなどが横浜駅徒歩圏内にあります。選択肢が豊富なので、目的と予算に合わせて選べます。" },
  { q: "横浜で女性におすすめのパーソナルジムは？", a: "横浜発祥の女性専用ジムOUTLINE（アウトライン）がおすすめです。完全個室で生涯リバウンドサポート付きです。" },
  { q: "横浜で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "横浜と東京、どちらのジムに通うべきですか？", a: "通いやすさを最優先に考えましょう。横浜在住・在勤の方は横浜のジムが継続しやすいです。ただし、東京の方が選択肢が多いため、横浜駅から都内に通勤している方は職場近くのジムも検討する価値があります。" },
  { q: "パーソナルジムの契約前に確認すべきことは？", a: "総額料金（分割の場合の手数料含む）、解約条件、予約の取りやすさ、トレーナーの変更可否を必ず確認しましょう。無料カウンセリングで質問リストを持参すると漏れなく確認できます。" },
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
  { name: "さいたま", href: "/area/saitama/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "新宿", href: "/area/shinjuku/" },
];

export default function YokohamaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム横浜おすすめ7選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          横浜は神奈川県の中心都市であり、横浜駅・みなとみらい・関内エリアを中心にパーソナルジムが充実しています。東京に比べて相場がやや抑えめで、横浜発祥のジムもあるなど、地域ならではの選択肢が魅力です。本記事では、料金・実績・アクセスの観点から厳選した7ジムを紹介します。
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
                {priceRange.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.category}</td>
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                  </tr>
                ))}
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
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
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

        <AreaGymList area="yokohama" areaName="横浜" />

        <p className="mb-8 text-sm">
          <Link href="/db/yokohama/" className="underline text-teal-700 font-medium">→ 横浜のパーソナルジム全データベース(60店・Gマップ実測)を見る</Link>
        </p>

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
