import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("sapporo", "札幌");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "札幌";

const selectionPoints = [
  {
    title: "札幌駅・大通エリアを中心に探す",
    desc: "札幌のパーソナルジムは札幌駅周辺と大通・すすきのエリアに集まっています。地下鉄南北線・東西線沿線のジムが特に通いやすく、冬場も地下通路でアクセスできる店舗がおすすめです。",
  },
  {
    title: "冬の通いやすさを考慮する",
    desc: "札幌は積雪期が長いため、駅直結や地下通路でアクセスできるジムを選ぶと年間を通して通いやすくなります。駐車場付きのジムも冬場は重宝します。",
  },
  {
    title: "北海道の料金相場を確認する",
    desc: "札幌のパーソナルジムは東京と比べて料金がやや安い傾向にありますが、大手チェーンは全国統一料金の場合が多い傾向にあります。地元ジムの方が料金面で有利なケースもあります。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("sapporo", areaName),
  areaPriceFaq(areaName),
  { q: "札幌のパーソナルジムは冬でも通いやすい環境ですか？", a: "札幌駅・大通エリアのジムは地下鉄でアクセスしやすく、地下通路を利用できる店舗もあります。冬場の通いやすさを考慮して駅近のジムを選ぶことをおすすめします。" },
  { q: "パーソナルジムを途中で辞めることはできますか？", a: "多くのジムで途中解約は可能ですが、コース契約の場合は解約手数料がかかることがあります。月額制のジムは比較的辞めやすい傾向にあります。契約前に解約条件を必ずご確認ください。" },
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
  { name: "仙台", href: "/area/sendai/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function SapporoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          札幌は北海道最大の都市で、札幌駅・大通・すすきのエリアを中心にパーソナルジムが増加しています。積雪期が長い札幌では駅に近い店舗が特に重宝されます。{pickCopy.intro}
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

        <AreaPicksSection slug="sapporo" areaName={areaName} />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジムに関するよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary>
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

        <AreaGymList area="sapporo" areaName="札幌" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/sapporo/" className="underline text-teal-700 font-medium">→ 札幌のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
