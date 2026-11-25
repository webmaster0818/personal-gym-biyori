import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "THE PERSONAL GYMの口コミ・評判｜料金・メリット・デメリットの解説",
  description:
    "THE PERSONAL GYM（ザ パーソナルジム）の口コミ・評判をご紹介します。ダイエット×ボディメイク特化の料金体系、メリット・デメリットについて解説します。",
};

const basicInfo = [
  { label: "ジム名", value: "THE PERSONAL GYM（ザ パーソナルジム）" },
  { label: "タイプ", value: "ダイエット×ボディメイク特化パーソナルジム" },
  { label: "料金帯", value: "月額コース 月2回17,600円〜／回数券10回88,000円〜（税込・公式料金ページ・2026年11月25日確認）" },
  { label: "エリア", value: "全国50店舗以上（東京・大阪・名古屋・福岡ほか）" },
  { label: "特徴", value: "ダイエット特化 / ボディメイク / 低価格 / 食事指導付き / 完全個室" },
];

const strengths = [
  {
    title: "ダイエットとボディメイクに特化",
    desc: "体重減量だけでなく、理想的なボディラインを作ることにこだわったプログラムを設計しています。見た目の変化を重視したトレーニングメニューで、効率的にボディメイクを進められます。",
  },
  {
    title: "月額コース・回数券・食事管理付きコースから選べる",
    desc: "公式の料金ページでは、月額コース（月2回17,600円〜）、回数券（10回88,000円〜）、食事管理付きのボディメイクコンサルコース（2ヶ月16回281,600円〜）の3種類が案内されています（いずれも税込・2026年11月25日確認）。回数券の40回券は1回あたり7,150円です。",
  },
  {
    title: "資格や競技経験を持つトレーナーが在籍",
    desc: "公式サイトのよくある質問では、国家資格や国内難関資格の保持者、ボディメイク大会での優勝経験者、トップスポーツチームへの帯同経験者、元医療従事者などのトレーナーが在籍していると案内されています（2026年11月23日確認）。在籍するトレーナーは店舗により異なります。",
  },
];

const merits = [
  {
    title: "低価格で本格的なパーソナルトレーニング",
    desc: "公式の料金ページでは、月額コースは月2回17,600円（税込）から案内されています（2026年11月25日確認）。通う回数を抑えて始めたい方も検討しやすい料金体系です。",
  },
  {
    title: "マンツーマンでメニューを作成",
    desc: "公式サイトでは、身体の状態や運動経験、目標をもとにトレーナーが一人ひとりのトレーニングメニューを作成すると案内されています（2026年11月23日確認）。",
  },
  {
    title: "食事指導で生活習慣も改善",
    desc: "トレーニングと合わせて食事指導が受けられるため、ダイエットに必要な食生活の改善も同時に進められます。",
  },
];

const demerits = [
  {
    title: "地域によっては店舗がない",
    desc: "公式サイトでは全国の店舗が案内されていますが、すべての地域に店舗があるわけではありません。通える範囲に店舗があるか、公式の店舗一覧でご確認ください。",
  },
  {
    title: "知名度が大手に比べて低い",
    desc: "大手チェーンと比較すると情報が少なく、事前のリサーチがしにくい場合があります。",
  },
];

const pricingPlans = [
  { name: "入会金", duration: "−", price: "無料", note: "公式サイトのよくある質問で「現在、入会金は無料」と案内" },
  { name: "月額コース 月2回", duration: "約60分/回", price: "月額17,600円", note: "" },
  { name: "月額コース 月4回", duration: "約60分/回", price: "月額33,000円", note: "" },
  { name: "月額コース 月6回", duration: "約60分/回", price: "月額47,850円", note: "" },
  { name: "月額コース 月8回", duration: "約60分/回", price: "月額61,600円", note: "" },
  { name: "回数券 10回", duration: "約60分/回", price: "88,000円", note: "" },
  { name: "回数券 20回", duration: "約60分/回", price: "165,000円", note: "" },
  { name: "回数券 30回", duration: "約60分/回", price: "231,000円", note: "" },
  { name: "回数券 40回", duration: "約60分/回", price: "286,000円", note: "1回あたり7,150円" },
  { name: "ボディメイクコンサル 2ヶ月16回", duration: "約60分/回", price: "281,600円", note: "食事管理付き" },
  { name: "ボディメイクコンサル 3ヶ月24回", duration: "約60分/回", price: "408,000円", note: "食事管理付き" },
  { name: "ボディメイクコンサル 6ヶ月48回", duration: "約60分/回", price: "720,000円", note: "食事管理付き" },
];

const reviewSummary = "THE PERSONAL GYMの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";

const faqItems = [
  { q: "THE PERSONAL GYMの入会金はいくらですか？", a: "公式サイトのよくある質問では「現在、入会金は無料でご案内しております」と案内されています（2026年11月25日確認）。最新情報は公式サイトでご確認ください。" },
  { q: "ダイエット目的でも通えますか？", a: "はい、ダイエット目的でも利用できます。体重減量からボディメイクまで幅広い目的に対応しています。" },
  { q: "食事指導は受けられますか？", a: "公式サイトでは、ボディメイクコンサルコースで初回の食事案の提示に加え、毎日チャットで食事内容をやりとりすると案内されています（2026年11月25日確認）。" },
  { q: "レンタルはありますか？", a: "ウェアやタオルのレンタルが用意されています。手ぶらで通える環境です。" },
  { q: "女性トレーナーはいますか？", a: "公式サイトのよくある質問では「女性トレーナーが在籍している店舗もございます」と案内されています（2026年11月23日確認）。全店舗に在籍しているわけではないため、希望する場合は予約時に店舗へお伝えください。" },
  { q: "無料体験はありますか？", a: "公式サイトでは、カウンセリング・体験料金11,000円分が無料と案内されています。体験は約90分（カウンセリング約30分・体験トレーニング約40分・フィードバック約20分）です（2026年11月25日確認）。" },
  { q: "退会に違約金はかかりますか？", a: "公式サイトのよくある質問では、休会・解約の手続き方法や期限は契約時に説明すると案内されています（2026年11月25日確認）。違約金の有無は契約時にご確認ください。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ACCEPT", href: "/review/accept/" },
  { name: "Nexusジム", href: "/review/nexus/" },
];

export default function ThePersonalGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "THE PERSONAL GYM" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          THE PERSONAL GYMの口コミ・評判｜料金・メリット・デメリットの解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月25日</p>
        <GymCta slug="the-personal-gym" name="THE PERSONAL GYM" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">THE PERSONAL GYMの基本情報</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">THE PERSONAL GYMの3つの強み</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">THE PERSONAL GYMのメリット・デメリット</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">THE PERSONAL GYMの料金</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">THE PERSONAL GYMの口コミについて</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">THE PERSONAL GYMのよくある質問</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">THE PERSONAL GYMが気になった方へ</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="THE PERSONAL GYM" />

        <p className="text-gray-700 leading-relaxed mb-10">
          THE PERSONAL GYM（ザ パーソナルジム）はダイエットとボディメイクに特化したパーソナルジムです。月額<span className="font-bold bg-yellow-100 px-0.5">17,600円</span>〜（月2回・税込）の料金で、マンツーマンのパーソナルトレーニングが受けられます。本記事では、THE PERSONAL GYMの料金体系、メリット・デメリットを詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 id="s2" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの基本情報</h2>
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
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">トレーナーに関する記載の出典: <a href="https://the-personal-gym.com/" target="_blank" rel="noopener noreferrer" className="underline">THE PERSONAL GYM 公式サイト（トップページ・よくある質問）</a>（2026年11月23日確認）</p>
        </section>

        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMのメリット・デメリット</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 金額はすべて税込です。1回のトレーニング時間は公式のよくある質問で「約60分」と案内されています。公式サイトでは、代表・店長が担当する場合は価格が異なると案内されています。出典: <a href="https://the-personal-gym.com/price/" target="_blank" rel="noopener noreferrer" className="underline">THE PERSONAL GYM 公式サイト 料金・コース一覧</a>・<a href="https://the-personal-gym.com/" target="_blank" rel="noopener noreferrer" className="underline">公式トップページ（よくある質問）</a>（2026年11月25日確認）。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
        </section>
      <GymCta slug="the-personal-gym" name="THE PERSONAL GYM" />


        <section className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">THE PERSONAL GYMのよくある質問</h2>
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

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s8" className="text-xl font-bold mb-3">THE PERSONAL GYMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ご自身に合ったボディメイクプランをご相談ください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

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
