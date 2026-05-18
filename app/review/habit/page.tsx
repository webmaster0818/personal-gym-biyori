import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "HABIT PERSONAL GYM（ハビットパーソナルジム）の口コミ・評判を徹底解説。業界最安級の料金設定、全国16店舗の基本情報、オリジナルプロテイン付きのサービスからメリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- affiliate ---------- */
const affiliateUrl = "https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A";

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "HABIT PERSONAL GYM" },
  { label: "店舗数", value: "全国16店舗（2026年4月時点）" },
  { label: "営業時間", value: "店舗により異なる" },
  { label: "特徴", value: "業界最安級の料金 / 料金の透明性 / オリジナルプロテイン付き / 栄養・休養アドバイス" },
  { label: "公式URL", value: "https://habit-training.com/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "業界最安級の料金設定",
    desc: "東京のパーソナルジム2ヶ月平均相場が約22.7万円とされる中、HABIT PERSONAL GYMは大幅に安い料金でサービスを提供しています。入会金30,000円も体験当日の入会で0円になるため、初期費用を抑えてパーソナルトレーニングを始められます。価格面でパーソナルジムを諦めていた方にも手が届きやすい料金体系です。",
  },
  {
    title: "料金の透明性（公式HPに全額掲載）",
    desc: "HABIT PERSONAL GYMは公式ホームページに全プランの料金を包み隠さず掲載しています。「カウンセリングに行くまで料金がわからない」というパーソナルジムにありがちな不安がなく、事前に総額を確認した上で来店できます。料金の透明性は信頼性の高さの表れであり、利用者からも高く評価されているポイントです。",
  },
  {
    title: "オリジナルプロテイン×栄養指導",
    desc: "トレーニング後にはHABIT独自のオリジナルプロテインが提供されます。さらにトレーナーから栄養面・休養面のアドバイスも受けられるため、ジムにいる時間だけでなく日常生活全体を通じたボディメイクが可能です。運動・栄養・休養の3つの柱で総合的にサポートしてくれる点が大きな強みです。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "東京平均の半額以下で通える圧倒的コスパ",
    desc: "東京のパーソナルジム2ヶ月平均が約22.7万円と言われる中、HABIT PERSONAL GYMはそれを大幅に下回る料金設定です。入会金30,000円も体験当日入会で無料になるキャンペーンがあり、初期費用を最小限に抑えられます。低価格ながらマンツーマン指導の質は維持されており、費用対効果の高さが際立っています。",
  },
  {
    title: "料金が明朗会計で安心して契約できる",
    desc: "公式サイトにすべてのプラン料金が明記されているため、カウンセリング前に総額を把握できます。パーソナルジムでは「行ってみるまで料金がわからない」ことが多い中、HABIT PERSONAL GYMの透明性は契約前の不安を大きく軽減してくれます。追加料金の心配が少なく、予算に合ったプランを事前に比較検討できるのも利点です。",
  },
  {
    title: "栄養・休養まで含めたトータルサポート",
    desc: "トレーニング指導に加えて、食事内容のアドバイスや休養・睡眠に関するアドバイスも受けられます。オリジナルプロテインの提供もあり、トレーニング効果を最大化するための環境が整っています。「運動だけでなく生活習慣全体を改善したい」という方にとって、バランスの取れたサポート体制は大きな魅力です。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "店舗が東京・大阪に集中しており地方は少ない",
    desc: "HABIT PERSONAL GYMは全国16店舗を展開していますが、中目黒・代々木上原・白金高輪・桜新町・大阪梅田など、東京・大阪エリアが中心です。地方在住の方は通える店舗が見つからない可能性があるため、入会前に最寄り店舗の有無を確認する必要があります。今後の店舗拡大に期待したいところです。",
  },
  {
    title: "大手と比べると知名度がまだ低い",
    desc: "RIZAPやチキンジムなどの大手と比較すると、HABIT PERSONAL GYMの知名度はまだ発展途上です。口コミの絶対数が少ないため、情報収集に時間がかかることがあります。ただし、Google口コミでは高評価が多く、満足度95%と公表されていることから、実際の利用者からの評判は良好と言えます。",
  },
  {
    title: "店舗によって設備や広さに差がある場合も",
    desc: "16店舗それぞれの立地や物件が異なるため、店舗によってトレーニングスペースの広さやマシンのラインナップにばらつきがある可能性があります。体験トレーニングを利用して、実際の設備や雰囲気を確認してから入会を決めることをおすすめします。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "入会金", duration: "—", price: "30,000円", note: "体験当日入会で0円" },
  { name: "パーソナルトレーニング", duration: "要確認", price: "業界最安級", note: "公式サイトに全プラン掲載" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの質に関する口コミは非常に好意的です。「一人ひとりに合わせた指導」「モチベーションを上げてくれる声かけ」が高く評価されており、初心者でも安心して通えるとの声が目立ちます。",
    reviews: [
      { text: "担当トレーナーが毎回の体調やコンディションに合わせてメニューを調整してくれる。無理のない範囲で追い込んでくれるので、効率よく鍛えられている。", attr: "入会4ヶ月のユーザー" },
      { text: "トレーニング中のフォームチェックが的確で、自己流では気づけなかった癖を修正してもらえた。正しいフォームが身について怪我の不安がなくなった。", attr: "利用歴6ヶ月のユーザー" },
      { text: "トレーナーの方が明るくて話しやすい。トレーニング中の雑談も楽しく、ジムに行くのが苦にならない雰囲気を作ってくれる。", attr: "入会2ヶ月のユーザー" },
      { text: "栄養面のアドバイスもトレーナーから直接もらえるのが良い。ただ、トレーナーによって知識量に差があると感じることもある。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "料金面では「パーソナルジムなのにこの価格は驚き」という評価が多く、コストパフォーマンスの高さが最大の魅力として挙げられています。公式サイトでの料金明示も信頼感につながっています。",
    reviews: [
      { text: "他のパーソナルジムの半額以下で通えているので、コスパは間違いなく業界トップクラス。プロテインも込みでこの料金は破格だと思う。", attr: "他社比較検討後に入会したユーザー" },
      { text: "公式サイトで料金が全部公開されていたので、事前に予算を立てやすかった。カウンセリングで追加費用の話が出ることもなく安心だった。", attr: "入会1ヶ月のユーザー" },
      { text: "入会金が体験当日の入会で無料になったので、初期費用がかなり抑えられた。この特典は大きい。", attr: "入会時に特典を利用したユーザー" },
      { text: "安いからと言って質が低いわけではない。むしろトレーニング内容は充実しており、高額ジムと遜色ないと感じている。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
  {
    title: "ダイエット・ボディメイク効果",
    summary: "短期間での体型変化を実感している利用者が多く、ダイエット目的での入会に対する満足度は高い傾向にあります。栄養指導との相乗効果が成果の鍵になっているようです。",
    reviews: [
      { text: "2ヶ月で体脂肪率が4%下がった。トレーニングだけでなく食事のアドバイスも的確で、無理な食事制限なしで結果が出た。", attr: "ダイエット目的で入会したユーザー" },
      { text: "体重よりも見た目の変化が大きい。姿勢が良くなり、同僚から「痩せた？」と聞かれるようになった。", attr: "利用歴3ヶ月のユーザー" },
      { text: "週2回のペースで通い始めて3ヶ月、ウエストが5cm縮んだ。数値で効果が見えるのでモチベーションが維持しやすい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "トレーニング効果を感じるには最低2ヶ月は必要だと思う。1ヶ月で辞めてしまうのはもったいない。継続が大切。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "食事指導",
    summary: "栄養面のアドバイスはトレーニングとセットで提供されており、実生活に取り入れやすい内容が好評です。オリジナルプロテインの提供も含め、食事面のサポートが充実しています。",
    reviews: [
      { text: "極端な食事制限を勧められず、日常の食事をベースにした改善提案をしてくれる。無理なく続けられるのがありがたい。", attr: "利用歴4ヶ月のユーザー" },
      { text: "トレーニング後にもらえるオリジナルプロテインが美味しい。プロテインを自分で用意する手間と費用が省けるのも嬉しい。", attr: "入会3ヶ月のユーザー" },
      { text: "コンビニや外食でも何を選べばいいかアドバイスしてもらえるので、忙しい日でも食事管理が続けやすい。", attr: "利用歴2ヶ月のユーザー" },
      { text: "休養の重要性も教えてもらえたのが良かった。睡眠や休息日の過ごし方まで指導してくれるジムは少ないと思う。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
  {
    title: "設備・清潔感",
    summary: "各店舗は清潔に保たれており、トレーニング環境に対する評価は良好です。マンツーマン指導のため、他の利用者を気にせずに集中できる点も好評です。",
    reviews: [
      { text: "店内は常に清潔で気持ちよく使える。マシンやマットもきれいに手入れされており、衛生面は安心。", attr: "利用歴4ヶ月のユーザー" },
      { text: "コンパクトな店舗だが、マンツーマンなので狭さを感じることはない。必要な設備はきちんと揃っている。", attr: "利用歴2ヶ月のユーザー" },
      { text: "白を基調とした内装で明るい雰囲気。おしゃれな空間でモチベーションが上がる。", attr: "入会1ヶ月のユーザー" },
      { text: "大型ジムのような充実した設備ではないが、パーソナルトレーニングに必要なものは揃っている。シンプルで使いやすい。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "予約の取りやすさ",
    summary: "予約は比較的取りやすいという声が多く、柔軟な時間帯で通える利便性が評価されています。ただし、人気店舗では混雑時間帯の予約が埋まりやすいとの指摘もあります。",
    reviews: [
      { text: "予約は取りやすく、希望の時間に入れないことはほとんどない。直前の変更にも対応してもらえるので助かる。", attr: "利用歴5ヶ月のユーザー" },
      { text: "中目黒店は人気があるのか、夜の時間帯は早めに予約しないと埋まっていることがある。平日昼間は空いている。", attr: "中目黒店利用ユーザー" },
      { text: "仕事の都合で急な予定変更が多いが、キャンセル・振替に柔軟に対応してもらえるのがありがたい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "週末は人気の時間帯が埋まりやすいが、早めに予約すれば問題ない。平日は比較的自由に予約できる。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "勧誘・営業",
    summary: "体験時の勧誘については「押し売り感がなく安心だった」という声が多く、入会を急かされる雰囲気は少ないようです。料金の透明性もあり、信頼感のある対応が評価されています。",
    reviews: [
      { text: "体験後の入会勧誘は控えめで、「検討してからで大丈夫です」と言ってもらえた。無理に契約を勧められることはなかった。", attr: "体験来店ユーザー" },
      { text: "料金が公式サイトに掲載されているので、事前に確認した上で体験に行けた。カウンセリングでのサプライズがなく、安心感があった。", attr: "体験来店ユーザー" },
      { text: "入会後に追加サービスの営業を受けたことは一度もない。純粋にトレーニングに集中できる環境。", attr: "入会5ヶ月のユーザー" },
      { text: "「他ジムとも比較してから決めたい」と伝えたら、快く了承してくれた。体験に行きやすい雰囲気だった。", attr: "複数社比較検討中のユーザー" },
    ],
  },
  {
    title: "立地・アクセス",
    summary: "各店舗は駅から近い立地が多く、通いやすさが評価されています。ただし店舗数が16店舗と限られるため、最寄りに店舗があるかの確認が必要です。",
    reviews: [
      { text: "中目黒駅から徒歩圏内でアクセス良好。仕事帰りにふらっと寄れる距離感がちょうどいい。", attr: "中目黒店利用ユーザー" },
      { text: "代々木上原店は駅から近くて通いやすい。住宅街の中にあるので人目も気にならず、落ち着いて通える。", attr: "代々木上原店利用ユーザー" },
      { text: "梅田店は駅から近いが、ビルの中にあるため初回は少し迷った。一度行けば問題ない。", attr: "大阪梅田店利用ユーザー" },
      { text: "地方に店舗がないのが残念。東京・大阪以外にも展開してほしい。", attr: "地方在住の検討ユーザー" },
    ],
  },
  {
    title: "初心者の使いやすさ",
    summary: "運動経験が少ない方やジム初心者からの評価が特に高いです。マンツーマン指導ならではの丁寧な対応と、気軽に通える低価格設定が初心者の心理的ハードルを下げています。",
    reviews: [
      { text: "運動は学生時代以来だったが、トレーナーが基礎から丁寧に教えてくれるので不安なく始められた。ペースも自分に合わせてもらえる。", attr: "運動未経験で入会したユーザー" },
      { text: "パーソナルジムは敷居が高いイメージだったが、料金が安いので気軽に始められた。実際に通ってみると居心地が良い。", attr: "入会2ヶ月のユーザー" },
      { text: "マンツーマンなので周りの目を気にせずにトレーニングできる。フォームが間違っていてもその場で修正してもらえるので安心。", attr: "入会1ヶ月のユーザー" },
      { text: "初心者でも成果が出やすいプログラムが組まれている。3ヶ月で明らかに体が変わり、自信がついた。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "継続のしやすさ",
    summary: "低価格であること、トレーナーとの相性が良いこと、栄養面のサポートがあることが継続のしやすさにつながっています。満足度95%という数字にも納得の声が多いです。",
    reviews: [
      { text: "月々の負担が少ないので、長期間通い続けやすい。高額ジムだと「元を取らないと」というプレッシャーがあるが、HABITにはそれがない。", attr: "利用歴8ヶ月のユーザー" },
      { text: "トレーナーとの関係性が良好で、毎回の来店が楽しみ。人間関係の面でも通い続けたくなるジム。", attr: "利用歴6ヶ月のユーザー" },
      { text: "栄養や休養のアドバイスを実生活に取り入れることで、ジム以外の時間も健康意識が高まった。生活全体が変わった実感がある。", attr: "利用歴5ヶ月のユーザー" },
      { text: "週1回のペースで無理なく通えている。低価格だからこそ「もう少し続けてみよう」と思える。結果的に長く続いている。", attr: "利用歴7ヶ月のユーザー" },
    ],
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "HABIT PERSONAL GYMの入会金はいくらですか？", a: "入会金は30,000円（税込）です。体験トレーニング当日に入会すると0円になるキャンペーンが実施されています。" },
  { q: "HABIT PERSONAL GYMの料金は公式サイトで確認できますか？", a: "はい、全プランの料金が公式サイトに掲載されています。事前に総額を確認した上でカウンセリングに臨むことができます。" },
  { q: "プロテインは無料で提供されますか？", a: "はい、トレーニング後にHABITオリジナルプロテインが提供されます。自分でプロテインを用意する必要はありません。" },
  { q: "食事指導は受けられますか？", a: "はい、トレーナーから栄養面のアドバイスを受けられます。さらに休養や睡眠に関するアドバイスも含まれており、トータルでのボディメイクをサポートしてもらえます。" },
  { q: "HABIT PERSONAL GYMはどこに店舗がありますか？", a: "東京（中目黒、代々木上原、白金高輪、桜新町、梅ヶ丘、神田、学芸大学など）と大阪（梅田）を中心に全国16店舗を展開しています。詳細は本ページ下部の店舗一覧をご確認ください。" },
  { q: "体験トレーニングはありますか？", a: "はい、体験トレーニングが用意されています。体験当日に入会すると入会金が0円になる特典もあるため、まずは体験から始めることをおすすめします。" },
  { q: "女性でも通いやすいですか？", a: "はい、多くの女性が利用しています。マンツーマン指導なので周りの目を気にする必要がなく、トレーニング強度も個人に合わせて調整してもらえます。" },
  { q: "退会・解約はできますか？", a: "退会手続きは店舗で行います。詳細な条件は契約内容によって異なるため、入会時に確認することをおすすめします。" },
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

/* ---------- 店舗一覧 ---------- */
type StoreItem = { name: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "東京", stores: [{ name: "中目黒店" }, { name: "代々木上原店" }, { name: "白金高輪店" }, { name: "桜新町店" }, { name: "梅ヶ丘店" }, { name: "神田店" }, { name: "学芸大学店" }, { name: "三軒茶屋店" }, { name: "経堂店" }, { name: "自由が丘店" }, { name: "駒沢大学店" }, { name: "用賀店" }, { name: "明大前店" }, { name: "千歳船橋店" }] },
  { region: "大阪", stores: [{ name: "梅田店" }, { name: "心斎橋店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "HABIT PERSONAL GYMの基本情報" },
  { id: "overview", label: "HABIT PERSONAL GYMの概要" },
  { id: "merit-demerit", label: "HABIT PERSONAL GYMのメリット・デメリット" },
  { id: "pricing", label: "HABIT PERSONAL GYMの料金" },
  { id: "reviews", label: "HABIT PERSONAL GYMの口コミ分析" },
  { id: "faq", label: "HABIT PERSONAL GYMのよくある質問" },
  { id: "stores", label: "HABIT PERSONAL GYMの店舗一覧" },
];

export default function HabitReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "口コミ・レビュー", "item": "https://personal-gym-biyori.com/#ranking"},
          {"@type": "ListItem", "position": 3, "name": "HABIT PERSONAL GYM"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "HABIT PERSONAL GYM（ハビット）",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "65",
          "reviewCount": "65"
        }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "HABIT PERSONAL GYM" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          HABIT PERSONAL GYM（ハビット）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            HABIT の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          HABIT PERSONAL GYM（ハビットパーソナルジム）は、東京・大阪を中心に全国16店舗を展開するパーソナルトレーニングジムです。業界最安級の料金設定と料金の透明性を強みに、オリジナルプロテインの提供や栄養・休養面のアドバイスなど、トレーニング以外のサポートも充実。利用者満足度95%と高い評価を得ています。本記事では、HABIT PERSONAL GYMの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
        </p>

        {/* ---------- 目次 ---------- */}
        <nav className="bg-gray-50 rounded-lg p-5 mb-10">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-teal-700 hover:text-teal-500 hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-800">
                      {row.isLink ? (
                        <a href={row.value} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- 概要・3つの強み ---------- */}
        <section id="overview" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの概要</h2>
          <h3 className="text-lg font-bold mb-4">HABIT PERSONAL GYMの3つの強み</h3>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">HABIT PERSONAL GYMのメリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>
                  {m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-4 text-red-700">HABIT PERSONAL GYMのデメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>
                  {d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 料金 ---------- */}
        <section id="pricing" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            HABIT PERSONAL GYMは業界最安級の料金設定を強みとしています。全プランの料金が公式サイトに掲載されているため、詳細な料金はそちらでご確認ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">項目</th>
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
          <p className="text-xs text-gray-500 mt-3">
            ※ 料金の詳細は<a href={affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline">公式サイト</a>に全プラン掲載されています。入会金30,000円は体験当日入会で0円になります。
          </p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            HABIT PERSONAL GYMのGoogleマップ口コミを分析すると、料金のコスパやトレーナーの質に関する好意的な評価が目立ちます。満足度95%という公表データにも裏付けされた高い評価を得ています。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">
              ※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/HABIT+PERSONAL+GYM/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/HABIT PERSONAL GYM/</a>
            </p>
          </div>

          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
              <div className="space-y-3">
                {cat.reviews.map((r, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{r.text}</p>
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
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">HABIT PERSONAL GYMと他の人気ジムを比較しました。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">HABIT</th>
                  <th className="px-3 py-2 text-center font-medium">BEYOND</th>
                  <th className="px-3 py-2 text-center font-medium">Nexus</th>
                  <th className="px-3 py-2 text-center font-medium">FURDI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">料金体系</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">月額制</td>
                  <td className="px-3 py-2 text-center text-gray-700">290,400円/16回</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額制</td>
                  <td className="px-3 py-2 text-center text-gray-700">月額7,678円〜</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">指導形式</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI×サーキット</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">食事指導</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">あり</td>
                  <td className="px-3 py-2 text-center text-gray-700">糖質制限なし</td>
                  <td className="px-3 py-2 text-center text-gray-700">あり</td>
                  <td className="px-3 py-2 text-center text-gray-700">なし</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">店舗立地</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">住宅街密着</td>
                  <td className="px-3 py-2 text-center text-gray-700">駅近</td>
                  <td className="px-3 py-2 text-center text-gray-700">駅近</td>
                  <td className="px-3 py-2 text-center text-gray-700">全国展開</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">特徴</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">住宅街密着</td>
                  <td className="px-3 py-2 text-center text-gray-700">トレーナー質◎</td>
                  <td className="px-3 py-2 text-center text-gray-700">格安パーソナル</td>
                  <td className="px-3 py-2 text-center text-gray-700">予約不要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/beyond/" className="text-xs text-teal-600 hover:underline">BEYONDの口コミを見る →</Link>
            <Link href="/review/nexus/" className="text-xs text-teal-600 hover:underline">Nexusの口コミを見る →</Link>
            <Link href="/review/furdi/" className="text-xs text-teal-600 hover:underline">FURDIの口コミを見る →</Link>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMのよくある質問</h2>
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

        {/* ---------- 店舗一覧 ---------- */}
        <section id="stores" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">HABIT PERSONAL GYMの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            HABIT PERSONAL GYMは東京・大阪を中心に全国16店舗を展開しています（2026年4月時点）。以下は都道府県別の店舗一覧です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-28">都道府県</th>
                  <th className="px-4 py-3 text-left font-medium">店舗名</th>
                </tr>
              </thead>
              <tbody>
                {storesByRegion.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {row.stores.map((s, i) => (
                        <span key={s.name}>
                          {i > 0 && "\u3001"}
                          {s.href ? <Link href={s.href} className="text-teal-600 hover:underline">{s.name}</Link> : s.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 店舗情報は2026年4月時点のものです。最新の店舗情報は<a href={affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline">公式サイト</a>でご確認ください。
          </p>
        </section>

        {/* ---------- Author Box ---------- */}
        <AuthorBox />

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">HABIT PERSONAL GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは体験トレーニングで、業界最安級のパーソナルジムを体感してみましょう。体験当日の入会で入会金0円！
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            公式サイトへ
          </a>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
