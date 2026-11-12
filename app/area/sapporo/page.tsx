import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";
import AreaTopSummary from "@/components/AreaTopSummary";
import AreaPerSessionTable, { type PerSessionRow } from "@/components/AreaPerSessionTable";

const pickCopy = getAreaPickCopy("sapporo", "札幌");

export const metadata: Metadata = {
  title: pickCopy.metaTitle,
  description: pickCopy.description,
};

const areaName = "札幌";

const selectionPoints = [
  {
    title: "札幌駅・大通エリアを中心に探す",
    desc: "札幌駅周辺と大通・すすきのは地下鉄南北線で結ばれています。冬季は、地下通路でアクセスできるかどうかも店舗選びの判断材料になります。",
  },
  {
    title: "冬の通いやすさを考慮する",
    desc: "札幌は積雪期が長いため、駅直結や地下通路でアクセスできるジムを選ぶと年間を通して通いやすくなります。駐車場付きのジムも冬場は重宝します。",
  },
  {
    title: "料金は通う店舗の公式ページで確認する",
    desc: "当サイトでは、札幌と都心部の料金差を公式サイトの値で集計できていないため、エリアによる料金の高低は掲載していません。同じブランドでも店舗によって料金や入会金が異なる場合があるため、掲載ジムの料金とあわせて、通う店舗の公式ページをご確認ください。",
  },
];



// 2026-11-12 追加: 掲載4ブランドの札幌の店舗ページ・料金ページの公式料金（税込）を当サイトが1回あたりに換算
const perSession: PerSessionRow[] = [
  { gym: "ASPI 札幌・円山", plan: "マンスリープラン 月4回 17,680円（税込）", yen: 17680, times: 4, src: "https://aspirest.com/access/hokkaido/sapporo/" },
  { gym: "24/7ワークアウト 札幌店", plan: "固定プラン 月4回 税込33,440円〜", yen: 33440, times: 4, src: "https://247-sports.jp/workout/gym/hokkaido/sapporo.html" },
  { gym: "BEYOND 札幌の5店舗", plan: "マンスリー4 月4回 35,200円（税込）", yen: 35200, times: 4, src: "https://beyond-gym.com/gym/gym-sapporoekimae/" },
  { gym: "BEYOND 札幌の5店舗", plan: "STANDARD 10（回数券10回）102,300円（税込）", yen: 102300, times: 10, src: "https://beyond-gym.com/gym/gym-sapporoekimae/" },
  { gym: "ASPI 札幌・円山", plan: "シェイプアップ30プラン 全7回 109,000円（税込）", yen: 109000, times: 7, note: "30日分の食事アドバイスを含みます。", src: "https://aspirest.com/access/hokkaido/sapporo/" },
  { gym: "BEYOND 札幌の5店舗", plan: "ライフプランニング16（16回/2ヶ月）290,400円（税込）", yen: 290400, times: 16, note: "2ヶ月の食事管理を含みます。", src: "https://beyond-gym.com/gym/gym-sapporoekimae/" },
  { gym: "RIZAP 札幌店", plan: "BASICプラン 2ヶ月16回 税込327,800円〜", yen: 327800, times: 16, note: "入会金（税込55,000円）を含めると1回あたり約23,925円です。", src: "https://www.rizap.jp/plan" },
];

const faqItems = [
  ...buildAreaPickFaq("sapporo", areaName),
  areaPriceFaq(areaName),
  // 2026-11-12: 出典のない「地下通路を利用できる店舗もあります」を削除し、各店舗の公式ページで確認できた事実だけに改めた
  { q: "札幌のパーソナルジムは冬でも通いやすい環境ですか？", a: "当ページの掲載店舗のうち、公式ページに「札幌駅直結」と記載しているのはBEYOND 札幌駅前店です。そのほかの掲載店舗は、公式ページの記載で地下鉄駅から徒歩3〜8分です（2026年11月12日確認）。地下通路だけで店舗まで行けるかどうかは当サイトでは確認できていないため、冬季の経路は通う店舗に直接ご確認ください。" },
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
  { name: "仙台", href: "/area/sendai/" },
  { name: "東京", href: "/area/tokyo/" },
];

export default function SapporoAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月12日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          札幌は北海道最大の都市です。{pickCopy.intro}
        </p>

        <AreaTopSummary slug="sapporo" areaName="札幌" />
        <p className="-mt-8 mb-10 text-xs text-gray-600 leading-relaxed">
          ※ BEYOND の札幌の店舗ページは、「アクセス情報」欄とページ下部のよくある質問で最寄駅の表記が異なる店舗があります（札幌大通店：アクセス情報は「東西線 大通駅から徒歩3分」、よくある質問は「東豊線 大通駅から徒歩約1分」。豊平店：アクセス情報は「東豊線 豊平公園駅から徒歩4分」、よくある質問は「東西線 西28丁目駅から徒歩3分」。札幌ANNEX店：アクセス情報は「西11丁目駅出口から徒歩5分」、よくある質問は「西11丁目駅3番出口から徒歩約3分」）。当サイトでは各店舗のアクセス情報欄の表記を掲載しています。なお、豊平店の所在地は札幌市豊平区美園7条で、よくある質問にある西28丁目駅（中央区）とは別の地域です（2026年11月12日確認・出典：<a href="https://beyond-gym.com/gym/gym-sapporo-oodouri/" target="_blank" rel="noopener" className="underline">札幌大通店</a>／<a href="https://beyond-gym.com/gym/gym-toyohira/" target="_blank" rel="noopener" className="underline">豊平店</a>／<a href="https://beyond-gym.com/gym/gym-sapporoannex/" target="_blank" rel="noopener" className="underline">札幌ANNEX店</a>）。
        </p>

        <AreaPerSessionTable areaName={areaName} rows={perSession} checkedOn="2026年11月12日" footnote="1回のトレーニング時間は、24/7ワークアウト・ASPIが50分と公式サイトに記載されています。" />

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

        <AreaPicksSection slug="sapporo" areaName={areaName} />

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

        <AreaGymList area="sapporo" areaName="札幌" />

        <section>
          <p className="mb-6 text-sm"><Link href="/db/sapporo/" className="underline text-teal-700 font-medium">→ 札幌のパーソナルジム店舗データベース(Googleマップの掲載データ・口コミ件数順)を見る</Link></p>
          <h2 className="text-lg font-bold mb-4">関連エリアのパーソナルジム</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedAreas.map((a) => (<Link key={a.name} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{a.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
