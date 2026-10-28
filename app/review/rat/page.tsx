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
  title: "パーソナルジムRat（ラット）の口コミ・評判｜料金・返金条件を検証",
  description:
    "パーソナルジムRat（ラット）の口コミ・評判を、Googleマップ12店舗・2,130件の集計と検索上位記事の出典確認で検証します。公式の店舗一覧33店舗と駅からの距離、3コースの1回あたり料金、食事指導の違い、返金保証の表記の違いもまとめています。",
};

/*
 * 2026-10-28 改訂: 公式トップ・コース料金ページを2026-10-28に確認。
 * 訂正: 店舗数 31 → 公式トップ下部の店舗一覧で33店舗（北海道1・関東22・東海3・関西6・九州1）。
 * 削除: 出典のない口コミ要約（「シャワー完備の三拍子」「女性ユーザーから話しやすい」等の5分類）、根拠のない「大手より低価格」「トレーナーの指名に制限」。
 * 追加: 要点まとめ、コース別の1回あたり料金（当日入会10%OFF込み）、駅からの徒歩分の集計（公式の「全店舗駅から徒歩5分圏内」との照合）、検索上位記事の出典と公式現行情報の照合表。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://ratgym.jp/",
  service: "https://ratgym.jp/service/",
  legal: "https://ratgym.jp/legal/",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社ひととこむ（東京都渋谷区）が運営する完全個室のパーソナルジムです。ウェア・タオル・水・プロテインが無料で、手ぶらで通えます（公式トップ）。営業時間は7:00〜23:00・年中無休です。" },
  { label: "店舗", value: "公式トップ下部の店舗一覧で33店舗（北海道1・関東22・東海3・関西6・九州1）です。" },
  { label: "料金", value: "全コース8回・1回50分で、シェイプアップ・美ボディメイク131,150円、短期ダイエット集中147,780円（税込）です。1回あたり16,394円〜18,473円で、当日入会の10%OFFを適用すると14,754円〜16,625円です（当サイト計算）。入会金29,800円は現在無料です。" },
  { label: "返金", value: "公式トップに「30日間で満足できなかったら全額返金保証」とありますが、条件の記載はありません。特定商取引法の表記では入会時諸費用は返金不可とされています。" },
  { label: "口コミ", value: "当サイトが集計したGoogleマップの12店舗・2,130件では、評点は全店舗4.8〜5.0（口コミ数で加重した平均4.87）です。検索上位の記事には、混雑で予約時間に始められない、体験後の連絡がなかった、という投稿の引用もあります。" },
  { label: "向いている方", value: "手ぶらで通いたい方、早朝・夜に通いたい方に向いています。食事指導を重視する場合は、LINE食事指導がつく短期ダイエット集中コースを選ぶ必要があります。" },
];

const courses = [
  { name: "シェイプアップ", price: 131150, meal: "記載なし（定期カウンセリング）" },
  { name: "美ボディメイク", price: 131150, meal: "食事指導" },
  { name: "短期ダイエット集中", price: 147780, meal: "LINE食事指導" },
];
const yen = (n: number) => `${Math.round(n).toLocaleString()}円`;

// 公式トップの店舗紹介欄に掲載されている最寄り駅からの徒歩分（2026-10-28 確認・22店舗）
const walkMinutes = [
  { area: "北海道", stores: "札幌店（すすきの駅4分）" },
  { area: "関東", stores: "川口店（1分）、藤沢店（3分）、熊谷店（4分）、上尾店（4分）、錦糸町店（6分）、春日部店（7分）、町田店（7分）、二俣川店（7分）、府中店（8分）、八王子店（8分）、吉祥寺店（8分）、中野店（10分）" },
  { area: "東海", stores: "名古屋栄店（3分）、春日井店（4分）、刈谷店（5分）" },
  { area: "関西", stores: "神戸三宮元町店（JR元町駅1分）、梅田店（1分）、心斎橋店（3分）、高槻店（5分）、西宮北口店（5分）" },
  { area: "九州", stores: "福岡天神店（天神南駅2分）" },
];

const reviewCheck = [
  { source: "FitMap「パーソナルジムRatに入会すべき？厳選口コミからわかった評判」", date: "掲載日 2026年10月1日（PR表記あり）", how: "「独自のアンケート手法」と「パーソナルジムRat様からいただいた口コミ」を併用。どの口コミが施設提供かの区別、件数・調査時期の記載なし", gap: "入会金0円・月8,600〜10,000円・体験5,000円・5店舗と掲載。公式の現行表記（8回131,150円〜・入会金29,800円→無料・33店舗）と異なります" },
  { source: "駅探PICKS「パーソナルジムRatは楽しくトレーニングしたい人におすすめ！」", date: "2022年10月11日公開・2023年5月1日更新（PR表記あり）", how: "新宿三丁目・新宿南口・渋谷の3店舗のGoogleマップから引用。件数・投稿日の記載なし", gap: "入会金32,780円・シェイプアップ8回121,440円・15店舗は当時の情報です" },
  { source: "smartlog「Rat(ラット)の口コミ集」", date: "2022年12月10日公開（PR表記あり）", how: "悪い口コミ3件はGoogleのクチコミへのリンクあり、良い口コミ8件は出典の記載なし。記事独自の星評価は根拠の記載なし", gap: "料金・店舗数は掲載時点の情報です" },
];

const basicInfo = [
  { label: "ジム名", value: "Rat（ラット）" },
  { label: "タイプ", value: "完全個室パーソナルジム" },
  { label: "料金帯", value: "コース総額131,150円〜" },
  { label: "エリア", value: "北海道1・関東22・東海3・関西6・九州1の33店舗（公式トップ下部の店舗一覧・2026年10月28日確認）" },
  { label: "特徴", value: "完全個室 / 手ぶらで通える（ウェア・タオル無料） / 7:00〜23:00年中無休 / 当日の体調不良キャンセル保証" },
];

const strengths = [
  {
    title: "完全個室でプライバシー確保",
    desc: "公式サイトは「完全個室のパーソナルトレーニング」をうたっており、他の会員の目を気にせずトレーニングに集中できます。シャワーについては公式サイトのコース内容・FAQに記載がないため、店舗にご確認ください。",
  },
  {
    title: "手ぶらで通える充実のレンタル",
    desc: "公式のコース内容では、ウェア・タオルは無料レンタル、ミネラルウォーターは飲み放題、シューズはレンタル可能です。公式トップでは、プロテインも無料と記載されています。",
  },
  {
    title: "8回単位のコースで始めやすい",
    desc: "3コースとも8回・1回50分のコースで、8回131,150円（税込）〜です。当日入会で全コース10%OFFとなり、入会金29,800円は現在無料です（公式のコース・料金）。",
  },
];

const merits = [
  {
    title: "手ぶらで通えるから続けやすい",
    desc: "ジムバッグを持ち歩く必要がないため、通勤途中や急な予定変更でも気軽にトレーニングに立ち寄れます。",
  },
  {
    title: "早朝から夜まで通える・当日キャンセルの保証あり",
    desc: "営業時間は7:00〜23:00で、年中無休です。予約当日に体調不良になった場合、当日午前10時までに連絡すれば1回分として消化されない「キャンセル保証」があります（公式）。",
  },
  {
    title: "目的に合わせて食事指導の有無を選べる",
    desc: "LINE食事指導が含まれるのは短期ダイエット集中コース、美ボディメイクは「食事指導」、シェイプアップは食事指導の記載がなく定期カウンセリングのみです（公式のコース内容）。食事指導を希望する方は、コース選びの際にご注意ください。",
  },
];

const demerits = [
  {
    title: "店舗は33店舗で、関東以外は少ない",
    desc: "公式の店舗一覧33店舗のうち22店舗が関東です。北海道・九州は各1店舗のため、地域によっては通える店舗がありません。",
  },
  {
    title: "返金保証の条件が公式サイトで確認できない",
    desc: "公式トップの「30日間で満足できなかったら全額返金保証」には条件の記載がなく、特定商取引法の表記では入会時諸費用は理由を問わず返金不可とされています。契約前に返金の条件を書面でご確認ください。",
  },
  {
    title: "体験料・一部の料金が店舗により異なる",
    desc: "公式FAQでは体験料は店舗ごとに異なり、体験を実施していない店舗もあるとしています。コース料金も一部店舗で異なると記載されています。",
  },
];

// 2026-10-14: 公式サイト掲載値（data/brand-prices.ts・2026-10-08実査）に差し替え
const pricingPlans = [
  { name: "シェイプアップ", duration: "8回・50分", price: "131,150円", note: "税込" },
  { name: "美ボディメイク", duration: "8回・50分", price: "131,150円", note: "税込" },
  { name: "短期ダイエット集中", duration: "8回・50分", price: "147,780円", note: "税込" },
  { name: "入会金", duration: "—", price: "29,800円", note: "現在無料キャンペーン" },
];

const reviewSummary = "当サイトが集計したGoogleマップの12店舗・2,130件（2026年8〜9月取得）では、全店舗の評点が4.8〜5.0でした。検索上位の第三者記事が引用しているGoogleマップの投稿では、トレーナーの指導や食事のアドバイスを評価する声がある一方、混雑で予約時間に始められない、体験後に約束の連絡がなかった、という投稿も紹介されています。上位記事のうち2本は2022〜2023年の情報で、料金・店舗数が現行の公式表記と異なります。";


const faqItems = [
  { q: "Ratの入会金はいくらですか？", a: "入会金は29,800円で、2026年10月28日時点の公式では無料と記載されています。当日入会では全コースが10%OFFになります。" },
  { q: "Ratの店舗はいくつありますか？", a: "公式トップ下部の店舗一覧では33店舗です（北海道1・関東22・東海3・関西6・九州1、2026年10月28日確認）。公式トップでは「全店舗駅から徒歩5分圏内」とされていますが、同じページの店舗紹介では中野店（徒歩10分）など徒歩6分以上の店舗も8店舗あります。" },
  { q: "Ratの口コミの評点はどのくらいですか？", a: "当サイトがGoogle Places APIで取得した12店舗・2,130件（2026年8〜9月）では、評点は4.8〜5.0、口コミ数で加重した平均は4.87でした。店舗ごとの値は本ページの「Googleマップの掲載データ」でご確認いただけます。" },
  { q: "手ぶらで通えますか？", a: "はい。ウェア・タオルは無料レンタル、ミネラルウォーターは飲み放題、シューズはレンタル可能と公式のコース内容に書かれています。" },
  { q: "シャワーはありますか？", a: "2026年10月14日時点の公式サイトのコース内容・FAQにはシャワーの記載がありません（2023年の第三者記事にはシャワールームの記載があります）。利用を希望する方は、希望店舗にご確認ください。" },
  { q: "食事指導は受けられますか？", a: "コースによります。LINE食事指導は短期ダイエット集中コース、美ボディメイクコースは「食事指導」、シェイプアップコースは食事指導の記載がありません（公式のコース内容）。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング（ヒアリング・体組成計測・アドバイス）があります。体験トレーニングは料金が店舗ごとに異なり、実施していない店舗もあると公式FAQに書かれています。" },
  { q: "退会した場合、返金はありますか？", a: "特定商取引法の表記では、入会時諸費用は理由を問わず返金不可、退会・除名に伴う返金は会員規定と集金代行会社の規定によるとされています。一方で「30日間で満足できなかったら全額返金保証」とも書かれているため、条件を契約前に書面でご確認ください。" },
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
  { name: "HABIT", href: "/review/habit/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RatReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Rat（ラット）パーソナルジム",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "パーソナルジムRat（ラット）の口コミ・評判｜料金・返金条件を検証",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rat" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          パーソナルジムRat（ラット）の口コミ・評判｜料金・返金条件を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（料金・店舗一覧を公式サイトで再確認し、検索上位記事の口コミの出典を照合）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="パーソナルジムRatとは">
          <h2 className="font-bold text-gray-900 mb-3">パーソナルジムRat（ラット）の口コミ・評判と料金：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式トップ</Src>・<Src href={SRC.service}>コース・料金</Src>・<Src href={SRC.legal}>特定商取引法に基づく表記</Src>（{CHECKED}確認）。Googleマップの数値は当サイトの集計です。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/rat.jpg" alt="Ratの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Rat 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="rat" name="Rat" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Ratの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Ratの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Ratのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Ratの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Ratの口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Rat の口コミ分析</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Ratのよくある質問</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">Ratが気になった方へ</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Rat" />
        <BrandFactCheck slug="rat" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=K7799I.1.V118185D.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            パーソナルジムRat の公式サイトはこちら
          </a>
          <img src="https://t.felmat.net/fmimp/K7799I.V118185D.Q136169A" width={1} height={1} alt="" className="inline" />
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Rat（ラット）は<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>・手ぶらで通えるパーソナルジムで、北海道・関東・東海・関西・九州に33店舗を展開しています（公式トップの店舗一覧）。ウェア・タオルの無料レンタルや7:00〜23:00の年中無休営業など、通いやすさを重視した環境が特徴です。本記事では、Ratの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratの基本情報</h2>
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

        {/* 営業時間のお知らせ */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800 font-medium mb-1">営業時間に関するお知らせ</p>
          <p className="text-xs text-blue-700">北千住店・柏店・西船橋店・高槻店・神戸三宮元町店・西宮北口店・福岡天神店の営業時間は9:00〜22:00です。店舗により営業時間が異なる場合がありますので、最新情報は公式サイトでご確認ください。</p>
        </div>

        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Ratのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratの料金</h2>
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
          <h3 className="font-bold text-gray-800 mt-8 mb-3">コース別の1回あたりの料金と食事指導（当サイト計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">コース（8回）</th>
                  <th className="px-3 py-2 text-left font-medium">1回あたり</th>
                  <th className="px-3 py-2 text-left font-medium">当日入会10%OFF後の総額／1回あたり</th>
                  <th className="px-3 py-2 text-left font-medium">食事指導</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.name} className="border-t border-gray-100">
                    <td className="px-3 py-2">{c.name}</td>
                    <td className="px-3 py-2">{yen(c.price / 8)}</td>
                    <td className="px-3 py-2">{yen(c.price * 0.9)}／{yen((c.price * 0.9) / 8)}</td>
                    <td className="px-3 py-2">{c.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.service}>コース・料金</Src>（{CHECKED}確認）。10%OFFは公式の「当日入会で全コース10%OFF」を総額に適用して計算しました。一部店舗ではコース料金が異なります。</p>

          <h3 className="font-bold text-gray-800 mt-8 mb-3">店舗一覧と最寄り駅からの徒歩分</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">公式トップの店舗紹介欄で徒歩分が掲載されている22店舗を集計しました。徒歩5分以内は14店舗、6分以上は8店舗です（当サイト集計）。公式トップの「全店舗駅から徒歩5分圏内」という表記とは一致しない店舗があります。高崎・西船橋・新宿南口・新宿三丁目・立川・北千住・大宮・川崎・柏・横浜西口・京都四条の11店舗は、店舗一覧に掲載されていますが、店舗紹介欄に徒歩分の掲載がありません。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <tbody>
                {walkMinutes.map((w) => (
                  <tr key={w.area} className="border-t border-gray-100 align-top">
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium w-20">{w.area}</th>
                    <td className="px-3 py-2 text-gray-700">{w.stores}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.top}>公式トップ</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=K7799I.1.V118185D.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
            <img src="https://t.felmat.net/fmimp/K7799I.V118185D.Q136169A" width={1} height={1} alt="" className="inline" />
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 上記は、当サイトの集計値と下記の出典を確認して要約したものです。</p>
        </section>

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rat の口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">当サイトでは、Googleマップの評点・件数を店舗単位で集計しています。あわせて、「パーソナルジムRat 口コミ」「評判」で上位に表示される記事を{CHECKED}に開き、口コミの出典と料金・店舗数の記載を公式の現行情報と照合しました。</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下は、Googleマップに投稿された口コミを当サイト編集部が読み、<strong>どんな傾向の声が多いかを要約したもの</strong>です。個別の投稿文は掲載していません（投稿内容を改変しない方針のためです）。実際の投稿は下記リンクからGoogleマップでご確認ください。検証できる数値は、上記のGoogleマップのデータ欄に掲載しています。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/Rat+%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップで口コミを見る</a></p>
          </div>
          <GmapStats slug="rat" brand="パーソナルジムRat" />

          <h3 className="font-bold text-gray-800 mb-3">検索上位記事の口コミの出典と公式現行情報との違い</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">記事</th>
                  <th className="px-3 py-2 text-left font-medium">口コミの出典</th>
                  <th className="px-3 py-2 text-left font-medium">公式の現行情報との違い</th>
                </tr>
              </thead>
              <tbody>
                {reviewCheck.map((r) => (
                  <tr key={r.source} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2">{r.source}<br /><span className="text-xs text-gray-500">{r.date}</span></td>
                    <td className="px-3 py-2 text-gray-700">{r.how}</td>
                    <td className="px-3 py-2 text-gray-700">{r.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">記事の日付・表記は{CHECKED}時点で各ページに表示されていたものです。</p>
        </section>
      <GymCta slug="rat" name="Rat" />


        <section className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratのよくある質問</h2>
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
          <h2 id="s9" className="text-xl font-bold mb-3">Ratが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、指導内容や設備をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=K7799I.1.V118185D.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
          <img src="https://t.felmat.net/fmimp/K7799I.V118185D.Q136169A" width={1} height={1} alt="" className="inline" />
        </section>

        <BrandStoreLinks brand="rat" brandName="Rat" />

        <section>
          <h2 id="s10" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
