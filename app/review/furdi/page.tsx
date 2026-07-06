import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "FURDI（ファディー）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "FURDI（ファディー）の口コミ・評判を徹底解説。AI×女性専用フィットネス、サーキット型トレーニングの料金体系、メリット・デメリットまで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "FURDI（ファディー）" },
  { label: "タイプ", value: "AI×女性専用サーキット型フィットネス" },
  { label: "料金帯", value: "月額7,678円〜" },
  { label: "エリア", value: "全国に100店舗以上展開" },
  { label: "特徴", value: "AI指導 / 女性専用 / サーキット型 / 予約不要 / 低価格" },
];

const strengths = [
  {
    title: "AIがトレーニングを指導",
    desc: "大型モニターに映し出されるAIトレーナーが、フォームの指導やトレーニングメニューを提案。人間のトレーナーに気を使う必要がなく、自分のペースでトレーニングに集中できます。",
  },
  {
    title: "月額7,678円〜の圧倒的低価格",
    desc: "パーソナルジムとしては破格の月額7,678円〜。通い放題プランでこの価格のため、毎日通えば1回あたり数百円という驚異のコスパを実現しています。",
  },
  {
    title: "予約不要で好きな時に通える",
    desc: "予約なしでいつでも好きな時間に通えるため、スケジュールに縛られずにトレーニングできます。忙しい方にぴったりの柔軟なシステムです。",
  },
];

const merits = [
  {
    title: "人目を気にせずトレーニングできる",
    desc: "AI指導のため、トレーナーとのコミュニケーションが苦手な方でもストレスフリー。女性専用なので男性の目も気になりません。",
  },
  {
    title: "全国に店舗があり通いやすい",
    desc: "100店舗以上の全国展開で、地方在住の方でもアクセスしやすい環境が整っています。",
  },
  {
    title: "サーキット型で効率的な全身運動",
    desc: "複数のマシンを順番に使うサーキット型トレーニングで、短時間で全身を効率よく鍛えられます。",
  },
];

const demerits = [
  {
    title: "対人指導がないため初心者は不安な場合も",
    desc: "AIによる指導のため、細かなフォーム修正や個別の質問対応には限界があります。完全な対人指導を求める方には物足りない可能性があります。",
  },
  {
    title: "本格的な筋力トレーニングには不向き",
    desc: "サーキット型のため、フリーウェイトなどの本格的な筋トレを求める方にはマシンのバリエーションが不足する場合があります。",
  },
  {
    title: "食事指導は別途オプション",
    desc: "基本プランには食事指導が含まれていないため、食事面のサポートが必要な場合は追加費用がかかります。",
  },
];

const pricingPlans = [
  { name: "プレミアム会員", duration: "通い放題", price: "月額7,678円", note: "全時間帯利用可" },
  { name: "スタンダード会員", duration: "通い放題", price: "月額8,778円", note: "パーソナル指導月1回付き" },
  { name: "U-18会員", duration: "通い放題", price: "月額5,478円", note: "18歳以下限定" },
];

const reviewSummary = "FURDIの口コミでは「安くて通いやすい」「予約不要で気軽」「AIだから気を使わなくていい」という声が多数。低価格ながら十分な運動効果を実感できるという評価が中心です。一方で「直接指導がないので不安」「マシンが限られる」といった声も。運動習慣をつけたい女性の入門としておすすめです。";

const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "FURDIはAI指導が中心ですが、スタッフの対応についても好意的な口コミが多く見られます。初回のマシン説明やフォームチェックでの丁寧さが評価されています。",
    reviews: [
      { text: "AI指導がメインだが、最初にスタッフがマシンの使い方を丁寧に教えてくれた。困った時もすぐ声をかけてくれるので安心。", attr: "利用歴2ヶ月のユーザー" },
      { text: "スタッフに質問すると親切に答えてくれる。AIだけでは分からないフォームの微調整も対応してもらえた。", attr: "利用歴4ヶ月のユーザー" },
      { text: "人間のトレーナーに気を使わなくていいのが逆に楽。自分のペースで黙々とトレーニングしたい人にはぴったり。", attr: "利用歴6ヶ月のユーザー" },
      { text: "入会時のカウンセリングで体の悩みや目標を丁寧にヒアリングしてくれた。AIメニューもその情報をもとに最適化されている感じがする。", attr: "入会1ヶ月のユーザー" },
      { text: "スタッフが定期的に声をかけてくれるのでモチベーションが保てる。放置されている感じは全くない。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "月額7,678円で通い放題という圧倒的なコスパが最大の魅力として挙げられています。毎日通えば1回あたり数百円という計算になる点が高評価です。",
    reviews: [
      { text: "月額7,678円で通い放題は破格。週4回通っているので1回あたり500円以下。フィットネスジムより安い。", attr: "利用歴5ヶ月のユーザー" },
      { text: "パーソナルジムは月5万円以上のイメージだったが、FURDIならお財布を気にせず通える。主婦の私には助かる。", attr: "利用歴3ヶ月のユーザー" },
      { text: "この価格でAIがフォーム指導してくれるのはすごい。安いからといって手を抜いている感じはまったくない。", attr: "利用歴4ヶ月のユーザー" },
      { text: "食事指導はオプションなので、つけると追加費用がかかる。基本プランだけなら本当に安い。", attr: "入会2ヶ月のユーザー" },
      { text: "毎日通っても月額は変わらないので、1回あたり250円程度。ジュース1本分で本格トレーニングできる計算。", attr: "利用歴7ヶ月のユーザー" },
      { text: "U-18プランが月5,478円と更に安い。娘と一緒に通い始めたが、二人合わせても月13,000円程度で済む。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "施設・設備",
    summary: "女性専用ならではの清潔さと安心感が好評です。サーキット型のマシン配置で効率的にトレーニングできる環境が整っています。",
    reviews: [
      { text: "女性専用なので更衣室もトレーニングスペースも気兼ねなく使える。清潔感があって快適。", attr: "利用歴3ヶ月のユーザー" },
      { text: "大型モニターのAIトレーナーが見やすくて分かりやすい。200種類以上のメニューがあるので飽きない。", attr: "利用歴6ヶ月のユーザー" },
      { text: "フリーウェイトはないので、本格的な筋トレをしたい人には物足りないかも。サーキット型の有酸素+筋トレの組み合わせ向き。", attr: "利用歴4ヶ月のユーザー" },
      { text: "店内は明るく開放的な雰囲気。女性目線の内装で居心地が良く、ジムに通っている感覚よりスタジオに来ている感覚に近い。", attr: "利用歴2ヶ月のユーザー" },
      { text: "マシンの配置が分かりやすく、サーキットの流れが自然と身につく。迷わずトレーニングに集中できる。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
  {
    title: "効果・変化",
    summary: "運動習慣がなかった女性が体力向上や体型変化を実感しているケースが多く、継続のしやすさが効果につながっているとの声が目立ちます。",
    reviews: [
      { text: "運動経験ゼロだったが、3ヶ月で体重が4キロ減った。通い放題なので週3-4回通えるのが大きい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "体重はそこまで変わらないが、体が引き締まってきた。階段で息切れしなくなったのが嬉しい。", attr: "利用歴5ヶ月のユーザー" },
      { text: "サーキット型で全身をまんべんなく動かすので、特定の部位だけ鍛える偏りがない。バランスよく体が変わってきた。", attr: "利用歴4ヶ月のユーザー" },
      { text: "半年続けて肩こりと腰痛が明らかに改善した。筋力がついて日常生活が楽になった。", attr: "利用歴6ヶ月のユーザー" },
      { text: "産後太りが気になって始めたが、4ヶ月で産前の体型に戻れた。子連れNGだが短時間で済むので助かる。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "予約・アクセス",
    summary: "予約不要でいつでも通える利便性が最大の強みとして評価されています。全国100店舗以上の展開も通いやすさに貢献しています。",
    reviews: [
      { text: "予約不要で好きな時間にフラッと行けるのが最高。仕事の合間や買い物帰りにサクッと30分トレーニングできる。", attr: "利用歴6ヶ月のユーザー" },
      { text: "近所にFURDIができたのがきっかけで入会。徒歩圏内にあるので天候にも左右されず通いやすい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "混雑する時間帯はマシンの順番待ちが発生することがある。平日の日中は空いていて快適。", attr: "利用歴4ヶ月のユーザー" },
      { text: "全国展開しているので引っ越し先でも通えそう。転勤族の自分には店舗数の多さが安心材料。", attr: "利用歴5ヶ月のユーザー" },
      { text: "営業時間が長いので、早朝や夜遅くでも通えるのが助かる。ライフスタイルに合わせやすい。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "入会・体験",
    summary: "無料体験の敷居の低さが好評で、体験から入会までの流れがスムーズだという声が多いです。無理な勧誘がない点も安心材料として挙げられています。",
    reviews: [
      { text: "無料体験で実際にサーキットトレーニングを一通り体験できた。入会前に雰囲気を確認できるのが良い。", attr: "体験後に入会したユーザー" },
      { text: "体験時に無理な勧誘がなく、自分のペースで入会を検討できた。押し売りがないのは好感が持てる。", attr: "入会1ヶ月のユーザー" },
      { text: "入会手続きが簡単で、体験当日にそのまま入会できた。始めたいと思った時にすぐ始められるのが良い。", attr: "入会2ヶ月のユーザー" },
      { text: "友人に誘われて体験したが、想像以上にAIの指導が分かりやすくてそのまま入会を決めた。", attr: "入会1ヶ月のユーザー" },
    ],
  },
];

const faqItems = [
  { q: "FURDIの入会金はいくらですか？", a: "入会金は19,800円です。キャンペーンで無料になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "AIトレーニングとは具体的にどんなものですか？", a: "大型モニターにAIトレーナーが表示され、正しいフォームのお手本を見せながらカウントやペース配分の指示を行います。200種類以上のメニューが用意されており、体力レベルや目的に合わせてAIが最適なメニューを提案してくれます。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回15〜30分が目安です。サーキット型トレーニングなので短時間でも効率的に全身を動かせます。自分のペースで調整できるため、体力に応じて時間を延ばすことも可能です。" },
  { q: "見学や体験はできますか？", a: "はい、無料体験が用意されています。実際にAIトレーナーによるサーキットトレーニングを体験できるので、入会前に雰囲気や運動強度を確認できます。公式サイトまたは各店舗にお問い合わせください。" },
  { q: "男性は利用できますか？", a: "いいえ、FURDIは女性専用のフィットネスジムです。" },
  { q: "退会方法を教えてください。", a: "退会希望の場合は、前月の10日までに店舗に申告が必要です。詳細は入会時にご確認ください。" },
  { q: "運動経験がなくても大丈夫ですか？", a: "はい、FURDIの利用者の多くは運動未経験者です。AIトレーナーが動きの手本を見せてくれるので、初心者でも安心してトレーニングに取り組めます。" },
  { q: "どのくらいの頻度で通うのがおすすめですか？", a: "週2〜3回が目安として推奨されていますが、通い放題プランなので毎日通っても追加料金はかかりません。自分のペースで通えます。" },
  { q: "混雑する時間帯はいつですか？", a: "平日の夕方17時〜19時頃と土曜日の午前中が比較的混みやすい傾向があります。平日の日中は空いていることが多いです。" },
  { q: "トレーニングメニューは自分で選べますか？", a: "はい、200種類以上のメニューから目的に合わせて選択できます。AIが体力レベルや目標に合わせたメニューを提案してくれるので、迷う心配もありません。" },
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
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function FurdiReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "口コミ・レビュー", "item": "https://personal-gym-biyori.com/#ranking"},
          {"@type": "ListItem", "position": 3, "name": "FURDI（ファディー）"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FURDI（ファディー）",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "FURDI（ファディー）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
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
        "dateModified": "2026-05-18"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FURDI" }]} />
      <ReviewSummary gymName="FURDI" />
      <GymCta slug="furdi" name="FURDI" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          FURDI（ファディー）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FURDI の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          FURDI（ファディー）はAI技術を活用した<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>サーキット型フィットネスジムです。月額<span className="font-bold bg-yellow-100 px-0.5">7,678円</span>〜の低価格で<span className="font-bold bg-yellow-100 px-0.5">予約不要</span>・<span className="font-bold bg-yellow-100 px-0.5">通い放題</span>。本記事では、FURDIの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの3つの強み</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FURDIのメリット・デメリット</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FURDIが向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>運動初心者で気軽に始めたい女性</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>月額1万円以下の低価格で通い放題を希望する方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>予約なしで好きな時間に通いたい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>人目を気にせず自分のペースで運動したい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>30分以内の短時間で効率よくトレーニングしたい方</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>男性（女性専用のため利用不可）</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>本格的な筋力トレーニング・筋肥大を目指す方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>トレーナーによる直接の対面指導を求める方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>フリーウェイトやバーベルを使ったトレーニングがしたい方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>食事指導も含めた総合的なサポートが必要な方</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの料金</h2>
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
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDI（ファディー） の口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">FURDIのGoogleマップ口コミを分析すると、月額7,678円で通い放題という圧倒的なコストパフォーマンスと、予約不要の手軽さに対する高評価が突出しています。AI指導への抵抗感は少なく、むしろ人目を気にせずマイペースにトレーニングできる点が女性ユーザーから支持されています。以下では、カテゴリ別に口コミの傾向をまとめています。</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/FURDI+%E3%83%95%E3%82%A1%E3%83%87%E3%82%A3%E3%83%BC/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップで口コミを見る</a></p>
          </div>
          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
              <div className="space-y-3">
                {cat.reviews.map((r, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">「{r.text}」</p>
                    <p className="text-xs text-gray-400">-- {r.attr}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">FURDIと他の人気ジムを比較しました。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">FURDI</th>
                  <th className="px-3 py-2 text-center font-medium">Nexus</th>
                  <th className="px-3 py-2 text-center font-medium">カーブス</th>
                  <th className="px-3 py-2 text-center font-medium">エクササイズコーチ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">月額料金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">7,678円〜</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額制</td>
                  <td className="px-3 py-2 text-center text-gray-700">6,820円〜</td>
                  <td className="px-3 py-2 text-center text-gray-700">9,900円〜</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">指導形式</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">AI×サーキット</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">サーキット</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI×マンツーマン</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">1回の時間</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">30分</td>
                  <td className="px-3 py-2 text-center text-gray-700">60分</td>
                  <td className="px-3 py-2 text-center text-gray-700">30分</td>
                  <td className="px-3 py-2 text-center text-gray-700">20分</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">予約</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">必要</td>
                  <td className="px-3 py-2 text-center text-gray-700">不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">必要</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">特徴</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">AI×予約不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">格安パーソナル</td>
                  <td className="px-3 py-2 text-center text-gray-700">女性専用</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI効率特化</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/nexus/" className="text-xs text-teal-600 hover:underline">Nexusの口コミを見る →</Link>
            <Link href="/review/curves/" className="text-xs text-teal-600 hover:underline">カーブスの口コミを見る →</Link>
            <Link href="/review/exercise-coach/" className="text-xs text-teal-600 hover:underline">エクササイズコーチの口コミを見る →</Link>
          </div>
        </section>
      <GymCta slug="furdi" name="FURDI" />


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIのよくある質問</h2>
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
        <section className="mb-10">
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/F6058J.T101150Z.Q136169A" alt="FURDI" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        <AuthorBox />

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">FURDIが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料体験で、AI×サーキットトレーニングの手軽さを体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
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
