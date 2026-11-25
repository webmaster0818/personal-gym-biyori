import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "UNDEUX SUPERBODYの口コミ・評判｜料金・メリット・デメリットの解説",
  description:
    "UNDEUX SUPERBODY（アンドゥスーパーボディ）の口コミ・評判をご紹介します。女性専用・ボディメイク・食事管理付きの料金体系、メリット・デメリットについて解説します。",
};

const basicInfo = [
  { label: "ジム名", value: "UNDEUX SUPERBODY（アンドゥスーパーボディ）" },
  { label: "タイプ", value: "女性専用パーソナルジム" },
  { label: "料金帯", value: "スタンダードプラン 月額18,200円〜（店舗のグレード・回数・時間帯で異なる）／コミットプラン 月額79,200円（税込・公式料金ページ・2026年11月25日確認）" },
  { label: "エリア", value: "全国40店舗以上" },
  { label: "特徴", value: "女性専用 / ボディメイク特化 / 食事管理付き / 宅配食サービス連携" },
];

const strengths = [
  {
    title: "女性のボディメイクに特化",
    desc: "公式サイトでは、女性のダイエットとボディメイクに特化したスペシャリスト集団として、パーソナルトレーニングと食事改善を提供すると案内されています（2026年11月23日確認）。",
  },
  {
    title: "食事管理サービスが充実",
    desc: "専属の管理栄養士による食事指導に加え、宅配食サービスとも連携しています。忙しい女性でも手軽に栄養バランスの取れた食事管理ができます。",
  },
  {
    title: "おしゃれで清潔感のある空間",
    desc: "洗練されたインテリアと清潔感のある店内が特徴です。アメニティも充実しており、仕事帰りにそのまま通えます。",
  },
];

const merits = [
  {
    title: "女性専用で安心して通える",
    desc: "利用者は女性に限られるため、男性の目を気にせずトレーニングに取り組めます。",
  },
  {
    title: "宅配食で食事管理の手間を削減",
    desc: "提携の宅配食サービスを利用すれば、自炊の手間をかけずに適切な食事管理ができます。",
  },
  {
    title: "プランを月ごとに変更できる",
    desc: "公式の料金ページでは、月ごとにプランを変えられると案内されています。コミットプランの終了後は、月2回から選べるスタンダードプランへ移行できます（2026年11月25日確認）。",
  },
];

const demerits = [
  {
    title: "店舗により月額料金が異なる",
    desc: "公式の料金ページでは、スタンダードプランの月額料金が店舗のグレード（A〜D）ごとに異なります。たとえば月2回（ALL 2）は、グレードAの店舗で21,300円、グレードDの店舗で18,200円です（税込・2026年11月25日確認）。通う店舗の料金を公式サイトでご確認ください。",
  },
  {
    title: "男性は利用できない",
    desc: "女性専用のため、男性は利用できません。カップルや夫婦で一緒に通いたい場合は別のジムを検討する必要があります。",
  },
  {
    title: "店舗が都市部に集中",
    desc: "東京・大阪・神戸など都市部が中心で、地方での展開は少ない状況です。",
  },
];

const pricingPlans = [
  { name: "スタンダード ALL 2（月2回）", duration: "50分/回", price: "月額18,200円〜21,300円", note: "8時〜22時（平日・土日祝日共通）" },
  { name: "スタンダード DAY 4（月4回）", duration: "50分/回", price: "月額25,900円〜30,300円", note: "平日9時〜18時" },
  { name: "スタンダード ALL 4（月4回）", duration: "50分/回", price: "月額29,700円〜34,800円", note: "8時〜22時（平日・土日祝日共通）" },
  { name: "スタンダード DAY 8（月8回）", duration: "50分/回", price: "月額51,800円〜60,600円", note: "平日9時〜18時" },
  { name: "スタンダード ALL 8（月8回）", duration: "50分/回", price: "月額59,400円〜69,600円", note: "8時〜22時（平日・土日祝日共通）" },
  { name: "コミットプラン（月6回）", duration: "50分/回", price: "月額79,200円", note: "全国一律。栄養士による毎日の食事管理・宅配食30食が初月のみ無料" },
  { name: "体験トレーニング", duration: "−", price: "0円", note: "" },
];

const reviewSummary = "UNDEUX SUPERBODYの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";

const faqItems = [
  { q: "UNDEUX SUPERBODYの入会金はいくらですか？", a: "公式の料金ページ・よくある質問には、入会金の記載がありません（2026年11月25日確認）。入会時の費用はカウンセリングの際にご確認ください。" },
  { q: "食事指導は厳しい内容ですか？", a: "極端な食事制限ではなく、栄養バランスを重視した実践的な指導です。宅配食も活用できます。" },
  { q: "トレーナーは女性ですか？", a: "公式サイトでは、トレーナーの性別の構成は公表されていません（2026年11月23日確認）。公式のよくある質問では、トレーナーは専任制ではなく、複数名のトレーナーで編成するチームでサポートすると案内されています。女性トレーナーを希望する場合は、カウンセリングの予約時に店舗へご確認ください。" },
  { q: "子連れでも通えますか？", a: "公式のよくある質問では、お子様の同伴が可能と案内されています。トレーニングブースは完全個室ではありませんが、お一人ずつのスペースが確保されているとのことです（2026年11月25日確認）。" },
  { q: "無料体験はありますか？", a: "公式の料金ページでは、体験トレーニングは0円と案内されています。公式のよくある質問では、体験や店舗見学を無料で随時実施していると案内されています（2026年11月25日確認）。" },
  { q: "コース途中での退会は可能ですか？", a: "コース途中での退会は違約金が発生する場合があります。詳細は入会時にご確認ください。" },
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
  { name: "OUTLINE", href: "/review/outline/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "PEACH GYM", href: "/review/peach-gym/" },
  { name: "Bellpha", href: "/review/bellpha/" },
];

export default function UndeuxReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "UNDEUX SUPERBODY" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          UNDEUX SUPERBODYの口コミ・評判｜料金・メリット・デメリットの解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/undeux.jpg" alt="UNDEUX SUPERBODYの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">UNDEUX SUPERBODY 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月25日</p>
        <GymCta slug="undeux" name="UNDEUX SUPERBODY" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">UNDEUX SUPERBODYの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">UNDEUX SUPERBODYの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">UNDEUX SUPERBODYのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">UNDEUX SUPERBODYの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">UNDEUX SUPERBODYの口コミについて</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">UNDEUX SUPERBODYのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">UNDEUX SUPERBODYが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="UNDEUX SUPERBODY" />

        <p className="text-gray-700 leading-relaxed mb-10">
          UNDEUX SUPERBODY（アンドゥスーパーボディ）は<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>のパーソナルジムです。ボディメイクに特化したトレーニングと充実の食事管理サービスで、理想の体型づくりを総合的にサポートしています。本記事では、UNDEUX SUPERBODYの料金体系、メリット・デメリットを詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">トレーナーに関する記載の出典: <a href="https://www.diet-undeux.jp/faq/" target="_blank" rel="noopener noreferrer" className="underline">UNDEUX SUPERBODY 公式サイト よくある質問</a>・<a href="https://www.diet-undeux.jp/" target="_blank" rel="noopener noreferrer" className="underline">公式トップページ</a>（2026年11月23日確認）</p>
        </section>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 金額は税込です（公式料金ページの「グレードB（月2回プラン 税込20,500円）」の表記による）。スタンダードプランの金額は、店舗のグレードA〜Dの最安〜最高です（公式に掲載されている店舗のうち、グレードAは銀座・新宿・渋谷・横浜など、グレードDは本厚木・仙台・広島）。継続割引として2ヶ月目から最大10%オフと案内されています。1回50分は公式のよくある質問によります。出典: <a href="https://www.diet-undeux.jp/price/" target="_blank" rel="noopener noreferrer" className="underline">UNDEUX SUPERBODY 公式サイト 料金</a>・<a href="https://www.diet-undeux.jp/faq/" target="_blank" rel="noopener noreferrer" className="underline">よくある質問</a>（2026年11月25日確認）。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
        </section>
      <GymCta slug="undeux" name="UNDEUX SUPERBODY" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">UNDEUX SUPERBODYのよくある質問</h2>
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
          <h2 id="s8" className="text-xl font-bold mb-3">UNDEUX SUPERBODYが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ご自身に合ったプランをご相談ください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        <BrandStoreLinks brand="undeux" brandName="UNDEUX SUPERBODY" />

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
