import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "チキンジムの口コミ・評判｜料金・メリット・デメリットを解説",
  description:
    "チキンジムの口コミ・評判を解説します。公式サイトに掲載されている料金（月2回18,900円から・入会金35,000円）と3店舗（池袋・町田・岡山）を2026年11月3日に確認し、メリット・デメリットとGoogleマップの口コミ傾向をまとめています。",
};

/* 公式サイト https://chicken-gym.jp/ （1ページ構成。/price/ などの下層URLもトップに転送）を 2026-11-03 に確認した値 */
const CHECKED = "2026年11月3日";

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社クリア（公式サイトの会社概要より）" },
  { label: "店舗数", value: "公式サイトの店舗一覧に掲載されているのは3店舗（池袋店・町田店・岡山店）" },
  { label: "営業時間", value: "公式サイトに記載がありません（各店舗にお問い合わせください）" },
  { label: "特徴", value: "月額制プラン / 1回50分のパーソナルトレーニング / 30分のストレッチ / 管理栄養士による食事指導 / ウェア・シューズ・靴下のレンタル" },
  { label: "公式URL", value: "https://chicken-gym.jp/", isLink: true },
];

/* ---------- 3つの強み（公式サイトの「チキンジムの3つの強み」より） ---------- */
const strengths = [
  {
    title: "続けやすさを重視したトレーニング",
    desc: "公式サイトでは「続けられるトレーニング」を軸にしていると説明しています。ハードなトレーニングや厳しい食事管理ではなく、回を重ねるごとに効果を実感できる方法でモチベーションの維持を図る方針です。",
  },
  {
    title: "30分のストレッチ",
    desc: "公式サイトでは、30分かけてストレッチを行う点を強みとして挙げています。可動域の向上に伴う筋発達や代謝の向上により、運動効果を高めることを目的としています。",
  },
  {
    title: "管理栄養士による食事指導",
    desc: "食生活アドバイザー・フードスペシャリスト・健康運動指導士の資格を持つ管理栄養士が、無理なく続けられる食生活の改善を支援すると公式サイトに記載されています。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "月額制で料金が分かりやすい",
    desc: "公式サイトの料金は月額制プランで、月2回18,900円・月4回29,700円・月6回39,600円です。1回あたりに換算すると9,450円・7,425円・6,600円となり、回数が多いほど1回あたりの料金は下がります。入会金35,000円が別途かかります。",
  },
  {
    title: "手ぶらで通えるレンタルサービス",
    desc: "公式サイトでは、プランに含まれるものとしてウェア・シューズ・靴下のレンタル、水素水の飲み放題、体組成測定、食事サポート、フリートレーニング（施設の使い放題）を挙げています。荷物の準備が不要なため、仕事帰りなどにも立ち寄りやすい環境です。",
  },
  {
    title: "初心者に配慮したトレーニング指導",
    desc: "公式サイトでは「トレーニング初心者に最適なジム」と説明しています。マシンの使い方やフォームから指導を受けられるため、運動経験が少ない方でも始めやすいジムです。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "他サイトの「月々6,800円〜」は公式の月額プランと異なる",
    desc: "他サイトや過去の広告で見られる「月々3,400円〜」「月々6,800円〜」は分割払い時の月額で、公式サイトに掲載されている月額制プラン（月2回18,900円から）とは異なります。料金は入会金35,000円を含めて、無料カウンセリングで確認されることをおすすめします。",
  },
  {
    title: "体験時の勧誘に関する指摘",
    desc: "無料カウンセリング後の入会勧誘について、「しつこかった」「その場で決めるよう促された」という口コミが一部見られます。丁寧だったという声も多くありますが、即決を避けたい場合は「一度持ち帰って検討します」とはっきり伝えることをおすすめします。",
  },
  {
    title: "混雑時の施設の狭さ",
    desc: "チキンジムの店舗は駅近でコンパクトな設計が多いため、人気の時間帯（平日夜・土日午前）は予約が取りにくかったり、トレーニングスペースが窮屈に感じることがあります。余裕をもってスケジュールを組むか、比較的空いている時間帯を選ぶと快適に利用できます。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "月額制 月2回", duration: "50分/回", price: "18,900円", note: "1回あたり9,450円" },
  { name: "月額制 月4回", duration: "50分/回", price: "29,700円", note: "1回あたり7,425円" },
  { name: "月額制 月6回", duration: "50分/回", price: "39,600円", note: "1回あたり6,600円" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの質に関する口コミは全体的に好意的な傾向があります。特に「初心者への対応が丁寧」「フォームを細かく修正してくれる」という声が目立ちます。一方で、トレーナーの指名ができない・担当が毎回変わるという点に不満を感じる利用者もいます。",
  },
  {
    title: "料金・費用対効果",
    summary: "料金面ではパーソナルジムとしてのコストパフォーマンスの高さが評価されています。ただし、広告の月額表示と実際の総額のギャップに対する指摘も少なくありません。",
  },
  {
    title: "設備・清潔感",
    summary: "店舗の清潔さは高く評価されており、特にシャワー室やトレーニングスペースの手入れが行き届いているとの声が多く見られます。ただし、スペースの狭さに言及する口コミもあります。",
  },
  {
    title: "ダイエット・ボディメイク効果",
    summary: "短期間での体重減少やボディラインの変化を実感している利用者が多く、ダイエット目的での満足度は高い傾向にあります。ただし、食事管理を自分でもしっかり行うことが成果の鍵になります。",
  },
  {
    title: "食事指導",
    summary: "公式サイトでは、すべての月額制プランに食事サポートが含まれると記載されています。口コミでは、基本的なアドバイスを受けられるとの評価が多い傾向にあります。",
  },
  {
    title: "予約の取りやすさ",
    summary: "人気の時間帯（平日夜・土日午前）は予約が埋まりやすいという声が見られます。スケジュールを柔軟に調整できる場合は、予約を取りやすい傾向です。",
  },
  {
    title: "勧誘・営業",
    summary: "無料カウンセリング時の勧誘については、体験者の間で評価が分かれています。「丁寧で押し売り感がなかった」という声がある一方で、「その場での契約を強く勧められた」という報告も見られます。",
  },
  {
    title: "立地・アクセス",
    summary: "アクセスの良さを評価する口コミが見られます。ただし、公式サイトの店舗一覧に掲載されているのは池袋店・町田店・岡山店の3店舗のため、通える店舗があるか事前にご確認ください。",
  },
  {
    title: "初心者の使いやすさ",
    summary: "チキンジムは「続けられるトレーニング」を重視しており、運動未経験者やジム初心者から特に高い評価を得ています。威圧感のない雰囲気づくりが支持の理由です。",
  },
  {
    title: "継続のしやすさ",
    summary: "手ぶらで通える利便性、柔軟な営業時間、トレーナーの励ましなど、継続を後押しする仕組みが整っている点が評価されています。ただし、モチベーションの維持は本人次第という声もあります。",
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "チキンジムの料金はいくらですか？", a: "公式サイトの月額制プラン（パーソナルトレーニング1回50分）は、月2回18,900円・月4回29,700円・月6回39,600円です（2026年11月3日確認）。最新の料金は公式サイトにてご確認ください。" },
  { q: "チキンジムの入会金はいくらですか？", a: "公式サイトには入会金35,000円と記載されています（2026年11月3日確認）。" },
  { q: "予約はどのように行いますか？", a: "公式サイトでは、電話・LINE・ホームページから無料カウンセリングを予約し、カスタマーセンターからの電話で初回来店日を確定する流れが案内されています。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "公式サイトの料金表では、パーソナルトレーニングは1回50分です。このほか、30分のストレッチを強みとして挙げています。" },
  { q: "食事指導は受けられますか？", a: "はい。公式サイトでは、月額制プランに食事サポートが含まれると記載されており、管理栄養士が食生活の改善を支援するとしています。" },
  { q: "女性でも通いやすい環境ですか？", a: "ウェア・シューズ・靴下のレンタルがプランに含まれるため、手ぶらで通えます。女性の利用者の割合は公式サイトに記載がありません。" },
  { q: "退会・解約の方法を教えてください。", a: "退会・解約の条件は公式サイトに記載がありません。契約前の無料カウンセリングでご確認ください。" },
  { q: "無料体験やカウンセリングはありますか？", a: "はい。公式サイトでは、初回来店時にカウンセリングとトレーニングの体験を行い、最適なプランを提案する流れが案内されています。" },
  { q: "チキンジムはどこに店舗がありますか？", a: "公式サイトの店舗一覧に掲載されているのは、池袋店（東京都豊島区）・町田店（東京都町田市）・岡山店（岡山県岡山市）の3店舗です（2026年11月3日確認）。" },
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

/* ---------- 店舗一覧 ---------- */
type StoreItem = { name: string; address: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "東京", stores: [
    { name: "池袋店", address: "東京都豊島区東池袋1-21-13 aune池袋 11F", href: "/review/chicken-gym/ikebukuro/" },
    { name: "町田店", address: "東京都町田市原町田6丁目21-26 5F" },
  ] },
  { region: "岡山", stores: [{ name: "岡山店", address: "岡山県岡山市北区錦町6-17 アウルスタイル錦町2 2F" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "チキンジムの基本情報" },
  { id: "overview", label: "チキンジムの概要" },
  { id: "merit-demerit", label: "チキンジムのメリット・デメリット" },
  { id: "pricing", label: "チキンジムの料金" },
  { id: "reviews", label: "チキンジムの口コミ分析" },
  { id: "faq", label: "チキンジムのよくある質問" },
  { id: "stores", label: "チキンジムの店舗一覧" },
];

export default function ChickenGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "チキンジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          チキンジムの口コミ・評判｜料金・メリット・デメリットを解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/chicken-gym.jpg" alt="チキンジムの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">チキンジム 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月3日（料金・店舗・会社概要を公式サイトで確認）</p>
        <GymCta slug="chicken-gym" name="チキンジム" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">チキンジムの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">チキンジムの概要</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">チキンジムのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">チキンジムの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">チキンジムの口コミ分析</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">チキンジムのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">チキンジムの店舗一覧</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">チキンジムが気になった方へ</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="チキンジム" />

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-chicken-gym.jpg" alt="チキンジム 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          チキンジムは「続けられるトレーニング」を軸にしたパーソナルトレーニングジムです。公式サイトの料金は月額制で、月2回<span className="font-bold bg-yellow-100 px-0.5">18,900円</span>から（1回50分・入会金35,000円）です。公式サイトの店舗一覧に掲載されているのは池袋店・町田店・岡山店の3店舗です（いずれも{CHECKED}確認）。本記事では、チキンジムの料金体系、メリット・デメリット、口コミの傾向をご説明します。
        </p>

        {/* ---------- 目次 ---------- */}
        

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-800">
                      {row.isLink ? (
                        <a href={row.value} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- 概要・3つの強み ---------- */}
        <section id="overview" className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの概要</h2>
          <h3 className="text-lg font-bold mb-4">チキンジムの3つの強み</h3>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">チキンジムのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">チキンジムのメリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>
                  {m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-4 text-red-700">チキンジムのデメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>
                  {d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 料金 ---------- */}
        <section id="pricing" className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            公式サイトに掲載されている月額制プラン（パーソナルトレーニング1回50分）の料金は以下のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">月額</th>
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
          <p className="text-xs text-gray-500 mt-3">
            ※ 入会金35,000円が別途かかります。プランには体組成測定・食事サポート・レンタル品（ウェア・シューズ・靴下）・水素水飲み放題・フリートレーニング（施設使い放題）が含まれます。出典: <a href="https://chicken-gym.jp/" target="_blank" rel="noopener noreferrer" className="underline">チキンジム公式サイト「料金・プラン」</a>（{CHECKED}確認）。料金は変更される場合があるため、ご利用前に公式サイトにて最新情報をご確認ください。
          </p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            チキンジムのGoogleマップ口コミを分析すると、全体的に好意的な評価が多い一方で、料金の表示方法や勧誘に関する指摘も一定数見られます。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下は、Googleマップに投稿された口コミを当サイト編集部が読み、<strong>多く見られる傾向を要約したもの</strong>です。個別の投稿文は掲載していません（投稿を書き換えて掲載しない方針のためです）。実際の投稿は下記リンクからGoogleマップでご確認ください。検証可能な数値は、上の「Googleマップの掲載データ」に掲載しています。</p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/%E3%83%81%E3%82%AD%E3%83%B3%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/チキンジム/</a>
            </p>
          </div>

          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
            </div>
          ))}
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="chicken-gym" name="チキンジム" />

        <section id="faq" className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムのよくある質問</h2>
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

        {/* ---------- 店舗一覧 ---------- */}
        <section id="stores" className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            公式サイトの店舗一覧に掲載されている店舗は、以下の3店舗です（{CHECKED}確認）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-28">都道府県</th>
                  <th className="px-4 py-3 text-left font-medium">店舗名・住所</th>
                </tr>
              </thead>
              <tbody>
                {storesByRegion.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {row.stores.map((s) => (
                        <div key={s.name}>
                          {s.href ? <Link href={s.href} className="text-teal-600 hover:underline">{s.name}</Link> : s.name}
                          <span className="text-xs text-gray-500">（{s.address}）</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 出典: <a href="https://chicken-gym.jp/" target="_blank" rel="noopener noreferrer" className="underline">チキンジム公式サイト「店舗一覧」</a>（{CHECKED}確認）。営業時間は公式サイトに記載がないため、各店舗にお問い合わせください。
          </p>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s9" className="text-xl font-bold mb-3">チキンジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            無料カウンセリングにて、目的に合ったプランをご相談いただけます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ランキングに戻る
          </Link>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <section>
          <h2 id="s10" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
