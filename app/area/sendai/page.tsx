import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("sendai", "仙台");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "仙台";

const selectionPoints = [
  {
    title: "仙台駅・青葉通エリアを中心に探す",
    desc: "仙台のパーソナルジムは仙台駅西口から青葉通一番町にかけてのエリアに集中しています。アーケード街に近い店舗は天候を気にせず通えるのが利点です。",
  },
  {
    title: "東北の料金相場を把握する",
    desc: "仙台は東北最大の都市ですが、東京と比べるとパーソナルジムの選択肢はやや少なめです。その分、大手チェーンのキャンペーンが充実していることもあるため、入会時期も含めて比較することをおすすめします。",
  },
  {
    title: "継続しやすい環境かどうかを重視する",
    desc: "仙台は冬場の寒さが厳しいため、駅からの距離や施設内の快適さが継続のポイントになります。シャワー完備で手ぶらで通えるジムは特に冬場の通いやすさにつながります。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("sendai", areaName),
  areaPriceFaq(areaName),
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
  { name: "札幌", href: "/area/sapporo/" },
  { name: "東京", href: "/area/tokyo/" },
  { name: "さいたま", href: "/area/saitama/" },
];

export default function SendaiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          仙台は東北最大の都市で、仙台駅周辺を中心にパーソナルジムが出店しています。大手チェーンから地元密着型まで選べる環境が整いつつあり、東北在住でパーソナルジムを探している方の選択肢が広がっています。{pickCopy.intro}
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

        <AreaPicksSection slug="sendai" areaName={areaName} />

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

        <AreaGymList area="sendai" areaName="仙台" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/sendai/" className="underline text-teal-700 font-medium">→ 仙台のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
