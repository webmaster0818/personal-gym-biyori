import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, buildAreaTrialFaq, areaStoreNameSentence } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("omiya", "大宮");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "大宮";

const selectionPoints = [
  {
    title: "埼玉県最大のターミナル駅の利便性を活かす",
    desc: "大宮駅はJR・東武・ニューシャトルなど多数の路線が乗り入れる埼玉県最大のターミナル駅で、県内各地からアクセスしやすい駅です。",
  },
  {
    title: "料金は通う店舗の公式ページで確認する",
    desc: "当サイトでは、大宮と都心部の料金差を公式サイトの値で集計できていないため、エリアによる料金の高低は掲載していません。同じブランドでも店舗によって料金や入会金が異なる場合があるため、掲載ジムの料金とあわせて、通う店舗の公式ページをご確認ください。",
  },
  {
    title: "東口・西口のどちら側かを確認する",
    desc: `${areaStoreNameSentence("omiya", [["西口"]])}店舗名に出口名を含まない店舗もあるため、通う店舗の公式ページで所在地と最寄り出口をご確認ください。`,
  },
];



const faqItems = [
  ...buildAreaPickFaq("omiya", areaName),
  areaPriceFaq(areaName),
  ...buildAreaTrialFaq("omiya", areaName),
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
  { name: "埼玉", href: "/area/saitama/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "川崎", href: "/area/kawasaki/" },
  { name: "横浜", href: "/area/yokohama/" },
];

export default function OmiyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "埼玉", href: "/area/saitama/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          大宮は埼玉県最大のターミナル駅を擁し、県内はもちろん北関東からのアクセスも良好なエリアです。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="omiya" areaName={areaName} />

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

        <AreaGymList area="omiya" areaName="大宮" />
          <p className="mb-6 text-sm"><Link href="/db/saitama/" className="underline text-teal-700 font-medium">→ さいたま(大宮・浦和)のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>

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
