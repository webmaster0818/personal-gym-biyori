import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "FIT24の口コミ・評判は？料金・メリット・デメリットを解説【2026年】",
  description:
    "FIT24（フィット24）の口コミ・評判を徹底解説。24時間営業セルフジムの料金（割引プランは月4,000円台〜）、メリット・デメリット、初心者向けか、よくある質問まで網羅。快活CLUBグループ運営のコスパを検証します。",
};

const basicInfo = [
  { label: "ジム名", value: "FIT24（フィット24）" },
  { label: "タイプ", value: "24時間セルフフィットネスジム" },
  { label: "料金帯", value: "通常月会費は月7,000円台後半〜。家族・U22など割引プランは月4,000円台〜（店舗・プランにより異なる／要確認）" },
  { label: "エリア", value: "全国に展開（快活CLUBグループ）" },
  { label: "特徴", value: "24時間営業 / セルフ型 / 低価格 / マシン充実 / 快活CLUB併設" },
];

const strengths = [
  {
    title: "24時間365日いつでも利用可能",
    desc: "深夜でも早朝でも、自分の好きなタイミングでトレーニングが可能。シフト勤務の方や生活リズムが不規則な方でも無理なく通えます。",
  },
  {
    title: "割引プランなら月4,000円台〜の低価格",
    desc: "家族プランやU22プランなどの割引なら月4,000円台〜という低価格の料金設定。ジムに通うハードルを下げ、幅広い層が気軽にフィットネスを始められます（通常月会費は月7,000円台後半〜、店舗により異なります）。",
  },
  {
    title: "快活CLUBグループの安心運営",
    desc: "快活CLUB（AOKIグループ）が運営しており、セキュリティや設備の管理体制がしっかりしています。一部店舗では快活CLUBのシャワー・ドリンクバーも利用可能です。",
  },
];

const merits = [
  {
    title: "割引プランで抑えられる月額料金",
    desc: "家族・U22などの割引プランなら月4,000円台〜のため、パーソナルジムに通う予算がない方でも本格的なマシントレーニングが始められます。",
  },
  {
    title: "時間を選ばず通える自由度",
    desc: "24時間営業のため、深夜や早朝など、混雑を避けた時間帯にトレーニングできます。",
  },
  {
    title: "マシンが充実している",
    desc: "有酸素マシンからウェイトマシン、フリーウェイトエリアまで、幅広いトレーニング機器が揃っています。",
  },
];

const demerits = [
  {
    title: "トレーナーの指導がない",
    desc: "セルフ型のため、トレーニングフォームや メニューの指導はありません。初心者は自己流になりやすい点に注意が必要です。",
  },
  {
    title: "食事指導はない",
    desc: "ダイエット目的で食事面のサポートが必要な場合は、別途パーソナルジムやオンラインサービスの併用を検討する必要があります。",
  },
  {
    title: "スタッフ不在の時間帯がある",
    desc: "24時間営業のため、深夜や早朝はスタッフ不在となる場合があります。マシンの使い方で困った際にすぐ質問できない場合があります。",
  },
];

const pricingPlans = [
  { name: "通常月会費", duration: "24時間利用可", price: "月7,000円台後半〜（税込）", note: "店舗により金額が異なる" },
  { name: "家族プラン", duration: "24時間利用可", price: "月4,000円台〜（税込）", note: "家族会員向けの割引" },
  { name: "U22プラン", duration: "24時間利用可", price: "月5,000円台〜（税込）", note: "18〜22歳対象" },
  { name: "入会金・初期費用", duration: "—", price: "入会金5,500円＋事務手数料・初月分等", note: "初期費用は別途・要確認" },
];

const reviewSummary = "FIT24の口コミでは「安くて24時間使える」「マシンが新しくて清潔」「快活CLUBのシャワーが使えて便利」という声が多いです。コスパ重視で自主トレーニングしたい方に人気です。一方で「スタッフがいない時間帯に不安」「トレーニング指導がない」という声も。自分でメニューを組める中級者以上に特におすすめです。";

const faqItems = [
  { q: "FIT24の入会金はいくらですか？", a: "入会金は5,500円です。セキュリティキー代として別途3,300円がかかる場合があります。キャンペーンで割引になることもあります。" },
  { q: "初心者でも大丈夫ですか？", a: "マシンの使い方は説明書が設置されていますが、パーソナル指導はありません。初心者の方は入会時のオリエンテーションを活用しましょう。" },
  { q: "見学はできますか？", a: "はい、営業時間内（スタッフ在中時間）に見学可能です。事前に店舗へお問い合わせください。" },
  { q: "シャワーはありますか？", a: "一部店舗にはシャワールームがあります。快活CLUB併設店舗ではシャワーやドリンクバーも利用可能です。" },
  { q: "他の店舗も利用できますか？", a: "レギュラー会員であれば、全国のFIT24店舗を追加料金なしで利用できます。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の末日までに店舗に申告が必要です。Web手続きに対応している場合もあります。" },
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

export default function Fit24Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "FIT24の口コミ・評判｜料金・メリット・デメリットを徹底解説",
        "author": {
          "@type": "Person",
          "name": "山田 拓也",
          "url": "https://personal-gym-biyori.com/about/",
          "jobTitle": "パーソナルジム専門ライター"
        },
        "publisher": {
          "@type": "Organization",
          "name": "パーソナルジムびより"
        },
        "datePublished": "2026-04-01",
        "dateModified": "2026-06-30"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FIT24" }]} />
      <ReviewSummary gymName="FIT24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FIT24の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FIT24 の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          FIT24（フィット24）は快活CLUBグループが運営する<span className="font-bold bg-yellow-100 px-0.5">24時間営業</span>のセルフフィットネスジムです。割引プランなら<span className="font-bold bg-yellow-100 px-0.5">月4,000円台〜</span>の低価格で、好きな時間にマシントレーニングが可能。本記事では、FIT24の料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：FIT24はこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>料金</strong>：通常月会費は月7,000円台後半〜、家族・U22などの割引プランは月4,000円台〜（店舗・プランにより異なる）。低価格のセルフ型</li>
            <li>・<strong>24時間365日</strong>いつでも利用可。早朝・深夜に通いたい人に向く</li>
            <li>・<strong>快活CLUB併設</strong>店舗が多く、駐車場・設備を使いやすい</li>
            <li>・一方、<strong>トレーナーの専属指導はない</strong>（セルフ型）。マンツーマン指導が欲しい人はパーソナルジムが向く</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">料金・営業時間・併設施設は店舗により異なります。最新は公式でご確認ください。マンツーマン指導重視の方は<a href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</a>・<a href="/review/real-body/" className="text-teal-600 underline">リアルボディの口コミ</a>もご覧ください。</p>
        </div>

        <div className="mb-12">
          <h2 className="text-base font-bold text-gray-900 mb-3">この記事でわかること（よくある4つの疑問）</h2>
          <dl className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden text-sm">
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 料金はいくら？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">通常月会費は月7,000円台後半〜、家族・U22などの割引プランは月4,000円台〜。入会金5,500円＋初期費用が別途かかります（店舗により異なる）。<a href="#pricing" className="text-teal-600 underline">料金の詳細を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 口コミ・評判は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">「安くて24時間使える」「マシンが新しい」「快活CLUBのシャワーが便利」という声が多い一方、「スタッフ不在の時間がある」「指導がない」という声も。<a href="#reviews" className="text-teal-600 underline">口コミ概要を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 初心者でも大丈夫？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">セルフ型でパーソナル指導はないため、自分でメニューを組める中級者以上に向きます。指導が欲しい初心者は<a href="/review/real-body/" className="text-teal-600 underline">リアルボディ</a>などパーソナルジムの併用・比較も検討を。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どんな人に向く？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">24時間・低価格で自主トレしたい人、早朝深夜に通いたい人に向きます。食事指導やマンツーマン指導が必要な人はパーソナルジムが向きます。</dd>
            </div>
          </dl>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の基本情報</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FIT24のメリット・デメリット</h2>
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

        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安で、店舗・プラン・時期により異なります（割引プランには年齢・家族会員などの条件があります）。入会金・初期費用を含む最新情報は公式サイトでご確認ください。</p>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは公開情報全般の一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24の良い口コミ・気になる口コミの傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            FIT24の口コミを「良い評判」「気になる評判」に分けて傾向を整理しました。以下は公開されている口コミ全般から見られる傾向で、特定の投稿を引用したものではありません。最新の個別レビューは<a href="https://www.google.com/maps/search/FiT24%20%E5%8F%A3%E3%82%B3%E3%83%9F" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">Googleマップ</a>でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">良い口コミ・評判の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・低価格で24時間使えてコスパが良いという声</li>
                <li>・マシンが新しく清潔で、設備が充実しているという評価</li>
                <li>・快活CLUB併設店ではシャワー・ドリンクバーが使えて便利という声</li>
                <li>・混雑を避けて早朝・深夜に自分のペースで通えるという評価</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
              <h3 className="font-bold text-orange-800 mb-2">気になる口コミ・評判の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・スタッフ不在の時間帯があり、困ったとき不安という声</li>
                <li>・トレーニング指導がなく、初心者は自己流になりやすいという指摘</li>
                <li>・食事指導はないため、ダイエット目的だと物足りないという声</li>
                <li>・店舗・時間帯によっては混雑することがあるという指摘</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 口コミの傾向を要約したものです。評価には個人差があります。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FIT24のよくある質問</h2>
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
            <img src="https://t.felmat.net/fmimg/M11588F.Q159605W.Q136169A" alt="FIT24" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        {/* Author Box */}
        <AuthorBox />

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">FIT24が気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずはお近くの店舗を見学して、設備や雰囲気を確認してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
