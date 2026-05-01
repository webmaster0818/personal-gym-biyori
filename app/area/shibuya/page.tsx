import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム渋谷おすすめ8選",
  description:
    "渋谷でおすすめのパーソナルジム8選を厳選紹介。渋谷駅・表参道・恵比寿エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "渋谷";

const selectionPoints = [
  {
    title: "渋谷駅からの徒歩距離を確認する",
    desc: "渋谷駅は再開発が進み、駅周辺の構造が複雑です。地上出口からジムまでの実際の徒歩時間を確認しましょう。表参道方面や恵比寿方面にもジムがあるため、利用する出口に近い店舗を選ぶのがポイントです。",
  },
  {
    title: "20代〜30代に特化したジムが多い",
    desc: "渋谷は若い世代が多いエリアのため、20代〜30代向けのおしゃれなジムや、SNS映えする施設が充実しています。自分の年齢層に合った雰囲気のジムを選びましょう。",
  },
  {
    title: "仕事帰りの利便性を重視する",
    desc: "渋谷はIT企業やスタートアップが集まるエリア。夜遅くまで営業しているジムや、手ぶらで通えるジムが特に人気です。通勤ルート上のジムなら無理なく続けられます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "渋谷駅徒歩5分", "朝7時〜夜23時営業"],
    access: "渋谷店（渋谷駅徒歩5分）",
    point: "渋谷で低価格にパーソナルトレーニングを始めたい方に。手ぶらOKで仕事帰りも気軽。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "渋谷店（渋谷駅徒歩5分）",
    point: "渋谷で確実に結果を出したい方に。全額返金保証があるのも安心です。",
    reviewed: true,
    storeHref: "/review/rizap/shibuya/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業", "全額返金保証あり"],
    access: "渋谷店（渋谷駅徒歩5分）",
    point: "深夜まで営業しているため、IT企業勤務の方など夜型の方にも通いやすい環境です。",
    reviewed: true,
    storeHref: "/review/247workout/shibuya/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "渋谷店（渋谷駅徒歩5分）",
    point: "入会金無料でハイクオリティなトレーニング。ボディメイクに本気の渋谷ワーカーに人気。",
    reviewed: true,
    storeHref: "/review/beyond/shibuya/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "渋谷店（渋谷駅徒歩3分）",
    point: "渋谷駅から徒歩3分の好立地。ランチタイムに20分でトレーニングを済ませる人も。",
    reviewed: true,
    storeHref: "/review/exercise-coach/shibuya/",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "渋谷店・恵比寿店",
    point: "渋谷・恵比寿に展開。デスクワークによる姿勢の悩みを持つIT企業勤務者にも人気です。",
    reviewed: false,
  },
  {
    name: "MIYAZAKI GYM（ミヤザキジム）",
    price: "月96,800円〜（月8回）",
    features: ["NSCA認定トレーナー在籍", "都度払い・月額制対応", "完全マンツーマン指導", "ウェアレンタル無料"],
    access: "渋谷店（渋谷駅徒歩5分）",
    point: "トレーナーの質にこだわりたい方向け。高品質なトレーニングを渋谷で受けられます。",
    reviewed: false,
  },
  {
    name: "Apple GYM（アップルジム）",
    price: "月27,280円〜（月4回）",
    features: ["海外式ボディメイク", "完全個室マンツーマン", "月額制で通いやすい", "姿勢改善にも注力"],
    access: "渋谷店（渋谷駅徒歩3分）",
    point: "海外式のボディメイクメソッドが特徴。渋谷の若い世代に支持されています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "渋谷のパーソナルジムの料金相場はいくらですか？", a: "渋谷のパーソナルジムの料金相場は、2ヶ月コースで20万〜40万円です。月額制では月1万〜8万円が目安です。新宿と同程度の水準です。" },
  { q: "渋谷で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。いずれも渋谷駅徒歩圏内で低価格で始められます。" },
  { q: "渋谷で深夜まで営業しているパーソナルジムは？", a: "24/7ワークアウトが深夜24時まで営業しています。チキンジムも夜23時まで営業しています。" },
  { q: "渋谷で女性におすすめのパーソナルジムは？", a: "かたぎり塾は女性利用者も多く、姿勢改善プログラムが好評です。女性専用ジムを希望する場合は新宿のOUTLINEも徒歩圏内です。" },
  { q: "渋谷で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）、Apple GYM（月27,280円〜）が比較的リーズナブルです。" },
  { q: "渋谷と恵比寿、どちらのジムがおすすめですか？", a: "通いやすさで選びましょう。渋谷の方が選択肢が多く、恵比寿は落ち着いた雰囲気のジムが多い傾向にあります。両駅はJRで1駅（3分）なので両方のジムを検討するのもおすすめです。" },
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
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function ShibuyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム渋谷おすすめ8選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          渋谷はIT企業やスタートアップが集まるビジネスエリアであり、再開発で街の魅力がさらに高まっています。パーソナルジムも新宿と並ぶ激戦区で、大手チェーンからおしゃれな個性派ジムまで多彩な選択肢があります。本記事では、料金・実績・アクセスの観点から厳選した8ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム8選</h2>
          <div className="space-y-6">
            {gyms.map((gym, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3"><h3 className="text-lg font-bold text-gray-800">{i + 1}. {gym.name}</h3>{gym.reviewed && <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">レビュー済</span>}</div>
                <p className="text-sm text-gray-600 mb-3">月額料金: <span className="font-medium text-gray-800">{gym.price}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">{gym.features.map((f, j) => (<li key={j} className="flex items-start gap-2"><span className="text-teal-500 shrink-0 mt-0.5">--</span><span>{f}</span></li>))}</ul>
                <p className="text-sm text-gray-600 mb-2">アクセス: {gym.access}</p>
                <div className="bg-gray-50 rounded p-3 mt-3"><p className="text-sm text-gray-700"><span className="font-medium text-teal-700">おすすめポイント:</span> {gym.point}</p></div>
                {gym.storeHref && <Link href={gym.storeHref} className="inline-block text-sm text-orange-500 hover:underline mt-3">店舗の詳細を見る →</Link>}
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
