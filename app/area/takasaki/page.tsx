import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";

const pickCopy = getAreaPickCopy("takasaki", "高崎");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "高崎";

const selectionPoints = [
  {
    title: "群馬県の中心都市で大手ジムから選ぶ",
    desc: "高崎は群馬県最大の都市で、大手パーソナルジムチェーンが出店しています。地方でも都心と同品質のトレーニングを受けられるのが特徴です。",
  },
  {
    title: "新幹線停車駅の利便性を活かす",
    desc: "高崎駅は上越新幹線・北陸新幹線の停車駅です。東京方面への通勤者も多く、駅近のジムなら通勤前後に効率的に通えます。",
  },
  {
    title: "車通いも想定して駐車場を確認",
    desc: "高崎は車社会のため、駐車場完備のジムや近隣のコインパーキング情報を事前に確認しておくと便利です。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "16万〜33万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜6万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5万円" },
];


const faqItems = [
  ...buildAreaPickFaq("takasaki", areaName),
  { q: "高崎のパーソナルジムの料金相場はいくらですか？", a: "高崎のパーソナルジムの料金相場は、2ヶ月コースで16万〜33万円です。都心と比べて手頃な価格帯のジムが多い傾向にあります。" },
  { q: "高崎のパーソナルジムは駅から近い立地にありますか？", a: "ほとんどのジムが高崎駅徒歩5分以内にあり、新幹線利用者にも便利です。" },
  { q: "高崎のパーソナルジムは体験できますか？", a: "ほとんどのジムで無料カウンセリングや体験トレーニングを実施しています。" },
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
  { name: "大宮", href: "/area/omiya/" },
  { name: "埼玉", href: "/area/saitama/" },
  { name: "新潟", href: "/area/niigata/" },
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function TakasakiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          高崎は群馬県最大の都市で、上越新幹線・北陸新幹線の停車駅として東京方面へのアクセスも良好です。大手パーソナルジムチェーンも出店しており、地方でも質の高いトレーニングを受けられます。{pickCopy.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">カテゴリ</th><th className="px-4 py-3 text-left font-medium">料金目安</th></tr></thead>
              <tbody>{priceRange.map((row) => (<tr key={row.category} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{row.category}</td><td className="px-4 py-3 text-gray-700">{row.range}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は目安です。最新情報は各公式サイトでご確認ください。</p>
        </section>

        <AreaPicksSection slug="takasaki" areaName={areaName} />

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
