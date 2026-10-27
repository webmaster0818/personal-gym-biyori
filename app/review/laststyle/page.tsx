import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";
import BrandStoreLinks from "@/components/BrandStoreLinks";

export const metadata: Metadata = {
  title: "Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ",
  description:
    "Lastyle（ラスタイル）の口コミ・評判を、Getfitの口コミ21件の内訳と公式情報で整理しました。スタンダード16回コースの総額238,700円（入会金込み・税込）、キャッシュバック適用後の試算、返金規定の対象外条件、池袋東口本店・新宿代々木店の掲載状況をまとめています。",
};

/*
 * 2026-10-27 改訂: 料金・店舗・返金・キャッシュバック・営業時間・運営会社は公式サイト（トップ・/ikebukuro/・/shinjuku/・/gym/・/company/）を2026-10-27に確認した値。
 * コース料金は公式の画像（スタンダード16回コース・1回60分・1回12,000円／税込13,200円・入会金25,000円／税込27,500円）を読み取った。
 * 10/14時点の「12回158,400円」「20回264,000円」は公式に記載がないため削除（第三者記事の旧データが由来とみられる）。
 * 「管理栄養士監修」「女性トレーナーが対応する場合も」は公式に記載がないため削除。
 * 口コミは Getfit 池袋東口本店ページ（21件）の内訳とテーマを当サイトが確認したもの（本文は転載しない）。
 */
const CHECKED = "2026年10月27日";

const SRC = {
  top: "https://www.last-style.com/",
  ikebukuro: "https://www.last-style.com/ikebukuro/",
  shinjuku: "https://www.last-style.com/shinjuku/",
  gym: "https://www.last-style.com/gym/",
  company: "https://www.last-style.com/company/",
  getfit: "https://getfit.jp/shop/lastyle-ikebukuro",
};

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-700">
      {children}
    </a>
  );
}

const summary = [
  { label: "どんなジムか", value: "株式会社ラスタイル（東京都豊島区）が運営するパーソナルジムです。筋力トレーニングにボクシングと有酸素運動を組み合わせた1回60分のセッションを、担当トレーナーが入会から終了まで指導します。ボクシングを含まないコースも用意されています。" },
  { label: "店舗", value: "公式の店舗一覧に掲載されているのは池袋東口本店（豊島区東池袋）の1店舗です。このほか「新宿・代々木店」（渋谷区代々木）の店舗ページが公開されていますが、店舗一覧には掲載されていません。" },
  { label: "料金", value: "スタンダード16回コースは1回13,200円（税込）で、16回211,200円です。入会金はキャンペーン価格27,500円（税込・通常55,000円）のため、入会金込みの総額は238,700円です（当サイト計算）。" },
  { label: "返金・特典", value: "全コースに30日以内の返金規定がありますが、2%以上減量した場合などは対象外です。2ヶ月で1kg減るごとに1万円（16回コース・上限10万円）が戻るキャッシュバック制度があります。" },
  { label: "向いている方", value: "単調な筋力トレーニングだけでは続かない方、池袋・代々木周辺に通える方に向いています。休会・退会の規定は公式サイトに記載がないため、長期の中断が想定される方は契約前に書面での確認をおすすめします。" },
  { label: "口コミ", value: "Getfitの池袋東口本店ページは21件・平均4.6です。うち15件が利用者の投稿、6件がジム提供の口コミです。トレーナーの対応と清潔さを評価する声が多く、人気時間帯の予約の取りにくさが主な指摘です。" },
];

const basicInfo = [
  { label: "ジム名", value: "パーソナルジム ラスタイル（Lastyle）" },
  { label: "運営会社", value: "株式会社ラスタイル（東京都豊島区東池袋3-1-1 サンシャイン60 11階）。設立年・資本金は公式サイトに記載なし" },
  { label: "店舗", value: "池袋東口本店（豊島区東池袋1-23-13 第一岡村ビル 2階・地下1階）／新宿・代々木店（渋谷区代々木1-31-17 麻緒ビル3F・店舗ページのみ公開）" },
  { label: "営業時間", value: "平日9:00〜22:30（最終受付21:00）、土日祝10:00〜20:30（最終受付19:00）" },
  { label: "1回の時間", value: "60分" },
  { label: "プログラム", value: "ダイエット（筋力トレーニング・ボクシング・有酸素運動）、ボディメイク、ウェディング、産後ダイエット" },
  { label: "支払い方法", value: "銀行振込・クレジットカード" },
];

const strengths = [
  {
    title: "筋力トレーニング・ボクシング・有酸素運動を1回60分で組み合わせる",
    desc: "公式サイトでは、ダイエットコースの内容を筋力トレーニング、ボクシング、有酸素運動の組み合わせと説明しています。ボクシングに抵抗がある方向けに、ボクシングを含まないコースも用意されています。",
  },
  {
    title: "担当トレーナーが入会から終了まで指導",
    desc: "公式サイトには、トレーナーは正社員で国際資格の保有者がほとんどであり、同じトレーナーが最初から最後まで担当すると記載されています。代表トレーナーは大手パーソナルジムでの勤務経験とNESTA-PFTなどの資格を公表しています。",
  },
  {
    title: "食事はLINEで毎日報告し、セッション時に指導",
    desc: "食事内容を毎日LINEでトレーナーに報告し、セッション時に指導を受ける方式です。公式サイトでは、極端な制限は行わず、量を減らすことよりも食事のバランスを重視する方針と説明しています。",
  },
];

const merits = [
  {
    title: "キャッシュバックで実質負担が下がる",
    desc: "2ヶ月で1kg減るごとに、16回コースは10,000円（上限10万円）、8回コースは5,000円（上限5万円）が銀行振込で戻ります。16回コースで10kg以上減量した場合、入会金込み238,700円の実質負担は138,700円です（当サイト試算・税込）。",
  },
  {
    title: "平日は22時30分まで営業",
    desc: "池袋東口本店・新宿代々木店とも、平日は9:00〜22:30（最終受付21:00）の営業です。仕事帰りに通う方でも時間を確保しやすい営業時間です。",
  },
  {
    title: "体験トレーニングが無料",
    desc: "カウンセリングと体験トレーニングを合わせた60分の体験は、通常8,800円（税込）のところ無料です。カウンセリングのみ（60分）の申し込みもできます。予約はLINEまたはフォームから行います。",
  },
];

const demerits = [
  {
    title: "通える店舗が限られる",
    desc: "公式の店舗一覧に掲載されているのは池袋東口本店のみで、店舗ページが確認できるのは新宿・代々木店を含めて2店舗です。池袋・代々木から離れた地域にお住まいの方は通いにくい立地です。",
  },
  {
    title: "返金規定の対象外条件が多い",
    desc: "返金はセッション開始日から30日以内に来店・書面で申請する必要があります。いずれかのセッションで2%以上減量していた場合、当日キャンセル・遅刻が2回以上ある場合、食事報告を3日以上しなかった場合、自己都合で退会した場合は対象外です。",
  },
  {
    title: "休会・退会・中途解約の規定が公開されていない",
    desc: "公式サイトには返金規定のほかに、休会・退会・中途解約の手続きや精算方法の記載がありません（2026年10月27日確認）。特定商取引法に基づく表記のページも確認できませんでした。契約前に書面で確認されることをおすすめします。",
  },
];

const cashbackRows = [
  { loss: "1kg", back: 10000 },
  { loss: "3kg", back: 30000 },
  { loss: "5kg", back: 50000 },
  { loss: "10kg以上", back: 100000 },
];
const COURSE16 = 211200;
const ENTRY = 27500;
const yen = (n: number) => `${n.toLocaleString()}円`;

const getfitThemes = {
  good: [
    "トレーナーの人柄・声かけ、体調に合わせたメニュー調整",
    "筋力トレーニングとボクシングを組み合わせた内容",
    "LINEでの食事のフィードバック",
    "個室の清潔さ、他の利用者と顔を合わせにくい点",
    "駅からの近さ",
  ],
  bad: [
    "人気の時間帯は予約が取りにくい",
    "建物が古い、入口がわかりにくい、トイレが室外にある",
    "食事指導をより詳しく受けたかった",
    "成果に対して料金が高いと感じた（主に古い投稿）",
  ],
};

const faqItems = [
  { q: "Lastyleの料金はいくらですか？", a: "公式サイトの料金表（画像）に掲載されているのはスタンダード16回コースで、1回60分・1回13,200円（税込）です。16回で211,200円、入会金27,500円（キャンペーン価格・税込）を含めると238,700円です。8回コースもありますが、料金は公式サイトに記載がありません（2026年10月27日確認）。" },
  { q: "入会金はいくらですか？", a: "通常50,000円（税抜・税込55,000円）、キャンペーン価格で25,000円（税抜・税込27,500円）です。入会金が無料になる旨の記載は公式サイトにありません。" },
  { q: "返金保証の条件を教えてください。", a: "全コースが対象で、セッション開始日から30日以内に来店し、所定の書面で申請します（電話・FAX・メール不可）。いずれかのセッションで初回から2%以上減量していた場合、当日キャンセル・遅刻が2回以上の場合、プログラムや食事指導を守らなかった場合、食事報告が3日以上なかった場合、自己都合退会の場合は対象外です。物品とメンテナンスコースも対象外です。" },
  { q: "キャッシュバックはどのように受け取りますか？", a: "最低購入額133,100円以上のコースが対象です。初回セッションから2ヶ月後のセッションまでに1kg以上減量した場合、1kgごとに16回コースは10,000円（上限10万円）、8回コースは5,000円（上限5万円）が銀行振込で支払われます。申し込みは入会申込書で行います。" },
  { q: "ボクシング未経験でも通えますか？", a: "公式サイトではボクシング経験を入会条件としていません。ボクシングを含まないコースも用意されているため、体験時に内容をご確認ください。" },
  { q: "食事指導は管理栄養士が担当しますか？", a: "公式サイトに管理栄養士の記載はありません。食事は毎日LINEで担当トレーナーに報告し、セッション時に指導を受ける方式です。代表トレーナーは栄養コンシェルジュ一ツ星の資格を公表しています。" },
  { q: "女性トレーナーは在籍していますか？", a: "公式サイトにトレーナーの性別に関する記載はありません。希望がある場合は、体験予約の際に店舗へご確認ください。" },
  { q: "休会や退会はできますか？", a: "公式サイトに休会・退会・中途解約の規定は記載されていません（2026年10月27日確認）。返金規定に「自己都合退会は返金対象外」とあるのみです。契約前に、中途解約時の精算方法を書面でご確認ください。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function LastyleReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ",
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
        "dateModified": "2026-10-27"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Lastyle" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Lastyle（ラスタイル）の口コミ・評判｜料金・返金条件・悪い口コミ
        </h1>
        <p className="text-gray-500 text-sm mb-4">最終更新: 2026年10月27日（料金・店舗・返金規定・キャッシュバック・営業時間を公式サイトで再確認し、口コミの出典と件数を確認）</p>

        <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-6" aria-label="Lastyleとは">
          <h2 className="font-bold text-gray-900 mb-3">Lastyle（ラスタイル）とは：要点のまとめ</h2>
          <dl className="space-y-2 text-sm">
            {summary.map((r) => (
              <div key={r.label} className="sm:flex sm:gap-3">
                <dt className="font-bold text-gray-800 sm:w-24 shrink-0">{r.label}</dt>
                <dd className="text-gray-700 leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-3">
            出典: <Src href={SRC.top}>公式サイト（料金表・返金規定・キャッシュバック）</Src>・<Src href={SRC.gym}>公式店舗一覧</Src>・<Src href={SRC.shinjuku}>新宿・代々木店ページ</Src>・<Src href={SRC.company}>会社概要</Src>・<Src href={SRC.getfit}>Getfit 池袋東口本店</Src>（いずれも{CHECKED}確認）。料金・条件は変更される場合があります。
          </p>
        </section>

        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/laststyle.jpg" alt="Lastyleの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Lastyle 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <GymCta slug="laststyle" name="Lastyle" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Lastyleの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Lastyleの3つの特徴</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Lastyleのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Lastyleの料金とキャッシュバック適用後の試算</a></li>
            <li><a href="#s5b" className="text-teal-600 hover:underline">返金規定と対象外になる条件</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Lastyleの口コミ・評判（出典別の件数）</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Lastyleのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Lastyleが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Lastyle" />
        <BrandFactCheck slug="laststyle" />
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Lastyle の公式サイトはこちら
          </a>
        </p>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの基本情報</h2>
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
          <p className="text-xs text-gray-500 mt-3">
            店舗数について、公式のシニア向けページには「東京・大阪に4店舗」との記載がありますが、店舗一覧とサイトマップに掲載されているのは池袋東口本店のみです。第三者の記事に掲載されている荻窪・阿佐ヶ谷店、町田店などのページは、公式サイト上で確認できませんでした（{CHECKED}確認）。出典: <Src href={SRC.gym}>公式店舗一覧</Src>・<Src href={SRC.ikebukuro}>池袋東口本店</Src>・<Src href={SRC.shinjuku}>新宿・代々木店</Src>・<Src href={SRC.company}>会社概要</Src>。
          </p>
        </section>

        {/* 3つの特徴 */}
        <section className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの3つの特徴</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Lastyleのメリット・デメリット</h2>
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
          <p className="text-xs text-gray-500 mt-4">出典: <Src href={SRC.top}>公式サイト</Src>・<Src href={SRC.gym}>公式店舗一覧</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 料金 */}
        <section className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの料金とキャッシュバック適用後の試算</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に、池袋東口本店と新宿・代々木店のページに掲載されている料金表（画像）を確認しました。両店舗とも同じ内容です。料金表に掲載されているのはスタンダード16回コースのみのため、総額は1回単価から当サイトで計算しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">税抜</th>
                  <th className="px-4 py-3 text-left font-medium">税込</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">スタンダード16回コース 1回単価</td><td className="px-4 py-3 text-gray-700">12,000円</td><td className="px-4 py-3 text-gray-700">13,200円</td><td className="px-4 py-3 text-gray-500 text-xs">1回60分（公式の料金表）</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">16回のコース料金</td><td className="px-4 py-3 text-gray-700">192,000円</td><td className="px-4 py-3 text-gray-700">211,200円</td><td className="px-4 py-3 text-gray-500 text-xs">当サイト計算（1回単価×16回）</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">入会金</td><td className="px-4 py-3 text-gray-700">25,000円</td><td className="px-4 py-3 text-gray-700">27,500円</td><td className="px-4 py-3 text-gray-500 text-xs">キャンペーン価格（通常50,000円・税込55,000円）</td></tr>
                <tr className="border-b border-gray-100 bg-teal-50"><td className="px-4 py-3 font-bold text-gray-800">入会金込みの総額</td><td className="px-4 py-3 font-bold text-gray-800">217,000円</td><td className="px-4 py-3 font-bold text-gray-800">238,700円</td><td className="px-4 py-3 text-gray-500 text-xs">当サイト計算</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">8回コース</td><td className="px-4 py-3 text-gray-700" colSpan={2}>公式に記載なし</td><td className="px-4 py-3 text-gray-500 text-xs">キャッシュバックの説明に8回コースの記載あり</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-800 mt-6 mb-2">16回コースのキャッシュバック適用後の実質負担（当サイト試算・税込）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-2 text-left font-medium">2ヶ月の減量幅</th>
                  <th className="px-4 py-2 text-left font-medium">キャッシュバック</th>
                  <th className="px-4 py-2 text-left font-medium">実質負担（入会金込み）</th>
                </tr>
              </thead>
              <tbody>
                {cashbackRows.map((r) => (
                  <tr key={r.loss} className="border-b border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{r.loss}</td>
                    <td className="px-4 py-2 text-gray-700">{yen(r.back)}</td>
                    <td className="px-4 py-2 text-gray-700">{yen(COURSE16 + ENTRY - r.back)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700 mt-3 mb-3">
            <li>・公式の料金表に記載されている「キャッシュバック最高額適用時 117,000円」は、税抜の総額217,000円から上限の10万円を差し引いた金額です。</li>
            <li>・減量幅は初回セッションと2ヶ月後のセッションの計測値で判定されます。1kg未満の減量ではキャッシュバックは発生しません。</li>
            <li>・いずれかのセッションで初回から2%以上減量すると、返金規定の対象外になります（下記「返金規定」参照）。</li>
            <li>・第三者の記事やGetfitには「90分」「12回158,400円」「入会金30,000円」などの料金が掲載されていますが、{CHECKED}時点の公式表記（1回60分・16回コース）とは一致しません。</li>
          </ul>
          <p className="text-xs text-gray-500">出典: <Src href={SRC.ikebukuro}>公式 池袋東口本店ページ 料金表</Src>・<Src href={SRC.top}>公式サイト キャッシュバック</Src>（{CHECKED}確認）。キャンペーン等により変わる場合があります。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">トレーナーが目的に合わせたプランを提案します。</p>
            <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* 返金規定 */}
        <section className="mb-12">
          <h2 id="s5b" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの返金規定と対象外になる条件</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">対象</th><td className="px-4 py-3 text-gray-800">全コース（物品・メンテナンスコースは対象外）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">期限</th><td className="px-4 py-3 text-gray-800">セッション開始日から30日以内（休業日の場合は翌営業日）</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">手続き</th><td className="px-4 py-3 text-gray-800">来店のうえ所定の書面で申請。電話・FAX・メールでは受け付けていません。返金後は退会扱いとなり、施設を利用できません</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">対象外</th><td className="px-4 py-3 text-gray-800">自己都合退会／いずれかのセッションで初回から2%以上の減量／当日キャンセル・遅刻が2回以上／プログラム・食事指導を守らなかった場合／食事報告が3日以上ない場合</td></tr>
                <tr className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">休会・中途解約</th><td className="px-4 py-3 text-gray-800">公式に記載なし</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            体重70kgの方の場合、2%は1.4kgにあたります（当サイト計算）。申請期限の30日以内に1.4kg以上減った時点で返金の対象外となるため、当サイトでは「指導内容を守っても成果が出なかった場合に限る制度」と理解したうえで契約されることをおすすめします。
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.top}>公式サイト 返金について</Src>（{CHECKED}確認）。</p>
        </section>

        {/* 口コミ */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleの口コミ・評判（出典別の件数）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは{CHECKED}に、パーソナルジム検索サイトGetfitの池袋東口本店ページに掲載されている口コミを確認し、件数の内訳と、複数の投稿に共通するテーマを整理しました。個別の投稿文は転載していません。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">出典</th>
                  <th className="px-4 py-3 text-left font-medium">件数</th>
                  <th className="px-4 py-3 text-left font-medium">平均</th>
                  <th className="px-4 py-3 text-left font-medium">内訳</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-800"><Src href={SRC.getfit}>Getfit 池袋東口本店</Src></td><td className="px-4 py-3 text-gray-700">21件</td><td className="px-4 py-3 text-gray-700">4.6</td><td className="px-4 py-3 text-gray-700 text-xs">Getfit利用者の投稿15件（項目別評価あり）／ジム提供の口コミ6件</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-800">みん評</td><td className="px-4 py-3 text-gray-700" colSpan={3}>当サイトからページを閲覧できなかったため、件数・点数は掲載していません</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-bold text-emerald-800 text-sm mb-2">評価されている点</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {getfitThemes.good.map((t) => <li key={t}>・{t}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h3 className="font-bold text-rose-800 text-sm mb-2">指摘されている点</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {getfitThemes.bad.map((t) => <li key={t}>・{t}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ジム提供の口コミはジム側が掲載を依頼したものであり、利用者が自発的に投稿したものとは性質が異なります。Getfitの店舗情報には「1回90分」の料金が掲載されていますが、公式サイトの現行の表記は1回60分です。投稿時期によって料金体系が異なる可能性があるため、料金に関する口コミは公式の料金表と照らし合わせてお読みください。
          </p>
        </section>

        {/* FAQ */}
      <GymCta slug="laststyle" name="Lastyle" />

        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Lastyleのよくある質問</h2>
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">Lastyleが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">無料体験にて、ボクシングを取り入れたパーソナルトレーニングをご体験いただけます。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        {/* 関連ジム */}
        <BrandStoreLinks brand="laststyle" brandName="Lastyle" />
        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
