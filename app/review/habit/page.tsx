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
  title: "HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・返金条件を検証",
  description:
    "HABIT PERSONAL GYM（ハビット）の口コミ・評判を、出典別の件数と公式情報で整理しました。公式掲載の全18店舗（東京17・大阪1）の区別分布、集中ダイエットコース16回142,400円などの料金、会員規約の休会・退会・返金条件をまとめています。",
};

/*
 * 2026-10-26 改訂: 店舗・料金・規定は公式サイト（店舗一覧・料金・よくある質問・会員規約・特定商取引法の表記・会社概要・お知らせ）を2026-10-26に確認した値。
 * 店舗一覧の表に公式に掲載のない店舗（三軒茶屋・自由が丘・駒沢大学・用賀・明大前・千歳船橋・心斎橋）が載っていたため、公式の18店舗に差し替えた。
 * 出典のない口コミ傾向の要約10項目、「プロテインを無料で提供」「住宅街密着」等の確認できない記述は削除した。
 */
const CHECKED = "2026年10月26日";

const SRC = {
  top: "https://habit-training.com/",
  studio: "https://habit-training.com/studio",
  price: "https://habit-training.com/price",
  faq: "https://habit-training.com/faq",
  kiyaku: "https://habit-training.com/kiyaku",
  company: "https://habit-training.com/company",
  news: "https://habit-training.com/news",
  concept: "https://habit-training.com/habit",
  mybest: "https://my-best.com/products/17661713",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

/* ---------- affiliate ---------- */
const affiliateUrl = "https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A";

const summary = [
  { label: "どんなジムか", value: "株式会社Natural（東京都渋谷区恵比寿）が運営するマンツーマンのパーソナルジムです。1回50分のトレーニングに、LINEでの食事サポートとウェア・タオル・シューズのレンタルが含まれます。" },
  { label: "店舗", value: "公式の店舗一覧は東京17店舗・大阪1店舗の計18店舗です。渋谷区と世田谷区が各5店舗で、全店舗を相互に利用できます。2026年に5店舗が開業しています。" },
  { label: "料金", value: "集中ダイエットコースは10回99,800円・16回142,400円（1回8,900円）・32回278,400円（税込）です。入会金30,000円はキャンペーンで0円、体験は当日入会の場合に0円です。" },
  { label: "規約", value: "会員規約では、入会後2ヶ月間は退会できず、入会金と2ヶ月分の月会費は返金しないと定めています。休会・退会は窓口で書面による手続きが必要です。" },
  { label: "口コミ", value: "当サイトが収録したGoogleマップの3店舗は口コミ463件・平均評点4.97です。検索上位にHABITを個別に扱う口コミ記事は少なく、マイベストの検証ページが主な第三者情報です。" },
];

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社Natural（東京都渋谷区恵比寿西・代表取締役 小尾晋太郎）" },
  { label: "店舗数", value: "全18店舗（東京17・大阪1、公式店舗一覧・2026年10月26日確認）。全店舗相互利用可" },
  { label: "営業時間", value: "平日・土曜 7:00〜23:00、日曜・祝日 7:00〜20:00、年末年始のみ休業（全店共通）" },
  { label: "1回の時間", value: "50分" },
  { label: "支払い", value: "2026年4月1日から完全キャッシュレス（クレジットカード・電子マネー・QRコード決済）。カード分割は一括〜24回（月額コースを除く）" },
  { label: "公式URL", value: "https://habit-training.com/", isLink: true },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "2ヶ月16回で142,400円、1回8,900円",
    desc: "集中ダイエットコース16回は142,400円（税込）で、1回あたり8,900円です。同じ16回でRIZAPのBASIC（入会金込み382,800円）の約37%、BEYONDのライフプランニング16（290,400円）の約49%の金額です（各公式サイトの掲載値で当サイトが計算）。",
  },
  {
    title: "食事サポートとレンタルがコース料金に含まれる",
    desc: "公式料金ページでは「入会金・食事サポート・レンタルすべて込みの総額表示」とし、表示料金以外の追加費用はかからないと回答しています。ウェア上下・靴下・タオル・シューズを無料で借りられるため、手ぶらで通えます。",
  },
  {
    title: "早朝7時から夜23時まで、全店舗を相互利用できる",
    desc: "営業時間は全店共通で平日・土曜7:00〜23:00、日曜・祝日7:00〜20:00です。18店舗すべてを相互に利用できるため、職場の近くと自宅の近くで使い分けることもできます。",
  },
  {
    title: "ダイエットコースに全額返金制度がある",
    desc: "公式料金ページに「全額返金制度あり（条件あり）」と記載されています。適用条件は入会時に説明され、入会後にコース途中で制度の利用を変更することはできません（会員規約）。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "店舗は東京都心部と大阪梅田のみ",
    desc: "18店舗のうち17店舗が東京都（渋谷区・世田谷区・目黒区・港区・千代田区）、1店舗が大阪市北区です。神奈川・埼玉・千葉を含め、その他の地域には店舗がありません。",
  },
  {
    title: "入会後2ヶ月は退会できず、休会・退会は窓口で書面手続き",
    desc: "会員規約では、入会後2ヶ月間は退会できず、入会金と2ヶ月分の月会費は返金しないと定めています。休会・退会は希望する時期の2ヶ月前までに、本人が店舗窓口で所定の届に記入する方法に限られ、電話・FAXなどでは手続きできません。",
  },
  {
    title: "全額返金制度の条件が公開されていない",
    desc: "全額返金制度の適用条件は、公式サイトに掲載されておらず、入会時に説明する方式です。返金を前提に入会する場合は、条件を書面で受け取ってから契約されることをおすすめします。",
  },
  {
    title: "2026年開業の店舗は口コミが少ない",
    desc: "神田・学芸大学・大阪梅田（2026年3月1日）、梅ヶ丘（3月27日）、田町（7月22日）の5店舗は2026年の開業です。開業から日が浅い店舗は第三者の口コミが少ないため、体験で設備と担当者を確認されることをおすすめします。",
  },
];

/* ---------- 料金プラン ---------- */
// 2026-10-26: 公式料金ページ（habit-training.com/price）で再確認
const pricingPlans = [
  { name: "集中ダイエットコース 10回", duration: "50分×10回", price: "99,800円（1回9,980円）", note: "税込・食事サポート・レンタル込み" },
  { name: "集中ダイエットコース 16回（2ヶ月）", duration: "50分×16回", price: "142,400円（1回8,900円）", note: "税込・食事サポート・レンタル込み" },
  { name: "集中ダイエットコース 32回", duration: "50分×32回", price: "278,400円（1回8,700円）", note: "税込・食事サポート・レンタル込み" },
  { name: "回数券 4回", duration: "50分×4回", price: "39,300円（1回9,825円）", note: "税込・有効期限3ヶ月" },
  { name: "月額プラン 週1回（月4回）", duration: "50分", price: "29,780円〜/月", note: "税込" },
  { name: "入会金", duration: "—", price: "30,000円", note: "キャンペーンで0円" },
  { name: "体験", duration: "約60分", price: "0円", note: "体験当日に入会する方に限る" },
];

/* ---------- 口コミの出典 ---------- */
const reviewSources = [
  { name: "Googleマップ（当サイト取得）", count: "3店舗・口コミ463件・平均評点4.97", note: "当サイトのデータベースに入っている恵比寿本店（4.9・286件）、大阪梅田店（5.0・94件）、渋谷松濤店（5.0・83件）の集計です（2026年8月29日〜9月8日取得）。18店舗のうち3店舗のみのため、ブランド全体の評価としては参考値です。" },
  { name: "マイベスト「Natural HABIT PERSONAL GYM 検証レビュー評価」", count: "検証評価（口コミ件数の表示なし）", note: "2026年3月17日更新、料金は2026年5月8日時点の情報と記載。体験料3,000円、トレーナー指名可（指名料500円・1,000円）、キャンセルは18時間前まで無料、店舗数は関東16・関西1と掲載しています。体験料と指名料は、公式サイトでは確認できませんでした。" },
  { name: "公式サイト「お客様満足度95%」", count: "自社アンケート", note: "公式料金ページの注記は「自社ユーザーアンケート調べ」です。調査人数・時期の記載はありません。" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "HABIT PERSONAL GYMの入会金はいくらですか？", a: "通常30,000円（税込）で、キャンペーンにより0円です（公式料金ページ・2026年10月26日確認）。体験料金0円は体験当日に入会する方に限られます。" },
  { q: "料金以外に追加費用はかかりますか？", a: "公式料金ページでは「かかりません」と回答しており、食事サポート・ウェア・タオル・シューズのレンタルはコース料金に含まれます。" },
  { q: "退会や休会はいつまでに手続きが必要ですか？", a: "会員規約では、休会・退会は希望する時期の2ヶ月前までに、本人が店舗窓口で所定の届に記入して手続きすると定めています。口頭・電話・FAX・郵便では手続きできません。また、入会後2ヶ月間は退会できず、入会金と2ヶ月分の月会費は返金されません。" },
  { q: "休会中に費用はかかりますか？", a: "会員規約では、休会期間は最大6ヶ月で、休会中は月会費がかかりません。休会後は最低1ヶ月以上有料会員に復帰する必要があり、休会中に退会する場合は1ヶ月分の月会費相当額の解約手数料がかかります。" },
  { q: "予約のキャンセルはいつまでできますか？", a: "予約日時の18時間前までです。それ以降の変更・キャンセルはレッスン消化となり、翌月への繰り越しや振り替えはできません（公式FAQ・会員規約）。" },
  { q: "支払い方法を教えてください。", a: "2026年4月1日から完全キャッシュレスに移行し、現金は使えません。クレジットカード、交通系ICなどの電子マネー、PayPayなどのQRコード決済に対応しています。カード分割は一括〜24回で、月額コースは対象外です。月会費は口座自動引き落としです。" },
  { q: "プロテインはありますか？", a: "公式FAQでは「Habitオリジナルプロテインのご用意がございます」と回答しています。料金に含まれるかどうかは公式サイトに明記がなく、マイベストは「有料：プロテインなど」と掲載しているため、店舗でご確認ください。" },
  { q: "HABIT PERSONAL GYMはどこに店舗がありますか？", a: "東京17店舗（梅ヶ丘・田町・神田・学芸大学・恵比寿・白金高輪・池尻大橋・中目黒・代々木上原・代々木上原ANNEX・銀座・幡ヶ谷・桜新町・渋谷松濤・等々力・経堂・緑ヶ丘）と大阪梅田店の計18店舗です（2026年10月26日確認）。全店舗を相互に利用できます。" },
  { q: "全額返金制度の条件を教えてください。", a: "ダイエットコースが対象で、適用条件は入会時に説明すると公式料金ページに記載されています。条件の詳細は公式サイトに掲載されていません。制度を利用するかどうかは入会時に確認し、入会後にコース途中で変更することはできません（会員規約）。" },
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

/* ---------- 店舗一覧（公式店舗一覧・2026-10-26確認。リンクは当サイトの店舗ページ） ---------- */
type StoreItem = { name: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "東京都渋谷区（5）", stores: [{ name: "恵比寿店", href: "/review/habit/ebisu/" }, { name: "渋谷松濤店", href: "/review/habit/shibuya/" }, { name: "代々木上原店", href: "/review/habit/yoyogiuehara/" }, { name: "代々木上原ANNEX店", href: "/review/habit/yoyogiuehara-annex/" }, { name: "幡ヶ谷店", href: "/review/habit/hatagaya/" }] },
  { region: "東京都世田谷区（5）", stores: [{ name: "池尻大橋店", href: "/review/habit/ikejiriohashi/" }, { name: "桜新町店", href: "/review/habit/sakurashinmachi/" }, { name: "等々力店", href: "/review/habit/todoroki/" }, { name: "経堂店", href: "/review/habit/kyodo/" }, { name: "梅ヶ丘店", href: "/review/habit/umegaoka/" }] },
  { region: "東京都目黒区（3）", stores: [{ name: "中目黒店", href: "/review/habit/nakameguro/" }, { name: "学芸大学店", href: "/review/habit/gakugeidaigaku/" }, { name: "緑ヶ丘店", href: "/review/habit/midorigaoka/" }] },
  { region: "東京都港区（2）", stores: [{ name: "白金高輪店", href: "/review/habit/shirokanedai/" }, { name: "田町店" }] },
  { region: "東京都千代田区（2）", stores: [{ name: "神田店", href: "/review/habit/kanda/" }, { name: "銀座店（所在地は千代田区有楽町）", href: "/review/habit/ginza/" }] },
  { region: "大阪府大阪市北区（1）", stores: [{ name: "大阪梅田店", href: "/review/habit/umeda/" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];


export default function HabitReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "HABIT PERSONAL GYM"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "HABIT PERSONAL GYM（ハビット）",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・返金条件を検証",
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
        "dateModified": "2026-10-26"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "HABIT PERSONAL GYM" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・返金条件を検証
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/habit.jpg" alt="HABIT PERSONAL GYM（ハビット）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">HABIT PERSONAL GYM（ハビット） 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月26日（店舗一覧・料金・会員規約の休会/退会/返金条件を公式サイトで再確認し、口コミの出典と件数を確認）</p>
        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="HABIT PERSONAL GYMとは">
          <h2 className="font-bold text-gray-900 mb-3">HABIT PERSONAL GYM（ハビット）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.studio}>公式店舗一覧</Src>・<Src href={SRC.price}>公式料金ページ</Src>・<Src href={SRC.kiyaku}>会員規約</Src>・<Src href={SRC.news}>お知らせ</Src>（いずれも{CHECKED}確認）。Googleマップの数値は当サイトの取得データ（2026年8月29日〜9月8日）です。
          </p>
        </section>
        <GymCta slug="habit" name="HABIT PERSONAL GYM" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">HABIT PERSONAL GYMの基本情報</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">HABIT PERSONAL GYMのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">HABIT PERSONAL GYMの料金</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">休会・退会・返金・キャンセルの規定</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">HABIT PERSONAL GYMの口コミ・評判（出典別）</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">他のジムと比較</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">HABIT PERSONAL GYMのよくある質問</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">HABIT PERSONAL GYMの店舗一覧（全18店舗）</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">HABIT PERSONAL GYMが気になった方へ</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="HABIT PERSONAL GYM" />
        <BrandFactCheck slug="habit" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            HABIT の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          HABIT PERSONAL GYM（ハビットパーソナルジム）は、株式会社Naturalが東京17店舗・大阪1店舗で運営するパーソナルジムです。公式サイトでは、一般内科・外科医の知識にもとづく「医師監修」のトレーニングメソッドを掲げています（監修医師の氏名は記載されていません）。当ページでは、公式の料金・会員規約と、出典を確認できた口コミの件数をまとめています。
        </p>

        {/* ---------- 目次 ---------- */}
        

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの基本情報</h2>
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


        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">HABIT PERSONAL GYMのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">HABIT PERSONAL GYMのデメリット</h3>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            HABIT PERSONAL GYMは低価格帯の料金設定を強みとしています。以下は2026年10月14日に公式料金ページで確認した掲載値です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">項目</th>
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
          <ul className="space-y-1.5 text-sm text-gray-700 mt-3">
            <li>・コース料金には、初回カウンセリング、LINEでの食事サポート、ウェア上下・靴下・タオル・シューズのレンタルが含まれます。</li>
            <li>・計算例（当サイト試算）：16回コースを週2回ペースで受ける場合、2ヶ月で142,400円です。入会金のキャンペーンが終了している場合は、30,000円が加わります。</li>
            <li>・月額プラン（週1回）は公式料金ページに「29,780円（税込）〜」と表示されています。会員規約の解約手数料の項には「週1回スタンダードコースの場合は税抜き22,800円」とあり、金額が一致しません。月額プランを検討する場合は、契約時の金額を書面でご確認ください。</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.price}>公式料金ページ</Src>・<Src href={SRC.kiyaku}>会員規約</Src>（{CHECKED}確認）。</p>
        </section>

        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの休会・退会・返金・キャンセルの規定</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">最低在籍期間</th><td className="px-4 py-3 text-gray-800">入会後2ヶ月間は退会不可。入会金と2ヶ月分の月会費は理由を問わず返金しない。キャンペーンでの入会は返金不可で、最低在籍期間が延長される場合がある</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">休会・退会の手続き</th><td className="px-4 py-3 text-gray-800">希望する時期の2ヶ月前までに、本人が店舗窓口で所定の届に記入（口頭・電話・FAX・郵便は不可）。未納会費がある場合は精算が必要</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">休会</th><td className="px-4 py-3 text-gray-800">最大6ヶ月・休会中の月会費なし。休会後は最低1ヶ月以上有料会員に復帰。休会中に退会する場合は1ヶ月分の月会費相当額の解約手数料</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">キャンセル</th><td className="px-4 py-3 text-gray-800">予約日時の18時間前まで。それ以降はレッスン消化で、翌月への繰り越し・振り替え不可</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">全額返金制度</th><td className="px-4 py-3 text-gray-800">ダイエットコースが対象。適用条件は入会時に説明（公式サイトに条件の記載なし）。入会後にコース途中で制度の利用を変更することは不可</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">滞納</th><td className="px-4 py-3 text-gray-800">月会費の滞納が6ヶ月分に達すると自動的に退会扱い（未払い分の支払い義務は残る）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.kiyaku}>HABIT PERSONAL GYM 会員規約</Src>・<Src href={SRC.faq}>よくある質問</Src>・<Src href={SRC.price}>料金ページ</Src>（{CHECKED}確認）。会員規約は月会費制を前提とした書き方で、休会・退会の期限の文言（「2ヶ月前までに手続きを行うことで翌月1日をもって」）は読み取りにくい表現です。コースで契約する場合の扱いを含め、契約時に書面でご確認ください。
          </p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合わせたプランを提案します。</p>
            <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの口コミ・評判（出典別）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            当サイトでは{CHECKED}に「HABIT PERSONAL GYM 口コミ」「ハビットパーソナルジム 評判」で検索し、上位に表示されるページを確認しました。HABITを個別に取り上げた口コミ記事は少なく、口コミサイト（みん評など）にもHABITのページは見当たりませんでした。件数や内容を確認できた情報は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">出典</th>
                  <th className="px-4 py-2 text-left font-medium">件数・評点</th>
                  <th className="px-4 py-2 text-left font-medium">内容・注意点</th>
                </tr>
              </thead>
              <tbody>
                {reviewSources.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-2 text-gray-800">{r.name.startsWith("マイベスト") ? <Src href={SRC.mybest}>{r.name}</Src> : r.name}</td>
                    <td className="px-4 py-2 text-gray-700">{r.count}</td>
                    <td className="px-4 py-2 text-gray-700">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <GmapStats slug="habit" brand="HABIT PERSONAL GYM" />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-xs text-yellow-800">※ 当サイトでは、口コミ本文の転載や、出典を示せない傾向の要約は行っていません。評点はいずれも高く店舗間の差が小さいため、店舗選びでは通いやすさと、体験時の担当者との相性を確認されることをおすすめします。実際の投稿は下記リンクからGoogleマップでご確認ください。</p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/HABIT+PERSONAL+GYM/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/HABIT PERSONAL GYM/</a>
            </p>
          </div>
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">HABIT PERSONAL GYMと、当サイトで公式情報を確認している他のブランドを比較しました（税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">HABIT</th>
                  <th className="px-3 py-2 text-center font-medium">BEYOND</th>
                  <th className="px-3 py-2 text-center font-medium">Nexus</th>
                  <th className="px-3 py-2 text-center font-medium">FURDI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">代表的な料金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">16回142,400円</td>
                  <td className="px-3 py-2 text-center text-gray-700">16回290,400円<br />（ライフプランニング）</td>
                  <td className="px-3 py-2 text-center text-gray-700">月4回29,800円<br />（特定商取引法の表記）</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額7,678円〜</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">入会金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">30,000円（キャンペーンで0円）</td>
                  <td className="px-3 py-2 text-center text-gray-700">0円</td>
                  <td className="px-3 py-2 text-center text-gray-700">15,000円（特定商取引法の表記）</td>
                  <td className="px-3 py-2 text-center text-gray-700">なし（事務手数料5,500円）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">指導形式</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">AIマシンのサーキット</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">返金保証</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">全額返金制度あり（条件は入会時に説明）</td>
                  <td className="px-3 py-2 text-center text-gray-700">公式に記載なし</td>
                  <td className="px-3 py-2 text-center text-gray-700">記載なし（中途解約の返金規定あり）</td>
                  <td className="px-3 py-2 text-center text-gray-700">公式に記載なし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ HABIT・BEYONDは2026年10月26日、Nexus・FURDIは2026年10月14日に各公式サイトで確認した掲載値です。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/beyond/" className="text-xs text-teal-600 hover:underline">BEYONDの口コミを見る →</Link>
            <Link href="/review/nexus/" className="text-xs text-teal-600 hover:underline">Nexusの口コミを見る →</Link>
            <Link href="/review/furdi/" className="text-xs text-teal-600 hover:underline">FURDIの口コミを見る →</Link>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="habit" name="HABIT PERSONAL GYM" />

        <section id="faq" className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMのよくある質問</h2>
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
          <h2 id="s9" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            公式の店舗一覧には、{CHECKED}時点で東京17店舗・大阪1店舗の計18店舗が掲載されています。所在地の区別に当サイトで整理すると、渋谷区と世田谷区が各5店舗、目黒区3店舗、港区と千代田区が各2店舗、大阪市北区1店舗です。全店舗を相互に利用でき、営業時間は全店共通です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-40">所在地（店舗数）</th>
                  <th className="px-4 py-3 text-left font-medium">店舗名</th>
                </tr>
              </thead>
              <tbody>
                {storesByRegion.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {row.stores.map((s, i) => (
                        <span key={s.name}>
                          {i > 0 && "\u3001"}
                          {s.href ? <Link href={s.href} className="text-teal-600 hover:underline">{s.name}</Link> : s.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 出典: <Src href={SRC.studio}>HABIT公式 店舗一覧</Src>・<Src href={SRC.news}>お知らせ</Src>（{CHECKED}確認）。2026年の開業は神田・学芸大学・大阪梅田（3月1日）、梅ヶ丘（3月27日）、田町（7月22日）です。リンクは当サイトに店舗ページがある店舗です（田町店のページは未作成です）。
          </p>
        </section>

        {/* ---------- Author Box ---------- */}
        

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s10" className="text-xl font-bold mb-3">HABIT PERSONAL GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            体験トレーニングにて、指導内容をご確認いただけます。体験当日に入会すると、入会金は0円です。
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            公式サイトへ
          </a>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <BrandStoreLinks brand="habit" brandName="HABIT PERSONAL GYM" />
        <section>
          <h2 id="s11" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
