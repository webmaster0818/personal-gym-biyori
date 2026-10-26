import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import StorePrice from "@/components/StorePrice";
import { FIT24_AREAS, FIT24_AREA_CHECKED } from "@/data/fit24-areas";

// FIT24 のエリアページ（町田・船橋・札幌・仙台）。
// 2026-10-26 施主指示「公式通りに戻す」: 公式に存在しない店名（町田店など）と根拠のない記述をやめ、
// 公式の店舗データにある実在店舗だけを掲載する。
const FELMAT = "https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A";
const ORDER = ["machida", "funabashi", "sapporo", "sendai"];

export function fit24AreaFaq(slug: string) {
  const a = FIT24_AREAS[slug];
  const n = a.stores.length;
  const names = a.stores.map((s) => s.name).join("・");
  const h24 = a.stores.filter((s) => s.hours.startsWith("24時間"));
  const noHours = a.stores.filter((s) => !s.hours).map((s) => s.name);
  const prices = Array.from(new Set(a.stores.map((s) => `${s.monthly}円（税込${s.monthlyInc}円）`)));
  return [
    {
      q: `${a.city}にFIT24は何店舗ありますか？`,
      a: `FIT24公式の店舗一覧（${FIT24_AREA_CHECKED}確認）では、${a.city}内の店舗は${names}の${n}店舗です。`,
    },
    {
      q: `${a.label}のFIT24は24時間営業ですか？`,
      a:
        `${h24.length === n ? (n === 1 ? "" : `${n}店舗とも`) : `${n}店舗のうち${h24.map((s) => s.name).join("・")}の`}店舗ページに「24時間営業、年中無休」と記載されています。` +
        (noHours.length ? `${noHours.join("・")}の店舗ページには営業時間の欄がありません。` : ""),
    },
    {
      q: `${a.label}のFIT24の月会費はいくらですか？`,
      a: `各店舗ページに表示されている通常プランの月会費は${prices.join("、")}です（税込は当サイトが計算）。家族・U22・高校生プランや入会時の費用は、FIT24の総合レビューページ（/review/fit24/）にまとめています。`,
    },
  ];
}

export default function Fit24AreaPage({ slug }: { slug: string }) {
  const a = FIT24_AREAS[slug];
  const faqItems = fit24AreaFaq(slug);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
  const others = ORDER.filter((s) => s !== slug);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "FIT24", href: "/review/fit24/" },
          { name: a.label },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">FIT24 {a.label}の店舗（{a.city}・{a.stores.length}店舗）</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: {FIT24_AREA_CHECKED}（FIT24公式の店舗データで確認）</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          FIT24公式の店舗一覧（全122店舗）のうち、{a.city}にある店舗は{a.stores.map((s) => s.name).join("・")}の{a.stores.length}店舗です。
          住所・アクセス・営業時間・電話番号・月会費は、各店舗の公式ページの記載をそのまま掲載しています。
        </p>
        <p className="text-sm mb-6">
          <a href={FELMAT} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            FIT24 の公式サイトはこちら
          </a>
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{a.label}の店舗一覧</h2>
          <div className="space-y-6">
            {a.stores.map((s) => (
              <div key={s.name} className="overflow-x-auto">
                <h3 className="font-bold text-gray-800 mb-2">FIT24 {s.name}</h3>
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <tbody>
                    {[
                      ["住所", `〒${s.zip} ${s.address}`],
                      ["アクセス", s.access],
                      ["営業時間", s.hours || "店舗ページに営業時間の欄がありません"],
                      ["電話番号", s.tel],
                      ["月会費（通常プラン）", `${s.monthly}円（税込${s.monthlyInc}円）`],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-gray-100">
                        <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-24 sm:w-36 align-top">{label}</th>
                        <td className="px-4 py-3 text-gray-800">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-1">
                  出典: <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">FIT24 {s.name} 公式ページ</a>（{FIT24_AREA_CHECKED}確認）
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※月会費は店舗ページの表示（税抜）で、税込は当サイトが10%を加えて計算しています。キャンペーンや入会時の費用で実際の支払額は変わります。
          </p>
        </section>

        <div className="mb-10 text-center">
          <a href={FELMAT} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <StorePrice brandSlug="fit24" brandName="FIT24" />

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">FIT24の料金プラン・入会時の費用・口コミの傾向はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/fit24/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">FIT24の総合レビューを見る</Link>
              <a href={FELMAT} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">ほかのエリア</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {others.map((o) => (
              <Link key={o} href={`/review/fit24/${o}/`} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">
                FIT24 {FIT24_AREAS[o].label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
