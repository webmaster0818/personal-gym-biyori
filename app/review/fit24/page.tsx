import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "FIT24の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "FIT24（フィット24）の口コミ・評判を徹底解説。24時間営業セルフジムの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "FIT24（フィット24）" },
  { label: "タイプ", value: "24時間セルフフィットネスジム" },
  { label: "料金帯", value: "月額3,980円〜7,480円" },
  { label: "エリア", value: "全国に展開（快活CLUBグループ）" },
  { label: "特徴", value: "24時間営業 / セルフ型 / 低価格 / マシン充実 / 快活CLUB併設" },
];

const strengths = [
  {
    title: "24時間365日いつでも利用可能",
    desc: "深夜でも早朝でも、自分の好きなタイミングでトレーニングが可能。シフト勤務の方や生活リズムが不規則な方でも無理なく通えます。",
  },
  {
    title: "月額3,980円〜の圧倒的低価格",
    desc: "月額3,980円〜という業界最安クラスの料金設定。ジムに通うハードルを大幅に下げ、幅広い層が気軽にフィットネスを始められます。",
  },
  {
    title: "快活CLUBグループの安心運営",
    desc: "快活CLUB（AOKIグループ）が運営しており、セキュリティや設備の管理体制がしっかりしています。一部店舗では快活CLUBのシャワー・ドリンクバーも利用可能です。",
  },
];

const merits = [
  {
    title: "業界最安クラスの月額料金",
    desc: "月額3,980円〜のため、パーソナルジムに通う予算がない方でも本格的なマシントレーニングが始められます。",
  },
  {
    title: "時間を選ばず通える自由度",
    desc: "24時間営業のため、深夜や早朝など、混雑を避けた時間帯にトレーニングできます。",
  },
  {
    title: "マシンが充実している",
    desc: "有酸素マシンからウェイトマシン、フリーウェイトエリアまで、幅広いトレーニング機器が揃っています。",
  },
];

const demerits = [
  {
    title: "トレーナーの指導がない",
    desc: "セルフ型のため、トレーニングフォームや メニューの指導はありません。初心者は自己流になりやすい点に注意が必要です。",
  },
  {
    title: "食事指導はない",
    desc: "ダイエット目的で食事面のサポートが必要な場合は、別途パーソナルジムやオンラインサービスの併用を検討する必要があります。",
  },
  {
    title: "スタッフ不在の時間帯がある",
    desc: "24時間営業のため、深夜や早朝はスタッフ不在となる場合があります。マシンの使い方で困った際にすぐ質問できない場合があります。",
  },
];

const pricingPlans = [
  { name: "レギュラー会員", duration: "24時間利用可", price: "月額7,480円", note: "全時間帯・全店舗利用可" },
  { name: "ナイト会員", duration: "22:00〜翌8:00", price: "月額3,980円", note: "夜間限定" },
  { name: "デイ会員", duration: "8:00〜18:00", price: "月額5,980円", note: "日中限定" },
];

const reviewSummary = "FIT24の口コミでは「安くて24時間使える」「マシンが新しくて清潔」「快活CLUBのシャワーが使えて便利」という声が多いです。コスパ重視で自主トレーニングしたい方に人気です。一方で「スタッフがいない時間帯に不安」「トレーニング指導がない」という声も。自分でメニューを組める中級者以上に特におすすめです。";

const faqItems = [
  { q: "FIT24の入会金はいくらですか？", a: "入会金は5,500円です。セキュリティキー代として別途3,300円がかかる場合があります。キャンペーンで割引になることもあります。" },
  { q: "初心者でも大丈夫ですか？", a: "マシンの使い方は説明書が設置されていますが、パーソナル指導はありません。初心者の方は入会時のオリエンテーションを活用しましょう。" },
  { q: "見学はできますか？", a: "はい、営業時間内（スタッフ在中時間）に見学可能です。事前に店舗へお問い合わせください。" },
  { q: "シャワーはありますか？", a: "一部店舗にはシャワールームがあります。快活CLUB併設店舗ではシャワーやドリンクバーも利用可能です。" },
  { q: "他の店舗も利用できますか？", a: "レギュラー会員であれば、全国のFIT24店舗を追加料金なしで利用できます。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の末日までに店舗に申告が必要です。Web手続きに対応している場合もあります。" },
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
  { name: "カーブス", href: "/review/curves/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

export default function Fit24Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "FIT24の口コミ・評判｜料金・メリット・デメリットを徹底解説",
        "author": {
          "@type": "Person",
          "name": "山田 拓也",
          "url": "https://personal-gym-biyori.com/about/",
          "jobTitle": "パーソナルジム専門ライター"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-05-18"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FIT24" }]} />
      <ReviewSummary gymName="FIT24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FIT24の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FIT24 の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          FIT24（フィット24）は快活CLUBグループが運営する24時間セルフフィットネスジムです。月額<span className="font-bold bg-yellow-100 px-0.5">3,980円</span>〜の低価格で、好きな時間にマシントレーニングが可能。本記事では、FIT24の料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FIT24のメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24のよくある質問</h2>
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
        <section className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/M11588F.Q159605W.Q136169A" alt="FIT24" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        {/* Author Box */}
        <AuthorBox />

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">FIT24が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずはお近くの店舗を見学して、設備や雰囲気を確認してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
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
