import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GymCta from "@/components/GymCta";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "かたぎり塾の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "かたぎり塾の口コミ・評判を実測データで解説。月4プラン月額税込〜33,000円(2026年9月14日公式確認)の完全個室パーソナルジム。当サイト49都市実測で収録13店の評点は全店4.9〜5.0・口コミ計513件。料金体系と注意点も公式一次情報のみでまとめます。",
};

const SURVEY_DATE = "2026年9月14日";

const basicInfo = [
  { label: "ジム名", value: "かたぎり塾" },
  { label: "タイプ", value: "完全個室パーソナルトレーニングジム" },
  { label: "料金帯", value: "月4プラン 月額税込〜33,000円 / 月8プラン 税込59,400円(公式・店舗により異なる)" },
  { label: "エリア", value: "全国に多店舗展開(店舗ごとの所在地は公式の店舗検索で確認可)" },
  { label: "特徴", value: "完全個室 / 月額制 / ペアプランあり / LINE食事サポート(オプション)" },
];

const pricingPlans = [
  { name: "月4プラン", price: "月額 〜30,000円(税込 〜33,000円)", note: "60分あたり 〜7,500円(税込 〜8,250円)" },
  { name: "月8プラン", price: "月額 54,000円(税込 59,400円)", note: "60分あたり 6,750円(税込 7,425円)" },
  { name: "ペア月4プラン", price: "月額 〜45,000円(税込 〜49,500円)", note: "1人あたり60分 〜5,625円" },
  { name: "LINE食事サポート(2週間)", price: "10,000円(税込 11,000円)", note: "オプション" },
];

const strengths = [
  {
    title: "月額制で総額が読みやすい",
    desc: "2ヶ月◯十万円の集中コース型ではなく、月4回・月8回の月額制が基本。60分あたり税込8,250円以下(月4プラン)と、パーソナルジムの中では続けやすい価格帯です(2026年9月14日公式確認)。",
  },
  {
    title: "当サイト実測で評点が全店4.9〜5.0",
    desc: "当サイトの49都市・約2,800店の実測データに収録されたかたぎり塾13店は、Googleマップ評点が全店4.9〜5.0でした(口コミ計513件・最多は牛込柳町店の105件)。評点4.8以上が多数を占める業界ですが、店舗間のばらつきが小さいのが特徴です。",
  },
  {
    title: "完全個室+ペアプラン",
    desc: "完全個室でのマンツーマン指導が基本で、家族・友人と一緒に通えるペアプランも公式に用意されています。1人あたりの単価を抑えたい方に向きます。",
  },
];

const demerits = [
  {
    title: "入会金・料金が店舗により異なる",
    desc: "公式サイトに「入会金は店舗により異なります」「料金は店舗ごとに異なります」と明記されています。上記は公式トップの表記で、通いたい店舗ページでの確認が必須です。",
  },
  {
    title: "食事指導は標準では付かない",
    desc: "LINE食事サポートは2週間税込11,000円のオプションです。食事指導込みの集中コース型ジムとは構成が異なるため、食事管理を重視する方は総額で比較してください。",
  },
  {
    title: "週2回以上だと月額は相応に",
    desc: "月8プランは税込59,400円。低価格イメージの月4プランと頻度を増やした場合の月額は別物なので、通う頻度を先に決めてから比較するのがおすすめです。",
  },
];

const faqItems = [
  { q: "かたぎり塾の料金はいくらですか？", a: "公式サイト(2026年9月14日確認)では、月4プランが月額税込〜33,000円、月8プランが税込59,400円、ペア月4プランが税込〜49,500円です。料金・入会金は店舗により異なると明記されているため、入会希望店舗のページでの確認が必要です。" },
  { q: "かたぎり塾の入会金はいくらですか？", a: "公式サイトでは「入会金は店舗により異なります」とされています。無料体験トレーニング後の当日入会で入会金割引(税込22,000円〜・割引額は店舗ごと)の案内があります(2026年9月14日確認)。" },
  { q: "かたぎり塾の口コミ評価は実際どうですか？", a: "当サイトが49都市の実測で収録したかたぎり塾13店は、Googleマップ評点が全店4.9〜5.0・口コミ計513件でした(取得日は各都市ページに明記)。評点は高評価が集まりやすい業界のため、件数と口コミ本文もあわせて確認するのがおすすめです。" },
  { q: "食事指導はありますか？", a: "LINE食事サポート(2週間・税込11,000円)がオプションとして公式に用意されています。標準プランには含まれません。" },
  { q: "無料体験はありますか？", a: "無料体験トレーニングが公式に案内されています。体験後の当日入会で入会金割引の案内もあります(2026年9月14日確認)。" },
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "かたぎり塾の口コミ・評判｜料金・メリット・デメリットを徹底解説",
  dateModified: "2026-09-14",
  author: { "@type": "Organization", name: "パーソナルジムびより編集部", url: "https://personal-gym-biyori.com/about/" },
  publisher: { "@type": "Organization", name: "パーソナルジムびより" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://personal-gym-biyori.com/review/katagiri/" },
};

const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "ASPI", href: "/review/aspi/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "BEYOND", href: "/review/beyond/" },
];

export default function KatagiriReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "かたぎり塾" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">かたぎり塾の口コミ・評判｜料金・メリット・デメリットを徹底解説</h1>
        <p className="text-sm text-gray-500 mb-8">公式サイトの一次情報({SURVEY_DATE}確認)と、当サイトの49都市実測データのみでまとめています。口コミの創作はありません。</p>

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">基本情報</h2>
        <table className="w-full text-sm border border-gray-200 mb-10">
          <tbody>
            {basicInfo.map((r) => (
              <tr key={r.label} className="border-b border-gray-100">
                <th className="bg-gray-50 px-4 py-3 text-left w-28 align-top font-medium">{r.label}</th>
                <td className="px-4 py-3">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">料金プラン({SURVEY_DATE}公式確認)</h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full min-w-[520px] text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-3 py-2 font-medium">プラン</th>
                <th className="px-3 py-2 font-medium">料金</th>
                <th className="px-3 py-2 font-medium">備考</th>
              </tr>
            </thead>
            <tbody>
              {pricingPlans.map((p) => (
                <tr key={p.name} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-medium">{p.name}</td>
                  <td className="px-3 py-2">{p.price}</td>
                  <td className="px-3 py-2 text-gray-600">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-10">※公式サイトトップの表記({SURVEY_DATE}時点)。「料金・入会金は店舗により異なります」と公式に明記されているため、実際の金額は入会希望店舗のページでご確認ください。</p>

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">当サイト実測データで見るかたぎり塾</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            { num: "13店", label: "当サイトDB収録(49都市実測)" },
            { num: "4.9〜5.0", label: "収録店の評点(全店)" },
            { num: "513件", label: "収録店の口コミ合計" },
            { num: "105件", label: "最多口コミ(牛込柳町店)" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-xl font-extrabold text-teal-600">{s.num}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-10">※当サイトの都市別データベース(Googleマップ実測・取得日は各都市ページに明記)に収録された「かたぎり塾」該当店舗の集計です。全店舗数ではありません。</p>

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">かたぎり塾の強み</h2>
        <div className="space-y-4 mb-10">
          {strengths.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-sm mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">知っておきたい点</h2>
        <div className="space-y-4 mb-10">
          {demerits.map((s) => (
            <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-sm mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <GymCta slug="katagiri" name="かたぎり塾" />

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">よくある質問</h2>
        <div className="space-y-3 mb-10">
          {faqItems.map((f, i) => (
            <details key={i} className="border border-gray-200 rounded-lg px-4 py-3">
              <summary className="cursor-pointer text-sm font-bold">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <AuthorBox />

        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">他のジムのレビューも見る</h2>
        <div className="flex flex-wrap gap-3">
          {relatedReviews.map((r) => (
            <Link key={r.href} href={r.href} className="text-sm text-teal-600 underline hover:text-teal-700">{r.name}</Link>
          ))}
        </div>
      </div>
    </>
  );
}
