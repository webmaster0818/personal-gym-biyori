import Link from "next/link";
import { BRAND_PRICES, FEE_SURVEYED_AT } from "@/data/brand-prices";
import { priceDist, unpublishedCount } from "@/lib/area-price";

const y = (n: number) => n.toLocaleString();

export default function AreaPriceSection({ areaName }: { areaName: string }) {
  const dist = priceDist();
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">パーソナルジムの料金相場（公式サイトの掲載額・全国）</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        当サイトでは、{areaName}に限定した料金相場は公式サイトの値で集計できていないため掲載していません。以下は、{FEE_SURVEYED_AT}に{BRAND_PRICES.length}ブランドの公式サイトで確認した、各ブランドの最安プランの集計（全国）です。
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">料金の形態</th><th className="px-4 py-3 text-left font-medium">最安プランの範囲</th><th className="px-4 py-3 text-left font-medium">中央値</th></tr></thead>
          <tbody>
            {dist.map((d) => (
              <tr key={d.kind} className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-800">{d.kind}（{d.n}ブランド）</td>
                <td className="px-4 py-3 text-gray-700">{d.kind === "月額制" ? "月" : "総額"}{y(d.min)}円〜{y(d.max)}円</td>
                <td className="px-4 py-3 text-gray-700">{y(d.med)}円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        ※ 月額制にはAIマシンや個室ジムなど、トレーナーが毎回つかない形態も含まれます。金額を公表していないブランドが{unpublishedCount()}ブランドあります。同じブランドでも店舗によって料金が異なる場合があります。ブランド別の金額と公式ページは<Link href="/price/" className="underline text-teal-700">料金一覧</Link>でご確認ください。
      </p>
    </section>
  );
}
