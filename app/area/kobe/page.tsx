import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("kobe", "神戸");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "神戸";

const selectionPoints = [
  {
    title: "三宮・元町エリアを中心に探す",
    desc: "神戸のパーソナルジムは三宮駅・元町駅周辺に集中しています。JR・阪急・阪神の3路線が乗り入れる三宮はアクセスが良く、通いやすい環境が整っています。",
  },
  {
    title: "大阪のジムも比較対象にする",
    desc: "神戸から大阪（梅田・心斎橋）は電車で20〜30分程度とアクセスが良いため、大阪のジムも選択肢に入ります。特に大阪の方が選択肢が豊富なため、両エリアで比較検討することをおすすめします。",
  },
  {
    title: "体験・カウンセリングを活用する",
    desc: "神戸エリアのジムは店舗数が限られるため、選択肢を広げるためにも複数の無料カウンセリングに足を運び、トレーナーとの相性や施設の雰囲気を直接ご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("kobe", areaName),
  areaPriceFaq(areaName),
  { q: "神戸と大阪、どちらのジムに通うべきですか？", a: "通いやすさを最優先に考えることをおすすめします。神戸在住・在勤なら三宮のジムが便利です。大阪に通勤している方は、大阪のジムの方が選択肢が多く、料金も比較しやすくなります。" },
  { q: "パーソナルジムに通う前に準備することはありますか？", a: "特別な準備は不要です。多くのジムで無料カウンセリングを受けられるため、まずは予約して足を運ぶことをおすすめします。手ぶらで通えるジムも多いため、ウェアなどを急いで購入する必要はありません。" },
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
  { name: "大阪", href: "/area/osaka/" },
  { name: "京都", href: "/area/kyoto/" },
  { name: "名古屋", href: "/area/nagoya/" },
];

export default function KobeAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          神戸は三宮・元町エリアを中心にパーソナルジムが増加している都市です。JR・阪急・阪神の3路線が集まる三宮はアクセスが良く、大手チェーンも出店しています。大阪にも近いため、両エリアで比較検討するのもおすすめです。{pickCopy.intro}
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

        <AreaPicksSection slug="kobe" areaName={areaName} />

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

        <AreaGymList area="kobe" areaName="神戸" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/kobe/" className="underline text-teal-700 font-medium">→ 神戸のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
