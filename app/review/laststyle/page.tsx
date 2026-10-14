import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ",
  description:
    "Lastyle（ラスタイル）パーソナルジムの口コミ・評判を徹底解説。ボクシング×パーソナルトレーニング融合の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Lastyle（ラスタイル）" },
  { label: "タイプ", value: "ボクシング×パーソナルトレーニング融合ジム" },
  { label: "料金帯", value: "コース総額158,400円〜" },
  { label: "エリア", value: "池袋東口本店（公式サイト記載の店舗）" },
  { label: "特徴", value: "ボクシング融合 / マンツーマン指導 / ダイエット特化 / ストレス発散" },
];

const strengths = [
  {
    title: "ボクシング×筋トレの独自メソッド",
    desc: "従来のパーソナルトレーニングにボクシングを融合させた独自プログラム。有酸素運動と筋トレを同時に行えるため、脂肪燃焼効率が高く、飽きずに楽しく続けられると好評です。",
  },
  {
    title: "ストレス発散しながらボディメイク",
    desc: "ミット打ちやサンドバッグを使ったトレーニングは、日頃のストレス解消にも効果的。楽しみながら体を鍛えられるため、運動が苦手な方でもモチベーションを維持しやすい環境です。",
  },
  {
    title: "食事指導付きで総合的にサポート",
    desc: "トレーニングだけでなく、食事面からもサポート。管理栄養士監修の食事アドバイスにより、トレーニング効果を最大限に引き出すプログラムが組まれています。",
  },
];

const merits = [
  {
    title: "楽しく続けられるトレーニング",
    desc: "ボクシング要素があることで単調な筋トレが苦手な方でも飽きにくく、ゲーム感覚でトレーニングに取り組めます。継続率が高い点が大きなメリットです。",
  },
  {
    title: "短時間で高い消費カロリー",
    desc: "ボクシングは全身運動のため、通常のウェイトトレーニングよりも短時間で多くのカロリーを消費できます。忙しい方にも効率的なダイエットが可能です。",
  },
  {
    title: "初心者でも安心のマンツーマン指導",
    desc: "ボクシング経験がなくてもトレーナーが一から丁寧に指導。フォームや強度を個人に合わせて調整してくれるため、ケガのリスクも低く安心です。",
  },
];

const demerits = [
  {
    title: "ボクシングに抵抗がある方には不向き",
    desc: "格闘技要素が含まれるため、殴る動作に抵抗感がある方にはハードルが高い場合があります。体験レッスンで雰囲気を確認しましょう。",
  },
  {
    title: "店舗数が限定的",
    desc: "東京都内中心の展開のため、地方在住の方は通いにくい場合があります。今後のエリア拡大に期待です。",
  },
  {
    title: "筋肥大目的には物足りない場合も",
    desc: "ダイエットやシェイプアップには最適ですが、本格的な筋肥大を目指す方にはウェイトトレーニング中心のジムの方が適している場合があります。",
  },
];

// 2026-10-14: 公式サイト掲載値（data/brand-prices.ts・2026-10-08実査）に差し替え
const pricingPlans = [
  { name: "12回（2ヶ月）", duration: "12回", price: "158,400円", note: "税込" },
  { name: "16回", duration: "16回", price: "211,200円", note: "税込" },
  { name: "20回", duration: "20回", price: "264,000円", note: "税込" },
  { name: "入会金", duration: "—", price: "通常50,000円（税抜）", note: "キャンペーンで25,000円（税抜）" },
];

const reviewSummary = "Lastyleの口コミでは「ボクシングが楽しくて続けられる」「ストレス発散になる」という声が多く見られます。トレーナーの指導が熱心で、初心者にも丁寧に教えてくれると好評です。一方で「店舗が少ない」「予約が取りにくい時間帯がある」といった指摘もあります。ダイエット目的の方からは特に満足度が高い傾向です。";

const faqItems = [
  { q: "Lastyleの入会金はいくらですか？", a: "入会金は通常50,000円（税抜）、キャンペーンで25,000円（税抜）です（公式の店舗ページ記載）。キャンペーン期間中は無料または割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "ボクシング未経験でも大丈夫ですか？", a: "はい、会員の多くがボクシング未経験者です。トレーナーが基礎から丁寧に指導するため、初めての方でも安心して始められます。" },
  { q: "女性でも通えますか？", a: "はい、女性会員も多数在籍しています。女性トレーナーが対応する場合もありますので、気軽にお問い合わせください。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じた食事アドバイスが含まれています。LINEでの食事報告・アドバイスに対応しているプランもあります。" },
  { q: "体験トレーニングはありますか？", a: "はい、無料または低額の体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "契約内容により異なります。詳細は入会時に確認することをおすすめします。" },
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

export default function LastyleReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Lastyle" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/laststyle.jpg" alt="Lastyleの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Lastyle 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月14日（料金・店舗・返金条件を公式サイトで再確認）</p>
        <GymCta slug="laststyle" name="Lastyle" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Lastyleの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Lastyleの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Lastyleのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Lastyleの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Lastyleの口コミ概要</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Lastyleのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Lastyleが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Lastyle" />
        <BrandFactCheck slug="laststyle" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Lastyle の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Lastyle（ラスタイル）はボクシングとパーソナルトレーニングを融合させた独自のフィットネスジムです。楽しみながら効率的に脂肪を燃焼させるプログラムが特徴で、ダイエットやストレス発散を求める方に支持されています。本記事では、Lastyleの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの3つの強み</h2>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Lastyleのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの料金</h2>
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
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 口コミ概要 */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="laststyle" name="Lastyle" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleのよくある質問</h2>
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
          <h2 id="s8" className="text-xl font-bold mb-3">Lastyleが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料体験で、ボクシング×パーソナルトレーニングの楽しさを体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        {/* 関連ジム */}
        <BrandStoreLinks brand="laststyle" brandName="Lastyle" />
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
