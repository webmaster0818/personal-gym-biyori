import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム京都おすすめ5選",
  description:
    "京都でおすすめのパーソナルジム5選を厳選紹介。河原町・四条エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "京都";

const selectionPoints = [
  {
    title: "四条河原町・烏丸エリアを中心に探す",
    desc: "京都のパーソナルジムは四条河原町・烏丸エリアに多く集まっています。阪急・地下鉄の交差する四条烏丸は、京都市内のどこからでもアクセスしやすいエリアです。",
  },
  {
    title: "大阪のジムとの比較も検討する",
    desc: "京都から大阪は阪急で約40分。京都市内の選択肢が限られる場合、大阪のジムも視野に入れると選べる幅が広がります。特に阪急沿線のジムはアクセスが便利です。",
  },
  {
    title: "生活リズムに合った営業時間を確認する",
    desc: "京都は観光都市としての性格もあり、ジムの営業時間帯が店舗によって異なります。早朝や夜遅くに通いたい方は営業時間を事前に確認しましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "18万〜35万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜6万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "河原町駅近立地", "手ぶらで通える"],
    access: "京都河原町店（河原町駅徒歩3分）",
    point: "河原町の好立地で低価格にパーソナルトレーニングを始められる。初心者に最適です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "京都店（烏丸駅徒歩5分）",
    point: "京都で確実に結果を出したい方に。烏丸エリアの好立地で通いやすい環境です。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "全額返金保証あり", "深夜まで営業"],
    access: "京都河原町店（河原町駅徒歩5分）",
    point: "京都の食文化を楽しみながらダイエットできる。3食食べるメソッドが京都グルメ好きに人気です。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "京都四条店（烏丸駅徒歩3分）",
    point: "四条烏丸エリアでアクセス抜群。入会金無料で質の高いトレーニングを受けられます。",
    reviewed: true,
  },
  {
    name: "BODY STOIC（ボディストイック）",
    price: "月33,000円〜（月4回）",
    features: ["京都発のパーソナルジム", "完全個室マンツーマン", "食事指導サポート付き", "月額制で通いやすい"],
    access: "四条烏丸店（烏丸駅徒歩3分）",
    point: "京都発の地元密着型ジム。月額制で無理なく続けやすい料金設定が魅力です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "京都のパーソナルジムの料金相場はいくらですか？", a: "京都のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円程度です。月額制では月1万〜6万円が目安です。" },
  { q: "京都で初心者におすすめのパーソナルジムは？", a: "チキンジム京都河原町店が初心者に特におすすめです。低価格かつ手ぶらで通えるため、初めての方でも始めやすい環境です。" },
  { q: "河原町エリアにパーソナルジムは多いですか？", a: "はい、河原町・四条烏丸は京都のパーソナルジム集積地です。チキンジム、24/7ワークアウト、BEYONDなどが出店しています。" },
  { q: "京都にエクササイズコーチはありますか？", a: "2026年4月時点で京都にエクササイズコーチの店舗はありません。低価格ジムをお探しの方はチキンジムが候補になります。" },
  { q: "京都と大阪、どちらのジムに通うべきですか？", a: "京都在住・在勤なら京都のジムが通いやすいです。大阪に通勤している方は大阪のジムの方が選択肢が多く便利でしょう。" },
  { q: "パーソナルジムの効果を最大化するには？", a: "週2回の通い、トレーナーの食事アドバイスの実践、十分な睡眠の確保が3つの柱です。トレーニングだけでなく生活全体を見直すことで効果が最大化します。" },
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
  { name: "神戸", href: "/area/kobe/" },
  { name: "名古屋", href: "/area/nagoya/" },
];

export default function KyotoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム京都おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          京都は四条河原町・烏丸エリアを中心にパーソナルジムが集まっています。大手チェーンが揃っているほか、地元密着型のジムも存在し、選択肢が広がっています。大阪へのアクセスも良いため、両エリアでの比較検討もおすすめです。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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

        <AreaGymList area="kyoto" areaName="京都" />

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
