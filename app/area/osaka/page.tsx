import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム大阪おすすめ8選",
  description:
    "大阪でおすすめのパーソナルジム8選を厳選紹介。梅田・心斎橋・なんばエリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "大阪";

const selectionPoints = [
  {
    title: "梅田・心斎橋・なんばエリアを中心に探す",
    desc: "大阪のパーソナルジムは梅田・心斎橋・なんばエリアに集中しています。通勤・通学の動線上にあるジムを選ぶと継続しやすくなります。御堂筋線沿線は特にジムの選択肢が豊富です。",
  },
  {
    title: "東京より相場がやや安い傾向を活かす",
    desc: "大阪のパーソナルジムは東京と比べて料金がやや抑えめの傾向にあります。同じ大手チェーンでも、東京より安いプランを用意している場合があるため、公式サイトで地域ごとの料金を確認しましょう。",
  },
  {
    title: "体験・カウンセリングで雰囲気を確かめる",
    desc: "大阪のジムはアットホームな雰囲気の店舗が多い傾向がありますが、実際の相性は通ってみないとわかりません。無料カウンセリングや体験トレーニングを活用して、トレーナーとの相性を確認しましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "18万〜38万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜7万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "心斎橋・高槻・堺東の3店舗", "手ぶらで通える"],
    access: "心斎橋店（心斎橋駅徒歩3分）、高槻店、堺東店",
    point: "低価格で始められ、手ぶらで通えるためジム初心者に人気。大阪府内に3店舗展開しています。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "梅田店・なんば店・京橋店・天王寺店・堺東店ほか",
    point: "大阪府内に複数店舗を展開。確実に結果を出したい方に選ばれています。",
    reviewed: true,
    storeHref: "/review/rizap/umeda/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "梅田店・心斎橋店・難波店・堺東店ほか",
    point: "深夜まで営業しているため、仕事が遅くなりがちな方にも通いやすい環境です。",
    reviewed: true,
    storeHref: "/review/247workout/namba/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "心斎橋店・梅田店・天王寺店・京橋店",
    point: "トレーナーの質に定評があり、本格的なボディメイクを目指す方に支持されています。",
    reviewed: true,
    storeHref: "/review/beyond/umeda/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間トレーニング", "月額9,900円〜の低価格", "予約不要"],
    access: "梅田店・心斎橋店・なんば店・天王寺店ほか",
    point: "1回20分で完了するため、忙しいビジネスパーソンに特に人気があります。",
    reviewed: true,
  },
  {
    name: "パーソナルジムFURDI（ファディー）",
    price: "月7,678円〜",
    features: ["AI搭載マシンで効率的トレーニング", "女性専用ジム", "月額7,678円〜の低価格", "全店舗駅チカ"],
    access: "心斎橋店・天王寺店・京橋店ほか",
    point: "女性専用の低価格パーソナルジム。AI技術を活用した効率的なトレーニングが特徴です。",
    reviewed: false,
  },
  {
    name: "Reborn myself（リボーンマイセルフ）",
    price: "204,600円〜（2ヶ月コース）",
    features: ["女性専用パーソナルジム", "女性トレーナーのみ在籍", "部分痩せプログラムあり", "託児付き店舗あり"],
    access: "梅田店（梅田駅徒歩5分）",
    point: "女性トレーナーのみの女性専用ジム。女性の体に特化したプログラムが好評です。",
    reviewed: false,
  },
  {
    name: "PALMS（パームス）",
    price: "月29,800円〜（月4回）",
    features: ["おしゃれなカフェ併設店舗", "月額29,800円〜の通いやすい価格", "トレーニング後にプロテインスムージー提供", "完全個室"],
    access: "心斎橋店・梅田店",
    point: "カフェ併設のおしゃれな空間でトレーニングできる。関西発のパーソナルジムです。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "大阪のパーソナルジムの料金相場はいくらですか？", a: "大阪のパーソナルジムの料金相場は、2ヶ月コースで18万〜38万円程度です。月額制では月1万〜7万円が目安で、東京に比べてやや安い傾向にあります。" },
  { q: "大阪で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。チキンジムは低価格で手ぶら通いが可能、エクササイズコーチは1回20分の短時間トレーニングで無理なく始められます。" },
  { q: "梅田エリアでおすすめのパーソナルジムは？", a: "梅田エリアにはRIZAP、24/7ワークアウト、BEYOND、エクササイズコーチなど大手ジムが集結しています。アクセスの良さと選択肢の多さが魅力です。" },
  { q: "大阪で女性におすすめのパーソナルジムは？", a: "女性専用のリボーンマイセルフやFURDI（ファディー）がおすすめです。女性トレーナーによる指導や、女性の体に特化したプログラムが受けられます。" },
  { q: "大阪のパーソナルジムで安いところは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）、FURDI（月7,678円〜）が低価格帯です。" },
  { q: "パーソナルジムとフィットネスジムの違いは何ですか？", a: "パーソナルジムは専属トレーナーがマンツーマンで指導するジムです。フィットネスジムは自分で器具を使ってトレーニングする施設です。パーソナルジムは料金が高い分、個別指導で効率的に結果を出しやすいメリットがあります。" },
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

const relatedAreas = [
  { name: "京都", href: "/area/kyoto/" },
  { name: "神戸", href: "/area/kobe/" },
  { name: "名古屋", href: "/area/nagoya/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function OsakaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          【2026最新】パーソナルジム大阪おすすめ8選
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          大阪は東京に次ぐパーソナルジム激戦区で、梅田・心斎橋・なんばを中心に多数のジムが出店しています。大手チェーンから関西発の個性派ジムまで選択肢が豊富で、東京と比べて料金がやや抑えめな傾向にあるのも魅力です。本記事では、料金・実績・アクセスの観点から厳選した8ジムを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-medium">料金目安</th>
                </tr>
              </thead>
              <tbody>
                {priceRange.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.category}</td>
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は目安です。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム8選</h2>
          <div className="space-y-6">
            {gyms.map((gym, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{i + 1}. {gym.name}</h3>
                  {gym.reviewed && (
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">レビュー済</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">月額料金: <span className="font-medium text-gray-800">{gym.price}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  {gym.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-teal-500 shrink-0 mt-0.5">--</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-2">アクセス: {gym.access}</p>
                <div className="bg-gray-50 rounded p-3 mt-3">
                  <p className="text-sm text-gray-700"><span className="font-medium text-teal-700">おすすめポイント:</span> {gym.point}</p>
                </div>
                {gym.storeHref && <Link href={gym.storeHref} className="inline-block text-sm text-orange-500 hover:underline mt-3">店舗の詳細を見る →</Link>}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 料金・店舗情報は2026年4月時点の公開情報に基づきます。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジムに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">当サイトのランキングページで、目的別・料金別にジムを比較できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (
              <Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
