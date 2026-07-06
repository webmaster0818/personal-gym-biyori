import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "ビーコンセプトの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ビーコンセプト（B-CONCEPT）の口コミ・評判を徹底解説。下半身・脚痩せ特化の女性専用パーソナルジムの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ビーコンセプト（B-CONCEPT）" },
  { label: "タイプ", value: "下半身・脚痩せ特化 女性専用パーソナルジム" },
  { label: "料金帯", value: "2ヶ月199,650円〜" },
  { label: "エリア", value: "東京・横浜・大阪・名古屋など主要都市" },
  { label: "特徴", value: "下半身特化 / 女性専用 / 脚痩せメソッド / アフターフォロー付き" },
];

const strengths = [
  {
    title: "下半身・脚痩せに特化した独自メソッド",
    desc: "太もも・ヒップ・ふくらはぎなど下半身のボディメイクに特化したトレーニングプログラム。骨盤矯正やストレッチも取り入れ、根本からの脚痩せを目指します。",
  },
  {
    title: "女性専用で通いやすい環境",
    desc: "会員は女性のみのため、周囲の目を気にせずトレーニングに集中できます。女性特有の悩みにも理解のあるトレーナーが対応します。",
  },
  {
    title: "充実のアフターフォロー",
    desc: "コース終了後も6ヶ月間のアフターフォローが付帯。リバウンド防止のための食事指導やトレーニングアドバイスが受けられます。",
  },
];

const merits = [
  {
    title: "脚痩せ・下半身に特化した専門的な指導",
    desc: "一般的なパーソナルジムでは全身均等にトレーニングしますが、ビーコンセプトは下半身に特化。脚やお尻の悩みを集中的にケアできます。",
  },
  {
    title: "リバウンド防止のアフターフォロー",
    desc: "コース終了後6ヶ月間のサポートがあるため、ダイエット後のリバウンドリスクを軽減。長期的な体型維持を目指せます。",
  },
  {
    title: "託児所サポートあり",
    desc: "一部店舗では託児所費用の負担制度があり、小さなお子様がいるママでも安心して通えます。",
  },
];

const demerits = [
  {
    title: "上半身のトレーニングは手薄",
    desc: "下半身特化のため、腕や肩など上半身のトレーニングは優先度が低くなります。全身バランスよく鍛えたい方は注意が必要です。",
  },
  {
    title: "男性は利用不可",
    desc: "女性専用のため、男性は利用できません。カップルで通いたい方には他のジムをおすすめします。",
  },
  {
    title: "料金はやや高め",
    desc: "2ヶ月約20万円〜と、格安ジムと比較すると料金は高めです。ただし、アフターフォロー6ヶ月を含めると妥当という声もあります。",
  },
];

const pricingPlans = [
  { name: "脚痩せ集中コース", duration: "75分×16回", price: "199,650円", note: "2ヶ月・食事指導付き" },
  { name: "脚痩せ集中コース＋アフター", duration: "75分×16回+6ヶ月", price: "247,500円", note: "アフターフォロー6ヶ月付き" },
  { name: "トライアルコース", duration: "75分×4回", price: "44,000円", note: "お試し1ヶ月" },
];

const reviewSummary = "ビーコンセプトの口コミでは「脚が細くなった」「ヒップアップ効果を実感」という声が多数。特に下半身に悩みを抱えていた女性からの満足度が高いです。一方で「上半身も鍛えたかった」「料金が高め」という意見も。アフターフォローの充実度は高く評価されています。";

const faqItems = [
  { q: "ビーコンセプトの入会金はいくらですか？", a: "入会金は38,500円です。キャンペーンで無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差がありますが、2ヶ月のコース終了時には多くの方がサイズダウンを実感されています。早い方では1ヶ月目から変化を感じるケースもあります。" },
  { q: "食事制限は厳しいですか？", a: "過度な食事制限は行いません。無理なく続けられる食事指導を心がけており、3食しっかり食べながらのボディメイクを推奨しています。" },
  { q: "産後ダイエットにも対応していますか？", a: "はい、産後の骨盤ケアを含むプログラムにも対応しています。医師の許可があれば産後2ヶ月頃から開始できます。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリングが用意されています。実際のトレーニング体験も可能な場合があるため、公式サイトからお問い合わせください。" },
  { q: "分割払いはできますか？", a: "はい、分割払いに対応しています。月々の支払い額は回数により異なりますので、カウンセリング時にご確認ください。" },
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
  { name: "リプレシャス", href: "/review/reprecious/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function BConceptReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ビーコンセプト" }]} />
      <ReviewSummary gymName="ビーコンセプト" />
      <GymCta slug="b-concept" name="ビーコンセプト" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ビーコンセプトの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ビーコンセプト（B-CONCEPT）は下半身・脚痩せに特化した<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>パーソナルジムです。骨盤矯正やストレッチを取り入れた独自メソッドで、太もも・ヒップのサイズダウンを目指します。本記事では、ビーコンセプトの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ビーコンセプトのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>
      <GymCta slug="b-concept" name="ビーコンセプト" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">ビーコンセプトが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたの脚の悩みを相談してみましょう。</p>
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
