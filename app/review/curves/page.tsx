import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "カーブスは痩せる？口コミ・評判を徹底解説【女性専用30分フィットネス】",
  description:
    "カーブス（Curves）は痩せるのか、口コミ・評判をもとに解説。女性専用30分フィットネスで痩せた人・痩せない人の傾向、料金、メリット・デメリット、全国2000店舗以上の特徴まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "カーブス（Curves）" },
  { label: "タイプ", value: "女性専用30分フィットネス" },
  { label: "料金帯", value: "詳細は公式HPをご確認ください" },
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
    desc: "有酸素運動、筋力運動、柔軟運動を組み合わせたサーキットトレーニングを30分で完了。短時間で効率的に全身を鍛えられます。",
  },
  {
    title: "予約不要でいつでも通える",
    desc: "予約なしで営業時間内ならいつでも利用可能。自分のスケジュールに合わせて柔軟に通えます。",
  },
];

const merits = [
  {
    title: "手頃な料金設定",
    desc: "月額制で通い放題のため、頻繁に通うほどお得になります。料金の詳細は公式HPをご確認ください。",
  },
  {
    title: "幅広い方が安心して利用可能",
    desc: "油圧式マシンを使用しているため、負荷が自動調整され、体力に自信がない方でも安全にトレーニングできます。",
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
  { name: "通常コース", duration: "30分/回・通い放題", price: "詳細は公式HPをご確認ください", note: "全時間帯利用可" },
  { name: "12ヶ月お得コース", duration: "30分/回・通い放題", price: "詳細は公式HPをご確認ください", note: "12ヶ月契約" },
];

const reviewSummary = "カーブスの口コミでは「30分で終わるから続けやすい」「予約不要で気軽」「スタッフが親切」という声が多く見られます。幅広い年齢層の女性から支持されています。一方で「本格的なトレーニングには物足りない」という意見も。健康維持・体力づくりを目的とする方に最適です。";

const faqItems = [
  { q: "カーブスの入会金はいくらですか？", a: "入会金の詳細は公式HPをご確認ください。キャンペーンを実施している場合もあります。" },
  { q: "何歳から何歳まで通えますか？", a: "年齢制限は特にありません。10代から80代以上の方まで幅広い年齢層が通っています。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、油圧式マシンが自動で負荷を調整するため、体力に合わせたトレーニングが可能です。" },
  { q: "見学や体験はできますか？", a: "はい、無料体験が用意されています。お近くの店舗に直接お問い合わせください。" },
  { q: "どのくらいの頻度で通うのが理想ですか？", a: "週2〜3回が推奨されています。1回30分のため、日常生活に無理なく組み込めます。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の末日までに店舗に申告が必要です。" },
  { q: "カーブスに通えば痩せますか？", a: "運動習慣づくりや体力アップ、体の引き締めには向いていますが、大幅な減量を目指す場合は食事管理の併用が重要です。効果には個人差があります。口コミでも「続けて引き締まった」という声と「体重は大きく変わらない」という声の両方が見られます。" },
  { q: "どのくらいで効果を実感できますか？", a: "個人差がありますが、週2〜3回を数ヶ月続けることで体力や体の引き締まりを実感する声が多く見られます。具体的な効果は公式サイトや店舗でご確認ください。" },
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
      <ReviewSummary gymName="カーブス" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          カーブスは痩せる？口コミ・評判を徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          カーブス（Curves）は全国2,000店舗以上を展開する<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>30分フィットネスです。<span className="font-bold bg-yellow-100 px-0.5">予約不要</span>・<span className="font-bold bg-yellow-100 px-0.5">通い放題</span>という手軽さが魅力。本記事では「カーブスは痩せるのか」という疑問を口コミの傾向から検証しつつ、メリット・デメリットを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：カーブスで「痩せる」かは目的次第</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>運動習慣づくり・健康維持・体力アップ</strong>には向く（週2〜3回で続けやすい）</li>
            <li>・<strong>短期で大幅な減量</strong>を狙う本格ダイエットには物足りない場合がある（油圧式マシン中心・食事指導は別）</li>
            <li>・口コミでは「続けやすい」「体が引き締まった」という声と「体重は大きく変わらない」という声が混在</li>
            <li>・痩せたい度合いが高い人は、食事管理込みのパーソナルジムとの併用・比較も検討を</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">効果には個人差があります。料金・体験は店舗で異なるため最新は公式でご確認ください。比較は<a href="/compare/" className="text-teal-600 underline">おすすめ比較</a>もご覧ください。</p>
        </div>

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
          <p className="text-xs text-gray-500 mt-3">※ 口コミは<a href="https://www.curves.co.jp/voice/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">カーブス公式サイトの利用者の声</a>を参考に要約・再構成したものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カーブスは痩せる？口コミから見る効果の傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            「カーブスで痩せるのか」は最も多い疑問のひとつです。口コミの傾向を整理すると、結果には目的とライフスタイルが大きく関係しています。以下は公開されている口コミ全般から見られる傾向で、特定の効果を保証するものではありません。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">痩せた・引き締まったという声の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・週2〜3回を継続でき、運動習慣が定着して体が引き締まった</li>
                <li>・有酸素＋筋力＋柔軟のサーキットで、体力・代謝面の変化を実感</li>
                <li>・コーチの声かけで挫折せず続けられたことが結果につながった</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
              <h3 className="font-bold text-orange-800 mb-2">痩せにくい・物足りないという声の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・体重を大きく落とす目的だと、運動だけでは変化が緩やか</li>
                <li>・油圧式マシン中心のため高強度の追い込みには不向き</li>
                <li>・食事管理は基本的に自己管理。痩せたい度合いが高いほど食事の見直しが必要</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">※ 効果には個人差があり、運動だけで体重が減ることを保証するものではありません。減量目的の場合は食事管理の併用が一般的に重要とされています。最新情報は公式サイトでご確認ください。</p>
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
