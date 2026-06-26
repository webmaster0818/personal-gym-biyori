import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "リアルボディの口コミ・評判は？仙台のパーソナルジムを徹底解説【2026年】",
  description:
    "リアルボディの口コミ・評判を徹底解説。仙台発・地域密着パーソナルジムの料金の目安、メリット・デメリット、良い口コミ・悪い口コミの傾向、よくある質問まで網羅。失敗しないジム選びの判断材料に。",
};

const basicInfo = [
  { label: "ジム名", value: "リアルボディ" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額20,000円〜60,000円程度" },
  { label: "エリア", value: "仙台を中心に東北エリアで展開" },
  { label: "特徴", value: "仙台発 / 地域密着型 / リーズナブルな料金 / 丁寧なカウンセリング" },
];

const strengths = [
  {
    title: "仙台発・地域密着型のパーソナルジム",
    desc: "地域に根ざした運営で、地元の利用者から高い信頼を得ています。大手チェーンにはない温かみのあるサービスと、地域の特性を理解したきめ細やかな対応が魅力です。",
  },
  {
    title: "リーズナブルな料金設定",
    desc: "都内の大手パーソナルジムと比較して、リーズナブルな料金設定を実現。東北エリアの生活コストに合わせた価格帯で、無理なく継続できます。",
  },
  {
    title: "丁寧なカウンセリングと目標設定",
    desc: "入会前のカウンセリングで、利用者の生活習慣、体質、目標を丁寧にヒアリング。一人ひとりに最適なプランを提案してくれます。",
  },
];

const merits = [
  {
    title: "東北エリアで通えるパーソナルジム",
    desc: "大手パーソナルジムが少ない東北エリアで、質の高いパーソナルトレーニングが受けられる貴重な選択肢です。",
  },
  {
    title: "コストパフォーマンスが高い",
    desc: "都内相場より手頃な料金で、しっかりとしたパーソナル指導が受けられます。食事指導込みのプランもコスパが良いと評判です。",
  },
  {
    title: "アットホームな雰囲気",
    desc: "地域密着型ならではのアットホームな雰囲気で、初めてのパーソナルジムでも緊張せずに通えます。",
  },
];

const demerits = [
  {
    title: "展開エリアが限定的",
    desc: "仙台・東北エリアが中心のため、それ以外の地域にお住まいの方は利用が難しい状況です。",
  },
  {
    title: "店舗数が少ない",
    desc: "大手チェーンと比較すると店舗数が少なく、立地によっては通いにくい場合があります。",
  },
  {
    title: "知名度が低い",
    desc: "全国的な知名度は大手に劣るため、口コミや情報が少なく、事前のリサーチが難しい面があります。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "50分/回・月4回", price: "月額20,000円〜", note: "週1回ペース" },
  { name: "スタンダードプラン", duration: "50分/回・月8回", price: "月額38,000円〜", note: "週2回ペース" },
  { name: "集中プラン", duration: "50分/回・全16回", price: "総額120,000円〜", note: "2ヶ月集中" },
];

const reviewSummary = "リアルボディの口コミでは「仙台で気軽に通えるパーソナルジム」「料金が良心的」と地域の利用者から好評です。トレーナーの丁寧な対応や、無理のないプログラムが支持されています。一方で「店舗が少ない」「情報が少なくて最初は不安だった」という声もあります。";

const reviewCategories = [
  {
    title: "良い口コミ・評判の傾向",
    summary: "仙台エリアで「丁寧」「通いやすい」「料金が良心的」というポジティブな評価が中心です。地域密着ならではのアットホームさを評価する声が目立ちます。",
    items: [
      "トレーナーが親身で、初心者でも質問しやすい雰囲気だったという声",
      "都内の大手と比べて料金が手頃で、東北エリアで続けやすいという評価",
      "カウンセリングが丁寧で、目標に合わせたプランを提案してもらえたという声",
      "食事のアドバイスも受けられ、生活習慣を見直すきっかけになったという評価",
    ],
  },
  {
    title: "気になる口コミ・評判の傾向",
    summary: "店舗数・情報量の少なさに関する指摘が中心です。地方展開ゆえの選択肢の限られ方に触れる声が見られます。",
    items: [
      "店舗数が少なく、エリアによっては通いづらいという指摘",
      "全国的な知名度が低く、事前に口コミ情報を集めにくかったという声",
      "予約状況によっては希望の時間が取りにくいことがあるという指摘",
    ],
  },
];

const faqItems = [
  { q: "リアルボディの入会金はいくらですか？", a: "入会金は10,000円〜30,000円程度です。キャンペーンで無料になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "仙台以外に店舗はありますか？", a: "東北エリアを中心に展開しています。詳細な店舗情報は公式サイトでご確認ください。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、初心者の方も多く利用しています。基礎からしっかり指導してもらえます。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じた食事アドバイスが含まれています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。" },
  { q: "駐車場はありますか？", a: "店舗により異なります。車での来店を予定している場合は事前に確認をおすすめします。" },
  { q: "リアルボディの口コミ・評判は良いですか？", a: "仙台エリアの利用者からは「トレーナーが丁寧」「料金が良心的」といった好意的な口コミが中心です。一方で「店舗が少ない」「情報が少ない」という声もあります。最新の個別の口コミはGoogleマップでご確認ください。" },
  { q: "リアルボディは女性も通えますか？", a: "はい、女性の利用者もいます。詳しい設備やプランは公式サイトでご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RealBodyReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "リアルボディ" }]} />
      <ReviewSummary gymName="リアルボディ" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">リアルボディの口コミ・評判は？仙台のパーソナルジムを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          リアルボディは仙台発の<span className="font-bold bg-yellow-100 px-0.5">地域密着型</span>パーソナルジムです。<span className="font-bold bg-yellow-100 px-0.5">リーズナブルな料金</span>設定と丁寧なカウンセリングで、東北エリアの利用者から支持されています。本記事では、リアルボディの口コミ・評判の傾向、料金の目安、メリット・デメリットを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：リアルボディはこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>仙台・東北エリア</strong>で、手頃な料金のパーソナルジムを探している人</li>
            <li>・大手チェーンより<strong>アットホームで通いやすい</strong>雰囲気を重視する人</li>
            <li>・口コミは「トレーナーが丁寧」「料金が良心的」が中心。一方「店舗が少ない」という声も</li>
            <li>・料金・入会金・店舗はキャンペーンや時期で変わるため<strong>公式サイトでの確認が必要</strong></li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は一般的な目安です。最新は公式でご確認ください。他ジムとの比較は<a href="/compare/" className="text-teal-600 underline">おすすめ比較</a>もご覧ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">リアルボディのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            リアルボディの口コミを「良い評判」「気になる評判」に分けて傾向を整理しました。以下は公開されている口コミ全般から見られる傾向をまとめたもので、個別の投稿を引用したものではありません。最新の個別レビューは<a href="https://www.google.com/maps/search/%E3%83%AA%E3%82%A2%E3%83%AB%E3%83%9C%E3%83%87%E3%82%A3%20%E5%8F%A3%E3%82%B3%E3%83%9F" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">Googleマップ</a>でご確認ください。
          </p>
          <div className="space-y-8">
            {reviewCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{cat.summary}</p>
                <ul className="space-y-2">
                  {cat.items.map((it, i) => (
                    <li key={i} className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg px-4 py-3">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミの傾向を要約したものです。評価には個人差があります。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">リアルボディが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
