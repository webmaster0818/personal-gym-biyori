import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "目的別パーソナルジム比較【2026年】女性専用・返金保証・分割払い・通い放題",
  description:
    "パーソナルジムを目的別に比較。女性専用、全額返金保証あり、分割払いOK、通い放題など、条件から自分に合うジムを探せます。各ジムのレビューへ直接アクセスでき、選び方のポイントも解説します。",
  alternates: { canonical: "/compare/" },
};

type Gym = { name: string; slug: string };

type Category = {
  id: string;
  title: string;
  lead: string;
  gyms: Gym[];
};

// 各ジムの目的別の特徴は、当サイト各レビューの記載（各ジムの公開情報にもとづく）から整理。2026年6月時点。
const categories: Category[] = [
  {
    id: "women",
    title: "女性専用・女性向けのパーソナルジム",
    lead: "女性専用または女性向けに特化したジム。同性トレーナーや女性だけの空間で、人目を気にせず通いたい方に。",
    gyms: [
      { name: "ビーコンセプト", slug: "b-concept" },
      { name: "カーブス", slug: "curves" },
      { name: "FURDI（ファディー）", slug: "furdi" },
      { name: "fis.lady's", slug: "fis-ladys" },
      { name: "メルメイク", slug: "melmake" },
      { name: "PLUME", slug: "plume" },
      { name: "OUTLINE", slug: "outline" },
      { name: "RACINE（ラシーヌ）", slug: "racine" },
      { name: "リプレシャス", slug: "reprecious" },
      { name: "TOKIEL", slug: "tokiel" },
      { name: "UNDEUX SUPERBODY", slug: "undeux" },
    ],
  },
  {
    id: "refund",
    title: "全額返金保証のあるパーソナルジム",
    lead: "「効果が出なかったら返金」など全額返金保証を設けているジム。初めてで不安な方や、結果にこだわる方の保険になります（保証条件は各公式で要確認）。",
    gyms: [
      { name: "BEYOND（ビヨンド）", slug: "beyond" },
      { name: "RIZAP（ライザップ）", slug: "rizap" },
      { name: "RITA STYLE", slug: "rita-style" },
    ],
  },
  {
    id: "installment",
    title: "分割払い・月額制で始めやすいパーソナルジム",
    lead: "分割払いや月額制に対応し、まとまった初期費用がなくても始めやすいジム。総額だけでなく月々の負担で選びたい方に。",
    gyms: [
      { name: "24/7ワークアウト", slug: "247workout" },
      { name: "Alesco", slug: "alesco" },
      { name: "ビーコンセプト", slug: "b-concept" },
      { name: "チキンジム", slug: "chicken-gym" },
      { name: "CALORIE TRADE JAPAN", slug: "calorie-trade" },
      { name: "OUTLINE", slug: "outline" },
      { name: "RIZAP（ライザップ）", slug: "rizap" },
      { name: "RITA STYLE", slug: "rita-style" },
    ],
  },
  {
    id: "budget",
    title: "料金が手頃・コスパ重視のパーソナルジム",
    lead: "1回あたりの単価や月額を抑えやすいジム。費用面のハードルを下げて始めたい方、続けやすさを重視する方に向いています（最新の料金は各公式で要確認）。",
    gyms: [
      { name: "リアルボディ", slug: "real-body" },
      { name: "エクササイズコーチ", slug: "exercise-coach" },
      { name: "FIT24（フィット24）", slug: "fit24" },
    ],
  },
  {
    id: "unlimited",
    title: "通い放題のあるパーソナルジム",
    lead: "通い放題プランがあるジム。回数を気にせず短期集中で取り組みたい方や、習慣化を重視する方に向いています。",
    gyms: [
      { name: "ACCEPT", slug: "accept" },
      { name: "カーブス", slug: "curves" },
      { name: "ELEMENT", slug: "element" },
      { name: "スターライトフィットネス", slug: "starlight" },
      { name: "FURDI（ファディー）", slug: "furdi" },
    ],
  },
];

const selectionPoints = [
  { title: "総額と月々の負担の両方で見る", desc: "パーソナルジムは「2ヶ月◯◯万円」の総額表示と、分割・月額の表示が混在します。総額と月々の支払いの両方を確認し、無理なく続けられる範囲で選びましょう。" },
  { title: "目的に合うジムタイプを選ぶ", desc: "短期集中で結果を出したいのか、長く習慣化したいのかで向くジムが変わります。返金保証つきの結果コミット型、通い放題の習慣化型など、目的から絞るのが近道です。" },
  { title: "通いやすさ（立地・営業時間）を重視", desc: "続けられるかどうかは立地と営業時間に大きく左右されます。職場や自宅の動線上にあるか、仕事帰りに間に合う営業時間かを確認しましょう。" },
  { title: "無料カウンセリングで相性を確認", desc: "多くのジムが無料カウンセリングや体験を用意しています。トレーナーとの相性や雰囲気は実際に足を運ぶのが確実です。複数を比較して決めましょう。" },
];

const faqs = [
  { q: "女性専用のパーソナルジムはどこがありますか？", a: "当サイト掲載では、ビーコンセプト・カーブス・FURDI・fis.lady's・メルメイク・PLUME・OUTLINE・RACINE・リプレシャス・TOKIEL・UNDEUX SUPERBODY などが女性専用または女性向けに対応しています。各ジムのレビューで料金や特徴を確認できます。" },
  { q: "全額返金保証があるパーソナルジムは？", a: "BEYOND・RIZAP・RITA STYLE などが返金保証を設けています。ただし「30日以内」「条件あり」など保証の範囲はジムごとに異なるため、契約前に必ず公式の保証条件を確認してください。" },
  { q: "分割払いできるパーソナルジムはありますか？", a: "24/7ワークアウト・Alesco・ビーコンセプト・チキンジム・CALORIE TRADE JAPAN・OUTLINE・RIZAP・RITA STYLE などが分割払いや月額制に対応しています。月々の負担額と分割手数料の有無を確認しましょう。" },
  { q: "通い放題のパーソナルジムは？", a: "ACCEPT・カーブス・ELEMENT・スターライトフィットネス・FURDI などに通い放題プランがあります。短期集中や習慣化を重視する方に向いています。" },
  { q: "料金が手頃なパーソナルジムはどこですか？", a: "1回あたりの単価を抑えやすいジムとして、リアルボディ（回数券制・1回3,500円〜・食事指導無料）、エクササイズコーチ（短時間セッション）、FIT24（24時間セルフ型・月額制）などがあります。最新の料金は各公式サイトでご確認ください。" },
];

export default function ComparePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別に比較" }]} />
      <main className="min-h-screen">
        <header className="bg-orange-50 py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">目的別パーソナルジム比較【2026年】</h1>
            <p className="text-gray-700 leading-relaxed">
              「女性専用がいい」「返金保証があると安心」「分割払いで始めたい」「通い放題がいい」——目的・条件からパーソナルジムを探せる比較ハブです。各ジムのレビューへ直接アクセスでき、選び方のポイントもまとめています。
            </p>
            <p className="text-xs text-gray-500 mt-3">各ジムの特徴は公開情報および当サイト各レビューの記載にもとづく整理です（2026年6月時点）。料金・保証・プランの最新内容は各公式サイトでご確認ください。</p>
            <p className="text-sm mt-4"><Link href="/price/" className="text-orange-600 font-medium hover:underline">▶ パーソナルジムの料金相場【2026年・エリア別】はこちら</Link></p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-4xl py-10">
          {/* 目次 */}
          <nav className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
            <p className="font-bold text-gray-700 mb-3 text-sm">目的から探す</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {categories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="text-orange-600 hover:underline">▶ {c.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-orange-200">{cat.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{cat.lead}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.gyms.map((g) => (
                  <Link
                    key={g.slug + cat.id}
                    href={`/review/${g.slug}/`}
                    className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors"
                  >
                    {g.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* 選び方 */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">パーソナルジムの選び方4つのポイント</h2>
            <div className="space-y-4">
              {selectionPoints.map((p, i) => (
                <div key={p.title} className="bg-white border border-gray-200 rounded-lg p-5 flex items-start gap-4">
                  <div className="text-2xl font-black text-orange-300 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-800 cursor-pointer">{faq.q}</summary>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
                }),
              }}
            />
          </section>

          {/* 関連 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">エリアから探す</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {["shibuya", "shinjuku", "ikebukuro", "nagoya", "osaka", "sendai", "chiba", "saitama"].map((a) => (
                <Link key={a} href={`/area/${a}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                  {a}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
