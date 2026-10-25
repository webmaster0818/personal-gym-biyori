import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, buildAreaTrialFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("ebisu", "恵比寿");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "恵比寿";

const selectionPoints = [
  {
    title: "おしゃれな街ならではの高品質ジムを選ぶ",
    desc: "恵比寿は感度の高い層が多いエリアのため、内装やサービスにこだわったハイクオリティなジムが充実しています。トレーニング環境の質を重視する方に適しています。",
  },
  {
    title: "駅近で仕事帰りに通いやすいか確認",
    desc: "恵比寿駅はJRと日比谷線が交差するターミナル駅です。駅からの距離は店舗ごとに異なるため、仕事帰りに通う場合は公式の店舗ページで最寄り出口からの徒歩分数をご確認ください。",
  },
  {
    title: "女性専用・プライベート空間の有無を確認する",
    desc: "恵比寿には女性専用や完全個室のジムが多数あります。人目を気にせずトレーニングしたい方は、プライベート空間が確保されているかをご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("ebisu", areaName),
  areaPriceFaq(areaName),
  ...buildAreaTrialFaq("ebisu", areaName),
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
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "中目黒", href: "/area/nakameguro/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function EbisuAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          恵比寿はおしゃれで感度の高いエリアとして知られ、質の高いパーソナルジムが集まっています。駅周辺に大手から個人経営まで多彩なジムが揃い、仕事帰りやショッピングのついでにも通いやすい環境です。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="ebisu" areaName={areaName} />

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

        <AreaGymList area="ebisu" areaName="恵比寿" />

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
