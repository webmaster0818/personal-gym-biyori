import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("fukuoka", "福岡");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "福岡";

const selectionPoints = [
  {
    title: "天神・博多駅エリアを中心に探す",
    desc: "福岡のパーソナルジムは天神エリアと博多駅周辺に集中しています。地下鉄空港線沿線はアクセスが良く、仕事帰りにも通いやすい立地の店舗が多い傾向にあります。",
  },
  {
    title: "九州エリアの料金相場を把握する",
    desc: "福岡は九州最大の都市ですが、東京・大阪と比べると全体的に料金がやや安い傾向にあります。大手チェーンでも福岡限定のキャンペーンを実施していることがあるため、公式サイトをご確認ください。",
  },
  {
    title: "地元で実績のあるジムにも注目する",
    desc: "福岡には全国チェーンだけでなく、地元で長年の実績を持つパーソナルジムも存在します。口コミやGoogleマップの評価を参考に、地域密着型のジムも候補に入れることをおすすめします。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("fukuoka", areaName),
  areaPriceFaq(areaName),
  { q: "パーソナルジムに通う期間はどのくらいが目安ですか？", a: "ダイエット目的であれば2〜3ヶ月、ボディメイクや体質改善が目的であれば3〜6ヶ月が一般的な目安です。継続的な運動習慣をつけたい方は月額制のジムが向いています。" },
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
  { name: "名古屋", href: "/area/nagoya/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function FukuokaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          福岡は九州最大の都市で、天神・博多エリアを中心にパーソナルジムの出店が増加しています。大手チェーンが主要エリアに揃っているほか、地元発の実力派ジムもあり、選択肢が充実しています。{pickCopy.intro}
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

        <AreaPicksSection slug="fukuoka" areaName={areaName} />

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

        <AreaGymList area="fukuoka" areaName="福岡" />

        <p className="mb-8 text-sm">
          <Link href="/db/fukuoka/" className="underline text-teal-700 font-medium">→ 福岡のパーソナルジム店舗データベース(60店・Googleマップの掲載データ)を見る</Link>
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
