import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nexusジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Nexusジムの口コミ・評判を徹底解説。格安パーソナル・月額制の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Nexusジム" },
  { label: "タイプ", value: "格安月額制パーソナルジム" },
  { label: "料金帯", value: "月額19,800円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "格安 / 月額制 / パーソナル指導 / 食事アドバイス / 完全個室" },
];

const strengths = [
  {
    title: "月額19,800円〜の業界最安級パーソナル",
    desc: "月額19,800円〜と、パーソナルジム業界では最安級の料金設定。パーソナルトレーニングを試してみたいけど費用が不安という方でも、気軽に始められる価格帯です。",
  },
  {
    title: "月額制で柔軟に続けられる",
    desc: "高額な一括払いではなく月額制を採用。毎月の支出が一定のため家計管理がしやすく、合わなければ翌月から辞められる柔軟さが魅力です。",
  },
  {
    title: "完全個室でのマンツーマン指導",
    desc: "低価格ながらも完全個室でのマンツーマン指導を実施。他の会員と顔を合わせることなく、集中してトレーニングに取り組めます。",
  },
];

const merits = [
  {
    title: "圧倒的な低価格",
    desc: "パーソナルジムの相場が月5万円以上の中、月額2万円を切る価格は破格。長期的に通うほどコスパが良くなります。",
  },
  {
    title: "月額制でリスクが低い",
    desc: "一括契約ではないため、「合わなかったらどうしよう」という不安なくスタートできます。",
  },
  {
    title: "食事アドバイスも含まれている",
    desc: "低価格ながらも基本的な食事アドバイスが含まれており、トレーニングと食事の両面からサポートを受けられます。",
  },
];

const demerits = [
  {
    title: "セッション時間が短めの場合がある",
    desc: "低価格を実現するため、1回のセッション時間が短めに設定されている場合があります。事前に確認しましょう。",
  },
  {
    title: "店舗数が限られている",
    desc: "都内中心の少数店舗展開のため、アクセスできるエリアが限定的です。",
  },
  {
    title: "大手ほどのサービス充実度はない",
    desc: "レンタルやアメニティなど、大手パーソナルジムと比較するとサービスがシンプルな場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "40分/回", price: "月額19,800円", note: "週1回ペース" },
  { name: "月8回プラン", duration: "40分/回", price: "月額34,800円", note: "週2回ペース・おすすめ" },
  { name: "月12回プラン", duration: "40分/回", price: "月額46,800円", note: "週3回ペース" },
];

const reviewSummary = "Nexusジムの口コミでは「この価格でパーソナルが受けられるのは驚き」「月額制で安心」「トレーナーが親切」という声が見られます。コスパの良さが最大の魅力で、パーソナルジム初心者からの支持が高いです。一方で「セッション時間が短い」「設備がシンプル」という意見も。まずはパーソナルジムを試してみたい方の入門として最適です。";

const faqItems = [
  { q: "Nexusジムの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "なぜこんなに安いのですか？", a: "広告費の最適化や設備のシンプル化、効率的な運営により低価格を実現しています。トレーニングの質は維持されています。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者の方が多く通われています。トレーナーが一から丁寧に指導するため安心です。" },
  { q: "食事指導は受けられますか？", a: "はい、基本的な食事アドバイスがプランに含まれています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "月額制のため、基本的に違約金はありません。退会希望の場合は前月までに申告が必要です。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "THE PERSONAL GYM", href: "/review/the-personal-gym/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ACCEPT", href: "/review/accept/" },
];

export default function NexusReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Nexusジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Nexusジムの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Nexusジム の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Nexusジムは月額<span className="font-bold bg-yellow-100 px-0.5">19,800円</span>〜の格安パーソナルジムです。<span className="font-bold bg-yellow-100 px-0.5">月額制</span>で始めやすく辞めやすい柔軟な料金体系と、<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>での<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>が特徴。本記事では、Nexusジムの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Nexusジムのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの料金</h2>
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
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムのよくある質問</h2>
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
        <section className="mb-10">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S7941C.L119607K.A132329L" alt="Nexusジム" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Nexusジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、格安パーソナルの魅力を体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
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
