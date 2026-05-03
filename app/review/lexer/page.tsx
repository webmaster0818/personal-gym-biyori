import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ReXeR（レクサー）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ReXeR（レクサーパーソナルジム）の口コミ・評判を徹底解説。コンテスト優勝トレーナー、医学的根拠に基づくトレーニング、管理栄養士の食事管理、料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ReXeR PeRSoNaL GyM（レクサーパーソナルジム）" },
  { label: "タイプ", value: "高級パーソナルトレーニングジム" },
  { label: "料金帯", value: "月会費15,000円〜" },
  { label: "エリア", value: "東京（赤坂・六本木・渋谷）・大阪（本町）・兵庫 計6店舗" },
  { label: "特徴", value: "高級フィットネスラウンジ発 / コンテスト優勝トレーナー / 医学的根拠 / 管理栄養士の食事管理" },
  { label: "公式サイト", value: "https://personal.rexer-group.com/" },
];

const strengths = [
  {
    title: "コンテスト優勝経験を持つトップトレーナーが在籍",
    desc: "ReXeRにはフィットネスコンテストで優勝経験を持つトレーナーが多数在籍。実績に裏打ちされた高度な指導力で、初心者から上級者まで最適なトレーニングを提供します。トレーナー自身が身体づくりを極めているからこそ、説得力のあるアドバイスが受けられます。",
  },
  {
    title: "医学的根拠×管理栄養士による食事管理",
    desc: "トレーニングメニューは医学的根拠に基づいて設計。さらに管理栄養士が食事管理を担当し、科学的なアプローチで効率的なボディメイクをサポートします。感覚ではなくエビデンスに基づいた指導が、効果実感96.1%という高い満足度につながっています。",
  },
  {
    title: "高級フィットネスラウンジ発の洗練された空間",
    desc: "ReXeRは高級フィットネスラウンジを母体とするパーソナルジム。清潔感のある洗練された空間でトレーニングに集中できます。設備の質・清掃の行き届いた環境は口コミでも高評価を得ており、通うモチベーションを高めてくれます。",
  },
];

const merits = [
  {
    title: "姿勢分析が丁寧で根本から改善できる",
    desc: "初回カウンセリングでは姿勢分析を丁寧に実施。身体の歪みやクセを把握した上でプログラムを組むため、見た目の変化だけでなく、肩こりや腰痛などの根本改善も期待できます。",
  },
  {
    title: "月会費15,000円〜とパーソナルジムでは始めやすい価格帯",
    desc: "高級感のある空間と質の高いトレーナーを備えながら、月会費15,000円〜と比較的始めやすい料金設定。コストパフォーマンスの高さも魅力です。",
  },
  {
    title: "東京・大阪・兵庫の好立地に6店舗展開",
    desc: "赤坂・六本木・渋谷・大阪本町など、ビジネス街や繁華街の好立地に出店。仕事帰りや休日にも通いやすい立地が揃っています。",
  },
];

const demerits = [
  {
    title: "店舗が東京・大阪・兵庫に限定される",
    desc: "2026年4月時点で6店舗のため、これらのエリア以外にお住まいの方は通いにくい可能性があります。今後の店舗拡大に期待です。",
  },
  {
    title: "高級路線のため気軽さに欠ける場合がある",
    desc: "高級フィットネスラウンジ発ということもあり、カジュアルな雰囲気を求める方にはややハードルが高く感じられることも。ただし実際の口コミでは「スタッフが親しみやすい」との声も多いです。",
  },
  {
    title: "人気トレーナーの予約が取りにくい場合がある",
    desc: "コンテスト優勝トレーナーなど実力派トレーナーは人気が高く、希望の時間帯に予約が集中することがあります。早めの予約がおすすめです。",
  },
];

const pricingPlans = [
  { name: "月会費プラン", duration: "−", price: "月額15,000円〜", note: "基本の月会費" },
  { name: "パーソナルトレーニング", duration: "60分/回", price: "別途セッション料", note: "トレーナー指名可" },
  { name: "食事管理オプション", duration: "−", price: "プランにより異なる", note: "管理栄養士がサポート" },
];

const reviewSummary = "ReXeR（レクサー）の口コミでは「効果実感96.1%」を裏付けるように、「身体が変わった」「トレーナーの質が高い」という声が多数。特に姿勢分析の丁寧さや設備の清潔感が好評です。コンテスト優勝トレーナーの指導力と、管理栄養士による食事管理の組み合わせが高い満足度に繋がっています。一方で「店舗がもっと増えてほしい」「人気トレーナーの枠がすぐ埋まる」といった声もあり、人気の高さがうかがえます。";

const affiliateUrl = "https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A";

const faqItems = [
  { q: "ReXeR（レクサー）の月会費はいくらですか？", a: "月会費は15,000円〜です。プランやオプションにより異なりますので、最新の料金は公式サイトまたは無料カウンセリングでご確認ください。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差はありますが、多くの方が2〜3ヶ月で身体の変化を実感されています。効果実感率は96.1%と高い数値を誇ります。" },
  { q: "トレーナーの質はどうですか？", a: "フィットネスコンテスト優勝経験者を含むトップレベルのトレーナーが在籍。医学的根拠に基づいた指導を行います。" },
  { q: "食事管理はどのように行われますか？", a: "管理栄養士が専門的な知識に基づき食事管理をサポートします。無理な食事制限ではなく、科学的根拠に基づいたアドバイスを受けられます。" },
  { q: "無料体験や見学はできますか？", a: "はい、無料カウンセリング・体験が用意されています。公式サイトから予約可能です。姿勢分析も体験時に受けられます。" },
  { q: "店舗はどこにありますか？", a: "東京（赤坂・六本木・渋谷）、大阪（本町）、兵庫に計6店舗展開しています。いずれも駅から徒歩圏内の好立地です。" },
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

const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RexerReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ReXeR（レクサー）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ReXeR（レクサー）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            REXER の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ReXeR PeRSoNaL GyM（レクサーパーソナルジム）は、高級フィットネスラウンジを母体とするパーソナルジムです。コンテスト優勝経験を持つトップトレーナーと管理栄養士が在籍し、医学的根拠に基づいたトレーニングと食事管理を提供。東京・大阪・兵庫に6店舗を展開し、効果実感率96.1%という高い満足度を誇ります。本記事では、ReXeRの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3つの強み */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）のメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>{m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>{d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">料金</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.duration}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）のよくある質問</h2>
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

        {/* バナー広告 */}
        <div className="flex justify-center my-6">
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/U99728.M157545O.Q136169A" width={300} height={250} alt="ReXeR パーソナルジム" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">ReXeR（レクサー）が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。コンテスト優勝トレーナーの指導を体験できます。</p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ReXeR 公式サイトで無料カウンセリングを予約
          </a>
        </section>

        {/* 関連ジム */}
        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
