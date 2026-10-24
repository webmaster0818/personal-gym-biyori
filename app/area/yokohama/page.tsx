import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("yokohama", "横浜");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "横浜";

const selectionPoints = [
  {
    title: "横浜駅周辺に集中するジムから選ぶ",
    desc: "横浜のパーソナルジムは横浜駅西口・東口周辺に多く集中しています。複数路線が乗り入れる横浜駅は、神奈川県内のどこからでもアクセスしやすいため、まずは横浜駅周辺で探すのがおすすめです。",
  },
  {
    title: "東京のジムと料金を比較する",
    desc: "横浜エリアは東京都心と比べてやや安い傾向にありますが、大手チェーンは同一料金の場合が多い傾向にあります。都内への通勤圏内の方は、東京と横浜の両方で比較検討する価値があります。",
  },
  {
    title: "駅からの距離と営業時間を確認する",
    desc: "横浜駅周辺は繁華街が広がっており、駅から5分以上歩く店舗もあります。特に夜遅い時間帯に通う予定の方は、営業時間と駅からの距離をしっかりご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("yokohama", areaName),
  areaPriceFaq(areaName),
  { q: "横浜と東京、どちらのジムに通うべきですか？", a: "通いやすさを最優先に考えることをおすすめします。横浜在住・在勤の方は横浜のジムを選ぶと継続しやすくなります。ただし、東京の方が選択肢が多いため、横浜駅から都内に通勤している方は職場近くのジムも検討する価値があります。" },
  { q: "パーソナルジムの契約前に確認すべきことを教えてください。", a: "総額料金（分割の場合の手数料含む）、解約条件、予約の取りやすさ、トレーナーの変更可否を必ずご確認ください。無料カウンセリングで質問リストを持参すると漏れなく確認できます。" },
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
  { name: "東京", href: "/area/tokyo/" },
  { name: "さいたま", href: "/area/saitama/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "新宿", href: "/area/shinjuku/" },
];

export default function YokohamaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          横浜は神奈川県の中心都市で、横浜駅・みなとみらい・関内エリアを中心にパーソナルジムが充実しています。東京に比べて相場がやや抑えめで、横浜発祥のジムもあるなど、地域ならではの選択肢が特徴です。{pickCopy.intro}
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

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="yokohama" areaName={areaName} />

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
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングを見る</Link>
        </section>

        <AreaGymList area="yokohama" areaName="横浜" />

        <p className="mb-8 text-sm">
          <Link href="/db/yokohama/" className="underline text-teal-700 font-medium">→ 横浜のパーソナルジム店舗データベース(60店・Googleマップの掲載データ)を見る</Link>
        </p>

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
