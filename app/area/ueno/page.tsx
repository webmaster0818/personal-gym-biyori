import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";

const pickCopy = getAreaPickCopy("ueno", "上野");

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "上野";

const selectionPoints = [
  {
    title: "下町エリアならではの手頃な料金に注目",
    desc: "上野は新宿・渋谷と比べてテナント料が抑えめなため、同じ品質のサービスをより手頃な価格で受けられるジムが多い傾向があります。",
  },
  {
    title: "JR・地下鉄のアクセスの良さを活かす",
    desc: "上野駅はJR各線・銀座線・日比谷線が乗り入れる交通の要所です。近隣エリアからのアクセスも良好で、広範囲から通いやすいジムが見つかります。",
  },
  {
    title: "アットホームな個人ジムも検討する",
    desc: "上野エリアには大手だけでなく、地域密着型の個人経営ジムも多数あります。アットホームな雰囲気で丁寧な指導を受けたい方におすすめです。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("ueno", areaName),
  areaPriceFaq(areaName),
  { q: "上野のパーソナルジムは駅から近い立地にありますか？", a: "上野のパーソナルジムの多くは上野駅徒歩5分以内にあります。JR・地下鉄どちらからもアクセスしやすい立地です。" },
  { q: "上野のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。まずは気になるジムの体験トレーニングから始めることをおすすめします。" },
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
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "埼玉", href: "/area/saitama/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function UenoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          上野は東京の下町エリアとして親しまれ、JR各線や地下鉄が集まる交通の要所です。都心部と比べて手頃な料金のパーソナルジムが多く、初めてのジム通いにもおすすめのエリアです。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="ueno" areaName={areaName} />

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
