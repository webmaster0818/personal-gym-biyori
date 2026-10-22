import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";

const pickCopy = getAreaPickCopy("shibuya", "渋谷");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "渋谷";

const selectionPoints = [
  {
    title: "渋谷駅からの徒歩距離を確認する",
    desc: "渋谷駅は再開発が進み、駅周辺の構造が複雑です。地上出口からジムまでの実際の徒歩時間をご確認ください。表参道方面や恵比寿方面にもジムがあるため、利用する出口に近い店舗を選ぶのがポイントです。",
  },
  {
    title: "20代〜30代向けのジムが多いエリア",
    desc: "渋谷は若い世代が多いエリアのため、20代〜30代向けのおしゃれなジムや、内装にこだわった施設が充実しています。自分の年齢層に合った雰囲気のジムを選ぶことをおすすめします。",
  },
  {
    title: "仕事帰りの利便性を重視する",
    desc: "渋谷はIT企業やスタートアップが集まるエリアです。夜遅くまで営業しているジムや、手ぶらで通えるジムが特に人気です。通勤ルート上のジムなら無理なく続けられます。",
  },
];

const priceRange = [
  { category: "大手パーソナルジム（2ヶ月コース）", range: "20万〜40万円" },
  { category: "中価格帯パーソナルジム（月額制）", range: "月3万〜8万円" },
  { category: "低価格パーソナルジム（月額制）", range: "月1万〜3万円" },
  { category: "入会金", range: "0円〜5.5万円" },
];


const faqItems = [
  ...buildAreaPickFaq("shibuya", areaName),
  { q: "渋谷のパーソナルジムの料金相場はいくらですか？", a: "渋谷のパーソナルジムの料金相場は、2ヶ月コースで20万〜40万円です。月額制では月1万〜8万円が目安です。新宿と同程度の水準です。" },
  { q: "渋谷と恵比寿、どちらのジムがおすすめですか？", a: "通いやすさで選ぶことをおすすめします。渋谷の方が選択肢が多く、恵比寿は落ち着いた雰囲気のジムが多い傾向にあります。両駅はJRで1駅（3分）のため、両方のジムを検討するのもおすすめです。" },
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
  { name: "銀座", href: "/area/ginza/" },
  { name: "六本木", href: "/area/roppongi/" },
  { name: "池袋", href: "/area/ikebukuro/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function ShibuyaAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          渋谷はIT企業やスタートアップが集まるビジネスエリアで、再開発が進んでいます。パーソナルジムも新宿と並んで多く集まるエリアで、大手チェーンからおしゃれな個性派ジムまで多彩な選択肢があります。{pickCopy.intro}
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

        <AreaPicksSection slug="shibuya" areaName={areaName} />

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

        <AreaGymList area="shibuya" areaName="渋谷" />

        <p className="mb-8 text-sm">
          <Link href="/db/shibuya/" className="underline text-teal-700 font-medium">→ 渋谷のパーソナルジム店舗データベース(58店・Googleマップの掲載データ)を見る</Link>
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
