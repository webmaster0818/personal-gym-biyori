import Link from "next/link";
import { BRAND_FACTS, FACTS_CHECKED_AT } from "@/data/brand-facts";

/*
 * 2026-10-14 追加: 「ブランド名 口コミ／評判」で調べる人が最初に確かめたい事実を、
 * 公式サイトの該当ページへのリンクつきで1か所にまとめる。
 * ルール: 公式ページで確認できた事実だけを書く。確認できなかった項目は「公式に記載なし」と書き、推測で埋めない。
 * 口コミ本文の引用・創作、自作の星や点数は載せない。
 */
export default function BrandFactCheck({ slug }: { slug: string }) {
  const b = BRAND_FACTS[slug];
  if (!b) return null;
  return (
    <section className="my-8 rounded-xl border border-gray-300 bg-white" aria-label={`${b.name}の公式情報`}>
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-base font-bold text-gray-900">
          {b.name}の口コミ・評判を読む前に：公式サイトで確認できる事実
        </h2>
        <p className="mt-1 text-[11px] text-gray-500">{FACTS_CHECKED_AT}に各項目の公式ページを確認。出典リンク先で最新情報を確認できます。</p>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {b.facts.map((f) => (
            <tr key={f.label} className="border-b border-gray-100 align-top">
              <th className="w-28 whitespace-nowrap bg-gray-50 px-4 py-3 text-left font-medium text-gray-700">{f.label}</th>
              <td className="px-4 py-3 text-gray-800">
                {f.value}
                {f.src && (
                  <a href={f.src} target="_blank" rel="nofollow noopener noreferrer" className="ml-2 text-xs text-gray-500 underline">
                    出典
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {b.qa.length > 0 && (
        <div className="px-5 py-4">
          <h3 className="mb-2 text-sm font-bold text-gray-900">口コミ・評判で多い疑問への答え（事実ベース）</h3>
          <dl className="space-y-3 text-sm">
            {b.qa.map((x) => (
              <div key={x.q}>
                <dt className="font-medium text-gray-800">Q. {x.q}</dt>
                <dd className="mt-1 leading-relaxed text-gray-700">A. {x.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {b.caution && <p className="px-5 pb-4 text-xs leading-relaxed text-gray-600">※{b.caution}</p>}
      <p className="px-5 pb-4 text-xs">
        <Link href="/price/" className="text-teal-700 underline">→ 主要ブランドの公表料金を一覧で比べる</Link>
      </p>
    </section>
  );
}
