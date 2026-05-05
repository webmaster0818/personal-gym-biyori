import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルメイクの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "メルメイクの口コミ・評判を徹底解説。完全個室・ボディメイク特化の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "メルメイク" },
  { label: "タイプ", value: "完全個室パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜100,000円程度" },
  { label: "エリア", value: "東京・大阪・名古屋を中心に展開" },
  { label: "特徴", value: "完全個室 / ボディメイク特化 / 食事指導付き / オーダーメイドプログラム" },
];

const strengths = [
  {
    title: "完全個室でのマンツーマン指導",
    desc: "トレーニングルームは完全個室のため、周囲を気にせず集中してボディメイクに取り組めます。初心者や人目が気になる方にも安心の環境です。",
  },
  {
    title: "ボディメイク特化のプログラム",
    desc: "単なるダイエットではなく、理想の体型を作ることに特化したプログラムを提供。筋肉のバランスや姿勢を考慮した科学的なアプローチでボディラインを整えます。",
  },
  {
    title: "食事指導でトータルサポート",
    desc: "トレーニングだけでなく、日々の食事内容もしっかりサポート。無理な食事制限ではなく、ライフスタイルに合わせた食事プランを提案してくれます。",
  },
];

const merits = [
  {
    title: "一人ひとりに合わせたオーダーメイドメニュー",
    desc: "体型・目標・ライフスタイルに応じて完全にカスタマイズされたトレーニングメニューが受けられます。効率的にボディメイクを進められます。",
  },
  {
    title: "完全個室でストレスフリー",
    desc: "他の利用者と顔を合わせることがなく、体型を気にせずトレーニングに集中できます。ウェア・タオルのレンタルも完備しています。",
  },
  {
    title: "リバウンド対策のアフターフォロー",
    desc: "コース終了後もアフターフォローが充実しており、リバウンド防止のためのサポートが受けられます。",
  },
];

const demerits = [
  {
    title: "料金がやや高め",
    desc: "完全個室・マンツーマン指導のため、セルフ型ジムと比較すると料金は高めの設定です。予算と目標を考慮して検討しましょう。",
  },
  {
    title: "店舗数が限定的",
    desc: "大手チェーンほど店舗数が多くないため、通える範囲に店舗がない場合があります。事前にアクセスを確認しましょう。",
  },
  {
    title: "短期間での劇的な変化は個人差あり",
    desc: "ボディメイクは個人差が大きく、短期間で劇的な変化を期待すると、思ったほどの結果が出ないこともあります。",
  },
];

const pricingPlans = [
  { name: "月8回プラン", duration: "50分/回", price: "月額60,000円〜", note: "週2回ペース" },
  { name: "月4回プラン", duration: "50分/回", price: "月額35,000円〜", note: "週1回ペース" },
  { name: "集中コース（2ヶ月）", duration: "50分/回", price: "総額180,000円〜", note: "16回・食事指導込み" },
];

const reviewSummary = "メルメイクの口コミでは「完全個室で安心して通える」「トレーナーが親身になってくれる」という声が多く見られます。ボディメイクに特化したプログラムの質も好評です。一方で「料金がもう少し安ければ」「店舗が近くにない」といった指摘もあります。";

const faqItems = [
  { q: "メルメイクの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。" },
  { q: "メルメイクは女性専用ですか？", a: "いいえ、男女ともに利用可能です。完全個室のため性別を問わず安心して通えます。" },
  { q: "食事制限は厳しいですか？", a: "極端な食事制限は行いません。ライフスタイルに合わせた無理のない食事プランを提案してくれます。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、完全マンツーマン指導のため、運動初心者でも安心してトレーニングを始められます。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約可能です。" },
  { q: "退会に違約金はかかりますか？", a: "プランによって異なります。詳細は入会時に確認しましょう。" },
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
  { name: "OUTLINE", href: "/review/outline/" },
];

export default function MelmakeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "メルメイク" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          メルメイクの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          メルメイクは<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>でボディメイクに特化したパーソナルジムです。一人ひとりの目標に合わせたオーダーメイドプログラムと<span className="font-bold bg-yellow-100 px-0.5">食事指導</span>で、理想の体型づくりをトータルサポートしています。本記事では、メルメイクの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メルメイクの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メルメイクの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">メルメイクのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メルメイクの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メルメイクの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">メルメイクのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">メルメイクが気になった方へ</h2>
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
