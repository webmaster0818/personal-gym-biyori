import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("saitama", "さいたま");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "さいたま";

const selectionPoints = [
  {
    title: "大宮駅周辺を中心に探す",
    desc: "さいたま市のパーソナルジムは大宮駅周辺に最も集中しています。JR・東武・ニューシャトルが乗り入れるターミナル駅で、埼玉県内のどこからでもアクセスしやすいエリアです。",
  },
  {
    title: "東京のジムとの比較も視野に入れる",
    desc: "大宮から池袋・新宿へは電車で30〜40分程度です。埼玉県内の選択肢が限られる場合は、都内のジムも検討する価値があります。特にJR沿線の方は都内ジムへのアクセスも良好です。",
  },
  {
    title: "駐車場の有無を確認する",
    desc: "埼玉県は車利用が多い地域のため、駐車場完備や近隣にパーキングがあるジムを選ぶと通いやすくなります。大宮駅周辺は駐車場も豊富です。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("saitama", areaName),
  areaPriceFaq(areaName),
  { q: "さいたまと東京、どちらのジムに通うべきですか？", a: "大宮在住・在勤なら大宮のジムが便利です。都内に通勤している方は、職場近くの都内ジムの方が通いやすい場合もあります。" },
  { q: "パーソナルジムの解約は簡単にできますか？", a: "月額制のジムは比較的簡単に解約できます。コース契約の場合はクーリングオフ期間内であれば無条件解約、それ以降は解約手数料がかかることがあります。契約前に解約条件をご確認ください。" },
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
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "横浜", href: "/area/yokohama/" },
];

export default function SaitamaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          さいたま市は大宮駅を中心にパーソナルジムが充実している埼玉県の中心エリアです。大手チェーンが大宮駅周辺に揃っており、都内に出なくても質の高いパーソナルトレーニングを受けられます。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="saitama" areaName={areaName} />

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

        <AreaGymList area="saitama" areaName="さいたま" />
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
