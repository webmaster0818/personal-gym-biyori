import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BrandFactCheck from "@/components/BrandFactCheck";
import GmapStats from "@/components/GmapStats";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "Apple GYM（アップルジム）の口コミ・評判｜料金・返金の注意点を検証",
  description:
    "Apple GYM（アップルジム）の口コミ・評判をご紹介します。海外式ボディメイク・姿勢改善の特徴、月額9,900円〜（個別指導 月4回）の料金と返金・食事指導オプションの注意点、メリット・デメリット、Googleマップの口コミ分析を掲載しています。",
};

/* ---------- affiliate ---------- */
const AFF_URL = "https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L";
const BANNER_URL = "https://t.felmat.net/fmimg/E45324.T82347J.A132329L";

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "販売業者", value: "株式会社REXIV（公式の特定商取引法の表記）" },
  { label: "店舗数", value: "東京52・神奈川14の66店舗（2026年10月 公式トップの店舗一覧）" },
  { label: "営業時間", value: "9:00〜21:25（一部店舗は7:00〜23:05）※公式FAQ" },
  { label: "特徴", value: "海外式ボディメイク / 姿勢改善 / 月会費制 / 食事指導はオプション / 駅近 / シャワーなし" },
  { label: "公式URL", value: "https://applegym.jp/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "海外式ボディメイクメソッド",
    desc: "Apple GYMは海外のボディメイクメソッドを取り入れた独自のトレーニングを提供しています。日本人の骨格や生活習慣に合わせてカスタマイズされた海外式プログラムにより、単に痩せるだけではなく、姿勢から美しいボディラインを作り上げることを目指します。モデルや芸能人にも支持されるトレーニング法です。",
  },
  {
    title: "姿勢改善に特化したアプローチ",
    desc: "トレーニングの土台として姿勢改善を重視している点がApple GYMの大きな特徴です。猫背や反り腰といった姿勢の問題を根本から改善し、その上でボディメイクを行うことで、見た目の変化が大きくなります。姿勢が良くなるだけでも印象が大きく変わると評価されています。",
  },
  {
    title: "少ない回数・月会費制で始められる",
    desc: "料金は月4回・8回・12回から選ぶ月会費制です（有効期限は1ヶ月）。食事指導は任意のオプションで、申し込むと公式LINEで食べた物を報告し、その日のうちにフィードバックを受けられます（公式FAQ）。過度な食事制限はしない方針です。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "月額9,900円〜（個別指導 月4回）の手頃な料金設定",
    desc: "パーソナルジムの中では比較的手頃な月額9,900円（個別指導 月4回・税込）から始められます（完全マンツーマンのプレミアムは月4回14,850円）。食事指導は別料金のオプションで、共用設備費330円が毎月かかります。初めてパーソナルジムに通う方にも手が届きやすい価格で、高額な一括払いをせずに始められる点が特長です。",
  },
  {
    title: "1対1か2名同時かを選べる",
    desc: "「個別指導」は最大2名（同性ペア）を同時に指導する形式で、1対1の完全マンツーマンは「プレミアム」です。どちらもセッション内容・トレーニング効果は同じと公式サイトに記載されています。人目が気になる方はプレミアムを選ぶか、店舗の部屋の作りを体験で確認してください。",
  },
  {
    title: "駅に近く通いやすい立地",
    desc: "東京・神奈川で66店舗（公式トップの一覧）を展開しており、ほとんどの店舗が最寄駅から徒歩5分以内に位置しています。仕事帰りや買い物のついでに立ち寄りやすく、継続のハードルを下げる工夫がされています。忙しい方でも時間を有効に使えます。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "展開エリアが東京・神奈川に集中",
    desc: "66店舗（公式一覧）を展開していますが、すべてが東京都内と神奈川県に集中しています。地方在住の方や、大阪・名古屋・福岡などの大都市圏にお住まいの方は利用が難しい状況です。",
  },
  {
    title: "トレーナーの指名ができない場合がある",
    desc: "店舗や時間帯によっては、希望のトレーナーを指名できないケースがあります。担当トレーナーが毎回変わる可能性があるため、一貫した指導を求める方には、不満に感じられる場合があります。入会前にトレーナーの指名制度について確認することをおすすめします。",
  },
  {
    title: "上級者には物足りない可能性がある",
    desc: "海外式ボディメイクや姿勢改善に重点を置いたプログラムのため、すでにトレーニング経験が豊富な上級者にとっては物足りなさを感じる場合があります。ハードなウェイトトレーニングや、コンテスト出場レベルの追い込みを求める方は、他のジムとの比較検討をおすすめします。",
  },
];

/* ---------- 料金プラン ---------- */
// 2026-10-14: 公式サイト掲載値（data/brand-prices.ts・2026-10-08実査）に差し替え
const pricingPlans = [
  { name: "個別指導 月4回", duration: "月4回", price: "9,900円/月", note: "税込" },
  { name: "個別指導 月8回", duration: "月8回", price: "19,800円/月", note: "税込" },
  { name: "個別指導 月12回", duration: "月12回", price: "29,700円/月", note: "税込" },
  { name: "プレミアム（完全マンツーマン）月4回", duration: "月4回", price: "14,850円/月", note: "税込" },
  { name: "プレミアム 月8回", duration: "月8回", price: "29,700円/月", note: "税込" },
  { name: "プレミアム 月12回", duration: "月12回", price: "44,550円/月", note: "税込" },
  { name: "入会金", duration: "—", price: "44,000円", note: "税込・キャンペーン時33,000円。別途共用設備費330円" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "Apple GYMに入会金はかかりますか？", a: "入会金は通常44,000円（税込）、キャンペーン時33,000円です（公式料金ページ）。キャンペーン内容は時期により異なり、入会金無料になる場合があります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、Apple GYMは初心者の方にも多く選ばれています。海外式ボディメイクメソッドは基礎から丁寧に指導されるため、運動経験のない方も始めやすい内容です。" },
  { q: "食事制限は厳しい内容ですか？", a: "過度な食事制限は行わず、三大栄養素をバランスよく取る方針です（公式FAQ）。食事指導は任意のオプション（別料金）で、料金プランには含まれていません。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "公式の料金ページ・FAQにはセッション時間の記載がありません（無料体験は40分と記載）。シャワーはないため、セッション時間に加えて着替えの時間をお見込みください。" },
  { q: "女性でも通いやすい環境ですか？", a: "公式FAQでは、女性トレーナーは店舗によって在籍しているとされています。「個別指導」は最大2名を同時に指導する形式（必ず同性ペア）のため、1対1を希望する方はプレミアムをお選びください。更衣室は全店舗にありますが、シャワーはありません。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料体験（40分）があり、公式サイトのWEB予約かLINEで申し込めます。その場で入会しなくてもよいと公式FAQに記載されています。問い合わせはLINEのみ（電話なし）です。" },
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
  { region: "東京", stores: [{ name: "新宿店", href: "/review/apple-gym/shinjuku/" }, { name: "渋谷店", href: "/review/apple-gym/shibuya/" }, { name: "池袋店", href: "/review/apple-gym/ikebukuro/" }, { name: "銀座店", href: "/review/apple-gym/ginza/" }, { name: "恵比寿店", href: "/review/apple-gym/ebisu/" }, { name: "中目黒店", href: "/review/apple-gym/nakameguro/" }, { name: "吉祥寺店", href: "/review/apple-gym/kichijoji/" }, { name: "町田店", href: "/review/apple-gym/machida/" }, { name: "二子玉川店" }, { name: "自由が丘店" }, { name: "蒲田店" }, { name: "練馬店" }, { name: "赤羽店" }, { name: "荻窪店" }, { name: "北千住店" }, { name: "錦糸町店" }, { name: "上野店" }, { name: "秋葉原店" }, { name: "六本木店" }, { name: "表参道店" }, { name: "五反田店" }, { name: "大井町店" }, { name: "三軒茶屋店" }, { name: "下北沢店" }] },
  { region: "神奈川", stores: [{ name: "横浜店", href: "/review/apple-gym/yokohama/" }, { name: "川崎店", href: "/review/apple-gym/kawasaki/" }, { name: "武蔵小杉店" }, { name: "藤沢店" }, { name: "戸塚店" }, { name: "溝の口店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "Apple GYMの基本情報" },
  { id: "overview", label: "Apple GYMの概要" },
  { id: "merit-demerit", label: "Apple GYMのメリット・デメリット" },
  { id: "pricing", label: "Apple GYMの料金" },
  { id: "faq", label: "Apple GYMのよくある質問" },
  { id: "stores", label: "Apple GYMの店舗一覧" },
];

export default function AppleGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Apple GYM（アップルジム）の口コミ・評判｜料金・返金の注意点を検証",
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
        "dateModified": "2026-10-14"
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Apple GYM（アップルジム）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Apple GYM（アップルジム）の口コミ・評判｜料金・返金の注意点を検証
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/apple-gym.jpg" alt="Apple GYM（アップルジム）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Apple GYM（アップルジム） 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月14日（料金・店舗・返金条件を公式サイトで再確認）</p>
        <GymCta slug="apple-gym" name="Apple GYM（アップルジム）" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Apple GYMの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">Apple GYMの概要</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Apple GYMのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Apple GYMの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Apple GYMのよくある質問</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Apple GYMの店舗一覧</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Apple GYMが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">Apple GYM（アップルジム）の店舗一覧(都道府県別)</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Apple GYM（アップルジム）" />
        <BrandFactCheck slug="apple-gym" />
        <GmapStats slug="apple-gym" brand="Apple GYM（アップルジム）" />
        <p className="text-sm mb-6">
          <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Apple GYM（アップルジム）の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Apple GYM（アップルジム）は東京・神奈川で66店舗を展開する<span className="font-bold bg-yellow-100 px-0.5">海外式ボディメイクパーソナルジム</span>です。海外のボディメイクメソッドを日本人の体型に合わせてカスタマイズした独自のトレーニングが特徴で、姿勢改善をベースとしたアプローチで美しいボディラインを作り上げます。月額9,900円〜（個別指導 月4回）の月会費制で、食事指導は別料金のオプション、シャワーはありません。本記事では、Apple GYMの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
        </p>

        {/* ---------- 目次 ---------- */}
        

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの概要</h2>
          <h3 className="text-lg font-bold mb-4">Apple GYMの3つの強み</h3>
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
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Apple GYMのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">Apple GYMのメリット</h3>
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

          <h3 className="text-lg font-bold mb-4 text-red-700">Apple GYMのデメリット</h3>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Apple GYMの料金は月額制で設定されています。以下は代表的なプランの一覧です。キャンペーンにより入会金が無料になる場合もあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">回数</th>
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
            ※ 料金は税込です。入会金は別途、通常44,000円（キャンペーン時33,000円）と共用設備費330円がかかります。キャンペーンにより変動する場合があります。最新の料金は公式サイトでご確認ください。
          </p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">無料カウンセリングのご案内</p>
            <p className="text-orange-100 text-sm mb-4">海外式ボディメイクで、目標とする体づくりを始められます</p>
            <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="apple-gym" name="Apple GYM（アップルジム）" />

        <section id="faq" className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMのよくある質問</h2>
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
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Apple GYMは東京・神奈川で66店舗を展開しています（2026年10月 公式トップの一覧）。以下は主要エリアの店舗一覧です。
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
                          {i > 0 && ", "}
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
            ※ 店舗情報は2026年5月時点のものです。最新の店舗情報は公式サイトでご確認ください。
          </p>
        </section>

        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow">
            <img src={BANNER_URL} alt="Apple GYM（アップルジム）" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        {/* ---------- Author Box ---------- */}
        

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">Apple GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、海外式ボディメイクの内容をご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <section>
          <h2 id="s9" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
        <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Apple GYM（アップルジム）の店舗一覧(都道府県別)</h2>
        <p className="text-xs text-gray-500 mb-4">当サイトの店舗データベースに収録した、Googleマップに掲載されている店舗です。店舗名のリンクはApple GYM（アップルジム）公式の無料カウンセリング予約ページ(提携リンク・PR)へ移動します。</p>
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">東京都</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">Apple GYM（アップルジム）新宿店</a> <a key="1" href="https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">Apple GYM（アップルジム）池袋店</a></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-sm text-gray-800 mb-2">神奈川県</h3>
            <div><a key="0" href="https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">Apple GYM</a> <a key="1" href="https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full border border-orange-200 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 mr-2 mb-2">Apple GYM（アップルジム）川崎店</a></div>
          </div>
        </div>

      </div>
    </>
  );
}
