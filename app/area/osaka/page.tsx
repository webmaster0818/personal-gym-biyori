import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";

const pickCopy = getAreaPickCopy("osaka", "大阪");

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "大阪";

const selectionPoints = [
  {
    title: "梅田・心斎橋・なんばエリアを中心に探す",
    desc: "大阪のパーソナルジムは梅田・心斎橋・なんばエリアに集中しています。通勤・通学の動線上にあるジムを選ぶと継続しやすくなります。御堂筋線沿線は特にジムの選択肢が豊富です。",
  },
  {
    title: "料金は通う店舗の公式ページで確認する",
    desc: "当サイトでは、大阪と都心部の料金差を公式サイトの値で集計できていないため、エリアによる料金の高低は掲載していません。同じブランドでも店舗によって料金や入会金が異なる場合があるため、掲載ジムの料金とあわせて、通う店舗の公式ページをご確認ください。",
  },
  {
    title: "体験・カウンセリングで雰囲気を確かめる",
    desc: "トレーナーとの相性や店舗の雰囲気は、実際に足を運ばなければ判断できません。無料カウンセリングや体験トレーニングを活用して、トレーナーとの相性をご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("osaka", areaName),
  areaPriceFaq(areaName),
  { q: "パーソナルジムとフィットネスジムの違いは何ですか？", a: "パーソナルジムは専属トレーナーがマンツーマンで指導するジムです。フィットネスジムは自分で器具を使ってトレーニングする施設です。パーソナルジムは料金が高い分、個別指導で効率的に結果を出しやすいメリットがあります。" },
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
  { name: "京都", href: "/area/kyoto/" },
  { name: "神戸", href: "/area/kobe/" },
  { name: "名古屋", href: "/area/nagoya/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function OsakaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          大阪は東京に次いでパーソナルジムが多く集まるエリアで、梅田・心斎橋・なんばを中心に多数のジムが出店しています。大手チェーンから関西発の個性派ジムまで選択肢が豊富でです。{pickCopy.intro}
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

        <AreaPicksSection slug="osaka" areaName={areaName} />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジムに関するよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">当サイトのランキングページで、目的別・料金別にジムを比較できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングを見る
          </Link>
        </section>

        <p className="mb-8 text-sm">
          <Link href="/db/osaka/" className="underline text-teal-700 font-medium">→ 大阪のパーソナルジム店舗データベース(60店・Googleマップの掲載データ)を見る</Link>
        </p>

        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (
              <Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
