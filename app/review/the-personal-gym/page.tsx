import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "THE PERSONAL GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "THE PERSONAL GYM（ザ パーソナルジム）の口コミ・評判を徹底解説。ダイエット×ボディメイク特化の料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "THE PERSONAL GYM（ザ パーソナルジム）" },
  { label: "タイプ", value: "ダイエット×ボディメイク特化パーソナルジム" },
  { label: "料金帯", value: "月額26,400円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "ダイエット特化 / ボディメイク / 低価格 / 食事指導付き / 完全個室" },
];

const strengths = [
  {
    title: "ダイエットとボディメイクに特化",
    desc: "体重減量だけでなく、理想的なボディラインを作ることにこだわったプログラム設計。見た目の変化を重視したトレーニングメニューで、効率的にボディメイクを進められます。",
  },
  {
    title: "月額26,400円〜の通いやすい価格",
    desc: "パーソナルジムとしては低価格帯の月額26,400円〜。長期的に無理なく通い続けられる料金設定で、ダイエットの成功率を高めます。",
  },
  {
    title: "経験豊富なトレーナー陣",
    desc: "ボディメイク大会の入賞経験があるトレーナーや、有資格者が多数在籍。確かな知識と経験に基づいた指導が受けられます。",
  },
];

const merits = [
  {
    title: "低価格で本格的なパーソナルトレーニング",
    desc: "月額2万円台から始められるため、パーソナルジム初心者でも金銭的なハードルが低く、気軽にスタートできます。",
  },
  {
    title: "ボディメイクのプロから直接指導",
    desc: "大会経験のあるトレーナーから、実践的なボディメイクのノウハウを学べます。自己流では得られない専門的な指導が受けられます。",
  },
  {
    title: "食事指導で生活習慣も改善",
    desc: "トレーニングと合わせて食事指導が受けられるため、ダイエットに必要な食生活の改善も同時に進められます。",
  },
];

const demerits = [
  {
    title: "店舗数がまだ少ない",
    desc: "都内中心の展開でまだ店舗数が限られているため、アクセスできない地域があります。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "大手チェーンと比較すると情報が少なく、事前のリサーチがしにくい場合があります。",
  },
  {
    title: "短時間セッションが中心",
    desc: "プランによっては1回のセッション時間が短めのため、じっくりトレーニングしたい方は確認が必要です。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額26,400円", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額48,400円", note: "週2回ペース・おすすめ" },
  { name: "短期集中コース（16回）", duration: "50分/回", price: "総額176,000円〜", note: "2ヶ月・食事指導付き" },
];

const reviewSummary = "THE PERSONAL GYMの口コミでは「低価格なのにトレーナーの質が高い」「ボディメイクの結果が出た」という声が見られます。コスパの良さとトレーナーの専門性が評価されています。一方で「店舗が少なくて通いにくい」「もう少しセッション時間が長いと嬉しい」という意見も。コスパ重視でボディメイクしたい方におすすめです。";

const faqItems = [
  { q: "THE PERSONAL GYMの入会金はいくらですか？", a: "入会金は22,000円です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "ダイエット目的でも通えますか？", a: "はい、ダイエット目的の方が多数在籍しています。体重減量からボディメイクまで幅広い目的に対応しています。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じて食事アドバイスが含まれています。LINEでのサポートに対応している場合もあります。" },
  { q: "レンタルはありますか？", a: "ウェアやタオルのレンタルが用意されています。手ぶらで通える環境です。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "月額プランの場合は基本的に違約金はありません。コースプランは契約内容によります。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

export default function ThePersonalGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "THE PERSONAL GYM" }]} />
      <ReviewSummary gymName="THE PERSONAL GYM" />
      <GymCta slug="the-personal-gym" name="THE PERSONAL GYM" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          THE PERSONAL GYMの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          THE PERSONAL GYM（ザ パーソナルジム）はダイエットとボディメイクに特化したパーソナルジムです。月額<span className="font-bold bg-yellow-100 px-0.5">26,400円</span>〜の低価格で、経験豊富なトレーナーから本格的な指導が受けられます。本記事では、THE PERSONAL GYMの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="the-personal-gym" name="THE PERSONAL GYM" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">THE PERSONAL GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったボディメイクプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
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
