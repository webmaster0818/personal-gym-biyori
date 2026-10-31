import type { Metadata } from "next";
import GmapStats from "@/components/GmapStats";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "Nexusジム（ネクサス）の口コミ・評判｜東日本・西日本の料金表と入会金を検証",
  description:
    "Nexusジム（NEXUSパーソナルジム）の口コミ・評判を、Googleマップの集計とマイベストの検証結果で整理しました。公式料金表の東日本・西日本の入会金の違い、30分4,500円からのコース別料金、2ヶ月の総額試算、公式店舗一覧68店舗の内訳をまとめています。",
};

/*
 * 2026-10-28 改訂: 料金・店舗・支払い方法は公式サイト（トップに読み込まれる料金表 new_lp/include-parts/price.html・
 * 店舗一覧 shop_hakomono.html・会社概要・特定商取引法に基づく表記）を2026-10-28に確認した値。
 * 旧記載の訂正: 「1回40分が基本」→コースにより30分・60分・90分・120分、「都内中心の少数店舗」→公式店舗一覧68店舗（8都県）、
 * 「月4回・月8回・月12回の各プラン」→ライト・ベーシック・プレミアム・セミパーソナルの4コース、
 * 「食事アドバイスがプランに含まれる」→AI食事指導は月3,000円（一部コースで2ヶ月無料）。
 * 出典のない記述（業界最安級・違約金なし・前月までの退会申告・口コミの観点別要約）は削除した。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://nexus-gym.com/",
  price: "https://nexus-gym.com/new_lp/include-parts/price.html",
  shops: "https://nexus-gym.com/new_lp/include-parts/shop_hakomono.html",
  legal: "https://nexus-gym.com/legal-notice.html",
  company: "https://nexus-gym.com/company.html",
  mybest: "https://my-best.com/products/3818896",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社N-group（横浜市中区）が運営する、完全個室・マンツーマンの月額制パーソナルジムです。コースは1回30分のライト、60分のベーシック、90分のプレミアム、少人数で受けるセミパーソナルの4種類です。" },
  { label: "料金", value: "ライトコース（30分）月4回18,000円、ベーシックコース（60分）月4回34,000円です（税込）。料金表は「東日本」「西日本」に分かれており、月会費は共通で、入会金が異なります。" },
  { label: "入会金", value: "東日本55,000円・西日本33,000円（税込）です。無料体験の当日に入会すると、東日本は15,000円、西日本は10,000円（ライトコースは15,000円）になります。" },
  { label: "契約条件", value: "各コースとも原則2ヶ月の継続が必要です。料金表の支払い方法はクレジットカードのみで、翌月分は前月20日に決済されます。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは68店舗です。東京都37店舗・神奈川県17店舗・大阪府7店舗のほか、愛知県・福岡県・埼玉県・群馬県・栃木県にあります。料金表には「全国50店舗相互利用可能」と記載されています。" },
  { label: "口コミ", value: "当サイトがGoogleマップで確認できた4店舗の口コミは計210件、店舗評価の平均は4.97でした。マイベストの検証（2026年3月更新）では39サービス中26位で、予約・キャンセルのしやすさが5.00、トレーナーの専門性が3.00でした。" },
];

const basicInfo = [
  { label: "ジム名", value: "NEXUSパーソナルジム（Nexusジム）" },
  { label: "運営会社", value: "株式会社N-group（神奈川県横浜市中区山手町）代表取締役 長谷川俊弘" },
  { label: "タイプ", value: "完全個室・マンツーマンの月額制パーソナルジム（セミパーソナルコースあり）" },
  { label: "1回の時間", value: "ライト30分／ベーシック60分／プレミアム90分／セミパーソナル60・90・120分（着替え・シャワーを含む時間）" },
  { label: "料金", value: "マンツーマンは月4回18,000円〜（ライトコース30分・税込）、セミパーソナルは月2回11,000円〜（60分・1人分・税込）" },
  { label: "店舗", value: "公式店舗一覧に68店舗（東京都37・神奈川県17・大阪府7・愛知県2・福岡県2・埼玉県1・群馬県1・栃木県1）" },
  { label: "無料提供", value: "ウェア・水・タオル・バスタオル・プロテイン" },
];

const strengths = [
  {
    title: "30分4,500円から受けられるマンツーマン指導",
    desc: "ライトコースは1回30分・月4回18,000円（1回4,500円）です。公式サイトでは、広告費や家賃などの固定費を抑えてこの価格を実現していると説明しています。",
  },
  {
    title: "月額制で、原則2ヶ月から始められる",
    desc: "短期集中コースを一括で支払う形式ではなく、月ごとの定額制です。各コースとも原則2ヶ月の継続が必要です。",
  },
  {
    title: "完全個室で、ウェアやプロテインが無料",
    desc: "公式サイトによると、トレーニングは完全個室で行い、ウェア・水・タオル・バスタオル・プロテインを無料で提供しています。手ぶらで通えます。",
  },
];

const merits = [
  {
    title: "時間と回数を選べる",
    desc: "30分・60分・90分のコースと、月4回〜12回の回数から選べます。60分のベーシックコースは回数が多いほど1回あたりの料金が下がり、月12回で1回7,900円です。",
  },
  {
    title: "店舗の相互利用ができる",
    desc: "料金表に「全国50店舗相互利用可能」と記載されています。自宅と職場の近くの店舗を使い分けられます。",
  },
  {
    title: "食事指導をAIで受けられる",
    desc: "写真やテキストで入力した食事のカロリー・PFCバランスをAIが管理するAI食事指導があります（月3,000円・税込。一部のコースで2ヶ月無料）。専属トレーナーからの食事のアドバイスもあります。",
  },
];

const demerits = [
  {
    title: "入会金は地域と入会日で大きく変わる",
    desc: "東日本の入会金は通常55,000円で、無料体験の当日に入会すると15,000円です。当日に決めない場合は40,000円の差が生じます。",
  },
  {
    title: "支払い方法がクレジットカードに限られる",
    desc: "料金表の支払い方法はクレジットカードのみです（特定商取引法の表記には銀行振込・現金の記載もあるため、契約時にご確認ください）。",
  },
  {
    title: "退会・休会の規定が公式サイトで確認できない",
    desc: "公式サイトの料金表・特定商取引法の表記・会社概要では、退会・休会の手続き期限を確認できませんでした。契約前に書面での確認をおすすめします。",
  },
];

// 2026-10-28: 公式料金表（東日本・西日本タブ）の掲載値。月会費は東西共通
const pricingPlans = [
  { name: "ライトコース", duration: "30分", price: "月4回18,000円／月6回25,800円／月8回32,800円", note: "1回4,500円〜4,100円" },
  { name: "ベーシックコース", duration: "60分", price: "月4回34,000円／月6回49,800円／月8回64,800円／月12回94,800円", note: "1回8,500円〜7,900円" },
  { name: "プレミアムコース", duration: "90分", price: "月4回48,000円／月6回69,600円／月8回89,600円／月12回129,600円", note: "1回12,000円〜。月12回の1回単価は公式表記7,900円、当サイト計算では10,800円" },
  { name: "セミパーソナルコース", duration: "60分／90分／120分", price: "1人1回5,500円／8,800円／11,000円（月2回〜8回）", note: "表記は1人分の料金" },
  { name: "入会金（東日本）", duration: "—", price: "55,000円", note: "無料体験当日の入会で15,000円" },
  { name: "入会金（西日本）", duration: "—", price: "33,000円", note: "無料体験当日の入会で10,000円（ライトコースは15,000円）" },
  { name: "登録事務手数料", duration: "—", price: "1,000円", note: "キャンペーン中は無料" },
  { name: "AI食事指導", duration: "—", price: "月3,000円", note: "東日本のベーシック・プレミアム・セミパーソナルは2ヶ月無料の表記" },
];

// 当サイト計算: 入会金＋月会費×2ヶ月（原則の最低継続期間）。登録事務手数料（キャンペーン中無料）・AI食事指導は含めない
const costRows = [
  { plan: "ライト30分・月4回（計8回）", eastSame: "51,000円", eastNormal: "91,000円", westSame: "51,000円", westNormal: "69,000円" },
  { plan: "ベーシック60分・月4回（計8回）", eastSame: "83,000円", eastNormal: "123,000円", westSame: "78,000円", westNormal: "101,000円" },
  { plan: "ベーシック60分・月8回（計16回）", eastSame: "144,600円", eastNormal: "184,600円", westSame: "139,600円", westNormal: "162,600円" },
];

const sourceRows = [
  { source: "Googleマップ（当サイト集計）", count: "4店舗・計210件", score: "店舗評価の平均4.97（件数加重4.95）", note: "2026年8月29日〜9月8日取得。福岡平尾店・名古屋今池店が各100件程度で、他の2店舗は5件以下です。公式店舗一覧68店舗のうち、当サイトのデータベースで確認できた4店舗の集計です" },
  { source: "マイベスト（N-group NEXUS 検証レビュー）", count: "—", score: "3.88（39サービス中26位）", note: "2026年3月17日更新。料金の安さ4.13、トレーナーの専門性の高さ3.00、食事指導の充実度4.48、施設や備品の充実度4.90、予約・キャンセルのしやすさ5.00。公式サイトにトレーナーの保有資格の記載がない点を指摘しています" },
  { source: "公式サイトの表記", count: "—", score: "—", note: "トップページの画像に「平均評価4.9」「総口コミ3500件以上」「継続率93.5%」と記載されています。運営会社による表記であり、集計方法は当サイトでは確認できませんでした" },
];

const faqItems = [
  { q: "Nexusジムの入会金はいくらですか？", a: "公式料金表では、東日本55,000円・西日本33,000円（税込）です。無料体験の当日に入会すると、東日本は15,000円、西日本は10,000円（ライトコースは15,000円）になります（2026年10月28日確認）。特定商取引法の表記には「入会金15,000円」と記載されています。" },
  { q: "第三者サイトで入会金が33,000円や55,000円と書かれているのはなぜですか？", a: "公式料金表が東日本（55,000円）と西日本（33,000円）に分かれているためです。どちらの地域区分になるかは料金表に記載がないため、通う予定の店舗でご確認ください。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "ライトコース30分、ベーシックコース60分、プレミアムコース90分です。公式料金表では、トレーニングに着替えやシャワーを含めた時間と説明しています。" },
  { q: "月会費はいくらからですか？", a: "月額がもっとも低いのは、少人数で受けるセミパーソナルコース（60分）の月2回11,000円（1人分・税込・1回5,500円）です。マンツーマンのコースでは、ライトコース（30分）の月4回18,000円（税込・1回4,500円）がもっとも低く、60分のベーシックコースは月4回34,000円です（公式料金表・2026年10月30日確認）。" },
  { q: "最低何ヶ月通う必要がありますか？", a: "各コースとも原則2ヶ月の継続が必要です。退会・休会の手続き期限は公式サイトで確認できなかったため、契約時に書面でご確認ください。" },
  { q: "途中でやめた場合の返金はありますか？", a: "特定商取引法の表記に、60分月4回コース（29,800円）で2回分を消化済みの場合に14,900円を返金する例が記載されています。" },
  { q: "支払い方法を教えてください。", a: "公式料金表では、クレジットカードのみと記載されています。翌月以降は前月20日に決済されます。特定商取引法の表記には銀行振込・現金払い（店舗のみ）も記載されているため、契約時にご確認ください。" },
  { q: "食事指導は受けられますか？", a: "AI食事指導（月3,000円・税込）があり、写真やテキストで入力した食事のカロリー・PFCバランスをAIが管理します。東日本のベーシック・プレミアム・セミパーソナルコースは2ヶ月無料と記載されています。" },
  { q: "他の店舗も利用できますか？", a: "公式料金表に「全国50店舗相互利用可能」と記載されています。" },
  { q: "持ち物は何が必要ですか？", a: "ウェア・水・タオル・バスタオル・プロテインは無料で提供されるため、手ぶらで通えます。" },
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
  { name: "リアルボディ", href: "/review/real-body/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "FIT24", href: "/review/fit24/" },
];

export default function NexusReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "Nexusジム"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Nexusジム（ネクサス）の口コミ・評判｜東日本・西日本の料金表と入会金を検証",
        "author": {
          "@type": "Organization",
          "name": "パーソナルジムびより編集部",
          "url": "https://personal-gym-biyori.com/about/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-10-28"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Nexusジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Nexusジム（ネクサス）の口コミ・評判｜東日本・西日本の料金表と入会金を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（公式料金表・店舗一覧・特定商取引法の表記を再確認し、口コミの出典と件数を整理）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="Nexusジムとは">
          <h2 className="font-bold text-gray-900 mb-3">Nexusジム（NEXUSパーソナルジム）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式サイト</Src>（<Src href={SRC.price}>料金表</Src>・<Src href={SRC.shops}>店舗一覧</Src>）・<Src href={SRC.legal}>特定商取引法に基づく表記</Src>・<Src href={SRC.company}>会社概要</Src>（いずれも{CHECKED}確認）・<Src href={SRC.mybest}>マイベスト</Src>。Googleマップの数値は当サイトの集計（2026年8月29日〜9月8日取得）です。料金・条件は変更される場合があります。
          </p>
          <p className="text-xs text-gray-500 mt-2">※「Nexus 口コミ」で検索すると、学習塾「個別指導NEXUS」など別事業者の口コミが表示されます。当ページは株式会社N-groupが運営するパーソナルジムについての記事です。</p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/nexus.jpg" alt="Nexusジムの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Nexusジム 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="nexus" name="Nexusジム" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Nexusジムが適している方</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Nexusジムの基本情報</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Nexusジムの3つの強み</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Nexusジムのメリット・デメリット</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Nexusジムが向いている人・向いていない人</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Nexusジムの料金</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">2ヶ月の総額試算（東日本・西日本）</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">Nexusジムの口コミ・評判（出典別の件数）</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">他のジムと比較</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">Nexusジムのよくある質問</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">Nexusジムが気になった方へ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Nexusジム" />
        <BrandFactCheck slug="nexus" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Nexusジム の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Nexusジムは<span className="font-bold bg-yellow-100 px-0.5">1回30分4,500円</span>（税込）から受けられる<span className="font-bold bg-yellow-100 px-0.5">月額制</span>のパーソナルジムで、<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>での<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>を行っています。本記事では、公式料金表で確認した東日本・西日本の料金の違いと、口コミの出典別の件数をご説明します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 id="s2" className="font-bold text-gray-900 mb-3">Nexusジムが適している方</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>費用を抑えて</strong>パーソナル指導を試したい方に向いています（30分コース月4回18,000円）</li>
            <li>・高額なコースの一括払いに不安があり、<strong>月額制で始めたい</strong>方に向いています（原則2ヶ月の継続が必要）</li>
            <li>・東京都・神奈川県・大阪府に店舗が多く、<strong>複数店舗を使い分けたい</strong>方に向いています</li>
            <li>・入会金は無料体験の当日に入会するかどうかで最大40,000円変わるため、<strong>体験前に総額を確認</strong>しておくことをおすすめします</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は目安です。最新情報は公式サイトでご確認ください。比較は<a href="/compare/" className="text-teal-600 underline">おすすめ比較</a>、地方で回数券制の安いジムを探す方は<a href="/review/real-body/" className="text-teal-600 underline">リアルボディの口コミ・料金</a>もご覧ください。</p>
        </div>

        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの基本情報</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの3つの強み</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Nexusジムのメリット・デメリット</h2>
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
          <h2 id="s6" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Nexusジムが向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>初めてパーソナルジムを試してみたい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>月々の予算を2万〜3万円台に抑えたい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>高額な一括払いではなく月額制で始めたい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>東京都・神奈川県・大阪府の店舗に通える方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>1回30分の短時間トレーニングを希望する方</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>店舗のない地域にお住まいの方（公式店舗一覧は8都県）</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>管理栄養士による食事管理を重視する方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>クレジットカード以外での支払いを希望する方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>トレーナーの保有資格を契約前に確認したい方（公式サイトの記載は一部のトレーナーのみ）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 税込。出典: <Src href={SRC.price}>公式料金表（東日本・西日本）</Src>（{CHECKED}確認）。<Src href={SRC.legal}>特定商取引法に基づく表記</Src>には「入会金15,000円・60分月4回コース29,800円」と記載されており、料金表の金額と異なります。契約前に、通う店舗の金額をご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">2ヶ月の総額試算（東日本・西日本）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">各コースは原則2ヶ月の継続が必要なため、入会金と2ヶ月分の月会費の合計を試算しました。「体験当日入会」は無料体験の当日に入会した場合、「通常」はそれ以外の場合です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium">コース</th>
                  <th className="px-3 py-2 text-left font-medium">東日本（当日入会）</th>
                  <th className="px-3 py-2 text-left font-medium">東日本（通常）</th>
                  <th className="px-3 py-2 text-left font-medium">西日本（当日入会）</th>
                  <th className="px-3 py-2 text-left font-medium">西日本（通常）</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.plan} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-medium text-gray-800">{r.plan}</td>
                    <td className="px-3 py-2 text-gray-700">{r.eastSame}</td>
                    <td className="px-3 py-2 text-gray-700">{r.eastNormal}</td>
                    <td className="px-3 py-2 text-gray-700">{r.westSame}</td>
                    <td className="px-3 py-2 text-gray-700">{r.westNormal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 税込・当サイト計算。登録事務手数料（1,000円・キャンペーン中無料）とAI食事指導（月3,000円）は含めていません。60分・計16回の場合、東日本で当日に入会すると1回あたり約9,038円です。料金表には、どの店舗が東日本・西日本に当たるかの記載がないため、通う店舗でご確認ください。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s9" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの口コミ・評判（出典別の件数）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">当サイトでは、Nexusジムの口コミ・評価が掲載されている媒体について、件数と点数を確認できたものだけを掲載しています。個別の投稿文は転載していません。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">出典</th>
                  <th className="px-4 py-3 text-left font-medium">件数</th>
                  <th className="px-4 py-3 text-left font-medium">点数</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map((r) => (
                  <tr key={r.source} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 text-gray-800">{r.source === "マイベスト（N-group NEXUS 検証レビュー）" ? <Src href={SRC.mybest}>{r.source}</Src> : r.source}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.count}</td>
                    <td className="px-4 py-3 text-gray-700">{r.score}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GmapStats slug="nexus" brand="NEXUSパーソナルジム" />
          <p className="text-xs text-gray-500 mt-3">
            ※Googleマップの評価は店舗単位の数値で、件数の少ない店舗も含みます。通う予定の店舗の口コミを個別にご確認ください。<a href="https://www.google.com/maps/search/NEXUS%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline">GoogleマップでNEXUSパーソナルジムの口コミを見る</a>
          </p>
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">Nexusジムと他の主要ジムを比較しています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">Nexus</th>
                  <th className="px-3 py-2 text-center font-medium">FURDI</th>
                  <th className="px-3 py-2 text-center font-medium">HABIT</th>
                  <th className="px-3 py-2 text-center font-medium">エクササイズコーチ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">料金体系</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">月18,000円〜（マンツーマン30分×月4回）</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額7,678円〜</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額制</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額9,900円〜</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">指導形式</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI×サーキット</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI×マンツーマン</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">1回の時間</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">30〜90分</td>
                  <td className="px-3 py-2 text-center text-gray-700">30分</td>
                  <td className="px-3 py-2 text-center text-gray-700">60分</td>
                  <td className="px-3 py-2 text-center text-gray-700">20分</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">食事指導</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">AI食事指導（月3,000円）</td>
                  <td className="px-3 py-2 text-center text-gray-700">なし</td>
                  <td className="px-3 py-2 text-center text-gray-700">あり</td>
                  <td className="px-3 py-2 text-center text-gray-700">あり</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">特徴</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">格安パーソナル</td>
                  <td className="px-3 py-2 text-center text-gray-700">予約不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">住宅街密着</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI効率特化</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/furdi/" className="text-xs text-teal-600 hover:underline">FURDIの口コミを見る →</Link>
            <Link href="/review/habit/" className="text-xs text-teal-600 hover:underline">HABITの口コミを見る →</Link>
            <Link href="/review/exercise-coach/" className="text-xs text-teal-600 hover:underline">エクササイズコーチの口コミを見る →</Link>
          </div>
        </section>
      <GymCta slug="nexus" name="Nexusジム" />


        <section className="mb-12">
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S7941C.L119607K.Q136169A" alt="Nexusジム" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s12" className="text-xl font-bold mb-3">Nexusジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、指導内容をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        <BrandStoreLinks brand="nexus" brandName="Nexusジム" />

        <section>
          <h2 id="s13" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
