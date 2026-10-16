import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "CALORIE TRADE JAPAN（カロリートレード）の口コミ・評判｜料金・店舗を検証",
  description:
    "CALORIE TRADE JAPAN（カロリートレードジャパン）の口コミ・評判をご紹介します。ダイエット専門パーソナルジムの料金体系、メリット・デメリットを解説しています。",
};

const basicInfo = [
  { label: "ジム名", value: "CALORIE TRADE JAPAN（カロリートレードジャパン）" },
  { label: "タイプ", value: "ダイエット専門パーソナルジム" },
  { label: "料金帯", value: "月4回29,800円〜／2ヶ月16回149,800円（税込）" },
  { label: "エリア", value: "全国（公式に「店舗により料金が異なる場合あり」の注記）" },
  { label: "特徴", value: "ダイエット専門 / 全国展開 / 低価格 / 食事指導付き / 完全個室" },
];

const strengths = [
  {
    title: "ダイエットに完全特化したプログラム",
    desc: "体重減量に特化した独自のダイエットメソッドを採用しています。カロリー管理を科学的に行い、無理なく確実に結果を出すプログラムが特徴です。",
  },
  {
    title: "東海を中心に展開",
    desc: "公式の店舗一覧は名古屋瑞穂区・一宮本町・名古屋緑区・松戸八柱・宜野湾の5店舗です（トップページは「全国に10店舗」と表記）。愛知県が中心です。",
  },
  {
    title: "月4回29,800円〜の始めやすい料金",
    desc: "月4回29,800円（税込）〜と、パーソナルジムとしては手頃な料金です。ダイエット専門ジムの中でも費用対効果の高い料金設定です。",
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
    desc: "カロリー計算に基づいた食事指導が受けられ、何をどのくらい食べればよいかが明確になります。",
  },
];

const demerits = [
  {
    title: "筋肥大やボディメイク目的には不向き",
    desc: "ダイエット（減量）特化のため、筋肉を大きくしたい方や美しい筋肉のラインを作りたい方には他のジムの方が適しています。",
  },
  {
    title: "フランチャイズのため、店舗により質にばらつきがある",
    desc: "フランチャイズ展開のため、トレーナーの質や設備が店舗によって異なる場合があります。事前に体験でご確認ください。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "RIZAPやBEYONDほどの知名度がなく、情報を自分で調べる必要がある場合があります。",
  },
];

// 2026-10-14: 公式料金ページ（calorietradejapan.com/plan/）を当日確認した掲載値
const pricingPlans = [
  { name: "短期集中（食事サポート付き）2ヶ月", duration: "16回", price: "149,800円", note: "税込" },
  { name: "短期集中（食事サポート付き）3ヶ月", duration: "24回", price: "198,800円", note: "税込" },
  { name: "月プラン 月4回", duration: "月4回", price: "29,800円/月", note: "税込" },
  { name: "月プラン 月8回", duration: "月8回", price: "54,800円/月", note: "税込" },
  { name: "継続プラン 月4回／月8回", duration: "短期集中からの延長者限定", price: "26,800円／49,800円", note: "税込" },
  { name: "入会金", duration: "—", price: "50,000円", note: "" },
];

const reviewSummary = "CALORIE TRADE JAPANの口コミでは「カロリー管理が分かりやすい」「低価格でダイエットできた」「全国に店舗があって助かる」という声が見られます。ダイエット目的に特化した分かりやすいアプローチが好評です。一方で「店舗によって差がある」「ボディメイクには物足りない」という意見もあります。特に減量を目的とする方におすすめします。";

const faqItems = [
  { q: "CALORIE TRADE JAPANの入会金はいくらですか？", a: "入会金は公式料金ページで50,000円と記載されています（店舗により異なる場合あり）。キャンペーンで割引になることがあります。" },
  { q: "どのくらいで痩せられますか？", a: "個人差がありますが、2ヶ月で5〜10kgの減量に成功する方が多い傾向にあります。目標に合わせたプランが提案されます。" },
  { q: "食事制限は厳しい内容ですか？", a: "カロリー計算に基づいた食事管理を行いますが、過度な制限は行いません。バランスの良い食事を心がけます。" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "CALORIE TRADE JAPAN（カロリートレード）の口コミ・評判｜料金・店舗を検証",
        "author": {
          "@type": "Organization",
          "name": "パーソナルジムびより編集部",
          "url": "https://personal-gym-biyori.com/about/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-10-14"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CALORIE TRADE JAPAN" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          CALORIE TRADE JAPAN（カロリートレード）の口コミ・評判｜料金・店舗を検証
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/calorie-trade.jpg" alt="CALORIE TRADE JAPANの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">CALORIE TRADE JAPAN 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月14日（料金・店舗・返金条件を公式サイトで再確認）</p>
        <GymCta slug="calorie-trade" name="CALORIE TRADE JAPAN" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">CALORIE TRADE JAPANのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">CALORIE TRADE JAPANのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">CALORIE TRADE JAPANが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="CALORIE TRADE JAPAN" />
        <BrandFactCheck slug="calorie-trade" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CALORIE TRADE JAPAN の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          CALORIE TRADE JAPAN（カロリートレードジャパン）はダイエットに特化したパーソナルジムです。カロリー管理に基づいた科学的なアプローチで確実な減量を目指します。月4回<span className="font-bold bg-yellow-100 px-0.5">29,800円</span>〜の低価格も特長です。本記事では、料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの料金</h2>
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
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="calorie-trade" name="CALORIE TRADE JAPAN" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのよくある質問</h2>
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

        {/* Author Box */}
        

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">CALORIE TRADE JAPANが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ダイエットの目標をご相談ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            CALORIE TRADE JAPANの無料カウンセリングに申し込む
          </a>
        </section>

        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
