import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("shinjuku", "新宿");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "新宿";

const selectionPoints = [
  {
    title: "出口別にエリアを絞って探す",
    desc: "新宿駅は西口・東口・南口と出口によって雰囲気が大きく異なります。西口はオフィス街でビジネスパーソン向けジムが多く、東口・南口は繁華街に近いため営業時間が長い店舗が充実しています。",
  },
  {
    title: "ジムが多いエリアならではの価格競争を活かす",
    desc: "新宿はパーソナルジムが多く集まるエリアのため、各ジムがキャンペーンや割引を積極的に実施しています。入会金無料・初月割引などの特典を比較し、キャンペーンの時期も含めて比較することをおすすめします。",
  },
  {
    title: "通勤・通学の動線上にあるジムを選ぶ",
    desc: "新宿は1日の乗降客数が世界最多級の駅です。自宅や職場からの通勤ルート上にあるジムを選ぶと、余計な移動時間なく通えるため継続しやすくなります。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("shinjuku", areaName),
  areaPriceFaq(areaName),
  { q: "新宿のパーソナルジムは予約が取りやすい状況ですか？", a: "ジムが多いエリアのため各ジムが顧客確保に積極的で、予約枠も十分用意されている傾向があります。ただし平日夜・土日は人気のため、早めの予約がおすすめです。" },
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
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function ShinjukuAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          新宿は日本屈指のターミナル駅で、パーソナルジムが多く集まるエリアです。西口のオフィス街から東口の繁華街まで、多種多様なジムが出店しています。競争が激しい分、料金やサービスの質が高い水準にあるのが新宿エリアの特徴です。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="shinjuku" areaName={areaName} />

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

        <AreaGymList area="shinjuku" areaName="新宿" />

        <p className="mb-8 text-sm">
          <Link href="/db/shinjuku/" className="underline text-teal-700 font-medium">→ 新宿のパーソナルジム店舗データベース(58店・Googleマップの掲載データ)を見る</Link>
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
