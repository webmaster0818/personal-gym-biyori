import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "TOKIELの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "TOKIEL（トキエル）女性専用パーソナルジムの口コミ・評判を徹底解説。女性に特化した指導、料金体系、メリット・デメリットを網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "TOKIEL（トキエル）" },
  { label: "タイプ", value: "女性専用パーソナルジム" },
  { label: "料金帯", value: "月額28,000円〜70,000円程度" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "女性専用 / 女性トレーナー在籍 / ボディメイク / 美容×フィットネス" },
];

const strengths = [
  {
    title: "女性専用で安心してトレーニングできる",
    desc: "利用者・トレーナーともに女性のみの環境で、人目を気にせずトレーニングに集中できます。女性特有の身体の悩みにも気軽に相談でき、生理周期に合わせたプログラム調整にも対応しています。",
  },
  {
    title: "美容とフィットネスを融合したアプローチ",
    desc: "単なるダイエットではなく、美しいボディラインや美肌、アンチエイジングなど美容面も意識したプログラムを提供。トレーニング後のストレッチやコンディショニングも充実しています。",
  },
  {
    title: "女性トレーナーによるきめ細やかな指導",
    desc: "女性トレーナーが中心のため、女性ならではの身体の悩みや目標に寄り添った指導が受けられます。産後ダイエットや更年期の体調管理なども相談しやすい環境です。",
  },
];

const merits = [
  {
    title: "女性特有の悩みに対応したプログラム",
    desc: "生理周期に合わせたトレーニング強度の調整、産後の骨盤ケア、更年期症状の緩和など、女性ならではのニーズに対応したプログラムが用意されています。",
  },
  {
    title: "おしゃれで清潔感のある空間",
    desc: "女性が心地よく過ごせるよう、内装やアメニティにこだわった空間づくりがされています。シャワー室やパウダールームも完備です。",
  },
  {
    title: "男性の目を気にせずトレーニングに集中できる",
    desc: "完全女性専用のため、服装や汗を気にすることなく、自分のペースでトレーニングに取り組めます。",
  },
];

const demerits = [
  {
    title: "男性は利用できない",
    desc: "女性専用のため、カップルや夫婦で一緒に通うことはできません。",
  },
  {
    title: "店舗数が限定的",
    desc: "女性専用という特性上、店舗数は大手チェーンと比べて少なめです。通える範囲に店舗があるか確認が必要です。",
  },
  {
    title: "ハードなウェイトトレーニングには向かない場合も",
    desc: "美容寄りのアプローチのため、本格的な筋肥大やハードなウェイトトレーニングを求める方には物足りない可能性があります。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "50分/回・月4回", price: "月額28,000円〜", note: "週1回ペース" },
  { name: "スタンダードプラン", duration: "50分/回・月8回", price: "月額50,000円〜", note: "週2回ペース・人気" },
  { name: "プレミアムプラン", duration: "50分/回・月12回", price: "月額70,000円〜", note: "しっかり結果を出したい方" },
];

const reviewSummary = "TOKIELの口コミでは「女性専用で安心」「おしゃれな空間でモチベーションが上がる」と好評です。女性トレーナーの丁寧な指導や、生理周期への配慮が高く評価されています。一方で「料金が高め」「店舗が少ない」という声も見られます。";

const faqItems = [
  { q: "TOKIELは本当に女性専用ですか？", a: "はい、利用者もスタッフも女性のみの完全女性専用ジムです。" },
  { q: "産後でも通えますか？", a: "はい、産後のボディケアに対応したプログラムがあります。産後2ヶ月以降から利用可能な場合が多いですが、医師の許可を得てからの利用をおすすめします。" },
  { q: "生理中でもトレーニングできますか？", a: "はい、体調に合わせてトレーニング内容を調整してもらえます。無理をせず、トレーナーに相談してください。" },
  { q: "ウェアのレンタルはありますか？", a: "店舗によりますが、ウェア・タオルのレンタルサービスが用意されている場合があります。詳細は公式サイトでご確認ください。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会方法を教えてください", a: "退会を希望する場合は前月までに申告が必要です。詳細は契約時にご確認ください。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "fis.lady's", href: "/review/fis-ladys/" },
];

export default function TokielReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "TOKIEL" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">TOKIELの口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          TOKIEL（トキエル）は<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>のパーソナルジムです。女性トレーナーによるきめ細やかな指導と、美容×フィットネスを融合したプログラムが特徴。本記事では、TOKIELの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">TOKIELのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">TOKIELが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
