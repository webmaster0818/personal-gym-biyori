import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaGymCard from "@/components/AreaGymCard";

export const metadata: Metadata = {
  title: "【2026最新】パーソナルジム中目黒おすすめ5選",
  description:
    "中目黒でおすすめのパーソナルジム5選を厳選紹介。中目黒駅周辺の料金相場・特徴・アクセスを徹底比較。おしゃれな街で通えるジムを解説。",
};

const areaName = "中目黒";

const selectionPoints = [
  {
    title: "落ち着いた雰囲気のプライベートジムを選ぶ",
    desc: "中目黒はおしゃれで落ち着いた雰囲気の街。隠れ家的なプライベートジムが多く、リラックスした環境でトレーニングに集中できます。",
  },
  {
    title: "恵比寿・代官山エリアも合わせて検討",
    desc: "中目黒は恵比寿・代官山と隣接しているため、徒歩や電車で数分のエリアまで含めると選択肢が広がります。",
  },
  {
    title: "ライフスタイルに合った通い方ができるか確認",
    desc: "中目黒は住みたい街としても人気。自宅近くのジムで休日にゆっくり通うスタイルも良いでしょう。営業時間や予約の取りやすさを確認しましょう。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月4万〜9万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];

const gyms = [
  {
    name: "BEYOND（ビヨンド）",
    price: "281,600円〜（2ヶ月/16回）",
    features: ["コンテスト入賞者多数在籍", "入会金無料", "糖質コントロールの食事指導", "回数券プランあり"],
    access: "中目黒店（中目黒駅徒歩3分）",
    point: "入会金無料でハイクオリティ。中目黒で本格ボディメイクを目指す方に人気です。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "チキンジム",
    price: "月々6,800円〜（分割払い時）",
    features: ["初心者の利用者90%以上", "ウェア・シューズ無料レンタル", "中目黒駅徒歩5分", "朝7時〜夜23時営業"],
    access: "中目黒店（中目黒駅徒歩5分）",
    point: "低価格で手ぶら通い可能。初めてのパーソナルジムにおすすめです。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "エクササイズコーチ",
    price: "9,900円〜/月（月4回）",
    features: ["AI主導のマシントレーニング", "1回20分の短時間", "月額9,900円〜の低価格", "予約不要"],
    access: "中目黒店（中目黒駅徒歩2分）",
    point: "20分で完了するので、カフェに行く感覚で気軽に通えます。",
    reviewed: true,
    storeHref: "",
  },
  {
    name: "かたぎり塾",
    price: "月30,800円〜（月4回）",
    features: ["月額制で通いやすい料金", "理学療法士監修のプログラム", "姿勢改善にも対応", "完全個室"],
    access: "中目黒店（中目黒駅徒歩3分）",
    point: "月額制で無理なく続けられる。中目黒の落ち着いた雰囲気にマッチしたジムです。",
    reviewed: false,
  },
  {
    name: "Apple GYM（アップルジム）",
    price: "月27,280円〜（月4回）",
    features: ["海外式ボディメイク", "完全個室", "手ぶらで通える", "中目黒駅徒歩3分"],
    access: "中目黒店（中目黒駅徒歩3分）",
    point: "モデル体型を目指す海外式メソッド。おしゃれな中目黒の雰囲気にぴったりです。",
    reviewed: false,
  },
];

const faqItems = [
  { q: "中目黒のパーソナルジムの料金相場はいくらですか？", a: "中目黒のパーソナルジムの料金相場は、2ヶ月コースで20万〜40万円、月額制で4万〜9万円です。おしゃれなエリアらしく質の高いジムが揃っています。" },
  { q: "中目黒で初心者におすすめのパーソナルジムは？", a: "チキンジムやエクササイズコーチが初心者向けです。低価格で始めやすく、手ぶらで通えます。" },
  { q: "中目黒で入会金無料のパーソナルジムは？", a: "BEYOND（ビヨンド）は入会金無料です。初期費用を抑えて本格トレーニングを始められます。" },
  { q: "中目黒で安いパーソナルジムは？", a: "エクササイズコーチ（月9,900円〜）やチキンジム（月々6,800円〜/分割時）が低価格帯です。" },
  { q: "中目黒のパーソナルジムは駅から近いですか？", a: "中目黒のパーソナルジムの多くは中目黒駅徒歩5分以内にあります。駅チカで通いやすい立地が特徴です。" },
  { q: "中目黒のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。まずは気になるジムの体験から始めましょう。" },
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
  { name: "恵比寿", href: "/area/ebisu/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "自由が丘", href: "/area/jiyugaoka/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function NakameguroAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">【2026最新】パーソナルジム中目黒おすすめ5選</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          中目黒はおしゃれなカフェやショップが並ぶ人気エリア。落ち着いた雰囲気の中でトレーニングできるプライベートジムが充実しています。恵比寿・代官山へも徒歩圏内で、ライフスタイルに合わせたジム選びが可能です。本記事では、料金・実績・アクセスの観点から厳選した5ジムを紹介します。
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
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{areaName}のおすすめパーソナルジム5選</h2>
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
