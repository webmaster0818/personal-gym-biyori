import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, areaStoreNameSentence } from "@/lib/area-picks";

const pickCopy = getAreaPickCopy("tokyo", "東京");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "東京";

const selectionPoints = [
  {
    title: "通いやすいエリア・駅からの距離を重視する",
    desc: `自宅や職場の最寄り駅から通いやすい立地のジムを選ぶことが、継続につながります。${areaStoreNameSentence("tokyo", [["新宿", "渋谷", "池袋"]])}乗り換えなしで通える店舗を探すことをおすすめします。`,
  },
  {
    title: "料金体系と総額を必ず確認する",
    desc: "パーソナルジムは、月額制・コース制・都度払いなど料金の形態がブランドによって異なります。月額表示だけでなく、入会金・コース総額・オプション料金を含めたトータルコストで比較することが重要です。",
  },
  {
    title: "無料カウンセリング・体験を複数社で受ける",
    desc: "無料カウンセリングや体験トレーニングの有無はブランドごとに異なります（下記の掲載ジムの公式サイトでご確認いただけます）。2〜3社は実際に足を運び、トレーナーとの相性や施設の雰囲気を確認してから決めることをおすすめします。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("tokyo", areaName),
  areaPriceFaq(areaName),
  { q: "パーソナルジムの無料体験は何をするのですか？", a: "内容と所要時間はブランドごとに異なります。当サイトが2026年10月25日に確認した公式サイトの記載では、BEYONDは無料カウンセリングに加えて1回50分の体験トレーニングを無料で受けられ、RIZAP・24/7ワークアウトは無料カウンセリングの案内です。予約時に公式サイトでご確認ください。" },
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
  { name: "新宿", href: "/area/shinjuku/" },
  { name: "渋谷", href: "/area/shibuya/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "横浜", href: "/area/yokohama/" },
  { name: "さいたま", href: "/area/saitama/" },
];

export default function TokyoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月25日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          当サイトでは、新宿・渋谷・池袋・銀座・六本木など東京都内の主要エリアごとにもページを設けています。{pickCopy.intro}
        </p>

        {/* 選び方のポイント */}
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

        {/* 料金相場 */}
        <AreaPriceSection areaName={areaName} />

        {/* おすすめジム一覧 */}
        <AreaPicksSection slug="tokyo" areaName={areaName} />

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">
            当サイトのランキングページで、目的別・料金別にジムを比較できます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ランキングを見る
          </Link>
        </section>

        {/* 関連エリア */}
        <section>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
