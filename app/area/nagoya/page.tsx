import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("nagoya", "名古屋");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "名古屋";

const selectionPoints = [
  {
    title: "名駅・栄エリアを中心に探す",
    desc: "名古屋のパーソナルジムは名古屋駅（名駅）周辺と栄エリアに集中しています。地下街から直結のビルに入っている店舗も多く、天候を気にせず通えるのが名古屋ならではの利点です。",
  },
  {
    title: "車通いも視野に入れる",
    desc: "名古屋は車社会のため、駐車場完備のジムや近隣にコインパーキングがあるジムを選ぶのも有効です。駅から離れていても車でアクセスしやすい店舗もあります。",
  },
  {
    title: "地元密着型ジムも検討する",
    desc: "名古屋には大手チェーンに加えて、地元密着型の質の高いパーソナルジムも多数あります。口コミ評価や実績を確認し、大手以外の選択肢も検討することをおすすめします。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("nagoya", areaName),
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
  { name: "大阪", href: "/area/osaka/" },
  { name: "京都", href: "/area/kyoto/" },
  { name: "東京", href: "/area/tokyo/" },
  { name: "福岡", href: "/area/fukuoka/" },
];

export default function NagoyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          名古屋は名駅・栄を中心にパーソナルジムの出店が活発なエリアです。大手チェーンから地元密着型ジムまで選択肢が豊富で、車社会ならではの駐車場付き店舗もあります。{pickCopy.intro}
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

        <AreaPicksSection slug="nagoya" areaName={areaName} />

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

        <AreaGymList area="nagoya" areaName="名古屋" />

        <p className="mb-8 text-sm">
          <Link href="/db/nagoya/" className="underline text-teal-700 font-medium">→ 名古屋のパーソナルジム店舗データベース(60店・Googleマップの掲載データ)を見る</Link>
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
