import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "チキンジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "チキンジムの口コミ・評判を徹底解説。月々6,800円〜の低価格料金、手ぶらOKのレンタルサービス、全国34店舗の基本情報からメリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社CHICKEN GYM" },
  { label: "店舗数", value: "全国34店舗（2026年4月時点）" },
  { label: "営業時間", value: "7:00〜23:00（店舗により異なる）" },
  { label: "特徴", value: "初心者特化 / 手ぶらOK / ウェア・シューズ無料レンタル / 食事指導あり" },
  { label: "公式URL", value: "https://chicken-gym.jp/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "月々6,800円〜の圧倒的低価格",
    desc: "パーソナルジム業界でもトップクラスの低価格設定。分割払いに対応しており、月々6,800円からパーソナルトレーニングを始められます。初期費用のハードルが低く、パーソナルジムが初めての方でも無理なく始められる料金体系です。",
  },
  {
    title: "ウェア・シューズ無料レンタルで手ぶらOK",
    desc: "トレーニングウェア、シューズ、タオルがすべて無料でレンタル可能。さらにプロテインドリンクも提供されるため、仕事帰りや外出先からそのまま通えます。荷物の心配が不要なので、ジム通いを習慣化しやすい環境が整っています。",
  },
  {
    title: "全店舗駅チカ＆朝7時〜夜23時営業",
    desc: "全国34店舗すべてが主要駅から徒歩圏内に位置しています。朝7時から夜23時まで営業しているため、出勤前や退勤後など、生活リズムに合わせた時間帯で無理なく通うことが可能です。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "パーソナルジム業界最安級の料金設定",
    desc: "月々6,800円〜（税込・分割払い時）で本格的なパーソナルトレーニングを受けられます。大手のRIZAPやBEYONDと比較しても圧倒的に安い料金設定で、これまで費用面でパーソナルジムを諦めていた方にとって大きな選択肢です。ただし、総額で見ると数十万円になるプランもあるため、契約時には月額だけでなく総額もしっかり確認することが重要です。",
  },
  {
    title: "手ぶらで通えるレンタルサービス",
    desc: "ウェア上下、シューズ、タオル、靴下がすべて無料レンタル。さらにトレーニング後にはプロテインドリンクが提供されます。荷物の準備が不要なため「今日はジムに行こう」と思い立ったときにすぐ行動に移せます。仕事帰りや買い物のついでに立ち寄れる手軽さが、継続率の高さにつながっています。",
  },
  {
    title: "初心者に寄り添うトレーニング指導",
    desc: "チキンジムの利用者の90%以上がトレーニング初心者とされており、指導内容も初心者向けに最適化されています。マシンの使い方から正しいフォーム、適切な重量設定まで丁寧に教えてもらえるため、運動経験がない方でも安心して始められます。「楽しく続けられる」をコンセプトに掲げており、無理なく運動習慣を身につけられる点が支持されています。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "広告表示と実際の料金に差がある場合も",
    desc: "SNS広告やウェブ広告では「月々3,400円〜」「月々6,800円〜」と表示されていますが、これは分割払い時の月額です。総額では16万円〜35万円程度になるコースが主流で、入会金35,000円も別途かかります。広告の月額だけを見て契約すると、想定より高額になる可能性があるため、カウンセリング時に総額を必ず確認しましょう。",
  },
  {
    title: "体験時の勧誘がしつこいとの声あり",
    desc: "無料カウンセリング後の入会勧誘について、「しつこかった」「その場で決めるよう促された」という口コミが一部見られます。もちろん丁寧だったという声も多数ありますが、即決を避けたい場合は「一度持ち帰って検討します」とはっきり伝えることをおすすめします。",
  },
  {
    title: "混雑時は施設が狭く感じることも",
    desc: "チキンジムの店舗は駅近でコンパクトな設計が多いため、人気の時間帯（平日夜・土日午前）は予約が取りにくかったり、トレーニングスペースが窮屈に感じることがあります。余裕をもってスケジュールを組むか、比較的空いている時間帯を狙うと快適に利用できます。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "ボディメイクライト", duration: "30分/回", price: "月々3,400円〜", note: "分割払い時の目安" },
  { name: "ボディメイクスタンダード", duration: "60分/回", price: "月々6,800円〜", note: "分割払い時の目安" },
  { name: "プレミアム", duration: "60分+ストレッチ30分/回", price: "要問い合わせ", note: "パーソナルストレッチ付き" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの質に関する口コミは全体的に好意的な傾向があります。特に「初心者への対応が丁寧」「フォームを細かく修正してくれる」という声が目立ちます。一方で、トレーナーの指名ができない・担当が毎回変わるという点に不満を感じる利用者もいます。",
    reviews: [
      { text: "毎回トレーナーが変わるが、どの方も感じが良く丁寧に教えてくれる。フォームの修正を毎回してくれるので、正しいやり方が身についてきた。", attr: "入会6ヶ月のユーザー" },
      { text: "運動が苦手で不安だったが、トレーナーが励ましながら指導してくれるので楽しく通えている。無理な重量を押し付けられることもない。", attr: "入会2ヶ月のユーザー" },
      { text: "トレーナーの質にばらつきがある印象。経験豊富な方に当たると的確なアドバイスがもらえるが、若手だと少し物足りないこともある。", attr: "利用歴1年のユーザー" },
      { text: "担当制ではないので毎回説明が必要になることがある。引き継ぎノートは共有されているようだが、細かい要望は自分から伝える必要がある。", attr: "利用歴8ヶ月のユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "料金面ではパーソナルジムとしてのコストパフォーマンスの高さが評価されています。ただし、広告の月額表示と実際の総額のギャップに対する指摘も少なくありません。",
    reviews: [
      { text: "RIZAPの半額以下でパーソナルトレーニングが受けられるのは魅力的。手ぶらで通えることを考えると、トータルのコスパは非常に良い。", attr: "他社から乗り換えたユーザー" },
      { text: "広告で見た月々の金額に惹かれて来店したが、総額を聞いて驚いた。分割の回数が多いため月額は安く見えるが、合計金額は事前にしっかり確認すべき。", attr: "カウンセリング来店ユーザー" },
      { text: "ウェア・シューズ・プロテインが全部込みなので、追加費用がかからないのがありがたい。他ジムだとレンタル代やサプリ代が別にかかることが多い。", attr: "利用歴4ヶ月のユーザー" },
      { text: "入会金35,000円は一般的だが、キャンペーン時に無料になることがある。入会を検討するならキャンペーン時期を狙うのがおすすめ。", attr: "入会3ヶ月のユーザー" },
    ],
  },
  {
    title: "設備・清潔感",
    summary: "店舗の清潔さは高く評価されており、特にシャワー室やトレーニングスペースの手入れが行き届いているとの声が多く見られます。ただし、スペースの狭さに言及する口コミもあります。",
    reviews: [
      { text: "店内は常に清掃が行き届いていて気持ちよく使える。マシンもきれいに拭き上げられており、衛生面での不安は一切ない。", attr: "利用歴5ヶ月のユーザー" },
      { text: "シャワーが完備されていて、アメニティも揃っている。仕事前に来ても身だしなみを整えてから出勤できるのが便利。", attr: "朝の時間帯に通うユーザー" },
      { text: "トレーニングスペースは想像より狭い。ただしマンツーマンなので他の会員と同時に使うことは基本的にないため、実際には不便を感じにくい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "マシンの種類は最低限という印象。フリーウェイトエリアはないため、本格的にウェイトを使いたい中上級者には向かないかもしれない。", attr: "トレーニング経験3年のユーザー" },
    ],
  },
  {
    title: "ダイエット・ボディメイク効果",
    summary: "短期間での体重減少やボディラインの変化を実感している利用者が多く、ダイエット目的での満足度は高い傾向にあります。ただし、食事管理を自分でもしっかり行うことが成果の鍵になります。",
    reviews: [
      { text: "3ヶ月で6kgの減量に成功した。トレーニングだけでなく食事の見直しも指導してもらえたので、リバウンドしにくい体づくりができた。", attr: "ダイエット目的で入会したユーザー" },
      { text: "体重は大きくは変わらないが、体脂肪率が下がって見た目が明らかに変わった。服のサイズが変わるのが嬉しい。", attr: "利用歴4ヶ月のユーザー" },
      { text: "週1回の利用だと劇的な変化は難しいと感じた。しっかり結果を出したいなら週2回は通うべき。", attr: "週1回利用のユーザー" },
      { text: "自分で食事管理をサボると効果が出にくい。トレーニングだけで痩せようとするのではなく、食事指導もしっかり活用することが大切だと実感した。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "食事指導",
    summary: "食事指導はプランに応じて内容が異なりますが、基本的なアドバイスは受けられるとの評価が多いです。専門的な栄養指導を求める場合はプランの選択に注意が必要です。",
    reviews: [
      { text: "トレーニング時に食事内容を確認してもらえる。極端な糖質制限ではなく、バランスの良い食事を勧めてもらえるので続けやすい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "LINEでの食事報告に対応しているプランを選んだ。毎食報告するのは面倒だが、意識が変わって間食が減った。", attr: "プレミアムプラン利用ユーザー" },
      { text: "食事指導はトレーニング中に簡単なアドバイスをもらう程度。本格的な栄養管理を期待するなら、上位プランを検討した方がよい。", attr: "ライトプラン利用ユーザー" },
      { text: "コンビニで何を選べばいいかなど、日常に即したアドバイスが参考になった。特別な食材を買う必要がないのがありがたい。", attr: "利用歴2ヶ月のユーザー" },
    ],
  },
  {
    title: "予約の取りやすさ",
    summary: "予約はアプリやWebから簡単にできると好評ですが、人気の時間帯（平日夜・土日午前）は埋まりやすい傾向があります。柔軟にスケジュールを調整できる方は問題なく予約が取れるでしょう。",
    reviews: [
      { text: "アプリから簡単に予約できて便利。空き状況もリアルタイムで確認できるので、予定に合わせて柔軟に対応できる。", attr: "利用歴4ヶ月のユーザー" },
      { text: "平日の夜は人気で予約が取りにくい。2週間前くらいから予約しないと希望の時間が埋まっていることが多い。", attr: "平日夜に通うユーザー" },
      { text: "平日昼間は比較的空いている。在宅勤務のため昼休みに通っているが、予約で困ったことはほとんどない。", attr: "在宅勤務ユーザー" },
      { text: "キャンセルが直前まで可能なのは助かるが、人気の枠はキャンセル待ちでも取れないことがある。", attr: "利用歴7ヶ月のユーザー" },
    ],
  },
  {
    title: "勧誘・営業",
    summary: "無料カウンセリング時の勧誘については、体験者の間で評価が分かれています。「丁寧で押し売り感がなかった」という声がある一方で、「その場での契約を強く勧められた」という報告も見られます。",
    reviews: [
      { text: "カウンセリングは丁寧で、無理に契約を迫られることはなかった。「検討して後日連絡します」と伝えたら快く了承してもらえた。", attr: "カウンセリング来店ユーザー" },
      { text: "体験後に「今日契約すると割引がある」と言われ、決断を急かされた印象。じっくり比較したかったので少し不快だった。", attr: "カウンセリング来店ユーザー" },
      { text: "入会後は特にプランのアップグレードや追加サービスの営業はなく、純粋にトレーニングに集中できている。", attr: "入会後6ヶ月のユーザー" },
      { text: "「他社と比較したい」と伝えたら、引き止められることなくパンフレットを渡してもらえた。店舗や担当者によって対応が異なるのかもしれない。", attr: "複数社比較検討中のユーザー" },
    ],
  },
  {
    title: "立地・アクセス",
    summary: "チキンジムは全店舗が駅から徒歩数分圏内に立地しており、アクセスの良さは高く評価されています。ただし、地方では店舗数が限られるため、通える店舗があるか事前確認が必要です。",
    reviews: [
      { text: "最寄り駅から徒歩3分で、仕事帰りにストレスなく寄れる。雨の日でもほとんど濡れずに到着できる立地。", attr: "新宿店利用ユーザー" },
      { text: "駅直結のビル内にあるため、アクセスは抜群。周辺に飲食店も多いので、トレーニング後の食事にも困らない。", attr: "池袋店利用ユーザー" },
      { text: "地方住みだが近くに店舗がなく、最寄りの店舗まで電車で30分かかる。もう少し店舗展開が広がると嬉しい。", attr: "郊外在住のユーザー" },
      { text: "繁華街の中にあるので人通りは多いが、ビルの上階にあるため入口が分かりにくかった。初回は少し迷うかもしれない。", attr: "初来店ユーザー" },
    ],
  },
  {
    title: "初心者の使いやすさ",
    summary: "チキンジムは「続けられるトレーニング」を重視しており、運動未経験者やジム初心者から特に高い評価を得ています。威圧感のない雰囲気づくりが支持の理由です。",
    reviews: [
      { text: "人生で一度もジムに行ったことがなかったが、トレーナーが一から説明してくれるので不安なく通えている。", attr: "運動経験ゼロで入会したユーザー" },
      { text: "他のジムでは周りの目が気になって続けられなかったが、完全個室のマンツーマンなので自分のペースで集中できる。", attr: "ジム経験2回目のユーザー" },
      { text: "「こんなことも知らないの」と思われそうで心配だったが、基礎の基礎から丁寧に教えてもらえて安心した。", attr: "入会1ヶ月のユーザー" },
      { text: "初心者向けのプログラムが充実しているが、逆に経験者にとっては物足りなく感じるかもしれない。初心者特化型のジムだと割り切ると満足度は高い。", attr: "トレーニング歴2年のユーザー" },
    ],
  },
  {
    title: "継続のしやすさ",
    summary: "手ぶらで通える利便性、柔軟な営業時間、トレーナーの励ましなど、継続を後押しする仕組みが整っている点が評価されています。ただし、モチベーション維持は最終的に自分次第という声も。",
    reviews: [
      { text: "手ぶらで通えるから「準備が面倒」という言い訳がなくなった。半年以上続けられているのはチキンジムのおかげ。", attr: "利用歴7ヶ月のユーザー" },
      { text: "朝7時から開いているので、出勤前に通うルーティンができた。早朝は空いていて予約も取りやすい。", attr: "早朝利用ユーザー" },
      { text: "月2回程度の利用だと効果が実感しにくく、モチベーションが下がった。最低でも週1回は通うことを勧められた。", attr: "利用頻度が低いユーザー" },
      { text: "トレーナーが前回の記録を見て「前より上がってますね」と声をかけてくれるので、成長を実感できて続けるモチベーションになっている。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "チキンジムの入会金はいくらですか？", a: "入会金は35,000円（税込）です。キャンペーン期間中は入会金が無料になることもあるため、公式サイトで最新情報をご確認ください。" },
  { q: "チキンジムは完全予約制ですか？", a: "はい、完全予約制です。公式アプリまたはWebサイトから予約・変更・キャンセルが可能です。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "プランによって異なり、ボディメイクライトは30分、スタンダード・プレミアムは60分です。プレミアムにはさらにストレッチ30分が付きます。" },
  { q: "食事指導は受けられますか？", a: "はい、プランに応じて食事アドバイスが含まれます。上位プランではLINEでの食事報告に対応しており、より詳細な指導を受けられます。" },
  { q: "女性でも通いやすい環境ですか？", a: "利用者の約6割が女性とされています。ウェア・シューズの無料レンタルやシャワー完備など、女性が通いやすい環境が整っています。" },
  { q: "退会・解約の方法は？", a: "店舗での退会手続きが必要です。契約期間満了後は翌月末日での退会が可能です。詳細はご利用店舗にお問い合わせください。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリングが用意されています。カウンセリングでは体組成測定やトレーニング体験も含まれることが多いです。公式サイトから予約できます。" },
  { q: "チキンジムはどこに店舗がありますか？", a: "北海道から福岡まで全国34店舗を展開しています。東京を中心に、大阪、愛知、福岡などの主要都市に出店しています。詳細は本ページ下部の店舗一覧をご確認ください。" },
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
  { region: "北海道", stores: [{ name: "札幌店" }] },
  { region: "宮城", stores: [{ name: "仙台店" }] },
  { region: "東京", stores: [{ name: "新宿店" }, { name: "池袋店", href: "/review/chicken-gym/ikebukuro/" }, { name: "町田店" }, { name: "渋谷店" }, { name: "吉祥寺店" }, { name: "北千住店" }, { name: "恵比寿店" }] },
  { region: "神奈川", stores: [{ name: "横浜みなとみらい店" }, { name: "川崎ドンキ店" }] },
  { region: "埼玉", stores: [{ name: "大宮店" }] },
  { region: "千葉", stores: [{ name: "船橋店" }, { name: "流山おおたかの森店", href: "/review/chicken-gym/nagareyama/" }] },
  { region: "愛知", stores: [{ name: "豊田店" }, { name: "名古屋栄店" }] },
  { region: "大阪", stores: [{ name: "心斎橋店" }, { name: "高槻店" }, { name: "堺東店" }] },
  { region: "京都", stores: [{ name: "京都河原町店" }] },
  { region: "兵庫", stores: [{ name: "神戸三宮店" }] },
  { region: "広島", stores: [{ name: "広島店" }] },
  { region: "福岡", stores: [{ name: "天神店" }, { name: "博多駅前店" }] },
  { region: "北九州", stores: [{ name: "北九州小倉店", href: "/review/chicken-gym/kitakyushu/" }] },
  { region: "沖縄", stores: [{ name: "那覇店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "チキンジムの基本情報" },
  { id: "overview", label: "チキンジムの概要" },
  { id: "merit-demerit", label: "チキンジムのメリット・デメリット" },
  { id: "pricing", label: "チキンジムの料金" },
  { id: "reviews", label: "チキンジムの口コミ分析" },
  { id: "faq", label: "チキンジムのよくある質問" },
  { id: "stores", label: "チキンジムの店舗一覧" },
];

export default function ChickenGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "チキンジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          チキンジムの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src="/review-chicken-gym.jpg"
            alt="チキンジムのイメージ画像 - モダンなフィットネスジムの内装"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          チキンジムは全国34店舗を展開するパーソナルトレーニングジムです。「続けられるトレーニング」をコンセプトに掲げ、月々6,800円〜という業界最安級の料金設定と、ウェア・シューズの無料レンタルによる手軽さが特徴です。利用者の90%以上がトレーニング初心者とされており、運動に慣れていない方でも安心して始められる環境が整っています。本記事では、チキンジムの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの概要</h2>
          <h3 className="text-lg font-bold mb-4">チキンジムの3つの強み</h3>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">チキンジムのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">チキンジムのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">チキンジムのデメリット</h3>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            チキンジムの料金はプランごとに異なります。以下は分割払い時の月額目安です。総額や入会金の詳細は無料カウンセリングで確認することをおすすめします。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">月額目安</th>
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
            ※ 料金は税込・分割払い時の月額目安です。入会金35,000円（税込）が別途かかります。キャンペーンにより変動する場合があります。
          </p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            チキンジムのGoogleマップ口コミを分析すると、全体的に好意的な評価が多い一方で、料金の表示方法や勧誘に関する指摘も一定数見られます。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">
              ※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/%E3%83%81%E3%82%AD%E3%83%B3%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/チキンジム/</a>
            </p>
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

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">チキンジムの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            チキンジムは全国34店舗を展開しています（2026年4月時点）。以下は都道府県別の店舗一覧です。
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
            ※ 店舗情報は2026年4月時点のものです。最新の店舗情報は公式サイトでご確認ください。
          </p>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">チキンジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ランキングに戻る
          </Link>
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
