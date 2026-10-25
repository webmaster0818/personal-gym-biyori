import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import GmapStats from "@/components/GmapStats";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "FiT24（フィット24）の口コミ・評判｜月会費・店舗ごとの評価を検証",
  description:
    "FiT24（フィット24）の口コミ・評判を、オリコン調査の利用者コメント18件のテーマ別集計と公式情報で整理しました。プラン別料金（通常月7,678円〜）、入会時費用、休会・退会の条件、公式店舗検索の122店舗の分布をまとめています。",
};

/*
 * 2026-10-25 改訂: 料金・店舗数・休会/退会・設備は、公式サイト（店舗検索データ shop/data/shop.js・全122店舗の店舗ページ・
 * よくある質問 /qa/・利用規約の新旧対照表）を2026-10-25に確認した値。口コミはオリコンのFiT24ページの18件を当サイトがテーマ別に数えたもの（本文は転載しない）。
 * 出典の確認できない記述（「マシンが新しい」「快活CLUB併設の店舗が多い」「説明書が設置」等）は削除した。
 */
const CHECKED = "2026年10月25日";

const summary = [
  { label: "どんなジムか", value: "株式会社快活フロンティア（AOKIグループ）が運営する24時間営業・セルフ型のフィットネスジムです。トレーナーがつくパーソナルジムではありません。" },
  { label: "月会費", value: "通常プランは月6,980円（税込7,678円）の店舗が115店舗、7,480円（税込8,228円）の店舗が7店舗です（全122店舗の店舗ページを確認）。" },
  { label: "入会時", value: "事務手数料と月会費2ヶ月分（初月は日割り）を一括でクレジットカード決済します。現金払いには対応していません。" },
  { label: "店舗数", value: "公式の店舗検索に122店舗・30都道府県が掲載されています（うち2店舗はオープン前）。" },
  { label: "退会", value: "毎月10日までにマイページで手続きを完了すると当月末、11日以降は翌月末の退会です。電話・メールでは受け付けていません。" },
  { label: "口コミ", value: "オリコン顧客満足度調査の総合得点は72.0点です。利用者コメント18件では、良い点は「設備・マシン」「清潔さ」、気になる点は「他の利用者のマナー」に関するものが最多でした。" },
];

const basicInfo = [
  { label: "ジム名", value: "快活クラブFiT24（フィット24）" },
  { label: "運営会社", value: "株式会社快活フロンティア（AOKIグループ）" },
  { label: "タイプ", value: "24時間営業のセルフ型フィットネスジム（トレーナーの専属指導なし）" },
  { label: "月会費", value: "通常プラン月7,678円〜（税込）。家族・U22・高校生プランあり" },
  { label: "店舗", value: "122店舗・30都道府県（公式店舗検索・2026年10月25日確認）" },
  { label: "主な設備", value: "HAMMER STRENGTH中心のマシン・フリーウェイト・有酸素マシン・ストレッチエリア・InBody・シャワー" },
];

const merits = [
  {
    title: "24時間・年中無休で利用できる",
    desc: "全122店舗の店舗ページのうち107店舗に「24時間営業、年中無休」と記載されています（残る15店舗は営業時間の欄がありません）。シャワーも24時間利用でき、追加料金はかかりません（公式FAQ）。",
  },
  {
    title: "月会費が税込7,678円から",
    desc: "通常プランは122店舗中115店舗が月6,980円（税込7,678円）です。家族プラン（月3,980円・税抜）、U22プラン（月4,980円・税抜）、高校生プラン（親権者が会員なら0円）も全店の料金表に掲載されています。",
  },
  {
    title: "マシンとInBodyが全店に",
    desc: "公式はHAMMER STRENGTHを中心としたマシンをそろえていると説明しています。店舗ページでは122店舗中121店舗にパワーラックとスミスマシンの記載があり、体組成計InBodyは会員なら無料で測定できます。",
  },
  {
    title: "入会後のトレーニングサポートがある",
    desc: "入会後にマシンの使い方などを教わる「スタサポ」を、誰でも無料で受けられると運営会社のリリースに記載されています。",
  },
];

const demerits = [
  {
    title: "トレーナーの指導は受けられない",
    desc: "セルフ型のため、毎回のフォーム指導やメニュー作成はありません。食事指導もないため、ダイエットの伴走が必要な方はパーソナルジムとの比較をおすすめします。",
  },
  {
    title: "スタッフがいない時間帯がある",
    desc: "見学はスタッフ対応時間内に限られ、夜間の見学はできません（公式FAQ）。2026年7月開業の立川幸町店のスタッフアワーは10:00〜20:00です（同社リリース）。オリコンの利用者コメントにも、スタッフ不在の時間帯に不安を感じるという声があります。",
  },
  {
    title: "無料ロッカー・タオルの用意がない",
    desc: "無料のロッカーはなく、鍵のない荷物置き場があります（有料の契約ロッカーは月1,000円・税抜）。シャワーにはリンスインシャンプーとボディソープがあり、タオルの用意はありません（公式FAQ）。",
  },
  {
    title: "入会時にまとまった支払いが必要",
    desc: "入会時に事務手数料と月会費2ヶ月分を一括で支払います。支払い方法はクレジットカードのみです。",
  },
];

// 店舗ページの料金表（2026-10-25 全122店舗で確認）。税抜表示のため、税込は当サイトが×1.1で計算（高校生プランのみ公式が税込を表示）
const plans = [
  { name: "通常プラン", ex: "6,980円", inc: "7,678円", note: "115店舗。7店舗は7,480円（税込8,228円）" },
  { name: "家族プラン", ex: "3,980円", inc: "4,378円", note: "全122店舗で同額。利用条件は店舗でご確認ください" },
  { name: "U22プラン", ex: "4,980円", inc: "5,478円", note: "全122店舗で同額" },
  { name: "高校生プラン（親権者が会員）", ex: "0円", inc: "0円", note: "全122店舗で同額" },
  { name: "高校生プラン（親権者が会員でない）", ex: "2,980円", inc: "3,278円", note: "税込は公式表示" },
];

const options = [
  { name: "安心プラスプレミアム", ex: "900円", inc: "990円" },
  { name: "安心プラススタンダード", ex: "500円", inc: "550円" },
  { name: "水素水", ex: "1,000円", inc: "1,100円" },
  { name: "契約ロッカー（小）", ex: "1,000円", inc: "1,100円" },
  { name: "日焼けマシン", ex: "5,000円", inc: "5,500円" },
  { name: "快活CLUB飲み放題カフェ", ex: "1,500円", inc: "1,650円" },
];

const higherPriceStores = "BiVi仙台駅東口店・長野若槻店・長野南バイパス店・長野昭和通り店・千曲屋代店・西宮丸橋店・夙川店";

// 公式店舗検索データ（shop/data/shop.js）に掲載のFiT24 122店舗の都道府県別内訳（2026-10-25 集計）
const prefCounts: [string, number][] = [
  ["埼玉県", 16], ["神奈川県", 14], ["千葉県", 12], ["北海道", 7], ["茨城県", 7], ["東京都", 7], ["静岡県", 6],
  ["長野県", 5], ["兵庫県", 5], ["宮城県", 4], ["群馬県", 4], ["福岡県", 4], ["沖縄県", 4], ["愛知県", 3],
  ["大阪府", 3], ["熊本県", 3], ["山形県", 2], ["福島県", 2], ["山口県", 2], ["高知県", 2], ["青森県", 1],
  ["岩手県", 1], ["秋田県", 1], ["新潟県", 1], ["石川県", 1], ["福井県", 1], ["滋賀県", 1], ["和歌山県", 1],
  ["広島県", 1], ["香川県", 1],
];

// オリコン「FiT24 24時間ジムの評判・口コミ」の利用者コメント18件（良い点12・気になる点6）を当サイトがテーマ別に数えたもの。
// 1件のコメントが複数のテーマに触れている場合は、それぞれに数えている（合計はコメント数と一致しない）。
const goodThemes: [string, number][] = [
  ["マシン・器具が充実している、使いやすい", 5],
  ["清潔さ・衛生面（掃除・消毒液・整理整頓）", 4],
  ["シャワー・水素水・ロッカーなどの付帯設備やサービス", 3],
  ["24時間いつでも利用できる", 2],
  ["通いやすい場所にある", 2],
  ["料金と設備のバランスがよい、安い", 2],
  ["スペースに余裕がある、静かに自分のペースで使える", 2],
  ["スタッフが親切", 1],
  ["入店時のセキュリティがしっかりしている", 1],
];
const badThemes: [string, number][] = [
  ["ルールやマナーを守らない利用者がいる、注意されない", 3],
  ["タオル・衛生用品など備品の提供が変わった", 2],
  ["スタッフの対応、スタッフ不在時の不安", 2],
  ["リニューアル後にマシンの間隔やストレッチスペースが狭くなった", 1],
  ["女性用シャワーの数が少ない", 1],
];

const faqItems = [
  { q: "FiT24の入会時にかかる費用はいくらですか？", a: "公式FAQによると、新規契約時に事務手数料と月会費2ヶ月分（初月と翌月）を一括で請求されます。初月は利用開始日からの日割りです。事務手数料は2026年7月の新店リリースで2,200円（税込）と記載されています。通常プラン（税込7,678円）で月初に利用を始める場合、7,678円×2＋2,200円＝17,556円が目安です（キャンペーン適用時は異なります）。" },
  { q: "退会はいつまでに手続きすればよいですか？", a: "利用規約では、毎月10日までに退会手続きを完了すると当月末、11日以降は翌月末の退会となります。手続きはマイページの「契約管理」から行い、電話・メールでの申し出は受け付けていません。退会日までの会費は利用の有無にかかわらず発生します。" },
  { q: "休会はできますか？", a: "できます。毎月10日までの手続きで翌月1日から休会となり、休会中は管理費として月1,100円（税込）がかかります。利用開始から2ヶ月以内、キャンペーンの在籍条件期間内、法人団体プランなどは休会できません（公式FAQ）。休会中は施設を利用できず、復帰時はあらためてプラン契約が必要です（利用規約）。" },
  { q: "他の店舗も利用できますか？", a: "公式FAQでは「契約内容に応じて所属店舗以外の全国のFiT24店舗を利用できる」とされ、コミコミプラン等の店舗限定プランは所属店舗のみの利用です。公式トップには「全店相互利用OK」の画像と「プランやキャンペーンによっては相互利用できないプランもございます」という記載の両方があるため、契約するプランが対象かをご確認ください。" },
  { q: "シャワーはありますか？", a: "公式FAQでは、シャワーは24時間・追加料金なしで利用でき、店舗により4〜6室あると説明されています。リンスインシャンプーとボディソープがあり、タオルの用意はありません。なお、店舗ページの施設案内に「シャワー・更衣室」の写真がある店舗は122店舗中109店舗で、残る13店舗はページ上で確認できなかったため、通う店舗でご確認ください。" },
  { q: "初心者でも利用できますか？", a: "セルフ型ですが、入会後にマシンの使い方などを教わる無料サポート「スタサポ」があると運営会社のリリースに記載されています。無料体験会（施設説明・施設利用体験・料金説明）は全店で実施しており、事前予約制です。毎回の指導を受けたい方にはパーソナルジムが向いています。" },
  { q: "見学はできますか？", a: "スタッフ対応時間内であれば、予約なしで見学できます。夜間の見学は受け付けていません（公式FAQ）。" },
  { q: "店舗はどこにありますか？", a: "公式の店舗検索には122店舗・30都道府県が掲載されています（2026年10月25日確認）。最も多いのは埼玉県16店舗、神奈川県14店舗、千葉県12店舗です。東京都は7店舗で、都心の繁華街ではなく武蔵境・瑞江・立川などに出店しています。" },
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
  { name: "カーブス", href: "/review/curves/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

// noindex でない店舗ページのみ（noindex の12ページは除外）
const areaPages = [
  { name: "町田エリア", href: "/review/fit24/machida/" },
  { name: "船橋エリア", href: "/review/fit24/funabashi/" },
  { name: "札幌エリア", href: "/review/fit24/sapporo/" },
  { name: "仙台エリア", href: "/review/fit24/sendai/" },
];

const SRC = {
  qa: "https://www.fit24.jp/qa/",
  shop: "https://www.fit24.jp/shop.html",
  top: "https://www.fit24.jp/top.html",
  rule202512: "https://www.fit24.jp/information/20251201_fit24.html",
  rule202607: "https://www.fit24.jp/information/20260701_fit24.html",
  payment: "https://www.fit24.jp/information/fit24_payment.html",
  release: "https://prtimes.jp/main/html/rd/p/000000145.000075275.html",
  oricon: "https://life.oricon.co.jp/rank_fitness/24hours/company/fit24/",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

export default function Fit24Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "FiT24（フィット24）の口コミ・評判｜月会費・店舗ごとの評価を検証",
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
        "dateModified": "2026-10-25"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FiT24" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FiT24（フィット24）の口コミ・評判｜月会費・店舗ごとの評価を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月25日（料金・店舗数・休会/退会の条件・設備を公式サイトで再確認し、口コミをテーマ別に集計）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="FiT24とは">
          <h2 className="font-bold text-gray-900 mb-3">FiT24（フィット24）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.shop}>公式店舗検索・各店舗ページ</Src>・<Src href={SRC.qa}>公式FAQ</Src>・<Src href={SRC.rule202512}>利用規約（2025年12月改定）</Src>・<Src href={SRC.oricon}>オリコン顧客満足度調査</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/fit24.jpg" alt="FiT24の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">FiT24 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="fit24" name="FiT24" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">FiT24の基本情報</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">FiT24のメリット・デメリット</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">FiT24のプラン別料金・入会時費用</a></li>
            <li><a href="#s7b" className="text-teal-600 hover:underline">休会・退会の条件</a></li>
            <li><a href="#s7c" className="text-teal-600 hover:underline">設備・相互利用</a></li>
            <li><a href="#s7d" className="text-teal-600 hover:underline">店舗数と都道府県別の分布</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">FiT24の口コミ・評判（出典別の件数とテーマ別集計）</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">FiT24のよくある質問</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">FiT24が気になった方へ</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">FiT24のエリア別ページ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="FiT24" />
        <BrandFactCheck slug="fit24" />
        <GmapStats slug="fit24" brand="FiT24" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FiT24 の公式サイトはこちら
          </a>
        </p>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24の基本情報</h2>
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
          <p className="text-xs text-gray-500 mt-3">「JOYFIT24」「ANY FIT24」など名前の似た別ブランドの24時間ジムがあります。口コミを調べる際は、ブランド名が「FiT24」であることをご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FiT24のメリット・デメリット</h2>
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
          <p className="text-xs text-gray-500 mt-4">出典: <Src href={SRC.qa}>公式FAQ</Src>・<Src href={SRC.shop}>公式店舗ページ</Src>・<Src href={SRC.release}>立川幸町店オープンのリリース（2026年7月1日）</Src>。</p>
        </section>

        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24のプラン別料金・入会時費用</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に、公式の店舗検索に掲載されている全122店舗の店舗ページを開き、料金表の金額を集計しました。家族・U22・高校生プランとオプションは全店で同じ金額です。通常プランは115店舗が月6,980円、次の7店舗が月7,480円（税込8,228円）です：{higherPriceStores}。
          </p>
          <h3 className="font-bold text-gray-800 mb-2">プラン料金（月額）</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン</th>
                  <th className="px-4 py-3 text-left font-medium">税抜（公式表示）</th>
                  <th className="px-4 py-3 text-left font-medium">税込</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                    <td className="px-4 py-3 text-gray-700">{p.ex}</td>
                    <td className="px-4 py-3 text-gray-700">{p.inc}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">有料オプション（月額）</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">オプション</th>
                  <th className="px-4 py-2 text-left font-medium">税抜（公式表示）</th>
                  <th className="px-4 py-2 text-left font-medium">税込</th>
                </tr>
              </thead>
              <tbody>
                {options.map((o) => (
                  <tr key={o.name} className="border-b border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{o.name}</td>
                    <td className="px-4 py-2 text-gray-700">{o.ex}</td>
                    <td className="px-4 py-2 text-gray-700">{o.inc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            ※ 店舗ページの料金表は税抜で表示され、税込の金額は画面上で読み込まれる形式のため、税込は当サイトが税抜×1.1で計算しました（高校生プランは公式が税込3,278円と表示、飲み放題カフェは公式FAQに月額1,650円と記載）。公式には「一部オプションのご提供がない店舗もございます」とあります。安心プラスは施設内でのケガや盗難にお見舞金が出るオプションです。
          </p>
          <h3 className="font-bold text-gray-800 mb-2">入会時に支払う費用</h3>
          <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
            <li>・新規契約時に<strong>事務手数料＋月会費2ヶ月分（初月と翌月）</strong>を一括で請求されます。初月は利用開始日からの日割りです（<Src href={SRC.qa}>公式FAQ</Src>）。</li>
            <li>・事務手数料は、2026年7月の新店リリースに<strong>2,200円（税込）</strong>と記載されています（<Src href={SRC.release}>リリース</Src>）。入会金の記載はありません。</li>
            <li>・支払いはクレジットカードのみで、毎月20日に翌月分が請求されます（<Src href={SRC.payment}>会費等の決済について</Src>）。</li>
            <li>・計算例（当サイト試算）：通常プラン税込7,678円の店舗で月初に利用を始める場合、7,678円×2＋2,200円＝<strong>17,556円</strong>が目安です。入会キャンペーンを使う場合は金額と在籍条件が変わります（立川幸町店のオープン時は6ヶ月以上の在籍が条件でした）。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 id="s7b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24の休会・退会の条件</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-2">休会</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・毎月10日までの手続きで、翌月1日から休会</li>
                <li>・休会中は管理費が月1,100円（税込）。期間は無期限</li>
                <li>・利用開始から2ヶ月以内、キャンペーンの在籍条件期間内、法人団体プランは休会不可</li>
                <li>・休会中は施設を利用できません（1dayチケットでの利用は可）</li>
                <li>・復帰は10日までの手続きで翌月1日から。復帰時はその時点で申し込めるプランを契約</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-2">退会</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・マイページの「契約管理」→「退会」で手続き（電話・メールは不可）</li>
                <li>・毎月10日までに手続き完了で当月末、11日以降は翌月末に退会</li>
                <li>・退会日までの会費は、利用の有無にかかわらず支払いが必要</li>
                <li>・未納がある場合は、完納するまで退会手続きは完了しません</li>
                <li>・最終の支払いは退会前月20日の決済分</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.qa}>公式FAQ</Src>、<Src href={SRC.rule202512}>FiT24利用規約 2025年12月1日改定（第10条・第11条）</Src>、<Src href={SRC.rule202607}>2026年7月1日改定</Src>（第11条の変更なし・休会中の利用不可を追記）。{CHECKED}確認。
          </p>
        </section>

        <section className="mb-12">
          <h2 id="s7c" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24の設備・相互利用</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">シャワー</th><td className="px-4 py-3 text-gray-800">24時間・追加料金なし・店舗により4〜6室。リンスインシャンプーとボディソープあり、タオルなし（公式FAQ）。店舗ページの施設案内に「シャワー・更衣室」の写真がある店舗は122店舗中109店舗</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">マシン</th><td className="px-4 py-3 text-gray-800">パワーラック・スミスマシンの記載は122店舗中121店舗。マシンの種類・台数は店舗ごとに異なります</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">InBody</th><td className="px-4 py-3 text-gray-800">全店に設置、会員は無料で測定可（リリース・全122店舗の店舗ページに記載）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">ロッカー</th><td className="px-4 py-3 text-gray-800">無料ロッカーなし（鍵のない荷物置き場と防犯カメラあり）。契約ロッカーは所属店舗で月1,000円（税抜）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">駐車場</th><td className="px-4 py-3 text-gray-800">公式トップの画像は「駐車場完備」、本文は「一部駐車場のご用意がない店舗がございます」</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">相互利用</th><td className="px-4 py-3 text-gray-800">契約内容に応じて全国のFiT24を利用可。コミコミプラン等の店舗限定プランは所属店舗のみ（公式FAQ）。店舗限定プランでも1dayチケットで他店舗を利用可</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">快活CLUB</th><td className="px-4 py-3 text-gray-800">月額1,650円（税込）のオプションで、快活CLUBの飲み放題カフェ（オープンシート）を1日1回1時間無料で利用可</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.qa}>公式FAQ</Src>・<Src href={SRC.top}>公式トップ</Src>・<Src href={SRC.shop}>公式店舗ページ</Src>（{CHECKED}確認）。写真欄が確認できなかった13店舗にシャワーがないとは限りません。</p>
        </section>

        <section className="mb-12">
          <h2 id="s7d" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24の店舗数と都道府県別の分布</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            公式の店舗検索データには、{CHECKED}時点でFiT24（ジム）が<strong>122店舗・30都道府県</strong>掲載されています。このうち春日井店（11月1日）と大阪千里店（12月10日）はオープン予定の店舗です。運営会社のリリースでは、2026年7月開業の立川幸町店が「全国115店舗目」とされています。同じ公式サイトにある「FiT24インドアゴルフ」は別サービスのため、数に含めていません。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm">
            {prefCounts.map(([pref, n]) => (
              <div key={pref} className="flex justify-between rounded border border-gray-200 px-3 py-1.5">
                <span className="text-gray-700">{pref}</span>
                <span className="font-bold text-gray-900">{n}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            関東の1都6県で60店舗（約49%）です。東京都の7店舗は武蔵境駅前・瑞穂・瑞江駅前・町田忠生・調布国領・立川幸町・大田千鳥で、渋谷・新宿・池袋などの都心には出店していません。お近くの店舗は<Src href={SRC.shop}>公式の店舗検索</Src>でご確認ください。
          </p>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24の口コミ・評判（出典別の件数とテーマ別集計）</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">出典</th>
                  <th className="px-4 py-2 text-left font-medium">件数・内容</th>
                  <th className="px-4 py-2 text-left font-medium">集計方法・時期</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-2 text-gray-800"><Src href={SRC.oricon}>オリコン顧客満足度調査「24時間ジム」</Src></td>
                  <td className="px-4 py-2 text-gray-700">総合得点72.0点。利用者コメント18件（良い点12件・気になる点6件）</td>
                  <td className="px-4 py-2 text-gray-700">過去3年以内に24時間ジムを利用し料金を把握している3,438人の調査。調査年はページに表示なし</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-2 text-gray-800">Googleマップ</td>
                  <td className="px-4 py-2 text-gray-700">店名が「FiT24」で始まる13店舗・口コミ469件</td>
                  <td className="px-4 py-2 text-gray-700">当サイトがGoogle Places APIで取得（2026年8月29日〜9月8日）。上の「Googleマップの掲載データ」参照</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            オリコンのFiT24ページに掲載されている利用者コメント18件を、当サイトが内容のテーマ別に数えました。コメント本文は転載せず、触れている内容だけを分類しています。1件のコメントが複数のテーマに触れている場合は、それぞれに数えています。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">良い点（12件）のテーマ</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {goodThemes.map(([t, n]) => (
                  <li key={t} className="flex justify-between gap-3"><span>・{t}</span><span className="font-bold shrink-0">{n}件</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
              <h3 className="font-bold text-orange-800 mb-2">気になる点（6件）のテーマ</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {badThemes.map(([t, n]) => (
                  <li key={t} className="flex justify-between gap-3"><span>・{t}</span><span className="font-bold shrink-0">{n}件</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            オリコンの評価項目では「通いやすさ」が79.3点で最も高く、「施設の充実さ」が65.6点で最も低くなっています。一方、コメントの良い点では設備・マシンへの言及が最も多く、店舗によって受け止め方が分かれていることがうかがえます。気になる点で多い利用者のマナーやスタッフ不在時の不安は、セルフ型24時間ジムに共通しやすい論点です。入会前に、通う予定の店舗をスタッフ対応時間内に見学されることをおすすめします。
          </p>
          <p className="text-xs text-gray-500 mt-3">※ 18件は少数のサンプルで、評価には個人差があります。分類は当サイトによるもので、オリコンの見解ではありません（{CHECKED}閲覧）。</p>
        </section>
      <GymCta slug="fit24" name="FiT24" />


        <section className="mb-12">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FiT24のよくある質問</h2>
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
        <section className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/M11588F.Q159605W.Q136169A" alt="FiT24" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s11" className="text-xl font-bold mb-3">FiT24が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">無料体験会は全店で実施しています（事前予約制）。通う予定の店舗の設備や混雑状況をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 id="s12" className="text-lg font-bold mb-4">FiT24のエリア別ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {areaPages.map((s) => (
              <Link key={s.href} href={s.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">各エリアの正式な店舗名・住所・月会費は、<Src href={SRC.shop}>公式の店舗検索</Src>でご確認ください。</p>
        </section>

        <section>
          <h2 id="s13" className="text-lg font-bold mb-4">他のジムも見る</h2>
          <p className="text-sm text-gray-700 mb-3">トレーナーの指導を受けたい方は、<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>や<Link href="/price/" className="text-teal-600 underline">主要ブランドの公表料金一覧</Link>もご覧ください。</p>
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
