import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "VASE（ベイス）パーソナルジムの口コミ・評判｜料金・店舗を検証",
  description:
    "VASE（ベイス）パーソナルジムの口コミ・評判を、Getfitの口コミ5件の内訳と公式情報で整理しました。公式掲載の3店舗（藤沢・八王子・亀戸）、月額制・回数券の料金と3ヶ月の総額、キャンセル規定、運営会社をまとめています。",
};

/*
 * 2026-10-26 改訂: 店舗・料金・規定は公式サイト（トップ・店舗一覧・各店舗ページ・会社概要・注意事項・FAQ・ブログ）を2026-10-26に確認した値。
 * 口コミは Getfit の VASE藤沢店ページ（5件）の内訳を当サイトが確認したもの（本文は転載しない）。
 * 公式で確認できない記述（「指名制」「退会は前月までに申告」「Web予約システム」等）と、出典のない口コミ傾向の要約は削除した。
 * 10/14時点の「恵比寿（公式記載）」は、公式の店舗一覧・トップ・サイトマップに恵比寿店がないため訂正した。
 */
const CHECKED = "2026年10月26日";

const SRC = {
  top: "https://personal-gym-vase.com/",
  stores: "https://personal-gym-vase.com/stores/",
  company: "https://personal-gym-vase.com/company/",
  fujisawaOpen: "https://personal-gym-vase.com/%e8%97%a4%e6%b2%a2%e9%a7%85%e3%81%8b%e3%82%89%e5%be%92%e6%ad%a91%e5%88%86%e3%81%ae%e3%83%91%e3%83%bc%e3%82%bd%e3%83%8a%e3%83%ab%e3%82%b8%e3%83%a0%e3%82%aa%e3%83%bc%e3%83%97%e3%83%b3/",
  getfit: "https://getfit.jp/shop/vase-fujisawa",
  spacemarket: "https://www.spacemarket.com/spaces/9djdtpwe6csdzyhu/",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社VASE FITNESS（横浜市西区）が運営する完全個室のパーソナルジムです。トレーニングに食事サポート・整体・骨格診断を組み合わせる方針を公式サイトで説明しています。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは藤沢店・八王子店・亀戸店の3店舗です（神奈川県1・東京都2）。営業時間は3店舗とも8:00〜22:00、年中無休（年末年始を除く）です。" },
  { label: "料金", value: "月額制は月4回32,000円・月6回45,000円・月8回56,000円、回数券は5回45,000円〜（いずれも税込）。入会金20,000円は体験当日の入会で無料です。" },
  { label: "契約条件", value: "月額制は最低契約期間3ヶ月・その月の回数は繰り越し不可、回数券の有効期限は6ヶ月です。月4回で始める場合、3ヶ月の総額は96,000円（入会金を除く）です。" },
  { label: "口コミ", value: "検索上位にVASEを扱う比較・口コミ記事は見当たりませんでした。口コミサイトGetfitの藤沢店ページは5件・平均4.68ですが、うち4件はジムが提供した口コミで、利用者がGetfitに投稿したものは1件です。" },
];

const basicInfo = [
  { label: "ジム名", value: "パーソナルジムVASE（公式ブログでは「ベース」と表記）" },
  { label: "運営会社", value: "株式会社VASE FITNESS（神奈川県横浜市西区みなとみらい・2023年7月21日設立・資本金200万円）" },
  { label: "店舗", value: "藤沢店・八王子店・亀戸店の3店舗（公式店舗一覧・2026年10月26日確認）" },
  { label: "営業時間", value: "8:00〜22:00・年中無休（年末年始を除く）※3店舗共通" },
  { label: "1回の時間", value: "60分（着替えなどを含む）" },
  { label: "料金", value: "月額制 月4回32,000円〜／回数券 5回45,000円〜（税込）" },
  { label: "含まれるもの", value: "食事サポート（LINE）は全プランに含まれます。ウェア・シューズ・タオルは無料レンタル、飲み物のサービスもあります" },
];

const merits = [
  {
    title: "表示料金以外の請求がないと明記している",
    desc: "公式FAQに「表示している以上の金額をご請求する事はございません」と記載されています。食事サポートは全プランに含まれ、ウェア・シューズ・タオルも無料で借りられるため、追加費用を見込む必要が少ない料金体系です。",
  },
  {
    title: "月額制と回数券を選べる",
    desc: "月4回・6回・8回の月額制と、5回・10回・15回の回数券があります。1回あたりは月8回の7,000円が最も安く、5回券の9,000円が最も高くなります。通う頻度が決まっている方は月額制、予定が不規則な方は有効期限6ヶ月の回数券が選びやすい構成です。",
  },
  {
    title: "子ども連れで通える",
    desc: "公式FAQでは、小さな子どもを連れての来店について「問題ありません」と回答しています。完全個室のため、周囲を気にせずにトレーニングを受けられる点も公式サイトで案内されています。",
  },
  {
    title: "合わない方の条件を公式に示している",
    desc: "公式サイトには「おすすめできない方」として、短期間で急激に痩せたい方、激しい運動を求める方、厳しい食事管理を希望する方、価格を最も重視する方などが挙げられています。体験前に自分の目的と合うかを判断しやすくなっています。",
  },
];

const demerits = [
  {
    title: "店舗が3店舗に限られる",
    desc: "公式の店舗一覧は藤沢（神奈川県）・八王子（東京都）・亀戸（東京都）の3店舗です。店舗間の相互利用についての記載は公式サイトに見当たりません。",
  },
  {
    title: "月額制は3ヶ月の契約が必要で、回数は繰り越せない",
    desc: "月額制の最低契約期間は3ヶ月で、有効期限は1ヶ月のため、使い切れなかった回数は翌月に繰り越せません。月4回でも3ヶ月で96,000円の支払いになります。",
  },
  {
    title: "当日のキャンセル・変更は1回分の消化になる",
    desc: "キャンセル・変更は前日の営業終了時間までで、当日は1回分のチケット消化となります（公式FAQ）。注意事項には「予約完了後の当日キャンセルは原則不可」とも記載されています。",
  },
  {
    title: "返金保証・休会・退会の規定が公開されていない",
    desc: "公式サイトのトップ・注意事項・FAQには、返金保証、休会、退会（解約）の手続きと期限の記載がありません。月額制で契約する場合は、解約の申し出期限を体験時に書面で確認されることをおすすめします。",
  },
];

// 公式トップ・各店舗ページの料金表（2026-10-26確認・3店舗とも同じ表）
const monthlyPlans = [
  { name: "月額 月4回", price: 32000, per: 8000, total3: 96000 },
  { name: "月額 月6回", price: 45000, per: 7500, total3: 135000 },
  { name: "月額 月8回", price: 56000, per: 7000, total3: 168000 },
];
const tickets = [
  { name: "回数券 5回", price: 45000, per: 9000 },
  { name: "回数券 10回", price: 85000, per: 8500 },
  { name: "回数券 15回", price: 120000, per: 8000 },
];
const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

const stores = [
  { name: "藤沢店", pref: "神奈川県", addr: "藤沢市南藤沢3-5 南藤沢山の手ビル302", access: "JR藤沢駅南口 徒歩1分／江ノ島電鉄藤沢駅 徒歩2分" },
  { name: "八王子店", pref: "東京都", addr: "八王子市子安町3-7-13 モトビル2階", access: "JR八王子駅南口 徒歩5分／京王片倉駅 徒歩12分" },
  { name: "亀戸店", pref: "東京都", addr: "江東区亀戸1-40-7 タナカビル3F", access: "JR亀戸駅 徒歩2分" },
];

const faqItems = [
  { q: "VASEの入会金はいくらですか？", a: "入会金は20,000円（税込）です。無料体験の当日に入会を決めると無料になります（公式記載・2026年10月26日確認）。" },
  { q: "VASEの料金の総額はいくらになりますか？", a: "月額制は最低契約期間が3ヶ月のため、月4回プランで3ヶ月96,000円、月6回で135,000円、月8回で168,000円です（税込・入会金を除く）。体験当日に入会しない場合は入会金20,000円が加わります。回数券は5回45,000円・10回85,000円・15回120,000円で、有効期限は6ヶ月です。" },
  { q: "VASEの店舗はどこにありますか？", a: "公式の店舗一覧に掲載されているのは、藤沢店（JR藤沢駅南口 徒歩1分）、八王子店（JR八王子駅南口 徒歩5分）、亀戸店（JR亀戸駅 徒歩2分）の3店舗です（2026年10月26日確認）。恵比寿店・目黒店は公式の店舗一覧に掲載されていません。" },
  { q: "予約のキャンセルや変更はできますか？", a: "前日の営業終了時間まで可能です。当日のキャンセル・変更は1回分のチケット消化となります（公式FAQ）。" },
  { q: "支払い方法を教えてください。", a: "クレジットカード決済または銀行振込です。月額制は原則クレジットカード決済です（公式FAQ・注意事項）。" },
  { q: "食事指導は料金に含まれますか？", a: "含まれます。公式サイトでは、食事サポートは全プランに含まれ、LINEを利用すると説明されています。厳しい食事制限は推奨しない方針です。" },
  { q: "退会や休会の条件を教えてください。", a: "公式サイトのトップ・注意事項・FAQには、退会・休会の手続きや期限の記載がありません（2026年10月26日確認）。月額制は最低契約期間が3ヶ月である点のみ明記されています。契約前に、体験時に書面で確認されることをおすすめします。" },
  { q: "無料体験の内容を教えてください。", a: "体組成計での測定とカウンセリングのあと、40分程度の体験トレーニングを行い、振り返りの後に入会を希望する方はその場で申し込めます。ウェアとシューズは無料で借りられます。体験時には骨格診断も受けられると公式サイトに記載されています。" },
  { q: "未成年でも入会できますか？", a: "公式の注意事項には「未成年者だけでのご入会はできません」と記載されています。保護者の同行や同意の要否は店舗にご確認ください。" },
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
  { name: "HABIT", href: "/review/habit/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function VaseReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "VASE（ベイス）パーソナルジムの口コミ・評判｜料金・店舗を検証",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "VASE" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          VASE（ベイス）パーソナルジムの口コミ・評判｜料金・店舗を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月26日（店舗・料金・キャンセル規定・運営会社を公式サイトで再確認し、口コミの出典と件数を確認）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="VASEとは">
          <h2 className="font-bold text-gray-900 mb-3">VASE（ベイス）パーソナルジムとは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式サイト（料金表・FAQ・注意事項）</Src>・<Src href={SRC.stores}>公式店舗一覧</Src>・<Src href={SRC.company}>会社概要</Src>・<Src href={SRC.getfit}>Getfit VASE藤沢店</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <GymCta slug="vase" name="VASE" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">VASEの基本情報</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">VASEのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">VASEの料金と3ヶ月の総額</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">予約・キャンセル・支払いの規定</a></li>
            <li><a href="#s5c" className="text-teal-600 hover:underline">VASEの店舗一覧</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">VASEの口コミ・評判（出典別の件数）</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">VASEのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">VASEが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="VASE" />
        <BrandFactCheck slug="vase" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            VASE の公式サイトはこちら
          </a>
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの基本情報</h2>
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
            会社概要の事業内容には、パーソナルジムの運営のほか、フランチャイズ加盟店の募集とピラティススタジオの運営が記載されています。藤沢店は2024年8月に開業しました（<Src href={SRC.fujisawaOpen}>公式ブログ 2024年8月27日</Src>）。同じ住所の「藤沢レンタルジムVASE」が、同社の運営で貸切ジムとしてレンタルスペース予約サイトに掲載されています（<Src href={SRC.spacemarket}>スペースマーケット</Src>）。米国の「VASA Fitness」など名前の似た別事業とは関係ありません。
          </p>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">VASEのメリット・デメリット</h2>
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
          <p className="text-xs text-gray-500 mt-4">出典: <Src href={SRC.top}>公式サイト（FAQ・注意事項・料金表）</Src>・<Src href={SRC.stores}>公式店舗一覧</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 料金 */}
        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの料金と3ヶ月の総額</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に、公式トップと3店舗の店舗ページの料金表を確認しました。3店舗とも同じ金額です。月額制は最低契約期間が3ヶ月のため、3ヶ月分の総額を当サイトで計算して併記しています。
          </p>
          <h3 className="font-bold text-gray-800 mb-2">月額制（有効期限1ヶ月・繰り越し不可・最低契約3ヶ月）</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン</th>
                  <th className="px-4 py-3 text-left font-medium">月額（税込）</th>
                  <th className="px-4 py-3 text-left font-medium">1回あたり</th>
                  <th className="px-4 py-3 text-left font-medium">3ヶ月の総額</th>
                </tr>
              </thead>
              <tbody>
                {monthlyPlans.map((p) => (
                  <tr key={p.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                    <td className="px-4 py-3 text-gray-700">{yen(p.price)}</td>
                    <td className="px-4 py-3 text-gray-700">{yen(p.per)}</td>
                    <td className="px-4 py-3 text-gray-700">{yen(p.total3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">回数券（有効期限6ヶ月）</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">プラン</th>
                  <th className="px-4 py-2 text-left font-medium">料金（税込）</th>
                  <th className="px-4 py-2 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((p) => (
                  <tr key={p.name} className="border-b border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{p.name}</td>
                    <td className="px-4 py-2 text-gray-700">{yen(p.price)}</td>
                    <td className="px-4 py-2 text-gray-700">{yen(p.per)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
            <li>・入会金は20,000円（税込）です。無料体験の当日に入会を決めると無料になります。</li>
            <li>・計算例（当サイト試算）：月4回プランで3ヶ月通う場合は96,000円です。体験当日に入会しない場合は入会金を含めて116,000円になります。</li>
            <li>・1回あたり8,000円で比べると、月4回プラン（3ヶ月で12回・毎月使い切りが前提）と15回券（6ヶ月以内に15回）が同じ単価です。予定が読みにくい方は回数券のほうが使い残しが生じにくくなります。</li>
            <li>・公式トップの本文には「月に２回からご希望のペースで」との記載がありますが、料金表に月2回のプランは掲載されていません。月2回で通う場合の料金は店舗にご確認ください。</li>
          </ul>
          <p className="text-xs text-gray-500">出典: <Src href={SRC.top}>公式サイト 料金プラン</Src>（{CHECKED}確認）。キャンペーン等により変わる場合があります。</p>
        </section>

        {/* 規定 */}
        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの予約・キャンセル・支払いの規定</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">予約</th><td className="px-4 py-3 text-gray-800">公式LINEまたはお問い合わせフォームから（公式FAQ）。注意事項では「ご予約・お問い合わせはLINEより」と案内しています</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">キャンセル</th><td className="px-4 py-3 text-gray-800">前日の営業終了時間まで。当日のキャンセル・変更は1回分のチケット消化（公式FAQ）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">支払い</th><td className="px-4 py-3 text-gray-800">クレジットカード決済・銀行振込。月額制は原則クレジットカード決済</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">契約期間</th><td className="px-4 py-3 text-gray-800">月額制は最低3ヶ月・有効期限1ヶ月（繰り越し不可）。回数券は有効期限6ヶ月</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">入会条件</th><td className="px-4 py-3 text-gray-800">未成年者だけでの入会は不可。通院中の方は医師の許可を得て受講すること（注意事項）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">返金・休会・退会</th><td className="px-4 py-3 text-gray-800">公式サイトに記載なし（{CHECKED}確認）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">入会の待ち</th><td className="px-4 py-3 text-gray-800">会員が予約を取りやすい稼働率で運営しており、会員数によっては体験や入会を待つ場合があると公式に記載されています</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.top}>公式サイト（FAQ・サービスの利用に関する注意事項）</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 店舗 */}
        <section className="mb-12">
          <h2 id="s5c" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの店舗一覧（公式掲載の3店舗）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">店舗</th>
                  <th className="px-4 py-3 text-left font-medium">所在地</th>
                  <th className="px-4 py-3 text-left font-medium">アクセス</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-3 text-gray-700">{s.pref}{s.addr}</td>
                    <td className="px-4 py-3 text-gray-700">{s.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            営業時間は3店舗とも8:00〜22:00、定休日は年末年始のみです。当サイトの2026年10月14日の記載には恵比寿店を含めていましたが、{CHECKED}時点の公式の店舗一覧・トップ・サイトマップに恵比寿店は掲載されていないため、訂正しました。出典: <Src href={SRC.stores}>公式店舗一覧</Src>。
          </p>
        </section>

        {/* 口コミ */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEの口コミ・評判（出典別の件数）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に「VASE パーソナルジム 口コミ」「パーソナルジムVASE 評判」などで検索し、上位に表示されるページを確認しました。VASEを個別に取り上げた比較記事や口コミ記事は上位に見当たらず、件数を確認できた口コミは次のとおりです。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">出典</th>
                  <th className="px-4 py-2 text-left font-medium">件数・評点</th>
                  <th className="px-4 py-2 text-left font-medium">内訳・注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-2 text-gray-800"><Src href={SRC.getfit}>Getfit「VASE（ベース）藤沢店」</Src></td>
                  <td className="px-4 py-2 text-gray-700">5件・平均4.68</td>
                  <td className="px-4 py-2 text-gray-700">利用者がGetfitに投稿した口コミ1件と、ジムが提供した口コミ4件の合計です。ジム提供の4件は、公式サイトの「お客様の声」と同じ内容です。ページの更新表示は2026年3月13日</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-2 text-gray-800">公式サイト「お客様の声」</td>
                  <td className="px-4 py-2 text-gray-700">6件（評点なし）</td>
                  <td className="px-4 py-2 text-gray-700">ジムが掲載している声です。「結果には個人差があり、効果を保証するものではありません」と注記されています</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-2 text-gray-800"><Src href={SRC.spacemarket}>スペースマーケット「藤沢レンタルジムVASE」</Src></td>
                  <td className="px-4 py-2 text-gray-700">1件・5.0</td>
                  <td className="px-4 py-2 text-gray-700">同じ住所の貸切ジム（トレーナーなし）としての評価で、パーソナルトレーニングの口コミではありません</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">利用者がGetfitに投稿した口コミ（1件）の項目別評価</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            2025年7月22日投稿、入会時期は2025年2月〜5月頃、実施期間は約2ヶ月の口コミです。項目別の評価は、全体満足度・立地・トレーナー・施設・予約の取りやすさが5点、価格が3点でした。価格については、相場と比べて安いとしつつ、通い続ける場合の費用負担を挙げています。予約は、トレーニング後に数回先までまとめて取る運用と記載されています。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            なお、Getfitに掲載されている料金（回数券5回42,500円・10回80,000円・15回112,500円、体験5,000円）は、公式サイトの現行料金（5回45,000円・10回85,000円・15回120,000円、体験無料）と一致しません。料金は公式サイトの表示をご確認ください。
          </p>
          <p className="text-xs text-gray-500">※ 第三者が投稿した口コミは1件のみのため、評判の傾向を判断する材料としては不十分です。体験時に、トレーナーとの相性や予約の取りやすさをご自身でご確認ください（{CHECKED}閲覧）。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="vase" name="VASE" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">VASEのよくある質問</h2>
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
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/I94614.91387816.Q136169A" width={300} height={250} alt="VASEパーソナルジム" className="rounded-lg shadow-sm" />
          </a>
        </div>

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">VASEが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">無料体験では、体組成の測定・カウンセリング・40分程度の体験トレーニングを受けられます。</p>
          <a href="https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            VASEの無料カウンセリングに申し込む
          </a>
        </section>

        {/* 関連ジム */}
        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <p className="text-sm text-gray-700 mb-3">料金を他のブランドと比べる場合は、<Link href="/price/" className="text-teal-600 underline">主要ブランドの公表料金一覧</Link>もご覧ください。</p>
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
