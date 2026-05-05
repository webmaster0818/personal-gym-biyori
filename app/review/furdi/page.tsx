import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FURDIの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "FURDI（ファディー）の口コミ・評判を徹底解説。AI×女性専用フィットネス、サーキット型トレーニングの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "FURDI（ファディー）" },
  { label: "タイプ", value: "AI×女性専用サーキット型フィットネス" },
  { label: "料金帯", value: "月額7,678円〜" },
  { label: "エリア", value: "全国に100店舗以上展開" },
  { label: "特徴", value: "AI指導 / 女性専用 / サーキット型 / 予約不要 / 低価格" },
];

const strengths = [
  {
    title: "AIがトレーニングを指導",
    desc: "大型モニターに映し出されるAIトレーナーが、フォームの指導やトレーニングメニューを提案。人間のトレーナーに気を使う必要がなく、自分のペースでトレーニングに集中できます。",
  },
  {
    title: "月額7,678円〜の圧倒的低価格",
    desc: "パーソナルジムとしては破格の月額7,678円〜。通い放題プランでこの価格のため、毎日通えば1回あたり数百円という驚異のコスパを実現しています。",
  },
  {
    title: "予約不要で好きな時に通える",
    desc: "予約なしでいつでも好きな時間に通えるため、スケジュールに縛られずにトレーニングできます。忙しい方にぴったりの柔軟なシステムです。",
  },
];

const merits = [
  {
    title: "人目を気にせずトレーニングできる",
    desc: "AI指導のため、トレーナーとのコミュニケーションが苦手な方でもストレスフリー。女性専用なので男性の目も気になりません。",
  },
  {
    title: "全国に店舗があり通いやすい",
    desc: "100店舗以上の全国展開で、地方在住の方でもアクセスしやすい環境が整っています。",
  },
  {
    title: "サーキット型で効率的な全身運動",
    desc: "複数のマシンを順番に使うサーキット型トレーニングで、短時間で全身を効率よく鍛えられます。",
  },
];

const demerits = [
  {
    title: "対人指導がないため初心者は不安な場合も",
    desc: "AIによる指導のため、細かなフォーム修正や個別の質問対応には限界があります。完全な対人指導を求める方には物足りない可能性があります。",
  },
  {
    title: "本格的な筋力トレーニングには不向き",
    desc: "サーキット型のため、フリーウェイトなどの本格的な筋トレを求める方にはマシンのバリエーションが不足する場合があります。",
  },
  {
    title: "食事指導は別途オプション",
    desc: "基本プランには食事指導が含まれていないため、食事面のサポートが必要な場合は追加費用がかかります。",
  },
];

const pricingPlans = [
  { name: "プレミアム会員", duration: "通い放題", price: "月額7,678円", note: "全時間帯利用可" },
  { name: "スタンダード会員", duration: "通い放題", price: "月額8,778円", note: "パーソナル指導月1回付き" },
  { name: "U-18会員", duration: "通い放題", price: "月額5,478円", note: "18歳以下限定" },
];

const reviewSummary = "FURDIの口コミでは「安くて通いやすい」「予約不要で気軽」「AIだから気を使わなくていい」という声が多数。低価格ながら十分な運動効果を実感できるという評価が中心です。一方で「直接指導がないので不安」「マシンが限られる」といった声も。運動習慣をつけたい女性の入門としておすすめです。";

const faqItems = [
  { q: "FURDIの入会金はいくらですか？", a: "入会金は19,800円です。キャンペーンで無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "AIトレーニングとは具体的にどんなものですか？", a: "大型モニターにAIトレーナーが表示され、動きのお手本やカウント、フォームの指示を行います。200種類以上のメニューが用意されています。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回15〜30分が目安です。自分のペースで調整できるため、短時間でも長時間でも利用可能です。" },
  { q: "見学や体験はできますか？", a: "無料体験が用意されています。公式サイトまたは各店舗にお問い合わせください。" },
  { q: "男性は利用できますか？", a: "いいえ、FURDIは女性専用のフィットネスジムです。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の10日までに店舗に申告が必要です。詳細は入会時にご確認ください。" },
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
  { name: "カーブス", href: "/review/curves/" },
  { name: "リプレシャス", href: "/review/reprecious/" },
  { name: "ビーコンセプト", href: "/review/b-concept/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function FurdiReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FURDI" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FURDIの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FURDI の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          FURDI（ファディー）はAI技術を活用した<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>サーキット型フィットネスジムです。月額<span className="font-bold bg-yellow-100 px-0.5">7,678円</span>〜の低価格で<span className="font-bold bg-yellow-100 px-0.5">予約不要</span>・<span className="font-bold bg-yellow-100 px-0.5">通い放題</span>。本記事では、FURDIの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FURDIのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの料金</h2>
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
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/F6058J.T101150Z.Q136169A" alt="FURDI" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">FURDIが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料体験で、AI×サーキットトレーニングの手軽さを体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
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
