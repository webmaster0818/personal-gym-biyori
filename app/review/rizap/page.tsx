import type { Metadata } from "next";
import GmapStats from "@/components/GmapStats";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "RIZAP（ライザップ）の口コミ・評判｜総額382,800円・返金保証の条件を検証",
  description:
    "RIZAP（ライザップ）の口コミ・評判を、公式の料金表・会則・店舗一覧で検証します。BASIC・PRIMEの期間別総額と1回あたりの料金、30日間全額返金保証と中途解約の返金計算、全国100店舗・45都道府県の一覧、Googleマップ31店舗の集計をまとめています。",
};

/*
 * 2026-10-27 改訂: 料金・返金・中途解約・入会条件・店舗・営業時間・運営会社は公式サイト（/plan・/guide/payment・会則PDF 2026.4.1改訂・/studios/prefectures/1〜47・rizap.co.jp/about）を2026-10-27に確認した値。
 * 店舗一覧は公式の都道府県別ページ45件（鳥取・島根はページなし）の掲載店舗を当サイトで集計＝100店舗（公式サイトマップの店舗ページ数100件と一致）。
 * 訂正: 「16万人」→公式「18万人以上（2022年8月末時点の累計会員数）」／営業時間「10:00〜22:00」→「7:00〜23:00（錦糸町のみ10:00〜22:00）」／
 *       「管理栄養士が毎日チェック」→公式は専属トレーナーがLINEで指導・管理栄養士には相談可／「利用者の約4割が女性」は公式に記載がなく削除／
 *       店舗表の公式に無い店舗（池袋東口・八王子・神楽坂・練馬・蒲田・横浜西口・戸塚・春日部・豊田・高槻・RIZAP WOMAN新宿など）を削除し、公式100店舗に差し替え。
 * 出典のない口コミのカテゴリ別要約（10項目）は削除し、Googleマップ集計と検索上位記事の論点照合に置き換えた。
 */
const CHECKED = "2026年10月27日";

const SRC = {
  plan: "https://www.rizap.jp/plan",
  payment: "https://www.rizap.jp/guide/payment",
  rules: "https://www.rizap.jp/images/rizap_kaisoku.pdf",
  meal: "https://www.rizap.jp/charm/meal",
  flow: "https://www.rizap.jp/guide/flow",
  studios: "https://www.rizap.jp/studios/search/area",
  top: "https://www.rizap.jp/",
  company: "https://rizap.co.jp/about",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const yen = (n: number) => `${n.toLocaleString()}円`;

const summary = [
  { label: "どんなジムか", value: "RIZAP株式会社（東京都新宿区）が運営する、完全個室・専属トレーナー制のパーソナルジムです。1回50分・週2回のトレーニングに、1日3食の食事指導（LINEで毎日報告）を組み合わせます。公式サイトは会員実績を「18万人以上（2022年8月末時点の累計）」と表記しています。" },
  { label: "料金", value: "BASIC 2ヶ月16回はコース料金327,800円に入会金55,000円を加えた総額382,800円（税込）で、1回あたり23,925円です。月額制のPRIMEは月8回77,000円ですが、別途登録料440,000円と入会金がかかります。" },
  { label: "返金・解約", value: "コース初回利用日から30日以内であれば、理由を問わず返金を受けられる全額返金保証があります。30日を過ぎた後の中途解約は、未実施分のコース費用から違約金（10%または2万円の低い方）を差し引いて返還されます。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは全国100店舗・45都道府県です（鳥取県・島根県は店舗なし）。女性専用店舗は銀座（女性専用）の1店舗で、営業時間は錦糸町店を除き7:00〜23:00です。" },
  { label: "向いている方", value: "費用をかけてでも、食事を含めた生活習慣を短期間で管理してもらいたい方に向いています。費用を抑えたい方や、糖質を段階的に調整する食事管理に抵抗がある方は、他のジムと比較してから判断されることをおすすめします。" },
  { label: "口コミ", value: "当サイトが集計したGoogleマップの31店舗・1,057件の評点は、店舗単純平均4.49です。トレーナーの説明のわかりやすさや包括的なサポートを評価する声が多く、料金の高さと一部店舗の内装の古さが主な指摘です。" },
];

const basicInfo = [
  { label: "運営会社", value: "RIZAP株式会社（東京都新宿区西新宿8-17-1 住友不動産新宿グランドタワー36階・2010年5月設立・代表取締役社長 瀬戸健）" },
  { label: "店舗数", value: "全国100店舗・45都道府県（公式の都道府県別店舗一覧を当サイトで集計・2026年10月27日確認）" },
  { label: "営業時間", value: "7:00〜23:00（錦糸町店のみ10:00〜22:00）" },
  { label: "トレーニング", value: "1回50分・週2回が基本。完全個室・専属トレーナー制" },
  { label: "入会条件", value: "満16歳以上（18歳未満は親権者の同意が必要）。妊娠中の方は入会不可。小学生以下の子どもの同伴は不可（会則）" },
  { label: "特典", value: "プログラム期間中は店内のマルチマシンルーム（要予約）と全国のchocoZAPを無料で利用可能。ウェア・タオルは無料貸出" },
  { label: "公式URL", value: "https://www.rizap.jp/", isLink: true },
];

const strengths = [
  {
    title: "専属トレーナーが1日3食の食事まで指導",
    desc: "公式サイトでは、2ヶ月で180食を専属トレーナーが指導すると説明しています。食事は写真付きでLINEから毎日報告し、糖質は「減量期」「筋肉向上期」「スタイルキープ期」の3段階で調整します。医師や管理栄養士を含む専門チームには、食事や健康面の相談ができます。",
  },
  {
    title: "全国100店舗・7時から23時まで営業",
    desc: "公式の店舗一覧には45都道府県・100店舗が掲載されており、錦糸町店を除く99店舗が7:00〜23:00の営業です。出勤前や仕事帰りにも予約を入れやすい営業時間です。",
  },
  {
    title: "30日間の全額返金保証を会則で定めている",
    desc: "全額返金保証は会則第26条に定められており、コース初回利用日から30日以内に来店・書面で申し出ると、支払い済みの費用が返還されます。理由は問われませんが、適用を受けると退会扱いとなり、再入会はできません。",
  },
];

const merits = [
  {
    title: "トレーニング以外の時間も管理を受けられる",
    desc: "週2回のセッションに加え、毎日の食事報告へのフィードバックがあるため、ジムにいない時間の行動も含めて管理を受けられます。当サイトが要約したGoogleマップの口コミでも、自分だけでは続かない方が強制力を求めて入会し、それを評価する声が多く見られました。",
  },
  {
    title: "期間中はchocoZAPを無料で使える",
    desc: "BASIC・PRIMEともに、プログラム期間中は全国のchocoZAPを無料で利用できます。セッションのない日の自主トレーニングに使えるため、週2回以外の運動の場所を別途契約する必要がありません。",
  },
  {
    title: "勧誘をしない方針を公表している",
    desc: "公式サイトのよくある質問では、カウンセリングのみの来店でも問題ないとし、無理な勧誘は一切行わないと記載しています。カウンセリングは約60〜90分で、体組成などの計測結果をその場で受け取れます。",
  },
];

const demerits = [
  {
    title: "総額が高く、2ヶ月以降も1ヶ月163,900円かかる",
    desc: "BASICは2ヶ月16回で総額382,800円（税込）です。公式の料金表では月8回の継続が1ヶ月163,900円で、3ヶ月なら総額546,700円になります。一括払いは銀行振込またはJデビットで、分割払い（最大60回）は実質年率19.8%の手数料がかかります。",
  },
  {
    title: "糖質を段階的に制限する食事に慣れが必要",
    desc: "食事指導は糖質量を段階的に調整する方式で、プログラム初期の減量期は糖質を控える内容です。外食や会食が多い方は、カウンセリングで具体的な食事の例を確認しておくと安心です。",
  },
  {
    title: "休会制度が会則にない",
    desc: "会則（2026年4月1日改訂）には有効期限の延長手続き（第20条）はありますが、休会の条項はありません。延長期間や費用は「別途定める」とされているため、出張や転勤の予定がある方は契約前にご確認ください。",
  },
];

const basicPlans = [
  { term: "2ヶ月", n: 16, fee: 327800 },
  { term: "3ヶ月", n: 24, fee: 491700 },
  { term: "6ヶ月", n: 48, fee: 983400 },
  { term: "12ヶ月", n: 96, fee: 1966800 },
];
const primePlans = [
  { term: "2ヶ月", n: 16, fee: 154000 },
  { term: "3ヶ月", n: 24, fee: 231000 },
  { term: "6ヶ月", n: 48, fee: 462000 },
  { term: "12ヶ月", n: 96, fee: 924000 },
  { term: "20ヶ月", n: 160, fee: 1540000 },
];
const ENTRY = 55000;
const PRIME_REG = 440000;

const issueCheck = [
  { issue: "料金が高い・やめたほうがいい", official: "BASIC 2ヶ月の総額は382,800円、1回あたり23,925円です。30日以内であれば全額返金保証を利用できるため、合わない場合の負担には上限があります。" },
  { issue: "食事制限がつらい", official: "公式は糖質を3段階で調整する方式と説明しています。毎食へのフィードバックは専属トレーナーが行い、管理栄養士には相談できる体制です。" },
  { issue: "卒業後にリバウンドする", official: "BASICは期間を定めたコースです。継続型のPRIMEは平均継続期間を20ヶ月（2021年度の契約者実績）と公表しています。" },
  { issue: "返金保証は本当に使えるのか", official: "会則第26条で、初回利用日から30日以内・来店書面での手続きを条件に、支払い済みの諸費用の全額を返還すると定めています。" },
  { issue: "店舗数（記事により119店舗など）", official: "2026年10月27日時点の公式店舗一覧は100店舗・45都道府県です。古い記事の店舗数は現在と一致しません。" },
];

const faqItems = [
  { q: "RIZAPの入会金はいくらですか？", a: "入会金は55,000円（税込）で、BASIC・PRIME共通です。PRIMEでは別途登録料440,000円（税込）がかかります。キャンペーンにより変わる場合があるため、公式サイトで最新情報をご確認ください。" },
  { q: "RIZAPは完全個室ですか？", a: "はい、トレーニングは完全個室で行います。店舗によっては、別途予約制のマルチマシンルームも利用できます。" },
  { q: "30日間全額返金保証の条件を教えてください。", a: "会則第26条によると、入会時に契約したコースの初回利用日から30日以内（営業日でない場合は翌営業日）に来店し、書面で申し出ることが条件です。電話・FAX・メールでは受け付けていません。会則上は「支払い済みの諸費用の全額」を返還するとしており、諸費用は第9条で入会金とコース費用を含むと定義されています。一方、料金ページ等の表記は「コース料金」のため、入会金の扱いはカウンセリングで書面確認をおすすめします。適用を受けると退会扱いとなり、再適用・再入会はできません（2026年10月27日確認）。" },
  { q: "30日を過ぎてから解約するといくら戻りますか？", a: "会則第21条では、コース費用を予定回数で割った金額に未実施の回数を掛けた額から、その10%または2万円のいずれか低い金額を差し引いて返還すると定めています。入会金などコース費用以外は返還されません。分割払いの場合は別の規定が適用されます。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回50分のマンツーマントレーニングを、週2回行うのが基本です。" },
  { q: "食事制限はどの程度の厳しさですか？", a: "糖質を「減量期」「筋肉向上期」「スタイルキープ期」の3段階で調整する方式です。初期の減量期は糖質を控える内容で、その後は段階的に摂取量を戻していきます。食事は毎日LINEで写真付きで報告し、専属トレーナーからフィードバックを受けます。" },
  { q: "女性専用の店舗はありますか？", a: "公式の店舗一覧では、女性専用店舗は「銀座（女性専用）」の1店舗です（東京都中央区銀座）。その他の店舗も完全個室のため、他の利用者と顔を合わせずにトレーニングできます。利用者の男女比は公式サイトに記載がありません。" },
  { q: "無料カウンセリングでは何をしますか？", a: "所要時間は約60〜90分で、体組成などの計測とカウンセリングを行い、計測結果のシートを受け取れます。公式サイトでは、カウンセリングのみでも問題ないとし、無理な勧誘は行わないと記載しています。" },
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

/* ---------- 店舗一覧（公式の都道府県別店舗一覧・2026-10-27 集計） ---------- */
type StoreItem = { name: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "北海道", stores: [{ name: "札幌", href: "/review/rizap/sapporo/" }] },
  { region: "青森県", stores: [{ name: "青森" }] },
  { region: "岩手県", stores: [{ name: "盛岡" }] },
  { region: "宮城県", stores: [{ name: "仙台", href: "/review/rizap/sendai/" }] },
  { region: "秋田県", stores: [{ name: "秋田" }] },
  { region: "山形県", stores: [{ name: "山形" }] },
  { region: "福島県", stores: [{ name: "郡山" }] },
  { region: "茨城県", stores: [{ name: "水戸" }, { name: "つくば" }, { name: "土浦" }] },
  { region: "栃木県", stores: [{ name: "宇都宮" }, { name: "小山" }] },
  { region: "群馬県", stores: [{ name: "高崎", href: "/review/rizap/takasaki/" }] },
  { region: "埼玉県", stores: [{ name: "大宮西口", href: "/review/rizap/omiya/" }, { name: "浦和", href: "/review/rizap/urawa/" }, { name: "所沢", href: "/review/rizap/tokorozawa/" }, { name: "本川越" }, { name: "南越谷" }, { name: "川口", href: "/review/rizap/kawaguchi/" }] },
  { region: "千葉県", stores: [{ name: "千葉", href: "/review/rizap/chiba/" }, { name: "柏", href: "/review/rizap/kashiwa/" }, { name: "松戸" }, { name: "船橋", href: "/review/rizap/funabashi/" }] },
  { region: "東京都", stores: [{ name: "新宿", href: "/review/rizap/shinjuku/" }, { name: "池袋西口", href: "/review/rizap/ikebukuro/" }, { name: "銀座", href: "/review/rizap/ginza/" }, { name: "銀座（女性専用）" }, { name: "品川", href: "/review/rizap/shinagawa/" }, { name: "恵比寿", href: "/review/rizap/ebisu/" }, { name: "上野", href: "/review/rizap/ueno/" }, { name: "北千住", href: "/review/rizap/kitasenju/" }, { name: "錦糸町", href: "/review/rizap/kinshicho/" }, { name: "自由が丘", href: "/review/rizap/jiyugaoka/" }, { name: "二子玉川", href: "/review/rizap/futakotamagawa/" }, { name: "下北沢" }, { name: "吉祥寺" }, { name: "立川", href: "/review/rizap/tachikawa/" }, { name: "町田", href: "/review/rizap/machida/" }, { name: "聖蹟桜ヶ丘" }] },
  { region: "神奈川県", stores: [{ name: "横浜東口", href: "/review/rizap/yokohama/" }, { name: "関内" }, { name: "川崎", href: "/review/rizap/kawasaki/" }, { name: "たまプラーザ" }, { name: "藤沢", href: "/review/rizap/fujisawa/" }, { name: "本厚木" }, { name: "小田原" }] },
  { region: "新潟県", stores: [{ name: "新潟", href: "/review/rizap/niigata/" }] },
  { region: "富山県", stores: [{ name: "富山" }] },
  { region: "石川県", stores: [{ name: "金沢", href: "/review/rizap/kanazawa/" }] },
  { region: "福井県", stores: [{ name: "福井" }] },
  { region: "山梨県", stores: [{ name: "甲府" }] },
  { region: "長野県", stores: [{ name: "長野" }, { name: "松本" }] },
  { region: "岐阜県", stores: [{ name: "岐阜" }] },
  { region: "静岡県", stores: [{ name: "静岡" }, { name: "浜松" }, { name: "沼津" }] },
  { region: "愛知県", stores: [{ name: "名古屋栄", href: "/review/rizap/nagoya/" }, { name: "名駅南" }, { name: "金山", href: "/review/rizap/kanayama/" }, { name: "豊橋" }, { name: "刈谷" }] },
  { region: "三重県", stores: [{ name: "四日市" }] },
  { region: "滋賀県", stores: [{ name: "滋賀" }] },
  { region: "京都府", stores: [{ name: "京都四条" }, { name: "京都河原町" }] },
  { region: "大阪府", stores: [{ name: "梅田", href: "/review/rizap/umeda/" }, { name: "なんば", href: "/review/rizap/namba/" }, { name: "天王寺", href: "/review/rizap/tennoji/" }, { name: "京橋" }, { name: "江坂" }, { name: "枚方" }, { name: "堺東" }, { name: "岸和田" }] },
  { region: "兵庫県", stores: [{ name: "神戸", href: "/review/rizap/kobe/" }, { name: "西宮北口" }, { name: "尼崎" }, { name: "明石" }, { name: "姫路" }] },
  { region: "奈良県", stores: [{ name: "奈良" }] },
  { region: "和歌山県", stores: [{ name: "和歌山" }] },
  { region: "岡山県", stores: [{ name: "岡山" }] },
  { region: "広島県", stores: [{ name: "広島", href: "/review/rizap/hiroshima/" }] },
  { region: "山口県", stores: [{ name: "下関" }] },
  { region: "徳島県", stores: [{ name: "徳島" }] },
  { region: "香川県", stores: [{ name: "高松" }] },
  { region: "愛媛県", stores: [{ name: "松山" }] },
  { region: "高知県", stores: [{ name: "高知" }] },
  { region: "福岡県", stores: [{ name: "天神", href: "/review/rizap/fukuoka/" }, { name: "博多", href: "/review/rizap/hakata/" }, { name: "小倉" }, { name: "久留米" }] },
  { region: "佐賀県", stores: [{ name: "佐賀" }] },
  { region: "長崎県", stores: [{ name: "長崎" }, { name: "佐世保" }] },
  { region: "熊本県", stores: [{ name: "熊本", href: "/review/rizap/kumamoto/" }] },
  { region: "大分県", stores: [{ name: "大分" }] },
  { region: "宮崎県", stores: [{ name: "宮崎" }] },
  { region: "鹿児島県", stores: [{ name: "鹿児島", href: "/review/rizap/kagoshima/" }] },
  { region: "沖縄県", stores: [{ name: "那覇" }] },
];
const storeTotal = storesByRegion.reduce((a, r) => a + r.stores.length, 0);
const topRegions = [...storesByRegion].sort((a, b) => b.stores.length - a.stores.length).slice(0, 5);

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RizapReview() {
  const sampleUnit = 327800 / 16;
  const sampleRemain = sampleUnit * 12;
  const samplePenalty = Math.min(sampleRemain * 0.1, 20000);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "RIZAP"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RIZAP（ライザップ）",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RIZAP（ライザップ）の口コミ・評判｜総額382,800円・返金保証の条件を検証",
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
        "dateModified": "2026-10-27"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RIZAP" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + 要点 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RIZAP（ライザップ）の口コミ・評判｜総額382,800円・返金保証の条件を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月27日（料金・会則・店舗一覧・営業時間・運営会社を公式サイトで再確認し、検索上位記事の論点と照合）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="RIZAPとは">
          <h2 className="font-bold text-gray-900 mb-3">RIZAP（ライザップ）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.plan}>公式 料金プラン</Src>・<Src href={SRC.rules}>RIZAP会則（2026年4月1日改訂）</Src>・<Src href={SRC.studios}>公式 店舗一覧</Src>・<Src href={SRC.company}>会社概要</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/rizap.jpg" alt="RIZAPの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">RIZAP 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="rizap" name="RIZAP" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">RIZAPの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">RIZAPの3つの特徴</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">RIZAPのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">RIZAPの料金（BASIC・PRIMEの期間別総額）</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">返金保証と中途解約の返金額</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">RIZAPの口コミ・評判</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">他のジムと比較（2ヶ月16回の総額）</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">RIZAPのよくある質問</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">RIZAPの店舗一覧（全国100店舗）</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">RIZAPが気になった方へ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="RIZAP" />
        <BrandFactCheck slug="rizap" />
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            RIZAP の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow">
            <img src="/ss-rizap.jpg" alt="RIZAP 口コミ・評判" className="w-full h-auto" />
          </a>
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの基本情報</h2>
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
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.company}>RIZAP株式会社 会社概要</Src>・<Src href={SRC.studios}>公式 店舗一覧</Src>・<Src href={SRC.rules}>会則 第5条・第15条</Src>・<Src href={SRC.plan}>料金プラン</Src>（{CHECKED}確認）。お客様相談室は0120-363-628（9:30〜17:30・土日祝と年末年始を除く）です。
          </p>
        </section>

        {/* ---------- 特徴 ---------- */}
        <section id="overview" className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの3つの特徴</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.meal}>公式 食事指導</Src>・<Src href={SRC.plan}>料金プラン</Src>・<Src href={SRC.rules}>会則 第26条</Src>（{CHECKED}確認）。</p>
        </section>

        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">RIZAPのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">RIZAPのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">RIZAPのデメリット</h3>
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
          <p className="text-xs text-gray-500 mt-4">出典: <Src href={SRC.plan}>料金プラン</Src>・<Src href={SRC.payment}>お支払いについて</Src>・<Src href={SRC.flow}>ご入会までの流れ</Src>・<Src href={SRC.rules}>会則</Src>（{CHECKED}確認）。</p>
        </section>

        {/* ---------- 料金 ---------- */}
        <section id="pricing" className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの料金（BASIC・PRIMEの期間別総額）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            当サイトでは{CHECKED}に公式の料金プランページを確認し、期間ごとの総額と1回あたりの金額を計算しました。1回あたりは、入会金（PRIMEは登録料も）を含む総額を回数で割った金額です（1円未満四捨五入）。
          </p>
          <h3 className="font-bold text-gray-800 mb-2">BASIC（月8回・期間を定めたコース）</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">期間</th>
                  <th className="px-4 py-3 text-left font-medium">回数</th>
                  <th className="px-4 py-3 text-left font-medium">コース料金</th>
                  <th className="px-4 py-3 text-left font-medium">総額（入会金込み）</th>
                  <th className="px-4 py-3 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {basicPlans.map((p) => (
                  <tr key={p.term} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{p.term}</td>
                    <td className="px-4 py-3 text-gray-700">{p.n}回</td>
                    <td className="px-4 py-3 text-gray-700">{yen(p.fee)}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium">{yen(p.fee + ENTRY)}</td>
                    <td className="px-4 py-3 text-gray-700">{yen(Math.round((p.fee + ENTRY) / p.n))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">PRIME（月8回77,000円の継続型・登録料440,000円）</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">期間</th>
                  <th className="px-4 py-2 text-left font-medium">回数</th>
                  <th className="px-4 py-2 text-left font-medium">プラン料金</th>
                  <th className="px-4 py-2 text-left font-medium">総額（登録料・入会金込み）</th>
                  <th className="px-4 py-2 text-left font-medium">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {primePlans.map((p) => (
                  <tr key={p.term} className="border-b border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{p.term}</td>
                    <td className="px-4 py-2 text-gray-700">{p.n}回</td>
                    <td className="px-4 py-2 text-gray-700">{yen(p.fee)}</td>
                    <td className="px-4 py-2 text-gray-800">{yen(p.fee + PRIME_REG + ENTRY)}</td>
                    <td className="px-4 py-2 text-gray-700">{yen(Math.round((p.fee + PRIME_REG + ENTRY) / p.n))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
            <li>・BASICの月8回の継続料金は1ヶ月163,900円です。2ヶ月で目標に届かず延長する場合の目安になります。</li>
            <li>・PRIMEは登録料があるため短期では割高ですが、20ヶ月継続すると1回あたり12,719円となり、BASIC 2ヶ月（23,925円）の約53%になります（当サイト計算）。公式はPRIMEの平均継続期間を20ヶ月（2021年度の契約者実績）としています。</li>
            <li>・支払いは一括の場合は銀行振込（前払い）またはJデビットです。クレジットカードは物販などに限られます。分割払いは最大60回・実質年率19.8%です。</li>
          </ul>
          <p className="text-xs text-gray-500">出典: <Src href={SRC.plan}>公式 料金プラン</Src>・<Src href={SRC.payment}>お支払いについて</Src>（{CHECKED}確認・税込）。キャンペーンにより変動する場合があります。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- 返金・中途解約 ---------- */}
        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの返金保証と中途解約の返金額</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-36 whitespace-nowrap">30日間全額返金保証</th><td className="px-4 py-3 text-gray-800">コース初回利用日から30日以内に来店・書面で申し出（電話・FAX・メール不可）。支払い済みの諸費用の全額を返還。適用後は退会扱いで、再適用・再入会は不可（会則第26条）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-36 whitespace-nowrap">初回トレーニング前の解約</th><td className="px-4 py-3 text-gray-800">支払い済みの諸費用を全額返還（会則第21条第2項）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-36 whitespace-nowrap">それ以降の中途解約</th><td className="px-4 py-3 text-gray-800">書面で申し出。未実施分のコース費用から、その10%または2万円のいずれか低い金額を差し引いて返還。入会金などコース費用以外は返還なし。分割払いは別規定（会則第21条第3項・第4項）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-36 whitespace-nowrap">有効期限の延長</th><td className="px-4 py-3 text-gray-800">所定の書面で手続き可能。延長期間等は別途定める（会則第20条）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-36 whitespace-nowrap">休会</th><td className="px-4 py-3 text-gray-800">会則に休会の条項なし</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            計算例（当サイト試算）：BASIC 2ヶ月16回（コース料金327,800円）を4回受けて31日目以降に解約する場合、未実施12回分のコース費用は{yen(sampleRemain)}です。その10%（{yen(sampleRemain * 0.1)}）は2万円より高いため、差し引かれるのは{yen(samplePenalty)}で、返還額は{yen(sampleRemain - samplePenalty)}となります。入会金55,000円は返還されません。
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.rules}>RIZAP会則（2026年4月1日改訂）第9条・第20条・第21条・第26条</Src>（{CHECKED}確認）。会則上の「諸費用」は入会金とコース費用等を合わせたものと定義されていますが、料金ページ等では返金対象を「コース料金」と表記しています。入会金の扱いは契約前に書面でご確認ください。</p>
        </section>

        {/* ---------- 口コミ ---------- */}
        <section id="reviews" className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの口コミ・評判</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            当サイトでは、Googleマップに掲載されているRIZAPの店舗の評点と件数を集計し、直近の投稿を読んで傾向を要約しました。個別の投稿文は転載していません。口コミサイト「みん評」は当サイトからページを閲覧できなかったため、件数・点数は掲載していません（{CHECKED}確認）。
          </p>

          <GmapStats slug="rizap" brand="RIZAP（ライザップ）" />

          <h3 className="font-bold text-gray-800 mb-2">Googleマップの口コミの傾向（編集部による要約・2026年9月6日取得）</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3 text-sm leading-relaxed text-gray-700 mb-8">
            <p><span className="font-semibold text-emerald-700">よく見られる好意的な声</span>：動作の理由から説明する指導のわかりやすさ、食事・生活習慣まで含めたサポート、当日の体調に合わせた重量調整など、個別対応への評価が中心です。自分に甘い性格だからこそ合っていたという、ご自身の性格を踏まえた声が多い点も特徴です。</p>
            <p><span className="font-semibold text-rose-700">気になる点・読み方の注意</span>：店舗の内装の古さに触れる声があります。また、ルームレンタルの利用者による投稿が混在しているため、口コミの文脈を見分けて読む必要があります。料金は業界でも高い水準にあるため、管理の手厚さに対してどこまで費用をかけるかという観点で判断することをおすすめします。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗（新宿・梅田・名古屋ほか）の直近の口コミを取得し、編集部が読んだうえで傾向を要約したものです。個々の体験は店舗・トレーナー・時期により異なります。出典: <a href="https://www.google.com/maps/search/RIZAP/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップ</a></p>
          </div>

          <h3 className="font-bold text-gray-800 mb-2">検索上位記事で取り上げられる論点と公式情報の照合</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「RIZAP 口コミ」「ライザップ 評判」で上位に表示される記事では、悪い評判、やめたほうがいいと言われる理由、リバウンドなどが主な見出しになっています。当サイトでは、各論点を{CHECKED}時点の公式情報と照合しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium w-44">論点</th>
                  <th className="px-3 py-2 text-left font-medium">公式情報で確認できること</th>
                </tr>
              </thead>
              <tbody>
                {issueCheck.map((r) => (
                  <tr key={r.issue} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 text-gray-800">{r.issue}</td>
                    <td className="px-3 py-2 text-gray-700">{r.official}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較（2ヶ月16回の総額）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">16回のコースがある主要ジムを、入会金を含む総額で比較しています。各社の値は当サイトが公式サイトで確認した金額です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">RIZAP</th>
                  <th className="px-3 py-2 text-center font-medium">BEYOND</th>
                  <th className="px-3 py-2 text-center font-medium">HABIT</th>
                  <th className="px-3 py-2 text-center font-medium">RITA STYLE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">16回のコース</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">BASIC 2ヶ月</td>
                  <td className="px-3 py-2 text-center text-gray-700">ライフプランニング16回</td>
                  <td className="px-3 py-2 text-center text-gray-700">集中ダイエット16回</td>
                  <td className="px-3 py-2 text-center text-gray-700">週2回 2ヶ月</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">入会金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">55,000円</td>
                  <td className="px-3 py-2 text-center text-gray-700">0円</td>
                  <td className="px-3 py-2 text-center text-gray-700">通常30,000円（体験当日入会で0円）</td>
                  <td className="px-3 py-2 text-center text-gray-700">43,780円</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">総額（税込）</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">382,800円</td>
                  <td className="px-3 py-2 text-center text-gray-700">290,400円</td>
                  <td className="px-3 py-2 text-center text-gray-700">142,400円＋入会金</td>
                  <td className="px-3 py-2 text-center text-gray-700">259,380円</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">返金保証</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">30日以内・理由を問わない</td>
                  <td className="px-3 py-2 text-center text-gray-700">公式に記載なし</td>
                  <td className="px-3 py-2 text-center text-gray-700">ダイエットコースが対象（条件は入会時に説明）</td>
                  <td className="px-3 py-2 text-center text-gray-700">減量目的で1ヶ月1kg超減らなかった場合</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">確認日</td>
                  <td className="px-3 py-2 text-center text-gray-500 text-xs bg-teal-50">2026年10月27日</td>
                  <td className="px-3 py-2 text-center text-gray-500 text-xs">2026年10月26日</td>
                  <td className="px-3 py-2 text-center text-gray-500 text-xs">2026年10月26日</td>
                  <td className="px-3 py-2 text-center text-gray-500 text-xs">2026年10月27日</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※HABITは入会金が体験当日の入会で0円になるキャンペーンがあります。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/beyond/" className="text-xs text-teal-600 hover:underline">BEYONDの口コミを見る →</Link>
            <Link href="/review/habit/" className="text-xs text-teal-600 hover:underline">HABITの口コミを見る →</Link>
            <Link href="/review/rita-style/" className="text-xs text-teal-600 hover:underline">RITA STYLEの口コミを見る →</Link>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="rizap" name="RIZAP" />

        <section id="faq" className="mb-12">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPのよくある質問</h2>
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
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの店舗一覧（全国{storeTotal}店舗）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            公式の都道府県別店舗一覧に掲載されている店舗を、当サイトで都道府県ごとに集計しました（{CHECKED}確認）。店舗数が多いのは{topRegions.map((r) => `${r.region}（${r.stores.length}店舗）`).join("・")}です。リンクのある店舗は、当サイトの店舗別ページをご覧いただけます。
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
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}（{row.stores.length}）</td>
                    <td className="px-4 py-3 text-gray-700">
                      {row.stores.map((s, i) => (
                        <span key={s.name}>
                          {i > 0 && "、"}
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
            出典: <Src href={SRC.studios}>RIZAP公式 店舗検索（都道府県別一覧）</Src>（{CHECKED}確認）。鳥取県・島根県には店舗がありません。営業時間は錦糸町店が10:00〜22:00、その他の店舗は7:00〜23:00です。出店・閉店により変わる場合があるため、最新の店舗情報は公式サイトでご確認ください。
          </p>
        </section>

        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://www20.a8.net/svt/bgt?aid=250920793872&wid=001&eno=01&mid=s00000015695001058000&mc=1" alt="RIZAP" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
          <img src="https://www10.a8.net/0.gif?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" alt="" width="1" height="1" className="inline" />
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s12" className="text-xl font-bold mb-3">RIZAPが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、ご自身に合ったプログラムをご相談ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <BrandStoreLinks brand="rizap" brandName="RIZAP" />
        <section>
          <h2 id="s13" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
