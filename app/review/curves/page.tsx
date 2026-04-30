import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "カーブスの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "カーブス（Curves）の口コミ・評判を徹底解説。女性専用30分フィットネス、全国2000店舗以上の料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "カーブス（Curves）" },
  { label: "タイプ", value: "女性専用30分フィットネス" },
  { label: "料金帯", value: "月額6,820円〜7,920円" },
  { label: "エリア", value: "全国2,000店舗以上" },
  { label: "特徴", value: "女性専用 / 30分 / 予約不要 / 全国展開 / サーキット型" },
];

const strengths = [
  {
    title: "全国2,000店舗以上の圧倒的なアクセス性",
    desc: "全国47都道府県に2,000店舗以上を展開。自宅や職場の近くに店舗が見つかりやすく、どの地域でも通いやすい環境が整っています。",
  },
  {
    title: "1回30分で完了する効率的なプログラム",
    desc: "筋力トレーニングと有酸素運動を交互に行うサーキットトレーニングを30分で完了。短時間で効率的に全身を鍛えられます。",
  },
  {
    title: "予約不要でいつでも通える",
    desc: "予約なしで営業時間内ならいつでも利用可能。自分のスケジュールに合わせて柔軟に通えます。",
  },
];

const merits = [
  {
    title: "月額6,820円〜の手頃な料金",
    desc: "パーソナルジムの中では最も手頃な価格帯。月額制で通い放題のため、頻繁に通うほどお得になります。",
  },
  {
    title: "運動初心者・シニア世代にも安心",
    desc: "油圧式マシンを使用しているため、負荷が自動調整され、体力に自信がない方やシニア世代でも安全にトレーニングできます。",
  },
  {
    title: "コーチが常駐してサポート",
    desc: "店舗にコーチが常駐しており、フォームの確認やアドバイスを受けながら安心してトレーニングできます。",
  },
];

const demerits = [
  {
    title: "本格的な筋トレには不向き",
    desc: "油圧式マシン中心のため、フリーウェイトなど高強度の筋力トレーニングを求める方には物足りない場合があります。",
  },
  {
    title: "男性は利用不可",
    desc: "女性専用のため、男性は利用できません。",
  },
  {
    title: "マンツーマン指導ではない",
    desc: "一般的なパーソナルジムのような1対1の個別指導ではなく、グループでのサーキットトレーニングが中心です。",
  },
];

const pricingPlans = [
  { name: "通常コース", duration: "30分/回・通い放題", price: "月額7,920円", note: "全時間帯利用可" },
  { name: "12ヶ月お得コース", duration: "30分/回・通い放題", price: "月額6,820円", note: "12ヶ月契約" },
];

const reviewSummary = "カーブスの口コミでは「30分で終わるから続けやすい」「予約不要で気軽」「スタッフが親切」という声が圧倒的に多いです。特に40代以上の女性や運動初心者からの支持が高いです。一方で「本格的なトレーニングには物足りない」「若い世代には刺激が少ない」という意見も。健康維持・体力づくりを目的とする方に最適です。";

const faqItems = [
  { q: "カーブスの入会金はいくらですか？", a: "入会金は16,500円です。キャンペーンで無料になることがあります。最新情報は各店舗にご確認ください。" },
  { q: "何歳から何歳まで通えますか？", a: "年齢制限は特にありません。10代から80代以上の方まで幅広い年齢層が通っています。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、会員の多くが運動初心者です。油圧式マシンが自動で負荷を調整するため、体力に合わせたトレーニングが可能です。" },
  { q: "見学や体験はできますか？", a: "はい、無料体験が用意されています。お近くの店舗に直接お問い合わせください。" },
  { q: "どのくらいの頻度で通うのが理想ですか？", a: "週2〜3回が推奨されています。1回30分のため、日常生活に無理なく組み込めます。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の末日までに店舗に申告が必要です。" },
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
  { name: "FURDI", href: "/review/furdi/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "FIT24", href: "/review/fit24/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
];

export default function CurvesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "カーブス" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          カーブスの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          カーブス（Curves）は全国2,000店舗以上を展開する女性専用30分フィットネスです。予約不要・月額6,820円〜で通い放題という手軽さが魅力。本記事では、カーブスの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">カーブスのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスの料金</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">カーブスが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずはお近くの店舗で無料体験を試してみましょう。</p>
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
