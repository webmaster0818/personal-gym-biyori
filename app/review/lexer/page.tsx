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
    "ReXeR（レクサーパーソナルジム）の口コミ・評判を検証します。月額9,900円〜の料金、6店舗の所在地、管理栄養士・提携医師のオプション、「効果実感96.1%」の調査条件、口コミに含まれる24時間ラウンジ（本町）との違いを公式情報で確認しています。",
};

const basicInfo = [
  { label: "ジム名", value: "ReXeR PeRSoNaL GyM（レクサーパーソナルジム）" },
  { label: "タイプ", value: "高級パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額9,900円〜" },
  { label: "エリア", value: "赤坂・五反田（東京）、梅田中津・天六（大阪）、苦楽園・西宮（兵庫）の6店" },
  { label: "特徴", value: "ReXeRグループのパーソナルジム / 有資格・コンテスト入賞トレーナー / 管理栄養士の食事管理・提携医師のオンライン診療（オプション） / 1回50分" },
  { label: "公式サイト", value: "https://personal.rexer-group.com/" },
];

const strengths = [
  {
    title: "コンテスト優勝経験を持つトップトレーナーが在籍",
    desc: "ReXeRにはフィットネスコンテストで優勝経験を持つトレーナーが多数在籍しています。実績に裏打ちされた高度な指導力で、初心者から上級者まで最適なトレーニングを提供します。トレーナー自身の身体づくりの経験にもとづいたアドバイスを受けられます。",
  },
  {
    title: "管理栄養士の食事管理と提携医師のオンライン診療",
    desc: "オプションで、管理栄養士による1か月間の食事管理（期間中いつでもLINEで相談）と提携医師とのオンライン診療を受けられます。食事は無理な制限をせずPFCバランスを整える方針です（公式FAQ）。公式の「効果実感96.1%」は会員152人への自社アンケート（2025年6月）の結果です。",
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
  { q: "食事管理はどのように行われますか？", a: "オプションで管理栄養士による1か月間の食事管理（期間中いつでもLINEで相談）を付けられます。全ての食事にトレーナーがコメントする「ライフマネジメントプラン」、食事管理を含む回数コースもあります。" },
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
        "dateModified": "2026-10-14"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ReXeR（レクサー）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ReXeR（レクサー）の口コミ・評判｜料金・店舗・悪い口コミを検証
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/lexer.jpg" alt="ReXeR（レクサー）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">ReXeR（レクサー） 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月14日（料金・店舗・返金条件を公式サイトで再確認）</p>
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
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
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
