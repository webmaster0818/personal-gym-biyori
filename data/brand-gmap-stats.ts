// ブランド別 Googleマップ実測統計(自動生成: python3 scripts/gen-brand-gmap-stats.py)
// 出所: data/gym-db/*.json (Google Places APIで取得した実店舗データ。取得日は FETCHED_AT)
// 口コミ本文は保持していない。ここにあるのは評点・件数という検証可能な数値のみ。

export const GMAP_FETCHED_AT = "2026年8月29日〜9月8日";

export type GmapStore = { name: string; rating: number; reviews: number; maps: string };
export type GmapBrandStat = {
  stores: number; rated: number; avg: number; wavg: number; reviews: number;
  min: number; max: number; ge45: number; lt40: number;
  top: GmapStore[]; bottom: GmapStore[];
};

export const GMAP_STATS: Record<string, GmapBrandStat> = {
  "247workout": {
    stores: 30, rated: 29, avg: 4.68, wavg: 4.68, reviews: 1477,
    min: 4.2, max: 5, ge45: 25, lt40: 0,
    top: [{ name: "24/7ワークアウト 稲毛店", rating: 5, reviews: 29, maps: "https://maps.google.com/?cid=3832691908940788893&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "24/7ワークアウト 岐阜駅前店", rating: 5, reviews: 5, maps: "https://maps.google.com/?cid=2565944362610215173&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "24/7ワークアウト 熊本店", rating: 4.9, reviews: 68, maps: "https://maps.google.com/?cid=2378564437940483205&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "24/7ワークアウト 甲府店", rating: 4.2, reviews: 5, maps: "https://maps.google.com/?cid=7544273434293437436&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "24/7ワークアウト 横浜店", rating: 4.3, reviews: 88, maps: "https://maps.google.com/?cid=1803530667618300587&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "beyond": {
    stores: 55, rated: 55, avg: 4.93, wavg: 4.93, reviews: 8922,
    min: 4.8, max: 5, ge45: 55, lt40: 0,
    top: [{ name: "BEYOND 渋谷宮益坂店", rating: 5, reviews: 293, maps: "https://maps.google.com/?cid=8568892783634316118&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "BEYOND広島店", rating: 5, reviews: 272, maps: "https://maps.google.com/?cid=15480333922272850010&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "BEYOND 池袋店", rating: 5, reviews: 241, maps: "https://maps.google.com/?cid=6726699655741174866&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "パーソナルジム BEYOND 甲府国母店", rating: 4.8, reviews: 161, maps: "https://maps.google.com/?cid=9921670773216178459&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "BEYOND札幌ANNEX店", rating: 4.8, reviews: 131, maps: "https://maps.google.com/?cid=4811060708473683130&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "chicken-gym": {
    stores: 1, rated: 1, avg: 4.6, wavg: 4.6, reviews: 191,
    min: 4.6, max: 4.6, ge45: 1, lt40: 0,
    top: [{ name: "チキンジム 池袋店", rating: 4.6, reviews: 191, maps: "https://maps.google.com/?cid=417384944018246020&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "チキンジム 池袋店", rating: 4.6, reviews: 191, maps: "https://maps.google.com/?cid=417384944018246020&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "exercise-coach": {
    stores: 11, rated: 11, avg: 4.79, wavg: 4.77, reviews: 930,
    min: 4.7, max: 4.9, ge45: 11, lt40: 0,
    top: [{ name: "エクササイズコーチ広島店", rating: 4.9, reviews: 100, maps: "https://maps.google.com/?cid=1503875289927189648&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "エクササイズコーチトキハわさだタウン店", rating: 4.9, reviews: 8, maps: "https://maps.google.com/?cid=13266717961556831279&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "エクササイズコーチ横浜店", rating: 4.8, reviews: 101, maps: "https://maps.google.com/?cid=9826988725778549431&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "エクササイズコーチ池袋東口店", rating: 4.7, reviews: 143, maps: "https://maps.google.com/?cid=18288583116688205626&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "エクササイズコーチ新宿西口店", rating: 4.7, reviews: 136, maps: "https://maps.google.com/?cid=8484672139970849318&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "furdi": {
    stores: 9, rated: 9, avg: 4.86, wavg: 4.84, reviews: 906,
    min: 4.7, max: 5, ge45: 9, lt40: 0,
    top: [{ name: "ファディー水戸赤塚", rating: 5, reviews: 43, maps: "https://maps.google.com/?cid=7448076280924771017&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ファディー宇都宮中今泉", rating: 4.9, reviews: 249, maps: "https://maps.google.com/?cid=14144813446829964763&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ファディー バロー甲府昭和", rating: 4.9, reviews: 90, maps: "https://maps.google.com/?cid=17660610780862827061&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "ファディー 山形南", rating: 4.7, reviews: 176, maps: "https://maps.google.com/?cid=4275153859071753948&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ファディー京都北山", rating: 4.8, reviews: 126, maps: "https://maps.google.com/?cid=11831400846869928256&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "habit": {
    stores: 3, rated: 3, avg: 4.97, wavg: 4.94, reviews: 463,
    min: 4.9, max: 5, ge45: 3, lt40: 0,
    top: [{ name: "HABIT PERSONAL GYM(ハビット パーソナル ジム)大阪梅田店", rating: 5, reviews: 94, maps: "https://maps.google.com/?cid=163605583611731008&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "HABIT PERSONAL GYM渋谷松濤店", rating: 5, reviews: 83, maps: "https://maps.google.com/?cid=10450728306081550377&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "HABIT PERSONAL GYM(ハビット パーソナル ジム)恵比寿本店", rating: 4.9, reviews: 286, maps: "https://maps.google.com/?cid=13110809310326174940&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "HABIT PERSONAL GYM(ハビット パーソナル ジム)恵比寿本店", rating: 4.9, reviews: 286, maps: "https://maps.google.com/?cid=13110809310326174940&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "HABIT PERSONAL GYM(ハビット パーソナル ジム)大阪梅田店", rating: 5, reviews: 94, maps: "https://maps.google.com/?cid=163605583611731008&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "nexus": {
    stores: 4, rated: 4, avg: 4.97, wavg: 4.95, reviews: 210,
    min: 4.9, max: 5, ge45: 4, lt40: 0,
    top: [{ name: "NEXUSパーソナルジム福岡平尾店", rating: 5, reviews: 100, maps: "https://maps.google.com/?cid=6302738979643353197&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "NEXUSパーソナルジム大宮店", rating: 5, reviews: 5, maps: "https://maps.google.com/?cid=15047831096858048147&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "NEXUSパーソナルジム鹿島田/新川崎店", rating: 5, reviews: 3, maps: "https://maps.google.com/?cid=12582426469250740514&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "NEXUSパーソナルジム名古屋今池店", rating: 4.9, reviews: 102, maps: "https://maps.google.com/?cid=11453791744525281878&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "NEXUSパーソナルジム福岡平尾店", rating: 5, reviews: 100, maps: "https://maps.google.com/?cid=6302738979643353197&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "rat": {
    stores: 12, rated: 12, avg: 4.88, wavg: 4.87, reviews: 2130,
    min: 4.8, max: 5, ge45: 12, lt40: 0,
    top: [{ name: "Rat札幌店", rating: 5, reviews: 41, maps: "https://maps.google.com/?cid=14673939948331377736&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "パーソナルジムRat名古屋栄店", rating: 4.9, reviews: 240, maps: "https://maps.google.com/?cid=296686212580941376&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "パーソナルジムRat横浜西口店", rating: 4.9, reviews: 232, maps: "https://maps.google.com/?cid=9366228886076395816&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "Rat新宿南口店", rating: 4.8, reviews: 330, maps: "https://maps.google.com/?cid=6217820719716960092&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "パーソナルジムRat大宮店", rating: 4.8, reviews: 153, maps: "https://maps.google.com/?cid=15355481221336131265&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
  "rizap": {
    stores: 31, rated: 31, avg: 4.49, wavg: 4.52, reviews: 1057,
    min: 3.8, max: 5, ge45: 20, lt40: 2,
    top: [{ name: "ライザップ(RIZAP)佐賀店", rating: 5, reviews: 9, maps: "https://maps.google.com/?cid=18060625903828535471&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ライザップ(RIZAP)金沢店", rating: 4.9, reviews: 45, maps: "https://maps.google.com/?cid=3338010261278156061&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ライザップ(RIZAP)新潟店", rating: 4.8, reviews: 31, maps: "https://maps.google.com/?cid=3044253894182452831&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
    bottom: [{ name: "ライザップ(RIZAP)盛岡店", rating: 3.8, reviews: 18, maps: "https://maps.google.com/?cid=8944262199763540850&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }, { name: "ライザップ(RIZAP)松山店", rating: 3.9, reviews: 26, maps: "https://maps.google.com/?cid=1799129258597234914&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA" }],
  },
};
