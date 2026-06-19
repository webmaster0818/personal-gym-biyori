type Props = { gymName: string };

/**
 * 案A: 口コミサマリー枠。
 * Google評価の星数・件数は検証できないため記載しない（捏造しない）。
 * 口コミの傾向整理（各ページ本文）への導線と、Googleマップの実口コミへのリンクを提供する。
 */
export default function ReviewSummary({ gymName }: Props) {
  const q = encodeURIComponent(`${gymName} 口コミ`);
  return (
    <section className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-5" aria-label="口コミサマリー">
      <h2 className="text-base font-bold text-slate-900 mb-2">{gymName}の口コミ・評判まとめ</h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        当ページでは、Googleマップや各種口コミサイトに投稿された{gymName}の評判を、
        <span className="font-medium">トレーナーの質・料金・清潔さ・通いやすさ</span>などの観点別に傾向を整理しています（下部の口コミ分析セクションをご覧ください）。
        最新の個別レビューや評価スコアは、公式のGoogleマップでご確認いただけます。
      </p>
      <a
        href={`https://www.google.com/maps/search/${q}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
      >
        Googleマップで最新の口コミを見る →
      </a>
    </section>
  );
}
