import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "VASE（ベイス）パーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "VASE（ベイス）パーソナルトレーニングジムの口コミ・評判を徹底解説。料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "VASE（ベイス）パーソナルジム" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額30,000円〜80,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "パーソナルトレーニング / マンツーマン指導 / 食事サポート / 初心者歓迎" },
];

const strengths = [
  {
    title: "一人ひとりに合わせたオーダーメイドトレーニング",
    desc: "VASEではカウンセリングで目標や体質を丁寧にヒアリングし、完全オーダーメイドのトレーニングプログラムを作成。ダイエット、筋力アップ、姿勢改善など幅広いニーズに対応しています。",
  },
  {
    title: "初心者にも安心の丁寧な指導",
    desc: "トレーニング経験のない方でも安心して始められるよう、フォームの基礎から丁寧に指導。一つひとつの動作を確認しながら進めるため、正しいフォームが自然と身につきます。",
  },
  {
    title: "食事管理サポートで効果を最大化",
    desc: "トレーニングだけでなく、日々の食事内容についてもアドバイス。栄養バランスを考えた食事プランの提案で、トレーニング効果を最大限に引き出します。",
  },
];

const merits = [
  {
    title: "オーダーメイドで無理なく続けられる",
    desc: "個々の体力レベルや生活スタイルに合わせたプログラムのため、無理なく継続できます。挫折しにくい仕組みが整っています。",
  },
  {
    title: "トレーナーとの距離が近く相談しやすい",
    desc: "マンツーマン指導のため、トレーナーに気軽に質問や相談ができます。トレーニング中の疑問やフォームの不安もその場で解消できます。",
  },
  {
    title: "食事指導がプランに含まれている",
    desc: "追加料金なしで食事管理のサポートが受けられるため、トレーニングと食事の両面からボディメイクを進められます。",
  },
];

const demerits = [
  {
    title: "大手と比較して知名度が低い",
    desc: "RIZAPやBEYONDなど大手パーソナルジムと比較すると知名度は低め。口コミや情報を自分で調べる必要があります。",
  },
  {
    title: "店舗数が限られている",
    desc: "展開エリアが限定的なため、通える範囲に店舗がない場合があります。事前にアクセスを確認しておきましょう。",
  },
  {
    title: "人気トレーナーの予約が取りにくいことも",
    desc: "指名制の場合、人気のトレーナーは予約が集中しやすく、希望の時間帯が取れないことがあります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額30,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額55,000円〜", note: "週2回ペース・人気プラン" },
  { name: "短期集中コース（2ヶ月16回）", duration: "60分/回", price: "総額120,000円〜", note: "食事指導付き" },
];

const reviewSummary = "VASEの口コミでは「トレーナーが親切で初心者でも安心」「オーダーメイドのプログラムが自分に合っている」「食事指導が分かりやすい」という声が多く見られます。丁寧な指導と無理のないプログラムが好評です。一方で「店舗数が少ない」「知名度が低いため情報が少ない」という指摘もあります。全体的に満足度は高い傾向です。";

const faqItems = [
  { q: "VASEの入会金はいくらですか？", a: "入会金は30,000円〜50,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "VASEは完全予約制ですか？", a: "はい、完全予約制です。Web予約システムまたはLINEから予約・変更が可能です。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、初心者の方も多く通われています。フォームの基礎から丁寧に指導するため、運動経験がなくても安心して始められます。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じた食事アドバイスが含まれています。LINEでの相談に対応している場合もあります。" },
  { q: "退会に違約金はかかりますか？", a: "月額制プランの場合、基本的に違約金はありません。退会を希望する場合は前月までに申告が必要です。" },
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
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function VaseReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "VASE" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          VASE（ベイス）パーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            VASE の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          VASE（ベイス）は一人ひとりに合わせたオーダーメイドのトレーニングプログラムを提供するパーソナルトレーニングジムです。初心者にも安心の丁寧な指導と食事管理サポートで、無理なく目標達成を目指せます。本記事では、VASEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">VASEのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/I94614.91387816.Q136169A" width={300} height={250} alt="VASEパーソナルジム" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">VASEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            VASEの無料カウンセリングに申し込む
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
