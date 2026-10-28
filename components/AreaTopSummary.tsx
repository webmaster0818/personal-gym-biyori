import { getAreaSummary, PRICE_CHECKED_ON } from "@/lib/area-picks";
import { AREA_ACCESS, ACCESS_CHECKED_ON, ACCESS_CHECKED_ON_BY_SLUG } from "@/lib/area-access";

const y = (n: number) => n.toLocaleString();

/**
 * /area/ 冒頭の概要（2026-10-27 新設）。
 * 「池袋 パーソナルジム」などの検索語に対して、料金の目安・掲載ジム・駅からの位置をページ冒頭で示す。
 * 料金は lib/area-picks.ts の公式表記（PRICE_CHECKED_ON 確認）から、駅からの位置は lib/area-access.ts の
 * 各店舗の公式ページの表記（ACCESS_CHECKED_ON 確認）から表示する。推計値は出さない。
 *
 * 2026-10-28: /db/<都市>/ でも使えるよう任意の引数を追加（既定値のままの /area/ 7ページは表示不変）。
 * - variant="db": 注記を「/area/ で紹介している大手ブランド」の言い方にする
 * - priceCheckedOn: 料金の確認日を上書き（その都市のブランドを再確認した日）
 * - extraStores: /area/ の掲載に無い同一ブランドの市内店舗を表に追加（公式ページで確認済みのもの）
 */
export default function AreaTopSummary({
  slug,
  areaName,
  variant = "area",
  priceCheckedOn,
  extraStores,
}: {
  slug: string;
  areaName: string;
  variant?: "area" | "db";
  priceCheckedOn?: string;
  extraStores?: Record<string, string[]>;
}) {
  const base = getAreaSummary(slug);
  const rows = base.rows.map((r) => ({ ...r, stores: [...r.stores, ...(extraStores?.[r.brandKey] ?? [])] }));
  const { monthly4, course } = base;
  if (rows.length === 0) return null;
  const access = AREA_ACCESS[slug] ?? {};
  const priceDate = priceCheckedOn ?? PRICE_CHECKED_ON;
  const accessDate = ACCESS_CHECKED_ON_BY_SLUG[slug] ?? ACCESS_CHECKED_ON;
  const hasNoTax = rows.some((r) => r.summary?.kind === "monthly4" && /表記なし/.test(r.summary.label));
  return (
    <section className={`${variant === "db" ? "mt-5" : "mb-10"} rounded-xl border border-teal-200 bg-teal-50 p-5 text-sm leading-relaxed text-gray-800`}>
      <h2 className="text-base font-bold text-teal-900">{areaName}のパーソナルジムの料金の目安と店舗の場所</h2>
      <ul className="mt-2 space-y-1">
        {monthly4 && (
          <li>
            ・<strong>月4回の月額制</strong>：
            {monthly4.n > 1 ? `月${y(monthly4.min)}円〜${y(monthly4.max)}円（${monthly4.n}社）` : `月${y(monthly4.min)}円（1社）`}{hasNoTax && "。"}
            {hasNoTax && "※税込・税別の表記がないブランドを含みます"}
          </li>
        )}
        {course && (
          <li>
            ・<strong>回数・期間を決めたコース制</strong>：
            {course.n > 1 ? `総額${y(course.min)}円〜${y(course.max)}円（${course.n}社）` : `総額${y(course.min)}円（1社）`}
          </li>
        )}
      </ul>
      <p className="mt-1 text-xs text-gray-600">
        {variant === "db"
          ? `${areaName}に店舗がある大手${rows.length}ブランドの公式料金（${priceDate}確認）を、月4回の月額とコース総額に分けて集計しています。入会金は含みません。上の一覧（Googleマップ掲載店）全体の相場ではありません。`
          : `当ページに掲載している${rows.length}ブランドの公式料金（${priceDate}確認）を、月4回の月額とコース総額に分けて集計しています。入会金は含みません。`}
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[560px] border border-teal-100 bg-white text-xs sm:text-sm">
          <thead>
            <tr className="bg-teal-100 text-left text-teal-900">
              <th className="px-3 py-2 font-medium">ジム・店舗</th>
              <th className="px-3 py-2 font-medium">駅からの位置（公式表記）</th>
              <th className="px-3 py-2 font-medium">料金（公式表記）</th>
            </tr>
          </thead>
          <tbody>
            {rows.flatMap((r) =>
              r.stores.map((st, i) => (
                <tr key={`${r.name}-${st}`} className="border-t border-teal-100 align-top">
                  <td className="px-3 py-2">{r.name.replace(/（.*?）/g, "")} {st}</td>
                  <td className="px-3 py-2">{access[`${r.brandKey}:${st}`] ?? "各店舗の公式ページでご確認ください"}</td>
                  <td className="px-3 py-2">{i === 0 ? r.summary?.label ?? "下の各ジムの欄をご覧ください" : "同上"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-600">
        {variant === "db"
          ? `駅からの位置は各店舗の公式ページの記載（${accessDate}確認）です。料金・入会金・キャンペーンの詳細は各公式サイトでご確認ください。`
          : `駅からの位置は各店舗の公式ページの記載（${accessDate}確認）です。料金・入会金・キャンペーンの詳細は、下の各ジムの欄と公式サイトでご確認ください。`}
      </p>
    </section>
  );
}
