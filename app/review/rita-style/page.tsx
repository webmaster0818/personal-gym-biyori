import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import GmapStats from "@/components/GmapStats";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "RITA STYLE（リタスタイル）の口コミ・評判｜料金・返金条件を検証",
  description:
    "RITA STYLE（リタスタイル）の口コミ・評判を、Googleマップ5店舗・745件の集計と公式情報で検証します。全9コースの入会金込み総額と1回あたりの料金、全額返金制度と中途解約の違約金、キャンセル料、店舗数の表記の違い、2026年11月の運営会社変更をまとめています。",
};

/*
 * 2026-10-27 改訂: 料金・返金・中途解約・FAQ・店舗・運営会社は公式サイト（/price/・/price/refund/・/faq/・/gym/・/commercial-law/・inc.rita-style.co.jp）を2026-10-27に確認した値。
 * 店舗数は公式内で表記が分かれる（トップ・特商法=7店舗／店舗一覧=4店舗）ため両方を記載。
 * 週3回コース3種、紹介割・ペア割、キャンセル料、支払い方法（ローン36回/48回の表記差）、運営会社変更（2026/11/1〜 OKUMURA PARTNERS）を追加。
 * 「分割払いに対応・月々は回数により異なる」の根拠のない記述を公式表記に差し替え。
 */
const CHECKED = "2026年10月27日";

const SRC = {
  top: "https://rita-style.co.jp/",
  price: "https://rita-style.co.jp/price/",
  refund: "https://rita-style.co.jp/price/refund/",
  faq: "https://rita-style.co.jp/faq/",
  gym: "https://rita-style.co.jp/gym/",
  law: "https://rita-style.co.jp/commercial-law/",
  corp: "https://inc.rita-style.co.jp/",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "熊本市の株式会社利他フーズ（ヘルスケア事業部）が運営する、食事サポート付きの完全個室パーソナルジムです。糖質制限ではなくPFCバランスの食事を推奨しています。公式サイトでは、2026年11月1日から運営会社がOKUMURA PARTNERS株式会社に変わると告知されています。" },
  { label: "店舗", value: "公式トップと特定商取引法ページの表記は7店舗（熊本上通・鹿児島天文館・博多・天神大名・小倉魚町・岡山駅前・長崎浜町）です。一方、公式の店舗一覧ページに掲載されているのは博多・天神大名・小倉魚町・熊本上通の4店舗です。" },
  { label: "料金", value: "入会金込みの総額（税込）で、週1回・1ヶ月4回97,680円から、週2回・2ヶ月16回259,380円、週3回・2ヶ月24回323,400円です。週2回・6ヶ月と週3回の全コースは入会金が0円です。" },
  { label: "返金・解約", value: "目的を「減量のみ」とした場合に、開始1ヶ月で1kgを超えて減らなかったときの全額返金制度（入会金を除く）があります。中途解約では、未実施分から違約金（10%または2万円の低い方）を差し引いて返金されます。" },
  { label: "向いている方", value: "福岡・熊本で、糖質を極端に制限しない食事指導を受けたい方に向いています。全店舗にベビーサークルがあり、子ども連れで通う方も想定されています。駐車場はないため、車で通う方は近隣のコインパーキングの利用が必要です。" },
  { label: "口コミ", value: "当サイトが集計したGoogleマップの5店舗・745件の評点は4.8〜5.0です。件数と内訳を確認できる口コミサイトは見つかりませんでした。検索上位の第三者記事は2022〜2023年のもので、料金や食事方針が現行の公式表記と異なります。" },
];

const basicInfo = [
  { label: "ジム名", value: "RITA STYLE（表記はRITA-STYLE／リタスタイル）" },
  { label: "運営会社", value: "株式会社利他フーズ ヘルスケア事業部（熊本市中央区坪井2-1-42 SDK熊本ビル5階・代表取締役社長 猪本真也・資本金3,000万円）。2026年11月1日よりOKUMURA PARTNERS株式会社に変更予定" },
  { label: "店舗", value: "公式の店舗一覧：博多・天神大名・小倉魚町・熊本上通の4店舗／トップ・特定商取引法ページ：上記に鹿児島天文館・岡山駅前・長崎浜町を加えた7店舗" },
  { label: "営業時間", value: "10:00〜22:00（土日祝も営業）※店舗一覧掲載の4店舗" },
  { label: "1回の時間", value: "60分（卒業生向けの通い放題コースは1回30分）" },
  { label: "食事の方針", value: "糖質制限ではなくPFCバランスを推奨。専属トレーナーがLINEでサポートし、入会時に「お食事ブック」を配布" },
  { label: "無料のもの", value: "ウェア・シューズ・タオルのレンタル、個室シャワー、トレーニング後のプロテイン" },
  { label: "入会条件", value: "16歳以上（18歳未満は親権者の同意書が必要）" },
];

const merits = [
  {
    title: "コース料金の1回単価はどのコースも同じ",
    desc: "公式の料金表では、どのコースもコース料金は1回あたり13,475円（税込）で、コース間の差は入会金の有無だけです。入会金43,780円がかかる短期のコースほど1回あたりの総額は高く、入会金0円のコースでは13,475円になります（当サイト計算）。",
  },
  {
    title: "食事は糖質制限ではなくPFCバランス",
    desc: "公式FAQでは、肉や魚は食べてよく、ハイボールや焼酎など種類によってはお酒も飲めると説明しています。甘い物も時間と量の調整で取り入れられるとしており、厳しい糖質制限に抵抗がある方でも取り組みやすい方針です。",
  },
  {
    title: "店舗間の移動と卒業後のサポートがある",
    desc: "他店舗でのトレーニングが可能で、転勤などで店舗を移る場合はトレーナー間で引き継ぎが行われます。週2回・週3回のコースには卒業後5年間のリバウンドサポートが付き、卒業生向けのメンテナンスコースも用意されています。",
  },
];

const demerits = [
  {
    title: "店舗が九州中心で、公式内の店舗数の表記が分かれている",
    desc: "店舗一覧ページに掲載されているのは福岡県3店舗・熊本県1店舗です。関東・関西には店舗がありません。岡山・鹿児島・長崎の店舗はトップと特定商取引法ページに記載がありますが、店舗一覧には掲載されていないため、通う予定の方は事前に営業状況をご確認ください。",
  },
  {
    title: "全額返金制度の条件が限定的",
    desc: "返金の対象は2・3・6ヶ月の月8回以上のコースで、開始1ヶ月で1kgを超えて一度も減らなかった場合に限られます。転勤・妊娠・病気などの事情、無断欠席2回以上、日時変更が通算4回以上なども対象外です。",
  },
  {
    title: "体験のキャンセル料がかかる",
    desc: "カウンセリング・体験トレーニングは2日前までに連絡すれば無料ですが、前日は50%、当日は70%、無断キャンセルは100%のキャンセル料がかかります（1回12,250円が基準）。休会制度は公式サイトに記載がありません。",
  },
];

const courses = [
  { name: "週1回 1ヶ月", n: 4, entry: 43780, fee: 53900 },
  { name: "週1回 2ヶ月", n: 8, entry: 43780, fee: 107800 },
  { name: "週1回 3ヶ月", n: 12, entry: 43780, fee: 161700 },
  { name: "週2回 2ヶ月", n: 16, entry: 43780, fee: 215600 },
  { name: "週2回 3ヶ月", n: 24, entry: 21890, fee: 323400 },
  { name: "週2回 6ヶ月", n: 48, entry: 0, fee: 646800 },
  { name: "週3回 2ヶ月", n: 24, entry: 0, fee: 323400 },
  { name: "週3回 3ヶ月", n: 36, entry: 0, fee: 485100 },
  { name: "週3回 6ヶ月", n: 72, entry: 0, fee: 970200 },
];
const yen = (n: number) => `${n.toLocaleString()}円`;

const stores = [
  { name: "博多店", addr: "福岡市博多区博多駅前1-22-8 Modern Aspiration The Hakata Ekimae 801号室", listed: true },
  { name: "天神大名店", addr: "福岡市中央区大名1-12-49 barbizon102 4F", listed: true },
  { name: "小倉魚町店", addr: "北九州市小倉北区魚町2-1-7 ACT松永ビル3F", listed: true },
  { name: "熊本上通店", addr: "熊本市中央区上通町7-6 マツモトレコードビル3階", listed: true },
  { name: "鹿児島天文館店", addr: "公式の店舗ページなし", listed: false },
  { name: "岡山駅前店", addr: "公式の店舗ページなし", listed: false },
  { name: "長崎浜町店", addr: "公式の店舗ページなし", listed: false },
];

const reviewCheck = [
  { topic: "店舗によっては完全個室ではない", source: "駅探PICKS（2023年4月更新）", official: "公式FAQは完全個室のマンツーマン指導としつつ、予約が重なると他の利用者と鉢合わせする場合があると説明しています。" },
  { topic: "ごはん・パンなどの糖質は基本NG", source: "駅探PICKS（2023年4月更新）", official: "現行の公式FAQは「糖質制限ではなくPFCバランス」を推奨しています。" },
  { topic: "1kg以上減ると返金対象外", source: "駅探PICKS（2023年4月更新）", official: "現行の返金ページでも、開始1ヶ月で基準体重から1kgを超えて減った場合は対象外です。" },
  { topic: "入会金39,800円・2ヶ月16回196,000円", source: "駅探PICKS（2023年4月更新）", official: "現行は入会金43,780円（コースにより0円）、2ヶ月16回は入会金込み259,380円です。" },
  { topic: "返金保証なし", source: "SmartLog（2023年11月）", official: "現行の公式サイトには条件付きの全額返金制度があります。" },
];

const faqItems = [
  { q: "RITA STYLEの入会金はいくらですか？", a: "入会金は43,780円（税込）です。週2回・3ヶ月は21,890円、週2回・6ヶ月と週3回の全コースは0円です。公式料金表の総額は入会金込みで表示されています。紹介割を利用すると、紹介された方の入会金43,780円が割引されます。" },
  { q: "食事制限は厳しい内容ですか？", a: "公式FAQでは「糖質制限ではなくPFCバランスのお食事を推奨」としており、肉・魚は食べてよく、お酒も種類によっては飲めます。専属トレーナーがLINEで食事をサポートし、入会時に「お食事ブック」が渡されます。" },
  { q: "全額返金制度の条件を教えてください。", a: "対象は2・3・6ヶ月の月8回以上のコースです。入会時に目的を「減量のみ」と申告し、開始1ヶ月で基準体重から一度も1kgを超えて減らなかった場合に限られます。申請はトレーニング開始日から1ヶ月以内に来店・書面で行い、入会金と購入物品は対象外です。転勤・妊娠・病気などの事情、トレーナーの変更、無断欠席2回以上、日時変更が通算4回以上、指示違反3回以上、有効期間の延長も対象外です（2026年10月27日確認）。" },
  { q: "途中で解約した場合はどうなりますか？", a: "特定商取引法に基づく表記では、有効期間内に自己都合で退会する場合、未実施分のトレーニング料金を返金し、「未実施分の10%」と「2万円」のいずれか低い金額を違約金として差し引くとしています。休会制度は公式サイトに記載がありません。" },
  { q: "分割払いはできますか？", a: "銀行振込・クレジットカード・PayPayは全コースで利用でき、PayPayと銀行振込は2回払いまでです。ショッピングローンは短期集中コースで利用でき、最大回数は料金ページでは36回、FAQでは48回（審査あり）と表記が分かれています。契約時に回数をご確認ください。" },
  { q: "ウェアのレンタルはありますか？", a: "はい。ウェア・シューズ・タオルは無料レンタルで、個室シャワー・バスタオル・ドライヤー・アメニティもあります（公式FAQ）。" },
  { q: "無料体験の内容を教えてください。", a: "体験は無料で、約90分です。内訳はヒアリング10分、測定5分、プランニング15分、着替え5分、トレーニング30分、シャワー・着替え15分、質問10分です。キャンセルは2日前までに連絡が必要で、前日は50%、当日は70%のキャンセル料がかかります。" },
  { q: "女性トレーナーを指名できますか？", a: "公式FAQでは、女性トレーナーの在籍は時期によって異なるため店舗に確認するよう案内しています。トレーナーは基本的に担当制ではなく、希望があれば相談できます。" },
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
  { name: "CALORIE TRADE", href: "/review/calorie-trade/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
];

export default function RitaStyleReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RITA STYLE（リタスタイル）の口コミ・評判｜料金・返金条件を検証",
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
        "dateModified": "2026-10-27"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RITA STYLE" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RITA STYLE（リタスタイル）の口コミ・評判｜料金・返金条件を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月27日（料金・店舗・返金・中途解約・運営会社を公式サイトで再確認し、検索上位記事の記載と照合）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="RITA STYLEとは">
          <h2 className="font-bold text-gray-900 mb-3">RITA STYLE（リタスタイル）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.price}>公式 料金ページ</Src>・<Src href={SRC.refund}>全額返金制度</Src>・<Src href={SRC.faq}>よくある質問</Src>・<Src href={SRC.gym}>店舗一覧</Src>・<Src href={SRC.law}>特定商取引法に基づく表記</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/rita-style.jpg" alt="RITA STYLEの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">RITA STYLE 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="rita-style" name="RITA STYLE" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">RITA STYLEの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">RITA STYLEの店舗（公式表記の違い）</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">RITA STYLEのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">RITA STYLEの料金（全9コースの総額と1回あたり）</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">返金・中途解約・キャンセルの規定</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">RITA STYLEの口コミ・評判</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">RITA STYLEのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">RITA STYLEが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="RITA STYLE" />
        <BrandFactCheck slug="rita-style" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            RITA STYLE の公式サイトはこちら
          </a>
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの基本情報</h2>
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
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.law}>特定商取引法に基づく表記</Src>・<Src href={SRC.corp}>企業サイト</Src>・<Src href={SRC.faq}>よくある質問</Src>・<Src href={SRC.top}>公式トップ</Src>（{CHECKED}確認）。運営会社の設立年は公式サイトに記載がありません。
          </p>
        </section>

        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの店舗（公式表記の違い）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に、公式サイトの店舗一覧・トップ・特定商取引法ページの店舗表記を照合しました。店舗一覧ページに住所が掲載されているのは4店舗で、残る3店舗は店舗名のみの記載です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">店舗</th>
                  <th className="px-4 py-3 text-left font-medium">店舗一覧への掲載</th>
                  <th className="px-4 py-3 text-left font-medium">所在地</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-3 text-gray-700">{s.listed ? "あり" : "なし（トップ・特商法のみ）"}</td>
                    <td className="px-4 py-3 text-gray-700 text-xs">{s.addr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.gym}>公式 店舗一覧</Src>・<Src href={SRC.top}>公式トップ（「九州を中心に7店舗展開中」）</Src>・<Src href={SRC.law}>特定商取引法に基づく表記</Src>。佐賀県・熊本新市街の店舗は、いずれの公式ページにも記載がありません。
          </p>
        </section>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">RITA STYLEのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの料金（全9コースの総額と1回あたり）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            公式の料金ページに掲載されている短期集中コース6種と週3回コース3種を、入会金・コース料金・総額に分けて掲載します。1回あたりの金額は、入会金込みの総額を回数で割って当サイトで計算しました（1円未満は四捨五入）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-3 text-left font-medium">コース</th>
                  <th className="px-3 py-3 text-left font-medium">回数</th>
                  <th className="px-3 py-3 text-left font-medium">入会金</th>
                  <th className="px-3 py-3 text-left font-medium">コース料金</th>
                  <th className="px-3 py-3 text-left font-medium">総額</th>
                  <th className="px-3 py-3 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.name} className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-800 whitespace-nowrap">{c.name}</td>
                    <td className="px-3 py-3 text-gray-700">{c.n}回</td>
                    <td className="px-3 py-3 text-gray-700">{yen(c.entry)}</td>
                    <td className="px-3 py-3 text-gray-700">{yen(c.fee)}</td>
                    <td className="px-3 py-3 text-gray-800 font-medium">{yen(c.entry + c.fee)}</td>
                    <td className="px-3 py-3 text-gray-700">{yen(Math.round((c.entry + c.fee) / c.n))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mt-6 mb-2">卒業生向けコースと割引</h3>
          <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
            <li>・メンテナンスコース：月2回21,560円・月4回43,120円・月6回64,680円（卒業生のみ・入会金不要）</li>
            <li>・通い放題コース：月29,800円（卒業生のみ・平日10:00〜17:00・1回30分）</li>
            <li>・紹介割：紹介された方は入会金43,780円が割引、紹介した方はトレーニング4回分（53,900円相当）を受け取れます</li>
            <li>・ペア割：2名以上の同時入会で総額から10%割引（例：週2回・2ヶ月16回は259,380円から233,442円）。通い放題コースは対象外です</li>
            <li>・各コースには有効期限があり、期限を過ぎた回数は消化できません。具体的な期間は料金ページに記載がありません</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            同じ2ヶ月16回で比べると、RITA STYLEの週2回・2ヶ月コース（入会金込み259,380円）は、RIZAPのBASIC 2ヶ月コース（入会金込み382,800円）より123,420円低い金額です（当サイト計算・いずれも{CHECKED}時点の公式表記）。
          </p>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.price}>公式 料金ページ</Src>（{CHECKED}確認・税込）。キャンペーン等により変わる場合があります。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの返金・中途解約・キャンセルの規定</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">全額返金</th><td className="px-4 py-3 text-gray-800">2・3・6ヶ月の月8回以上のコースが対象。目的を「減量のみ」と申告し、開始1ヶ月で基準体重から一度も1kgを超えて減らなかった場合。開始日から1ヶ月以内に来店・書面で申請（入会金・物品は対象外）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">返金の対象外</th><td className="px-4 py-3 text-gray-800">転勤など仕事の都合、妊娠・病気などの事情、トレーナーの変更または変更の拒否、無断欠席2回以上、日時変更が通算4回以上、指示違反3回以上、有効期間の延長、規約違反</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">中途解約</th><td className="px-4 py-3 text-gray-800">未実施分のトレーニング料金を返金。「未実施分の10%」と「2万円」のいずれか低い金額を違約金として差し引く</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">体験のキャンセル</th><td className="px-4 py-3 text-gray-800">2日前まで無料／前日50%（6,125円）／当日70%（8,575円）／無断100%（12,250円）。天災・交通機関の運休による場合は不要</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">休会</th><td className="px-4 py-3 text-gray-800">公式に記載なし</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            計算例（当サイト試算）：週2回・2ヶ月16回（コース料金215,600円）を4回受けた時点で解約する場合、未実施12回分は161,700円です。違約金はその10%にあたる16,170円が2万円より低いため、返金額は145,530円となります。
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.refund}>全額返金制度</Src>・<Src href={SRC.law}>特定商取引法に基づく表記</Src>・<Src href={SRC.faq}>よくある質問</Src>（{CHECKED}確認）。キャンセル料の金額は、公式FAQの基準額12,250円に各割合を掛けて当サイトで計算しました。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEの口コミ・評判</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            RITA STYLEの口コミを件数つきで確認できる出典は、当サイトが集計したGoogleマップのデータのみでした。Getfit・みん評などの口コミサイトでは、件数と内訳を確認できるページが見つかりませんでした（{CHECKED}確認）。
          </p>
          <GmapStats slug="rita-style" brand="RITA STYLE（リタスタイル）" />
          <h3 className="font-bold text-gray-800 mb-2">検索上位記事の論点と公式の現行情報の照合</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「リタスタイル 口コミ」「評判」で上位に表示される第三者記事は2022〜2023年に作成されたもので、現在の公式表記と異なる記述があります。当サイトでは、記事で取り上げられている論点を公式サイトの現行情報と照合しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium">記事の論点</th>
                  <th className="px-3 py-2 text-left font-medium">掲載元</th>
                  <th className="px-3 py-2 text-left font-medium">{CHECKED}時点の公式情報</th>
                </tr>
              </thead>
              <tbody>
                {reviewCheck.map((r) => (
                  <tr key={r.topic} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 text-gray-800">{r.topic}</td>
                    <td className="px-3 py-2 text-gray-600 text-xs whitespace-nowrap">{r.source}</td>
                    <td className="px-3 py-2 text-gray-700">{r.official}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※第三者記事の口コミはGoogleマップの投稿を店舗名とともに紹介したもので、件数や投稿日は記載されていません。公式FAQの「2ヶ月平均8.5kg減量」は2018年4月の調査とされており、個人差があると注記されています。</p>
        </section>
      <GymCta slug="rita-style" name="RITA STYLE" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RITA STYLEのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/Q8343U.31275172.Q136169A" alt="RITA STYLE" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">RITA STYLEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、指導内容や料金をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        <BrandStoreLinks brand="rita-style" brandName="RITA STYLE" />

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
