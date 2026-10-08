/*
 * ブランド別の公表料金（2026-10-08 全面改訂）。
 *
 * 改訂の理由:
 *   旧データは61ブランド中37件が「月額30,000円〜100,000円程度」のような
 *   根拠のない概算レンジだった。今回、1ブランドずつ公式サイトを開いて
 *   掲載されている金額を転記し直し、確認できなかったものは
 *   「公式サイトで公表していない」と明記する形に変えた。
 *
 * 守るルール:
 *   - ここに書く数値は officialUrl のページに実際に掲載されている金額だけ。
 *     当サイトの推定・平均・他社メディアの記載は入れない。
 *   - 公式が金額を出していないブランドは kind: "未公表" とし、price に理由を書く。
 *   - 「月々◯◯円〜」が分割払いの月額である場合は note でその旨を明示する
 *     （総額と混同させない）。
 *   - area も公式サイトの記載に合わせる。公式サイトを特定できないブランドは
 *     その旨を書く（旧データは実在しない「東京都内を中心に展開」が多数あった）。
 */

export type FeeKind = "月額制" | "コース制" | "都度払い" | "未公表";

export type BrandPrice = {
  slug: string;
  name: string;
  /** 画面に出す料金（公式サイトの掲載値のみ） */
  price: string;
  kind: FeeKind;
  /** 並べ替え用: そのブランドが公表している最も安い金額（円）。未公表は null */
  lowest: number | null;
  /** 入会金（公式サイトの記載） */
  entry: string;
  /** 料金を確認した公式ページ。特定できなかった場合は null */
  officialUrl: string | null;
  /** 公式サイトに書かれている所在地・展開エリア */
  area: string;
  /** 読み違えやすい点の注記 */
  note?: string;
};

/** 全ブランドの公式サイトを確認した日 */
export const FEE_SURVEYED_AT = "2026年10月8日";

export const BRAND_PRICES: BrandPrice[] = [
  // ---------- 月額制 ----------
  {
    slug: "chocozap", name: "chocoZAP（チョコザップ）",
    price: "月額2,980円（税込3,278円）／24時間通い放題",
    kind: "月額制", lowest: 3278, entry: "公式トップに記載なし",
    officialUrl: "https://chocozap.jp/", area: "全国1,800店舗以上",
  },
  {
    slug: "hakogym", name: "ハコジム",
    price: "月会費3,800円（税込4,180円）／パーソナルは1時間2,980円（税込3,270円）が別途",
    kind: "月額制", lowest: 4180, entry: "6,000円（税込6,600円）",
    officialUrl: "https://hacogym.jp/hiroshimastation", area: "広島・福岡ほか（広島駅前店の掲載値）",
    note: "月会費は個室ジムの利用料。パーソナル指導は都度追加料金。",
  },
  {
    slug: "furdi", name: "FURDI（ファディー）",
    price: "プレミアム会員（年間契約）月6,980円（税込7,678円）／スタンダード会員 月7,980円（税込8,778円）／U-18 月5,428円（税込）",
    kind: "月額制", lowest: 7678, entry: "なし（事務手数料5,500円・カード発行手数料3,300円が別途）",
    officialUrl: "https://furdi.jp/", area: "全国（公式に「一部店舗によって料金が異なります」の注記あり）",
  },
  {
    slug: "fit24", name: "FiT24",
    price: "通常プラン 月6,980円（税込7,678円）〜",
    kind: "月額制", lowest: 7678, entry: "公式トップに記載なし",
    officialUrl: "https://www.fit24.jp/top.html", area: "全国（快活CLUBグループ）",
    note: "公式に「店舗により月会費が異なります」と明記されている。",
  },
  {
    slug: "curves", name: "カーブス",
    price: "月会費7,150円〜8,360円（税込）／1回30分・回数無制限",
    kind: "月額制", lowest: 7150, entry: "16,500円（税込）",
    officialUrl: "https://fitness.curves.co.jp/price/", area: "全国",
  },
  {
    slug: "starlight", name: "スターライトフィットネス",
    price: "月1会員 年間プラン8,800円／縛りなし12,000円、月2会員 12,100円／16,000円、ダイエット・アスリートコース 18,700円／20,700円（すべて月額・税込）",
    kind: "月額制", lowest: 8800, entry: "記載なし",
    officialUrl: "https://starlight-fitness.jp/price/", area: "札幌市東区",
  },
  {
    slug: "bbb", name: "BBB（トリプルビー）",
    price: "月1回5,900円・月2回11,600円・月4回22,800円・月6回33,600円・月8回44,000円",
    kind: "月額制", lowest: 5900, entry: "体験当日の入会で無料",
    officialUrl: "https://bbb-tripleb.com/", area: "恵比寿・六本木赤坂・渋谷神宮前・麻布十番・中目黒池尻大橋（東京）",
  },
  {
    slug: "apple-gym", name: "Apple GYM（アップルジム）",
    price: "個別指導 月4回 税込9,900円・月8回19,800円・月12回29,700円／プレミアム（完全マンツーマン）月4回14,850円・月8回29,700円・月12回44,550円。別途 共用設備費330円",
    kind: "月額制", lowest: 9900, entry: "通常44,000円（税込）／キャンペーン時33,000円",
    officialUrl: "https://applegym.jp/price/", area: "東京ほか（公式に「店舗により料金が異なる場合あり」の注記）",
  },
  {
    slug: "lexer", name: "ReXeR（レクサー）",
    price: "月額コース 月9,900円（税込）＋1回5,060円（税込）〜／回数券 8回64,240円・16回123,200円・24回179,520円・32回228,800円・40回272,800円（税込）",
    kind: "月額制", lowest: 9900, entry: "通常33,000円（税込）／キャンペーンで0円",
    officialUrl: "https://personal.rexer-group.com/", area: "赤坂・五反田（東京）、梅田中津・天六（大阪）、苦楽園・西宮（兵庫）の6店",
  },
  {
    slug: "fis-ladys", name: "fis.lady's",
    price: "月額制（ソロ）月2回16,400円・月4回30,000円・月6回44,400円・月8回57,600円・月10回66,000円／回数券（ソロ）8回65,800円〜32回236,800円（すべて税込）",
    kind: "月額制", lowest: 16400, entry: "通常50,000円／体験当日入会で20,000円（税込）",
    officialUrl: "https://fis-ladys.com/price/", area: "大阪（天満橋・江坂・南森町・高槻ほか）",
  },
  {
    slug: "the-personal-gym", name: "THE PERSONAL GYM",
    price: "月額 月2回17,600円・月4回33,000円・月6回47,850円・月8回61,600円／回数券10回88,000円〜40回286,000円／Bodyメイクコンサル 2ヶ月16回281,600円・3ヶ月24回408,000円・6ヶ月48回720,000円",
    kind: "月額制", lowest: 17600, entry: "キャンペーン期間中は無料",
    officialUrl: "https://the-personal-gym.com/", area: "全国50店舗以上（東京・大阪・名古屋・福岡ほか）",
  },
  {
    slug: "beyond", name: "BEYOND",
    price: "マンスリー 月2回17,600円・月4回35,200円・月8回69,300円／回数券10回102,300円・20回187,000円・30回264,000円／ライフプランニング16回290,400円・24回435,600円（すべて税込）",
    kind: "月額制", lowest: 17600, entry: "全コース0円",
    officialUrl: "https://beyond-gym.com/price/", area: "全国（公式に「北海道の店舗は一部料金形態が異なります」の注記）",
  },
  {
    slug: "undeux-life", name: "UNDEUX SUPERBODY LIFE",
    price: "スタンダードプラン 月2〜8回 月額18,200円〜／コミットプラン 月6回 79,200円（全国一律）",
    kind: "月額制", lowest: 18200, entry: "公式の料金ページに記載なし（初回体験0円）",
    officialUrl: "https://www.diet-undeux.jp/price/", area: "全国40店舗以上",
    note: "2026年10月時点の公式料金ページは SUPERBODY と LIFE を分けておらず、上記の2プランのみ掲載。",
  },
  {
    slug: "undeux", name: "UNDEUX SUPERBODY",
    price: "スタンダードプラン 月2〜8回 月額18,200円〜／コミットプラン 月6回 79,200円（全国一律）",
    kind: "月額制", lowest: 18200, entry: "公式の料金ページに記載なし（初回体験0円）",
    officialUrl: "https://www.diet-undeux.jp/price/", area: "全国40店舗以上",
    note: "UNDEUX SUPERBODY LIFE と同じ料金ページ。公式は現在この2プランのみ掲載している。",
  },
  {
    slug: "lala-fit", name: "LALA FIT",
    price: "MONTHLY2 19,800円・MONTHLY4 35,200円・MONTHLY8 61,600円（月額・税込）／短期集中 2ヶ月198,000円・3ヶ月288,000円（税込）",
    kind: "月額制", lowest: 19800, entry: "30,000円（税込）＋事務手数料5,500円（税込）",
    officialUrl: "https://lalaaasha.jp/fit/", area: "自由が丘・学芸大学（東京）",
  },
  {
    slug: "rays-gym", name: "Rays GyM（レイズジム）",
    price: "月額 月2回19,800円・月4回37,400円・月6回52,800円／回数券10回99,000円・20回187,000円・30回264,000円／食事指導付16回236,500円・24回316,800円（すべて税込・60分）",
    kind: "月額制", lowest: 19800, entry: "5,500円（キャンペーンで0円）",
    officialUrl: "https://www.raysgym.jp/raysgymprice", area: "埼玉県川越市（川越駅徒歩3分）",
  },
  {
    slug: "calorie-trade", name: "CALORIE TRADE JAPAN",
    price: "月額 月2回24,200円・月4回44,000円・月6回66,000円・月8回88,000円／短期集中（食事サポート付）8回143,000円・16回173,800円・24回250,800円・48回415,800円（すべて税込）",
    kind: "月額制", lowest: 24200, entry: "50,000円",
    officialUrl: "https://calorietradejapan.com/plan/", area: "全国（公式に「店舗により料金が異なる場合あり」の注記）",
  },
  {
    slug: "4f-gym", name: "4F",
    price: "QUICK DIET TRIAL4（月4回30分）26,620円・TRIAL8 51,040円／ダイエット・ボディメイク LIGHT16回202,400円・STANDARD24回274,560円・PREMIUM32回348,480円・COMPLETE64回627,200円／継続 MONTHLY4 42,500円・MONTHLY8 79,600円（すべて税込）",
    kind: "月額制", lowest: 26620, entry: "記載なし",
    officialUrl: "https://4fgym.com/plan/", area: "用賀ほか（東京）",
  },
  {
    slug: "peach-gym", name: "PEACH GYM",
    price: "月2回27,500円・月4回55,000円・月8回88,000円／回数券8回105,600円・16回176,000円・40回328,000円／集中コーチング16回（2ヶ月）272,580円・36回（3ヶ月）558,690円（すべて税込）",
    kind: "月額制", lowest: 27500, entry: "通常33,000円（税込）／現在0円",
    officialUrl: "https://peach-gym.com/", area: "秋葉原・神田（東京都千代田区）ほか",
  },
  {
    slug: "chicken-gym", name: "チキンジム",
    price: "月2回18,900円・月4回29,700円・月6回39,600円（1回50分）",
    kind: "月額制", lowest: 18900, entry: "35,000円",
    officialUrl: "https://chicken-gym.jp/price/", area: "全国",
    note: "他サイトで見かける「月々6,800円〜」は分割払いの月額で、公式の月額プランとは別物。",
  },
  {
    slug: "247workout", name: "24/7ワークアウト",
    price: "固定プラン 月4回 税込33,440円・月8回66,880円・月12回100,320円・月16回133,760円／フリープラン 月4回 税込36,784円／一括プランは1回あたり税込10,450円（1回50分）",
    kind: "月額制", lowest: 33440, entry: "記載なし",
    officialUrl: "https://247-sports.jp/workout/", area: "全国",
  },
  {
    slug: "vase", name: "VASE（ベイス）パーソナルジム",
    price: "月額 月4回32,000円・月6回45,000円・月8回56,000円／回数券5回45,000円・10回85,000円・15回120,000円（すべて税込・60分）",
    kind: "月額制", lowest: 32000, entry: "20,000円（税込）／体験当日入会で0円",
    officialUrl: "https://personal-gym-vase.com/", area: "藤沢・八王子・恵比寿",
    note: "月額制は最低契約期間3ヶ月。月額の有効期限は1ヶ月で繰越不可。",
  },
  {
    slug: "katagiri", name: "かたぎり塾",
    price: "月4プラン 〜33,000円・月8プラン 59,400円・無期限チケット1回8,800円／ペア 月4プラン〜49,500円・月8プラン79,200円（すべて税込）",
    kind: "月額制", lowest: 33000, entry: "店舗により異なる",
    officialUrl: "https://katagirijuku.jp/price", area: "全国（店舗ごとの所在地は公式の店舗検索）",
  },
  {
    slug: "triple-m", name: "トリプルM",
    price: "トレーニング集中60分 月3回33,000円・月4回39,600円／トレーニング＋整体120分 月3回61,710円・月4回74,800円／回数券 60分4回57,200円・120分4回88,000円（すべて税込）",
    kind: "月額制", lowest: 33000, entry: "なし",
    officialUrl: "https://www.triple-m.jp/", area: "六本木・表参道（東京都港区）",
  },
  {
    slug: "accept", name: "ACCEPT",
    price: "30分コース 5回38,390円・8回61,600円・12回85,800円・16回110,000円・24回158,400円／60分コース 5回76,780円〜24回316,800円／ビジター30分7,700円・60分15,400円（すべて税込）",
    kind: "月額制", lowest: 38390, entry: "33,000円（税込・キャンペーン時無料）",
    officialUrl: "https://www.accept-gym.jp/", area: "銀座（東京）",
    note: "回数券は無期限。",
  },
  {
    slug: "element", name: "ELEMENT",
    price: "全日通い放題43,780円／平日通い放題38,280円／月8回31,200円／ハイブリッド8回43,100円（すべて月額・税込）＋食事コーチング16,500円／月",
    kind: "月額制", lowest: 31200, entry: "33,000円",
    officialUrl: "https://element-gym.com/", area: "全国（公式に70店舗と記載）",
  },
  {
    slug: "cocodakara", name: "CoCoDakara Body Design",
    price: "月4回（50分）39,600円・月8回77,440円／都度払い50分10,780円（すべて税込）。学生料金 月4回37,400円・月8回71,280円",
    kind: "月額制", lowest: 39600, entry: "19,800円（税込）／当日入会9,900円",
    officialUrl: "https://bodydesign.cocodakara.net/price", area: "東京都港区東麻布（麻布十番駅・赤羽橋駅 徒歩4分）",
  },
  {
    slug: "plume", name: "PLUME",
    price: "月4回41,800円（キャンペーン39,800円）・月8回75,900円（69,800円）／短期集中 ライト16回194,720円・スタンダード24回297,080円・プレミアム32回399,440円",
    kind: "月額制", lowest: 41800, entry: "記載なし",
    officialUrl: "https://plumegym-kawasaki.com/price/", area: "神奈川県川崎市",
  },
  {
    slug: "arisanfit", name: "ARISANFIT",
    price: "週1回（月4回）月額44,000円〜（税込48,400円〜）・週2回（月8回）80,000円〜（税込88,000円〜）",
    kind: "月額制", lowest: 48400, entry: "通常50,000円（税込55,000円）／キャンペーンで0円",
    officialUrl: "https://arisanfit.com/", area: "渋谷・東高円寺・池袋（東京）＋オンライン",
  },

  // ---------- コース制 ----------
  {
    slug: "e9th", name: "E9th PRIVATE GYM",
    price: "健康維持76,000円〜・スタンダード148,500円〜・シェイプ168,500円〜・産後ダイエット208,500円〜・プレミアム248,500円〜（いずれも2ヶ月・税込）／30分習慣化コース 月4回14,000円〜／スポット1回7,700円",
    kind: "コース制", lowest: 76000, entry: "10,000円（税込・コースプランのみ）",
    officialUrl: "https://e9thprivategym.work/price/", area: "長野県長野市",
  },
  {
    slug: "reprecious", name: "リプレシャス",
    price: "クイック（50分8回・1ヶ月）87,120円・ダイエット（16回・2ヶ月）174,240円・ボディメイク（24回・3ヶ月）251,240円（すべて税込）",
    kind: "コース制", lowest: 87120, entry: "22,000円",
    officialUrl: "https://rprecious.com/", area: "埼玉県さいたま市（大宮・氷川参道）",
  },
  {
    slug: "miyazaki-gym", name: "MIYAZAKI GYM",
    price: "スタンダード 8回96,800円（1回12,100円）・16回176,000円・24回211,200円（1回8,800円）・48回369,600円／都度払い1回13,200円／プレミアム1回16,500円（すべて税込）",
    kind: "コース制", lowest: 96800, entry: "33,000円（税込・48回コースは無料）",
    officialUrl: "https://miyazaki-gym.jp/plan/", area: "渋谷・新宿・神楽坂ほか（本社：東京都渋谷区）",
  },
  {
    slug: "racine", name: "RACINE（ラシーヌ）",
    price: "スタンダード 8回148,500円・20回294,250円・32回440,000円（入会金込みの総額表示）／月2回通い放題 初月39,050円",
    kind: "コース制", lowest: 148500, entry: "コースにより0〜38,500円（総額に含まれる）",
    officialUrl: "https://beautywellness-racine.com/price", area: "京都市中京区（四条烏丸）",
  },
  {
    slug: "rat", name: "Rat",
    price: "シェイプアップ8回131,150円・美ボディメイク8回131,150円・短期ダイエット集中8回147,780円（すべて税込・1回50分）",
    kind: "コース制", lowest: 131150, entry: "29,800円（現在無料キャンペーン）",
    officialUrl: "https://ratgym.jp/service/", area: "新宿南口・名古屋栄ほか",
    note: "公式に「一部コースは店舗により料金が異なる場合あり」の注記。",
  },
  {
    slug: "exe", name: "EXE（エグゼ）パーソナルジム",
    price: "60分 単発11,000円・4回44,000円・8回79,200円・16回140,800円・24回198,000円・32回255,200円／40分 4回26,400円・8回48,400円（すべて税込）",
    kind: "コース制", lowest: 26400, entry: "33,000円（税込）",
    officialUrl: "https://pbs-exe.net/", area: "東京都世田谷区（駒沢大学）・藤沢",
  },
  {
    slug: "melmake", name: "メルメイク",
    price: "50分コース（2ヶ月）148,500円・75分コース（16回・2ヶ月）197,560円／都度払い50分9,050円・75分11,800円（すべて税込）",
    kind: "コース制", lowest: 148500, entry: "0円",
    officialUrl: "https://mermake.co.jp/n-meieki/", area: "名古屋（名駅・伏見）・新横浜・福岡西新・豊田",
  },
  {
    slug: "laststyle", name: "Laststyle",
    price: "12回（2ヶ月）158,400円・16回211,200円・20回264,000円（税込）",
    kind: "コース制", lowest: 158400, entry: "通常50,000円（税抜）／キャンペーンで25,000円（税抜）",
    officialUrl: "https://www.last-style.com/lp/", area: "池袋東口・新宿（東京）",
    note: "公式LPは金額を明示せず、店舗ページ側に記載。上記は新宿店・池袋本店の掲載値。",
  },
  {
    slug: "fis-ladys-dummy", name: "", price: "", kind: "未公表", lowest: null, entry: "", officialUrl: null, area: "",
  },
  {
    slug: "1to1", name: "ピラティス&ジム1to1",
    price: "都度払い 40分6,600円・60分9,900円・80分13,200円／ダイエットコース 2ヶ月16回179,685円（すべて税込）",
    kind: "コース制", lowest: 6600, entry: "無料",
    officialUrl: "https://azure-collaboration.co.jp/price/", area: "銀座・横浜ほか",
  },
  {
    slug: "b-concept", name: "ビーコンセプト",
    price: "太ももダイエットプログラム（75分・2ヶ月16回）179,685円・リバウンド防止付プログラム（16回＋アフター6ヶ月・全22回）221,760円／トライアルプラン 月額44,000円（すべて税込）",
    kind: "コース制", lowest: 44000, entry: "太ももダイエットは0円／リバウンド防止付は22,000円",
    officialUrl: "https://b-concept.tokyo/course/", area: "東京・横浜・大阪・名古屋など主要都市",
  },
  {
    slug: "alesco", name: "Alesco",
    price: "ボディメイク（金山・緑区・一宮・四日市）2ヶ月16回176,000円・3ヶ月24回237,800円・4ヶ月32回316,800円／名古屋駅前店 198,000円・264,000円・352,000円（すべて税込・1回50分）",
    kind: "コース制", lowest: 176000, entry: "0円",
    officialUrl: "https://alesco.fit/plice/", area: "名古屋（名駅前・栄・金山・緑区）・一宮・四日市",
  },
  {
    slug: "asmake", name: "ASmake",
    price: "完全パーソナルトレーニング 3ヶ月12回 150,000円（税込）",
    kind: "コース制", lowest: 150000, entry: "0円",
    officialUrl: "https://asmake.jp/menu/", area: "立川・銀座ほか",
  },
  {
    slug: "aspi", name: "ASPI",
    price: "シェイプアップ30（全7回）109,000円・シェイプアップ60（全14回）211,000円・パーフェクト（全21回）310,200円（すべて税込・1回50分）",
    kind: "コース制", lowest: 109000, entry: "通常55,000円（税込）／無料体験当日の入会で無料",
    officialUrl: "https://aspirest.com/course", area: "銀座・渋谷ほか（東京）、横浜・川崎、札幌、船橋、心斎橋",
  },
  {
    slug: "rita-style", name: "RITA STYLE",
    price: "週1回 1ヶ月4回97,680円・2ヶ月8回151,580円・3ヶ月12回205,480円／週2回 2ヶ月16回259,380円・3ヶ月24回345,290円・6ヶ月48回646,800円（いずれも入会金込みの総額・税込）／卒業後 メンテナンス月21,560〜64,680円・平日通い放題29,800円",
    kind: "コース制", lowest: 97680, entry: "43,780円（コースにより0円。上記総額に含む）",
    officialUrl: "https://rita-style.co.jp/price/", area: "福岡・熊本・佐賀・長崎・岡山など",
  },
  {
    slug: "outline", name: "OUTLINE",
    price: "月4回17,000円〜（1回4,250円〜）",
    kind: "コース制", lowest: 17000, entry: "公式申込で無料（キャンペーン）",
    officialUrl: "https://www.outline-gym.com/", area: "東京・神奈川ほか",
    note: "公式に「フランチャイズ店舗は料金・サービスが異なる場合がある」と明記。コース別の総額は公式トップに未掲載。",
  },
  {
    slug: "dr-training", name: "Dr.トレーニング",
    price: "スポットプラン 45分7,700円・60分9,900円・90分14,300円／ライフメイクプラン 月4回29,700〜39,600円・月8回56,800〜76,800円／ワークアウトプラン 16回113,600〜152,000円・24回163,200〜220,800円・32回211,200〜288,000円",
    kind: "コース制", lowest: 7700, entry: "35,600円（キャンペーンで0円）",
    officialUrl: "https://drtraining.jp/price/", area: "東京都内ほか（青山・麻布・六本木・広尾・銀座はプレミアム料金）",
    note: "店舗区分（STANDARD／PREMIUM）で金額が変わるため、公式も幅で表示している。",
  },
  {
    slug: "rizap", name: "RIZAP",
    price: "BASIC 2ヶ月16回 コース料金327,800円（税込）＋入会金55,000円＝総額382,800円／PRIME 月額77,000円＋登録料440,000円＋入会金55,000円",
    kind: "コース制", lowest: 382800, entry: "55,000円（税込）",
    officialUrl: "https://www.rizap.jp/plan", area: "全国",
  },
  {
    slug: "plez", name: "プレズ（Plez）",
    price: "プレミアム 2ヶ月39,900円／月・3ヶ月36,480円／月・6ヶ月29,670円／月、ボディメイク 29,900／26,400／21,480円、ダイエット 19,900／17,900／14,700円",
    kind: "月額制", lowest: 14700, entry: "9,800円（税込10,780円）",
    officialUrl: "https://plez.jp/lp/", area: "オンライン（全国）",
  },
  {
    slug: "exercise-coach", name: "エクササイズコーチ",
    price: "月額16,000円〜35,200円（コース・月間回数・店舗により変動）",
    kind: "月額制", lowest: 16000, entry: "19,800円",
    officialUrl: "https://exercisecoach.co.jp/program/", area: "全国",
    note: "公式は回数別の個別価格を出しておらず、幅での表示にとどまる。",
  },
  {
    slug: "real-body", name: "リアルボディ",
    price: "45分チケット 2回12,000円・3回16,000円・4回20,000円・5回24,000円・6回28,000円・7回32,000円・12回45,000円・16回56,000円（すべて税込／1回あたり3,500円〜）",
    kind: "コース制", lowest: 12000, entry: "料金ページに記載なし",
    officialUrl: "https://personalgym-realbody.com/price/", area: "仙台市泉区（本部）ほか東北",
  },
  {
    slug: "tokiel", name: "TOKIEL",
    price: "フリータイム（9〜23時・30分/日）月59,400円・デイタイム（平日9〜18時）月47,000円／回数券4回29,920円・8回58,960円・12回87,120円・16回114,400円・20回140,800円／SUPREMACY 16回220,000円（すべて税込）",
    kind: "月額制", lowest: 29920, entry: "22,000円（税込・SUPREMACY会員を除く）",
    officialUrl: "https://tokiel.jp/price/", area: "浅草・本所吾妻橋押上（東京）、横浜鶴見、岐阜",
  },

  // ---------- 都度払い ----------
  {
    slug: "studio-kompas", name: "STUDIO KOMPAS",
    price: "1回60分9,000円（税込）の都度払いのみ。初回体験は2回に分けて各4,500円（税込）",
    kind: "都度払い", lowest: 9000, entry: "なし（月会費もなし）",
    officialUrl: "https://kompas.tokyo/sessionfee/", area: "東京都渋谷区南平台町",
  },

  // ---------- 公式サイトで料金を公表していない／特定できないブランド ----------
  {
    slug: "bellpha", name: "Bellpha",
    price: "公式サイトは「カウンセリングの結果・内容で値段が変わる」としてコース料金を公表していない（入会金30,000円・体験10,000円のみ記載）",
    kind: "未公表", lowest: null, entry: "30,000円",
    officialUrl: "https://www.bellpha.com/price/", area: "東京都新宿区",
  },
  {
    slug: "lino-u", name: "Lino U",
    price: "公式サイトは「1回9,000円〜」とだけ記載し、コース別の金額を公表していない",
    kind: "未公表", lowest: null, entry: "通常33,000円／キャンペーンで0円",
    officialUrl: "https://linou.jp/", area: "大阪府吹田市（江坂駅 徒歩3分）",
  },
  {
    slug: "more-fit", name: "more fit",
    price: "公式サイトに通常料金の記載がなく、キャンペーン（入会金35,000円→0円、体験5,000円→0円）のみ掲載",
    kind: "未公表", lowest: null, entry: "35,000円（キャンペーンで0円）",
    officialUrl: "https://morefit.jp/", area: "東京都練馬区（練馬駅 徒歩2分）",
  },
  {
    slug: "nexus", name: "Nexusジム",
    price: "公式サイトは「1回4,500円〜／月8,000円〜」とだけ記載し、プラン別の価格表を公表していない",
    kind: "未公表", lowest: null, entry: "記載なし",
    officialUrl: "https://www.nexus-gym.com/", area: "東京・横浜・埼玉・大阪・名古屋・福岡",
  },
  {
    slug: "carat", name: "Carat",
    price: "公式サイトはコースの内容のみ掲載し、金額を公表していない（問い合わせが必要）",
    kind: "未公表", lowest: null, entry: "通常50,000円／体験当日入会で無料",
    officialUrl: "https://personalgymcarat.com/price/", area: "茨城県つくば市",
  },
  {
    slug: "belion", name: "BELION",
    price: "公式ドメイン（belion.jp）のトップがドメイン売却ページを返す状態で、公式の料金表を確認できなかった",
    kind: "未公表", lowest: null, entry: "確認できず",
    officialUrl: null, area: "愛知県名古屋市（丸の内・覚王山・栄）",
  },
  {
    slug: "leading", name: "LEADING",
    price: "公式サイトを特定できず。予約サイト掲載値では大泉学園本店 60分 月4回18,480円〜月8回59,840円、石神井公園店 60分 月4回32,000円・月8回59,000円と、店舗ごとに料金が異なる",
    kind: "未公表", lowest: null, entry: "5,000〜11,000円（店舗による）",
    officialUrl: null, area: "東京都練馬区（大泉学園・石神井公園）",
  },
  {
    slug: "nine", name: "NINE",
    price: "同名の別経営ジムが複数あり（横浜元町・浜松・大阪ほか）、どれを指すか特定できないため金額を掲載しない",
    kind: "未公表", lowest: null, entry: "確認できず",
    officialUrl: null, area: "特定できず",
  },
  {
    slug: "base-body", name: "base BODY",
    price: "公式サイトを特定できず（BodyBase・Motomachi Base Body など別経営の類似名が複数）、金額を掲載しない",
    kind: "未公表", lowest: null, entry: "確認できず",
    officialUrl: null, area: "特定できず",
  },
].filter((b) => b.slug !== "fis-ladys-dummy") as BrandPrice[];

/** 公式サイトで料金を公表しているブランドだけ、支払い方式ごとに安い順で返す */
export function brandsByKind(kind: FeeKind): BrandPrice[] {
  return BRAND_PRICES.filter((b) => b.kind === kind).sort(
    (a, b) => (a.lowest ?? Infinity) - (b.lowest ?? Infinity)
  );
}

/** カード・店舗ページ・構造化データ用の短い表記。公式が出していない場合はその旨を返す。 */
export function priceSummary(b: BrandPrice): string {
  if (b.kind === "未公表" || b.lowest === null) return "公式サイトで料金を公表していません";
  const yen = b.lowest.toLocaleString() + "円〜";
  if (b.kind === "月額制") return "月額" + yen;
  if (b.kind === "都度払い") return "1回" + yen;
  return "コース総額" + yen;
}
