import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BEYONDの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "BEYONDの口コミ・評判を徹底解説。コンテスト入賞トレーナーによる本格ボディメイク指導、糖質制限なしの食事指導、回数券10回96,800円〜の料金体系からメリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社BEYOND" },
  { label: "店舗数", value: "全国90店舗以上（2026年4月時点）" },
  { label: "営業時間", value: "10:00〜22:00（店舗により異なる）" },
  { label: "特徴", value: "コンテスト入賞トレーナー多数 / ボディメイク特化 / 糖質制限なしの食事指導" },
  { label: "公式URL", value: "https://beyond-gym.com/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "コンテスト入賞者が直接指導",
    desc: "BEYONDのトレーナーはボディビルやフィジークのコンテスト入賞経験者が多数在籍しています。自らの体で結果を証明してきたトレーナーから指導を受けられるため、説得力と信頼性が段違いです。「本物のプロに教わりたい」という方に選ばれています。",
  },
  {
    title: "ボディメイク特化の本格指導",
    desc: "単に体重を落とすだけでなく、筋肉をつけて美しいボディラインを作ることに特化した指導が受けられます。ダイエットだけでなく、筋肉を増やしたい・体のシルエットを変えたいという具体的な目標に対して、専門的なアプローチが可能です。",
  },
  {
    title: "糖質制限ではない食事指導",
    desc: "BEYONDの食事指導は極端な糖質制限を行いません。トレーニングのパフォーマンスを維持しながら体を変えるため、適切な栄養バランスでの食事管理を提案します。食事を楽しみながら体づくりができるため、継続しやすいと評判です。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "トレーナーの質が業界トップクラス",
    desc: "BEYONDの最大の強みはトレーナーの質の高さです。フィジーク・ボディビルのコンテスト入賞経験者が多く、自らの体で結果を出してきた実績があります。トレーニングの理論だけでなく、実践に基づいた指導が受けられるため、フォームの細かい修正やメニュー設計の精度が他社と比べて高い水準にあります。",
  },
  {
    title: "筋トレ上級者にも対応できる指導力",
    desc: "初心者向けのジムが多い中、BEYONDはトレーニング経験者や上級者にも対応できる指導力を持っています。自己流で伸び悩んでいる方や、さらにレベルアップしたい方にとって、プロの目線からのアドバイスは大きな価値があります。コンテスト出場を目指す方のサポートも行っています。",
  },
  {
    title: "糖質制限なしで無理のない食事管理",
    desc: "糖質を過度に制限せず、たんぱく質・脂質・炭水化物のバランスを整える食事指導を行います。トレーニングに必要なエネルギーを確保しながら体脂肪を落とすアプローチのため、力が出ない・集中力が続かないといった糖質制限の弊害を避けられます。日常の食事を大きく変える必要がないため、長期間の継続が可能です。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "ダイエット目的には向かない場合も",
    desc: "BEYONDはボディメイク特化のジムであるため、「とにかく体重を落としたい」というダイエット目的の方には最適ではない場合があります。体重の数字よりもボディラインや筋肉量の変化を重視する傾向があるため、体重計の数字にこだわる方は期待とのギャップを感じることがあります。",
  },
  {
    title: "店舗により雰囲気に差がある",
    desc: "全国90店舗以上を展開しているため、店舗ごとの雰囲気やサービスレベルにばらつきがあるとの声が見られます。特に新しい店舗ではオペレーションが安定していないケースもあります。入会前に実際の店舗を見学し、雰囲気を確認することをおすすめします。",
  },
  {
    title: "料金がやや高め",
    desc: "ライフプランニングコース16回で281,600円（税込）と、パーソナルジムとしては中〜高価格帯に位置しています。回数券での利用も可能ですが、1回あたりの単価は安くはありません。トレーナーの質の高さを考慮すると妥当という声もありますが、予算重視の方には他の選択肢も検討すべきでしょう。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "ライフプランニング16", duration: "16回 / 2ヶ月", price: "281,600円", note: "税込" },
  { name: "ライフプランニング24", duration: "24回 / 3ヶ月", price: "422,400円", note: "税込" },
  { name: "回数券10", duration: "10回", price: "96,800円", note: "税込・有効期限あり" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの質は口コミ全体を通じて最も評価が高い項目です。コンテスト経験者ならではの実践的な指導力と、丁寧な対応が支持されています。",
    reviews: [
      { text: "トレーナー自身がコンテストに出場しているだけあり、筋肉の使い方やフォームの指導が非常に的確。自己流では気づけなかったポイントを多く教えてもらえた。", attr: "入会4ヶ月のユーザー" },
      { text: "トレーニング経験が5年あるが、BEYONDのトレーナーの指導を受けて初めて正しいフォームを理解できた。レベルの高い指導に満足している。", attr: "トレーニング経験5年のユーザー" },
      { text: "初心者でも分かりやすく丁寧に教えてくれる。筋トレが怖いイメージだったが、楽しくトレーニングできている。", attr: "入会1ヶ月のユーザー" },
      { text: "トレーナーによって指導スタイルが異なるが、どの方も知識が豊富。質問には科学的な根拠を交えて答えてくれる。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "トレーナーの質の高さを考慮するとコスパは良いという意見が多い一方、絶対額としては高めとの声もあります。回数券の活用でコストを抑える利用者も見られます。",
    reviews: [
      { text: "回数券10回96,800円は1回あたり約1万円。コンテスト入賞者の指導がこの価格で受けられるのはむしろ安いと感じる。", attr: "回数券利用ユーザー" },
      { text: "ライフプランニング16回で28万円は安くはないが、トレーナーの質を考えるとRIZAPよりもコスパが良いと感じた。", attr: "他社から乗り換えたユーザー" },
      { text: "入会金がかからないキャンペーンがあった。回数券なら入会金なしで始められることもあるので、まず回数券で試すのがおすすめ。", attr: "回数券から開始したユーザー" },
      { text: "長期コースはそれなりの金額になるので、まずは回数券で相性を確認してから検討した方がよい。", attr: "カウンセリング来店ユーザー" },
    ],
  },
  {
    title: "ボディメイク効果",
    summary: "ボディラインの変化に関する満足度は高く、特に筋肉をつけながら脂肪を落とす「ボディリコンポジション」の実現に成功している利用者が多いです。",
    reviews: [
      { text: "3ヶ月でウエストが8cm減り、肩周りに筋肉がついた。体重は2kgしか変わらないが、見た目は別人のように変わったと言われる。", attr: "ライフプランニング24完了ユーザー" },
      { text: "コンテストに向けた減量で利用。トレーナーの的確なアドバイスのおかげで、過去最高の仕上がりで大会に出場できた。", attr: "コンテスト出場ユーザー" },
      { text: "体脂肪率が25%から18%に下がり、腹筋のラインが見えるようになった。体重よりも見た目の変化が大きいのがBEYONDの特徴。", attr: "利用歴4ヶ月のユーザー" },
      { text: "筋肉量を増やしたくて通い始めた。的確な負荷設定とフォーム指導のおかげで、自己流の時よりも効率よく筋肥大できている。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "食事指導",
    summary: "糖質制限なしの食事指導は多くの利用者から支持されています。トレーニングのパフォーマンスを落とさずに体を変えるアプローチが好評です。",
    reviews: [
      { text: "糖質制限をしないので、トレーニング中もしっかり力が出る。以前のジムでは糖質制限で力が入らなかったが、ここではそういうストレスがない。", attr: "他社から乗り換えたユーザー" },
      { text: "PFCバランス（たんぱく質・脂質・炭水化物の比率）を重視した指導で、栄養学の知識が身についた。卒業後も自分で管理できるようになった。", attr: "プログラム完了ユーザー" },
      { text: "食事指導の内容はトレーナーの専門性が反映されており、質が高い。コンテスト選手が実践している食事管理を教えてもらえる。", attr: "利用歴5ヶ月のユーザー" },
      { text: "食事報告の頻度はプランによって異なる。回数券プランだと食事指導が含まれないので、本格的な食事管理を求めるならライフプランニングを選ぶべき。", attr: "回数券利用ユーザー" },
    ],
  },
  {
    title: "施設・設備",
    summary: "清潔感のある施設と充実したトレーニング機器が評価されています。フリーウェイトの種類が豊富な点は、筋トレ愛好家からも好評です。",
    reviews: [
      { text: "フリーウェイトの種類が豊富で、本格的なトレーニングができる環境。他のパーソナルジムでは置いていないマシンも揃っている。", attr: "トレーニング経験4年のユーザー" },
      { text: "店内は清潔で、高級感のある雰囲気。トレーニングのモチベーションが上がる環境づくりがされている。", attr: "利用歴3ヶ月のユーザー" },
      { text: "完全個室ではない店舗もあるが、パーテーションで仕切られていてプライバシーは確保されている。", attr: "利用歴2ヶ月のユーザー" },
      { text: "シャワー完備で仕事前後に通いやすい。アメニティは最低限だが、清潔に管理されている。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "予約の取りやすさ",
    summary: "予約システムはスムーズに利用できるとの声が多いですが、人気トレーナーの枠は早めに埋まる傾向があります。",
    reviews: [
      { text: "Web予約で簡単に空き状況が確認できる。希望のトレーナーを選んで予約できるのが良い。", attr: "利用歴3ヶ月のユーザー" },
      { text: "人気のトレーナーは枠がすぐに埋まる。お気に入りのトレーナーがいる場合は早めの予約がおすすめ。", attr: "利用歴5ヶ月のユーザー" },
      { text: "キャンセル・変更は前日までに連絡すれば対応してもらえる。急な予定変更にも柔軟に対応してくれた。", attr: "利用歴4ヶ月のユーザー" },
      { text: "回数券の場合は有効期限があるので、スケジュール管理は自分で意識する必要がある。期限切れに注意。", attr: "回数券利用ユーザー" },
    ],
  },
  {
    title: "初心者への対応",
    summary: "ボディメイク特化のイメージから上級者向けと思われがちですが、初心者への対応も丁寧との評価が多いです。",
    reviews: [
      { text: "筋トレ初心者だったが、基礎の基礎から丁寧に教えてもらえた。「BEYOND=上級者向け」というイメージは間違いだった。", attr: "運動経験ゼロで入会したユーザー" },
      { text: "マシンの使い方から呼吸法まで、初心者でも理解できるように説明してくれる。質問もしやすい雰囲気。", attr: "入会2ヶ月のユーザー" },
      { text: "周りにゴリゴリの筋トレ愛好家がいる環境は最初少し緊張したが、トレーナーがフレンドリーで気にならなくなった。", attr: "入会1ヶ月のユーザー" },
      { text: "初心者向けのメニューもしっかり用意されている。無理のない負荷から始めて、段階的にレベルアップしていく指導が受けられる。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "立地・アクセス",
    summary: "主要駅近くに出店しており、アクセスの良さは評価されています。特に東京都内は店舗数が多く、通いやすい環境です。",
    reviews: [
      { text: "駅から徒歩3分の好立地。仕事帰りに手軽に寄れるので、トレーニングが生活の一部になっている。", attr: "新宿店利用ユーザー" },
      { text: "東京都内は店舗が多く、自宅と職場の近くにそれぞれ店舗があるので使い分けが便利。", attr: "複数店舗利用ユーザー" },
      { text: "地方はまだ店舗数が少ない。最寄りの店舗まで30分以上かかるので、もう少し展開が広がると嬉しい。", attr: "地方在住ユーザー" },
      { text: "ビル内のテナントだが、看板が目立たないため初回は少し迷った。事前にGoogleマップで確認しておくと良い。", attr: "初来店ユーザー" },
    ],
  },
  {
    title: "コンテストサポート",
    summary: "フィジークやボディビルのコンテスト出場を目指す利用者からの支持が厚いです。経験豊富なトレーナーによる実践的なサポートが好評です。",
    reviews: [
      { text: "トレーナー自身がコンテスト出場経験者なので、減量の進め方やポージングの指導まで一貫してサポートしてもらえた。", attr: "コンテスト出場ユーザー" },
      { text: "コンテスト初出場で入賞できた。トレーナーの的確なアドバイスのおかげで自信を持ってステージに立てた。", attr: "コンテスト入賞ユーザー" },
      { text: "大会直前の水抜きや炭水化物の調整など、コンテスト特有のノウハウを教えてもらえるのはBEYONDならでは。", attr: "コンテスト出場経験2回のユーザー" },
      { text: "コンテストに出る予定はないが、コンテスト選手レベルのトレーニング知識を教えてもらえるのは贅沢。", attr: "利用歴6ヶ月のユーザー" },
    ],
  },
  {
    title: "継続のしやすさ",
    summary: "トレーナーの質の高さと、糖質制限のない食事指導が継続の大きな要因になっています。回数券プランの柔軟性も継続しやすさに貢献しています。",
    reviews: [
      { text: "回数券プランなら自分のペースで通えるので、忙しい時期は頻度を落とし、時間がある時にまとめて通うことができる。", attr: "回数券利用ユーザー" },
      { text: "食事を我慢する必要がないので、ストレスなく続けられている。以前通っていた糖質制限のジムは2ヶ月で挫折した。", attr: "他社から乗り換えたユーザー" },
      { text: "トレーニングが楽しいと感じられるのが一番の継続理由。トレーナーとの相性が良く、毎回のセッションが待ち遠しい。", attr: "利用歴8ヶ月のユーザー" },
      { text: "体の変化が目に見えてくると、もっと続けたいという気持ちが自然と湧いてくる。結果が出るから続けられる好循環。", attr: "利用歴5ヶ月のユーザー" },
    ],
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "BEYONDに入会金はかかりますか？", a: "コースにより異なります。ライフプランニングコースは入会金無料のキャンペーンを行っていることが多いです。回数券プランは入会金不要で始められる場合もあります。詳細は公式サイトでご確認ください。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、初心者の方も多数在籍しています。基礎的なマシンの使い方から丁寧に指導してもらえます。ボディメイク特化ですが、初心者向けのメニューも充実しています。" },
  { q: "糖質制限はありますか？", a: "BEYONDでは極端な糖質制限は行いません。PFCバランス（たんぱく質・脂質・炭水化物の比率）を整える食事指導を行い、トレーニングのパフォーマンスを維持しながら体を変えていきます。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回あたり約55分のトレーニングです。着替え・準備を含めると約75分を見込んでください。" },
  { q: "コンテスト出場を目指していなくても通えますか？", a: "もちろんです。コンテスト出場者の指導実績は豊富ですが、ダイエットや健康維持、姿勢改善など、さまざまな目的で利用されています。" },
  { q: "回数券とコースの違いは？", a: "回数券はトレーニングのみで食事指導は含まれません。ライフプランニングコースは食事指導やLINE相談が含まれる総合的なプログラムです。目的に応じて選択してください。" },
  { q: "女性でも通いやすい環境ですか？", a: "女性利用者も多く、女性トレーナーも在籍しています。ボディメイクに興味のある女性から支持されており、美しいボディラインを目指す方に最適な環境です。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。実際のトレーニングを体験した上で入会を検討できます。公式サイトから予約できます。" },
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
  { region: "北海道", stores: [{ name: "札幌店", href: "/review/beyond/sapporo/" }, { name: "札幌大通店" }] },
  { region: "宮城", stores: [{ name: "仙台店", href: "/review/beyond/sendai/" }] },
  { region: "東京", stores: [{ name: "新宿店", href: "/review/beyond/shinjuku/" }, { name: "新宿ANNEX店" }, { name: "池袋店", href: "/review/beyond/ikebukuro/" }, { name: "渋谷店", href: "/review/beyond/shibuya/" }, { name: "渋谷宮益坂店" }, { name: "恵比寿店", href: "/review/beyond/ebisu/" }, { name: "表参道店" }, { name: "六本木店", href: "/review/beyond/roppongi/" }, { name: "銀座店", href: "/review/beyond/ginza/" }, { name: "秋葉原店" }, { name: "上野店" }, { name: "北千住店" }, { name: "錦糸町店" }, { name: "町田店" }, { name: "立川店" }, { name: "吉祥寺店", href: "/review/beyond/kichijoji/" }, { name: "自由が丘店" }, { name: "中目黒店" }, { name: "二子玉川店" }, { name: "蒲田店" }, { name: "赤羽店" }, { name: "練馬店" }, { name: "大井町店", href: "/review/beyond/oimachi/" }, { name: "府中店" }, { name: "調布店" }, { name: "八王子店" }, { name: "三軒茶屋店" }, { name: "下北沢店" }, { name: "荻窪店" }, { name: "西新井店" }] },
  { region: "神奈川", stores: [{ name: "横浜店", href: "/review/beyond/yokohama/" }, { name: "横浜元町店" }, { name: "川崎店" }, { name: "武蔵小杉店" }, { name: "藤沢店" }, { name: "戸塚店" }, { name: "溝の口店" }] },
  { region: "埼玉", stores: [{ name: "大宮店" }, { name: "浦和店" }, { name: "川口店" }, { name: "所沢店" }, { name: "川越店" }] },
  { region: "千葉", stores: [{ name: "千葉店" }, { name: "船橋店" }, { name: "柏店" }] },
  { region: "愛知", stores: [{ name: "名古屋栄店", href: "/review/beyond/nagoya/" }, { name: "名駅店" }, { name: "金山店" }] },
  { region: "大阪", stores: [{ name: "梅田店", href: "/review/beyond/umeda/" }, { name: "心斎橋店" }, { name: "なんば店", href: "/review/beyond/namba/" }, { name: "天王寺店" }, { name: "北浜店" }] },
  { region: "京都", stores: [{ name: "京都四条店" }] },
  { region: "兵庫", stores: [{ name: "神戸三宮店" }] },
  { region: "福岡", stores: [{ name: "天神店", href: "/review/beyond/fukuoka/" }, { name: "博多店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "BEYONDの基本情報" },
  { id: "overview", label: "BEYONDの概要" },
  { id: "merit-demerit", label: "BEYONDのメリット・デメリット" },
  { id: "pricing", label: "BEYONDの料金" },
  { id: "reviews", label: "BEYONDの口コミ分析" },
  { id: "faq", label: "BEYONDのよくある質問" },
  { id: "stores", label: "BEYONDの店舗一覧" },
];

export default function BeyondReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BEYOND" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          BEYONDの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src="/review-beyond.jpg"
            alt="BEYONDのイメージ画像 - 本格的なボディメイクジムの内装"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          BEYONDは全国90店舗以上を展開するボディメイク特化型のパーソナルトレーニングジムです。ボディビル・フィジークのコンテスト入賞経験を持つトレーナーが多数在籍し、初心者から上級者まで対応できる指導力が最大の特徴です。糖質制限に頼らない食事指導と、筋肉をつけながら脂肪を落とすアプローチで支持を集めています。本記事では、BEYONDの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの概要</h2>
          <h3 className="text-lg font-bold mb-4">BEYONDの3つの強み</h3>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">BEYONDのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">BEYONDのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">BEYONDのデメリット</h3>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            BEYONDの料金はコース・回数券ごとに設定されています。以下は代表的なプランの一覧です。キャンペーンにより入会金が無料になる場合もあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">回数 / 期間</th>
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
            ※ 料金は税込です。キャンペーンにより変動する場合があります。回数券の有効期限は購入時にご確認ください。
          </p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            BEYONDのGoogleマップ口コミを分析すると、トレーナーの質の高さとボディメイク効果への満足度が際立っています。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">
              ※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/BEYOND+%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/BEYOND パーソナルジム/</a>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            BEYONDは全国90店舗以上を展開しています（2026年4月時点）。以下は主要エリアの店舗一覧です。
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
          <h2 className="text-xl font-bold mb-3">BEYONDが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリング・体験トレーニングで、トレーナーの質を体感してみましょう。
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
