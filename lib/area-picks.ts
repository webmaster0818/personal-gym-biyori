/**
 * /area/ 各ページの「おすすめ」掲載データ（A案: 公式の店舗一覧で確認できた店舗だけを掲載）
 *
 * - 店舗: 各ブランド公式の店舗一覧で掲載を確認できた店舗名のみ（公式の表記に合わせる）
 * - 料金: 各ブランド公式の料金ページの表記どおり（税込・税別の表記も公式に合わせる）
 * - 件数・title・description・見出し・FAQ はこの配列の件数から自動で生成する（手書きの数字を置かない）
 * - 照合明細: growth/gym-area-audit-20261021.md（2026-10-21）＋2026-10-22 の再確認
 */
import type { AreaGym } from "@/components/AreaGymCard";
import { getGymMeta } from "@/lib/gym-metadata";

export const PRICE_CHECKED_ON = "2026年10月22日";
const STORE_CHECKED_DEFAULT = "2026年10月21日";

type Brand = {
  name: string;
  price: string;
  priceNote?: string;
  entryFee: string;
  features: string[];
  priceUrl: string;
  storeListUrl: string;
  /** 冒頭の「料金の目安」用（上の price と同じ公式表記から、税込額が分かるものだけ数値化。2026-10-27） */
  summary?: { kind: "monthly4" | "course"; yen: number; label: string };
};

const BRANDS = {
  rizap: {
    name: "RIZAP（ライザップ）",
    price: "BASICプラン 全16回（2ヶ月）合計298,000円〜（税込327,800円〜）",
    entryFee: "入会金50,000円（税込55,000円）",
    features: ["30日間全額返金保証（公式サイト記載）", "専属トレーナーによるマンツーマンサポート", "専属トレーナーによる食事法の提案・フィードバック"],
    priceUrl: "https://www.rizap.jp/plan",
    storeListUrl: "https://www.rizap.jp/",
    summary: { kind: "course", yen: 327800, label: "BASICプラン 2ヶ月16回 税込327,800円〜" },
  },
  beyond: {
    name: "BEYOND（ビヨンド）",
    price: "ライフプランニングコース16（16回/2ヶ月）290,400円（税込）",
    priceNote: "回数券プラン（STANDARD 10：10回102,300円・税込）もあります。北海道の店舗は一部料金形態が異なります。",
    entryFee: "全コース入会金無料",
    features: ["全コース入会金無料", "回数券で通えるプランあり", "コンテスト入賞実績者を中心としたトレーナー"],
    priceUrl: "https://beyond-gym.com/price/",
    storeListUrl: "https://beyond-gym.com/gym/",
    summary: { kind: "course", yen: 290400, label: "ライフプランニングコース16（16回/2ヶ月）税込290,400円" },
  },
  w247: {
    name: "24/7ワークアウト",
    price: "固定プラン 月4回 月額30,400円〜（税込33,440円〜）",
    priceNote: "トレーニングは1回50分です。1回単位の一括プランは1回9,500円〜（税込10,450円〜）です。",
    entryFee: "入会金不要",
    features: ["完全個室", "食事制限をしない「3食食べる」ダイエット", "全額返金制度あり（条件あり）"],
    priceUrl: "https://247-sports.jp/workout/course/",
    storeListUrl: "https://247-sports.jp/workout/gym/kantou/tokyo/",
    summary: { kind: "monthly4", yen: 33440, label: "固定プラン 月4回 税込33,440円〜" },
  },
  ec: {
    name: "エクササイズコーチ",
    price: "スタンダード 月4回 17,600円（税込）",
    priceNote: "平日日中のデイプランなど、店舗によりコース体系が異なります。",
    entryFee: "入会金0円",
    features: ["AIを活用したマシン主導型のトレーニング", "1回20分", "アプリで当日予約可"],
    priceUrl: "https://exercisecoach.co.jp/store/",
    storeListUrl: "https://exercisecoach.co.jp/store/",
    summary: { kind: "monthly4", yen: 17600, label: "スタンダード 月4回 税込17,600円" },
  },
  dr: {
    name: "Dr.トレーニング",
    price: "16回チケット 198,400円（税込・60分トレーニングの場合）",
    priceNote: "月会費はなく、チケット購入制です。料金は店舗ページの表記です。",
    entryFee: "入会費は店舗により異なります",
    features: ["理学療法士など各分野の専門家が在籍（公式サイト記載）", "月会費なしのチケット購入制"],
    priceUrl: "https://drtraining.jp/location/",
    storeListUrl: "https://drtraining.jp/location/",
    summary: { kind: "course", yen: 198400, label: "16回チケット 税込198,400円" },
  },
  chicken: {
    name: "チキンジム",
    price: "月額制プラン 月4回 29,700円（1回50分）",
    priceNote: "公式サイトに税込・税別の表記はありません。月2回18,900円、月6回39,600円のプランもあります。",
    entryFee: "入会金35,000円",
    features: ["1回50分の月額制プラン", "ウェア・シューズ・靴下のレンタルがプランに含まれる"],
    priceUrl: "https://chicken-gym.jp/",
    storeListUrl: "https://chicken-gym.jp/",
    summary: { kind: "monthly4", yen: 29700, label: "月額制 月4回 29,700円（税込・税別の表記なし）" },
  },
  katagiri: {
    name: "かたぎり塾",
    price: "月4プラン 月あたり合計〜30,000円（税込〜33,000円）",
    priceNote: "料金ページ内の比較表では「33,000円〜」と表記されています。",
    entryFee: "入会金は店舗により異なります",
    features: ["完全個室（一部店舗を除く）", "月額制", "理学療法士監修のトレーニング"],
    priceUrl: "https://katagirijuku.jp/price",
    storeListUrl: "https://katagirijuku.jp/gyms",
    summary: { kind: "monthly4", yen: 33000, label: "月4プラン 税込33,000円（料金ページの比較表の表記）" },
  },
  apple: {
    name: "Apple GYM（アップルジム）",
    price: "個別指導 月4回プラン 10,400円（税込11,440円）",
    priceNote: "個別指導は最大2名までの指導です。完全マンツーマンのプレミアムは月4回13,500円（税込14,850円）です。",
    entryFee: "入会金はキャンペーンにより変わるため、公式サイトでご確認ください",
    features: ["月額制プラン", "完全マンツーマンのプレミアムプランあり"],
    priceUrl: "https://applegym.jp/shop/",
    storeListUrl: "https://applegym.jp/shop/",
    summary: { kind: "monthly4", yen: 11440, label: "個別指導 月4回 税込11,440円（最大2名までの指導）" },
  },
  outline: {
    name: "OUTLINE（アウトライン）",
    price: "フルサポートコース 16回 184,800円（税込）",
    priceNote: "コース終了後はクラブメンバー（月2回以上・最低3ヶ月の継続）へ移行します。",
    entryFee: "入会金0円",
    features: ["女性専用・完全個室のマンツーマントレーニング", "卒業後の生涯サポート（公式サイト記載）"],
    priceUrl: "https://www.outline-gym.com/service",
    storeListUrl: "https://www.outline-gym.com/",
    summary: { kind: "course", yen: 184800, label: "フルサポートコース 16回 税込184,800円" },
  },
  miyazaki: {
    name: "MIYAZAKI GYM（ミヤザキジム）",
    price: "8回 総額96,800円（税込・1回あたり12,100円）／都度払い1回13,200円",
    priceNote: "1回60分（着替えを含み、トレーニングは約50〜55分）です。",
    entryFee: "入会金33,000円（税込）",
    features: ["完全個室", "都度払い・コース制の両方に対応"],
    priceUrl: "https://miyazaki-gym.jp/plan/",
    storeListUrl: "https://miyazaki-gym.jp/",
    summary: { kind: "course", yen: 96800, label: "8回 総額 税込96,800円" },
  },
  aspi: {
    name: "ASPI（アスピ）",
    price: "シェイプアップ30プラン 全7回 109,000円（税込）",
    priceNote: "90食分のオンライン食事指導が含まれます。",
    entryFee: "入会金55,000円（税込）※無料体験当日の入会で無料",
    features: ["全スタッフが米国の資格を保持（公式サイト記載）", "オンライン食事指導", "ストレッチ指導"],
    priceUrl: "https://aspirest.com/course",
    storeListUrl: "https://aspirest.com/access/",
    summary: { kind: "course", yen: 109000, label: "シェイプアップ30プラン 全7回 税込109,000円" },
  },
  reborn: {
    name: "Reborn myself（リボーンマイセルフ）",
    price: "ダイエットプラン ショートコース（2ヶ月）16回 合計202,400円（税込）",
    entryFee: "入会金22,000円（税込）",
    features: ["女性専用", "固定の女性トレーナーが専属で担当"],
    priceUrl: "https://reborn-myself.com/price/",
    storeListUrl: "https://reborn-myself.com/",
    summary: { kind: "course", yen: 202400, label: "ショートコース（2ヶ月）16回 税込202,400円" },
  },
  mermake: {
    name: "メルメイク",
    price: "ショートコース 2ヶ月16回 135,000円（税込148,500円）",
    priceNote: "月4回会員（50分33,000円・税込）は、2ヶ月以上のコースを終了した方が対象です。",
    entryFee: "入会金33,000円（カウンセリング当日の入会で無料）",
    features: [],
    priceUrl: "https://mermake.co.jp/menu/",
    storeListUrl: "https://mermake.co.jp/shop-list/",
    summary: { kind: "course", yen: 148500, label: "ショートコース 2ヶ月16回 税込148,500円" },
  },
  woot: {
    name: "Woot!（旧 Bodyke）",
    price: "チケット20回 215,600円（税込）／マンスリー4回 43,560円（税込）",
    entryFee: "入会金33,000円（カウンセリング当日の入会で無料）",
    features: ["旧パーソナルジムBodyke（公式サイト記載）"],
    priceUrl: "https://woot.fit/",
    storeListUrl: "https://woot.fit/",
    summary: { kind: "monthly4", yen: 43560, label: "マンスリー4回 税込43,560円" },
  },
} satisfies Record<string, Brand>;

type BrandKey = keyof typeof BRANDS;

type Pick = {
  brand: BrandKey;
  /** 公式の店舗一覧に掲載されている店舗名（公式表記） */
  stores: string[];
  storeCheckedOn?: string;
  /** 店舗ごとに料金・入会金・出典が異なる場合の上書き */
  price?: string;
  priceNote?: string;
  entryFee?: string;
  priceUrl?: string;
  /** 店舗ページで無料体験の条件がブランド共通の記載と異なる場合の上書き */
  trial?: Trial;
};

/*
 * 無料体験・無料カウンセリング（2026-10-25 各公式サイトで確認）。
 *   - "trial": 体験トレーニングを無料と記載／"counseling": 無料カウンセリングの記載のみ（体験トレーニングの無料記載は確認できず）
 *   - ここに無いブランドは「確認できなかった」扱いで、FAQ の件数に含めない。
 */
export const TRIAL_CHECKED_ON = "2026年10月25日";
type Trial = { free: "trial" | "counseling"; src: string };
const TRIAL: Partial<Record<BrandKey, Trial>> = {
  rizap: { free: "counseling", src: "https://www.rizap.jp/" },
  beyond: { free: "trial", src: "https://beyond-gym.com/price/" },
  w247: { free: "counseling", src: "https://247-sports.jp/workout/course/" },
  ec: { free: "trial", src: "https://exercisecoach.co.jp/" },
  dr: { free: "counseling", src: "https://drtraining.jp/" },
  chicken: { free: "counseling", src: "https://chicken-gym.jp/" },
  katagiri: { free: "trial", src: "https://katagirijuku.jp/price" },
  apple: { free: "trial", src: "https://applegym.jp/faq/" },
};

const D22 = "2026年10月22日";

export const AREA_PICKS: Record<string, Pick[]> = {
  akasaka: [],
  azabu: [
    { brand: "beyond", stores: ["麻布十番店"] },
    { brand: "dr", stores: ["麻布十番店"], storeCheckedOn: D22, entryFee: "入会費0円", priceUrl: "https://drtraining.jp/location/azabu/", trial: { free: "trial", src: "https://drtraining.jp/location/azabu/" } },
  ],
  chiba: [
    { brand: "beyond", stores: ["千葉駅前店"] },
    { brand: "w247", stores: ["千葉店"] },
  ],
  ebisu: [
    { brand: "rizap", stores: ["恵比寿店"] },
    { brand: "beyond", stores: ["恵比寿店"] },
    { brand: "w247", stores: ["恵比寿・目黒店"] },
    { brand: "apple", stores: ["恵比寿東口店"], storeCheckedOn: D22, priceUrl: "https://applegym.jp/shop/ebisu/", priceNote: "個別指導は最大2名までの指導です。" },
  ],
  fukuoka: [
    { brand: "rizap", stores: ["天神店", "博多店", "小倉店"] },
    { brand: "w247", stores: ["福岡薬院・天神店"] },
    { brand: "beyond", stores: ["福岡天神店", "博多店"] },
  ],
  funabashi: [
    { brand: "beyond", stores: ["船橋店"] },
    { brand: "w247", stores: ["船橋店"] },
    { brand: "ec", stores: ["船橋店"], storeCheckedOn: D22 },
  ],
  ginza: [
    { brand: "rizap", stores: ["銀座店"] },
    { brand: "w247", stores: ["新橋・銀座店"] },
    { brand: "beyond", stores: ["銀座店"] },
    { brand: "ec", stores: ["銀座店"], storeCheckedOn: D22 },
  ],
  hiroshima: [
    { brand: "rizap", stores: ["広島店"] },
    { brand: "beyond", stores: ["広島店"] },
    { brand: "w247", stores: ["広島店"] },
    { brand: "ec", stores: ["広島店"], storeCheckedOn: D22 },
  ],
  ikebukuro: [
    { brand: "chicken", stores: ["池袋店"] },
    { brand: "rizap", stores: ["池袋西口店"] },
    { brand: "w247", stores: ["池袋店", "池袋東口店"] },
    { brand: "beyond", stores: ["池袋店"] },
    { brand: "ec", stores: ["池袋東口店", "池袋西口店"], storeCheckedOn: D22 },
    { brand: "woot", stores: ["池袋（旧 Bodyke 池袋店）"], storeCheckedOn: D22 },
  ],
  jiyugaoka: [
    { brand: "beyond", stores: ["自由が丘店"] },
    { brand: "ec", stores: ["自由が丘店"], storeCheckedOn: D22 },
  ],
  kawasaki: [
    { brand: "beyond", stores: ["川崎店"] },
    { brand: "w247", stores: ["川崎店"] },
    { brand: "ec", stores: ["川崎ダイス店"], storeCheckedOn: D22 },
  ],
  kichijoji: [
    { brand: "beyond", stores: ["吉祥寺店"] },
    { brand: "katagiri", stores: ["吉祥寺店"] },
    { brand: "apple", stores: ["吉祥寺店"], storeCheckedOn: D22, priceUrl: "https://applegym.jp/shop/kichijoji/", priceNote: "個別指導は最大2名までの指導です。別途共用設備費330円（税込）がかかります。" },
  ],
  kobe: [
    { brand: "rizap", stores: ["神戸店"] },
    { brand: "w247", stores: ["三宮店"] },
    { brand: "beyond", stores: ["神戸元町店"] },
  ],
  kyoto: [
    { brand: "rizap", stores: ["京都四条店", "京都河原町店"] },
    { brand: "w247", stores: ["京都河原町店"] },
    { brand: "beyond", stores: ["京都四条店"] },
  ],
  machida: [
    { brand: "chicken", stores: ["町田店"] },
    { brand: "rizap", stores: ["町田店"] },
    { brand: "beyond", stores: ["町田店"] },
    { brand: "w247", stores: ["町田店"] },
    { brand: "ec", stores: ["町田店"], storeCheckedOn: D22 },
  ],
  nagoya: [
    { brand: "rizap", stores: ["名駅南店", "名古屋栄店", "金山店"] },
    { brand: "w247", stores: ["名古屋栄店", "名古屋久屋大通店"] },
    { brand: "beyond", stores: ["名古屋栄店", "名古屋駅前店"] },
    { brand: "ec", stores: ["名古屋栄店"], storeCheckedOn: D22 },
    { brand: "mermake", stores: ["名駅店"], storeCheckedOn: D22 },
  ],
  nakameguro: [
    { brand: "katagiri", stores: ["中目黒店"] },
    { brand: "apple", stores: ["中目黒店"], storeCheckedOn: D22, priceUrl: "https://applegym.jp/shop/nakameguro/", priceNote: "個別指導は最大2名までの指導です。別途共用設備費330円（税込）がかかります。" },
  ],
  namba: [
    { brand: "rizap", stores: ["なんば店"] },
    { brand: "w247", stores: ["難波店"] },
    { brand: "ec", stores: ["なんばスカイオ店"], storeCheckedOn: D22 },
  ],
  niigata: [
    { brand: "rizap", stores: ["新潟店"] },
    { brand: "beyond", stores: ["新潟店"] },
    { brand: "w247", stores: ["新潟店"] },
  ],
  okayama: [
    { brand: "chicken", stores: ["岡山店"] },
    { brand: "rizap", stores: ["岡山店"] },
    { brand: "beyond", stores: ["岡山店"] },
    { brand: "w247", stores: ["岡山店"] },
  ],
  omiya: [
    { brand: "rizap", stores: ["大宮西口店"] },
    { brand: "beyond", stores: ["大宮店"] },
    { brand: "w247", stores: ["大宮店"] },
  ],
  osaka: [
    { brand: "rizap", stores: ["梅田店", "なんば店", "京橋店", "天王寺店", "堺東店"] },
    { brand: "w247", stores: ["梅田店", "大阪心斎橋店", "難波店", "堺東店"] },
    { brand: "beyond", stores: ["心斎橋店", "梅田店", "天王寺店"] },
    { brand: "ec", stores: ["リンクス梅田店", "なんばスカイオ店", "天王寺店"], storeCheckedOn: D22 },
    { brand: "reborn", stores: ["梅田店"] },
  ],
  roppongi: [
    { brand: "beyond", stores: ["六本木店"] },
    { brand: "dr", stores: ["六本木店"], storeCheckedOn: D22, entryFee: "入会費35,600円", priceUrl: "https://drtraining.jp/location/roppongi/" },
  ],
  saitama: [
    { brand: "rizap", stores: ["大宮西口店"] },
    { brand: "w247", stores: ["大宮店"] },
    { brand: "beyond", stores: ["大宮店"] },
  ],
  sapporo: [
    { brand: "rizap", stores: ["札幌店"] },
    { brand: "w247", stores: ["札幌店"] },
  ],
  sendai: [
    { brand: "rizap", stores: ["仙台店"] },
    { brand: "w247", stores: ["仙台店"] },
    { brand: "beyond", stores: ["仙台店"] },
  ],
  shibuya: [
    { brand: "w247", stores: ["渋谷・南青山店"] },
    { brand: "beyond", stores: ["渋谷宮益坂店"] },
    { brand: "miyazaki", stores: ["渋谷店"] },
  ],
  shinagawa: [
    { brand: "rizap", stores: ["品川店（品川駅高輪口から徒歩約3分）"], storeCheckedOn: "2026年10月20日" },
    { brand: "ec", stores: ["品川店（品川駅高輪口から徒歩6分）"], storeCheckedOn: D22 },
  ],
  shinjuku: [
    { brand: "rizap", stores: ["新宿店"] },
    { brand: "w247", stores: ["新宿東口店", "新宿西口店"] },
    { brand: "beyond", stores: ["新宿店"] },
    { brand: "ec", stores: ["新宿西口店"], storeCheckedOn: D22 },
    { brand: "aspi", stores: ["新宿三丁目御苑"], storeCheckedOn: D22 },
    { brand: "outline", stores: ["新宿店"], storeCheckedOn: D22 },
  ],
  tachikawa: [
    { brand: "beyond", stores: ["立川店"] },
    { brand: "w247", stores: ["立川店"] },
    { brand: "ec", stores: ["立川店"], storeCheckedOn: D22 },
  ],
  takasaki: [
    { brand: "rizap", stores: ["高崎店"] },
    { brand: "beyond", stores: ["高崎店"] },
    { brand: "w247", stores: ["高崎店"] },
    { brand: "katagiri", stores: ["高崎店"] },
  ],
  tokyo: [
    { brand: "chicken", stores: ["池袋店", "町田店"] },
    { brand: "rizap", stores: ["新宿店", "池袋西口店", "銀座店", "恵比寿店"] },
    { brand: "w247", stores: ["新宿東口店", "新宿西口店", "渋谷・南青山店", "池袋店", "新橋・銀座店"] },
    { brand: "beyond", stores: ["新宿店", "渋谷宮益坂店", "池袋店", "銀座店", "六本木店"] },
    { brand: "ec", stores: ["新宿西口店", "池袋東口店", "池袋西口店", "銀座店"], storeCheckedOn: D22 },
    { brand: "outline", stores: ["新宿店"], storeCheckedOn: D22 },
    { brand: "aspi", stores: ["新宿三丁目御苑", "恵比寿東口", "恵比寿西口", "吉祥寺"], storeCheckedOn: D22 },
    { brand: "miyazaki", stores: ["渋谷店", "新宿店"] },
    { brand: "woot", stores: ["池袋（旧 Bodyke 池袋店）"], storeCheckedOn: D22 },
  ],
  ueno: [
    { brand: "w247", stores: ["上野店"] },
  ],
  umeda: [
    { brand: "rizap", stores: ["梅田店"] },
    { brand: "beyond", stores: ["梅田店"] },
    { brand: "w247", stores: ["梅田店"] },
    { brand: "ec", stores: ["リンクス梅田店"], storeCheckedOn: D22 },
  ],
  yokohama: [
    { brand: "rizap", stores: ["横浜東口店", "関内店"] },
    { brand: "w247", stores: ["横浜店"] },
    { brand: "beyond", stores: ["横浜東口店", "横浜西口店", "横浜元町店"] },
    { brand: "ec", stores: ["横浜店"], storeCheckedOn: D22 },
    { brand: "outline", stores: ["横浜西口新店"], storeCheckedOn: D22 },
  ],
};

/** /db/ に都市別ページがあるエリア（0〜1件ページの導線先） */
const DB_CITY_PAGES = new Set([
  "chiba", "fukuoka", "hiroshima", "ikebukuro", "kawasaki", "kobe", "kyoto", "nagoya", "niigata",
  "okayama", "osaka", "saitama", "sapporo", "sendai", "shibuya", "shinjuku", "yokohama",
]);

export function getAreaDbHref(slug: string): string {
  return DB_CITY_PAGES.has(slug) ? `/db/${slug}/` : "/db/";
}

export function getAreaPicks(slug: string): AreaGym[] {
  const picks = AREA_PICKS[slug] ?? [];
  return picks.map((p) => {
    const b: Brand = BRANDS[p.brand];
    return {
      name: b.name,
      price: p.price ?? b.price,
      priceNote: p.priceNote ?? b.priceNote,
      entryFee: p.entryFee ?? b.entryFee,
      features: b.features,
      access: p.stores.join("／"),
      reviewed: Boolean(getGymMeta(b.name)?.reviewHref),
      sourceUrl: p.priceUrl ?? b.priceUrl,
      storeListUrl: b.storeListUrl,
      checkedNote: `料金: ${PRICE_CHECKED_ON}／店舗: ${p.storeCheckedOn ?? STORE_CHECKED_DEFAULT}に公式サイトで確認`,
      hideHours: true,
    };
  });
}

/** 冒頭の概要用: 掲載ブランドの料金（月4回の月額／コース総額）と店舗 */
export function getAreaSummary(slug: string) {
  const picks = AREA_PICKS[slug] ?? [];
  const rows = picks.map((p) => {
    const b: Brand = BRANDS[p.brand];
    return { brandKey: p.brand as string, name: b.name, stores: p.stores, summary: b.summary ?? null, priceUrl: p.priceUrl ?? b.priceUrl };
  });
  const range = (kind: "monthly4" | "course") => {
    const xs = rows.filter((r) => r.summary?.kind === kind).map((r) => r.summary!.yen);
    return xs.length ? { n: xs.length, min: Math.min(...xs), max: Math.max(...xs) } : null;
  };
  return { rows, monthly4: range("monthly4"), course: range("course") };
}

export function getAreaPickCount(slug: string): number {
  return (AREA_PICKS[slug] ?? []).length;
}

/** title・h1・見出し・導入文・description を件数から生成する */
export function getAreaPickCopy(slug: string, areaName: string) {
  const n = getAreaPickCount(slug);
  if (n >= 2) {
    return {
      count: n,
      title: `【2026最新】パーソナルジム${areaName}おすすめ${n}選`,
      heading: `${areaName}のおすすめパーソナルジム${n}選`,
      linkLabel: `${areaName}のパーソナルジムおすすめ${n}選`,
      intro: `本記事では、各ブランドの公式サイトで${areaName}の店舗と料金を確認できた${n}つのジムをご紹介します。`,
      description: `${areaName}で公式サイトの店舗一覧に店舗を確認できたパーソナルジム${n}件の料金を、公式の表記（税込・税別）と確認日を付けて掲載しています。料金相場と選び方も解説します。`,
    };
  }
  return {
    count: n,
    title: `【2026最新】${areaName}のパーソナルジム｜公式で店舗を確認できたジムと料金相場`,
    heading: `${areaName}で公式に店舗を確認できたパーソナルジム`,
    linkLabel: `${areaName}のパーソナルジム（公式で店舗を確認できたジム）`,
    intro: `主要ブランドの公式店舗一覧を確認した結果、当エリアで店舗を確認できたブランドは${n}件でした（2026年10月時点）。周辺の店舗は店舗データベースもあわせてご覧ください。`,
    description: `${areaName}で公式サイトの店舗一覧に店舗を確認できたパーソナルジムは${n}件です（2026年10月確認）。料金相場と選び方、周辺の店舗データベースへの案内を掲載しています。`,
  };
}

const FREE_ENTRY = /^(全コース)?入会(金|費)(0円|無料|不要)/;

/** 掲載ジムから自動生成するFAQ（件数・ブランド名・料金はデータから出す） */
export function buildAreaPickFaq(slug: string, areaName: string): { q: string; a: string }[] {
  const gyms = getAreaPicks(slug);
  const n = gyms.length;
  if (n === 0) {
    return [
      {
        q: `${areaName}で公式サイトに店舗が掲載されているパーソナルジムはどこですか？`,
        a: `当サイトが2026年10月に主要ブランドの公式店舗一覧を確認した範囲では、${areaName}の店舗は確認できませんでした。周辺の店舗は店舗データベースまたは関連エリアのページをご覧ください。`,
      },
    ];
  }
  const items = [
    {
      q: `${areaName}で公式サイトに店舗が掲載されているパーソナルジムはどこですか？`,
      a: `当サイトが2026年10月に各ブランドの公式店舗一覧で確認した範囲では、${gyms.map((g) => `${g.name}（${g.access}）`).join("、")}の${n}件です。`,
    },
    {
      q: `${areaName}の掲載ジムの料金はいくらですか？`,
      a: `${gyms.map((g) => `${g.name}は${g.price}`).join("、")}です（${PRICE_CHECKED_ON}に各公式サイトで確認）。店舗やキャンペーンにより異なる場合があるため、申し込み前に公式サイトでご確認ください。`,
    },
  ];
  const free = gyms.filter((g) => g.entryFee && FREE_ENTRY.test(g.entryFee));
  if (free.length > 0) {
    items.push({
      q: `${areaName}で入会金がかからないパーソナルジムはありますか？`,
      a: `掲載ジムのうち、公式サイトで入会金が0円・無料・不要と記載されているのは${free.map((g) => g.name).join("、")}です（${PRICE_CHECKED_ON}確認）。`,
    });
  }
  return items;
}

const shortName = (name: string) => name.replace(/（.*?）/g, "");

/** 「体験できますか？」FAQ。掲載ブランドの公式サイトの記載（TRIAL）から件数を出す。掲載0件・確認できたブランドが無い場合は空配列 */
export function buildAreaTrialFaq(slug: string, areaName: string): { q: string; a: string }[] {
  const picks = AREA_PICKS[slug] ?? [];
  const n = picks.length;
  if (n === 0) return [];
  const known = picks
    .map((p) => ({ name: shortName(BRANDS[p.brand].name), t: p.trial ?? TRIAL[p.brand] }))
    .filter((x): x is { name: string; t: Trial } => Boolean(x.t));
  if (known.length === 0) return [];
  const trial = known.filter((x) => x.t.free === "trial").map((x) => x.name);
  const counsel = known.filter((x) => x.t.free === "counseling").map((x) => x.name);
  const q = `${areaName}のパーソナルジムは体験できますか？`;
  const tail = "体験の内容・所要時間・条件は店舗や時期により異なる場合があるため、予約時に公式サイトでご確認ください。";
  if (n === 1) {
    const x = known[0];
    const what = x.t.free === "trial" ? "体験トレーニングを無料で受けられると" : "無料カウンセリングを";
    return [{ q, a: `当サイトが${areaName}で掲載している1社（${x.name}）は、公式サイトで${what}案内しています（${TRIAL_CHECKED_ON}確認）。${tail}` }];
  }
  const head =
    known.length === n
      ? `当サイトが${areaName}で掲載している${n}社は、いずれも公式サイトで無料のカウンセリングまたは体験トレーニングを案内しています（${TRIAL_CHECKED_ON}確認）。`
      : `当サイトが${areaName}で掲載している${n}社のうち、公式サイトで無料のカウンセリングまたは体験トレーニングを確認できたのは${known.length}社です（${TRIAL_CHECKED_ON}確認）。`;
  const parts: string[] = [];
  if (trial.length) parts.push(`体験トレーニングまで無料と記載しているのは${trial.join("・")}の${trial.length}社`);
  if (counsel.length) parts.push(`${counsel.join("・")}の${counsel.length}社は無料カウンセリングの案内です`);
  const body = parts.length === 2 ? `${parts[0]}で、${parts[1]}。` : trial.length ? `${parts[0]}です。` : `${parts[0]}。`;
  return [{ q, a: head + body + tail }];
}
