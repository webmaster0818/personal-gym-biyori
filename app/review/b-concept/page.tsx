import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "ビーコンセプトの口コミ・評判｜料金・メリット・デメリットの解説",
  description:
    "ビーコンセプト（B-CONCEPT）の口コミ・評判をご紹介します。下半身・脚痩せに特化した女性専用パーソナルジムの料金体系、メリット・デメリットを解説しています。",
};

const basicInfo = [
  { label: "ジム名", value: "ビーコンセプト（B-CONCEPT）" },
  { label: "タイプ", value: "下半身・脚痩せ特化 女性専用パーソナルジム" },
  { label: "料金帯", value: "トライアルプラン 月額44,000円・2ヶ月コース179,685円〜（税込・2026年11月27日確認）" },
  { label: "エリア", value: "東京・埼玉・千葉・大阪・愛知・北海道・福岡（公式の店舗一覧19店舗・2026年11月27日確認）" },
  { label: "特徴", value: "下半身特化 / 女性専用 / 脚痩せメソッド / アフターフォロー付き" },
];

const strengths = [
  {
    title: "下半身・脚痩せに特化した独自メソッド",
    desc: "太もも・ヒップ・ふくらはぎなど下半身のボディメイクに特化したトレーニングプログラムです。骨盤矯正やストレッチも取り入れ、根本からの脚痩せを目指します。",
  },
  {
    title: "女性専用で通いやすい環境",
    desc: "会員は女性のみのため、周囲の目を気にせずトレーニングに集中できます。女性特有の悩みにも理解のあるトレーナーが対応します。",
  },
  {
    title: "アフターフォロー付きのプログラム",
    desc: "公式の料金ページでは、2ヶ月コースの後に6ヶ月のアフターフォローセッションを追加した「リバウンド防止付プログラム」（全22回）が案内されています（2026年11月27日確認）。",
  },
];

const merits = [
  {
    title: "脚痩せ・下半身に特化した専門的な指導",
    desc: "一般的なパーソナルジムでは全身均等にトレーニングしますが、ビーコンセプトは下半身に特化しています。脚やお尻の悩みを集中的にケアできます。",
  },
  {
    title: "リバウンド防止のアフターフォロー",
    desc: "リバウンド防止付プログラムを選ぶと、2ヶ月コースの後に6ヶ月のアフターフォローセッションを受けられます。コース終了後の体型維持を相談しながら進められます。",
  },
  {
    title: "託児所費用のサポート",
    desc: "一部店舗では託児所費用の負担制度があり、小さなお子様がいる方も通いやすい環境です。",
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
    desc: "公式の料金ページでは、2ヶ月の太ももダイエットプログラムが179,685円、アフターフォロー付きのリバウンド防止付プログラムが221,760円（いずれも税込）です。月額制の格安ジムと比較すると総額は高めです。",
  },
];

const pricingPlans = [
  { name: "太ももダイエットプログラム", duration: "75分・2ヶ月コース（18回）", price: "179,685円", note: "入会金0円。分割払いは月々4,991円〜" },
  { name: "リバウンド防止付プログラム", duration: "75分・2ヶ月コース（16回）＋アフターフォロー6ヶ月（全22回）", price: "221,760円", note: "入会金22,000円（通常40,700円）。分割払いは月々8,125円〜" },
  { name: "トライアルプラン", duration: "75分×4回", price: "月額44,000円", note: "入会金38,500円（カウンセリング当日の入会で0円）。トリプルキャンペーンの適用不可" },
];

const reviewSummary = "ビーコンセプトの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";

const faqItems = [
  { q: "ビーコンセプトの入会金はいくらですか？", a: "公式の料金ページでは、入会金はプランにより異なり、太ももダイエットプログラムは0円、リバウンド防止付プログラムは22,000円（通常40,700円）、トライアルプランは38,500円（カウンセリング当日の入会で0円）と案内されています（いずれも税込・2026年11月27日確認）。" },
  { q: "どのくらいで効果を実感できますか？", a: "効果の出方には個人差があります。目標と期間は無料カウンセリングでご相談ください。" },
  { q: "食事制限は厳しい内容ですか？", a: "過度な食事制限は行いません。無理なく続けられる食事指導を心がけており、3食しっかり食べながらのボディメイクを推奨しています。" },
  { q: "産後ダイエットにも対応していますか？", a: "はい、産後の骨盤ケアを含むプログラムにも対応しています。医師の許可があれば産後2ヶ月頃から開始できます。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリングが用意されています。実際のトレーニング体験も可能な場合があるため、公式サイトからお問い合わせください。" },
  { q: "分割払いはできますか？", a: "はい、分割払いに対応しています。公式の料金ページでは、太ももダイエットプログラムが月々4,991円（税込）〜、リバウンド防止付プログラムが月々8,125円（税込）〜と案内されており、支払い回数は相談できます（2026年11月27日確認）。" },
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ビーコンセプトの口コミ・評判｜料金・メリット・デメリットの解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/b-concept.jpg" alt="ビーコンセプトの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">ビーコンセプト 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月27日</p>
        <GymCta slug="b-concept" name="ビーコンセプト" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">ビーコンセプトの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">ビーコンセプトの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">ビーコンセプトのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">ビーコンセプトの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">ビーコンセプトの口コミについて</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">ビーコンセプトのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">ビーコンセプトが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="ビーコンセプト" />

        <p className="text-gray-700 leading-relaxed mb-10">
          ビーコンセプト（B-CONCEPT）は下半身・脚痩せに特化した<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>パーソナルジムです。骨盤矯正やストレッチを取り入れた独自メソッドで、太もも・ヒップのサイズダウンを目指します。本記事では、ビーコンセプトの料金体系、メリット・デメリットを詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ビーコンセプトのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 金額はすべて税込です。ウェア・タオル・シューズ・ソックス・プロテイン・水素水などは無料と案内されています。出典: <a href="https://b-concept.tokyo/course/" target="_blank" rel="noopener noreferrer" className="underline">ビーコンセプト 公式サイト コース・料金</a>（2026年11月27日確認）。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
        </section>
      <GymCta slug="b-concept" name="ビーコンセプト" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ビーコンセプトのよくある質問</h2>
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
          <h2 id="s8" className="text-xl font-bold mb-3">ビーコンセプトが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、脚の悩みをご相談ください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        <BrandStoreLinks brand="b-concept" brandName="ビーコンセプト" />

        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
