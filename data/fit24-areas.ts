// FIT24 公式の店舗データ（www.fit24.jp/shop/data/shop.js と各店舗ページ）を 2026-10-26 に確認した値。
// 月会費は店舗ページの表示（税抜）。税込は当サイトが×1.1で計算。営業時間が空欄の店舗は、店舗ページに営業時間の欄がないもの。
export const FIT24_AREA_CHECKED = "2026年10月26日";

export type Fit24Store = { name: string; zip: string; address: string; access: string; hours: string; tel: string; monthly: string; monthlyInc: string; url: string };
export type Fit24Area = { label: string; city: string; stores: Fit24Store[] };

export const FIT24_AREAS: Record<string, Fit24Area> = {
  machida: {
    label: "町田エリア",
    city: "東京都町田市",
    stores: [
      {"name": "町田忠生店", "zip": "194-0035", "address": "東京都町田市忠生1丁目14-1", "access": "＜お車でお越しの場合＞ 町田街道沿い「サンドラッグ」さん目の前。 ＜交通機関でお越しの場合＞ 忠生公園前バス停から徒歩3分 古淵駅から徒歩33分 淵野辺駅から徒歩41分", "hours": "24時間営業、年中無休", "tel": "042-794-6232", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/machidatadao.html"},
    ],
  },
  funabashi: {
    label: "船橋エリア",
    city: "千葉県船橋市",
    stores: [
      {"name": "船橋習志野店", "zip": "274-0071", "address": "千葉県船橋市習志野4丁目6-3", "access": "県道57号線（千葉鎌ケ谷松戸線）沿い、東習志野ショッピングセンター（マルエツさん、ヤマダデンキさんなど）斜め向かい、すし銚子丸 雅さん並び", "hours": "24時間営業、年中無休", "tel": "047-470-9188", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/funabashinarashino.html"},
    ],
  },
  sapporo: {
    label: "札幌エリア",
    city: "北海道札幌市",
    stores: [
      {"name": "札幌西岡店", "zip": "062-0033", "address": "北海道札幌市豊平区西岡3条4丁目2-10", "access": "札幌市営地下鉄東豊線福住駅から徒歩20分 お車でお越しの場合…水源池通り沿い、「サンドラッグ」さん隣。 「イオン札幌西岡店」さん近くです。", "hours": "24時間営業、年中無休", "tel": "011-858-6988", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sapporonishioka.html"},
      {"name": "札幌狸小路2丁目店", "zip": "060-0062", "address": "北海道札幌市中央区南2条2丁目2", "access": "札幌市電山鼻線「狸小路駅」より徒歩4分 札幌市営地下鉄南北線・札幌市電山鼻線「すすきの駅」より徒歩6分 (ビル内、エスカレーター側の入口からは当店にお越しいただくことが出来ません。 エレベーター側の入口からのご来店の程お願い申しあげます) お車でお越しの方…狸小路2丁目にございます。西2丁目通”南2西1”、”南2西2”交差点近くです。", "hours": "24時間営業、年中無休", "tel": "011-208-7888", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sapporotanukikojinichome.html"},
      {"name": "札幌北42条店", "zip": "007-0842", "address": "北海道札幌市東区北42条東3丁目1-1", "access": "道道431号線（丘珠空港通）沿い、北42東2・北41東3・北41東2・北42東3交差点そば。", "hours": "24時間営業、年中無休", "tel": "011-748-6588", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sapporokita42.html"},
      {"name": "札幌環状通東店", "zip": "065-0042", "address": "北海道札幌市東区本町2条2丁目3-15", "access": "地下鉄東豊線 環状通東駅より徒歩12分 お車でお越しの場合…環状通り沿い、「二木ゴルフ」さん隣。 「ホーマック」さん近くです。", "hours": "24時間営業、年中無休", "tel": "011-780-8388", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sapporohigashikuhoncho.html"},
      {"name": "厚別東店", "zip": "004-0004", "address": "北海道札幌市厚別区厚別東4条3丁目3-12", "access": "国道１２号線沿い、ガスト札幌厚別店並び。", "hours": "24時間営業、年中無休", "tel": "011-809-5788", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/atsubetsuhigashi.html"},
    ],
  },
  sendai: {
    label: "仙台エリア",
    city: "宮城県仙台市",
    stores: [
      {"name": "仙台国見ケ丘店", "zip": "989-3201", "address": "宮城県仙台市青葉区国見ケ丘1丁目3-4", "access": "県道37号線（仙台北環状線）沿い、国見ケ丘1丁目交差点そば。 「サイゼリヤ」さん同敷地内。", "hours": "24時間営業、年中無休", "tel": "022-303-1388", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sendaikunimigaoka.html"},
      {"name": "仙台鈎取店", "zip": "982-0804", "address": "宮城県仙台市太白区鈎取字谷地田77", "access": "国道286号沿い、山田交差点すぐ はるやまさん隣に併設", "hours": "", "tel": "0223937731", "monthly": "6,980", "monthlyInc": "7,678", "url": "https://www.fit24.jp/shop/sendaikagitori.html"},
      {"name": "BiVi仙台駅東口店", "zip": "983-0852", "address": "宮城県仙台市宮城野区榴岡2丁目1-25BiVi仙台駅東口3F", "access": "【電車でお越しの場合】 JR仙台駅 東口から徒歩2分 【お車でお越しの場合】 BiVi仙台駅東口の専用駐車場（有料）をご利用ください", "hours": "", "tel": "022-354-1446", "monthly": "7,480", "monthlyInc": "8,228", "url": "https://www.fit24.jp/shop/sendaiekihigashiguchi.html"},
    ],
  },
};
