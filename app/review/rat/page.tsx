import type { Metadata } from "next";
import GmapStats from "@/components/GmapStats";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "Ratの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Rat（ラット）パーソナルジムの口コミ・評判を徹底解説。完全個室・手ぶらOKの都内パーソナルジムの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Rat（ラット）" },
  { label: "タイプ", value: "完全個室パーソナルジム" },
  { label: "料金帯", value: "2ヶ月148,000円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "完全個室 / 手ぶらOK / 低価格 / シャワー完備 / 都内中心" },
];

const strengths = [
  {
    title: "完全個室でプライバシー確保",
    desc: "全室完全個室のため、他の会員と顔を合わせることなくトレーニングに集中できます。シャワールームも個室内に完備しており、快適な環境が整っています。",
  },
  {
    title: "手ぶらで通える充実のレンタル",
    desc: "ウェア・シューズ・タオル・飲料水がすべて無料で用意されているため、仕事帰りでも手ぶらで気軽に通えます。荷物の心配が不要です。",
  },
  {
    title: "大手より低価格で本格パーソナル",
    desc: "2ヶ月148,000円〜と、大手パーソナルジムと比較して低価格ながら、質の高いマンツーマン指導を受けられます。",
  },
];

const merits = [
  {
    title: "手ぶらで通えるから続けやすい",
    desc: "ジムバッグを持ち歩く必要がないため、通勤途中や急な予定変更でも気軽にトレーニングに立ち寄れます。",
  },
  {
    title: "シャワー完備で仕事前後に便利",
    desc: "個室内にシャワーが完備されているため、汗を流してからすぐに次の予定に向かえます。",
  },
  {
    title: "低価格でも食事指導あり",
    desc: "低価格ながらも食事アドバイスが含まれており、トレーニングと食事の両面からサポートを受けられます。",
  },
];

const demerits = [
  {
    title: "店舗数が限られている",
    desc: "都内中心の展開で店舗数が少ないため、自宅や職場の近くに店舗がない場合があります。",
  },
  {
    title: "トレーナーの指名に制限がある場合も",
    desc: "少人数運営のため、希望のトレーナーや時間帯での予約が取りにくいことがあります。",
  },
  {
    title: "大手ほどのブランド認知度はない",
    desc: "RIZAPやBEYONDほどの知名度がないため、口コミや評判を自分で調べる必要があります。",
  },
];

const pricingPlans = [
  { name: "2ヶ月コース（16回）", duration: "60分/回", price: "148,000円", note: "食事指導・レンタル込み" },
  { name: "3ヶ月コース（24回）", duration: "60分/回", price: "198,000円", note: "食事指導・レンタル込み" },
  { name: "月額コース（月4回）", duration: "60分/回", price: "月額36,000円〜", note: "継続利用向け" },
];

const reviewSummary = "Ratの口コミでは「手ぶらで通えるのが楽」「完全個室で快適」「価格が良心的」という声が多く見られます。立地が良く仕事帰りに通いやすい点も高評価です。一方で「店舗が少ない」「予約が取りにくい時がある」といった指摘もあります。都内在住で手軽にパーソナルジムを試したい方におすすめです。";

const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの親切さと丁寧な指導が口コミで高く評価されています。特に女性ユーザーからは「話しやすい」「安心感がある」との声が多いです。",
  },
  {
    title: "料金・コスパ",
    summary: "大手パーソナルジムと比較してリーズナブルな価格設定が支持されています。完全個室・手ぶらOK・シャワー完備のサービス内容を考慮すると高コスパとの評価です。",
  },
  {
    title: "施設・設備",
    summary: "完全個室の快適さとシャワー完備の利便性が高く評価されています。清潔感のある空間で、プライバシーを守りながらトレーニングできる点が好評です。",
  },
  {
    title: "効果・変化",
    summary: "短期間での体型変化に満足する声が多く、特に女性向けのボディメイクに特化した指導が効果を発揮しているようです。",
  },
  {
    title: "予約・アクセス",
    summary: "駅チカの立地が通いやすさにつながっており、仕事帰りに通えるという声が多いです。ただし店舗数が限られている点は課題として挙げられています。",
  },
];

const faqItems = [
  { q: "Ratの入会金はいくらですか？", a: "入会金は29,800円です。キャンペーンで無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "手ぶらで通えますか？", a: "はい、ウェア・シューズ・タオル・お水がすべて無料で用意されています。完全手ぶらで通えます。" },
  { q: "シャワーはありますか？", a: "はい、個室内にシャワールームが完備されています。アメニティも用意されています。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに食事アドバイスが含まれています。LINEでの相談に対応しています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "コースにより異なります。詳細は入会時にご確認ください。" },
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
        "headline": "Ratの口コミ・評判｜料金・メリット・デメリットを徹底解説",
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
        "dateModified": "2026-05-18"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rat" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Ratの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/rat.jpg" alt="Ratの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Rat 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
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
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=K7799I.1.V118185D.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            パーソナルジムRat の公式サイトはこちら
          </a>
          <img src="https://t.felmat.net/fmimp/K7799I.V118185D.Q136169A" width={1} height={1} alt="" className="inline" />
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Rat（ラット）は<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>・手ぶらOKの都内パーソナルジムです。低価格ながらシャワー完備やレンタル無料など、通いやすさを追求した環境が特徴。本記事では、Ratの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
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
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=K7799I.1.V118185D.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
            <img src="https://t.felmat.net/fmimp/K7799I.V118185D.Q136169A" width={1} height={1} alt="" className="inline" />
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Ratの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rat の口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">RatのGoogleマップ口コミを分析すると、完全個室・手ぶらOKの快適さと、大手と比較してリーズナブルな価格設定への満足度が高い傾向です。特に女性ユーザーからは、駅チカ・個室・シャワー完備の三拍子が揃った通いやすさが支持されています。以下では、カテゴリ別に口コミの傾向をまとめています。</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下は、Googleマップに投稿された口コミを当サイト編集部が読み、<strong>どんな傾向の声が多いかを要約したもの</strong>です。個別の投稿文は掲載していません（投稿を書き換えて載せることはしない方針のため）。実際の投稿は下記リンクからGoogleマップでご確認ください。検証できる数値は、上の「Googleマップ実測データ」に掲載しています。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/Rat+%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップで口コミを見る</a></p>
          </div>
          <GmapStats slug="rat" brand="パーソナルジムRat" />

          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
            </div>
          ))}
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
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、手ぶらパーソナルの快適さを体感してみましょう。</p>
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
