/**
 * 各ジムのメタデータ（エリアページのジムカードで使用）
 * name(gyms配列のnameフィールド)をキーに検索
 */

type GymMeta = {
  image?: string;
  reviewHref: string;
  affiliateUrl?: string;
  googleMapQuery: string;
  type: string;
  hours: string;
};

export const gymMetadata: Record<string, GymMeta> = {
  チキンジム: {
    image: "/ss-chicken-gym.jpg",
    reviewHref: "/review/chicken-gym/",
    googleMapQuery: "チキンジム",
    type: "初心者向けパーソナルジム",
    hours: "7:00〜23:00",
  },
  "RIZAP（ライザップ）": {
    image: "/ss-rizap.jpg",
    reviewHref: "/review/rizap/",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX",
    googleMapQuery: "RIZAP",
    type: "結果コミット型パーソナルジム",
    hours: "7:00〜23:00",
  },
  "24/7ワークアウト": {
    image: "/ss-247workout.jpg",
    reviewHref: "/review/247workout/",
    googleMapQuery: "24/7ワークアウト",
    type: "完全個室パーソナルジム",
    hours: "7:00〜24:00",
  },
  "BEYOND（ビヨンド）": {
    image: "/ss-beyond.jpg",
    reviewHref: "/review/beyond/",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL",
    googleMapQuery: "BEYOND+パーソナルジム",
    type: "ボディメイク特化パーソナルジム",
    hours: "10:00〜22:00",
  },
  エクササイズコーチ: {
    image: "/ss-exercise-coach.jpg",
    reviewHref: "/review/exercise-coach/",
    googleMapQuery: "エクササイズコーチ",
    type: "AI主導マシントレーニング",
    hours: "10:00〜22:00",
  },
  "OUTLINE（アウトライン）": {
    image: "/ss-outline.jpg",
    reviewHref: "/review/outline/",
    googleMapQuery: "OUTLINE+パーソナルジム",
    type: "女性専用パーソナルジム",
    hours: "8:00〜23:00",
  },
  "UNDEUX SUPERBODY（アンドゥスーパーボディ）": {
    image: "/ss-undeux.jpg",
    reviewHref: "/review/undeux/",
    googleMapQuery: "UNDEUX+SUPERBODY",
    type: "女性専用ボディメイクジム",
    hours: "9:00〜22:00",
  },
  "Dr.トレーニング": {
    image: "/ss-dr-training.jpg",
    reviewHref: "/review/dr-training/",
    googleMapQuery: "Dr.トレーニング",
    type: "医学的根拠に基づくパーソナルジム",
    hours: "9:00〜22:00",
  },
  "MIYAZAKI GYM（ミヤザキジム）": {
    image: "/ss-miyazaki-gym.jpg",
    reviewHref: "/review/miyazaki-gym/",
    googleMapQuery: "ミヤザキジム",
    type: "月額制パーソナルジム",
    hours: "7:00〜23:00",
  },
  "ビーコンセプト": {
    image: "/ss-b-concept.jpg",
    reviewHref: "/review/b-concept/",
    googleMapQuery: "ビーコンセプト",
    type: "女性向け下半身特化パーソナルジム",
    hours: "7:00〜23:00",
  },
  "Apple GYM（アップルジム）": {
    reviewHref: "/review/apple-gym/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L",
    googleMapQuery: "Apple+GYM+アップルジム",
    type: "海外式ボディメイクジム",
    hours: "7:00〜23:00",
  },
  "ASPI（アスピ）": {
    reviewHref: "/review/aspi/",
    googleMapQuery: "ASPI+パーソナルジム",
    type: "有資格トレーナーパーソナルジム",
    hours: "10:00〜22:00",
  },
  かたぎり塾: {
    reviewHref: "/review/katagiri/",
    googleMapQuery: "かたぎり塾",
    type: "理学療法士監修パーソナルジム",
    hours: "10:00〜22:00",
  },
  "Bodyke（ボディーク）": {
    reviewHref: "/review/bodyke/",
    googleMapQuery: "Bodyke+パーソナルジム",
    type: "食べながら痩せるパーソナルジム",
    hours: "10:00〜22:00",
  },
  "CREBIQ（クレビック）": {
    reviewHref: "/review/crebiq/",
    googleMapQuery: "CREBIQ+パーソナルジム",
    type: "女性専用パーソナルジム",
    hours: "10:00〜23:00",
  },
  "Reborn myself（リボーンマイセルフ）": {
    reviewHref: "/review/reborn-myself/",
    googleMapQuery: "リボーンマイセルフ",
    type: "女性専用パーソナルジム",
    hours: "9:00〜22:00",
  },
  リアルワークアウト: {
    reviewHref: "/review/real-workout/",
    googleMapQuery: "リアルワークアウト",
    type: "月額制パーソナルジム",
    hours: "10:00〜22:00",
  },
  "パーソナルジムFURDI（ファディー）": {
    reviewHref: "/review/furdi/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A",
    googleMapQuery: "FURDI+ファディー",
    type: "AI×女性専用サーキット型フィットネス",
    hours: "6:00〜23:00",
  },
  "WHOEVER（フーエバー）": {
    reviewHref: "/review/whoever/",
    googleMapQuery: "WHOEVER+パーソナルジム",
    type: "キックボクシング融合パーソナルジム",
    hours: "9:00〜23:00",
  },
  メルメイク: {
    reviewHref: "/review/melmake/",
    googleMapQuery: "メルメイク+パーソナルジム",
    type: "定額制パーソナルジム",
    hours: "10:00〜22:00",
  },
  "PALMS（パームス）": {
    reviewHref: "/review/palms/",
    googleMapQuery: "PALMS+パーソナルジム",
    type: "カフェ併設パーソナルジム",
    hours: "9:00〜22:00",
  },
  ダイエットラボ: {
    reviewHref: "/review/diet-lab/",
    googleMapQuery: "ダイエットラボ",
    type: "ダイエット特化パーソナルジム",
    hours: "10:00〜22:00",
  },
  "ACHT（アハト）": {
    reviewHref: "/review/acht/",
    googleMapQuery: "ACHT+パーソナルジム",
    type: "完全個室パーソナルジム",
    hours: "10:00〜22:00",
  },
  "MAKE BODY（メイクボディー）": {
    reviewHref: "/review/make-body/",
    googleMapQuery: "MAKE+BODY+パーソナルジム",
    type: "完全個室パーソナルジム",
    hours: "10:00〜22:00",
  },
  "BODY STOIC（ボディストイック）": {
    reviewHref: "/review/body-stoic/",
    googleMapQuery: "BODY+STOIC+パーソナルジム",
    type: "完全個室パーソナルジム",
    hours: "10:00〜22:00",
  },
};

/**
 * ジム名からメタデータを取得
 */
export function getGymMeta(name: string): GymMeta | undefined {
  return gymMetadata[name];
}

/**
 * Google Maps口コミ検索URLを生成
 */
export function getGoogleReviewUrl(query: string, area: string): string {
  return `https://www.google.com/maps/search/${encodeURIComponent(query + " " + area)}/`;
}
