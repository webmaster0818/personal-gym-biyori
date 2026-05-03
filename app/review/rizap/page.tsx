import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RIZAPの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "RIZAPの口コミ・評判を徹底解説。シェイプアッププログラム327,800円〜の料金体系、16万人の実績、30日間全額返金保証の基本情報からメリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "RIZAP株式会社" },
  { label: "店舗数", value: "全国100店舗以上（2026年4月時点）" },
  { label: "営業時間", value: "10:00〜22:00（店舗により異なる）" },
  { label: "特徴", value: "完全個室 / 専属トレーナー / 管理栄養士サポート / 30日間全額返金保証" },
  { label: "公式URL", value: "https://www.rizap.jp/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "科学的メソッドで「結果にコミット」",
    desc: "RIZAPは16万人以上の実績データに基づいた独自の科学的メソッドを採用しています。体組成や生活習慣を徹底的に分析し、個々の目標に最適化されたプログラムを設計。短期間で確実に成果を出す仕組みが確立されており、「結果にコミット」というブランドメッセージは伊達ではありません。",
  },
  {
    title: "専属トレーナー＋管理栄養士のWサポート",
    desc: "トレーニングは専属トレーナーがマンツーマンで指導し、食事面では管理栄養士が毎日の食事内容をチェックしてフィードバックを提供します。運動と食事の両面から専門家がサポートする体制は、他のパーソナルジムにはない大きな強みです。",
  },
  {
    title: "30日間全額返金保証で安心",
    desc: "プログラム開始から30日間は、いかなる理由でも全額返金に対応しています。高額な料金に不安を感じる方でも、まずは試してみることができる安心の制度です。返金保証があることで、入会のハードルを大きく下げています。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "確実な結果が出る（16万人の実績）",
    desc: "RIZAPの最大の強みは「結果が出る」という点です。16万人以上の利用実績があり、体重減少・体脂肪率低下の成功事例が豊富です。科学的な根拠に基づいたプログラム設計と、専属トレーナーによる徹底した進捗管理により、自己流のダイエットでは達成できなかった目標を実現できる可能性が高いです。ただし、個人差はあるため、全員が同じ結果を得られるわけではありません。",
  },
  {
    title: "食事管理が徹底している（毎日3食報告）",
    desc: "RIZAPでは毎日3食の食事内容をトレーナーに報告する仕組みがあります。管理栄養士の監修のもと、食事内容へのフィードバックがもらえるため、何をどれだけ食べればよいかが明確になります。自分一人では管理しきれない食事面を専門家に任せられるのは、大きな安心感につながります。",
  },
  {
    title: "30日間全額返金保証の安心感",
    desc: "高額なプログラムであっても、30日間の全額返金保証があるため、万が一自分に合わないと感じた場合でもリスクを最小限に抑えられます。この保証制度はRIZAPの自信の表れでもあり、入会を迷っている方の背中を押す大きな要素となっています。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "料金が高い（月額約16万円）",
    desc: "RIZAPの料金は2ヶ月16回コースで327,800円（税込）に入会金55,000円が加わり、総額約38万円となります。パーソナルジム業界の中でもトップクラスの価格帯であり、月額に換算すると約16万円です。確実な結果を求める方には投資価値がありますが、費用面でのハードルは決して低くありません。",
  },
  {
    title: "食事制限が厳しすぎると感じる人も",
    desc: "RIZAPの食事指導は糖質制限をベースとしており、特にプログラム初期は炭水化物の摂取量がかなり制限されます。効果は高い一方で、「食事が楽しくなくなった」「付き合いの食事が困る」といった声も一定数あります。食事制限への耐性は個人差が大きいため、事前にカウンセリングで詳しく確認することをおすすめします。",
  },
  {
    title: "リバウンドの報告あり",
    desc: "プログラム終了後にリバウンドしたという報告は少なくありません。厳しい食事管理がトレーナーの管理下でなくなると、元の食生活に戻ってしまうケースがあります。RIZAPでは卒業後のサポートプログラムも用意されていますが、別途費用がかかります。長期的な体型維持のためには、自分自身で食事管理を続ける意識が必要です。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "シェイプアッププログラム", duration: "16回 / 2ヶ月", price: "327,800円", note: "税込" },
  { name: "美脚プログラム", duration: "16回 / 2ヶ月", price: "327,800円", note: "税込" },
  { name: "マッスルゲインプログラム", duration: "16回 / 2ヶ月", price: "327,800円", note: "税込" },
  { name: "PRIMEプラン", duration: "月2回〜", price: "月額22,000円〜", note: "税込・月額制" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの質に関しては全体的に高い評価が集まっています。専属制のため信頼関係が築きやすく、モチベーション管理も含めた手厚いサポートが好評です。一方で、相性が合わない場合のトレーナー変更について不満を持つ利用者もいます。",
    reviews: [
      { text: "専属トレーナーが自分の体質や目標を理解した上で指導してくれるので、毎回のセッションが的確。フォームの修正も細かく、効果を実感しやすい。", attr: "入会3ヶ月のユーザー" },
      { text: "トレーナーがメンタル面でも支えてくれる。辛い時期も「一緒に頑張りましょう」と励ましてもらえて、最後まで続けられた。", attr: "プログラム完了ユーザー" },
      { text: "トレーナーとの相性が合わなかったが、変更を申し出るのに勇気が必要だった。変更後は快適に通えるようになったが、もう少し気軽に相談できる仕組みがあると良い。", attr: "利用歴4ヶ月のユーザー" },
      { text: "トレーナーの知識量が豊富で、質問にはすべてエビデンスを交えて答えてくれる。自己流でやっていた時の間違いを多く指摘してもらえた。", attr: "入会2ヶ月のユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "料金の高さはRIZAPに対する最も多い指摘です。ただし、結果が出ることを考慮すると「投資に見合う」と評価する利用者も多く、コスパの捉え方は分かれます。",
    reviews: [
      { text: "正直かなり高額だが、自己流ダイエットに何年も費やしてきた時間と労力を考えると、短期間で結果が出るRIZAPの方が結果的にコスパが良いと感じた。", attr: "プログラム完了ユーザー" },
      { text: "月額換算で16万円は学生や若い社会人には厳しい金額。分割払いもあるが、金利を含めると総額はさらに膨らむ。", attr: "カウンセリング来店ユーザー" },
      { text: "食事指導・トレーニング・メンタルサポートがすべて込みなので、内容を考えると妥当な価格だと思う。ジム＋栄養士＋パーソナルトレーナーを別々に雇うよりは安い。", attr: "利用歴3ヶ月のユーザー" },
      { text: "プログラム終了後も体型を維持したいなら追加コースが必要。卒業後のサポートにもお金がかかるのは想定外だった。", attr: "卒業後のユーザー" },
    ],
  },
  {
    title: "結果・効果",
    summary: "結果への満足度は非常に高く、目標体重への到達率は他ジムと比較しても優れているとの声が多数です。ただし、短期間での急激な変化にはリスクも伴います。",
    reviews: [
      { text: "2ヶ月で10kg減量に成功した。見た目が大きく変わり、周囲からも驚かれた。数字だけでなく体脂肪率やウエストサイズも目に見えて改善した。", attr: "シェイプアッププログラム完了ユーザー" },
      { text: "体重はもちろん、姿勢や体力面でも変化を感じた。階段を上っても息切れしなくなり、日常生活の質が上がった。", attr: "利用歴2ヶ月のユーザー" },
      { text: "目標の8kg減量のうち、6kgまでは順調に落ちたが、残り2kgがなかなか減らなかった。最後の追い込みは自分の意志力も必要。", attr: "プログラム完了ユーザー" },
      { text: "短期間で急激に体重を落としたため、肌荒れや倦怠感が出た時期があった。トレーナーに相談して調整してもらったが、無理な減量は体への負担も大きいと実感した。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "食事指導",
    summary: "食事指導はRIZAPの中核をなすサービスで、毎食の報告とフィードバックが徹底しています。糖質制限の効果は高い一方で、ストレスを感じる利用者も少なくありません。",
    reviews: [
      { text: "毎食の写真を送るとすぐにフィードバックがもらえる。何を食べるべきか迷わなくなり、食事に対する意識が根本から変わった。", attr: "入会2ヶ月のユーザー" },
      { text: "糖質制限が想像以上に厳しく、最初の1週間は頭痛や倦怠感があった。慣れると楽になるが、甘いものが好きな人には辛い。", attr: "入会1ヶ月のユーザー" },
      { text: "外食や飲み会の時にメニュー選びが難しい。トレーナーに相談すると代替案を教えてもらえるが、付き合いの多い人は工夫が必要。", attr: "利用歴3ヶ月のユーザー" },
      { text: "管理栄養士の監修で、ただ制限するだけでなく必要な栄養素をしっかり摂る指導がある。筋肉量を落とさずに脂肪だけ減らすアプローチは科学的で信頼できた。", attr: "プログラム完了ユーザー" },
    ],
  },
  {
    title: "リバウンド",
    summary: "リバウンドに関する口コミは一定数存在し、プログラム終了後の自己管理が課題となっています。卒業後のサポートプログラムを活用するかどうかで明暗が分かれる傾向です。",
    reviews: [
      { text: "プログラム終了後3ヶ月で5kg戻ってしまった。トレーナーの管理下でないと食事管理ができない自分に気づいた。", attr: "卒業後6ヶ月のユーザー" },
      { text: "卒業後も自分でトレーニングと食事管理を続けており、半年経っても体型をキープできている。RIZAPで正しい知識を身につけたおかげだと思う。", attr: "卒業後8ヶ月のユーザー" },
      { text: "リバウンド防止のためにボディマネジメントプログラムに加入した。月2回のセッションで維持できているが、追加費用がかかるのは痛い。", attr: "ボディマネジメントプログラム利用ユーザー" },
      { text: "厳しい糖質制限からの反動で、卒業後に炭水化物を食べすぎてしまった。段階的に食事を戻す指導がもっとあると良かった。", attr: "卒業後3ヶ月のユーザー" },
    ],
  },
  {
    title: "施設・設備",
    summary: "完全個室のプライベート空間は高く評価されており、清潔感も申し分ないとの声が大半です。ただし、設備のバリエーションはフィットネスジムに比べると限定的です。",
    reviews: [
      { text: "完全個室なので周囲の目を気にせずトレーニングに集中できる。着替えからシャワーまで一貫してプライベートな空間が確保されている。", attr: "利用歴2ヶ月のユーザー" },
      { text: "高級感のある内装で、来るたびにモチベーションが上がる。アメニティも充実しており、仕事前に通っても身だしなみを整えられる。", attr: "利用歴4ヶ月のユーザー" },
      { text: "マシンの種類は限られている。フリーウェイトで高重量を扱いたい上級者には物足りないかもしれない。", attr: "トレーニング経験5年のユーザー" },
      { text: "ロッカールームが広くて清潔。タオルやウェアのレンタルもあるため手ぶらで通えるのが便利。", attr: "利用歴3ヶ月のユーザー" },
    ],
  },
  {
    title: "モチベーション管理",
    summary: "トレーナーによるメンタルサポートが手厚く、挫折しそうな時でも続けられたという声が多くあります。定期的な測定による数値の可視化もモチベーション維持に効果的です。",
    reviews: [
      { text: "毎回のセッションで体重・体脂肪率を測定し、グラフで推移を見せてもらえる。数字が減っていくのが目に見えるので、やる気が続く。", attr: "利用歴2ヶ月のユーザー" },
      { text: "仕事が忙しくてトレーニングをサボりたくなった時期があったが、トレーナーから連絡が来て「ここが踏ん張りどころです」と声をかけてもらえた。", attr: "利用歴3ヶ月のユーザー" },
      { text: "高額な料金を払っているという意識自体がモチベーションになった。元を取りたいという気持ちで通い続けられた。", attr: "プログラム完了ユーザー" },
      { text: "同じ目標を持つ仲間との交流機会はないので、孤独に感じることもある。マンツーマンの良さでもあるが、コミュニティ要素が欲しい人には不向き。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "予約・通いやすさ",
    summary: "店舗数が多く、営業時間内であれば比較的予約が取りやすいとの評価です。ただし、人気トレーナーや繁忙時間帯は早めの予約が必要です。",
    reviews: [
      { text: "専属トレーナーとのスケジュール調整は比較的スムーズ。毎週固定の曜日・時間を確保できるので、ルーティン化しやすい。", attr: "利用歴3ヶ月のユーザー" },
      { text: "急な予定変更にも柔軟に対応してもらえた。前日までに連絡すれば振替が可能なので、仕事の都合で変更が多い自分には助かった。", attr: "利用歴2ヶ月のユーザー" },
      { text: "都心部の店舗は駅から近いが、地方の店舗は車でないとアクセスが不便な場所もある。", attr: "地方店舗利用ユーザー" },
      { text: "営業時間が10時〜22時で、早朝や深夜に通いたい人には不向き。朝型の自分には少し遅い。", attr: "早朝利用希望ユーザー" },
    ],
  },
  {
    title: "返金保証",
    summary: "30日間全額返金保証は入会前の安心材料として高く評価されています。実際に返金を利用した方の声は少ないですが、制度自体の存在が信頼感につながっています。",
    reviews: [
      { text: "返金保証があったから入会を決断できた。高額な買い物だが、合わなければ返金できるという安心感は大きい。", attr: "入会1ヶ月のユーザー" },
      { text: "返金を申し出たところ、引き止めはあったものの最終的にはスムーズに手続きが完了した。約束通り全額返金された。", attr: "返金利用ユーザー" },
      { text: "返金保証の条件をカウンセリング時に詳しく説明してもらえた。所定の手続きが必要だが、理不尽な条件はなく安心した。", attr: "カウンセリング来店ユーザー" },
      { text: "返金保証があるとはいえ、30日で効果を判断するのは難しいとも感じた。本格的な変化は2ヶ月目以降に出ることが多い。", attr: "利用歴2ヶ月のユーザー" },
    ],
  },
  {
    title: "卒業後",
    summary: "プログラム卒業後の過ごし方については、自己管理で成功している人と、リバウンドに悩む人に二極化しています。卒業後のサポートプログラムの活用が鍵です。",
    reviews: [
      { text: "RIZAPで学んだ食事管理の知識は一生ものだと思う。卒業後1年経つが、自分で管理を続けて体型を維持できている。", attr: "卒業後1年のユーザー" },
      { text: "卒業後は近所のフィットネスジムに通いながら、RIZAPで教わったメニューを自分でこなしている。基礎を叩き込んでもらえたおかげで自立できた。", attr: "卒業後6ヶ月のユーザー" },
      { text: "卒業後のフォローが薄いと感じた。追加のサポートプログラムに加入しないと放置される印象。アフターケアにもう少し力を入れてほしい。", attr: "卒業後3ヶ月のユーザー" },
      { text: "ボディマネジメントプログラムに加入して月2回通っている。費用はかかるが、完全に一人で管理するよりも安心感がある。", attr: "ボディマネジメントプログラム利用ユーザー" },
    ],
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "RIZAPの入会金はいくらですか？", a: "入会金は55,000円（税込）です。キャンペーン期間中は割引になることもあるため、公式サイトで最新情報をご確認ください。" },
  { q: "RIZAPは完全個室ですか？", a: "はい、すべてのトレーニングルームが完全個室です。他の利用者と顔を合わせることなく、プライベートな空間でトレーニングに集中できます。" },
  { q: "30日間全額返金保証の条件は？", a: "プログラム開始から30日以内であれば、いかなる理由でも全額返金に対応しています。所定の手続きが必要ですので、詳細はカウンセリング時にご確認ください。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回あたり50分のマンツーマントレーニングです。着替えやシャワーの時間は含まれていません。" },
  { q: "食事制限はどのくらい厳しいですか？", a: "糖質制限をベースとした食事指導が行われます。プログラムのフェーズにより制限の度合いは変わりますが、特に初期は炭水化物の摂取量がかなり制限されます。" },
  { q: "リバウンドしませんか？", a: "プログラム中に正しい食事管理の知識を身につけることで、卒業後もリバウンドを防ぐことができます。ただし、自己管理が難しい方にはボディマネジメントプログラム（別途有料）も用意されています。" },
  { q: "女性でも通いやすい環境ですか？", a: "利用者の約4割が女性とされています。完全個室のため周囲の目を気にせずトレーニングでき、女性専用のプログラムも用意されています。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリングが用意されています。体組成測定やカウンセリングを通じて、最適なプログラムを提案してもらえます。公式サイトから予約できます。" },
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
  { region: "北海道", stores: [{ name: "札幌店", href: "/review/rizap/sapporo/" }] },
  { region: "宮城", stores: [{ name: "仙台店" }] },
  { region: "東京", stores: [{ name: "銀座店", href: "/review/rizap/ginza/" }, { name: "新宿店", href: "/review/rizap/shinjuku/" }, { name: "池袋西口店", href: "/review/rizap/ikebukuro/" }, { name: "池袋東口店" }, { name: "渋谷店", href: "/review/rizap/shibuya/" }, { name: "品川店", href: "/review/rizap/shinagawa/" }, { name: "上野店" }, { name: "北千住店" }, { name: "立川店" }, { name: "町田店", href: "/review/rizap/machida/" }, { name: "吉祥寺店" }, { name: "八王子店" }, { name: "自由が丘店" }, { name: "恵比寿店", href: "/review/rizap/ebisu/" }, { name: "神楽坂店" }, { name: "六本木店", href: "/review/rizap/roppongi/" }, { name: "錦糸町店" }, { name: "聖蹟桜ヶ丘店" }, { name: "練馬店" }, { name: "蒲田店" }] },
  { region: "神奈川", stores: [{ name: "横浜東口店", href: "/review/rizap/yokohama/" }, { name: "横浜西口店" }, { name: "川崎店", href: "/review/rizap/kawasaki/" }, { name: "藤沢店" }, { name: "戸塚店" }, { name: "本厚木店" }] },
  { region: "埼玉", stores: [{ name: "大宮西口店" }, { name: "浦和店" }, { name: "川口店" }, { name: "所沢店" }, { name: "春日部店" }] },
  { region: "千葉", stores: [{ name: "千葉店" }, { name: "船橋店" }, { name: "松戸店" }, { name: "柏店" }] },
  { region: "愛知", stores: [{ name: "名古屋栄店", href: "/review/rizap/nagoya/" }, { name: "名駅南店" }, { name: "金山店" }, { name: "豊田店" }, { name: "刈谷店" }] },
  { region: "大阪", stores: [{ name: "梅田店", href: "/review/rizap/umeda/" }, { name: "なんば店", href: "/review/rizap/namba/" }, { name: "京橋店" }, { name: "天王寺店" }, { name: "堺東店" }, { name: "枚方店" }, { name: "高槻店" }] },
  { region: "京都", stores: [{ name: "京都河原町店" }, { name: "京都四条店" }] },
  { region: "兵庫", stores: [{ name: "神戸三宮店" }, { name: "西宮北口店" }, { name: "尼崎店" }, { name: "明石店" }] },
  { region: "広島", stores: [{ name: "広島店" }] },
  { region: "福岡", stores: [{ name: "天神店", href: "/review/rizap/fukuoka/" }, { name: "博多店" }, { name: "小倉店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "RIZAPの基本情報" },
  { id: "overview", label: "RIZAPの概要" },
  { id: "merit-demerit", label: "RIZAPのメリット・デメリット" },
  { id: "pricing", label: "RIZAPの料金" },
  { id: "reviews", label: "RIZAPの口コミ分析" },
  { id: "faq", label: "RIZAPのよくある質問" },
  { id: "stores", label: "RIZAPの店舗一覧" },
];

export default function RizapReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "RIZAP" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RIZAPの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            RIZAP の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-rizap.jpg" alt="RIZAP 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          RIZAPは「結果にコミット」のキャッチフレーズで知られる、国内最大手のパーソナルトレーニングジムです。全国100店舗以上を展開し、16万人以上の利用実績を持ちます。専属トレーナーによるマンツーマン指導と管理栄養士による食事サポートの二本柱で、短期間での確実な体型変化を実現してきました。30日間全額返金保証も大きな特徴です。本記事では、RIZAPの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの概要</h2>
          <h3 className="text-lg font-bold mb-4">RIZAPの3つの強み</h3>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">RIZAPのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">RIZAPのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">RIZAPのデメリット</h3>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            RIZAPの料金はプログラムごとに設定されています。以下は代表的なプランの一覧です。いずれも入会金55,000円（税込）が別途必要です。
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
            ※ 料金は税込です。入会金55,000円（税込）が別途かかります。キャンペーンにより変動する場合があります。
          </p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            RIZAPのGoogleマップ口コミを分析すると、結果への満足度が非常に高い一方で、料金の高さやリバウンドに関する指摘が一定数見られます。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">
              ※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/RIZAP/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/RIZAP/</a>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">RIZAPの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            RIZAPは全国100店舗以上を展開しています（2026年4月時点）。以下は主要エリアの店舗一覧です。
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

        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://www20.a8.net/svt/bgt?aid=250920793872&wid=001&eno=01&mid=s00000015695001058000&mc=1" alt="RIZAP" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
          <img src="https://www10.a8.net/0.gif?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" alt="" width="1" height="1" className="inline" />
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">RIZAPが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、あなたに合ったプログラムを相談してみましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
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
