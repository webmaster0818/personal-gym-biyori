import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "プレズ（Plez）の口コミ・評判｜料金・返金・悪い口コミを検証",
  description:
    "プレズ（Plez）の口コミ・評判を、検索上位記事の口コミの出典と公式の利用規約で検証します。全15プランの入会金込み総額、ビデオ電話1回あたりの料金、書面による中途解約の返金額の計算例、運営会社（ゼロ株式会社）をまとめています。",
};

/*
 * 2026-10-28 改訂: 公式トップ・利用規約・特定商取引法の表記を2026-10-28に確認（料金・規約16条の内容は10/14から変更なし）。
 * 追加: 要点まとめ、期間別（2〜6ヶ月）の入会金込み総額とビデオ電話1回あたりの指導料（当サイト計算）、中途解約の返金額の計算例、口コミの出典の確認結果。
 * 削除: 出典のない口コミ要約（「ジムに通わなくていいのが楽」等）、根拠のない「一般的なパーソナルジムでは食事指導がオプション料金になることが多い」。
 */
const CHECKED = "2026年10月28日";

const SRC = {
  top: "https://plez.jp/",
  terms: "https://plez.jp/lp/terms.html",
  law: "https://plez.jp/lp/transactions.html",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなサービスか", value: "ゼロ株式会社（旧：株式会社Plez、東京都渋谷区）が運営するオンラインのパーソナル指導です。専属トレーナーがLINEで食事を指導し、トレーニングはビデオ電話（1回25分）または動画でのフォーム指導で受けます。" },
  { label: "料金", value: "入会金10,780円と、月あたりの指導料21,890円〜43,890円（2ヶ月）／16,170円〜32,637円（6ヶ月）です（税込）。入会金込みの総額は、2ヶ月の動画指導で54,560円、6ヶ月のビデオ電話月8回で206,602円です（当サイト計算）。" },
  { label: "返金・解約", value: "返金保証の記載はありません。利用規約16条により、中途解約は書面で申し出る必要があり、未開始の月の指導料から30,000円などを差し引いた額が返還されます。" },
  { label: "口コミ", value: "検索上位の口コミ記事（駅探PICKS・2022年12月更新）は、引用した6件のうち5件の出典を「みん評」と表記しています。みん評は当サイトの環境から閲覧できないため、件数・評点は掲載しておりません。" },
  { label: "向いている方", value: "近くにパーソナルジムがない方や、自宅で食事指導中心に取り組みたい方に向いています。対面でのフォーム修正を重視する方には向きません。" },
];

const plans = [
  { name: "ビデオ電話 月8回", monthly: [43890, 40128, 37235, 34815, 32637], sessions: 8 },
  { name: "ビデオ電話 月4回", monthly: [32890, 29040, 26840, 25190, 23628], sessions: 4 },
  { name: "動画でのフォーム指導", monthly: [21890, 19690, 18337, 17270, 16170], sessions: 0 },
];
const ENTRY = 10780;
const yen = (n: number) => `${Math.round(n).toLocaleString()}円`;

// 中途解約の返還額の計算例（利用規約16条4項。予定ペースを超えるビデオ電話の受講はない前提）
const refundExamples = [
  { plan: "ビデオ電話 月8回・6ヶ月", when: "2ヶ月目の途中で書面解約", calc: "未開始の4ヶ月分 32,637円×4＝130,548円 − 30,000円", refund: 100548 },
  { plan: "ビデオ電話 月8回・2ヶ月", when: "1ヶ月目の途中で書面解約", calc: "未開始の1ヶ月分 43,890円 − 30,000円", refund: 13890 },
  { plan: "動画でのフォーム指導・2ヶ月", when: "1ヶ月目の途中で書面解約", calc: "未開始の1ヶ月分 21,890円 − 30,000円（差し引き後がマイナス）", refund: 0 },
];

const affiliateUrl = "https://t.felmat.net/fmcl?ak=D3361D.1.P68082F.Q136169A";

const basicInfo = [
  { label: "サービス名", value: "プレズ（Plez）" },
  { label: "タイプ", value: "オンライン完結型パーソナルトレーニング" },
  { label: "料金帯", value: "月16,170円（税込）〜＋入会金10,780円" },
  { label: "指導内容", value: "食事指導＋トレーニング指導" },
  { label: "特徴", value: "自宅完結 / ジム通い不要 / LINEサポート / 低価格" },
];

const strengths = [
  {
    title: "オンライン完結で自宅からトレーニング",
    desc: "ジムに通う必要がなく、自宅で好きな時間にトレーニングできます。通勤・育児・家事で忙しい方でもスキマ時間を活用でき、天候や移動時間に左右されません。専用のトレーニング動画やプランで正しいフォームを学べます。",
  },
  {
    title: "店舗型より抑えた料金設定",
    desc: "プレズは月額16,170円（税込）〜（6ヶ月ダイエットプラン）＋入会金10,780円です。公式サイトは「パーソナルジムの80%オフ」とうたっています（公式の比較で、当サイトの調査ではありません）。サプリ等の物販はなく、指導料・入会金以外の料金はかからないと公式に書かれています。",
  },
  {
    title: "LINEでトレーナーとやり取りできる",
    desc: "食事報告やトレーニングの質問はLINEで完結します。連絡はいつでも何回でも送れ、担当からのアドバイスは1日1回まとめて届きます（週2日と祝日は休み）。対面では聞きにくい些細な疑問も相談しやすい形式です。",
  },
];

const merits = [
  {
    title: "ジム通い不要で時間を節約",
    desc: "移動時間ゼロでトレーニングが始められるため、仕事帰りや早朝の自宅トレーニングにも対応できます。ジムの営業時間に縛られず、自分のペースで続けやすい環境です。",
  },
  {
    title: "食事指導が指導料に含まれている",
    desc: "全プランに専属トレーナーの食事指導が含まれ、特定商取引法の表記では指導料・入会金以外に支払う料金はないとされています。月あたりの指導料は16,170円（6ヶ月・動画でのフォーム指導、税込）からです。",
  },
  {
    title: "全国どこからでも利用可能",
    desc: "LINEで指導を受ける形式のため、公式サイトには「全国どこでもOK」と記載されています。近くにパーソナルジムがない方にとって、プロの指導を受けられる選択肢です。",
  },
];

const demerits = [
  {
    title: "対面指導と比べてフォーム修正が難しい",
    desc: "オンラインのため、トレーナーが直接体に触れてフォームを修正することはできません。動画や写真でのチェックが中心となるため、トレーニング経験がまったくない方は最初に戸惑う可能性があります。",
  },
  {
    title: "自宅にトレーニングスペースが必要",
    desc: "ヨガマット1枚分程度のスペースは必要です。マンションなどでは音や振動が気になるトレーニングは制限される場合があります。",
  },
  {
    title: "自己管理能力が求められる",
    desc: "ジムに行く強制力がないため、モチベーション管理が重要です。LINEでのサポートはありますが、最終的には自分自身で習慣化する意志が必要になります。",
  },
];

// 2026-10-14: 公式サイト掲載値（data/brand-prices.ts・2026-10-08実査）に差し替え
// 2026-10-14: 公式（plez.jp）掲載値。プラン名は公式ページに無いため一般的な呼び方
const pricingPlans = [
  { name: "ダイエット（動画でのフォーム指導）", duration: "2ヶ月〜6ヶ月", price: "2ヶ月21,890円 → 6ヶ月16,170円（月あたり）", note: "税込（税抜19,900→14,700円）" },
  { name: "ボディメイク（ビデオ電話 月4回）", duration: "2ヶ月〜6ヶ月", price: "2ヶ月32,890円 → 6ヶ月23,628円（月あたり）", note: "税込（税抜29,900→21,480円）" },
  { name: "プレミアム（ビデオ電話 月8回）", duration: "2ヶ月〜6ヶ月", price: "2ヶ月43,890円 → 6ヶ月32,637円（月あたり）", note: "税込（税抜39,900→29,670円）" },
  { name: "入会金", duration: "—", price: "10,780円（税込）", note: "全プラン共通・税抜9,800円" },
];

const reviewSummary = "当サイトでは2026年10月28日に「Plez 口コミ」「プレズ 評判」で上位に表示されるページを確認しました。口コミを引用している記事は駅探PICKS（2022年12月29日更新）で、引用6件のうち5件の出典を「みん評」と表記し、投稿日・評点は記載していません。同記事では、食事指導の丁寧さやカウンセリングの対応を評価する声と、トレーニングが物足りない、意志が弱いと続けにくいという声が紹介されています。みん評のページは当サイトの環境から閲覧できない（403）ため、件数・評点は掲載しておりません。FitMapの比較記事（2026年10月1日表示）は料金の掲載のみで、口コミの集め方の記載はありません。";

const faqItems = [
  { q: "プレズは本当にジム通い不要ですか？", a: "はい。食事指導はLINE、トレーニング指導はLINEのビデオ電話（1回25分）または動画を送ってのフォーム指導で、自宅で完結します（公式サイト）。" },
  { q: "LINEでのやり取りはどのくらいの頻度ですか？", a: "公式の利用規約では、アドバイス・質問への回答は休日を除き1日1回まとめて受けられ、週2日と祝日は担当の休日です。体重・サイズ・写真での成果チェックは月2回です。" },
  { q: "運動初心者でも大丈夫ですか？", a: "専属トレーナーが筋力や体型に合わせてトレーニングを組む形式です。家でのトレーニングは「25分×週2回」が目安と公式に書かれています。" },
  { q: "途中で解約できますか？", a: "できますが、利用規約16条で「書面による」申出が必要とされています。返金されるのは未開始の月の指導料から30,000円などを差し引いた額で、入会金は戻りません。たとえばビデオ電話月8回・6ヶ月プランを2ヶ月目の途中で解約すると100,548円、2ヶ月の動画指導プランを1ヶ月目の途中で解約すると0円の計算です（当サイト計算・2026年10月28日に利用規約を確認）。" },
  { q: "総額はいくらになりますか？", a: "入会金10,780円を含めた総額（税込）は、動画でのフォーム指導が2ヶ月54,560円〜6ヶ月107,800円、ビデオ電話月4回が2ヶ月76,560円〜6ヶ月152,548円、ビデオ電話月8回が2ヶ月98,560円〜6ヶ月206,602円です（当サイト計算）。" },
  { q: "支払い方法は何がありますか？", a: "公式トップの料金欄は「銀行振込（一括）」、特定商取引法の表記は「クレジットカード（分割は24回まで）・銀行振込」と、2通りの表記があります。申込み時にご確認ください。" },
  { q: "食事制限は厳しい内容ですか？", a: "公式サイトは「NG食品ゼロ」をうたっており、炭水化物・甘い物・お酒も量を調整しながら取れる方針です。食べた物をLINEで報告してアドバイスを受けます。" },
  { q: "無料カウンセリングはありますか？", a: "はい、LINEで無料カウンセリングを受けられます。カウンセリングの登録だけでは入会にならず、料金も発生しません（特定商取引法の表記）。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function PlezReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "プレズ（Plez）の口コミ・評判｜料金・返金・悪い口コミを検証",
        "author": { "@type": "Organization", "name": "パーソナルジムびより編集部", "url": "https://personal-gym-biyori.com/about/" },
        "publisher": { "@type": "Organization", "name": "パーソナルジムびより" },
        "datePublished": "2026-04-01",
        "dateModified": "2026-10-28"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "プレズ（Plez）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          プレズ（Plez）の口コミ・評判｜料金・返金・悪い口コミを検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月28日（料金・利用規約・特定商取引法の表記を公式サイトで再確認し、総額と中途解約の返金額を計算）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="プレズ（Plez）とは">
          <h2 className="font-bold text-gray-900 mb-3">プレズ（Plez）の口コミ・評判と料金：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-28 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式トップ</Src>・<Src href={SRC.terms}>利用規約</Src>・<Src href={SRC.law}>特定商取引法に基づく表記</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/plez.jpg" alt="プレズ（Plez）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">プレズ（Plez） 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="plez" name="プレズ（Plez）" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">プレズの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">プレズの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">プレズのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">プレズの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">プレズの口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">プレズのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">プレズが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="プレズ（Plez）" />
        <BrandFactCheck slug="plez" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=D3361D.1.P68082F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Plez の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          プレズ（Plez）はオンライン完結型のパーソナルトレーニングサービスです。ジム通い不要で、自宅にいながらプロのトレーナーから<span className="font-bold bg-yellow-100 px-0.5">食事指導</span>＋トレーニング指導が受けられます。月額16,170円（税込）〜（6ヶ月ダイエットプラン）という低価格が特徴です。本記事では、プレズの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">プレズのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">期間</th>
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

          <h3 className="font-bold text-gray-800 mt-8 mb-3">期間別の入会金込み総額（当サイト計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">プラン</th>
                  {[2, 3, 4, 5, 6].map((m) => (
                    <th key={m} className="px-3 py-2 text-left font-medium whitespace-nowrap">{m}ヶ月</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((pl) => (
                  <tr key={pl.name} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2">{pl.name}</td>
                    {pl.monthly.map((m, i) => (
                      <td key={i} className="px-3 py-2 whitespace-nowrap">
                        {yen(m * (i + 2) + ENTRY)}
                        {pl.sessions > 0 && <span className="block text-xs text-gray-500">1回 {yen(m / pl.sessions)}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">総額＝月あたりの指導料（税込）×月数＋入会金10,780円。「1回」はビデオ電話1回（25分）あたりの指導料で、食事指導の分も含んだ月額を回数で割った参考値です。出典: <Src href={SRC.top}>公式トップの料金表</Src>（{CHECKED}確認）。</p>

          <h3 className="font-bold text-gray-800 mt-8 mb-3">中途解約した場合の返還額の計算例（当サイト計算）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium">プラン・時期</th>
                  <th className="px-3 py-2 text-left font-medium">計算</th>
                  <th className="px-3 py-2 text-left font-medium">返還額</th>
                </tr>
              </thead>
              <tbody>
                {refundExamples.map((r) => (
                  <tr key={r.plan} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2">{r.plan}<span className="block text-xs text-gray-500">{r.when}</span></td>
                    <td className="px-3 py-2 text-gray-700">{r.calc}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{yen(r.refund)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">利用規約16条4項では、未開始の月の指導料から、予定ペースを超えて受けたビデオ電話の回数×2,500円と30,000円を差し引いた額を返還するとしています。上の例は超過受講がない前提です。入会金と進行中の月の指導料は返還されません。解約は書面で申し出る必要があります。出典: <Src href={SRC.terms}>利用規約</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=D3361D.1.P68082F.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 上記は、各記事の記載を当サイトで確認して要約したものです。口コミ本文の創作や独自の評点付けは行っておりません。検索上位の口コミ記事の出典・掲載日は、上の「口コミ・評判の出典」で確認できます。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="plez" name="プレズ（Plez）" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">プレズのよくある質問</h2>
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">プレズが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ご自身に合ったプランをご相談ください。</p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            プレズ公式サイトはこちら
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
