import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CALORIE TRADE JAPANの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "CALORIE TRADE JAPAN（カロリートレードジャパン）の口コミ・評判を徹底解説。ダイエット専門パーソナルジムの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "CALORIE TRADE JAPAN（カロリートレードジャパン）" },
  { label: "タイプ", value: "ダイエット専門パーソナルジム" },
  { label: "料金帯", value: "月額24,200円〜" },
  { label: "エリア", value: "全国に30店舗以上展開" },
  { label: "特徴", value: "ダイエット専門 / 全国展開 / 低価格 / 食事指導付き / 完全個室" },
];

const strengths = [
  {
    title: "ダイエットに完全特化したプログラム",
    desc: "体重減量に特化した独自のダイエットメソッドを採用。カロリー管理を科学的に行い、無理なく確実に結果を出すプログラムが特徴です。",
  },
  {
    title: "全国30店舗以上の展開",
    desc: "フランチャイズ展開により全国に30店舗以上を出店。地方在住の方でもアクセスしやすい環境が整っています。",
  },
  {
    title: "月額24,200円〜の始めやすい料金",
    desc: "月額24,200円〜とパーソナルジムとしてはリーズナブル。ダイエット専門ジムの中でもコスパの良い料金設定です。",
  },
];

const merits = [
  {
    title: "ダイエット特化で効率的な減量",
    desc: "ボディメイクや筋肥大ではなく、ダイエット（減量）に特化しているため、体重を落としたい方にとって最も効率的なアプローチが受けられます。",
  },
  {
    title: "全国展開で地方でも通える",
    desc: "都心部だけでなく地方にも店舗があるため、大手パーソナルジムが進出していないエリアでも利用可能です。",
  },
  {
    title: "食事指導がしっかりしている",
    desc: "カロリー計算に基づいた食事指導が受けられ、何をどのくらい食べればいいかが明確になります。",
  },
];

const demerits = [
  {
    title: "筋肥大やボディメイク目的には不向き",
    desc: "ダイエット（減量）特化のため、筋肉を大きくしたい方や美しい筋肉のラインを作りたい方には他のジムの方が適しています。",
  },
  {
    title: "フランチャイズのため店舗により質にばらつき",
    desc: "フランチャイズ展開のため、トレーナーの質や設備が店舗によって異なる場合があります。事前に体験で確認しましょう。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "RIZAPやBEYONDほどの知名度がなく、情報を自分で調べる必要がある場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額24,200円", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額39,600円", note: "週2回ペース・おすすめ" },
  { name: "短期集中コース（2ヶ月16回）", duration: "50分/回", price: "総額156,200円〜", note: "食事指導付き" },
];

const reviewSummary = "CALORIE TRADE JAPANの口コミでは「カロリー管理が分かりやすい」「低価格でダイエットできた」「全国に店舗があって助かる」という声が見られます。ダイエット目的に特化した分かりやすいアプローチが好評です。一方で「店舗によって差がある」「ボディメイクには物足りない」という意見も。減量目的の方に特におすすめです。";

const faqItems = [
  { q: "CALORIE TRADE JAPANの入会金はいくらですか？", a: "入会金は店舗により異なりますが、30,000円〜50,000円程度です。キャンペーンで割引になることがあります。" },
  { q: "どのくらいで痩せられますか？", a: "個人差がありますが、2ヶ月で5〜10kgの減量に成功する方が多いです。目標に合わせたプランを提案してもらえます。" },
  { q: "食事制限は厳しいですか？", a: "カロリー計算に基づいた食事管理を行いますが、過度な制限は行いません。バランスの良い食事を心がけます。" },
  { q: "女性でも通えますか？", a: "はい、男女ともに利用可能です。女性の会員も多く、女性トレーナーが在籍する店舗もあります。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。各店舗にお問い合わせください。" },
  { q: "分割払いはできますか？", a: "はい、分割払いに対応している店舗がほとんどです。詳細はカウンセリング時にご確認ください。" },
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
  { name: "RITA STYLE", href: "/review/rita-style/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

export default function CalorieTradeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CALORIE TRADE JAPAN" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          CALORIE TRADE JAPANの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CALORIE TRADE JAPAN の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          CALORIE TRADE JAPAN（カロリートレードジャパン）はダイエットに特化したパーソナルジムです。カロリー管理に基づいた科学的なアプローチで確実な減量を目指します。全国30店舗以上、月額24,200円〜の低価格も魅力。本記事では、料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの基本情報</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのメリット・デメリット</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの料金</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのよくある質問</h2>
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

        {/* Banner Ad */}
        <div className="flex justify-center my-6">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S9777P.F142081F.Q136169A" width={300} height={250} alt="CALORIE TRADE JAPAN" className="rounded-lg shadow-sm" />
          </a>
        </div>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">CALORIE TRADE JAPANが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたのダイエット目標を相談してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            CALORIE TRADE JAPANの無料カウンセリングに申し込む
          </a>
        </section>

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
