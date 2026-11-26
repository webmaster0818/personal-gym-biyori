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
  title: "ファディー（FURDI）の口コミ・評判｜月7,678円は46店舗中9店舗・店舗別の料金と解約金を検証",
  description:
    "ファディー（FURDI）の口コミ・評判を、Googleマップ9店舗906件・FIT Search 21件の内訳と公式情報で検証しました。公式46店舗の店舗ページを確認すると、月7,678円は9店舗で、36店舗は月8,778円〜です。途中解約の総額と在籍条件もまとめています。",
};

/*
 * 2026-10-28 改訂: 料金・店舗・退会・休会・入会資格は、公式サイト（トップ・/about・/faq・/studio_list・店舗ページ）と
 * 会員利用規約PDF（membership-terms_8.0）を2026-10-28に確認した値。
 * 旧記載の訂正: 「全国100店舗以上」→公式店舗一覧46店舗（22都道府県）、「退会は前月10日まで」→前月末日まで、
 * 「200種類以上」→200種類、「1回15〜30分」→1回30分のプログラム。
 * 出典のない記述（混雑時間帯・推奨頻度・食事指導は別途オプション・口コミの観点別要約）は削除した。
 * 口コミは当サイトのGoogleマップ集計（data/brand-gmap-stats.ts）の数値のみを掲載し、本文は転載しない。
 *
 * 2026-11-17 追記（12:00成長ルーチン）: 公式46店舗の店舗ページ（/studio/{slug}/）のFAQ欄の月会費を全件確認。
 * プレミアム8,778円・スタンダード9,878円が36店舗、7,678円・8,778円が9店舗、9,878円・10,978円が1店舗（京都北山）。
 * 「月7,678円」は /about・/faq の表記で、全店舗共通ではない。プライベート会員（ファディーPlus+）月14,960円（年間契約）は24店舗のページに掲載。
 * FIT Search の口コミ21件（2021年9月〜2023年9月）の内訳、みん評は11/17も403、検索上位記事の掲載値の比較を追加。
 */
const CHECKED = "2026年10月28日";
const CHECKED2 = "2026年11月17日";

const SRC = {
  top: "https://furdi.jp/",
  about: "https://furdi.jp/about",
  faq: "https://furdi.jp/faq",
  studios: "https://furdi.jp/studio_list",
  aomori: "https://furdi.jp/studio/aomori/",
  koiwa: "https://furdi.jp/studio/koiwa/",
  hitachinaka: "https://furdi.jp/studio/hitachinaka/",
  kyotokitayama: "https://furdi.jp/studio/kyotokitayama/",
  fitsearch: "https://fitsearch.jp/group/FURDI/recommends",
  kurashikaru: "https://kurashikaru.co.jp/prgym/furdi/",
  wellulu: "https://wellulu.com/moderate-exercise/73513/",
  komachi: "https://gym-komachi.jp/personal-gym/furdi/",
  terms: "https://furdi.jp/wp/wp-content/uploads/2025/12/membership-terms_8.0.pdf",
  company: "https://furdi.jp/company",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "AIマシンを使う女性専用のサーキット型ジムです。1回30分のプログラムで、マンツーマンのパーソナルトレーニングではありません。入会資格は15歳以上の女性で、18歳未満はU-18会員（保護者が同じ店舗の会員の場合）に限られます。" },
  { label: "料金", value: "店舗によって異なります。公式46店舗の店舗ページを当サイトで確認したところ、36店舗がプレミアム会員（1年契約前提）月8,778円・スタンダード会員（月契約）月9,878円、9店舗が月7,678円・月8,778円、京都北山店が月9,878円・月10,978円でした（税込・2026年11月17日確認）。入会金はなく、入会時に事務手数料5,500円とカード発行手数料3,300円がかかります。" },
  { label: "解約・休会", value: "退会は希望月の前月末日までに店舗で手続きします。入会後3ヶ月は在籍が必要です。プレミアム会員が1年未満で退会すると、スタンダード会員との差額（月1,100円×在籍月数）が契約解除料になります。休会は月1,100円で最長6ヶ月です。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは46店舗（22都道府県）です。最も多いのは東京都の7店舗、次いで茨城県の6店舗です。会員が利用できるのは登録した店舗のみで、他店舗は利用できません。" },
  { label: "口コミ", value: "当サイトがGoogleマップで集計した9店舗の口コミは計906件、店舗評価の平均は4.86で、全店舗が4.5以上でした。フィットネス口コミサイト「FIT Search」の口コミは21件（2021年9月〜2023年9月）で、総合評価の単純平均は4.50です（当サイト計算）。「みん評」は当サイトから閲覧できなかったため、件数・点数は掲載していません。" },
  { label: "向いている方", value: "1回30分の運動を予約なしで習慣にしたい女性に向いています。トレーナーの付きっきりの指導や、複数店舗の利用を希望する方には向いていません。" },
];

const basicInfo = [
  { label: "ジム名", value: "FURDI（ファディー）" },
  { label: "運営会社", value: "株式会社FURDI（東京都千代田区）。店舗は運営会社またはパートナー（加盟店）が運営" },
  { label: "タイプ", value: "AIマシンを使う女性専用のサーキット型フィットネス（1回30分のプログラム）" },
  { label: "料金", value: "プレミアム会員 月7,678円〜9,878円／スタンダード会員 月8,778円〜10,978円（店舗により異なり、46店舗中36店舗は月8,778円・月9,878円）／U-18会員 月5,428円（税込）" },
  { label: "店舗", value: "公式店舗一覧に46店舗（22都道府県）。利用できるのは登録店舗のみ" },
  { label: "営業時間", value: "店舗により異なります（例: 青森浜田店は5:00〜23:00、日曜・祝日は無人営業）" },
  { label: "入会資格", value: "15歳以上の女性（18歳未満はU-18会員のみ）。入会は店舗での手続きに限られ、電話・Webでは受け付けていません" },
];

const strengths = [
  {
    title: "AIマシンがフォームと動きを確認",
    desc: "公式サイトによると、AIマシンの内蔵カメラが動きを「角度・速度・タイミング」から分析し、リアルタイムに助言します。トレーニングはストレッチからダイエットまで200種類が用意されています。",
  },
  {
    title: "月1万円以下から通い放題",
    desc: "プレミアム会員は月7,678円〜9,878円（税込）の定額で、46店舗中36店舗は月8,778円です。たとえば週2回（月8回程度）通う場合、月8,778円の店舗では1回あたり約1,097円、月7,678円の店舗では約960円です（当サイト計算）。",
  },
  {
    title: "予約不要で1回30分",
    desc: "店舗ページに「予約不要で通い放題」と記載されています。公式FAQでは、AIマシンが満員の場合も1人30分で終わるプログラムのため長時間待つことはない、と説明しています。",
  },
];

const merits = [
  {
    title: "女性専用で人目を気にせず運動できる",
    desc: "会員規約で女性専用と定められており、男性は体験・見学を含めて入館できません。",
  },
  {
    title: "短時間で全身を動かせる",
    desc: "1回30分のサーキット形式のため、仕事や家事の合間にも通いやすい仕組みです。",
  },
  {
    title: "休会制度がある",
    desc: "休会は月1,100円（税込）で、月単位・最長6ヶ月です。休会明けの復会料はかかりません。",
  },
];

const demerits = [
  {
    title: "トレーナーが付きっきりで指導する形式ではない",
    desc: "指導の中心はAIマシンです。細かなフォーム修正や個別の質問への対応を重視する方は、マンツーマン型のパーソナルジムと比較してください。",
  },
  {
    title: "登録店舗以外は利用できない",
    desc: "公式FAQと会員規約に、利用できるのは登録した店舗のみと記載されています。職場の近くと自宅の近くを使い分けることはできません。",
  },
  {
    title: "最低3ヶ月の在籍と、プレミアム会員の契約解除料",
    desc: "入会後3ヶ月は退会できません。プレミアム会員は1年未満で退会すると差額の支払いが必要です。",
  },
  {
    title: "ウェア・シューズは原則持参",
    desc: "一部店舗を除き、ウェアやシューズの貸し出し、水の販売はありません。",
  },
];

// 2026-10-28: 公式（/about の料金画像の代替テキスト・/faq・会員規約）で再確認
const pricingPlans = [
  { name: "プレミアム会員", duration: "1年契約前提・通い放題", price: "月7,678円／8,778円／9,878円", note: "税込。店舗により異なります（下表）。1年未満の退会は差額を契約解除料として支払い" },
  { name: "スタンダード会員", duration: "月契約・通い放題", price: "月8,778円／9,878円／10,978円", note: "税込。店舗により異なります（下表）。契約解除料なし" },
  { name: "プライベート会員（ファディーPlus+）", duration: "年間契約", price: "月14,960円", note: "税込（税抜13,600円）。24店舗の店舗ページに掲載。遺伝子検査の結果に基づく個別メニュー、月2回までのマンツーマンサポート予約など。1店舗あたりの人数限定" },
  { name: "U-18会員", duration: "月契約", price: "月5,428円", note: "税込。親権者が同じ店舗の会員の場合のみ" },
  { name: "入会時の費用", duration: "—", price: "事務手数料5,500円＋カード発行手数料3,300円", note: "入会金なし" },
  { name: "休会", duration: "最長6ヶ月", price: "月1,100円", note: "税込。休会明けの復会料なし" },
];

// 当サイト計算: 入会時費用8,800円＋月会費（日割り月・キャンペーン月を除く）
// 2026-11-17: 36店舗の料金（8,778円/9,878円）の列を追加
const costRows = [
  { months: "3ヶ月（最短）", standard36: "38,434円", premium36: "38,434円", standard: "35,134円", premium: "35,134円", note: "プレミアムは契約解除料3,300円を含む" },
  { months: "6ヶ月", standard36: "68,068円", premium36: "68,068円", standard: "61,468円", premium: "61,468円", note: "プレミアムは契約解除料6,600円を含む" },
  { months: "12ヶ月", standard36: "127,336円", premium36: "114,136円", standard: "114,136円", premium: "100,936円", note: "1年継続でプレミアムが13,200円安くなります" },
];

// 2026-11-17: 公式46店舗の店舗ページ（FAQ欄「プレミアム会員とスタンダード会員の違いはなんですか？」）の月会費
const storePriceRows = [
  { premium: "8,778円", standard: "9,878円", n: 36, stores: "青森浜田・MEGAドン・キホーテ旭川・千歳烏山・コープ府中寿町・小岩・葛西・西友大森・梅屋敷・西友ひばりヶ丘・北浦和・武蔵浦和駅前・MEGAドン・キホーテ三郷・武蔵小杉医大通り・湘南台・名古屋本郷・甲南山手駅前 など", src: SRC.koiwa },
  { premium: "7,678円", standard: "8,778円", n: 9, stores: "ひたちなか・水戸赤塚・水戸千波・郡山鶴見坦・八山田・出雲下古志・西宮門戸厄神駅前・南海堺駅・岡山野田", src: SRC.hitachinaka },
  { premium: "9,878円", standard: "10,978円", n: 1, stores: "京都北山", src: SRC.kyotokitayama },
];

const sourceRows = [
  { source: "Googleマップ（当サイト集計）", count: "9店舗・計906件", score: "店舗評価の平均4.86（件数加重4.84）", note: "2026年8月29日〜9月8日取得。4.5未満の店舗はありませんでした。公式店舗一覧46店舗のうち、当サイトのデータベースで確認できた9店舗の集計です" },
  { source: "FIT Search（フィットネス口コミサイト）", count: "21件", score: "総合評価の単純平均4.50（当サイト計算）", note: "2026年11月17日確認。投稿時期は2021年9月〜2023年9月で、2024年以降の投稿はありません。総合評価の内訳は5.00が12件・4.50が4件・4.30が2件・3.50が2件・1.00が1件です。1.00の1件は見学予約後に連絡がつかなかったという内容です。また1件に「面談の際にGoogleの口コミ投稿を求められた」との記述があります（投稿者の記述であり、当サイトでは事実関係を確認していません）。同サイトの掲載施設数は82件で、公式店舗一覧の46店舗と一致しません" },
  { source: "みん評", count: "—", score: "—", note: "当サイトからページを閲覧できなかったため（アクセス拒否・2026年11月17日に再確認）、件数・点数は掲載していません" },
  { source: "公式サイト「VOICE」", count: "—", score: "—", note: "会員の体験談と減量の数値を掲載しています。運営会社が選んで掲載したものであり、第三者の口コミとは性質が異なります" },
];

const issueRows = [
  { issue: "本当に予約不要ですか", answer: "店舗ページに「予約不要で通い放題」と記載されています。無料体験は事前予約が必要で、所要時間は約60分です。", src: SRC.aomori },
  { issue: "トレーナーはいますか", answer: "スタッフ対応時間があり、無料体験やカウンセリングはスタッフが対応します。青森浜田店のように日曜・祝日を無人営業とする店舗もあるため、スタッフの在店時間は店舗ページでご確認ください。", src: SRC.aomori },
  { issue: "やめにくいのではないですか", answer: "入会後3ヶ月は在籍が必要で、退会手続きは原則としてスタッフのいる時間に来店して行います。プレミアム会員は1年未満の退会で差額の支払いが必要です。ドクターストップ（診断書等の提出）の場合は契約解除料が免除されます。", src: SRC.terms },
  { issue: "引っ越したら別の店舗に通えますか", answer: "利用できるのは登録店舗のみです。会員規約には移籍の手続き（各月1日〜20日に店舗で申し込み）が定められています。", src: SRC.terms },
  { issue: "払った会費は返ってきますか", answer: "会員規約に「一度納入された会費は原則として返還しません」と記載されています。返金保証制度の記載はありません。", src: SRC.terms },
  { issue: "体験のあとに勧誘されますか", answer: "公式の「料金と入会について」には、体験後に入会を希望する場合に手続きを行い、日を改めて入会手続きをすることも可能で、無理な勧誘はしないと記載されています（2026年11月17日確認）。入会はスタッフ対応時間に来店して書面で申し込む方式で、電話・Webでは受け付けていません。", src: SRC.about },
  { issue: "料金が高いという口コミは本当ですか", answer: "料金は店舗によって異なります。公式46店舗の店舗ページを確認したところ、月7,678円（プレミアム会員）の店舗は9店舗で、36店舗は月8,778円、京都北山店は月9,878円でした（2026年11月17日確認）。口コミや比較記事の金額と比べる際は、通う店舗のページをご確認ください。", src: SRC.studios },
];

// 2026-11-17: 検索上位の記事が掲載している数値（各ページを2026年11月17日に確認）
const serpRows = [
  { site: "くらしかる", href: SRC.kurashikaru, reviews: "Googleマップの口コミ4,074件を集計（70店舗・2024年12月調査と記載）", store: "70店舗（2024年12月時点）", note: "★5が84.4%と記載。調査時点から約2年が経過しています" },
  { site: "Wellulu", href: SRC.wellulu, reviews: "Googleマップの口コミ21件・みん評3件を引用", store: "約52店舗", note: "2026年9月23日更新。編集部の体験レポートあり。料金は記事内に複数の金額が記載されています" },
  { site: "ジム小町", href: SRC.komachi, reviews: "Googleレビュー6件のほか、X・Instagramの投稿を引用", store: "全国25店舗〜", note: "入会金19,800円と記載されていますが、公式サイトには「入会金はございません」と記載されています" },
  { site: "FIT Search", href: SRC.fitsearch, reviews: "利用者の投稿21件（2021年9月〜2023年9月）", store: "掲載施設82件", note: "閉店した店舗を含むかどうかは記載がありません" },
];

const studioCounts = [
  { pref: "東京都", n: 7 }, { pref: "茨城県", n: 6 }, { pref: "福島県", n: 3 }, { pref: "埼玉県", n: 3 }, { pref: "滋賀県", n: 3 }, { pref: "兵庫県", n: 3 },
  { pref: "青森県", n: 2 }, { pref: "神奈川県", n: 2 }, { pref: "京都府", n: 2 }, { pref: "大阪府", n: 2 }, { pref: "島根県", n: 2 },
  { pref: "北海道", n: 1 }, { pref: "岩手県", n: 1 }, { pref: "山形県", n: 1 }, { pref: "栃木県", n: 1 }, { pref: "山梨県", n: 1 }, { pref: "静岡県", n: 1 },
  { pref: "愛知県", n: 1 }, { pref: "三重県", n: 1 }, { pref: "岡山県", n: 1 }, { pref: "山口県", n: 1 }, { pref: "福岡県", n: 1 },
];

const faqItems = [
  { q: "FURDIの入会金はいくらですか？", a: "入会金はありません。入会時に事務手数料5,500円とカード発行手数料3,300円（いずれも税込）がかかります（2026年10月28日 公式サイトで確認）。" },
  { q: "FURDIの解約金（契約解除料）はいくらですか？", a: "プレミアム会員が1年未満で退会する場合、在籍期間中のスタンダード会員との会費差額（月1,100円×在籍月数）を契約解除料として支払います。スタンダード会員には契約解除料はありません。どちらの会員種別でも、入会後3ヶ月は在籍が必要です。" },
  { q: "退会方法を教えてください。", a: "退会希望月の前月末日までに、所属店舗で退会届を提出します（例: 2月末で退会する場合は1月末日まで）。原則としてスタッフのいる時間に来店して手続きします。" },
  { q: "休会はできますか？", a: "できます。休会管理費は月1,100円（税込）で、月単位・最長6ヶ月です。休会を希望する月の前々月末までに店舗で手続きが必要です。" },
  { q: "他の店舗も利用できますか？", a: "利用できるのは登録した店舗のみです。他店舗の利用はできません。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1人30分で終わるプログラムです。AIマシンが満員の場合は一時的に待つことがあります。" },
  { q: "男性は利用できますか？", a: "利用できません。女性専用のため、男性は体験・見学を含めて入館できません。" },
  { q: "何歳から入会できますか？", a: "会員規約上の入会資格は15歳以上の女性です。18歳未満の方は、保護者が同じ店舗の会員である場合にU-18会員として利用できます。" },
  { q: "ウェアやシューズは借りられますか？", a: "一部店舗を除き、貸し出しはありません。ウェア・室内シューズ・飲み物をご持参ください。" },
  { q: "見学や体験はできますか？", a: "無料体験があります。事前予約制で、所要時間は約60分です。会員以外の方の見学は、無料体験の予約後に可能です。" },
  { q: "FURDIの月会費は店舗によって違いますか？", a: "違います。公式46店舗の店舗ページを確認したところ、プレミアム会員・スタンダード会員の月会費は、36店舗が8,778円・9,878円、9店舗が7,678円・8,778円、京都北山店が9,878円・10,978円でした（税込・2026年11月17日確認）。公式サイトにも「一部店舗によって料金が異なります。料金は各店舗ページでご確認ください」と記載されています。" },
  { q: "プライベート会員（ファディーPlus+）とは何ですか？", a: "遺伝子検査の結果に基づく個別メニューでのトレーニング、食事・栄養の個別レポート、月2回までのマンツーマンサポート予約、LINEでのAIコーチへの相談がついたプランです。月額14,960円（税込・年間契約）で、1店舗あたりの人数が限られています。2026年11月17日時点で、46店舗中24店舗のページに掲載されています。" },
  { q: "退会したあとに再入会できますか？", a: "公式FAQに、退会後に復会する場合は復会料5,500円（税込）で再び利用できると記載されています。休会の場合は、休会期間が終わったあとの復会料は不要です（2026年11月17日確認）。" },
  { q: "どのような年齢の方が通っていますか？", a: "公式FAQに、店舗や時間帯により異なるものの、15歳から85歳までの会員が通っていると記載されています（2026年11月17日確認）。" },
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

const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "Nexusジム", href: "/review/nexus/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function FurdiReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "FURDI（ファディー）"}
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FURDI（ファディー）",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "ファディー（FURDI）の口コミ・評判｜月7,678円は46店舗中9店舗・店舗別の料金と解約金を検証",
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
        "dateModified": "2026-11-17"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "FURDI" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ファディー（FURDI）の口コミ・評判｜月7,678円は46店舗中9店舗・店舗別の料金と解約金を検証
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年11月17日（公式46店舗の店舗別の月会費・プライベート会員・FIT Searchの口コミ21件の内訳・検索上位記事の掲載値を追加）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="ファディーとは">
          <h2 className="font-bold text-gray-900 mb-3">ファディー（FURDI）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.about}>公式 料金と入会について</Src>・<Src href={SRC.faq}>公式FAQ</Src>・<Src href={SRC.terms}>会員利用規約（PDF）</Src>（{CHECKED}確認）、<Src href={SRC.studios}>公式店舗一覧</Src>と各店舗ページ・<Src href={SRC.fitsearch}>FIT Search</Src>（{CHECKED2}確認）。Googleマップの数値は当サイトの集計（2026年8月29日〜9月8日取得）です。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/furdi.jpg" alt="FURDI（ファディー）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">FURDI（ファディー） 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="furdi" name="FURDI" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">FURDIの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">FURDIの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">FURDIのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">FURDIが向いている方・向いていない方</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">FURDIの料金と解約時の総額</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">ファディーの口コミ・評判（出典別の件数）</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">口コミで多い疑問と公式情報の照合</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">FURDI（ファディー）の店舗一覧(都道府県別)</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">他のジムと比較</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">FURDIのよくある質問</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">FURDIが気になった方へ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="FURDI" />
        <BrandFactCheck slug="furdi" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FURDI の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          FURDI（ファディー）はAIマシンを使う<span className="font-bold bg-yellow-100 px-0.5">女性専用</span>のサーキット型ジムです。月額<span className="font-bold bg-yellow-100 px-0.5">7,678円</span>〜（税込・46店舗中36店舗は8,778円〜）で、店舗ページには<span className="font-bold bg-yellow-100 px-0.5">予約不要</span>・<span className="font-bold bg-yellow-100 px-0.5">通い放題</span>と記載されています。本記事では、公式サイトと会員規約で確認した料金・退会条件と、口コミの出典別の件数をご説明します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FURDIのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>{m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>{d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">FURDIが向いている方・向いていない方</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている方</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>運動初心者で気軽に始めたい女性</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>月額1万円以下の低価格で通い放題を希望する方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>予約なしで好きな時間に通いたい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>人目を気にせず自分のペースで運動したい方</li>
                <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">○</span>30分以内の短時間で効率よくトレーニングしたい方</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない方</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>男性（女性専用のため利用不可）</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>本格的な筋力トレーニング・筋肥大を目指す方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>トレーナーによる直接の対面指導を求める方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>フリーウェイトやバーベルを使ったトレーニングがしたい方</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>食事指導も含めた総合的なサポートが必要な方</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIの料金</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
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
          <p className="text-xs text-gray-500 mt-3">出典: <Src href={SRC.about}>公式 料金と入会について</Src>・<Src href={SRC.faq}>公式FAQ</Src>（{CHECKED}確認）・各店舗ページ（{CHECKED2}確認）。公式サイトには「一部店舗によって料金が異なります。料金は各店舗ページでご確認ください」と記載されています。</p>

          <h3 className="text-lg font-bold mt-8 mb-3">店舗別の月会費（公式46店舗の店舗ページを確認）</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            公式の「料金と入会について」とFAQでは、プレミアム会員を月7,678円、スタンダード会員を月8,778円と案内しています。当サイトで公式店舗一覧の46店舗すべての店舗ページを確認したところ、この金額の店舗は9店舗で、36店舗はそれぞれ1,100円高い金額でした（{CHECKED2}確認）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium">プレミアム会員</th>
                  <th className="px-3 py-2 text-left font-medium">スタンダード会員</th>
                  <th className="px-3 py-2 text-left font-medium">店舗数</th>
                  <th className="px-3 py-2 text-left font-medium">該当する店舗</th>
                </tr>
              </thead>
              <tbody>
                {storePriceRows.map((r) => (
                  <tr key={r.premium} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 font-medium text-gray-800 whitespace-nowrap">月{r.premium}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">月{r.standard}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{r.n}店舗</td>
                    <td className="px-3 py-2 text-gray-600 text-xs">{r.stores}（<Src href={r.src}>店舗ページ例</Src>）</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 税込。各店舗ページのFAQ欄「プレミアム会員とスタンダード会員の違いはなんですか？」に記載された金額を集計しました（当サイト調べ・{CHECKED2}確認）。キャンペーン期間中は割引される場合があります。料金は変更される場合があるため、通う店舗のページでご確認ください。</p>

          <h3 className="text-lg font-bold mt-8 mb-3">退会した時期別の支払総額（当サイト計算）</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「ファディー 解約金」で調べる方が多いため、入会時費用8,800円と月会費、プレミアム会員の契約解除料を合計した総額を試算しました。会員規約では、契約解除料は在籍期間中のスタンダード会員との差額と定められています。このため、1年未満で退会した場合の総額は、プレミアム会員とスタンダード会員で同じになります。どの店舗でも両会員の差額は月1,100円です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium">在籍期間</th>
                  <th className="px-3 py-2 text-left font-medium">36店舗：スタンダード（月9,878円）</th>
                  <th className="px-3 py-2 text-left font-medium">36店舗：プレミアム（月8,778円）</th>
                  <th className="px-3 py-2 text-left font-medium">9店舗：スタンダード（月8,778円）</th>
                  <th className="px-3 py-2 text-left font-medium">9店舗：プレミアム（月7,678円）</th>
                  <th className="px-3 py-2 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.months} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-medium text-gray-800">{r.months}</td>
                    <td className="px-3 py-2 text-gray-700">{r.standard36}</td>
                    <td className="px-3 py-2 text-gray-700">{r.premium36}</td>
                    <td className="px-3 py-2 text-gray-700">{r.standard}</td>
                    <td className="px-3 py-2 text-gray-700">{r.premium}</td>
                    <td className="px-3 py-2 text-gray-500 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 税込。日割りの入会月・入会キャンペーン月・休会月は計算に含めていません。京都北山店（月9,878円・10,978円）は、36店舗の列にそれぞれ月1,100円を加えた金額になります。キャンペーンの適用により実際の金額は変わります。出典: <Src href={SRC.terms}>会員利用規約 第6条・第11条</Src>（{CHECKED}確認）・各店舗ページ（{CHECKED2}確認）。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合わせたプランを提案します。</p>
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ファディーの口コミ・評判（出典別の件数）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは、ファディーの口コミが掲載されている主な媒体について、件数と点数を確認できたものだけを掲載しています。個別の投稿文は転載していません。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">出典</th>
                  <th className="px-4 py-3 text-left font-medium">件数</th>
                  <th className="px-4 py-3 text-left font-medium">点数</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map((r) => (
                  <tr key={r.source} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 text-gray-800">{r.source}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.count}</td>
                    <td className="px-4 py-3 text-gray-700">{r.score}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GmapStats slug="furdi" brand="FURDI（ファディー）" />
          <p className="text-xs text-gray-500 mt-3">
            ※Googleマップの評価は店舗単位の数値です。店舗ごとに運営者（運営会社または加盟店）やスタッフの在店時間が異なるため、通う予定の店舗の口コミを個別にご確認ください。<a href="https://www.google.com/maps/search/FURDI+%E3%83%95%E3%82%A1%E3%83%87%E3%82%A3%E3%83%BC/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップでファディーの口コミを見る</a>
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">検索上位の記事が掲載している口コミ件数・店舗数</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            「ファディー 口コミ」「ファディー 評判」で上位に表示される記事について、口コミの出典と店舗数の記載を確認しました（{CHECKED2}確認）。店舗数は記事により25店舗から82件まで差があり、公式店舗一覧の46店舗と一致する記事はありませんでした。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-3 py-2 text-left font-medium">記事</th>
                  <th className="px-3 py-2 text-left font-medium">口コミの出典・件数</th>
                  <th className="px-3 py-2 text-left font-medium">店舗数の記載</th>
                  <th className="px-3 py-2 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {serpRows.map((r) => (
                  <tr key={r.site} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 text-gray-800 whitespace-nowrap"><Src href={r.href}>{r.site}</Src></td>
                    <td className="px-3 py-2 text-gray-700">{r.reviews}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{r.store}</td>
                    <td className="px-3 py-2 text-gray-600 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">※ 各記事の記載内容をそのまま掲載しています。店舗数・料金は、<Src href={SRC.studios}>公式店舗一覧</Src>と各店舗ページでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミで多い疑問と公式情報の照合</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">「ファディー 評判」で調べる方が確認したい点について、公式サイトと会員規約の記載をまとめています（{CHECKED}確認・一部{CHECKED2}確認）。</p>
          <div className="space-y-4">
            {issueRows.map((r) => (
              <div key={r.issue} className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{r.issue}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{r.answer} <Src href={r.src}>出典</Src></p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 他のジムと比較 ---------- */}
        <section className="mb-12">
        <h2 id="s9" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">FURDI（ファディー）の店舗一覧(都道府県別)</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">公式の店舗一覧に掲載されている店舗は46店舗（22都道府県）です（{CHECKED}確認）。都道府県別の店舗数は次のとおりです。</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {studioCounts.map((c) => (
            <span key={c.pref} className="inline-block rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-700">{c.pref} {c.n}</span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-6">出典: <Src href={SRC.studios}>公式 店舗一覧</Src>。第三者サイトには「100店舗以上」などの記載がありますが、公式店舗一覧の掲載数とは一致しません。</p>
        <p className="text-xs text-gray-500 mb-4">以下は、当サイトの店舗データベースに収録した、Googleマップに掲載されている店舗です。店舗名のリンクはFURDI（ファディー）公式の無料カウンセリング予約ページ(提携リンク・PR)へ移動します。</p>
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">青森県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー青森浜田</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">山形県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー 山形南</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">茨城県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー水戸千波</a> <a key="1" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー水戸赤塚</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">栃木県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー宇都宮中今泉</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">山梨県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー バロー甲府昭和</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">京都府</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー京都北山</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">島根県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー松江東津田</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">岡山県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">ファディー岡山野田</a></div>
          </div>
        </div>

          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他のジムと比較</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">FURDIと他の人気ジムを比較しました。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-3 py-2 text-left font-medium">比較項目</th>
                  <th className="px-3 py-2 text-center font-medium bg-teal-600">FURDI</th>
                  <th className="px-3 py-2 text-center font-medium">Nexus</th>
                  <th className="px-3 py-2 text-center font-medium">カーブス</th>
                  <th className="px-3 py-2 text-center font-medium">エクササイズコーチ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">月額料金</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">7,678円〜</td>
                  <td className="px-3 py-2 text-center text-gray-700">月18,000円〜（マンツーマン30分×月4回）</td>
                  <td className="px-3 py-2 text-center text-gray-700">7,150円〜8,360円（税込・公式 2026年11月26日確認）</td>
                  <td className="px-3 py-2 text-center text-gray-700">9,900円〜</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">指導形式</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">AI×サーキット</td>
                  <td className="px-3 py-2 text-center text-gray-700">マンツーマン</td>
                  <td className="px-3 py-2 text-center text-gray-700">サーキット</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI×マンツーマン</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">1回の時間</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">30分</td>
                  <td className="px-3 py-2 text-center text-gray-700">30〜120分</td>
                  <td className="px-3 py-2 text-center text-gray-700">30分</td>
                  <td className="px-3 py-2 text-center text-gray-700">20分</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">予約</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">必要</td>
                  <td className="px-3 py-2 text-center text-gray-700">不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">必要</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">特徴</td>
                  <td className="px-3 py-2 text-center text-gray-700 bg-teal-50">AI×予約不要</td>
                  <td className="px-3 py-2 text-center text-gray-700">格安パーソナル</td>
                  <td className="px-3 py-2 text-center text-gray-700">女性専用</td>
                  <td className="px-3 py-2 text-center text-gray-700">AI効率特化</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は各公式サイトでご確認ください。</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/review/nexus/" className="text-xs text-teal-600 hover:underline">Nexusの口コミを見る →</Link>
            <Link href="/review/curves/" className="text-xs text-teal-600 hover:underline">カーブスの口コミを見る →</Link>
            <Link href="/review/exercise-coach/" className="text-xs text-teal-600 hover:underline">エクササイズコーチの口コミを見る →</Link>
          </div>
        </section>
      <GymCta slug="furdi" name="FURDI" />


        <section className="mb-12">
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">FURDIのよくある質問</h2>
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

        {/* バナー広告 */}
        <section className="mb-10">
          <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/F6058J.T101150Z.Q136169A" alt="FURDI" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s12" className="text-xl font-bold mb-3">FURDIが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">無料体験にて、AIを活用したサーキットトレーニングをご体験いただけます。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        <BrandStoreLinks brand="furdi" brandName="FURDI" />

        <section>
          <h2 id="s13" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
