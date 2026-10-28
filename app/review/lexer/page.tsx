import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "ReXeR（レクサー）の口コミ・評判｜料金・店舗・悪い口コミを検証",
  description:
    "ReXeR（レクサー）の口コミ・評判を検証します。公式サイトに表示される店舗別Googleの評点と件数、赤坂店欄の口コミに本町の24時間ジムの投稿が多い点、回数券の1回あたり料金、月額9,900円〜の仕組み、6店舗を公式情報で確認しています。",
};

/*
 * 2026-10-28 改訂: 公式トップ・料金ページ・FAQ・会社概要を2026-10-28に確認。
 * 公式トップの「お客様の声」欄（Googleの口コミの埋め込み表示）から店舗別の評点・件数を転記し、赤坂店欄の投稿に本町の24時間ジムの投稿が多いことを確認。
 * 食事管理オプションを料金ページの現行表記（管理栄養士による食事管理 2週間11,000円・オンライン健康相談5,500円）に訂正。
 * 1回の時間は FAQ「50分」と料金ページ「約55分」の2通りの表記を併記。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://personal.rexer-group.com/",
  plan: "https://personal.rexer-group.com/plan",
  faq: "https://personal.rexer-group.com/faq",
  about: "https://personal.rexer-group.com/about",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社レクサー（大阪市中央区）が運営するパーソナルジムです。同じReXeRグループが大阪・本町などで運営する24時間フィットネスラウンジとは別の業態です。" },
  { label: "店舗", value: "赤坂・五反田（東京）、梅田中津・天六（大阪）、芦屋・苦楽園・西宮（兵庫）の6店舗です。" },
  { label: "料金", value: "月額コースは月9,900円＋1回5,060円〜（縛り期間・違約金なし）、回数券は8回64,240円〜40回272,800円です。回数券の1回あたりは8,030円〜6,820円です（当サイト計算）。入会金33,000円はキャンペーンで0円です。" },
  { label: "返金", value: "公式の料金ページ・FAQに返金保証の記載はありません。" },
  { label: "口コミ", value: "公式トップに表示されるGoogleの評点は、赤坂店欄を除く5店舗で4.9〜5.0（計280件）です。赤坂店欄（4.7・244件）に表示される投稿には本町の24時間ジムに関するものが多く、パーソナルジムの評価として読む際は注意が必要です。第三者の口コミサイトで件数を確認できるページは見つかりませんでした。" },
  { label: "向いている方", value: "東京・大阪・兵庫の6店舗に通える方で、契約期間の縛りがない月額制で始めたい方に向いています。" },
];

// 公式トップ「お客様の声」欄の表示（Googleの口コミの埋め込み）。2026-10-28 閲覧時の値をそのまま転記
const officialReviewWidget = [
  { store: "赤坂店", label: "ReXeR", rating: "4.7", count: 244, note: "表示名は「ReXeR」。表示される投稿は本町の24時間ジムに関するものが中心" },
  { store: "五反田店", label: "ReXeR PeRSoNaL GyM 五反田", rating: "5.0", count: 102, note: "" },
  { store: "梅田中津店", label: "ReXeR PeRSoNaL GyM 梅田中津", rating: "4.9", count: 48, note: "" },
  { store: "天六店", label: "ReXeR PeRSoNaL GyM 天六", rating: "5.0", count: 19, note: "当サイトのGoogle Places APIの取得値（2026年8〜9月）は26件" },
  { store: "芦屋・苦楽園店", label: "ReXeR PeRSoNaL GyM 芦屋・苦楽園", rating: "5.0", count: 40, note: "" },
  { store: "西宮店", label: "ReXeR PeRSoNaL GyM 西宮", rating: "4.9", count: 71, note: "" },
];

const ticketPlans = [
  { n: 8, price: 64240 },
  { n: 16, price: 123200 },
  { n: 24, price: 179520 },
  { n: 32, price: 228800 },
  { n: 40, price: 272800 },
];
const yen = (n: number) => `${Math.round(n).toLocaleString()}円`;

const basicInfo = [
  { label: "ジム名", value: "ReXeR PeRSoNaL GyM（レクサーパーソナルジム）" },
  { label: "タイプ", value: "高級パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額9,900円〜" },
  { label: "エリア", value: "赤坂・五反田（東京）、梅田中津・天六（大阪）、苦楽園・西宮（兵庫）の6店" },
  { label: "特徴", value: "ReXeRグループのパーソナルジム / 有資格・コンテスト入賞トレーナー / 管理栄養士による食事管理・オンライン健康相談（オプション） / 1回50分（料金ページの表記は約55分）" },
  { label: "公式サイト", value: "https://personal.rexer-group.com/" },
];

const strengths = [
  {
    title: "コンテスト優勝経験を持つトップトレーナーが在籍",
    desc: "ReXeRにはフィットネスコンテストで優勝経験を持つトレーナーが多数在籍しています。実績に裏打ちされた高度な指導力で、初心者から上級者まで最適なトレーニングを提供します。トレーナー自身の身体づくりの経験にもとづいたアドバイスを受けられます。",
  },
  {
    title: "管理栄養士による食事管理とオンライン健康相談のオプション",
    desc: "料金ページのオプションは、管理栄養士による食事管理（2週間11,000円・税込）とオンライン健康相談（5,500円・税込）です。食事管理コースでは、LINEでの食事管理が含まれます。食事は無理な制限をせず、専属トレーナー・管理栄養士がアドバイスする方針です（公式）。公式の「効果実感96.1%」は会員152人への自社アンケート（2025年6月）の結果です。",
  },
  {
    title: "高級フィットネスラウンジ発の洗練された空間",
    desc: "ReXeRグループは大阪・本町などで24時間フィットネスラウンジも運営しており、パーソナルジムでも高品質アメニティやトレーニング後のプロテインを用意しています（公式）。ウェア・タオルは無料レンタルです。",
  },
];

const merits = [
  {
    title: "筋トレだけでなくコンディショニングも行う",
    desc: "公式FAQでは、筋力トレーニングに加えてコンディショニングで可動域や身体能力の改善を図るとしています。指導するのは国家資格・トレーニング関連の有資格者やスポーツ指導経験者です。",
  },
  {
    title: "月額コース9,900円〜とパーソナルジムでは始めやすい価格帯",
    desc: "高級感のある空間と質の高いトレーナーを備えながら、月額コース9,900円（税込）＋1回5,060円〜と、比較的始めやすい料金設定です。費用対効果の高さも特徴です。",
  },
  {
    title: "東京・大阪・兵庫に6店舗",
    desc: "赤坂・五反田（東京）、梅田中津・天六（大阪）、芦屋苦楽園・西宮（兵庫）の6店舗です。西宮店は幹線道路沿いで駐車場・駐輪場があります（公式）。",
  },
];

const demerits = [
  {
    title: "店舗が東京・大阪・兵庫に限定される",
    desc: "2026年10月時点の公式で6店舗のため、これらのエリア以外にお住まいの方は通えません。",
  },
  {
    title: "高級路線のため気軽さに欠ける場合がある",
    desc: "公式はReXeRを「エグゼクティブ向けのラグジュアリーなライフスタイル向上サービス」と説明しています。カジュアルな雰囲気を求める方は、体験にてご確認ください。",
  },
  {
    title: "返金保証の記載がない・体験料の表記が2通り",
    desc: "公式サイトに返金保証の記載はありません。体験はトップページに「体験3,960円・当日入会で0円」と「無料体験のご予約」の両方の表記があるため、予約時に体験料をご確認ください。",
  },
];

// 2026-10-14: 公式サイト掲載値（data/brand-prices.ts・2026-10-08実査）に差し替え
const pricingPlans = [
  { name: "月額コース", duration: "月額", price: "9,900円/月＋1回5,060円〜", note: "税込" },
  { name: "回数券8回", duration: "8回", price: "64,240円", note: "税込" },
  { name: "回数券16回", duration: "16回", price: "123,200円", note: "税込" },
  { name: "回数券24回", duration: "24回", price: "179,520円", note: "税込" },
  { name: "回数券32回", duration: "32回", price: "228,800円", note: "税込" },
  { name: "回数券40回", duration: "40回", price: "272,800円", note: "税込" },
  { name: "食事管理コース", duration: "16回（2ヶ月）／24回（3ヶ月）／32回（4ヶ月）", price: "256,080円／359,920円／447,920円", note: "税込" },
  { name: "入会金", duration: "—", price: "33,000円", note: "税込・キャンペーンで0円" },
];

const reviewSummary = "検索上位のFitMapの天六店ページに載っている口コミ3件は「提供口コミ」（施設側から提供された口コミ）と表示され、投稿日もありません。内容はトレーニング内容、ケガをしない正しい方法の指導、女性トレーナーの在籍を評価するものでした。第三者の独立した口コミは少なく、「ReXeR 口コミ」で出てくる本町の口コミの多くは24時間フィットネスラウンジ（別業態）のものです。当サイトの取得データでGoogleマップの評点が取れたのは天六店のみ（5.0・26件）で、店舗数が少ないためブランド全体の評価は出していません。";

const affiliateUrl = "https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A";

const faqItems = [
  { q: "ReXeR（レクサー）の月会費はいくらですか？", a: "月額コースは月9,900円（税込）＋1回5,060円（税込）〜、回数券は8回64,240円〜です。入会金は通常33,000円（キャンペーンで0円）です。最新の料金は公式サイトまたは無料カウンセリングでご確認ください。" },
  { q: "どのくらいで効果を実感できますか？", a: "公式FAQには「多くの方がトレーニングを開始してから2～3週間程度で体重や体型に変化を感じています」とあります。トップページの「効果実感96.1%」は、会員152人への自社アンケート（2025年6月）で「目的に対して効果を実感している」と答えた割合です。" },
  { q: "トレーナーの質について教えてください。", a: "公式では、国家資格保有者・トレーニング関連の専門資格取得者・コンテスト優勝者などが在籍しているとしています。トレーナーの資格・実績は店舗ページで確認できます。" },
  { q: "食事管理はどのように行われますか？", a: "料金ページでは、オプションとして管理栄養士による食事管理（2週間11,000円・税込）とオンライン健康相談（5,500円・税込）が掲載されています。LINEでの食事管理を含む食事管理コース（16回256,080円〜）もあります（2026年10月28日確認）。" },
  { q: "回数券と月額コースはどちらが安くなりますか？", a: "回数券の1回あたりは8回で8,030円、40回で6,820円です。月額コースは月9,900円に1回5,060円〜が加わるため、月4回なら30,140円（1回あたり7,535円）、月8回なら50,380円（1回あたり約6,298円）です（いずれも税込・当サイト計算。回数券の料金は店舗により異なると公式に記載があります）。" },
  { q: "公式サイトに表示されている口コミは信頼できますか？", a: "公式トップの口コミ欄はGoogleの口コミを埋め込んで表示したもので、店舗別の評点と件数が出ます。ただし赤坂店の欄は表示名が「ReXeR」で、表示される投稿の多くは本町の24時間ジムに関するものでした（2026年10月28日確認）。パーソナルジムの評判を確かめる際は、Googleマップで店舗名「ReXeR PeRSoNaL GyM」を指定してご確認ください。" },
  { q: "無料体験や見学はできますか？", a: "無料カウンセリングのみの利用も可能と公式FAQに記載されています。体験はトップページに「体験3,960円・当日入会で0円」と「無料体験のご予約」の両方の表記があります（苦楽園・赤坂はキャンペーン内容が異なる）。" },
  { q: "店舗はどこにありますか？", a: "赤坂・五反田（東京）、梅田中津・天六（大阪）、芦屋苦楽園・西宮（兵庫）の6店舗です。本町・南青山はReXeRグループの24時間フィットネスラウンジなど別の拠点です。" },
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
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RexerReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "ReXeR（レクサー）の口コミ・評判｜料金・店舗・悪い口コミを検証",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ReXeR（レクサー）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ReXeR（レクサー）の口コミ・評判｜料金・店舗・悪い口コミを検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（料金・店舗・オプションを公式サイトで再確認し、公式サイトに表示される店舗別のGoogleの評点を集計）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="ReXeR（レクサー）とは">
          <h2 className="font-bold text-gray-900 mb-3">ReXeR（レクサー）の口コミ・評判と料金：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式トップ</Src>・<Src href={SRC.plan}>コース・料金</Src>・<Src href={SRC.faq}>よくある質問</Src>・<Src href={SRC.about}>会社概要</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/lexer.jpg" alt="ReXeR（レクサー）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">ReXeR（レクサー） 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="lexer" name="ReXeR（レクサー）" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">ReXeR（レクサー）の基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">ReXeR（レクサー）の3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">ReXeR（レクサー）のメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">ReXeR（レクサー）の料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">ReXeR（レクサー）の口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">ReXeR（レクサー）のよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">ReXeR（レクサー）が気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="ReXeR（レクサー）" />
        <BrandFactCheck slug="lexer" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            REXER の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          ReXeR PeRSoNaL GyM（レクサーパーソナルジム）は、高級フィットネスラウンジを母体とするパーソナルジムです。有資格者やコンテスト入賞経験のあるトレーナーが指導し、オプションで管理栄養士の食事管理や提携医師のオンライン診療も受けられます。東京・大阪・兵庫に6店舗を展開しています。本記事では、ReXeRの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の基本情報</h2>
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

        {/* 3つの強み */}
        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）のメリット・デメリット</h2>
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

        {/* 料金 */}
        <section className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
          <h3 className="font-bold text-gray-800 mt-8 mb-3">回数券の1回あたりの料金（当サイト計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">回数券</th>
                  <th className="px-3 py-2 text-left font-medium">料金（税込）</th>
                  <th className="px-3 py-2 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {ticketPlans.map((t) => (
                  <tr key={t.n} className="border-t border-gray-100">
                    <td className="px-3 py-2">{t.n}回</td>
                    <td className="px-3 py-2">{yen(t.price)}</td>
                    <td className="px-3 py-2">{yen(t.price / t.n)}</td>
                  </tr>
                ))}
                <tr className="border-t border-gray-100">
                  <td className="px-3 py-2">月額コース 月4回</td>
                  <td className="px-3 py-2">{yen(9900 + 5060 * 4)}/月</td>
                  <td className="px-3 py-2">{yen((9900 + 5060 * 4) / 4)}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-3 py-2">月額コース 月8回</td>
                  <td className="px-3 py-2">{yen(9900 + 5060 * 8)}/月</td>
                  <td className="px-3 py-2">{yen((9900 + 5060 * 8) / 8)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.plan}>コース・料金</Src>（{CHECKED}確認）。回数券は「〜」表記の最低額で、公式に「回数券の料金は店舗により異なります」と記載されています。月額コースは月額9,900円に都度料金5,060円〜を加えて計算しました。1回の時間はFAQでは50分、料金ページでは約55分と表記されています。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合わせたプランを提案します。</p>
            <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）の口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <h3 className="font-bold text-gray-800 mt-8 mb-3">公式サイトに表示されている店舗別のGoogleの評点</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            公式トップの「お客様の声」欄では、Googleの口コミが店舗別に埋め込み表示されています。当サイトでは{CHECKED}に表示内容を確認し、評点と件数を転記しました。赤坂店欄を除く5店舗の合計は280件で、口コミ数で加重した平均は4.96です（当サイト計算）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">店舗欄</th>
                  <th className="px-3 py-2 text-left font-medium">評点</th>
                  <th className="px-3 py-2 text-left font-medium">件数</th>
                  <th className="px-3 py-2 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {officialReviewWidget.map((r) => (
                  <tr key={r.store} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 whitespace-nowrap">{r.store}</td>
                    <td className="px-3 py-2">{r.rating}</td>
                    <td className="px-3 py-2">{r.count}件</td>
                    <td className="px-3 py-2 text-xs text-gray-600">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.top}>公式トップ「お客様の声」</Src>（{CHECKED}閲覧）。埋め込み表示の値は取得時点のもので、Googleマップ上の最新値と異なる場合があります。運営者が掲載する欄のため、第三者による集計ではありません。</p>
          <p className="text-xs text-gray-500 mt-3">※ 口コミの傾向は、上記の出典を当サイトで確認して要約したものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="lexer" name="ReXeR（レクサー）" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ReXeR（レクサー）のよくある質問</h2>
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
        <div className="flex justify-center my-6">
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/U99728.M157545O.Q136169A" width={300} height={250} alt="ReXeR パーソナルジム" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* Author Box */}
        

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">ReXeR（レクサー）が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">無料カウンセリングにて、目的に合ったプランをご相談いただけます。コンテスト優勝経験のあるトレーナーの指導を体験できます。</p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ReXeR 公式サイトで無料カウンセリングを予約
          </a>
        </section>

        {/* 関連ジム */}
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
