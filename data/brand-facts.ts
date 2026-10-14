/*
 * ブランド別「公式サイトで確認できる事実」（2026-10-14 作成）。components/BrandFactCheck.tsx で表示。
 * ルール:
 *   - value は src の公式ページに書かれている内容だけ。確認できなかった項目は「公式に記載なし」と書く。
 *   - 公式ページ内で表記が食い違うものは、両方の表記をそのまま書く（どちらかに丸めない）。
 *   - 口コミ本文の引用・創作、自作の星や点数は入れない。
 */
export const FACTS_CHECKED_AT = "2026年10月14日";

export type BrandFact = { label: string; value: string; src?: string };
export type BrandFacts = { name: string; facts: BrandFact[]; qa: { q: string; a: string }[]; caution?: string };

export const BRAND_FACTS: Record<string, BrandFacts> = {
  beyond: {
    name: "BEYOND（ビヨンド）",
    facts: [
      { label: "運営会社", value: "株式会社ワールドフィット（2017年設立・東京都渋谷区）", src: "https://beyond-gym.com/company/" },
      { label: "入会金", value: "全コース無料", src: "https://beyond-gym.com/price/" },
      { label: "料金（税込）", value: "マンスリー 月2回17,600円・月4回35,200円・月8回69,300円／回数券10回102,300円・20回187,000円・30回264,000円／ライフプランニング16回290,400円・24回435,600円", src: "https://beyond-gym.com/price/" },
      { label: "返金保証", value: "料金ページ・よくある質問に返金保証の記載なし", src: "https://beyond-gym.com/price/" },
      { label: "体験", value: "体験トレーニング 通常11,000円 → 初回無料（カウンセリング・体組成診断つき）", src: "https://beyond-gym.com/price/" },
      { label: "店舗数", value: "公式トップに「全国150店舗以上」「全国180店舗以上展開」の2通りの表記", src: "https://beyond-gym.com/" },
      { label: "分割払い", value: "最大26回のカード分割（月々の目安は同じページ内に4,300円〜・4,700円〜の2通りの表記）", src: "https://beyond-gym.com/help/" },
    ],
    qa: [
      { q: "勧誘はある？", a: "公式のよくある質問には「（勧誘は）一切行いません」と書かれています。一方、口コミサイトには上位プランを勧められたという投稿も見られるため、カウンセリングでは希望の回数・予算を先に伝えるのが確実です。" },
      { q: "BEYONDで痩せないと言われるのはなぜ？", a: "BEYONDはボディメイク（筋量を保ちながら体を絞る）が中心で、体重の数字だけを急いで落とす設計ではありません。通う回数と食事の実行度で結果が変わるため、カウンセリングで目標（体重か見た目か）を伝えてコースを選んでください。" },
      { q: "合わなかったら返金される？", a: "公式の料金ページに返金保証の記載はありません。返金保証を重視する場合は、30日間全額返金保証を公表しているRIZAPなどと比較してください。" },
    ],
  },
  rizap: {
    name: "RIZAP（ライザップ）",
    facts: [
      { label: "入会金", value: "55,000円（税込）BASIC・PRIME共通", src: "https://www.rizap.jp/plan" },
      { label: "BASIC（税込）", value: "1回50分・2ヶ月16回327,800円＋入会金＝総額382,800円。以後1ヶ月ごとに163,900円", src: "https://www.rizap.jp/plan" },
      { label: "PRIME（税込）", value: "登録料440,000円が別途。2ヶ月16回154,000円で登録料・入会金込みの総額649,000円", src: "https://www.rizap.jp/plan" },
      { label: "返金保証", value: "コース初回利用日から30日間、理由を問わずコース料金を返金。来店・書面で手続き（電話・メール不可）、利用後の再入会不可、物品は対象外", src: "https://www.rizap.jp/guide/payment" },
      { label: "支払い", value: "一括は銀行振込・Jデビット。分割は最大60回（実質年率19.8%）", src: "https://www.rizap.jp/guide/payment" },
      { label: "無料カウンセリング", value: "あり。公式に「カウンセリングのみでも問題ございません」「無理な勧誘は一切ございません」", src: "https://www.rizap.jp/" },
    ],
    qa: [
      { q: "RIZAPは高い？総額はいくら？", a: "BASIC 2ヶ月16回で入会金込み382,800円（税込）です。1回あたり約23,900円で、BEYONDのライフプランニング16回290,400円（入会金0円）より約9万円高くなります。" },
      { q: "返金保証は本当に使える？", a: "公式の条件は「初回利用日から30日以内・理由を問わない・来店して書面で手続き」です。入会金が対象かは公式ページに明記がないため、契約前に確認してください。" },
    ],
  },
  furdi: {
    name: "FURDI（ファディー）",
    facts: [
      { label: "正式名称", value: "女性専用パーソナルジム FURDI（ファディー）", src: "https://furdi.jp/" },
      { label: "運営会社", value: "株式会社FURDI（東京都千代田区）", src: "https://furdi.jp/company" },
      { label: "入会金", value: "なし。事務手数料5,500円（カード発行手数料3,300円の記載はトップページのみ）", src: "https://furdi.jp/about" },
      { label: "月会費（税込）", value: "プレミアム（年間契約）7,678円・スタンダード（月契約）8,778円・U-18 5,428円（親権者が同じ店舗の会員の場合のみ）", src: "https://furdi.jp/about" },
      { label: "解約", value: "希望月の前月末までに店舗で手続き。プレミアム会員が1年以内に退会すると、スタンダードとの差額を契約解除料として支払う", src: "https://furdi.jp/faq" },
      { label: "返金保証", value: "公式に記載なし", src: "https://furdi.jp/faq" },
      { label: "無料体験", value: "0円・約60分（カウンセリング・体組成測定・AIマシン体験）", src: "https://furdi.jp/about" },
    ],
    qa: [
      { q: "FURDIはパーソナルトレーニング？", a: "AIマシンによるサーキット型で、トレーナーがつきっきりで指導するマンツーマン型ではありません。月額7,678円〜で通い放題の代わりに、指導の密度はマンツーマンのジムより低くなります。" },
      { q: "やめるときに違約金はかかる？", a: "年間契約のプレミアム会員が1年以内に退会すると、スタンダード会員との差額（月1,100円×利用月数）を契約解除料として支払う、と公式FAQにあります。1年続くか不安ならスタンダード（月契約）が無難です。" },
    ],
  },
  habit: {
    name: "HABIT PERSONAL GYM（ハビット）",
    facts: [
      { label: "運営会社", value: "株式会社Natural（東京都渋谷区恵比寿）", src: "https://habit-training.com/company" },
      { label: "入会金", value: "通常30,000円 → キャンペーンで0円（体験当日入会の方に限る）", src: "https://habit-training.com/price" },
      { label: "料金（税込）", value: "集中ダイエットコース（1回50分）10回99,800円・16回142,400円・32回278,400円／回数券4回39,300円／月額 週1回29,780円〜", src: "https://habit-training.com/price" },
      { label: "全額返金制度", value: "ダイエットコースが対象。適用条件は入会時に説明（公式ページに条件の詳細なし）", src: "https://habit-training.com/price" },
      { label: "会員規約の返金条項", value: "「理由の如何にかかわらず入会金及び2ヶ月分の月会費は返金いたしません」", src: "https://habit-training.com/kiyaku" },
      { label: "店舗数", value: "全18店舗（東京17・大阪1）。全店舗相互利用可", src: "https://habit-training.com/" },
      { label: "営業時間", value: "平日・土曜7:00〜23:00、日曜・祝日7:00〜20:00", src: "https://habit-training.com/faq" },
      { label: "支払い", value: "2026年4月から完全キャッシュレス。カード分割は最大24回（月額コースを除く）", src: "https://habit-training.com/faq" },
    ],
    qa: [
      { q: "HABITの料金はどれくらい安い？", a: "集中ダイエットコース16回が142,400円（1回8,900円・税込）で、RIZAPのBASIC 16回（入会金込み382,800円）の半額以下です。" },
      { q: "体験は無料？", a: "公式料金ページは「体験0円（体験当日入会の方限定）」の表記です。当日に入会しない場合の体験料は公式ページで確認できなかったため、予約時に確認してください。" },
    ],
  },
  exe: {
    name: "EXE（エグゼ）パーソナルジム",
    facts: [
      { label: "正式名称", value: "ダイエット・パーソナルトレーニングジム EXE", src: "https://pbs-exe.net/" },
      { label: "運営会社", value: "株式会社EXE", src: "https://pbs-exe.net/" },
      { label: "店舗", value: "駒沢大学店（世田谷区駒沢2-25-10 ソフィー駒沢B1F）・都立大学店（目黒区平町1-26-18）", src: "https://pbs-exe.net/" },
      { label: "入会金", value: "通常33,000円 → キャンペーン中0円", src: "https://pbs-exe.net/" },
      { label: "料金", value: "60分 単発11,000円・4回44,000円・8回79,200円・16回140,800円・24回198,000円・32回255,200円／40分 4回26,400円・8回48,400円", src: "https://pbs-exe.net/" },
      { label: "返金保証", value: "全額返金保証あり（規約あり。お客様都合・自然災害は対象外）。ほかにセッション保証・期間延長保証の記載", src: "https://pbs-exe.net/" },
      { label: "体験・相談", value: "無料カウンセリング（来店・Zoom・LINE）。体験トレーニング 通常11,000円 → 無料（先着枠の表記あり）", src: "https://pbs-exe.net/" },
    ],
    qa: [
      { q: "口コミで多い不満は？", a: "パーソナルジム検索サイトGetfitの駒沢大学店の口コミ（13件・2026年10月確認）では、良い点に完全個室・清潔さ・トレーナーが親身、気になる点に「駅から遠い」「平日夜は予約が埋まりやすい」が挙がっています。" },
    ],
    caution: "「EXEED（越谷）」「教育空間エグゼ（学習塾）」など名前の似た別事業があります。当ページは駒沢大学・都立大学のEXEについての記事です。",
  },
  vase: {
    name: "VASE（ベイス）パーソナルジム",
    facts: [
      { label: "運営会社", value: "株式会社VASE FITNESS（横浜市西区みなとみらい）", src: "https://personal-gym-vase.com/company/" },
      { label: "店舗", value: "藤沢店・八王子店・亀戸店（公式トップ記載）、恵比寿店（公式に店舗ページあり）", src: "https://personal-gym-vase.com/" },
      { label: "入会金", value: "20,000円 → 体験当日入会で0円", src: "https://personal-gym-vase.com/" },
      { label: "月額制", value: "月4回32,000円・月6回45,000円・月8回56,000円（有効期限1ヶ月・繰越不可・最低契約3ヶ月）", src: "https://personal-gym-vase.com/" },
      { label: "回数券", value: "5回45,000円・10回85,000円・15回120,000円（有効期限6ヶ月）", src: "https://personal-gym-vase.com/" },
      { label: "体験", value: "体験トレーニング・カウンセリング無料", src: "https://personal-gym-vase.com/" },
      { label: "返金保証", value: "公式トップに記載なし", src: "https://personal-gym-vase.com/" },
    ],
    qa: [
      { q: "月額制の注意点は？", a: "月額制は最低契約期間3ヶ月で、その月の回数は翌月に繰り越せません（公式記載）。予定が読めない人は有効期限6ヶ月の回数券のほうが無駄が出にくいです。" },
    ],
    caution: "米国の「VASA Fitness」やレンタルジムの「VASE」とは別です。第三者サイトに載っている恵比寿店の料金（月8回40,000円など）は公式の現行料金と一致しません。",
  },
  cocodakara: {
    name: "CoCoDakara Body Design（ココダカラ）",
    facts: [
      { label: "店舗", value: "麻布十番店のみ（港区東麻布2-22-5 ベルス麻布3階・麻布十番駅／赤羽橋駅 徒歩4分）", src: "https://bodydesign.cocodakara.net/" },
      { label: "入会金", value: "19,800円（税込）→ 体験当日入会で9,900円", src: "https://bodydesign.cocodakara.net/price" },
      { label: "体験", value: "4,620円（税込・約75分・カウンセリング込み）→ 当日入会で0円", src: "https://bodydesign.cocodakara.net/price" },
      { label: "料金（50分・税込）", value: "都度払い10,780円／月4回39,600円・月8回77,440円／学生 月4回37,400円・月8回71,280円", src: "https://bodydesign.cocodakara.net/price" },
      { label: "その他の料金", value: "食事指導（2週間）15,400円、出張費 2km以内2,200円・3km以内2,750円、営業時間外は10%割増", src: "https://bodydesign.cocodakara.net/price" },
      { label: "キャンセル", value: "2時間前まで無料。以降は都度払い50%・月額制は1回消化", src: "https://bodydesign.cocodakara.net/faq" },
      { label: "支払い", value: "クレジットカード・電子マネーのみ（現金不可）", src: "https://bodydesign.cocodakara.net/faq" },
      { label: "返金保証", value: "料金ページ・よくある質問に記載なし", src: "https://bodydesign.cocodakara.net/faq" },
    ],
    qa: [
      { q: "食事指導は料金に含まれる？", a: "公式料金ページでは食事指導は2週間15,400円（税込）の別料金です。トレーニングと食事の両方を頼む場合は合計で考えてください。" },
    ],
    caution: "「Body Design GYM（湘南台）」「BODY DESIGN（川崎）」「ココカラ」など名前の似た別事業があります。検索で出る「30分6,900円」などの料金は現行の公式料金と一致しません。",
  },
  laststyle: {
    name: "Lastyle（ラスタイル）",
    facts: [
      { label: "正式名称", value: "パーソナルジムラスタイル（表記はLastyle。「ラストスタイル」ではありません）", src: "https://www.last-style.com/" },
      { label: "運営会社", value: "株式会社ラスタイル（東京都豊島区東池袋）", src: "https://www.last-style.com/company/" },
      { label: "店舗", value: "池袋東口本店（豊島区東池袋1-23-13 第一岡村ビル）", src: "https://www.last-style.com/ikebukuro/" },
      { label: "入会金", value: "通常50,000円（税抜）→ キャンペーンで25,000円（税抜）", src: "https://www.last-style.com/" },
      { label: "コース", value: "8回・16回コースあり。最低購入額133,100円（コース料金表は画像掲載）", src: "https://www.last-style.com/" },
      { label: "返金保証", value: "全コース全額返金。セッション開始から30日以内に来店・書面で手続き。2%以上減量した場合、当日キャンセル・遅刻2回以上、食事報告などを守らなかった場合は対象外", src: "https://www.last-style.com/" },
      { label: "キャッシュバック", value: "2ヶ月で1kg減るごとに8回コース5,000円（上限5万円）・16回コース10,000円（上限10万円）", src: "https://www.last-style.com/" },
      { label: "体験", value: "無料カウンセリング（60分）。体験トレーニング60分 通常8,800円（税込）→ 0円", src: "https://www.last-style.com/" },
    ],
    qa: [
      { q: "返金保証はどんな人が使えない？", a: "公式の条件では、2%以上減量した場合、当日キャンセル・遅刻が2回以上ある場合、食事報告など約束を守らなかった場合は対象外です。「痩せなかったら返金」ではなく、ルールを守ったうえで合わなかった人向けの制度です。" },
      { q: "口コミで多い不満は？", a: "パーソナルジム検索サイトGetfitの池袋東口本店の口コミ（21件・2026年10月確認）では、良い点にトレーナーの人柄・清潔さ・ボクシングを組み合わせた90分、気になる点に「価格が高い」「人気の時間帯は予約が取りにくい」「トイレが室外」が挙がっています。" },
    ],
    caution: "町田駅前のボクシングエクササイズジムなど、名前やジャンルの似た別事業者があります。",
  },
  nexus: {
    name: "Nexusジム（NEXUS）",
    facts: [
      { label: "運営会社", value: "株式会社N-group（横浜市中区）", src: "https://nexus-gym.com/company.html" },
      { label: "料金（公式トップ）", value: "「4,500円/回〜」「月額8,000円〜」の記載のみ", src: "https://nexus-gym.com/" },
      { label: "料金（特商法表記）", value: "入会金15,000円（税込）・60分月4回コース29,800円（税込）", src: "https://nexus-gym.com/legal-notice.html" },
      { label: "中途解約", value: "特商法表記に返金例「月4回コースで2回消化済みなら14,900円返金」", src: "https://nexus-gym.com/legal-notice.html" },
      { label: "体験", value: "無料体験あり", src: "https://nexus-gym.com/" },
      { label: "エリア", value: "東京・横浜・埼玉・大阪・名古屋・福岡（店舗数の記載なし）", src: "https://nexus-gym.com/" },
    ],
    qa: [
      { q: "入会金はいくら？他サイトと違うのはなぜ？", a: "公式の特定商取引法の表記は15,000円（税込）です。第三者サイトには33,000円・55,000円などの記載がありますが、公式の現行表記と一致しません。契約前にカウンセリングで総額を確認してください。" },
    ],
    caution: "「Nexus 口コミ」で検索すると、学習塾「個別指導NEXUS」や浦和の「NEX-US FITNESS」など別事業者の口コミが混ざります。当ページは株式会社N-groupのNexusジムについての記事です。",
  },
  "calorie-trade": {
    name: "CALORIE TRADE JAPAN（カロリートレードジャパン）",
    facts: [
      { label: "運営会社", value: "株式会社EVANESS（愛知県一宮市・2019年設立）", src: "https://calorietradejapan.com/company/" },
      { label: "入会金", value: "50,000円", src: "https://calorietradejapan.com/plan/" },
      { label: "料金（税込）", value: "短期集中（食事サポート付き）2ヶ月16回149,800円・3ヶ月24回198,800円／月プラン 月4回29,800円・月8回54,800円（店舗により異なる場合あり）", src: "https://calorietradejapan.com/plan/" },
      { label: "店舗", value: "店舗一覧は名古屋瑞穂区・一宮本町・名古屋緑区・松戸八柱・宜野湾の5店舗（トップページは「全国に10店舗」と表記）", src: "https://calorietradejapan.com/store/" },
      { label: "体験", value: "無料カウンセリング60分（体験込みは＋30分）。体験 通常5,000円 → 現在無料", src: "https://calorietradejapan.com/faq/" },
      { label: "返金保証", value: "公式の料金・FAQ・店舗ページに記載なし", src: "https://calorietradejapan.com/faq/" },
    ],
    qa: [
      { q: "勧誘はある？", a: "公式FAQに「無理な勧誘はありません」と明記されています。" },
      { q: "返金保証はある？", a: "第三者サイトには返金保証の記載がありますが、2026年10月14日時点の公式ページには記載がありません。必要なら契約前に書面で確認してください。" },
    ],
    caution: "第三者サイトには栄・金山など閉店済みとみられる店舗や、旧料金（月2回24,200円など）が残っています。",
  },
  "rita-style": {
    name: "RITA STYLE（リタスタイル）",
    facts: [
      { label: "運営会社", value: "株式会社利他フーズ ヘルスケア事業部（熊本市）", src: "https://rita-style.co.jp/commercial-law/" },
      { label: "入会金", value: "43,780円（税込）。週2回・3ヶ月は21,890円、週2回・6ヶ月と週3回の全コースは0円", src: "https://rita-style.co.jp/price/" },
      { label: "総額（入会金込み・税込）", value: "週1回 1ヶ月4回97,680円・2ヶ月8回151,580円・3ヶ月12回205,480円／週2回 2ヶ月16回259,380円・3ヶ月24回345,290円／週3回 2ヶ月24回323,400円", src: "https://rita-style.co.jp/price/" },
      { label: "全額返金制度", value: "2・3・6ヶ月の月8回以上コースで、目的を「減量のみ」と申告し、開始1ヶ月で基準体重から一度も1kgを超えて減らなかった場合（入会金除く・来店書面申請）", src: "https://rita-style.co.jp/price/refund/" },
      { label: "中途退会", value: "違約金は未実施分の10%と2万円の低い方", src: "https://rita-style.co.jp/commercial-law/" },
      { label: "体験", value: "無料・90分（カウンセリング込み）", src: "https://rita-style.co.jp/" },
      { label: "店舗", value: "岡山駅前・博多・天神大名・小倉魚町・熊本上通・鹿児島天文館・長崎浜町の7店舗（特商法ページは「6店舗」と表記）", src: "https://inc.rita-style.co.jp/" },
      { label: "卒業後", value: "リバウンドサポート5年間無料。メンテナンスコース月2回21,560円〜", src: "https://rita-style.co.jp/price/" },
    ],
    qa: [
      { q: "返金保証があるから安心？", a: "公式条件では「1ヶ月で1kgを超えて一度も減らなかった場合」に限られ、1kg超減った時点で対象外です。無断欠席・日時変更の回数でも対象外になります。「合わなかったら返金」ではない点に注意してください。" },
    ],
  },
  lexer: {
    name: "ReXeR（レクサー）",
    facts: [
      { label: "運営会社", value: "株式会社レクサー（大阪市中央区）", src: "https://personal.rexer-group.com/about" },
      { label: "入会金", value: "33,000円（税込）→ キャンペーンで0円（苦楽園店・赤坂店は内容が異なる）", src: "https://personal.rexer-group.com/" },
      { label: "料金（税込）", value: "月額コース9,900円〜（縛り期間・違約金なし）／都度払い約55分5,060円〜／回数券8回64,240円〜・16回123,200円〜・24回179,520円〜・32回228,800円〜・40回272,800円〜", src: "https://personal.rexer-group.com/plan" },
      { label: "食事管理コース", value: "16回（2ヶ月）256,080円・24回（3ヶ月）359,920円・32回（4ヶ月）447,920円（税込）", src: "https://personal.rexer-group.com/plan" },
      { label: "店舗", value: "赤坂・五反田・梅田中津・天六・芦屋苦楽園・西宮の6店舗", src: "https://personal.rexer-group.com/" },
      { label: "体験", value: "トップページに「体験3,960円・当日入会で0円」と「無料体験のご予約」の両方の表記", src: "https://personal.rexer-group.com/" },
      { label: "返金保証", value: "公式サイトに記載なし", src: "https://personal.rexer-group.com/plan" },
    ],
    qa: [
      { q: "月額コースに縛りはある？", a: "公式の料金ページでは月額コース（9,900円〜）は「縛り期間・違約金なし」と書かれています。トレーニング1回ごとに5,060円〜が別にかかる仕組みです。" },
    ],
    caution: "fitmap等の第三者サイトにある料金（20回券など）は公式の現行料金表と一致しません。",
  },
  plez: {
    name: "プレズ（Plez）",
    facts: [
      { label: "サービス", value: "LINEで受けるオンラインパーソナル。専属トレーナーの食事指導＋ビデオ電話のトレーニング指導（1回25分）", src: "https://plez.jp/" },
      { label: "入会金", value: "9,800円（税込10,780円）全プラン共通", src: "https://plez.jp/" },
      { label: "料金（税込・月あたり）", value: "ビデオ電話月8回 2ヶ月43,890円→6ヶ月32,637円／月4回 32,890円→23,628円／動画フォーム指導 21,890円→16,170円", src: "https://plez.jp/" },
      { label: "支払い", value: "銀行振込（一括）。「指導料・入会金以外に払う料金はなし」と記載", src: "https://plez.jp/" },
      { label: "無料カウンセリング", value: "あり（LINE）", src: "https://plez.jp/" },
      { label: "返金保証", value: "公式ページに記載なし", src: "https://plez.jp/" },
      { label: "運営会社", value: "公式ページで確認できず（特定商取引法の表記ページが表示されない）", src: "https://plez.jp/" },
    ],
    qa: [
      { q: "途中でやめたら返金される？", a: "公式ページに返金保証・中途解約の返金の記載はありません。一括払いのため、契約期間（2〜6ヶ月）は続けられる期間で選ぶのが安全です。" },
    ],
  },
  fit24: {
    name: "FiT24（フィット24）",
    facts: [
      { label: "正式名称", value: "快活クラブFiT24（24時間フィットネスジム）", src: "https://www.fit24.jp/top.html" },
      { label: "運営会社", value: "株式会社快活フロンティア（AOKIグループ）※同社のプレスリリースで確認", src: "https://prtimes.jp/main/html/rd/p/000000145.000075275.html" },
      { label: "月会費", value: "通常月会費6,980円（税込7,678円）〜。「店舗により月会費が異なります」", src: "https://www.fit24.jp/top.html" },
      { label: "入会時費用", value: "事務手数料2,200円（税込・2026年7月の新店リリースの記載）。入会金は公式トップに記載なし", src: "https://prtimes.jp/main/html/rd/p/000000145.000075275.html" },
      { label: "店舗数", value: "2026年7月の立川幸町店が全国115店舗目（同社リリース）", src: "https://prtimes.jp/main/html/rd/p/000000145.000075275.html" },
      { label: "体験", value: "無料体験・見学会の予約あり", src: "https://www.fit24.jp/top.html" },
    ],
    qa: [
      { q: "FiT24は「パーソナルジム」？", a: "トレーナーがつくパーソナルジムではなく、24時間使えるセルフ型のフィットネスジムです。指導を受けたい人はパーソナルジムとの併用・比較を検討してください。" },
    ],
    caution: "「JOYFIT24」「エニタイムフィットネス」など名前の似た別の24時間ジムがあります。同じ公式ドメインにある「FiT24インドアゴルフ」は別サービスです。",
  },
  "apple-gym": {
    name: "Apple GYM（アップルジム）",
    facts: [
      { label: "販売業者", value: "株式会社REXIV（東京都中央区銀座）※トップの「運営会社」リンク先は別社名", src: "https://applegym.jp/sct/" },
      { label: "料金（税込・月会費）", value: "個別指導（最大2名）月4回9,900円・8回19,800円・12回29,700円／プレミアム（完全マンツーマン）月4回14,850円・8回29,700円・12回44,550円。共用設備費330円別途。平日12:20〜17:20は10%OFF", src: "https://applegym.jp/price/" },
      { label: "入会金", value: "「税込44,000円 半額」と「税込33,000円 無料（今月まで）」の2通りのバナー表記", src: "https://applegym.jp/price/" },
      { label: "返金", value: "トップのバナーは「全額以上返金保証」、特定商取引法の表記は「本契約申込み後に解約される場合、理由を問わず返金いたしません」と食い違い", src: "https://applegym.jp/sct/" },
      { label: "店舗", value: "公式トップの一覧で東京52・神奈川14の66店舗。「全店駅徒歩5分以内」", src: "https://applegym.jp/" },
    ],
    qa: [
      { q: "月9,900円は本当にパーソナル？", a: "9,900円の「個別指導」は最大2名を同時に指導する形式です。1対1の完全マンツーマンは「プレミアム」（月4回14,850円）です。" },
      { q: "返金保証はある？", a: "公式トップのバナーと特定商取引法の表記で内容が食い違っています。返金を前提にする場合は、条件を契約前に書面で確認してください。" },
    ],
  },
  rat: {
    name: "パーソナルジムRat（ラット）",
    facts: [
      { label: "運営会社", value: "株式会社ひととこむ（東京都渋谷区恵比寿西・2020年設立）", src: "https://ratgym.jp/company/" },
      { label: "コース（税込）", value: "シェイプアップ8回131,150円・美ボディメイク8回131,150円・短期ダイエット集中8回147,780円（1回50分）", src: "https://ratgym.jp/service/" },
      { label: "入会金", value: "29,800円 → 現在無料。当日入会で全コース10%OFF", src: "https://ratgym.jp/service/" },
      { label: "返金", value: "「30日間で満足できなかったら全額返金保証」（条件の記載なし）。特定商取引法の表記は「入会時諸費用は、理由の如何に関わらずご返金できません」", src: "https://ratgym.jp/legal/" },
      { label: "無料カウンセリング", value: "あり（ヒアリング・体組成測定・アドバイス）。「無理な勧誘は一切ナシ」と記載。体験料は店舗により異なる", src: "https://ratgym.jp/" },
      { label: "店舗", value: "公式サイトの店舗一覧で31店舗（札幌・関東・東海・関西・福岡）", src: "https://ratgym.jp/" },
    ],
    qa: [
      { q: "分割の「月々4,300円〜」と「4,600円〜」どっち？", a: "トップページは「月々4,300円〜」、料金ページはシェイプアップ8回が「月々4,600円〜」の表記です。信販会社の分割の目安なので、回数・金利はカウンセリングで確認してください。" },
    ],
    caution: "「Rat」は一般的な語のため、検索は「パーソナルジムRat」で行うと別業者の情報が混ざりにくくなります。",
  },
};
