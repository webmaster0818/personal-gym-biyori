import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム東京おすすめ10選｜エリア別に厳選",
  description:
    "東京でおすすめのパーソナルジム10選を厳選紹介。新宿・渋谷・池袋・銀座・六本木エリアの料金相場・特徴・アクセスを徹底比較。あなたに合ったジムが見つかります。",
};

const areaName = "東京";

const selectionPoints = [
  {
    title: "通いやすいエリア・駅からの距離を重視する",
    desc: "東京は交通網が発達しているため、自宅や職場の最寄り駅から通いやすい立地のジムを選ぶことが継続の鍵です。主要ターミナル駅（新宿・渋谷・池袋など）には多数のジムが集中しており、乗り換えなしで通える店舗を探しましょう。",
  },
  {
    title: "料金体系と総額を必ず確認する",
    desc: "東京のパーソナルジムは月額1万円台から50万円超まで価格帯が幅広いのが特徴です。月額表示だけでなく、入会金・コース総額・オプション料金を含めたトータルコストで比較することが重要です。",
  },
  {
    title: "無料カウンセリング・体験を複数社で受ける",
    desc: "東京は競合が多い分、無料カウンセリングや体験トレーニングを提供するジムが豊富です。最低2〜3社は実際に足を運び、トレーナーとの相性や施設の雰囲気を確認してから決めることをおすすめします。",
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
    features: ["初心者の利用者90%以上で安心", "ウェア・シューズ無料レンタル", "全店舗駅チカ立地", "朝7時〜夜23時営業"],
    access: "新宿店・池袋店・渋谷店・恵比寿店・北千住店・吉祥寺店・町田店",
    point: "コスパ重視の初心者に最適。手ぶらで通えるため、仕事帰りにも気軽に立ち寄れます。",
    reviewed: true,
  },
  {
    name: "RIZAP（ライザップ）",
    price: "327,800円〜（2ヶ月/16回）",
    features: ["「結果にコミット」の実績", "専属トレーナーによるマンツーマン指導", "食事管理サポートが充実", "30日間全額返金保証"],
    access: "新宿店・渋谷店・池袋店・銀座店・六本木店ほか都内多数",
    point: "短期間で確実に結果を出したい方向け。手厚いサポート体制で挫折しにくい環境が整っています。",
    reviewed: true,
  },
  {
    name: "24/7ワークアウト",
    price: "257,400円〜（2ヶ月/16回）",
    features: ["完全個室のマンツーマン指導", "3食しっかり食べるダイエット", "深夜24時まで営業の店舗あり", "全額返金保証制度あり"],
    access: "新宿店・渋谷店・池袋店・銀座店・六本木店ほか都内多数",
    point: "RIZAPに次ぐ知名度を持つ大手。食事制限が緩やかで続けやすいと評判です。",
    reviewed: true,
  },
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者が多数在籍", "糖質コントロールの食事指導", "入会金無料", "回数券プランあり"],
    access: "新宿店・渋谷店・池袋店・銀座店・六本木店ほか都内多数",
    point: "ボディメイクに特化。トレーナーの質が高く、本格的な身体づくりを目指す方におすすめです。",
    reviewed: true,
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間トレーニング", "月額9,900円〜の低価格", "予約不要で通える"],
    access: "新宿店・渋谷店・池袋店・銀座店・上野店ほか都内多数",
    point: "短時間・低価格で気軽に始めたい方に最適。AIが最適な負荷を自動設定します。",
    reviewed: true,
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金設定", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室のプライベート空間"],
    access: "渋谷店・恵比寿店・自由が丘店ほか都内多数",
    point: "月額制で無理なく続けられる。姿勢改善や体質改善を重視する方に支持されています。",
    reviewed: false,
  },
  {
    name: "OUTLINE（アウトライン）",
    price: "184,800円〜（2ヶ月/16回）",
    features: ["女性専用パーソナルジム", "完全個室・完全予約制", "生涯アフターフォロー付き", "ベビーカー入店OK"],
    access: "新宿店・池袋店・町田店ほか都内複数",
    point: "女性専用で安心。産後ダイエットにも対応しており、生涯リバウンドサポートが特徴です。",
    reviewed: false,
  },
  {
    name: "ASPI（アスピ）",
    price: "月7,600円〜（月2回）",
    features: ["全トレーナーが有資格者", "月額7,600円〜の低コスト", "オンライン食事指導対応", "ストレッチ指導も充実"],
    access: "新宿店・恵比寿店・吉祥寺店ほか都内複数",
    point: "米国資格保有トレーナーが指導。低価格ながら専門性の高いトレーニングを受けられます。",
    reviewed: false,
  },
  {
    name: "MIYAZAKI GYM（ミヤザキジム）",
    price: "月96,800円〜（月8回）",
    features: ["NSCA認定トレーナー在籍", "都度払い・月額制に対応", "完全マンツーマン指導", "ウェアレンタル無料"],
    access: "渋谷店・新宿店・武蔵小杉店",
    point: "高品質なトレーニングを求める方向け。トレーナーの質にこだわりたい方に人気です。",
    reviewed: false,
  },
  {
    name: "Bodyke（ボディーク）",
    price: "215,600円〜（2ヶ月/16回）",
    features: ["食べて痩せるメソッド", "完全個室トレーニング", "卒業後のサポートプログラム", "分割払い対応"],
    access: "秋葉原店・池袋店・町田店ほか都内複数",
    point: "食事制限が苦手な方に人気。「食べながら痩せる」独自メソッドが支持されています。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "東京のパーソナルジムの料金相場はいくらですか？", a: "東京のパーソナルジムの料金相場は、2ヶ月コースで20万〜40万円が一般的です。月額制のジムでは月1万〜8万円程度で通えるところもあります。入会金は0円〜5.5万円が目安です。" },
  { q: "東京で初心者におすすめのパーソナルジムは？", a: "初心者にはチキンジムやエクササイズコーチがおすすめです。チキンジムは利用者の90%以上が初心者で、低価格かつ手ぶらで通える手軽さが魅力です。エクササイズコーチはAI主導で1回20分の短時間トレーニングが可能です。" },
  { q: "東京で女性におすすめのパーソナルジムは？", a: "女性専用のOUTLINE（アウトライン）は完全個室で安心して通えます。また、チキンジムやかたぎり塾も女性利用者が多く、女性が通いやすい環境が整っています。" },
  { q: "東京のパーソナルジムで安いところは？", a: "エクササイズコーチ（月9,900円〜）、チキンジム（月々6,800円〜/分割時）、ASPI（月7,600円〜）が低価格帯です。ただし、分割払いの場合は総額も必ず確認してください。" },
  { q: "パーソナルジムは週何回通うのが効果的ですか？", a: "週2回が最も効果的とされています。週1回でも効果はありますが、結果が出るまでに時間がかかります。週3回以上は身体の回復が追いつかない場合があるため、トレーナーと相談しましょう。" },
  { q: "パーソナルジムの無料体験は何をするのですか？", a: "一般的にカウンセリング（目標や体の状態の確認）、体組成測定、実際のトレーニング体験を30〜60分程度で行います。ジムによって内容は異なりますので、予約時に確認してください。" },
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
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "横浜", href: "/area/yokohama/" },
  { name: "さいたま", href: "/area/saitama/" },
];

export default function TokyoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          【2026最新】パーソナルジム東京おすすめ10選｜エリア別に厳選
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          東京は日本最大のパーソナルジム激戦区です。新宿・渋谷・池袋・銀座・六本木といった主要エリアを中心に、大手から個人経営まで数百のジムが軒を連ねています。選択肢が豊富な反面、自分に合ったジムを見つけるのが難しいエリアでもあります。本記事では、料金・実績・アクセスの観点から厳選した10ジムを紹介します。
        </p>

        {/* 選び方のポイント */}
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

        {/* 料金相場 */}
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
          <p className="text-xs text-gray-500 mt-3">※ 料金は目安です。キャンペーンや時期により変動します。最新情報は各公式サイトでご確認ください。</p>
        </section>

        {/* おすすめジム一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム10選</h2>
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
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 料金・店舗情報は2026年4月時点の公開情報に基づきます。最新情報は各公式サイトでご確認ください。</p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">
            当サイトのランキングページで、目的別・料金別にジムを比較できます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ランキングを見る
          </Link>
        </section>

        {/* 関連エリア */}
        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
