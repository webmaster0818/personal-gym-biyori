/**
 * /area/ の「1回あたりの料金」表（2026-11-12 新設・/area/sapporo/・/area/ikebukuro/ で使用）。
 * 各ブランドの公式料金（税込）を回数で割った値を当サイトが計算して表示する。推計値は出さない。
 */
export type PerSessionRow = {
  gym: string;
  plan: string;
  /** 公式の料金（円）。税込表記のもの。税込・税別の表記がないものは note で明記する */
  yen: number;
  times: number;
  note?: string;
  src: string;
};

const y = (n: number) => n.toLocaleString();

export default function AreaPerSessionTable({
  areaName,
  rows,
  checkedOn,
  footnote,
}: {
  areaName: string;
  rows: PerSessionRow[];
  checkedOn: string;
  footnote?: string;
}) {
  const sorted = [...rows].sort((a, b) => a.yen / a.times - b.yen / b.times);
  return (
    <section className="mb-12" aria-label={`${areaName}のパーソナルジムの1回あたり料金`}>
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">{areaName}の掲載ジムの1回あたりの料金</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        当ページに掲載しているジムの{areaName}の店舗について、公式サイトの料金（{checkedOn}確認）をトレーニング1回あたりの金額に換算し、安い順に並べました。月額制とコース制で料金の形が異なるため、1回あたりで比べると目安をつかみやすくなります。
      </p>
      <div className="overflow-x-auto mb-3">
        <table className="w-full min-w-[560px] text-sm border border-gray-200">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-3 py-2 font-medium">ジム・店舗</th>
              <th className="px-3 py-2 font-medium">公式の料金表記</th>
              <th className="px-3 py-2 font-medium">1回あたり（当サイト計算）</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={`${r.gym}-${r.plan}`} className="border-t border-gray-100 align-top">
                <td className="px-3 py-2 font-medium text-gray-800">{r.gym}</td>
                <td className="px-3 py-2 text-gray-700">
                  <a href={r.src} target="_blank" rel="noopener" className="underline decoration-gray-300">{r.plan}</a>
                  {r.note && <span className="block text-xs text-gray-500">{r.note}</span>}
                </td>
                <td className="px-3 py-2 text-gray-700 whitespace-nowrap">約{y(Math.round(r.yen / r.times))}円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        ※ 1回あたりは「公式の料金 ÷ 回数」で計算し、円未満を四捨五入しています。入会金・キャンペーン・店舗による違いは含まないため、目安としてご覧ください。入会金は下の各ジムの欄をご覧ください。{footnote}
      </p>
    </section>
  );
}
