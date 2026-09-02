import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "パーソナルジムの口コミ・評点 全国統計【32都市1,878店を実測】評点4.8以上が85.7%という現実",
  description:
    "全国32都市のパーソナルジム1,878店をGoogleマップで実測(2026年8月29日取得・9月2日集計)した独自統計。評点4.8以上が85.7%・満点5.0が52.8%を占め「評点では選べない」実態、口コミ件数の中央値29件、大手チェーンの店舗数・平均評点の差まで、実数データで公開します。",
};

const top10 = [
  { city: "仙台", name: "ATTivoGYM仙台アエル31", reviews: 717, rating: 4.8 },
  { city: "福岡", name: "VISION24 福岡天神店", reviews: 688, rating: 4.8 },
  { city: "さいたま", name: "パーソナルジム&8 浦和店", reviews: 618, rating: 4.8 },
  { city: "大阪", name: "SPACE GYM 心斎橋店", reviews: 572, rating: 4.9 },
  { city: "池袋", name: "PEAK'S GYM（ピークジム）池袋店", reviews: 520, rating: 4.9 },
  { city: "新宿", name: "GYMS 新宿店", reviews: 514, rating: 4.5 },
  { city: "京都", name: "STANCE FITNESS 2ND 京都四条大宮店 24時間ジム/パーソナル", reviews: 500, rating: 4.9 },
  { city: "千葉", name: "FIT PLACE24 千葉中央店", reviews: 496, rating: 4.8 },
  { city: "和歌山", name: "ビーフィットネスJR和歌山駅前店", reviews: 488, rating: 4.7 },
  { city: "鹿児島", name: "パーソナルキック！FIGHT CLUB鹿児島中央駅前店", reviews: 482, rating: 4.9 },
];

const brandRows = [
  { brand: "BEYOND", stores: 45, avg: "4.93" },
  { brand: "24/7Workout", stores: 24, avg: "4.67" },
  { brand: "RIZAP(ライザップ)", stores: 22, avg: "4.47" },
  { brand: "エクササイズコーチ", stores: 11, avg: "4.79" },
  { brand: "かたぎり塾", stores: 10, avg: "4.98" },
  { brand: "Dr.トレーニング", stores: 7, avg: "4.91" },
  { brand: "ビーコンセプト", stores: 6, avg: "4.88" },
  { brand: "OUTLINE(アウトライン)", stores: 5, avg: "4.86" },
];

const faqs = [
  {
    q: "この統計はどうやって作っていますか？",
    a: "当サイトが公開している32都市のパーソナルジム全店データベース(Googleマップ実測・2026年8月29日一斉取得)の1,878店を、2026年9月2日に集計したものです。評点・口コミ件数は取得時点のGoogleマップ表示値で、当サイトによる評価や推定は含みません。",
  },
  {
    q: "評点4.8以上が85.7%なら、評点は見なくていいのですか？",
    a: "評点の絶対値だけでは差がつかない、というのが実測から言える結論です(満点5.0だけで52.8%)。一方で口コミ件数は中央値29件に対して300件以上がわずか2.1%と大きく差がつくため、「件数の多さ×通いやすさ×料金体系」で絞る方が実用的です。評点が4.5を下回る店は全体の中では少数派なので、その場合は口コミの内容まで読むことをおすすめします。",
  },
  {
    q: "大手チェーンの評点が低めなのはなぜですか？",
    a: "店舗数が多いチェーンほど口コミの母数が増え、評価が厳しめに収れんする傾向があります(実測ではRIZAP平均4.47・24/7Workout平均4.67など)。これはサービスの優劣を直接示すものではなく、少人数の常連が高評価を付けやすい個人店との構造差も影響します。数値は2026年8月29日取得時点の実測平均です。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function DbStatsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <p className="text-xs text-gray-400"><Link href="/db/" className="underline">全店データベース</Link> &gt; 全国統計</p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">パーソナルジムの口コミ・評点 全国統計【32都市1,878店を実測】</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        当サイトの<Link href="/db/" className="underline text-blue-700">32都市・全店データベース</Link>(Googleマップ実測・2026年8月29日一斉取得)に収録した1,878店を集計した独自統計です。
        「評点4.9だから良い店」という選び方がなぜ機能しないのか、実数でわかります。数値は全て実測値で、推定・創作はありません。
      </p>

      <h2 className="mt-10 text-lg font-bold">1. 評点は「ほぼ全店が高評価」で差がつかない</h2>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border border-gray-200 p-4"><p className="text-2xl font-bold text-blue-700">85.7%</p><p className="mt-1 text-xs text-gray-500">評点4.8以上</p></div>
        <div className="rounded-lg border border-gray-200 p-4"><p className="text-2xl font-bold text-blue-700">76.1%</p><p className="mt-1 text-xs text-gray-500">評点4.9以上</p></div>
        <div className="rounded-lg border border-gray-200 p-4"><p className="text-2xl font-bold text-blue-700">52.8%</p><p className="mt-1 text-xs text-gray-500">満点5.0</p></div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        評点が判明している1,823店のうち、半数以上が満点5.0でした。パーソナルジムは担当トレーナーとの関係が近く、高評価に偏りやすい業態です。
        つまり「評点4.9」はこの業界では平均的な数字であり、評点の絶対値でジムの優劣は判断できません。
      </p>

      <h2 className="mt-10 text-lg font-bold">2. 差がつくのは「口コミ件数」</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm border border-gray-200">
          <tbody>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium w-1/2">口コミ件数の中央値</th><td className="px-3 py-2">29件</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">平均</th><td className="px-3 py-2">56.8件</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">10件未満の店</th><td className="px-3 py-2">24.7%</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">100件以上の店</th><td className="px-3 py-2">17.0%</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">300件以上の店</th><td className="px-3 py-2">2.1%(38店のみ)</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        評点と違い、口コミ件数は店舗間で大きく差がつきます。300件を超える店は全国でも38店(2.1%)しかなく、「多くの人が長く通って評価を残している」ことの希少なシグナルです。
      </p>

      <h2 className="mt-10 text-lg font-bold">3. 都市別・口コミ最多店ランキング</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm border border-gray-200">
          <thead><tr className="bg-gray-50 text-left"><th className="px-3 py-2 font-medium">#</th><th className="px-3 py-2 font-medium">都市</th><th className="px-3 py-2 font-medium">店名</th><th className="px-3 py-2 font-medium whitespace-nowrap">口コミ</th><th className="px-3 py-2 font-medium whitespace-nowrap">評点</th></tr></thead>
          <tbody>
            {top10.map((t, i) => (
              <tr key={t.city} className="border-t border-gray-200"><td className="px-3 py-2 text-gray-400">{i + 1}</td><td className="px-3 py-2">{t.city}</td><td className="px-3 py-2">{t.name}</td><td className="px-3 py-2">{t.reviews.toLocaleString()}件</td><td className="px-3 py-2">{t.rating}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-lg font-bold">4. 大手チェーンの店舗数と平均評点(収録分)</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm border border-gray-200">
          <thead><tr className="bg-gray-50 text-left"><th className="px-3 py-2 font-medium">チェーン</th><th className="px-3 py-2 font-medium whitespace-nowrap">収録店舗数</th><th className="px-3 py-2 font-medium whitespace-nowrap">平均評点</th></tr></thead>
          <tbody>
            {brandRows.map((b) => (
              <tr key={b.brand} className="border-t border-gray-200"><td className="px-3 py-2">{b.brand}</td><td className="px-3 py-2">{b.stores}店</td><td className="px-3 py-2">{b.avg}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">※当サイトDB収録分(32都市)のみの集計で、実際の全店舗数とは異なります。店名へのブランド名表記を基に機械集計しています。</p>

      <h2 className="mt-10 text-lg font-bold">よくある質問</h2>
      <div className="mt-3 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border border-gray-200">
            <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{f.q}</summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm">
        <Link href="/db/" className="underline text-blue-700">→ 32都市の全店データベース</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/" className="underline text-blue-700">→ パーソナルジムの比較へ</Link>
      </p>
    </main>
  );
}
