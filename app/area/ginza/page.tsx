import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム銀座おすすめ6選",
  description:
    "銀座でおすすめのパーソナルジム6選を厳選紹介。銀座・有楽町・東銀座エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "銀座";

const selectionPoints = [
  {
    title: "銀座ならではの高品質なサービスを活かす",
    desc: "銀座エリアのパーソナルジムは、内装やサービスの質が高い傾向にあります。高級感のある空間でトレーニングしたい方や、ラグジュアリーな体験を重視する方に向いたエリアです。",
  },
  {
    title: "有楽町・東銀座も含めて探す",
    desc: "銀座駅だけでなく、有楽町駅・東銀座駅・新橋駅からもアクセスできるジムが多数あります。利用する路線に合わせて最寄りのジムを選ぶと通いやすくなります。",
  },
  {
    title: "仕事帰りの通いやすさを重視する",
    desc: "銀座はオフィス街に近いため、仕事帰りに通う方が多いエリアです。手ぶらで通えるジムやシャワー完備の施設を選ぶと、仕事帰りでもストレスなく通えます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "22万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月4万〜10万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "銀座店（銀座駅徒歩3分）",
    point: "銀座の一等地に立地。ラグジュアリーな空間で確実に結果を出したい方に。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜まで営業", "全額返金保証あり"],
    access: "銀座店（銀座駅徒歩3分）",
    point: "銀座で食事を楽しみながらダイエットしたい方に。3食食べるメソッドが人気です。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "銀座店（銀座駅徒歩5分）",
    point: "入会金無料。銀座で質の高いボディメイクトレーニングを受けたい方に。",
    reviewed: true,
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "銀座店（銀座駅徒歩3分）",
    point: "銀座で最も手軽に始められるパーソナルジム。ランチ休憩中にトレーニングする方も。",
    reviewed: true,
  },
  {
    name: "Reborn myself（リボーンマイセルフ）",
    price: "204,600円〜（2ヶ月コース）",
    features: ["女性専用パーソナルジム", "女性トレーナーのみ在籍", "部分痩せプログラムあり", "完全個室"],
    access: "東京店（有楽町駅徒歩5分）",
    point: "女性トレーナーのみの女性専用ジム。銀座・有楽町エリアの女性に人気です。",
    reviewed: false,
  },
  {
    name: "CREBIQ（クレビック）",
    price: "149,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "フィットネスフィギュアチャンピオン監修", "完全個室", "食事管理サポート付き"],
    access: "銀座店（銀座駅徒歩3分）",
    point: "フィットネス大会チャンピオンが監修する女性専用ジム。美ボディを目指す方に。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "銀座のパーソナルジムの料金相場はいくらですか？", a: "銀座のパーソナルジムの料金相場は、2ヶ月コースで22万〜40万円です。銀座エリアは全体的にやや高めの傾向がありますが、エクササイズコーチなど低価格のジムもあります。" },
  { q: "銀座で初心者におすすめのパーソナルジムは？", a: "エクササイズコーチが初心者に最適です。1回20分と短時間で、月9,900円〜と低価格。予約不要なのも始めやすいポイントです。" },
  { q: "銀座で女性におすすめのパーソナルジムは？", a: "リボーンマイセルフやCREBIQ（クレビック）は女性専用ジムで安心して通えます。女性トレーナーによる指導を希望する方に最適です。" },
  { q: "銀座のパーソナルジムは高いですか？", a: "大手ジムは全国統一料金のため、銀座だから高いということはありません。ただし、銀座特有の高級志向ジムは10万円/月を超えるところもあります。" },
  { q: "有楽町から通えるパーソナルジムはありますか？", a: "はい、銀座と有楽町は徒歩圏内のため、銀座エリアのジムはほぼすべて有楽町からも通えます。" },
  { q: "パーソナルジムの入会に必要なものは？", a: "一般的に身分証明書、支払い用のクレジットカードまたは口座情報が必要です。体験当日に入会する場合は持参しておくとスムーズです。" },
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
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function GinzaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム銀座おすすめ6選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          銀座は東京を代表する高級エリアであり、パーソナルジムも質の高いサービスを提供する店舗が多いのが特徴です。大手チェーンから女性専用ジムまで揃っており、有楽町・新橋からもアクセスしやすい立地です。本記事では、料金・実績・アクセスの観点から厳選した6ジムを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">カテゴリ</th><th className="px-4 py-3 text-left font-medium">料金目安</th></tr></thead>
              <tbody>{priceRange.map((row) => (<tr key={row.category} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{row.category}</td><td className="px-4 py-3 text-gray-700">{row.range}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は目安です。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム6選</h2>
          <div className="space-y-6">
            {gyms.map((gym, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3"><h3 className="text-lg font-bold text-gray-800">{i + 1}. {gym.name}</h3>{gym.reviewed && <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">レビュー済</span>}</div>
                <p className="text-sm text-gray-600 mb-3">月額料金: <span className="font-medium text-gray-800">{gym.price}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">{gym.features.map((f, j) => (<li key={j} className="flex items-start gap-2"><span className="text-teal-500 shrink-0 mt-0.5">--</span><span>{f}</span></li>))}</ul>
                <p className="text-sm text-gray-600 mb-2">アクセス: {gym.access}</p>
                <div className="bg-gray-50 rounded p-3 mt-3"><p className="text-sm text-gray-700"><span className="font-medium text-teal-700">おすすめポイント:</span> {gym.point}</p></div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 料金・店舗情報は2026年4月時点の公開情報に基づきます。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジムに関するよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">当サイトのランキングページで、目的別・料金別にジムを比較できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
