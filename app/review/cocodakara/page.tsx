import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CoCoDakara Body Designの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "CoCoDakara Body Design（ココダカラボディーデザイン）の口コミ・評判を徹底解説。麻布十番の完全個室パーソナルジムの料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "CoCoDakara Body Design（ココダカラボディーデザイン）" },
  { label: "タイプ", value: "完全個室パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額80,000円〜250,000円程度" },
  { label: "エリア", value: "東京都港区（麻布十番・赤羽橋）" },
  { label: "特徴", value: "麻布十番の隠れ家的ジム / 完全マンツーマン / オーダーメイドプログラム / 食事指導付き" },
];

const strengths = [
  {
    title: "麻布十番の隠れ家的な完全プライベート空間",
    desc: "CoCoDakara Body Designは麻布十番エリアに位置する隠れ家的なパーソナルジムです。完全個室のトレーニング空間で、他の会員と顔を合わせることなく集中してトレーニングに取り組めます。プライバシーを重視する方に最適な環境です。",
  },
  {
    title: "一人ひとりに合わせたオーダーメイドプログラム",
    desc: "カウンセリングと体の状態を丁寧に分析し、利用者一人ひとりの目標・体質・生活習慣に合わせた完全オーダーメイドのトレーニングプログラムを作成。ダイエット、ボディメイク、姿勢改善など多様なニーズに対応しています。",
  },
  {
    title: "トレーニングと食事指導の一体型サポート",
    desc: "トレーニングだけでなく、食事指導も一体となったサポート体制が整っています。日々の食事内容についてアドバイスを受けられるため、運動と栄養の両面から効率的にボディメイクを進められます。",
  },
];

const merits = [
  {
    title: "完全マンツーマンで質の高い指導が受けられる",
    desc: "トレーナーが1対1でつきっきりで指導するため、フォームの修正や負荷の調整がリアルタイムで行われます。自己流トレーニングでは得られない効果的なアプローチが期待できます。",
  },
  {
    title: "食事指導が含まれており追加費用が不要",
    desc: "プランに食事指導が含まれているため、別途栄養指導の費用がかかりません。トレーニングと食事管理を一括でサポートしてもらえるのはコストパフォーマンスの面でも魅力です。",
  },
  {
    title: "麻布十番エリアのアクセスの良さ",
    desc: "麻布十番駅・赤羽橋駅からアクセスしやすい立地のため、仕事帰りや休日にも通いやすい環境です。都心で生活する方にとって利便性が高いロケーションです。",
  },
];

const demerits = [
  {
    title: "料金が比較的高めの設定",
    desc: "麻布十番という立地と完全個室・マンツーマンのサービスを提供しているため、大手チェーンと比較すると料金はやや高めの設定です。予算に余裕があるか事前に確認しておきましょう。",
  },
  {
    title: "店舗が1拠点のみで通える範囲が限定される",
    desc: "現時点で店舗は麻布十番エリアの1拠点のみのため、自宅や職場から距離がある場合は通い続けるのが難しくなる可能性があります。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "大手パーソナルジムと比較すると知名度はまだ高くありません。口コミや体験談の情報量が限られるため、入会前に無料カウンセリングで直接確認することをおすすめします。",
  },
];

const pricingPlans = [
  { name: "月8回プラン", duration: "60分/回", price: "月額80,000円〜", note: "週2回ペース" },
  { name: "短期集中2ヶ月コース", duration: "60分/回", price: "総額200,000円〜", note: "16回・食事指導込み" },
  { name: "プレミアムコース", duration: "90分/回", price: "月額150,000円〜", note: "週2回・手厚いサポート" },
];

const reviewSummary = "CoCoDakara Body Designの口コミでは「完全個室で人目を気にせずトレーニングできる」「トレーナーの指導が丁寧で的確」という声が多く見られます。食事指導が含まれている点も高評価です。一方で「料金がやや高い」「店舗が1箇所しかない」といった指摘もあります。麻布十番エリアで質の高いパーソナルトレーニングを求める方に支持されているジムです。";

const faqItems = [
  { q: "CoCoDakara Body Designの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引や無料になる場合があります。最新情報は公式サイトまたは無料カウンセリングでご確認ください。" },
  { q: "トレーニング未経験でも大丈夫ですか？", a: "はい、完全マンツーマン指導のため、未経験の方でも安心して始められます。一人ひとりのレベルに合わせたプログラムを組んでもらえます。" },
  { q: "食事指導はどのような内容ですか？", a: "日々の食事内容を共有し、トレーナーから栄養バランスや食事タイミングのアドバイスを受けられます。極端な食事制限ではなく、続けやすい食生活の改善を目指す指導方針です。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリングが用意されています。体の悩みや目標をヒアリングし、最適なプランの提案を受けられます。公式サイトから予約可能です。" },
  { q: "解約や退会に違約金はかかりますか？", a: "プランやコースによって条件が異なります。詳細は入会前のカウンセリング時に必ず確認してください。" },
  { q: "最寄り駅からのアクセスを教えてください", a: "東京メトロ南北線・都営大江戸線「麻布十番駅」または都営大江戸線「赤羽橋駅」が最寄りです。いずれの駅からも徒歩圏内でアクセスできます。" },
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

const affiliateLink = "https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A";

const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function CocodakaraReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CoCoDakara Body Design" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          CoCoDakara Body Designの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CoCoDakara の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          CoCoDakara Body Design（ココダカラボディーデザイン）は、東京都港区麻布十番に位置する完全個室のパーソナルトレーニングジムです。隠れ家的な空間で、完全マンツーマンのオーダーメイドプログラムと食事指導を組み合わせた一体型のボディメイクサポートを提供しています。本記事では、CoCoDakara Body Designの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの料金</h2>
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
            <a href="https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">CoCoDakara Body Designが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            無料カウンセリングを予約する
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
