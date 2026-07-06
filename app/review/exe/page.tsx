import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "EXE（エグゼ）パーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "EXE（エグゼ）パーソナルジムの口コミ・評判を徹底解説。高級完全個室・マンツーマン指導の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "EXE（エグゼ）パーソナルジム" },
  { label: "タイプ", value: "高級パーソナルジム（完全個室・マンツーマン）" },
  { label: "料金帯", value: "月額80,000円〜200,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "高級完全個室 / マンツーマン指導 / オーダーメイドプログラム / アメニティ充実" },
];

const strengths = [
  {
    title: "完全個室のラグジュアリー空間",
    desc: "EXEのトレーニングルームは高級感あふれる完全個室。他の会員と顔を合わせることなく、プライベートな空間で集中してトレーニングに取り組めます。内装やアメニティにもこだわり、ホテルのような快適さを提供しています。",
  },
  {
    title: "経験豊富なトレーナーによるマンツーマン指導",
    desc: "厳選された経験豊富なトレーナーが、一人ひとりの体質・目標・ライフスタイルに合わせた完全オーダーメイドのトレーニングを提供。フォームの修正から食事指導まで、きめ細やかなサポートが受けられます。",
  },
  {
    title: "充実したアフターケアとサポート体制",
    desc: "トレーニング後のストレッチケアやボディケア、食事管理アプリの提供など、ジム外でのサポートも充実。トレーニング以外の時間も含めたトータルボディマネジメントを実現します。",
  },
];

const merits = [
  {
    title: "ラグジュアリーな環境でモチベーション維持",
    desc: "高級感のある完全個室空間は、トレーニングへのモチベーションを高めてくれます。アメニティも充実しており、仕事帰りでも手ぶらで通える快適さが魅力です。",
  },
  {
    title: "質の高いマンツーマン指導",
    desc: "トレーナーの採用基準が高く、解剖学や栄養学の知識を持つプロが指導。正しいフォームで効率的にトレーニングでき、怪我のリスクも軽減されます。",
  },
  {
    title: "食事指導・生活習慣の改善までサポート",
    desc: "トレーニングだけでなく、食事内容や生活習慣まで総合的にアドバイス。ダイエットから筋力アップまで、目標達成に向けたトータルサポートが受けられます。",
  },
];

const demerits = [
  {
    title: "料金が高額",
    desc: "高級路線のため、月額料金は一般的なパーソナルジムと比較して高め。予算に余裕がある方向けのサービスです。",
  },
  {
    title: "店舗数が限定的",
    desc: "都心部を中心とした展開のため、郊外や地方在住の方にはアクセスしにくい場合があります。事前に通える範囲か確認しましょう。",
  },
  {
    title: "予約が取りにくい時間帯がある",
    desc: "人気のトレーナーや夕方以降の時間帯は予約が集中しやすく、希望通りの予約が取れないことがあります。早めの予約がおすすめです。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額80,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額150,000円〜", note: "週2回ペース・おすすめ" },
  { name: "短期集中コース（2ヶ月16回）", duration: "60分/回", price: "総額300,000円〜", note: "食事指導付き" },
];

const reviewSummary = "EXEの口コミでは「高級感のある空間で気持ちよくトレーニングできる」「トレーナーの質が高い」「食事指導が的確」といった声が多く見られます。ラグジュアリーな環境と質の高い指導が高く評価されています。一方で「料金が高い」「店舗が少ない」という点は事前に理解しておく必要があります。全体的に満足度は非常に高い傾向です。";

const faqItems = [
  { q: "EXEの入会金はいくらですか？", a: "入会金は50,000円〜100,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "EXEは完全予約制ですか？", a: "はい、完全予約制です。専用アプリまたはLINEから予約・変更が可能です。" },
  { q: "手ぶらで通えますか？", a: "はい、ウェアやタオル、シューズ、アメニティが完備されているため、手ぶらで通うことができます。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じた食事指導が含まれています。専用アプリやLINEでの相談にも対応しています。" },
  { q: "退会に違約金はかかりますか？", a: "コースによって異なります。月額制プランの場合は前月申告で違約金なし。短期集中コースは途中解約の条件を事前にご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "OUTLINE", href: "/review/outline/" },
];

export default function ExeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "EXE（エグゼ）パーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
        "author": {
          "@type": "Person",
          "name": "山田 拓也",
          "url": "https://personal-gym-biyori.com/about/",
          "jobTitle": "パーソナルジム専門ライター"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-05-18"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "EXE" }]} />
      <ReviewSummary gymName="EXE" />
      <GymCta slug="exe" name="EXE" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          EXE（エグゼ）パーソナルジムの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=H9594M.1.O142710U.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            EXE の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          EXE（エグゼ）は高級感のある<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>で、経験豊富なトレーナーによる<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>が受けられるパーソナルジムです。ラグジュアリーな空間と質の高いサービスで、ワンランク上のトレーニング体験を提供しています。本記事では、EXEの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">EXEの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">EXEの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">EXEのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">EXEの料金</h2>
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
            <a href="https://t.felmat.net/fmcl?ak=H9594M.1.O142710U.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">EXEの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="exe" name="EXE" />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">EXEのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=H9594M.1.O142710U.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/H9594M.O142710U.Q136169A" width={300} height={250} alt="EXEパーソナルジム" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* Author Box */}
        <AuthorBox />

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">EXEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=H9594M.1.O142710U.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            EXEの無料カウンセリングに申し込む
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
