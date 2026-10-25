import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, buildAreaTrialFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("niigata", "新潟");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "新潟";

const selectionPoints = [
  {
    title: "新潟駅周辺と万代エリアで探す",
    desc: "新潟のパーソナルジムは新潟駅周辺と万代エリアに集中しています。通勤・通学ルートに合わせてエリアを絞ると効率的です。",
  },
  {
    title: "冬場も通いやすい駅近ジムを優先",
    desc: "新潟は冬の降雪が多いため、駅直結や駅徒歩5分以内のジムを選ぶと、悪天候の日でも無理なく通い続けられます。",
  },
  {
    title: "車通いも想定して駐車場を確認",
    desc: "新潟は車社会のため、駐車場完備のジムを選ぶと利便性が高まります。近隣のコインパーキング情報も合わせてご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("niigata", areaName),
  areaPriceFaq(areaName),
  ...buildAreaTrialFaq("niigata", areaName),
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
  { name: "高崎", href: "/area/takasaki/" },
  { name: "仙台", href: "/area/sendai/" },
  { name: "大宮", href: "/area/omiya/" },
  { name: "札幌", href: "/area/sapporo/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function NiigataAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          新潟は日本海側最大の都市で、新潟駅周辺にパーソナルジムが集まっています。冬場の運動不足解消にもパーソナルトレーニングが適しています。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="niigata" areaName={areaName} />

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

        <AreaGymList area="niigata" areaName="新潟" />
          <p className="mb-6 text-sm"><Link href="/db/niigata/" className="underline text-teal-700 font-medium">→ 新潟のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>

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
