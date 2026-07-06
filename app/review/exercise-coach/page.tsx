import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "エクササイズコーチの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "エクササイズコーチの口コミ・評判を徹底解説。1回20分のAI×マシン時短トレーニング、月額9,900円〜のリーズナブルな料金体系からメリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社エクササイズコーチジャパン" },
  { label: "店舗数", value: "全国40店舗以上（2026年4月時点）" },
  { label: "営業時間", value: "10:00〜22:00（店舗により異なる）" },
  { label: "特徴", value: "1回20分 / AI×マシンによる自動負荷調整 / 手ぶらOK / 月額9,900円〜" },
  { label: "公式URL", value: "https://exercisecoach.co.jp/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "1回たった20分の時短トレーニング",
    desc: "エクササイズコーチのトレーニングは1回わずか20分。AIが制御するマシンが最適な負荷を自動で設定するため、短時間でも効率的に全身を鍛えられます。「忙しくてジムに通う時間がない」という方でも、ランチタイムや仕事の合間に通えるのが最大の魅力です。",
  },
  {
    title: "AIマシンが最適負荷を自動調整",
    desc: "独自開発のAIマシンが利用者の筋力や疲労度をリアルタイムで計測し、最適な負荷を自動で調整します。トレーニング中に「きつすぎる」「軽すぎる」ということがなく、常に効率的な負荷でトレーニングできます。データに基づいた客観的な指導が可能です。",
  },
  {
    title: "月額9,900円〜のリーズナブルな料金設定",
    desc: "パーソナルジム業界では破格の月額9,900円〜（月4回）から利用できます。パーソナルトレーニングに興味はあるが、月に数万円〜数十万円の出費は難しいという方にとって、大きな選択肢です。手ぶらで通えるため、追加費用もかかりません。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "忙しい人でも続けやすい20分のトレーニング",
    desc: "1回20分という短さは、パーソナルジム業界の中でも突出しています。着替えを含めても30〜40分で完了するため、ランチタイムや仕事前後のスキマ時間に通えます。「時間がないから運動できない」という言い訳ができなくなるほどの手軽さで、運動習慣のない方でも続けやすい環境が整っています。",
  },
  {
    title: "AIが制御するマシンで効率的なトレーニング",
    desc: "AIマシンがリアルタイムで筋力を計測し、1レップ（1回の動作）ごとに最適な負荷を自動調整します。人間のトレーナーでは判断しきれない細かな負荷調整が可能で、オーバートレーニングや負荷不足を防ぎます。データが蓄積されるため、自分の成長を客観的に確認できるのも魅力です。",
  },
  {
    title: "手ぶらOKで追加費用なし",
    desc: "ウェア・シューズの貸し出しに対応しており、手ぶらで通うことが可能です。月額料金に含まれているため、レンタル代や追加費用は一切かかりません。仕事帰りや外出先からそのまま来店でき、ジム通いのハードルを大幅に下げています。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "人間のトレーナーによる指導は限定的",
    desc: "AIマシンが中心のトレーニングシステムのため、トレーナーの関わりは補助的な役割にとどまります。フォームの細かい修正や、個別の悩みに対する踏み込んだアドバイスを求める方には物足りなく感じる場合があります。トレーナーとの密なコミュニケーションを重視する方は、他のパーソナルジムの方が適しているかもしれません。",
  },
  {
    title: "トレーニングの自由度が低い",
    desc: "マシンベースのトレーニングが中心のため、フリーウェイトを使った多様なメニューや、自分でメニューをカスタマイズする自由度は限られます。AIが最適なプログラムを組んでくれる反面、「自分で考えてトレーニングしたい」という方には制約を感じるでしょう。",
  },
  {
    title: "上級者には物足りない可能性",
    desc: "1回20分のトレーニングは初心者や運動習慣のない方には十分ですが、すでにトレーニング経験が豊富な上級者にとってはボリュームが不足する可能性があります。高重量でのフリーウェイトトレーニングや、部位ごとの細かい追い込みを求める方には向いていません。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "インディヴィジュアル", duration: "月4回（1対1）", price: "17,600円/月", note: "税込" },
  { name: "パートナー", duration: "月4回（2人同時）", price: "13,200円/月（1人あたり）", note: "税込・2人で利用" },
  { name: "デイプラン", duration: "月4回（12:00-17:00限定）", price: "14,960円/月", note: "税込・平日昼間限定" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの対応は全体的に好評ですが、AIマシン中心のシステムのため、トレーナーの関わり方は他のパーソナルジムとは異なります。サポート的な役割を評価する声が多い一方、もう少し踏み込んだ指導を求める声もあります。",
    reviews: [
      { text: "トレーナーはマシンの使い方やフォームの補助をしてくれる。AIが負荷を決めてくれるので、トレーナーは励まし役に近い印象。", attr: "利用歴3ヶ月のユーザー" },
      { text: "明るく声をかけてくれるので、モチベーションが上がる。20分という短い時間でも充実感がある。", attr: "入会2ヶ月のユーザー" },
      { text: "トレーニングの専門的な質問には答えてくれるが、深い知識を持つトレーナーは限られている印象。", attr: "トレーニング経験2年のユーザー" },
      { text: "パートナープランでは2人同時のため、トレーナーの注意が分散する場面がある。1対1のプランの方が集中できる。", attr: "パートナープラン利用ユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "パーソナルジムとしては圧倒的に安い料金設定が最大の魅力です。「この価格でパーソナルトレーニングが受けられる」という驚きの声が多数あります。",
    reviews: [
      { text: "月17,600円でパーソナルトレーニングが月4回受けられるのは驚き。フィットネスジムの月会費に少し上乗せした程度の金額感。", attr: "入会1ヶ月のユーザー" },
      { text: "パートナープランで友人と通っており、1人あたり月13,200円。この価格帯のパーソナルジムは他にない。", attr: "パートナープラン利用ユーザー" },
      { text: "1回あたり20分で約4,400円は、時間あたりで見ると安くはない。ただ、効率的なトレーニングができるので満足している。", attr: "利用歴4ヶ月のユーザー" },
      { text: "入会金不要のキャンペーンがあったので、初期費用を抑えて始められた。気軽にパーソナルジムを試したい人におすすめ。", attr: "入会2ヶ月のユーザー" },
    ],
  },
  {
    title: "AIマシンの効果",
    summary: "AIマシンの自動負荷調整機能は利用者から高い関心を集めています。データに基づいた客観的なフィードバックが、トレーニングの質を高めると評価されています。",
    reviews: [
      { text: "毎回マシンが自動で負荷を調整してくれるので、自分では追い込めない領域までトレーニングできる。効率が良い。", attr: "利用歴5ヶ月のユーザー" },
      { text: "トレーニングデータが蓄積されるので、前回よりも筋力が上がっているのが数字で確認できる。モチベーションの維持に役立っている。", attr: "利用歴3ヶ月のユーザー" },
      { text: "マシンの動きに慣れるまで少し時間がかかったが、慣れると非常にスムーズ。自分の限界まで安全に追い込めるのが良い。", attr: "入会1ヶ月のユーザー" },
      { text: "AIと言っても結局はマシンが負荷を変えるだけなので、画期的というほどではない。ただ、毎回一定以上の質のトレーニングが保証されるのは安心。", attr: "トレーニング経験4年のユーザー" },
    ],
  },
  {
    title: "時短トレーニングの効果",
    summary: "20分という短時間でも効果を実感している利用者が多いです。ただし、劇的な体型変化を求める場合は、食事管理との組み合わせが重要です。",
    reviews: [
      { text: "20分でもしっかり筋肉に効いている実感がある。翌日の筋肉痛で、短い時間でも効果的にトレーニングできていることが分かる。", attr: "利用歴3ヶ月のユーザー" },
      { text: "体重の変化は緩やかだが、体が引き締まってきたのを感じる。3ヶ月で見た目が変わり始めた。", attr: "利用歴4ヶ月のユーザー" },
      { text: "20分だと物足りなく感じる時がある。もう少しトレーニングしたいという気持ちが残ることも。", attr: "利用歴2ヶ月のユーザー" },
      { text: "食事管理を自分でしっかり行えば、週1回20分のトレーニングでも体の変化は出る。ただし、トレーニングだけで痩せようとするのは難しい。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "食事指導",
    summary: "食事指導は簡易的なアドバイスが中心で、RIZAPやBEYONDのような本格的な栄養管理は含まれていません。食事管理は自己管理が基本となります。",
    reviews: [
      { text: "トレーニング時に簡単な食事アドバイスはもらえるが、毎食の報告や細かい管理はない。食事管理は自分で行う必要がある。", attr: "利用歴3ヶ月のユーザー" },
      { text: "料金を考えると食事指導が含まれないのは仕方ない。必要であれば自分でアプリを使って管理している。", attr: "利用歴4ヶ月のユーザー" },
      { text: "たんぱく質の摂取量や食事のタイミングについて基本的なアドバイスはもらえた。初心者には参考になる。", attr: "入会2ヶ月のユーザー" },
      { text: "本格的な食事指導が欲しいなら、別のジムを選ぶべき。エクササイズコーチはあくまでトレーニング特化。", attr: "他社比較後に入会したユーザー" },
    ],
  },
  {
    title: "施設・設備",
    summary: "AIマシンを中心としたコンパクトな施設設計が特徴です。清潔感は保たれていますが、従来型のジムと比べると設備はシンプルです。",
    reviews: [
      { text: "店内はコンパクトだが清潔に保たれている。AIマシンが整然と並んでいて、近未来的な雰囲気がある。", attr: "利用歴3ヶ月のユーザー" },
      { text: "更衣室はやや狭いが、20分のトレーニングで長居しないので問題ない。シャワーがない店舗もあるので事前確認が必要。", attr: "利用歴2ヶ月のユーザー" },
      { text: "フリーウェイトやランニングマシンはない。あくまでAIマシンのみでのトレーニング。割り切って利用する施設。", attr: "トレーニング経験3年のユーザー" },
      { text: "手ぶらで通える仕組みが整っていて便利。ウェアの貸し出しがあるので、仕事帰りにそのまま来店できる。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "予約の取りやすさ",
    summary: "予約はWebやアプリから簡単に行えます。20分という短い枠のため、回転率が高く、比較的予約が取りやすい環境です。",
    reviews: [
      { text: "1枠20分なので回転が早く、予約は比較的取りやすい。当日予約が可能なことも多い。", attr: "利用歴4ヶ月のユーザー" },
      { text: "アプリから空き状況がリアルタイムで確認でき、予約も簡単。キャンセル・変更もスムーズ。", attr: "利用歴3ヶ月のユーザー" },
      { text: "平日の昼間は空いていることが多い。デイプランなら予約で困ることはほとんどない。", attr: "デイプラン利用ユーザー" },
      { text: "土日の午前中は人気が高く、1週間前には埋まっていることが多い。早めの予約がおすすめ。", attr: "週末利用ユーザー" },
    ],
  },
  {
    title: "立地・アクセス",
    summary: "主要駅の近くに出店しており、アクセスの良さは評価されています。ただし、店舗数は大手と比べるとまだ少なめです。",
    reviews: [
      { text: "駅から徒歩5分以内の立地で通いやすい。コンパクトな店舗なので、商業ビルの中にあることが多い。", attr: "新宿店利用ユーザー" },
      { text: "東京都内は店舗が増えてきたが、地方はまだまだ少ない。全国展開が進むことに期待。", attr: "地方在住ユーザー" },
      { text: "駅近の好立地だが、テナントの入口が分かりにくい店舗がある。初回は時間に余裕をもって行くと良い。", attr: "初来店ユーザー" },
      { text: "自宅と職場の途中にあるので、通勤途中に寄りやすい。20分で済むので時間のロスが少ない。", attr: "通勤途中に利用するユーザー" },
    ],
  },
  {
    title: "初心者への対応",
    summary: "AIマシンが負荷を自動調整するため、運動初心者でも安全にトレーニングを始められます。難しい操作は不要で、初回から効果的なトレーニングが可能です。",
    reviews: [
      { text: "マシンが自動で負荷を調整してくれるので、何も分からなくても安全にトレーニングできる。初心者にはありがたい仕組み。", attr: "運動経験ゼロで入会したユーザー" },
      { text: "重量の設定に悩む必要がないので、トレーニングに集中できる。初心者が自分で負荷を決めるのは難しいので、AI任せが楽。", attr: "入会1ヶ月のユーザー" },
      { text: "20分という短さが初心者にはちょうどいい。長時間のトレーニングは最初は辛いが、20分なら頑張れる。", attr: "入会2ヶ月のユーザー" },
      { text: "トレーナーがマシンの使い方を丁寧に説明してくれるので、機械が苦手でも問題なかった。", attr: "入会1ヶ月のユーザー" },
    ],
  },
  {
    title: "継続のしやすさ",
    summary: "20分の時短、手ぶらOK、リーズナブルな料金という3つの要素が、継続のハードルを大幅に下げています。運動習慣を定着させたい方に適しています。",
    reviews: [
      { text: "20分だから「今日は面倒だな」という日でも「20分だけ行こう」と思える。この手軽さが続けられている秘訣。", attr: "利用歴6ヶ月のユーザー" },
      { text: "月額1万円台なので、使わなかった月があっても大きな負担にならない。気軽に続けられる料金設定。", attr: "利用歴5ヶ月のユーザー" },
      { text: "手ぶらで通えるのが継続の鍵。準備が必要だと億劫になるが、そのまま行けるのはストレスフリー。", attr: "利用歴4ヶ月のユーザー" },
      { text: "劇的な変化は少ないが、地道に続けることで着実に体力がついてきた。長く続けることが大事だと実感。", attr: "利用歴8ヶ月のユーザー" },
    ],
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "エクササイズコーチの入会金はいくらですか？", a: "入会金は19,800円（税込）です。キャンペーン期間中は無料になることもあるため、公式サイトで最新情報をご確認ください。" },
  { q: "1回のトレーニング時間は本当に20分ですか？", a: "はい、トレーニング自体は20分です。着替えを含めても30〜40分程度で完了します。AIマシンが効率的な負荷を設定するため、短時間でも効果的なトレーニングが可能です。" },
  { q: "AIマシンとはどのような仕組みですか？", a: "独自開発のマシンにAIが搭載されており、利用者の筋力や疲労度をリアルタイムで計測します。1レップごとに最適な負荷を自動調整し、常に効率的なトレーニングを実現します。" },
  { q: "運動初心者でも大丈夫ですか？", a: "はい、AIマシンが自動で最適な負荷を設定するため、初心者でも安全にトレーニングを始められます。トレーナーもマシンの使い方を丁寧に説明してくれます。" },
  { q: "食事指導はありますか？", a: "基本的な食事アドバイスは受けられますが、毎日の食事報告や詳細な栄養管理は含まれていません。本格的な食事管理を希望する場合は、自分でアプリ等を活用する必要があります。" },
  { q: "パートナープランとは？", a: "2人同時にトレーニングを受けられるプランです。友人やパートナーと一緒に通うことで、1人あたりの料金を抑えられます。月4回で1人あたり13,200円（税込）です。" },
  { q: "シャワーはありますか？", a: "店舗により異なります。シャワー完備の店舗もありますが、設置されていない店舗もあるため、入会前にご確認ください。20分のトレーニングのため、汗をかく量が比較的少ないのも特徴です。" },
  { q: "無料体験はありますか？", a: "無料体験が用意されています。実際のAIマシンを使ったトレーニングを体験した上で入会を検討できます。公式サイトから予約できます。" },
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
  { region: "東京", stores: [{ name: "新宿店", href: "/review/exercise-coach/shinjuku/" }, { name: "渋谷店", href: "/review/exercise-coach/shibuya/" }, { name: "池袋店" }, { name: "銀座店" }, { name: "上野店" }, { name: "恵比寿店" }, { name: "六本木店" }, { name: "品川店" }, { name: "自由が丘店" }, { name: "吉祥寺店" }, { name: "北千住店" }, { name: "蒲田店" }, { name: "町田店" }, { name: "立川店" }, { name: "八王子店" }] },
  { region: "神奈川", stores: [{ name: "横浜店" }, { name: "川崎店" }, { name: "藤沢店" }] },
  { region: "埼玉", stores: [{ name: "大宮店" }, { name: "川口店" }] },
  { region: "千葉", stores: [{ name: "船橋店" }, { name: "千葉店" }] },
  { region: "愛知", stores: [{ name: "名古屋栄店" }, { name: "名駅店" }, { name: "金山店" }] },
  { region: "大阪", stores: [{ name: "梅田店" }, { name: "心斎橋店" }, { name: "なんば店" }, { name: "天王寺店" }] },
  { region: "京都", stores: [{ name: "京都河原町店" }] },
  { region: "兵庫", stores: [{ name: "神戸三宮店" }] },
  { region: "福岡", stores: [{ name: "天神店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "エクササイズコーチの基本情報" },
  { id: "overview", label: "エクササイズコーチの概要" },
  { id: "merit-demerit", label: "エクササイズコーチのメリット・デメリット" },
  { id: "pricing", label: "エクササイズコーチの料金" },
  { id: "reviews", label: "エクササイズコーチの口コミ分析" },
  { id: "faq", label: "エクササイズコーチのよくある質問" },
  { id: "stores", label: "エクササイズコーチの店舗一覧" },
];

export default function ExerciseCoachReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "エクササイズコーチ" }]} />
      <ReviewSummary gymName="エクササイズコーチ" />
      <GymCta slug="exercise-coach" name="エクササイズコーチ" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          エクササイズコーチの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-exercise-coach.jpg" alt="エクササイズコーチ 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          エクササイズコーチは「1回20分」の時短トレーニングとAIマシンによる自動負荷調整が特徴のパーソナルトレーニングジムです。全国40店舗以上を展開し、月額<span className="font-bold bg-yellow-100 px-0.5">9,900円</span>〜というパーソナルジムとしてはリーズナブルな料金設定で支持を集めています。忙しい方でもスキマ時間に通える手軽さと、テクノロジーを活用した効率的なトレーニングが魅力です。本記事では、エクササイズコーチの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの概要</h2>
          <h3 className="text-lg font-bold mb-4">エクササイズコーチの3つの強み</h3>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">エクササイズコーチのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">エクササイズコーチのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">エクササイズコーチのデメリット</h3>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            エクササイズコーチの料金はプランごとに月額制です。以下は代表的なプランの一覧です。入会金は19,800円（税込）が別途必要です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">回数 / 条件</th>
                  <th className="px-4 py-3 text-left font-medium">月額料金</th>
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
            ※ 料金は税込です。入会金19,800円（税込）が別途かかります。キャンペーンにより変動する場合があります。月8回プランなど、他のプランも用意されています。
          </p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            エクササイズコーチのGoogleマップ口コミを分析すると、20分の時短トレーニングとリーズナブルな料金設定への満足度が高い一方で、トレーニングのボリュームや食事指導の不足を指摘する声も見られます。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">
              ※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/%E3%82%A8%E3%82%AF%E3%82%B5%E3%82%B5%E3%82%A4%E3%82%BA%E3%82%B3%E3%83%BC%E3%83%81/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/エクササイズコーチ/</a>
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
      <GymCta slug="exercise-coach" name="エクササイズコーチ" />

        <section id="faq" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">エクササイズコーチの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            エクササイズコーチは全国40店舗以上を展開しています（2026年4月時点）。以下は主要エリアの店舗一覧です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-28">エリア</th>
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
          <h2 className="text-xl font-bold mb-3">エクササイズコーチが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料体験で、AI×マシンのトレーニングを実際に体感してみましょう。
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
