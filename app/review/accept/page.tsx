import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ACCEPTの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "ACCEPT（アクセプト）パーソナルジムの口コミ・評判を徹底解説。完全個室・月額制の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "ACCEPT（アクセプト）" },
  { label: "タイプ", value: "完全個室パーソナルジム" },
  { label: "料金帯", value: "月額30,000円〜80,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "完全個室 / 月額制 / マンツーマン指導 / 食事サポートあり" },
];

const strengths = [
  {
    title: "完全個室でプライバシーを確保",
    desc: "トレーニングルームは完全個室のため、他の会員の目を気にせず集中してトレーニングに取り組めます。人目が気になる方や初心者でも安心して通える環境です。",
  },
  {
    title: "月額制で料金が明確",
    desc: "一括払いが主流のパーソナルジム業界において、月額制を採用。毎月の支払いが一定のため、家計管理がしやすく、始めるハードルも低い料金体系です。",
  },
  {
    title: "個々の目標に合わせたオーダーメイドプログラム",
    desc: "ダイエット、筋力アップ、姿勢改善など、利用者一人ひとりの目標に合わせたトレーニングプログラムを作成。無理なく続けられるメニューを提案してくれます。",
  },
];

const merits = [
  {
    title: "月額制で始めやすく辞めやすい",
    desc: "高額な一括契約が不要なため、パーソナルジムを試してみたい方にとってリスクが低い料金体系です。合わなければ翌月から退会できる柔軟さも魅力です。",
  },
  {
    title: "完全個室で周囲を気にせずトレーニング",
    desc: "他の利用者と顔を合わせることがないため、体型に自信がない方やトレーニング初心者でもストレスなく通えます。",
  },
  {
    title: "食事指導が料金に含まれている",
    desc: "追加料金なしで食事アドバイスが受けられるため、トレーニングと食事の両面からボディメイクをサポートしてもらえます。",
  },
];

const demerits = [
  {
    title: "店舗数が限られている",
    desc: "大手チェーンと比較すると店舗数が少なく、通える範囲に店舗がない場合があります。事前にアクセスを確認しておきましょう。",
  },
  {
    title: "トレーナーの指名に制限がある場合も",
    desc: "人気トレーナーは予約が集中しやすく、希望の時間帯に指名が取れないことがあります。",
  },
  {
    title: "短期集中型のプランは割高になることも",
    desc: "月額制のため長期利用には向いていますが、2ヶ月集中コースなどを希望する場合は総額が他社より高くなる可能性があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額30,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額55,000円〜", note: "週2回ペース・人気プラン" },
  { name: "通い放題プラン", duration: "60分/回", price: "月額80,000円〜", note: "回数無制限" },
];

const reviewSummary = "ACCEPTの口コミでは「完全個室で集中できる」「月額制で安心」という声が多く見られます。トレーナーの指導が丁寧で初心者にも好評です。一方で「店舗が少ない」「人気の時間帯は予約が取りにくい」といった指摘もあります。全体的に満足度は高い傾向です。";

const faqItems = [
  { q: "ACCEPTの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "ACCEPTは完全予約制ですか？", a: "はい、完全予約制です。Web予約システムから予約・変更が可能です。" },
  { q: "月の途中から入会できますか？", a: "はい、月の途中からでも入会可能です。初月は日割り計算になる場合があります。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じた食事アドバイスが含まれています。LINEでの相談に対応している場合もあります。" },
  { q: "退会に違約金はかかりますか？", a: "月額制のため、基本的に違約金はありません。退会を希望する場合は前月までに申告が必要です。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
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

export default function AcceptReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ACCEPT" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ACCEPTの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ACCEPT（アクセプト）は完全個室・月額制を特徴とするパーソナルジムです。一人ひとりの目標に合わせたオーダーメイドプログラムで、ダイエットから筋力アップまで幅広い目的に対応しています。本記事では、ACCEPTの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ACCEPTの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ACCEPTの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ACCEPTのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ACCEPTの料金</h2>
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

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ACCEPTの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ACCEPTのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">ACCEPTが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
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
