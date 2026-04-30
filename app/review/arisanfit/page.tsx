import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ARISANFITの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ARISANFIT（アリサンフィット）の口コミ・評判を徹底解説。少人数制・ボディメイク特化のパーソナルジムの料金、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ARISANFIT（アリサンフィット）" },
  { label: "タイプ", value: "少人数制パーソナルジム" },
  { label: "料金帯", value: "月額25,000円〜70,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "少人数制 / ボディメイク特化 / 食事指導あり / アットホームな雰囲気" },
];

const strengths = [
  {
    title: "少人数制で一人ひとりに向き合う指導",
    desc: "大手ジムと異なり少人数制を採用しているため、トレーナーが一人ひとりの身体の状態や目標をしっかり把握した上で指導してくれます。きめ細やかなサポートが受けられる点が大きな魅力です。",
  },
  {
    title: "ボディメイクに特化したプログラム",
    desc: "単なる体重減少ではなく、美しいボディラインを作ることに特化したトレーニングプログラムを提供。筋肉のバランスや姿勢を意識したメニュー構成が特徴です。",
  },
  {
    title: "アットホームな雰囲気で続けやすい",
    desc: "少人数制ならではのアットホームな雰囲気で、ジム通いが苦手な方でもリラックスしてトレーニングに臨めます。トレーナーとの距離が近く、気軽に相談できる環境です。",
  },
];

const merits = [
  {
    title: "トレーナーとの信頼関係が築きやすい",
    desc: "少人数制のため担当トレーナーが固定されやすく、自分の身体の変化や癖を理解してもらえます。長期的な目標に向けた一貫した指導が受けられます。",
  },
  {
    title: "ボディメイクに特化した専門的な指導",
    desc: "ダイエットだけでなく、くびれ作りやヒップアップなど部位別のボディメイクに対応。見た目の変化を重視する方に適しています。",
  },
  {
    title: "食事指導がきめ細かい",
    desc: "トレーナーがLINEなどで日々の食事をチェックし、具体的な改善アドバイスを提供。無理な食事制限ではなく、続けられる食習慣の定着を目指します。",
  },
];

const demerits = [
  {
    title: "店舗数が少なくアクセスが限定的",
    desc: "少人数制のため店舗規模が小さく、展開エリアも限定的です。自宅や職場から通いやすい場所にあるか事前に確認が必要です。",
  },
  {
    title: "予約枠が少なく希望時間が取りにくい場合がある",
    desc: "少人数制ゆえに一日の受入人数に限りがあり、人気の時間帯は早めの予約が必要です。",
  },
  {
    title: "大手と比べて設備がコンパクト",
    desc: "大手チェーンのような大規模な設備はなく、マシンの種類も限られる場合があります。多様なマシンを使いたい方には物足りないかもしれません。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "50分/回", price: "月額25,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "50分/回", price: "月額45,000円〜", note: "週2回ペース・おすすめ" },
  { name: "集中プラン", duration: "50分/回", price: "月額70,000円〜", note: "短期集中向け" },
];

const reviewSummary = "ARISANFITの口コミでは「少人数制で丁寧に指導してもらえる」「ボディラインが変わった」と高評価の声が多数。アットホームな雰囲気でジム初心者にも好評です。一方で「店舗が少ない」「予約が取りにくい」という声も見られます。";

const faqItems = [
  { q: "ARISANFITの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることもあります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、利用者の多くがトレーニング初心者です。基礎から丁寧に指導してもらえます。" },
  { q: "女性でも通いやすいですか？", a: "はい、ボディメイク目的の女性利用者が多く、女性向けのプログラムも充実しています。" },
  { q: "食事指導はどのように行われますか？", a: "LINEなどを通じて日々の食事内容をチェックし、具体的な改善アドバイスを提供しています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会方法を教えてください", a: "退会を希望する場合は前月までに店舗に申告が必要です。違約金は基本的にかかりません。" },
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

export default function ArisanfitReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ARISANFIT" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ARISANFITの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ARISANFIT（アリサンフィット）は少人数制・ボディメイク特化のパーソナルジムです。一人ひとりの身体に向き合う丁寧な指導と、美しいボディラインを作るための専門的なプログラムが特徴。本記事では、ARISANFITの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ARISANFITの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ARISANFITの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ARISANFITのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ARISANFITの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ARISANFITの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ARISANFITのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">ARISANFITが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
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
