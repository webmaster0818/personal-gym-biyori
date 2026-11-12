import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaTopSummary from "@/components/AreaTopSummary";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq, getAreaPickCount } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("sendai", "仙台");

export const metadata: Metadata = {
  title: pickCopy.metaTitle,
  description: pickCopy.description,
};

const areaName = "仙台";

// 2026-11-12 追加: 「仙台 パーソナルトレーニング」向け。料金は当ページ掲載3ブランドの公式料金（2026-10-22確認・2026-11-12 再照合で一致）から当サイトが1回あたりを計算。
// 区別の分布は data/gym-db/sendai.json（Googleマップ「パーソナルジム 仙台」上位60件・2026-08-29取得）を当サイトが集計。
const perSession = [
  { gym: "24/7ワークアウト 仙台店", plan: "固定プラン 月4回 税込33,440円〜", per: "約8,360円〜", entry: "入会金不要" },
  { gym: "BEYOND 仙台店", plan: "ライフプランニングコース16（16回/2ヶ月）税込290,400円", per: "18,150円", entry: "入会金0円" },
  { gym: "RIZAP 仙台店", plan: "BASICプラン 2ヶ月16回 税込327,800円〜", per: "約20,488円〜（入会金込みで約23,925円〜）", entry: "入会金 税込55,000円" },
];
const wardDist = [
  { ward: "青葉区", n: 37, over100: 8 },
  { ward: "太白区", n: 8, over100: 5 },
  { ward: "宮城野区", n: 8, over100: 0 },
  { ward: "泉区", n: 5, over100: 1 },
  { ward: "若林区", n: 2, over100: 0 },
];

const selectionPoints = [
  {
    title: "仙台駅・青葉通エリアを中心に探す",
    desc: "仙台駅西口から一番町にかけてはアーケード街があります。アーケードに近い店舗は、雨や雪の日でも通いやすくなります。",
  },
  {
    title: "掲載数とキャンペーンを比較する",
    desc: `当サイトの掲載数は仙台が${pickCopy.count}社、東京全域が${getAreaPickCount("tokyo")}社です。入会金の割引などのキャンペーンは、内容と期間がブランドごとに異なります。入会の時期も含めて比較することをおすすめします。`,
  },
  {
    title: "継続しやすい環境かどうかを重視する",
    desc: "冬季に通う場合は、駅からの距離や施設の設備が継続のポイントになります。シャワーの有無や、手ぶらで通えるかを通う店舗の公式ページでご確認ください。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("sendai", areaName),
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
  { name: "札幌", href: "/area/sapporo/" },
  { name: "東京", href: "/area/tokyo/" },
  { name: "さいたま", href: "/area/saitama/" },
];

export default function SendaiAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月12日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          仙台は東北最大の都市です。{pickCopy.intro}
        </p>

        <AreaTopSummary slug="sendai" areaName="仙台" />

        <section className="mb-12" aria-label="仙台のパーソナルトレーニングの1回あたり料金">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">仙台でパーソナルトレーニングを受ける場合の1回あたりの料金と店舗の分布</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当ページに掲載している3ブランドの仙台店について、公式料金（2026年11月12日確認）をトレーニング1回あたりの金額に換算しました。月額制とコース制で料金の形が異なるため、1回あたりで比べると目安をつかみやすくなります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-2 font-medium">ジム・店舗</th>
                  <th className="px-3 py-2 font-medium">公式の料金表記</th>
                  <th className="px-3 py-2 font-medium">1回あたり（当サイト計算）</th>
                  <th className="px-3 py-2 font-medium">入会金</th>
                </tr>
              </thead>
              <tbody>
                {perSession.map((r) => (
                  <tr key={r.gym} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-medium text-gray-800 whitespace-nowrap">{r.gym}</td>
                    <td className="px-3 py-2 text-gray-700">{r.plan}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{r.per}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{r.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            ※ 1回あたりは「公式の税込料金 ÷ 回数」で計算し、円未満を四捨五入しています（RIZAPの入会金込みは税込55,000円を加えて計算）。24/7ワークアウトは1回単位の一括プラン（税込10,450円〜）もあります。キャンペーンや店舗による違いは反映していないため、目安としてご覧ください。
          </p>
          <h3 className="font-bold text-gray-800 mb-2">仙台市内のパーソナルジムの区別の分布（当サイトのデータベース）</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            当サイトがGoogleマップの検索「パーソナルジム 仙台」の上位60件（2026年8月29日取得・営業中のみ）を区ごとに集計しました。60店のうち37店が青葉区で、仙台駅・一番町周辺に集中しています。口コミ100件以上の店舗は14店で、青葉区に8店、太白区（長町・富沢周辺）に5店あります。上の3ブランドのGoogleマップの値は、BEYOND 仙台店が評点5.0・187件、24/7ワークアウト 仙台店が4.7・103件、RIZAP 仙台店が4.4・56件です（同日取得）。
          </p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-2 font-medium">区</th>
                  <th className="px-3 py-2 font-medium">店舗数（60店中）</th>
                  <th className="px-3 py-2 font-medium">うち口コミ100件以上</th>
                </tr>
              </thead>
              <tbody>
                {wardDist.map((r) => (
                  <tr key={r.ward} className="border-t border-gray-100">
                    <td className="px-3 py-2 text-gray-800">{r.ward}</td>
                    <td className="px-3 py-2 text-gray-700">{r.n}店</td>
                    <td className="px-3 py-2 text-gray-700">{r.over100}店</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            ※ Googleマップの検索結果の上位60件をもとにした集計で、仙台市内のすべての店舗を網羅したものではありません。評点・件数は取得時点の表示値です。店舗ごとの一覧は<Link href="/db/sendai/" className="underline text-teal-700">仙台のパーソナルジム店舗データベース</Link>でご確認いただけます。
          </p>
        </section>

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

        <AreaPicksSection slug="sendai" areaName={areaName} />

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

        <AreaGymList area="sendai" areaName="仙台" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/sendai/" className="underline text-teal-700 font-medium">→ 仙台のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
