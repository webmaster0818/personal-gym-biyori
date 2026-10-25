import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, buildAreaTrialFaq } from "@/lib/area-picks";

const pickCopy = getAreaPickCopy("machida", "町田");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "町田";

const selectionPoints = [
  {
    title: "JR町田駅・小田急町田駅の両方からのアクセスを確認",
    desc: "町田にはJR横浜線と小田急線の2つの駅があり、利用する路線によって便利なジムが異なります。通勤・通学の路線に合わせて選ぶことをおすすめします。",
  },
  {
    title: "料金は通う店舗の公式ページで確認する",
    desc: "当サイトでは、町田と都心部の料金差を公式サイトの値で集計できていないため、エリアによる料金の高低は掲載していません。同じブランドでも店舗によって料金や入会金が異なる場合があるため、掲載ジムの料金とあわせて、通う店舗の公式ページをご確認ください。",
  },
  {
    title: "駐車場完備のジムも検討する",
    desc: "町田エリアは車移動の方も多いため、駐車場完備や近隣コインパーキングが充実しているジムを選ぶと便利です。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("machida", areaName),
  areaPriceFaq(areaName),
  ...buildAreaTrialFaq("machida", areaName),
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
  { name: "立川", href: "/area/tachikawa/" },
  { name: "横浜", href: "/area/yokohama/" },
  { name: "川崎", href: "/area/kawasaki/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function MachidaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          町田は東京都南部に位置し、JR横浜線と小田急線が交差する交通の要所です。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="machida" areaName={areaName} />

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
