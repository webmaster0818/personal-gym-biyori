import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "CoCoDakara Body Design（ココダカラ）の口コミ・評判｜料金を検証",
  description:
    "CoCoDakara Body Design（ココダカラ）の口コミ・評判と料金を公式情報で検証します。麻布十番店1店舗の1回あたり料金、初月の費用、食事指導が別料金である点、繰越・解約・キャンセルの規定、第三者の口コミ記事の有無をまとめています。",
};

/*
 * 2026-10-28 改訂: 公式トップ・料金ページ・よくある質問を2026-10-28に確認。
 * 訂正: 「食事指導が含まれており追加費用が不要」→ 食事指導は2週間15,400円の別料金（料金ページ）。
 *       「無料カウンセリング」→ 公式は初回体験4,620円（当日入会で0円）。体験前の相談は問い合わせで可能（FAQ）。
 *       「解約はカウンセリングで確認」→ 料金ページのFAQ（23日までの申出で当月末解約）。
 * 削除: 出典のない口コミ要約（「完全個室で人目を気にせず」等）、公式トップ・料金・FAQで確認できない「隠れ家的」「完全個室」の断定（ギャラリー等の他ページは未確認のため、記載の有無は断定しない）。
 * 追加: 1回あたり料金、初月の費用試算、繰越・技術料・持ち物（裸足でのトレーニング）・トレーナーの選び方、第三者の口コミ記事の確認結果。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://bodydesign.cocodakara.net/",
  price: "https://bodydesign.cocodakara.net/price",
  faq: "https://bodydesign.cocodakara.net/faq",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "東京都港区東麻布の麻布十番店1店舗のパーソナルジムです（麻布十番駅・赤羽橋駅から徒歩約4分）。1回50分で、姿勢・可動域・動作の評価をもとにしたトレーニングのほか、ストレッチ整体、マタニティ・産後トレーニングのプログラムがあります。" },
  { label: "料金", value: "都度払いは1回10,780円、月額制は月4回39,600円（1回9,900円）・月8回77,440円（1回9,680円）です（税込）。学生料金もあります。入会金19,800円は体験当日の入会で9,900円です。" },
  { label: "食事指導", value: "トレーニング料金には含まれず、食事指導（栄養士監修）は2週間15,400円の別料金です。" },
  { label: "返金・解約", value: "料金ページ・FAQに返金保証の記載はありません。月額制は毎月23日までの申出で当月末に解約できます。" },
  { label: "口コミ", value: "検索上位で、件数や出典を示した第三者の口コミ記事・口コミサイトのページは見つかりませんでした（当サイト調べ）。公式トップに利用者の声が掲載されていますが、運営者による掲載です。Googleマップの口コミで最新の評価をご確認ください。" },
  { label: "向いている方", value: "麻布十番周辺に通える方で、月会費のかからない都度払いで回数を調整しながら通いたい方に向いています。" },
];

const basicInfo = [
  { label: "ジム名", value: "CoCoDakara Body Design 麻布十番店（ココダカラ ボディデザイン）" },
  { label: "所在地", value: "東京都港区東麻布2-22-5（麻布十番駅・赤羽橋駅 徒歩約4分）" },
  { label: "1回の時間", value: "50分（初回体験はトレーニング45分を含め約75分）" },
  { label: "プログラム", value: "機能改善ボディメイク / ストレッチ整体 / マタニティトレーニング / 産後トレーニング" },
  { label: "持ち物", value: "トレーニングウェア上下・飲み物・タオル。裸足でトレーニングするためシューズは不要（希望すれば着用可）" },
  { label: "支払い", value: "クレジットカード・電子マネーのみ（現金不可）" },
  { label: "年齢", value: "条件なし。18歳未満は親権者の同意が必要" },
];

const strengths = [
  {
    title: "月会費のかからない都度払いを選べる",
    desc: "入会後は、1回10,780円（税込）の都度払いと、月4回・月8回の月額制から選べます。公式FAQでは、運動を始めたばかりの方は週1回から、体のメンテナンスが目的の方は月1回からなど、目的に合わせた頻度を提案するとしています。",
  },
  {
    title: "姿勢・可動域・動作の評価から始めるトレーニング",
    desc: "初回体験では、InBody（体組成）・姿勢・可動域・動作を組み合わせて評価し、目的までの優先順位を整理します（公式トップ）。リハビリを得意とするトレーナーが在籍しており、けがや痛みがある場合は体験前に相談できます（公式FAQ）。",
  },
  {
    title: "トレーナーを予約ごとに選べる",
    desc: "予約時に毎回トレーナーを選べ、過去のカウンセリング・トレーニング内容はトレーナー間で共有されます（公式FAQ）。予約はウェブの予約システムで24時間受け付けており、締切は開始2時間前です。",
  },
];

const merits = [
  {
    title: "月額制の未利用回数を翌月に繰り越せる",
    desc: "月4回コースは2回分、月8回コースは4回分まで、翌月末を期限に繰り越せます（料金ページ）。予定が読みにくい方でも回数を無駄にしにくい仕組みです。",
  },
  {
    title: "学生料金がある",
    desc: "学生証の提示で、月4回37,400円（1回9,350円）・月8回71,280円（1回8,910円）になります（税込・料金ページ）。",
  },
  {
    title: "マタニティ・産後のプログラムがある",
    desc: "妊娠中・産後の体調に合わせて、呼吸・姿勢・可動域を整えるプログラムが用意されています（公式トップ）。",
  },
];

const demerits = [
  {
    title: "店舗は麻布十番店の1店舗のみ",
    desc: "公式サイトに掲載されている店舗は麻布十番店のみです。出張トレーニングは店舗から直線距離3km以内まで料金が定められています（2km以内2,200円・3km以内2,750円）。",
  },
  {
    title: "食事指導・技術料は別料金になる場合がある",
    desc: "食事指導は2週間15,400円の別料金です。また、担当トレーナーによって「技術料」が別途必要になる場合があると料金ページに記載されています。予約前に総額をご確認ください。",
  },
  {
    title: "体験は有料・直前のキャンセルに費用がかかる",
    desc: "初回体験は4,620円（当日入会で0円）です。開始2時間前を過ぎた変更・キャンセルは、都度払いでは料金の50%、月額制では1回分の消化となります。",
  },
];

// 2026-10-28: 公式料金ページ（税込）を確認
const pricingPlans = [
  { name: "都度払い", duration: "50分", price: "10,780円/回", note: "税込・月会費なし" },
  { name: "月4回", duration: "50分", price: "39,600円/月", note: "税込・1回9,900円（学生37,400円）" },
  { name: "月8回", duration: "50分", price: "77,440円/月", note: "税込・1回9,680円（学生71,280円）" },
  { name: "入会金", duration: "—", price: "19,800円", note: "税込・体験当日の入会で9,900円" },
  { name: "初回体験", duration: "約75分", price: "4,620円", note: "税込・当日入会で0円" },
  { name: "食事指導（栄養士監修）", duration: "2週間", price: "15,400円", note: "税込・別料金" },
];

// 初月の費用試算（税込・当サイト計算）
const firstMonth = [
  { label: "体験当日に入会・月4回", items: "体験0円＋入会金9,900円＋月額39,600円", total: 49500 },
  { label: "体験当日に入会・月8回", items: "体験0円＋入会金9,900円＋月額77,440円", total: 87340 },
  { label: "後日に入会・月4回", items: "体験4,620円＋入会金19,800円＋月額39,600円", total: 64020 },
  { label: "体験当日に入会・月4回＋食事指導2週間", items: "体験0円＋入会金9,900円＋月額39,600円＋15,400円", total: 64900 },
];

const reviewSummary = "当サイトでは2026年10月28日に「ココダカラ ボディデザイン 口コミ」「CoCoDakara Body Design 麻布十番」で検索し、上位のページを確認しました。CoCoDakara Body Designについて、口コミの件数・投稿日・出典を示した第三者の記事や口コミサイトのページは見つかりませんでした。公式トップには「お客様の声」として、年代・職業などの属性つきの声が掲載されていますが、運営者が掲載しているものです。評価の確認には、Googleマップの店舗ページをご利用ください。";

const faqItems = [
  { q: "CoCoDakara Body Designの入会金はいくらですか？", a: "入会金は19,800円（税込）で、体験当日に入会すると9,900円です。都度払い・月額制のどちらを選ぶ場合も入会が必要です（料金ページ・2026年10月28日確認）。" },
  { q: "食事指導は料金に含まれますか？", a: "含まれません。食事指導（栄養士監修）は2週間15,400円（税込）の別料金です。公式FAQでは、食事の写真を送ってアドバイスを受けるレコーディングダイエットを採用し、無理な食事制限は求めないとしています。" },
  { q: "無料体験やカウンセリングはありますか？", a: "初回体験は4,620円（税込）で、体験当日に入会すると0円です。体験はトレーニング45分とカウンセリングなどを含め約75分です。不安な点は体験前でも問い合わせで相談できます（公式FAQ）。" },
  { q: "月額制の解約や回数の繰越はどうなりますか？", a: "毎月23日までに申し出ると当月末、24日以降は翌月末の解約です。未利用の回数は、月4回コースは2回まで、月8回コースは4回まで翌月末まで繰り越せます（料金ページ）。返金保証の記載は料金ページ・FAQにありません。" },
  { q: "トレーニング未経験でも大丈夫ですか？", a: "公式FAQでは、運動が苦手な方や習慣がない方でも、低負荷の種目から始めるオーダーメイドのプログラムで進めるとしています。年齢・性別の条件はなく、18歳未満は親権者の同意が必要です。" },
  { q: "持ち物は何が必要ですか？", a: "トレーニングウェア上下・飲み物・タオルを持参します。足裏からの神経伝達を高めるため裸足でトレーニングを行うので、シューズは不要です（希望すれば持参のシューズで可）。" },
  { q: "「ココダカラ」で検索すると別のサービスが出てきます。", a: "「ココカラ」「Body Design」など名前の似た別の事業者・店舗があります。CoCoDakara Body Designの公式サイトは bodydesign.cocodakara.net で、店舗は東京都港区東麻布の麻布十番店です。" },
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

const affiliateLink = "https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A";

const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function CocodakaraReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "CoCoDakara Body Design（ココダカラ）の口コミ・評判｜料金を検証",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CoCoDakara Body Design" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          CoCoDakara Body Design（ココダカラ）の口コミ・評判｜料金を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（料金・規定・持ち物を公式サイトで再確認し、検索上位の口コミ情報を確認）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="CoCoDakara Body Designとは">
          <h2 className="font-bold text-gray-900 mb-3">CoCoDakara Body Design（ココダカラ）の口コミ・評判と料金：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式トップ</Src>・<Src href={SRC.price}>料金ページ</Src>・<Src href={SRC.faq}>よくあるご質問</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/cocodakara.jpg" alt="CoCoDakara Body Designの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">CoCoDakara Body Design 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="cocodakara" name="CoCoDakara Body Design" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">CoCoDakara Body Designの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">CoCoDakara Body Designの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">CoCoDakara Body Designのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">CoCoDakara Body Designの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">CoCoDakara Body Designの口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">CoCoDakara Body Designのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">CoCoDakara Body Designが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="CoCoDakara Body Design" />
        <BrandFactCheck slug="cocodakara" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            CoCoDakara の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          CoCoDakara Body Design（ココダカラ ボディデザイン）は、東京都港区東麻布にある麻布十番店1店舗のパーソナルジムです。公式FAQでは、全トレーナーが難関資格を保有しているとしており、月会費のかからない都度払いと月額制から選べます。本記事では、公式サイトで確認できる料金・規定と、口コミ情報の確認結果をご説明します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込です。担当トレーナーにより技術料が別途必要な場合があり、9:00〜22:00をまたぐ予約は10%の割増です。出典: <Src href={SRC.price}>料金ページ</Src>（{CHECKED}確認）。</p>
          <h3 className="font-bold text-gray-800 mt-8 mb-3">入会初月にかかる費用の試算（当サイト計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">ケース</th>
                  <th className="px-3 py-2 text-left font-medium">内訳（税込）</th>
                  <th className="px-3 py-2 text-left font-medium">合計</th>
                </tr>
              </thead>
              <tbody>
                {firstMonth.map((r) => (
                  <tr key={r.label} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2">{r.label}</td>
                    <td className="px-3 py-2 text-gray-600">{r.items}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.total.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">体験当日に入会すると、体験料4,620円と入会金の半額9,900円の計14,520円が通常より低くなります。技術料・時間外割増・出張費は含めていません。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">体験トレーニングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">初回体験（約75分・4,620円、当日入会で0円）で、姿勢・可動域の評価とプランの提案を受けられます。</p>
            <a href="https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">体験トレーニングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 当サイトでは、出典を確認できない口コミの要約は掲載しておりません。最新の評価はGoogleマップでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="cocodakara" name="CoCoDakara Body Design" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">CoCoDakara Body Designのよくある質問</h2>
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

        {/* Author Box */}
        

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">CoCoDakara Body Designが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">初回体験にて、目的に合ったプランをご相談いただけます。</p>
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            体験トレーニングを予約する
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
