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
  title: "BEYOND（ビヨンド）の口コミ・評判｜悪い口コミ・料金・勧誘を公式情報で検証",
  description:
    "BEYOND（ビヨンド）の口コミ・評判を、検索上位の記事が挙げる論点ごとに公式情報と照合しました。公式店舗一覧の182店舗・39都道府県の分布、回数券10回102,300円〜の料金と1回あたりの単価、勧誘・返金・解約に関する公式の記載をまとめています。",
};

/*
 * 2026-10-26 改訂: 店舗数・料金・サービス内容は公式サイト（トップの店舗一覧・料金ページ・よくある質問・会社概要・お知らせ）を2026-10-26に確認した値。
 * 口コミは「BEYOND 口コミ／評判」の検索上位記事（駅探PICKS・smartlog）が挙げる論点を、公式の記載と照合した（本文は転載しない）。
 * 出典の確認できない記述（営業時間10:00〜22:00、1回約55分、ボディリコンポジションの成功者が多い等）と、出典のない口コミ傾向の要約10項目は削除した。
 */
const CHECKED = "2026年10月26日";

const SRC = {
  top: "https://beyond-gym.com/",
  price: "https://beyond-gym.com/price/",
  help: "https://beyond-gym.com/help/",
  company: "https://beyond-gym.com/company/",
  kiyaku: "https://beyond-gym.com/2026/10/23/20261023/",
  ekitan: "https://ekitan.com/media/fitness/beyond/",
  smartlog: "https://smartlog.jp/210254",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社ワールドフィット（東京都渋谷区・2017年設立）が運営するマンツーマンのパーソナルジムです。無理な糖質制限をせず、3食とる食事指導を公式に掲げています。" },
  { label: "店舗", value: "公式トップの店舗一覧に182店舗・39都道府県が掲載されています。東京都53・神奈川県20・埼玉県16・千葉県12で、1都3県が全体の約55%です。" },
  { label: "料金", value: "入会金は全コース無料です。初めての方は回数券（10回102,300円〜）か、食事管理付きのライフプランニングコース（2ヶ月16回290,400円）から選びます。月額のマンスリー（月2回17,600円〜）はコース終了後の継続プランです。" },
  { label: "体験", value: "通常11,000円の体験トレーニング（50分）が初回無料です。カウンセリングのみの利用もできます。" },
  { label: "口コミ", value: "当サイトが収録したGoogleマップの55店舗は平均評点4.93です。検索上位の記事では「料金が高い」「勧誘」「返金保証がない」が論点に挙がっており、公式の記載との照合結果を下にまとめています。" },
];

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社ワールドフィット（東京都渋谷区富ヶ谷・2017年4月20日設立・資本金2,000万円）" },
  { label: "店舗数", value: "公式トップの店舗一覧に182店舗・39都道府県（2026年10月26日確認）。本文の表記は「全国150店舗以上」、料金ページの比較表は「全国約180店舗」" },
  { label: "営業時間", value: "店舗により異なる（土日祝も営業）" },
  { label: "1回の時間", value: "約50分（回数券・ライフプランニング・体験トレーニングとも）" },
  { label: "設備・レンタル", value: "全店にシャワー・更衣室。ウェア・タオルは無料レンタル。靴の貸し出しはなく、屋内用シューズの持参が必要" },
  { label: "公式URL", value: "https://beyond-gym.com/", isLink: true },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "入会金が全コース無料で、店舗数が多い",
    desc: "公式料金ページには「全コースにて入会金無料」と記載されています。公式トップの店舗一覧には182店舗が掲載され、北海道から沖縄まで39都道府県に店舗があります。転勤や引っ越しがあっても通える店舗を見つけやすい規模です。",
  },
  {
    title: "無理な糖質制限をしない食事方針",
    desc: "公式サイトは「無理な糖質制限は推奨していません」「3食きっちり食事をとって頂きます」と説明しています。ライフプランニングコースでは、管理栄養士またはBEYONDトレーナーがLINEで毎食の食事管理を行います。飲酒も、量と種類に注意すれば可能とされています。",
  },
  {
    title: "回数券ならトレーニングだけを1回8,800円〜で受けられる",
    desc: "回数券は10回102,300円（1回10,230円）・20回187,000円（1回9,350円）・30回264,000円（1回8,800円）で、トレーニング後のプロテインが含まれます。食事の知識がある方や通う日が不定期な方向けのプランと公式に案内されています。",
  },
  {
    title: "コンテスト出場の指導にも対応",
    desc: "公式FAQでは、ポージング指導や大会に向けた調整のアドバイスを行い、SSA・JBBF・BBJなどの大会で実績のあるトレーナーが在籍していると説明しています。料金ページの比較表には「採用倍率5%」「コンテスト入賞実績者中心」と記載されています。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "食事管理付きのコースは1回あたり18,150円",
    desc: "ライフプランニングコースは16回290,400円・24回435,600円で、1回あたり18,150円です。回数券（1回8,800〜10,230円）との差は、毎食の食事管理を含むかどうかです。予算を抑えたい場合は、回数券で始めて食事は自分で管理する方法もあります。",
  },
  {
    title: "返金保証の記載がなく、会員規約も公開されていない",
    desc: "公式の料金ページ・よくある質問に返金保証の記載はありません。会員規約の本文は公式サイトに掲載されておらず、2026年10月23日のお知らせで第18条「中途解約」に項目を追加したことが告知されています。解約時の扱いは契約前に書面で確認されることをおすすめします。",
  },
  {
    title: "完全個室か、女性トレーナーがいるかは店舗による",
    desc: "公式FAQでは、完全個室かどうか、女性トレーナーが在籍しているかはいずれも「店舗によって異なる」と回答しています。他の利用者と同じ空間でトレーニングする店舗もあるため、気になる方は店舗ページの写真を確認するか、カウンセリング時に見学されることをおすすめします。",
  },
  {
    title: "北海道の店舗は料金が異なる",
    desc: "料金ページには「北海道の店舗のみ一部料金形態が異なります」と記載されています。案内先の北海道向け料金ページは、2026年10月26日時点で表示されませんでした（404）。北海道の6店舗を検討している方は、店舗に直接料金をご確認ください。",
  },
];

/* ---------- 料金プラン ---------- */
// 2026-10-26: 公式料金ページ（beyond-gym.com/price/）で再確認。北海道を除く全店共通
const pricingGroups = [
  {
    title: "回数券（トレーニングのみ・アフタープロテイン付き）",
    note: "パーソナルジム経験者、食事の知識がある方、来店が不定期になる方向けと公式に案内されています。",
    rows: [
      { name: "STANDARD 10", count: "10回", price: "102,300円", per: "10,230円" },
      { name: "ACHIEVE 20", count: "20回", price: "187,000円", per: "9,350円" },
      { name: "BEYOND 30", count: "30回", price: "264,000円", per: "8,800円" },
    ],
  },
  {
    title: "ライフプランニングコース（トレーニング＋毎食の食事管理＋プロテイン）",
    note: "ダイエット目的の方や初心者に公式がすすめているメインコースです。食事管理はLINEで行います。",
    rows: [
      { name: "ライフプランニング16", count: "16回／2ヶ月", price: "290,400円", per: "18,150円" },
      { name: "ライフプランニング24", count: "24回／3ヶ月", price: "435,600円", per: "18,150円" },
    ],
  },
  {
    title: "マンスリー（回数券・ライフプランニング終了後の継続コース）",
    note: "コース終了後に月額制で続けるためのプランです。公式FAQによると、入会者の93%がこのアフターケアを継続しています。",
    rows: [
      { name: "マンスリー2", count: "月2回", price: "17,600円／月", per: "8,800円" },
      { name: "マンスリー4", count: "月4回", price: "35,200円／月", per: "8,800円" },
      { name: "マンスリー8", count: "月8回", price: "69,300円／月", per: "約8,663円" },
    ],
  },
];

/* ---------- 口コミの論点と公式情報の照合 ---------- */
const reviewIssues = [
  { issue: "料金が高い", where: "駅探PICKS・smartlog", check: "ライフプランニングは1回18,150円、回数券は1回8,800〜10,230円です（入会金0円）。駅探PICKSは2ヶ月コースが相場を10万円近く上回ると記載しています。食事管理が必要かどうかでプランを選ぶと総額が大きく変わります。" },
  { issue: "勧誘が強い", where: "smartlog（悪い口コミとしてGoogleのクチコミを引用）", check: "公式FAQは「強引な勧誘などは一切行っておりません」と回答し、カウンセリングのみの利用も案内しています。体験時に希望の回数と予算を先に伝えると、提案の範囲を絞りやすくなります。" },
  { issue: "全額返金保証がない", where: "駅探PICKS", check: "公式の料金ページ・FAQにも返金保証の記載はありません。会員規約の本文は公開されていません（第18条「中途解約」を2026年10月23日に改定と告知）。" },
  { issue: "他の利用者と一緒にトレーニングする場合がある", where: "駅探PICKS", check: "公式FAQは、完全個室かどうかは「店舗によって異なる」と回答しています。" },
  { issue: "トレーナーを選べない・合わない", where: "駅探PICKS・smartlog", check: "公式の料金ページ・FAQに担当の指名制度の記載はありません。女性トレーナーの在籍も店舗によります。初回無料の体験で担当者との相性を確認できます。" },
  { issue: "痩せない", where: "駅探PICKS・smartlogの記事タイトル", check: "公式FAQは、効果に大きな個人差があるとしたうえで、2〜3週間で変化が出る方が多く、3か月程度の継続をすすめると説明しています。体重を急激に落とす方法は推奨していません。" },
];
const thirdParty = [
  { name: "駅探PICKS「BEYOND（ビヨンド）の口コミ・評判は？」", href: SRC.ekitan, date: "2022年9月27日公開・2026年1月20日更新", note: "口コミは各店舗のGoogleマップから引用（引用元の店舗名を表示）。回数券を96,800円からとする記載があり、公式の現行料金（10回102,300円）と一致しません。" },
  { name: "smartlog「BEYOND(ビヨンド)ジムの口コミ集」", href: SRC.smartlog, date: "2021年8月22日公開・2025年10月29日更新（PR表記あり）", note: "悪い口コミ3件は「引用：Googleのクチコミ」と表示。記者の体験レポートあり。料金（回数券10回96,800円・短期集中コース16回281,600円）と店舗数（2023年10月時点で99店舗）は当時の情報で、トレーナーの採用倍率を「50倍」としています（公式の比較表は「採用倍率5%」）。" },
  { name: "みん評（口コミサイト）", href: "", date: "—", note: "検索上位に表示されますが、当サイトの環境からはページ本体を閲覧できない（403）ため、件数・評点は掲載しません。" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "BEYONDに入会金はかかりますか？", a: "かかりません。公式料金ページに「全コースにて入会金無料」と記載されています（2026年10月26日確認）。" },
  { q: "初めて通う場合、どのプランから始めますか？", a: "回数券（10回102,300円〜）か、食事管理付きのライフプランニングコース（2ヶ月16回290,400円・3ヶ月24回435,600円）から選びます。月額のマンスリー（月2回17,600円〜）は、これらの終了後に申し込む継続コースです。北海道の店舗は料金形態が一部異なります。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "約50分です（公式料金ページ）。体験はカウンセリングと体組成測定を含むため、より長い時間を見込んでください。" },
  { q: "糖質制限はありますか？", a: "無理な糖質制限は推奨していないと公式サイトに記載されています。「いつ・どのように摂るか」を指導し、3食とる食事管理を行う方針です。" },
  { q: "勧誘はありますか？", a: "公式FAQでは「強引な勧誘などは一切行っておりません」と回答しています。一方、口コミ記事には体験後の勧誘を気にする声も紹介されているため、希望の回数と予算をカウンセリングの最初に伝えることをおすすめします。" },
  { q: "返金保証や中途解約の条件はありますか？", a: "公式の料金ページ・FAQに返金保証の記載はありません。会員規約の本文は公式サイトに掲載されておらず、2026年10月23日に第18条「中途解約」へ項目を追加したと告知されています。契約前に、解約時の扱いを書面で確認してください。" },
  { q: "持ち物は何が必要ですか？", a: "ウェアとタオルは無料で借りられますが、靴の貸し出しはありません。体験トレーニングを含めて、屋内用シューズの持参が必要です（公式料金ページ）。" },
  { q: "シャワーはありますか？", a: "全店舗に更衣室とシャワールームがあり、シャンプー・コンディショナー・ボディソープが用意されています。パウダールームの有無は店舗によります（一部ANNEX店舗を除く）。" },
  { q: "分割払いはできますか？", a: "最大26回のクレジットカード分割に対応しています。回数に応じて別途利息がかかります。公式FAQには月々の目安として「4300〜」と「4,700円〜」の2通りの表記があります。" },
  { q: "完全個室ですか？女性トレーナーはいますか？", a: "どちらも店舗によって異なると公式FAQに記載されています。各店舗ページの写真やトレーナー情報をご確認いただくか、店舗にお問い合わせください。" },
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

/* ---------- 店舗一覧（公式トップの店舗一覧・2026-10-26確認・182店舗。リンクは当サイトの店舗ページがある店舗のみ） ---------- */
type StoreItem = { name: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "東京都", stores: [{ name: "秋葉原店", href: "/review/beyond/akihabara/" }, { name: "四ツ谷麹町店" }, { name: "銀座店", href: "/review/beyond/ginza/" }, { name: "人形町店" }, { name: "麻布十番店" }, { name: "六本木店", href: "/review/beyond/roppongi/" }, { name: "田町・三田店" }, { name: "大門・浜松町店" }, { name: "新宿店", href: "/review/beyond/shinjuku/" }, { name: "四谷三丁目新宿御苑店" }, { name: "飯田橋神楽坂店" }, { name: "高田馬場店" }, { name: "春日後楽園店" }, { name: "錦糸町店", href: "/review/beyond/kinshicho/" }, { name: "錦糸町ANNEX店" }, { name: "木場店" }, { name: "五反田店" }, { name: "大井町店", href: "/review/beyond/oimachi/" }, { name: "大井町ANNEX店" }, { name: "大森海岸店" }, { name: "西小山店" }, { name: "自由が丘店", href: "/review/beyond/jiyugaoka/" }, { name: "学芸大学店" }, { name: "蒲田店", href: "/review/beyond/kamata/" }, { name: "二子玉川店", href: "/review/beyond/futakotamagawa/" }, { name: "下北沢店", href: "/review/beyond/shimokitazawa/" }, { name: "経堂店" }, { name: "千歳烏山店" }, { name: "渋谷表参道店" }, { name: "恵比寿店", href: "/review/beyond/ebisu/" }, { name: "中野店" }, { name: "阿佐ヶ谷店" }, { name: "池袋店", href: "/review/beyond/ikebukuro/" }, { name: "池袋ANNEX店" }, { name: "巣鴨店" }, { name: "赤羽店", href: "/review/beyond/akabane/" }, { name: "板橋店" }, { name: "大泉学園店" }, { name: "練馬江古田店" }, { name: "新小岩店" }, { name: "北千住店", href: "/review/beyond/kitasenju/" }, { name: "葛西店" }, { name: "八王子店", href: "/review/beyond/hachioji/" }, { name: "立川店", href: "/review/beyond/tachikawa/" }, { name: "立川ANNEX店" }, { name: "吉祥寺店", href: "/review/beyond/kichijoji/" }, { name: "吉祥寺ANNEX店" }, { name: "調布店", href: "/review/beyond/chofu/" }, { name: "町田店", href: "/review/beyond/machida/" }, { name: "国分寺店" }, { name: "聖蹟桜ヶ丘店" }, { name: "多摩センター店" }, { name: "中野ANNEX店" }] },
  { region: "神奈川県", stores: [{ name: "横浜東口店" }, { name: "横浜西口店" }, { name: "横浜元町店", href: "/review/beyond/yokohama-motomachi/" }, { name: "新横浜店" }, { name: "上大岡店" }, { name: "二俣川店" }, { name: "たまプラーザ店" }, { name: "たまプラーザANNEX店" }, { name: "戸塚店", href: "/review/beyond/totsuka/" }, { name: "新百合ヶ丘店" }, { name: "川崎店", href: "/review/beyond/kawasaki/" }, { name: "登戸店" }, { name: "溝の口店", href: "/review/beyond/mizonokuchi/" }, { name: "武蔵小杉店", href: "/review/beyond/musashikosugi/" }, { name: "橋本店" }, { name: "平塚店" }, { name: "藤沢店", href: "/review/beyond/fujisawa/" }, { name: "湘南台店" }, { name: "本厚木店" }, { name: "大和店" }] },
  { region: "埼玉県", stores: [{ name: "浦和店", href: "/review/beyond/urawa/" }, { name: "浦和ANNEX店" }, { name: "大宮店", href: "/review/beyond/omiya/" }, { name: "川越店", href: "/review/beyond/kawagoe/" }, { name: "春日部店" }, { name: "熊谷店" }, { name: "川口東口店" }, { name: "川口西口店" }, { name: "所沢店", href: "/review/beyond/tokorozawa/" }, { name: "上尾店" }, { name: "草加店" }, { name: "南越谷店" }, { name: "蕨店" }, { name: "志木店" }, { name: "和光市店" }, { name: "ふじみ野店" }] },
  { region: "千葉県", stores: [{ name: "千葉駅前店", href: "/review/beyond/chiba/" }, { name: "市川店" }, { name: "船橋店", href: "/review/beyond/funabashi/" }, { name: "西船橋店" }, { name: "津田沼店" }, { name: "木更津店" }, { name: "松戸店" }, { name: "成田店" }, { name: "柏店", href: "/review/beyond/kashiwa/" }, { name: "柏の葉キャンパス店" }, { name: "浦安店" }, { name: "南流山店" }] },
  { region: "大阪府", stores: [{ name: "心斎橋店", href: "/review/beyond/shinsaibashi/" }, { name: "梅田店", href: "/review/beyond/umeda/" }, { name: "梅田ANNEX店" }, { name: "天王寺店", href: "/review/beyond/tennoji/" }, { name: "谷町四丁目店" }, { name: "堺東店" }, { name: "江坂店" }, { name: "高槻店" }, { name: "枚方店" }] },
  { region: "愛知県", stores: [{ name: "名古屋駅前店" }, { name: "名古屋栄店" }, { name: "金山店", href: "/review/beyond/kanayama/" }, { name: "豊橋店" }, { name: "岡崎店" }, { name: "春日井店" }, { name: "刈谷店" }, { name: "豊田店" }] },
  { region: "静岡県", stores: [{ name: "静岡店" }, { name: "清水店" }, { name: "浜松店" }, { name: "富士店" }, { name: "沼津店" }, { name: "掛川店" }, { name: "藤枝店" }] },
  { region: "北海道道", stores: [{ name: "札幌駅前店" }, { name: "札幌ANNEX店" }, { name: "札幌大通店" }, { name: "札幌円山店" }, { name: "豊平店" }, { name: "函館店" }] },
  { region: "兵庫県", stores: [{ name: "神戸元町店" }, { name: "姫路店" }, { name: "西明石店" }, { name: "加古川店" }, { name: "西宮店" }] },
  { region: "福岡県", stores: [{ name: "小倉店" }, { name: "博多店", href: "/review/beyond/hakata/" }, { name: "香椎駅前店" }, { name: "福岡天神店", href: "/review/beyond/fukuoka/" }, { name: "久留米店" }] },
  { region: "茨城県", stores: [{ name: "水戸店" }, { name: "つくば研究学園前店" }, { name: "神栖店" }, { name: "守谷店" }] },
  { region: "栃木県", stores: [{ name: "宇都宮店" }, { name: "足利店" }, { name: "小山店" }] },
  { region: "福島県", stores: [{ name: "郡山店" }, { name: "いわき店" }] },
  { region: "群馬県", stores: [{ name: "高崎店" }, { name: "前橋店" }] },
  { region: "岐阜県", stores: [{ name: "岐阜店" }, { name: "多治見店" }] },
  { region: "京都府", stores: [{ name: "京都四条店", href: "/review/beyond/kyoto-shijo/" }, { name: "伏見桃山店" }] },
  { region: "岡山県", stores: [{ name: "岡山店" }, { name: "倉敷店" }] },
  { region: "広島県", stores: [{ name: "福山店" }, { name: "広島店", href: "/review/beyond/hiroshima/" }] },
  { region: "熊本県", stores: [{ name: "熊本店" }, { name: "肥後大津店" }] },
  { region: "岩手県", stores: [{ name: "盛岡店" }] },
  { region: "宮城県", stores: [{ name: "仙台店", href: "/review/beyond/sendai/" }] },
  { region: "秋田県", stores: [{ name: "秋田店" }] },
  { region: "山形県", stores: [{ name: "山形店" }] },
  { region: "新潟県", stores: [{ name: "新潟店" }] },
  { region: "富山県", stores: [{ name: "富山店" }] },
  { region: "石川県", stores: [{ name: "金沢店" }] },
  { region: "福井県", stores: [{ name: "福井店" }] },
  { region: "山梨県", stores: [{ name: "甲府国母店" }] },
  { region: "長野県", stores: [{ name: "長野店" }] },
  { region: "三重県", stores: [{ name: "四日市店" }] },
  { region: "滋賀県", stores: [{ name: "滋賀草津店" }] },
  { region: "奈良県", stores: [{ name: "奈良店" }] },
  { region: "和歌山県", stores: [{ name: "和歌山店" }] },
  { region: "香川県", stores: [{ name: "高松店" }] },
  { region: "愛媛県", stores: [{ name: "松山店" }] },
  { region: "長崎県", stores: [{ name: "長崎店" }] },
  { region: "大分県", stores: [{ name: "大分店" }] },
  { region: "宮崎県", stores: [{ name: "宮崎店" }] },
  { region: "沖縄県", stores: [{ name: "沖縄那覇店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];


export default function BeyondReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "BEYOND"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BEYOND（ビヨンド）パーソナルジム",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "BEYOND（ビヨンド）の口コミ・評判｜悪い口コミ・料金・勧誘を公式情報で検証",
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
        "dateModified": "2026-10-26"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BEYOND" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          BEYOND（ビヨンド）の口コミ・評判｜悪い口コミ・料金・勧誘を公式情報で検証
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/beyond.jpg" alt="BEYONDの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">BEYOND 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月26日（店舗数と都道府県別の分布・料金・サービス内容を公式サイトで再確認し、口コミ記事の論点を公式情報と照合）</p>
        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="BEYONDとは">
          <h2 className="font-bold text-gray-900 mb-3">BEYOND（ビヨンド）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式トップ（店舗一覧）</Src>・<Src href={SRC.price}>公式料金ページ</Src>・<Src href={SRC.help}>よくある質問</Src>・<Src href={SRC.company}>会社概要</Src>（いずれも{CHECKED}確認）。Googleマップの数値は当サイトの取得データ（2026年8月29日〜9月8日）です。
          </p>
        </section>
        <GymCta slug="beyond" name="BEYOND" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">BEYONDの基本情報</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">BEYONDのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">BEYONDの料金と1回あたりの単価</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">BEYONDの口コミ分析（記事の論点と公式情報の照合）</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Googleマップに掲載されているBEYONDの店舗</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">他のジムと比較</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">BEYONDの口コミの傾向（実際の口コミを編集部が読んで要約・2026年9月6日取得）</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">BEYONDのよくある質問</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">BEYONDの店舗一覧（公式掲載の182店舗）</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">BEYONDが気になった方へ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="BEYOND" />
        <BrandFactCheck slug="beyond" />
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            BEYOND の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow">
            <img src="/ss-beyond.jpg" alt="BEYOND 口コミ・評判" className="w-full h-auto" />
          </a>
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          BEYONDは、株式会社ワールドフィットが運営するマンツーマンのパーソナルジムです。公式トップの店舗一覧には{CHECKED}時点で182店舗が掲載されています。当ページでは、公式サイトの料金・よくある質問の記載と、検索上位の口コミ記事が挙げる論点を照合し、契約前に確認しておきたい点をまとめています。
        </p>

        {/* ---------- 目次 ---------- */}
        

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの基本情報</h2>
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


        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">BEYONDのメリット・デメリット</h2>

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
        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの料金と1回あたりの単価</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            当サイトでは{CHECKED}に公式料金ページを確認しました。入会金は全コース無料で、北海道を除く全店舗が共通の料金です。1回あたりの単価は、公式表示があるものはその金額、ないものは当サイトが料金÷回数で計算しています（いずれも税込）。
          </p>
          {pricingGroups.map((g) => (
            <div key={g.title} className="mb-6">
              <h3 className="font-bold text-gray-800 mb-1">{g.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{g.note}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-teal-500 text-white">
                      <th className="px-4 py-2 text-left font-medium">プラン</th>
                      <th className="px-4 py-2 text-left font-medium">回数</th>
                      <th className="px-4 py-2 text-left font-medium">料金（税込）</th>
                      <th className="px-4 py-2 text-left font-medium">1回あたり</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.rows.map((r) => (
                      <tr key={r.name} className="border-b border-gray-100">
                        <td className="px-4 py-2 font-medium text-gray-800">{r.name}</td>
                        <td className="px-4 py-2 text-gray-700">{r.count}</td>
                        <td className="px-4 py-2 text-gray-700">{r.price}</td>
                        <td className="px-4 py-2 text-gray-700">{r.per}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
            <li>・単発のトレーニングは通常1回11,000円で、体験トレーニング（50分）は初回無料です。</li>
            <li>・計算例（当サイト試算）：ライフプランニング16（2ヶ月290,400円）を終えてマンスリー4（月35,200円）を4ヶ月続けると、半年の総額は431,200円です。食事を自分で管理する場合、回数券20回（187,000円）で同じ回数程度を通う方法もあります。</li>
            <li>・ロッカーは回数券・ライフプランニングとも無料です。トレーニング後のプロテインは各プランに含まれ、単品は1杯500円です。</li>
            <li>・北海道の店舗は一部料金形態が異なります。公式の案内先ページは{CHECKED}時点で表示されなかったため、店舗にご確認ください。</li>
          </ul>
          <p className="text-xs text-gray-500">出典: <Src href={SRC.price}>公式料金ページ</Src>・<Src href={SRC.help}>よくある質問</Src>（{CHECKED}確認）。分割払いを選ぶ場合は、回数に応じて別途利息がかかります。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合ったプランをご提案します</p>
            <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの口コミ分析（記事の論点と公式情報の照合）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            当サイトでは{CHECKED}に「BEYOND 口コミ」「BEYOND 評判 悪い」で上位に表示される記事を開き、悪い口コミとして挙げられている論点を抜き出して、公式サイトの記載と照合しました。口コミ本文は転載していません。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium w-36">論点</th>
                  <th className="px-4 py-2 text-left font-medium w-40">挙げている記事</th>
                  <th className="px-4 py-2 text-left font-medium">公式情報での確認結果</th>
                </tr>
              </thead>
              <tbody>
                {reviewIssues.map((r) => (
                  <tr key={r.issue} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-2 font-medium text-gray-800">{r.issue}</td>
                    <td className="px-4 py-2 text-gray-700">{r.where}</td>
                    <td className="px-4 py-2 text-gray-700">{r.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">確認した記事と口コミの出典</h3>
          <ul className="space-y-3 text-sm mb-6">
            {thirdParty.map((t) => (
              <li key={t.name} className="leading-relaxed text-gray-700">
                <p className="font-medium text-gray-800">
                  {t.href ? <Src href={t.href}>{t.name}</Src> : t.name}
                  <span className="ml-2 text-xs font-normal text-gray-500">{t.date}</span>
                </p>
                <p className="mt-0.5">{t.note}</p>
              </li>
            ))}
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-xs text-yellow-800">※ 当サイトが取得したGoogleマップの評点・件数を下に掲載しています。どの記事も、口コミの多くはGoogleマップの投稿を引用したものです。実際の投稿は、下記リンクからGoogleマップでご確認ください。</p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/BEYOND+%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/BEYOND パーソナルジム/</a>
            </p>
          </div>

          <GmapStats slug="beyond" brand="BEYOND（ビヨンド）" />
          <p className="text-xs text-gray-500">※ 当サイトのデータベースに入っている55店舗はすべて評点4.8以上でした。評点が高く店舗間の差が小さいため、店舗選びでは評点よりも、通いやすさ・個室かどうか・担当トレーナーとの相性を確認されることをおすすめします。</p>
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
        <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Googleマップに掲載されているBEYONDの店舗（当サイト収録分）</h2>
        <p className="text-xs text-gray-500 mb-4">当サイトの店舗データベースに収録した、Googleマップに掲載されている店舗です。店舗名のリンクはBEYOND公式の無料カウンセリング予約ページ(提携リンク・PR)へ移動します。</p>
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">北海道</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND札幌大通店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND札幌ANNEX店</a> <a key="2" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND札幌円山店</a> <a key="3" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND札幌駅前店</a> <a key="4" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND豊平店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">岩手県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 盛岡店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">宮城県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 仙台店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">秋田県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND秋田店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">山形県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 山形店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">茨城県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルトレーニング BEYOND 水戸店(水戸駅)</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">栃木県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 宇都宮店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">群馬県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND前橋</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">埼玉県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 大宮店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 浦和店</a> <a key="2" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 浦和ANNEX店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">千葉県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 千葉駅前店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">東京都</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 渋谷宮益坂店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 新宿店</a> <a key="2" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 池袋店</a> <a key="3" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 池袋ANNEX店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">神奈川県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND たまプラーザ店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 横浜東口店</a> <a key="2" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジムBEYOND横浜元町店(パーソナルトレーニング) ｜関内/横浜元町</a> <a key="3" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 横浜西口店</a> <a key="4" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">武蔵小杉 BEYOND</a> <a key="5" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND川崎店(パーソナルトレーニング)</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">新潟県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 新潟店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">富山県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 富山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">石川県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND金沢店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">福井県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 福井店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">山梨県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND 甲府国母店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">長野県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 長野店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">岐阜県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND岐阜店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">静岡県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 静岡店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND清水店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">愛知県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 名古屋駅前店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 名古屋栄店</a> <a key="2" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND金山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">京都府</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 京都四条店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 伏見桃山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">大阪府</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND梅田店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 心斎橋店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">兵庫県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 神戸元町店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">奈良県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND 奈良店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">和歌山県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND和歌山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">岡山県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND 岡山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">広島県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND広島店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">香川県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 高松店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">愛媛県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 松山店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">福岡県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">パーソナルジム BEYOND 博多店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND福岡天神店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">熊本県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 熊本店</a> <a key="1" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND 肥後大津店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">大分県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND大分店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">沖縄県</h3>
            <div><a key="0" href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">BEYOND（ビヨンド）沖縄那覇店</a></div>
          </div>
        </div>

          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">2ヶ月16回で通う場合の料金を、各ブランドの公式サイトの掲載値で比較しました（税込）。1回あたりは当サイトが総額÷16回で計算しています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">BEYOND</th>
                  <th className="px-3 py-2 text-center font-medium">RIZAP</th>
                  <th className="px-3 py-2 text-center font-medium">HABIT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">料金（2ヶ月16回）</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">290,400円<br />（ライフプランニング16）</td>
                  <td className="px-3 py-2 text-center text-gray-700">327,800円<br />（BASIC 16回）</td>
                  <td className="px-3 py-2 text-center text-gray-700">142,400円<br />（集中ダイエットコース16回）</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">入会金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">0円</td>
                  <td className="px-3 py-2 text-center text-gray-700">55,000円</td>
                  <td className="px-3 py-2 text-center text-gray-700">30,000円（キャンペーンで0円）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">入会金を含む総額</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">290,400円</td>
                  <td className="px-3 py-2 text-center text-gray-700">382,800円</td>
                  <td className="px-3 py-2 text-center text-gray-700">142,400円（キャンペーン適用時）</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">1回あたり</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">18,150円</td>
                  <td className="px-3 py-2 text-center text-gray-700">約23,925円</td>
                  <td className="px-3 py-2 text-center text-gray-700">8,900円</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">食事のサポート</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">毎食の食事管理（LINE）</td>
                  <td className="px-3 py-2 text-center text-gray-700">—</td>
                  <td className="px-3 py-2 text-center text-gray-700">食事サポート（LINE）</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">返金保証</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">公式に記載なし</td>
                  <td className="px-3 py-2 text-center text-gray-700">30日間（条件あり）</td>
                  <td className="px-3 py-2 text-center text-gray-700">全額返金制度あり（条件は入会時に説明）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ BEYONDは公式料金ページ（2026年10月26日確認）、RIZAPは公式プランページ（2026年10月14日確認）、HABITは公式料金ページ（2026年10月26日確認）の掲載値です。RIZAPの食事サポートの内容は当ページでは確認していません。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/rizap/" className="text-xs text-teal-600 hover:underline">RIZAPの口コミを見る →</Link>
            <Link href="/review/habit/" className="text-xs text-teal-600 hover:underline">HABITの口コミを見る →</Link>
            <Link href="/review/247workout/" className="text-xs text-teal-600 hover:underline">24/7ワークアウトの口コミを見る →</Link>
          </div>
        </section>

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 id="s9" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの口コミの傾向（実際の口コミを編集部が読んで要約・2026年9月6日取得）</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">よく見られる好意的な声</span>——「トレーナーが明るくフレンドリーで楽しく続けられる」という相性面の評価が特に多く、「極端な食事制限をせず生活に合わせて調整してくれる」食事指導への言及、大会出場者への専門的な指導など目的別対応の声もあります。5ヶ月で体重以外の変化も出たという、中期的な成果の報告も見られます。</p>
            <p><span className="font-semibold text-rose-700">気になる点・読み方の注意</span>——「特定のトレーナーを追いかけて店舗を移った」という声が複数あるほど、満足度がトレーナー個人に紐づく傾向が強いブランドです。無料カウンセリング・体験で担当者との相性を確かめたうえでの入会をおすすめします。新規オープン店では開店前の応援投稿が含まれる例もあるため、件数は割り引いてお読みください。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗(新宿・大阪・福岡ほか)の直近口コミをPlaces APIで取得し、編集部が読んだ上で傾向を要約したものです(本文の転載はしていません)。個々の体験は店舗・トレーナー・時期により異なります。</p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="beyond" name="BEYOND" />

        <section id="faq" className="mb-12">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDのよくある質問</h2>
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

        {/* ---------- 店舗一覧（公式トップの店舗一覧・2026-10-26確認・182店舗。リンクは当サイトの店舗ページがある店舗のみ） ---------- */}
        <section id="stores" className="mb-12">
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">BEYONDの店舗一覧（公式掲載の182店舗）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            公式トップの店舗一覧には、{CHECKED}時点で182店舗・39都道府県が掲載されています。当サイトで都道府県別に数えると、東京都53・神奈川県20・埼玉県16・千葉県12の1都3県で101店舗（約55%）、次いで大阪府9・愛知県8・静岡県7・北海道6です。20県は1店舗のみです。公式サイト内の表記は「全国150店舗以上」（トップ本文）と「全国約180店舗」（料金ページの比較表）の2通りがあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-28">都道府県</th>
                  <th className="px-4 py-3 text-left font-medium w-16">店舗数</th>
                  <th className="px-4 py-3 text-left font-medium">店舗名</th>
                </tr>
              </thead>
              <tbody>
                {storesByRegion.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-3 text-gray-700">{row.stores.length}</td>
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
            ※ 出典: <Src href={SRC.top}>BEYOND公式トップの店舗一覧</Src>（{CHECKED}確認）。公式の一覧では松山店が香川県の見出しの下に表示される箇所がありますが、所在地にあわせて愛媛県に数えています。リンクは当サイトに店舗ページがある店舗です。
          </p>
        </section>

        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://www29.a8.net/svt/bgt?aid=250920793087&wid=001&eno=01&mid=s00000020048001019000&mc=1" alt="BEYOND" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
          <img src="https://www14.a8.net/0.gif?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" alt="" width="1" height="1" className="inline" />
        </section>

        {/* ---------- Author Box ---------- */}
        

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s12" className="text-xl font-bold mb-3">BEYONDが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリング・体験トレーニングで、トレーナーの指導内容をご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <BrandStoreLinks brand="beyond" brandName="BEYOND" />
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
