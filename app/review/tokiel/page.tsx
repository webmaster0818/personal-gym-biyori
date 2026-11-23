import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "TOKIELの口コミ・評判｜料金・メリット・デメリットの解説",
  description:
    "TOKIEL（トキエル）パーソナルジムの口コミ・評判をご紹介します。女性専用店舗の有無、トレーナー、料金体系、メリット・デメリットについて解説します。",
};

const basicInfo = [
  { label: "ジム名", value: "TOKIEL（トキエル）" },
  { label: "タイプ", value: "パーソナルトレーニングジム（公式の店舗一覧で「女性専用」と表示されている店舗は本所吾妻橋店・綱島店・元住吉店・岐阜店・2026年11月23日確認）" },
  { label: "料金帯", value: "月額29,920円〜" },
  { label: "エリア", value: "東京都・神奈川県を中心に、青森・埼玉・千葉・岐阜・静岡・愛知・三重・京都・岡山（公式の店舗一覧・2026年11月23日確認）" },
  { label: "特徴", value: "女性専用店舗あり / 男女のトレーナーが在籍 / ボディメイク / ウェア・シューズのレンタル無料" },
];

const strengths = [
  {
    title: "女性専用の店舗がある",
    desc: "公式の店舗一覧では、本所吾妻橋店・綱島店・元住吉店・岐阜店の4店舗が「女性専用」と表示されています。公式のよくある質問では、女性・男性どちらも利用でき、店舗により異なると案内されています（2026年11月23日確認）。女性専用の環境を希望する場合は、店舗を選ぶ際にご確認ください。",
  },
  {
    title: "美容とフィットネスを融合したアプローチ",
    desc: "単なるダイエットではなく、美しいボディラインや美肌、アンチエイジングなど美容面も意識したプログラムを提供しています。トレーニング後のストレッチやコンディショニングも充実しています。",
  },
  {
    title: "トレーナーの資格・経歴を公開",
    desc: "公式サイトのトレーナー紹介には、店舗ごとに男女のトレーナーが掲載されており、理学療法士、NSCA-CPT、マタニティピラティス・産後ダイエットインストラクターなどの資格や経歴が紹介されています（2026年11月23日確認）。",
  },
];

const merits = [
  {
    title: "目的に合わせてメニューを相談できる",
    desc: "公式サイトのコンセプトページでは、お腹周りの引き締めやダイエット、筋力向上、産後太りの改善、運動不足の解消など、幅広い要望に対応すると案内されています（2026年11月23日確認）。",
  },
  {
    title: "手ぶらで通える",
    desc: "公式サイトでは、ウェア・ドリンク・シューズのレンタルが無料と案内されています。シャワーはありませんが、完全個室のドレッサーに汗拭きシートなどが用意されています（いずれも公式サイト・2026年11月23日確認）。",
  },
  {
    title: "女性専用の店舗を選べる",
    desc: "男性の目が気になる方は、公式の店舗一覧で「女性専用」と表示されている店舗（本所吾妻橋店・綱島店・元住吉店・岐阜店）を選べます（2026年11月23日確認）。",
  },
];

const demerits = [
  {
    title: "女性専用の店舗は一部に限られる",
    desc: "公式の店舗一覧で「女性専用」と表示されている店舗は4店舗です（2026年11月23日確認）。そのほかの店舗の利用条件は、各店舗にお問い合わせください。",
  },
  {
    title: "地域によっては店舗がない",
    desc: "公式の店舗一覧は東京都・神奈川県の店舗が中心です（2026年11月23日確認）。通える範囲に店舗があるか、事前にご確認ください。",
  },
  {
    title: "高強度のウェイトトレーニングには向かない場合がある",
    desc: "美容寄りのアプローチのため、本格的な筋肥大や高強度のウェイトトレーニングを求める方には物足りない可能性があります。",
  },
];

const pricingPlans = [
  { name: "ライトプラン", duration: "50分/回・月4回", price: "月額28,000円〜", note: "週1回ペース" },
  { name: "スタンダードプラン", duration: "50分/回・月8回", price: "月額50,000円〜", note: "週2回ペース・人気" },
  { name: "プレミアムプラン", duration: "50分/回・月12回", price: "月額70,000円〜", note: "しっかり結果を出したい方" },
];

const reviewSummary = "TOKIELの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";

const faqItems = [
  { q: "TOKIELは女性専用ですか？", a: "公式のよくある質問では、女性・男性どちらも利用でき、店舗により異なると案内されています。公式の店舗一覧で「女性専用」と表示されている店舗は本所吾妻橋店・綱島店・元住吉店・岐阜店です。また、公式のトレーナー紹介には女性・男性の両方のトレーナーが掲載されています（いずれも2026年11月23日確認）。" },
  { q: "産後でも通えますか？", a: "はい、産後のボディケアに対応したプログラムがあります。産後2ヶ月以降から利用可能な場合が多いものの、医師の許可を得てからの利用をおすすめします。" },
  { q: "生理中でもトレーニングできますか？", a: "はい、体調に合わせてトレーニング内容を調整します。無理をせず、トレーナーにご相談ください。" },
  { q: "ウェアのレンタルはありますか？", a: "公式サイトでは、ウェア・ドリンク・シューズのレンタルが無料と案内されています（2026年11月23日確認）。キャンペーン内容は店舗により異なります。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会方法を教えてください。", a: "公式のよくある質問では、退会方法はメニューにより異なるため問い合わせるよう案内されています（2026年11月23日確認）。契約時にご確認ください。" },
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">TOKIELの口コミ・評判｜料金・メリット・デメリットの解説</h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/tokiel.jpg" alt="TOKIELの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">TOKIEL 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <GymCta slug="tokiel" name="TOKIEL" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">TOKIELの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">TOKIELの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">TOKIELのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">TOKIELの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">TOKIELの口コミについて</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">TOKIELのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">TOKIELが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="TOKIEL" />

        <p className="text-gray-700 leading-relaxed mb-10">
          TOKIEL（トキエル）は東京都・神奈川県を中心に店舗を展開するパーソナルトレーニングジムで、一部の店舗は<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>です。公式サイトでは、トレーナーの資格や経歴が店舗ごとに紹介されています。本記事では、TOKIELの料金体系、メリット・デメリットを詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
          <p className="text-xs text-gray-500 mt-3">トレーナー・利用対象に関する記載の出典: <a href="https://tokiel.jp/trainer" target="_blank" rel="noopener noreferrer" className="underline">TOKIEL 公式サイト トレーナー</a>・<a href="https://tokiel.jp/faq" target="_blank" rel="noopener noreferrer" className="underline">よくある質問</a>・<a href="https://tokiel.jp/" target="_blank" rel="noopener noreferrer" className="underline">公式トップページ（店舗一覧）</a>（2026年11月23日確認）</p>
        </section>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">TOKIELのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの料金</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン名</th><th className="px-4 py-3 text-left font-medium">時間</th><th className="px-4 py-3 text-left font-medium">料金</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
        </section>
      <GymCta slug="tokiel" name="TOKIEL" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">TOKIELのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">TOKIELが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ご自身に合ったプランをご相談ください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <BrandStoreLinks brand="tokiel" brandName="TOKIEL" />

        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
