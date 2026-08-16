import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";
import AreaGymList from "@/components/AreaGymList";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム仙台おすすめ5選",
  description:
    "仙台でおすすめのパーソナルジム5選を厳選紹介。仙台駅周辺の料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "仙台";

const selectionPoints = [
  {
    title: "仙台駅・青葉通エリアを中心に探す",
    desc: "仙台のパーソナルジムは仙台駅西口から青葉通一番町にかけてのエリアに集中しています。アーケード街に近い店舗は天候を気にせず通えるのが利点です。",
  },
  {
    title: "東北の料金相場を把握する",
    desc: "仙台は東北最大の都市ですが、東京と比べるとパーソナルジムの選択肢はやや少なめです。その分、大手チェーンのキャンペーンが充実していることもあるため、入会時期を見極めましょう。",
  },
  {
    title: "継続しやすい環境かどうかを重視する",
    desc: "仙台は冬場の寒さが厳しいため、駅からの距離や施設内の快適さが継続のポイントになります。シャワー完備・手ぶらOKのジムは特に冬場の通いやすさにつながります。",
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
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "仙台駅近立地", "手ぶらで通える"],
    access: "仙台店（仙台駅徒歩5分）",
    point: "仙台で低価格にパーソナルトレーニングを始めたい方に最適。手ぶらで通えるため冬場も気軽です。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "仙台店（仙台駅徒歩8分）",
    point: "東北エリアでの実績も豊富。短期集中で確実に結果を出したい方に選ばれています。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "全額返金保証あり", "駅チカ立地"],
    access: "仙台店（仙台駅徒歩5分）",
    point: "仙台駅から徒歩圏内。食事制限が緩やかで、東北の食文化を楽しみながらダイエットできます。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "仙台店（仙台駅徒歩7分）",
    point: "入会金無料で始めやすく、トレーナーの質が高いのが特徴。仙台で本格ボディメイクを目指す方に。",
    reviewed: true,
  },
  {
    name: "リアルワークアウト",
    price: "月26,400円〜（月4回）",
    features: ["月額制で通いやすい", "完全個室マンツーマン", "食事アドバイス付き", "仙台に複数店舗"],
    access: "仙台店（仙台駅徒歩5分）",
    point: "月額制で無理なく続けやすい。仙台で地元に密着した運営を行っています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "仙台のパーソナルジムの料金相場はいくらですか？", a: "仙台のパーソナルジムの料金相場は、2ヶ月コースで18万〜35万円程度です。月額制では月1万〜6万円が目安です。" },
  { q: "仙台で初心者におすすめのパーソナルジムは？", a: "チキンジムが初心者に特におすすめです。利用者の90%以上が初心者で、低価格かつ手ぶらで通えます。" },
  { q: "仙台にエクササイズコーチはありますか？", a: "2026年4月時点で仙台にエクササイズコーチの店舗はありません。低価格ジムをお探しの方はチキンジムが候補になります。" },
  { q: "仙台のパーソナルジムは冬でも通いやすいですか？", a: "仙台駅周辺のジムは駅から徒歩5〜8分程度の立地が多く、地下道やペデストリアンデッキを利用できる場合もあります。手ぶらで通えるジムなら荷物も少なく冬場も快適です。" },
  { q: "仙台で安いパーソナルジムは？", a: "チキンジム（月々6,800円〜/分割時）が最も低価格帯です。リアルワークアウト（月26,400円〜）も月額制で始めやすい価格です。" },
  { q: "パーソナルジムの食事指導は厳しいですか？", a: "ジムによって異なります。RIZAPはやや厳格な食事管理、24/7ワークアウトは3食しっかり食べる方針、チキンジムはゆるやかなアドバイスが中心です。自分の食生活に合った方針のジムを選びましょう。" },
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
  { name: "札幌", href: "/area/sapporo/" },
  { name: "東京", href: "/area/tokyo/" },
  { name: "さいたま", href: "/area/saitama/" },
];

export default function SendaiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム仙台おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          仙台は東北最大の都市で、仙台駅周辺を中心にパーソナルジムの出店が増えています。大手チェーンから地元密着型まで選べる環境が整いつつあり、東北在住でパーソナルジムを探している方の選択肢が広がっています。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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

        <AreaGymList area="sendai" areaName="仙台" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/sendai/" className="underline text-teal-700 font-medium">→ 仙台のパーソナルジム全データベース(Gマップ実測・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
