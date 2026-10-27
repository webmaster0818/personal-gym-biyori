import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaPicksSection from "@/components/AreaPicksSection";
import AreaPriceSection from "@/components/AreaPriceSection";
import { areaPriceFaq } from "@/lib/area-price";
import { getAreaPickCopy, buildAreaPickFaq } from "@/lib/area-picks";
import AreaGymList from "@/components/AreaGymList";
import AreaTopSummary from "@/components/AreaTopSummary";

const pickCopy = getAreaPickCopy("ikebukuro", "池袋");

export const metadata: Metadata = {
  title: pickCopy.title,
  description: pickCopy.description,
};

const areaName = "池袋";

const selectionPoints = [
  {
    title: "東口・西口の特色の違いを把握する",
    desc: "池袋駅東口は商業施設が充実し賑やか、西口はオフィス街で落ち着いた雰囲気です。仕事帰りに通うなら西口、買い物ついでなら東口と、ライフスタイルに合わせてエリアを選ぶことをおすすめします。",
  },
  {
    title: "埼玉方面からのアクセスの良さを活かす",
    desc: "池袋はJR・東武・西武・地下鉄が乗り入れるターミナル駅で、埼玉県からのアクセスが特に良好です。大宮やさいたま方面から通う場合、池袋は都内で最も通いやすいエリアの一つです。",
  },
  {
    title: "複数社の体験を比較する",
    desc: "池袋は主要チェーンが揃っているため、2〜3社の無料カウンセリングを受けて比較するのが効果的です。各ジムの雰囲気やトレーナーの相性を確かめてから決めることをおすすめします。",
  },
];



const faqItems = [
  ...buildAreaPickFaq("ikebukuro", areaName),
  areaPriceFaq(areaName),
  { q: "埼玉から池袋のジムに通うのは現実的ですか？", a: "はい、池袋は埼玉方面からのアクセスが良好です。JR・東武・西武各線で乗り換えなしで来られるため、大宮や所沢方面から通う方も多くいます。" },
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
  { name: "さいたま", href: "/area/saitama/" },
  { name: "銀座", href: "/area/ginza/" },
  { name: "東京全域", href: "/area/tokyo/" },
];

export default function IkebukuroAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "エリア別", href: "/area/" }, { name: "東京", href: "/area/tokyo/" }, { name: areaName }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{pickCopy.title}</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年10月22日</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          池袋は新宿・渋谷と並ぶ東京の主要ターミナル駅で、埼玉方面からのアクセスが特に良好なエリアです。東口の商業エリアと西口のオフィス街にそれぞれパーソナルジムが出店しており、ライフスタイルに合わせた選択ができます。{pickCopy.intro}
        </p>

        <AreaTopSummary slug="ikebukuro" areaName="池袋" />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}のパーソナルジム選びのポイント</h2>
          <div className="space-y-4">
            {selectionPoints.map((p, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {p.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p></div>))}
          </div>
        </section>

        <AreaPriceSection areaName={areaName} />

        <AreaPicksSection slug="ikebukuro" areaName={areaName} />

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

        <AreaGymList area="ikebukuro" areaName="池袋" />

        <p className="mb-8 text-sm">
          <Link href="/db/ikebukuro/" className="underline text-teal-700 font-medium">→ 池袋のパーソナルジム店舗データベース(56店・Googleマップの掲載データ)を見る</Link>
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
