import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム池袋おすすめ7選",
  description:
    "池袋でおすすめのパーソナルジム7選を厳選紹介。池袋駅東口・西口エリアの料金相場・特徴・アクセスを徹底比較。",
};

const areaName = "池袋";

const selectionPoints = [
  {
    title: "東口・西口で特色が異なる",
    desc: "池袋駅東口は商業施設が充実し賑やか、西口はオフィス街で落ち着いた雰囲気です。仕事帰りに通うなら西口、買い物ついでなら東口と、ライフスタイルに合わせてエリアを選びましょう。",
  },
  {
    title: "埼玉方面からのアクセスの良さを活かす",
    desc: "池袋はJR・東武・西武・地下鉄が乗り入れるターミナル駅で、埼玉県からのアクセスが特に良好です。大宮やさいたま方面から通う場合、池袋は都内で最も通いやすいエリアの一つです。",
  },
  {
    title: "複数社の体験を比較する",
    desc: "池袋は主要チェーンが揃っているため、2〜3社の無料カウンセリングを受けて比較するのが効果的です。各ジムの雰囲気やトレーナーの相性を確かめてから決めましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜38万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "池袋駅徒歩3分", "朝7時〜夜23時営業"],
    access: "池袋店（池袋駅徒歩3分）",
    point: "池袋で低価格に始められる初心者向けジム。駅から近く通いやすい環境です。",
    reviewed: true,
    storeHref: "/review/chicken-gym/ikebukuro/",
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーのマンツーマン指導", "食事管理サポート充実", "30日間全額返金保証"],
    access: "池袋東口店・池袋西口店",
    point: "池袋に東口・西口の2店舗。通いやすい方を選べるのが魅力です。",
    reviewed: true,
    storeHref: "/review/rizap/ikebukuro/",
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室マンツーマン指導", "3食しっかり食べるダイエット", "深夜まで営業", "全額返金保証あり"],
    access: "池袋店（池袋駅徒歩5分）",
    point: "食事制限が緩やかで、池袋周辺のグルメを楽しみながらダイエットできると人気です。",
    reviewed: true,
    storeHref: "/review/247workout/ikebukuro/",
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "290,400円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "池袋店（池袋駅徒歩5分）",
    point: "入会金無料で質の高いトレーニング。本格ボディメイクを目指す方に。",
    reviewed: true,
    storeHref: "/review/beyond/ikebukuro/",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "池袋店（池袋駅徒歩3分）",
    point: "20分で完了する手軽さと低価格が、池袋の忙しいビジネスパーソンに支持されています。",
    reviewed: true,
  },
  {
    name: "OUTLINE（アウトライン）",
    price: "184,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "完全個室・完全予約制", "生涯アフターフォロー付き", "ベビーカー入店OK"],
    access: "池袋店（池袋駅徒歩5分）",
    point: "女性専用で安心。池袋で女性が安心してトレーニングに集中できる環境です。",
    reviewed: false,
  },
  {
    name: "Bodyke（ボディーク）",
    price: "215,600円〜（2ヶ月/16回）",
    features: ["食べて痩せるメソッド", "完全個室トレーニング", "卒業後のサポートプログラム", "分割払い対応"],
    access: "池袋店（池袋駅徒歩5分）",
    point: "「食べながら痩せる」独自メソッドが特徴。食事制限が苦手な方に人気です。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "池袋のパーソナルジムの料金相場はいくらですか？", a: "池袋のパーソナルジムの料金相場は、2ヶ月コースで20万〜38万円です。月額制では月1万〜8万円が目安で、新宿・渋谷と同程度です。" },
  { q: "池袋で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。チキンジムは池袋駅徒歩3分で手ぶらOK。エクササイズコーチは1回20分で気軽に始められます。" },
  { q: "池袋で女性におすすめのパーソナルジムは？", a: "OUTLINE（アウトライン）は女性専用ジムで完全個室。ベビーカー入店もOKで、産後ダイエットにも対応しています。" },
  { q: "池袋で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "埼玉から池袋のジムに通うのは現実的ですか？", a: "はい、池袋は埼玉方面からのアクセスが良好です。JR・東武・西武各線で乗り換えなしで来られるため、大宮や所沢方面から通う方も多くいます。" },
  { q: "パーソナルジムは何を持っていけばいいですか？", a: "チキンジムなどウェアレンタル付きのジムなら手ぶらでOKです。レンタルがない場合は、トレーニングウェア・室内シューズ・タオル・飲み物を持参しましょう。" },
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
  { name: "さいたま", href: "/area/saitama/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function IkebukuroAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム池袋おすすめ7選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          池袋は新宿・渋谷と並ぶ東京の主要ターミナル駅で、埼玉方面からのアクセスが特に良好なエリアです。東口の商業エリアと西口のオフィス街にそれぞれパーソナルジムが出店しており、ライフスタイルに合わせた選択ができます。本記事では、料金・実績・アクセスの観点から厳選した7ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム7選</h2>
          <div className="space-y-6">
            {gyms.map((gym, i) => (
              <AreaGymCard key={i} gym={gym} index={i} areaName={areaName} />
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
