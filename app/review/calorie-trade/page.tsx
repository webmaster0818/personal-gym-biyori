import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "カロリートレードジャパンの口コミ・評判｜料金総額・公式5店舗・分割払いを検証",
  description:
    "カロリートレードジャパン（CALORIE TRADE JAPAN）の口コミ・評判を、口コミサイト別の件数と公式情報で整理しました。公式店舗一覧5店舗の店舗別料金と入会金（2ヶ月16回は99,000円〜149,800円）、入会金込みの総額、分割払いの条件、第三者サイトの旧情報との違いをまとめています。",
};

/*
 * 2026-10-28 改訂: 料金・店舗・支払い・運営会社は公式サイト（/plan/・/store/・/faq/・/company/・トップ）を2026-10-28に確認した値。
 * 旧記載の訂正: 「全国展開で地方でも通える」→公式店舗一覧は5店舗（トップは「全国に10店舗」と表記）、
 * 「分割払いに対応している店舗がほとんど」→短期集中プランのみ月1万円から分割可（公式FAQ）。
 * 出典のない記述（2ヶ月で5〜10kgの減量が多い・女性トレーナー在籍店舗・口コミの要約文）は削除した。
 * 口コミは各口コミサイトの件数・点数のみ掲載し、本文は転載しない。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://calorietradejapan.com/",
  plan: "https://calorietradejapan.com/plan/",
  store: "https://calorietradejapan.com/store/",
  faq: "https://calorietradejapan.com/faq/",
  company: "https://calorietradejapan.com/company/",
  ekitan: "https://ekitan.com/media/fitness/calotore/",
  fitmapMidori: "https://fitmap.jp/gym/2131/?tab=review",
  ekitenMidori: "https://www.ekiten.jp/shop_80656367",
  hpbGinowan: "https://beauty.hotpepper.jp/kr/slnH000770492/",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社EVANESS（愛知県一宮市）が運営する、ダイエットを主な目的としたパーソナルジムです。レッスン時間は30分か50分を選べます。男性も利用でき、公式FAQでは会員の男女比を3:7としています。" },
  { label: "料金", value: "公式の料金表では、短期集中プラン（食事サポート付き）2ヶ月16回149,800円、月プラン月4回29,800円、入会金50,000円です（税込）。入会金を含めた2ヶ月16回の総額は199,800円です（当サイト計算）。ただし各店舗ページの料金は店舗ごとに異なり、2ヶ月16回は99,000円（宜野湾店・期間限定）から149,800円まで差があります。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは、名古屋瑞穂区店・一宮本町店・名古屋緑区店・松戸八柱店・宜野湾店の5店舗です。トップページには「全国に10店舗展開」、松戸八柱店のページには「全国22店舗」と記載されており、表記が一致していません。" },
  { label: "支払い", value: "分割払いは短期集中プランのみ、月1万円から利用できます。公式サイトでは、入会金と各プランの費用以外はかからない料金体系と説明しています。" },
  { label: "口コミ", value: "当サイトが確認した口コミサイトの掲載件数は各店舗1件程度で、傾向を判断できる件数ではありません。体験（通常5,000円・現在無料）で指導内容を確認することをおすすめします。" },
];

const basicInfo = [
  { label: "ジム名", value: "CALORIE TRADE JAPAN（カロリートレードジャパン）" },
  { label: "運営会社", value: "株式会社EVANESS（エヴァネス）。本社 愛知県一宮市、創業2018年3月・設立2019年9月。フランチャイズ加盟店を募集しています" },
  { label: "タイプ", value: "ダイエット向けのパーソナルジム（男女とも利用可）" },
  { label: "レッスン時間", value: "30分か50分を選択" },
  { label: "料金", value: "公式料金表: 月4回29,800円〜／2ヶ月16回149,800円（税込）、入会金50,000円。店舗ごとに異なります" },
  { label: "店舗", value: "公式店舗一覧に5店舗（愛知県3・千葉県1・沖縄県1）" },
  { label: "貸し出し", value: "ウェア上下・シューズを無料で貸し出し（手ぶらで来店可）" },
];

const strengths = [
  {
    title: "食事の量とタイミングまで助言する食事指導",
    desc: "公式FAQによると、食事は制限よりもたんぱく質・脂質・糖質のバランスを基本に、食べる量とタイミング、摂取カロリーを助言する方針です。短期集中プランには食事サポートが付いています。",
  },
  {
    title: "短期集中プランと月プランから選べる",
    desc: "公式料金表では、短期集中プランのほか、月4回29,800円・月8回54,800円（税込）の月プランがあります。短期集中プランの終了後は、継続プランを入会金なしで利用できます。",
  },
  {
    title: "手ぶらで通える",
    desc: "ウェア上下とシューズを無料で貸し出しており、着替えスペースもあります。",
  },
];

const merits = [
  {
    title: "追加費用がかからない料金体系",
    desc: "公式サイトでは、入会金と各プランの費用以外はかからないと説明しています。",
  },
  {
    title: "短期集中プランは分割払いができる",
    desc: "短期集中プランに限り、月1万円から分割で支払えます。",
  },
  {
    title: "体験が無料",
    desc: "無料カウンセリングは60分、体験を含める場合は30分延長です。体験は通常5,000円のところ、現在は無料と記載されています。公式FAQでは無理な勧誘はないと明記しています。",
  },
];

const demerits = [
  {
    title: "公式店舗一覧の店舗が5店舗に限られる",
    desc: "通える地域は愛知県（名古屋市・一宮市）、千葉県松戸市、沖縄県宜野湾市です。第三者サイトに掲載されている他地域の店舗は、公式店舗一覧に掲載されていません。",
  },
  {
    title: "店舗ごとに料金と入会金が異なる",
    desc: "店舗ページの料金は店舗ごとに異なり、たとえば2ヶ月16回は松戸八柱店140,800円、一宮本町店149,800円です。通う店舗のページで金額をご確認ください。",
  },
  {
    title: "返金保証の記載がない",
    desc: "公式サイトの料金表・FAQ・各店舗ページに、返金保証や中途解約の条件の記載はありません。契約前に書面でご確認ください。",
  },
];

// 2026-10-28: 公式料金ページ（calorietradejapan.com/plan/）の掲載値
const pricingPlans = [
  { name: "短期集中（食事サポート付き）2ヶ月", duration: "16回", price: "149,800円", note: "税込。1回あたり約9,363円（入会金を除く・当サイト計算）" },
  { name: "短期集中（食事サポート付き）3ヶ月", duration: "24回", price: "198,800円", note: "税込。1回あたり約8,283円（同）" },
  { name: "月プラン 月4回", duration: "月4回", price: "29,800円/月", note: "税込。1回あたり7,450円" },
  { name: "月プラン 月8回", duration: "月8回", price: "54,800円/月", note: "税込。1回あたり6,850円" },
  { name: "継続プラン 月4回／月8回", duration: "短期集中からの延長者限定", price: "26,800円／49,800円", note: "税込。入会金は不要" },
  { name: "入会金", duration: "—", price: "50,000円", note: "" },
];

// 当サイト計算: 入会金50,000円＋プラン料金
const totalRows = [
  { plan: "短期集中 2ヶ月16回", total: "199,800円", per: "約12,488円" },
  { plan: "短期集中 3ヶ月24回", total: "248,800円", per: "約10,367円" },
  { plan: "月プラン 月4回を2ヶ月（計8回）", total: "109,600円", per: "13,700円" },
  { plan: "月プラン 月8回を2ヶ月（計16回）", total: "159,600円", per: "9,975円" },
];

// 2026-10-28: 公式の各店舗ページに掲載されている料金（税込）。キャンペーンは10月31日までの表記
const storePrices = [
  { name: "一宮本町店", src: "https://calorietradejapan.com/store/p38197/", short: "2ヶ月16回149,800円／3ヶ月24回198,800円", monthly: "月4回29,800円／月8回54,800円", entry: "22,000円（10月31日までキャンペーンで0円）" },
  { name: "名古屋緑区店", src: "https://calorietradejapan.com/store/p538/", short: "2ヶ月16回149,800円／3ヶ月24回198,800円", monthly: "月4回29,800円／月8回54,800円", entry: "55,000円（10月31日までキャンペーンで0円）" },
  { name: "松戸八柱店", src: "https://calorietradejapan.com/store/p38216/", short: "1ヶ月8回121,000円／2ヶ月16回140,800円／3ヶ月24回196,900円", monthly: "月2回19,800円／月4回35,200円／月6回52,800円／月8回70,400円", entry: "50,000円（10月31日まで25,000円）" },
  { name: "宜野湾店", src: "https://calorietradejapan.com/store/p38235/", short: "2ヶ月16回99,000円／3ヶ月24回139,700円（期間限定）", monthly: "月4回29,700円／月8回49,500円（期間限定）", entry: "金額の記載なし（「今なら入会金無料」と表記）" },
  { name: "名古屋瑞穂区店", src: "https://calorietradejapan.com/store/p38200/", short: "掲載なし", monthly: "50分 月2回16,500円／月4回29,700円／月8回55,000円（LINEでの毎日の食事管理込み）", entry: "金額の記載なし（入会時に2ヶ月分の会費が必要と記載）" },
];

const stores = [
  { name: "名古屋瑞穂区店", addr: "愛知県名古屋市瑞穂区瑞穂通8丁目", hours: "24時間営業・不定休" },
  { name: "一宮本町店", addr: "愛知県一宮市本町4丁目", hours: "8:00〜23:00・不定休" },
  { name: "名古屋緑区店", addr: "愛知県名古屋市緑区大将ヶ根", hours: "8:00〜23:00・不定休" },
  { name: "松戸八柱店", addr: "千葉県松戸市松戸新田", hours: "8:00〜23:30" },
  { name: "宜野湾店", addr: "沖縄県宜野湾市我如古", hours: "10:00〜22:00・年中無休" },
];

const reviewRows = [
  { source: "FitMap 名古屋緑区店", href: SRC.fitmapMidori, count: "1件", score: "4.40", note: "カウンセリングで継続の意思を確認できる点、月2回の測定とプランの見直しが挙げられています。FitMapの店舗情報（24時間・日曜定休）は公式の営業時間と異なります" },
  { source: "エキテン 名古屋緑区", href: SRC.ekitenMidori, count: "1件", score: "3.36", note: "投稿日は2020年9月12日です" },
  { source: "ホットペッパービューティー 宜野湾店", href: SRC.hpbGinowan, count: "1件", score: "5.00", note: "掲載メニューは体験（90分）の1件です" },
  { source: "駅探PICKS（カロリートレードジャパンの口コミ・評判）", href: SRC.ekitan, count: "引用5件", score: "—", note: "2022年12月8日公開・2023年4月4日更新（PR表記あり）。Googleマップの口コミを引用していますが、総件数・投稿日の記載はありません。18店舗・入会金55,000円・30分単位の料金など、現在の公式の表記と一致しない情報が含まれています" },
];

const faqItems = [
  { q: "カロリートレードジャパンの入会金はいくらですか？", a: "公式の料金ページでは50,000円と記載されています。店舗ページでは、一宮本町店22,000円、名古屋緑区店55,000円、松戸八柱店50,000円と店舗ごとに異なり、いずれも10月31日までのキャンペーンで割引の表記があります（2026年10月28日確認）。短期集中プランから継続プランに移る場合、入会金はかかりません。" },
  { q: "入会金を含めた総額はいくらですか？", a: "公式料金表の金額で計算すると、短期集中プラン2ヶ月16回は入会金を含めて199,800円（1回あたり約12,488円）、3ヶ月24回は248,800円（1回あたり約10,367円）です（税込・当サイト計算）。店舗ごとに料金とキャンペーンが異なるため、実際の金額は通う店舗のページでご確認ください。" },
  { q: "店舗はどこにありますか？", a: "公式の店舗一覧に掲載されているのは、名古屋瑞穂区店・一宮本町店・名古屋緑区店・松戸八柱店・宜野湾店の5店舗です。トップページには「全国に10店舗展開」と記載されているため、上記以外の地域の方は本社（050-3177-4904）にお問い合わせください。" },
  { q: "分割払いはできますか？", a: "短期集中プランのみ、月1万円から分割払いができます（公式FAQ）。" },
  { q: "食事制限は厳しい内容ですか？", a: "公式FAQによると、制限よりも、たんぱく質・脂質・糖質のバランスを基本に、食べる量とタイミング、摂取カロリーを助言する方針です。" },
  { q: "男性も通えますか？", a: "通えます。女性専用ではなく、公式FAQでは会員の男女比を3:7としています。" },
  { q: "無料体験はありますか？", a: "あります。無料カウンセリングは60分で、体験を含める場合は30分延長されます。体験は通常5,000円のところ、現在は無料と記載されています。" },
  { q: "返金保証はありますか？", a: "公式サイトの料金表・FAQ・各店舗ページ・運営会社情報（ブログと事例を除く19ページ）を確認しましたが、返金保証や中途解約の条件の記載はありませんでした（2026年10月28日確認）。契約前に書面でご確認ください。" },
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
  { name: "RITA STYLE", href: "/review/rita-style/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

export default function CalorieTradeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "カロリートレードジャパンの口コミ・評判｜料金総額・公式5店舗・分割払いを検証",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CALORIE TRADE JAPAN" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          カロリートレードジャパンの口コミ・評判｜料金総額・公式5店舗・分割払いを検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（公式の料金表・各店舗ページ・FAQ・運営会社情報を再確認し、口コミサイト別の件数を整理）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="カロリートレードジャパンとは">
          <h2 className="font-bold text-gray-900 mb-3">カロリートレードジャパン（CALORIE TRADE JAPAN）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.plan}>公式 料金表</Src>・<Src href={SRC.store}>公式 店舗一覧と各店舗ページ</Src>・<Src href={SRC.faq}>公式FAQ</Src>・<Src href={SRC.company}>運営会社情報</Src>（いずれも{CHECKED}確認）。料金・キャンペーンは変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/calorie-trade.jpg" alt="CALORIE TRADE JAPANの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">CALORIE TRADE JAPAN 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="calorie-trade" name="CALORIE TRADE JAPAN" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">CALORIE TRADE JAPANのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">CALORIE TRADE JAPANの料金（店舗別・総額）</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">公式店舗一覧の5店舗</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">カロリートレードジャパンの口コミ・評判（出典別の件数）</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">CALORIE TRADE JAPANのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">CALORIE TRADE JAPANが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="CALORIE TRADE JAPAN" />
        <BrandFactCheck slug="calorie-trade" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CALORIE TRADE JAPAN の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          CALORIE TRADE JAPAN（カロリートレードジャパン）は、愛知県一宮市の株式会社EVANESSが運営するダイエット向けのパーソナルジムです。公式料金表の月プランは月4回<span className="font-bold bg-yellow-100 px-0.5">29,800円</span>（税込）からです。本記事では、公式サイトで確認した店舗別の料金と、口コミサイト別の件数をご説明します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.plan}>公式 料金表</Src>（{CHECKED}確認）。レッスン時間は30分か50分を選べますが、料金表に時間別の金額の記載はありません。</p>

          <h3 className="text-lg font-bold mt-8 mb-3">入会金を含めた総額（公式料金表で計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-3 text-left font-medium">プラン</th>
                  <th className="px-4 py-3 text-left font-medium">総額（入会金50,000円込み）</th>
                  <th className="px-4 py-3 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {totalRows.map((r) => (
                  <tr key={r.plan} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{r.plan}</td>
                    <td className="px-4 py-3 text-gray-700">{r.total}</td>
                    <td className="px-4 py-3 text-gray-700">{r.per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 税込・当サイト計算。キャンペーンによる入会金の割引は含めていません。</p>

          <h3 className="text-lg font-bold mt-8 mb-3">店舗ページに掲載されている料金（店舗別）</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">公式料金表には「店舗によって料金が異なる場合があります」と記載されています。当サイトで各店舗のページを確認したところ、料金と入会金は次のとおり店舗ごとに異なっていました。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">店舗</th>
                  <th className="px-3 py-2 text-left font-medium">短期集中プラン</th>
                  <th className="px-3 py-2 text-left font-medium">月プラン</th>
                  <th className="px-3 py-2 text-left font-medium">入会金</th>
                </tr>
              </thead>
              <tbody>
                {storePrices.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 font-medium text-gray-800 whitespace-nowrap"><Src href={r.src}>{r.name}</Src></td>
                    <td className="px-3 py-2 text-gray-700">{r.short}</td>
                    <td className="px-3 py-2 text-gray-700">{r.monthly}</td>
                    <td className="px-3 py-2 text-gray-700 text-xs">{r.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 税込。各店舗ページを{CHECKED}に確認した掲載値です。キャンペーンは各店舗ページに「10月1日〜10月31日」などの期間の記載があります。宜野湾店の料金は「期間限定」と表記されています。</p>
        </section>

        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">公式店舗一覧の5店舗</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-3 text-left font-medium">店舗</th>
                  <th className="px-4 py-3 text-left font-medium">所在地</th>
                  <th className="px-4 py-3 text-left font-medium">営業時間</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{r.name}</td>
                    <td className="px-4 py-3 text-gray-700">{r.addr}</td>
                    <td className="px-4 py-3 text-gray-700">{r.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.store}>公式 店舗一覧</Src>（{CHECKED}確認）。駅探PICKSなどの第三者サイトには旭川・仙台・新潟・大阪・姫路・小倉・別府などの店舗が掲載されていますが、公式の店舗一覧には掲載されていません。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">カロリートレードジャパンの口コミ・評判（出典別の件数）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">当サイトでは{CHECKED}に、公式店舗一覧の店舗が掲載されている口コミサイトと、「カロリートレードジャパン 口コミ」で上位に表示される記事を確認しました。個別の投稿文は転載していません。</p>
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
                {reviewRows.map((r) => (
                  <tr key={r.source} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 text-gray-800"><Src href={r.href}>{r.source}</Src></td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.count}</td>
                    <td className="px-4 py-3 text-gray-700">{r.score}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※各口コミサイトの掲載件数は1店舗あたり1件程度のため、評判の傾向を判断できる件数ではありません。指導内容やトレーナーとの相性は、無料体験でご確認いただくことをおすすめします。最新の口コミは<a href="https://www.google.com/maps/search/CALORIE+TRADE+JAPAN/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップ</a>でもご確認いただけます。</p>
        </section>
      <GymCta slug="calorie-trade" name="CALORIE TRADE JAPAN" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CALORIE TRADE JAPANのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S9777P.F142081F.Q136169A" width={300} height={250} alt="CALORIE TRADE JAPAN" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* Author Box */}
        

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">CALORIE TRADE JAPANが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ダイエットの目標をご相談ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            CALORIE TRADE JAPANの無料カウンセリングに申し込む
          </a>
        </section>

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
