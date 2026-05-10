import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Apple GYM（アップルジム）の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Apple GYM（アップルジム）の口コミ・評判を徹底解説。海外式ボディメイク・姿勢改善・食事指導付きの特徴から、月額24,200円〜の料金体系、メリット・デメリット、Googleマップの口コミ分析まで網羅。",
};

/* ---------- affiliate ---------- */
const AFF_URL = "https://t.felmat.net/fmcl?ak=E45324.1.T82347J.A132329L";
const BANNER_URL = "https://t.felmat.net/fmimg/E45324.T82347J.A132329L";

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社Apple GYM Japan" },
  { label: "店舗数", value: "東京・神奈川を中心に69店舗以上（2026年5月時点）" },
  { label: "営業時間", value: "7:00〜23:00（店舗により異なる）" },
  { label: "特徴", value: "海外式ボディメイク / 姿勢改善 / 食事指導付き / 完全個室 / 駅チカ" },
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
    desc: "トレーニングの土台として姿勢改善を重視している点がApple GYMの大きな特徴です。猫背や反り腰といった姿勢の問題を根本から改善し、その上でボディメイクを行うことで、見た目の変化が大きくなります。姿勢が良くなるだけでも印象が大きく変わると評判です。",
  },
  {
    title: "全プラン食事指導付き",
    desc: "Apple GYMでは全プランに食事指導が含まれています。トレーニングだけでなく食事管理もセットで行うことで、効率的な体づくりが可能です。過度な食事制限ではなく、日常生活に取り入れやすい食事改善を提案してくれるため、プログラム終了後も自分で管理できる知識が身につきます。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "月額24,200円〜とリーズナブルな料金設定",
    desc: "パーソナルジムの中では比較的リーズナブルな月額24,200円〜（月4回）から始められます。食事指導込みでこの価格帯は業界でもコスパが高い部類です。初めてパーソナルジムに通う方にも手が届きやすい価格で、高額な一括払いのプレッシャーなく始められるのが魅力です。",
  },
  {
    title: "完全個室で人目を気にせずトレーニング",
    desc: "全店舗完全個室の環境が用意されています。他の利用者の目を気にすることなく、トレーナーとマンツーマンでトレーニングに集中できます。運動に自信がない方や、周りの視線が気になる方でも安心して通える環境です。",
  },
  {
    title: "駅チカで通いやすい立地",
    desc: "東京・神奈川を中心に69店舗以上を展開しており、ほとんどの店舗が最寄駅から徒歩5分以内に位置しています。仕事帰りや買い物のついでに立ち寄りやすく、継続のハードルを下げる工夫がされています。忙しい方でも時間を有効に使えます。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "展開エリアが東京・神奈川に集中",
    desc: "69店舗以上を展開していますが、その大半が東京都内と神奈川県に集中しています。地方在住の方や、大阪・名古屋・福岡などの大都市圏にお住まいの方は利用が難しい状況です。今後のエリア拡大に期待したいところです。",
  },
  {
    title: "トレーナーの指名ができない場合がある",
    desc: "店舗や時間帯によっては、希望のトレーナーを指名できないケースがあります。担当トレーナーが毎回変わる可能性があるため、一貫した指導を求める方にとっては不満に感じることがあるかもしれません。入会前にトレーナーの指名制度について確認することをおすすめします。",
  },
  {
    title: "上級者には物足りない可能性",
    desc: "海外式ボディメイクや姿勢改善に重点を置いたプログラムのため、すでにトレーニング経験が豊富な上級者にとっては物足りなさを感じる場合があります。ハードなウェイトトレーニングや、コンテスト出場レベルの追い込みを求める方は他のジムも比較検討しましょう。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "月4回プラン", duration: "月4回", price: "24,200円/月", note: "税込" },
  { name: "月8回プラン", duration: "月8回", price: "44,000円/月", note: "税込" },
  { name: "月12回プラン", duration: "月12回", price: "63,360円/月", note: "税込" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "Apple GYMに入会金はかかりますか？", a: "入会金は33,000円（税込）です。ただしキャンペーン期間中は入会金無料になる場合があります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい、Apple GYMは初心者の方にも多く選ばれています。海外式ボディメイクメソッドは基礎から丁寧に指導されるため、運動経験がゼロの方でも安心して始められます。" },
  { q: "食事制限は厳しいですか？", a: "過度な食事制限は行いません。日常生活に取り入れやすい食事改善を提案しており、食事を楽しみながら体づくりができます。全プランに食事指導が含まれています。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回あたり約45分のトレーニングです。着替え・準備を含めると約60分を見込んでください。" },
  { q: "女性でも通いやすい環境ですか？", a: "はい、完全個室のため人目を気にせずトレーニングできます。女性の利用者も多く、ボディラインの改善や姿勢矯正を目的に通う女性に支持されています。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリングが用意されています。カウンセリングでは目標のヒアリングやトレーニングの説明を受けられます。公式サイトから予約可能です。" },
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
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Apple GYM（アップルジム）" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Apple GYM（アップルジム）の口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Apple GYM（アップルジム）の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Apple GYM（アップルジム）は東京・神奈川を中心に69店舗以上を展開する<span className="font-bold bg-yellow-100 px-0.5">海外式ボディメイクパーソナルジム</span>です。海外のボディメイクメソッドを日本人の体型に合わせてカスタマイズした独自のトレーニングが特徴で、姿勢改善をベースとしたアプローチで美しいボディラインを作り上げます。全プラン食事指導付き、完全個室、月額24,200円〜というリーズナブルな価格設定が魅力です。本記事では、Apple GYMの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの概要</h2>
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Apple GYMのメリット・デメリット</h2>

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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの料金</h2>
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
            ※ 料金は税込です。入会金は別途33,000円（税込）。キャンペーンにより変動する場合があります。最新の料金は公式サイトでご確認ください。
          </p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">海外式ボディメイクであなたの理想のカラダを目指しましょう</p>
            <a href={AFF_URL} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMのよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Apple GYMの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Apple GYMは東京・神奈川を中心に69店舗以上を展開しています（2026年5月時点）。以下は主要エリアの店舗一覧です。
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

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Apple GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、海外式ボディメイクを体感してみましょう。
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
