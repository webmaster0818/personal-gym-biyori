import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プレズ（Plez）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "プレズ（Plez）オンラインパーソナルトレーニングの口コミ・評判を徹底解説。自宅完結型の食事指導＋トレーニング指導、月額2万円台〜の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const affiliateUrl = "https://t.felmat.net/fmcl?ak=D3361D.1.P68082F.Q136169A";

const basicInfo = [
  { label: "サービス名", value: "プレズ（Plez）" },
  { label: "タイプ", value: "オンライン完結型パーソナルトレーニング" },
  { label: "料金帯", value: "月額約21,890円〜（業界平均の約1/3）" },
  { label: "指導内容", value: "食事指導＋トレーニング指導" },
  { label: "特徴", value: "自宅完結 / ジム通い不要 / LINEサポート / 低価格" },
];

const strengths = [
  {
    title: "オンライン完結で自宅からトレーニング",
    desc: "ジムに通う必要がなく、自宅で好きな時間にトレーニングが可能。通勤・育児・家事で忙しい方でもスキマ時間を活用でき、天候や移動時間に左右されません。専用のトレーニング動画やプランで正しいフォームを学べます。",
  },
  {
    title: "業界平均の約1/3の低価格",
    desc: "一般的なパーソナルジムは月額6〜10万円が相場ですが、プレズは月額約2万円台から利用可能。店舗運営コストがかからないオンライン特化だからこそ実現できる価格設定で、コストを抑えながらプロの指導が受けられます。",
  },
  {
    title: "LINEでトレーナーと気軽にやり取り",
    desc: "食事報告やトレーニングの質問はLINEで完結。日々の食事写真を送るだけでフィードバックがもらえるため、モチベーション維持にもつながります。対面では聞きにくい些細な疑問も気軽に相談できる環境です。",
  },
];

const merits = [
  {
    title: "ジム通い不要で時間を節約",
    desc: "移動時間ゼロでトレーニングが始められるため、仕事帰りや早朝の自宅トレーニングも可能。ジムの営業時間に縛られず、自分のペースで続けやすい環境です。",
  },
  {
    title: "低価格で食事指導まで含まれている",
    desc: "月額約2万円台〜で食事指導＋トレーニング指導がセット。一般的なパーソナルジムでは食事指導がオプション料金になることが多い中、プレズは追加料金なしで総合的なボディメイクサポートが受けられます。",
  },
  {
    title: "全国どこからでも利用可能",
    desc: "オンライン完結型のため、地方在住や海外からでも利用OK。近くにパーソナルジムがない方にとって、プロの指導を受けられる貴重な選択肢です。",
  },
];

const demerits = [
  {
    title: "対面指導と比べてフォーム修正が難しい",
    desc: "オンラインのため、トレーナーが直接体に触れてフォームを修正することはできません。動画や写真でのチェックが中心となるため、トレーニング経験がまったくない方は最初に戸惑う可能性があります。",
  },
  {
    title: "自宅にトレーニングスペースが必要",
    desc: "ヨガマット1枚分程度のスペースは必要です。マンションなどでは音や振動が気になるトレーニングは制限される場合があります。",
  },
  {
    title: "自己管理能力が求められる",
    desc: "ジムに行く強制力がないため、モチベーション管理が重要です。LINEでのサポートはありますが、最終的には自分自身で習慣化する意志が必要になります。",
  },
];

const pricingPlans = [
  { name: "ダイエットプラン", duration: "2ヶ月〜", price: "月額21,890円〜", note: "食事指導+トレーニング指導" },
  { name: "ボディメイクプラン", duration: "2ヶ月〜", price: "月額21,890円〜", note: "筋力アップ・体型改善向け" },
  { name: "プレミアムプラン", duration: "2ヶ月〜", price: "月額32,890円〜", note: "ビデオ通話レッスン付き" },
];

const reviewSummary = "プレズの口コミでは「ジムに通わなくていいのが楽」「この価格でプロの指導が受けられるのはコスパが良い」「LINEで食事のアドバイスがもらえて続けやすい」という声が多く見られます。一方で「対面の方がフォーム指導は安心」「自宅だとサボりがち」といった指摘もあります。オンラインに抵抗がない方、コストを抑えたい方には満足度が高い傾向です。";

const faqItems = [
  { q: "プレズは本当にジム通い不要ですか？", a: "はい、完全にオンラインで完結します。自宅でのトレーニングメニューが提供されるため、ジムに通う必要はありません。ジムに通いたい方向けのプランもあります。" },
  { q: "LINEでのやり取りはどのくらいの頻度ですか？", a: "毎日の食事報告に対してトレーナーからフィードバックがあります。トレーニングに関する質問もいつでもLINEで相談可能です。" },
  { q: "運動初心者でも大丈夫ですか？", a: "はい、初心者向けのメニューも用意されています。動画付きで正しいフォームを確認でき、分からないことはLINEで質問できます。" },
  { q: "途中で解約できますか？", a: "はい、最低契約期間終了後はいつでも解約可能です。違約金は発生しません。詳細は公式サイトでご確認ください。" },
  { q: "食事制限は厳しいですか？", a: "極端な食事制限は行いません。一人ひとりの生活スタイルに合わせた無理のない食事プランを提案してもらえます。" },
  { q: "無料カウンセリングはありますか？", a: "はい、無料カウンセリングが用意されています。公式サイトから予約でき、自分に合ったプランを相談できます。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function PlezReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "プレズ（Plez）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          プレズ（Plez）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          プレズ（Plez）はオンライン完結型のパーソナルトレーニングサービスです。ジム通い不要で、自宅にいながらプロのトレーナーから食事指導＋トレーニング指導が受けられます。月額約2万円台〜と業界平均の約1/3の価格が特徴。本記事では、プレズの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">プレズのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">期間</th>
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

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズのよくある質問</h2>
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">プレズが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            プレズ公式サイトはこちら
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
