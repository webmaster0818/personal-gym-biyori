import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "Dr.トレーニングの口コミ・評判｜料金・メリット・デメリットを解説",
  description:
    "Dr.トレーニングの口コミ・評判を解説します。医学的根拠に基づくトレーニングの料金体系、メリット・デメリット、よくある質問をまとめています。",
};

const basicInfo = [
  { label: "ジム名", value: "Dr.トレーニング" },
  { label: "タイプ", value: "医学的根拠に基づくパーソナルジム" },
  { label: "料金帯", value: "関東のSTANDARD店舗：月4回（45分）29,700円〜・16回チケット（45分）114,000円〜（税込・2026年11月27日確認）" },
  { label: "エリア", value: "東京都内・神奈川・大阪・兵庫・福岡（青山・麻布十番・六本木・広尾・銀座・銀座ANNEX・表参道はPREMIUM店舗）" },
  { label: "特徴", value: "医学的アプローチ / 定額制とチケット制 / 管理栄養士在籍 / 地域・店舗区分別の料金体系" },
];

const strengths = [
  {
    title: "医学的根拠に基づいたトレーニング",
    desc: "医師監修のプログラムを採用し、解剖学・運動生理学に基づいた科学的なトレーニングを提供しています。ケガのリスクを最小限に抑えながら、効率的な身体づくりが可能です。",
  },
  {
    title: "定額制とチケット制から選べる料金体系",
    desc: "公式の料金ページでは、毎月定額で通うライフメイクプランと、回数分を購入するワークアウトプラン（チケット制）が案内されています。地域（関東・関西・福岡）とPREMIUM店舗で料金体系が異なります（2026年11月27日確認）。",
  },
  {
    title: "管理栄養士による食事サポート",
    desc: "トレーナーだけでなく管理栄養士が在籍しており、栄養面からもサポートしています。身体の内側からのボディメイクに取り組めます。",
  },
];

const merits = [
  {
    title: "月4回の定額制から始められる",
    desc: "関東のSTANDARD店舗では、ライフメイクプランが月4回（45分）29,700円（税込）から案内されています。福岡の店舗ではスポットプラン（都度払い）、PREMIUM店舗では1回ごとの料金も掲載されています（2026年11月27日確認）。",
  },
  {
    title: "科学的なアプローチで効果を実感しやすい",
    desc: "感覚的な指導ではなく、医学的な根拠に基づいたメニュー作成のため、根拠を確認しながら取り組めます。",
  },
  {
    title: "駅近で通いやすい立地",
    desc: "都内を中心に駅から徒歩5分以内の立地に店舗を展開しています。仕事帰りや休日にも通いやすい環境が整っています。",
  },
];

const demerits = [
  {
    title: "地域・店舗によって料金が異なる",
    desc: "同じプランでも関東・関西・福岡、またPREMIUM店舗で金額が異なります。関西の店舗は月会費21,980円に1回ごとの料金を加える方式で、PREMIUM店舗は60分12,800円（税込）などの料金です。通う店舗の料金を公式サイトでご確認ください。",
  },
  {
    title: "東京以外の店舗が少ない",
    desc: "都内中心の展開のため、地方在住の方にはアクセスが難しい場合があります。",
  },
  {
    title: "人気店舗は予約が取りにくい",
    desc: "駅近の人気店舗では予約が集中しやすく、希望の時間帯に予約が取れないことがあります。",
  },
];

const pricingPlans = [
  { name: "【関東】ライフメイク 月4回", duration: "45分／60分", price: "29,700円／39,600円", note: "定額制・STANDARD店舗" },
  { name: "【関東】ライフメイク 月8回", duration: "45分／60分", price: "57,600円／76,800円", note: "定額制・STANDARD店舗" },
  { name: "【関東】ワークアウト 16回", duration: "45分／60分", price: "114,000円／152,000円", note: "チケット制" },
  { name: "【関東】ワークアウト 24回", duration: "45分／60分", price: "165,600円／220,800円", note: "チケット制" },
  { name: "【関東】ワークアウト 32回", duration: "45分／60分", price: "216,000円／288,000円", note: "チケット制" },
  { name: "【関西】ライフメイク", duration: "45分／60分／90分", price: "月会費21,980円＋1回3,500円／4,600円／6,800円", note: "利用は月8回まで" },
  { name: "【関西】ワークアウト 16回／24回／32回", duration: "60分", price: "148,800円／213,600円／275,200円", note: "チケット制" },
  { name: "【福岡】スポットプラン", duration: "45分／60分／90分", price: "7,700円／9,900円／14,300円", note: "都度払い" },
  { name: "【福岡】ライフメイク 月4回／月8回", duration: "45分", price: "29,700円〜／56,800円〜", note: "定額制" },
  { name: "【福岡】ワークアウト 16回／24回／32回", duration: "45分", price: "113,600円〜／163,200円〜／211,200円〜", note: "チケット制" },
  { name: "【PREMIUM】1回ごと", duration: "45分／60分／90分", price: "9,600円／12,800円／19,200円", note: "麻布十番・銀座・六本木の店舗ページ" },
  { name: "【PREMIUM】チケット 16回／24回／32回", duration: "60分", price: "198,400円／288,000円／371,200円", note: "麻布十番・銀座・六本木・表参道の店舗ページ" },
  { name: "入会金・体験トレーニング", duration: "—", price: "通常35,600円・7,100円", note: "STANDARD店舗はキャンペーンで0円。PREMIUM店舗は店舗により異なります" },
];

const reviewSummary = "Dr.トレーニングの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";

const faqItems = [
  { q: "Dr.トレーニングの入会金はいくらですか？", a: "公式の料金ページでは、入会金は35,600円（税込）で、STANDARD店舗はキャンペーンにより0円と表示されています。PREMIUM店舗は店舗により異なり、六本木店の店舗ページでは35,600円、麻布十番店・銀座店・表参道店の店舗ページでは0円と表示されています（2026年11月27日確認）。" },
  { q: "定額制とチケット制はどちらがお得ですか？", a: "関東のSTANDARD店舗（60分）の場合、1回あたりは定額制の月4回で9,900円、月8回で9,600円、チケット制の16回で9,500円、32回で9,000円です（税込・2026年11月27日に公式の料金ページで確認）。通う頻度と期間に合わせてお選びください。都度払いのスポットプランは福岡の店舗、1回ごとの料金はPREMIUM店舗で案内されています。" },
  { q: "トレーナーの資格を教えてください。", a: "公式サイトには「アメリカ国家資格の準医療資格（ATC）」を持つトレーナーが在籍していること、採用率が3%以下であること、毎月10時間以上の研修を行っていることが記載されています（2026年10月8日に公式サイトで確認）。個々のトレーナーの保有資格は公式サイトに一覧がないため、気になる場合は無料カウンセリングで直接ご確認ください。" },
  { q: "食事指導は受けられますか？", a: "はい、管理栄養士による食事指導が受けられます。プランによっては追加料金が必要な場合があります。" },
  { q: "無料体験はありますか？", a: "体験トレーニング（トレーニング60分・所要約80分）は通常7,100円（税込）で、公式の料金ページではキャンペーンにより0円と表示されています。キャンペーンの対象はDr.トレーニングを初めて利用する方です（2026年11月27日確認）。" },
  { q: "ウェアやタオルのレンタルはありますか？", a: "公式の料金ページでは、ウェア上下のレンタルが500円、タオルが大300円・小200円（いずれも税込）と案内されています。ウォーターサーバー（水素水）は無料です（2026年11月27日確認）。" },
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
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];

export default function DrTrainingReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Dr.トレーニング" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Dr.トレーニングの口コミ・評判｜料金・メリット・デメリットを解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/dr-training.jpg" alt="Dr.トレーニングの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Dr.トレーニング 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月27日</p>
        <GymCta slug="dr-training" name="Dr.トレーニング" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Dr.トレーニングの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Dr.トレーニングの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Dr.トレーニングのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Dr.トレーニングの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Dr.トレーニングの口コミについて</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Dr.トレーニングのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Dr.トレーニングが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Dr.トレーニング" />

        <p className="text-gray-700 leading-relaxed mb-10">
          Dr.トレーニングは医学的根拠に基づいたトレーニングを提供するパーソナルジムです。地域と店舗区分ごとに定額制・チケット制の料金が設定されており、管理栄養士による食事サポートも特徴です。本記事では、Dr.トレーニングの料金体系、メリット・デメリットを詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Dr.トレーニングのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 金額はすべて税込です。関東・関西・福岡はSTANDARD店舗（PREMIUM以外）の料金です。指名料は1,100円〜5,500円です。出典: <a href="https://drtraining.jp/price/" target="_blank" rel="noopener noreferrer" className="underline">Dr.トレーニング 公式サイト 料金</a>・PREMIUM各店の店舗ページ（2026年11月27日確認）。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
        </section>
      <GymCta slug="dr-training" name="Dr.トレーニング" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Dr.トレーニングのよくある質問</h2>
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
          <h2 id="s8" className="text-xl font-bold mb-3">Dr.トレーニングが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">体験トレーニングにて、医学的アプローチにもとづく指導内容をご確認いただけます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        <BrandStoreLinks brand="dr-training" brandName="Dr.トレーニング" />

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
