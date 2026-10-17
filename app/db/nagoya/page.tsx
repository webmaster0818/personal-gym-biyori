import type { Metadata } from "next";
import { jaDate } from "@/lib/date-ja";
import Link from "next/link";
import db from "@/data/gym-db/nagoya.json";

import gymIdx from "@/data/gym-index.json";
import { dbCityMetadata, DbCitySummary, DbCityPartners, cityLabel, type CityDb } from "@/components/DbCity";

const gymSlugMap = new Map(
  (gymIdx.entries as { slug: string; name: string; address: string }[]).map((e) => [e.name + (e.address || ""), e.slug])
);
function gymSlugOf(g: { name: string; address?: string }): string | undefined {
  return gymSlugMap.get(g.name + (g.address || ""));
}

export const metadata: Metadata = dbCityMetadata("nagoya", db as CityDb);

type Gym = { name: string; rating?: number; reviews?: number; address?: string; maps?: string };

const faqs = [
  {
    q: "このデータベースはどのように作成していますか？",
    a: "Googleマップ（Places API）で「パーソナルジム 名古屋」を検索し、営業中と確認できた店舗の名称・評点・口コミ件数・所在地を2026年8月29日に機械的に取得したものです。当サイトとの提携の有無に関係なく掲載しており、評点・件数は取得時点のGoogleマップの表示値をそのまま転記しています（当サイトによる評価ではありません）。",
  },
  {
    q: "評点はどこもほとんど4.8〜5.0ですが、選ぶ際の基準を教えてください。",
    a: "パーソナルジムのGoogleマップ評点は高評価に偏る傾向があるため、評点だけでは差がつきません。①口コミ件数（実績の量）②通いやすい場所③料金体系・体験の有無、の順で絞り込むことをおすすめします。料金や体験の詳細は各ジムの公式サイトでご確認ください。",
  },
  {
    q: "このデータベースに掲載されていないジムもありますか？",
    a: "あります。Googleマップの検索結果（上位60件）をもとにしているため、登録がない店舗や検索にかかりにくい店舗は含まれません。掲載範囲は定期的な再取得により拡充していきます。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function NagoyaDbPage() {
  const gyms = db.gyms as Gym[];
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h1 className="text-2xl font-bold sm:text-3xl">{cityLabel("nagoya", db as CityDb)}のパーソナルジム{gyms.length >= 60 ? "上位" : ""}{gyms.length}店（口コミ件数順の一覧）</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        名古屋エリアで実在を確認したパーソナルジム{gyms.length}店の一覧です（Googleマップの掲載データ・{jaDate(db.fetchedAt)}取得・口コミ件数順）。
        編集部が絞り込んだおすすめは<Link href="/area/nagoya/" className="underline text-blue-700">名古屋のパーソナルジムおすすめ8選</Link>でご紹介しています。
        当ページは、地域のパーソナルジムを一覧で確認したい方に向けて、提携の有無に関係なく、Googleマップの検索結果の上位（最大60件）のうち営業中と確認できた店舗を掲載しています。
      </p>
      <DbCitySummary slug="nagoya" db={db as CityDb} />

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm border border-gray-200">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-3 py-2 font-medium">#</th>
              <th className="px-3 py-2 font-medium">ジム名</th>
              <th className="px-3 py-2 font-medium whitespace-nowrap">Googleマップ評点</th>
              <th className="px-3 py-2 font-medium whitespace-nowrap">口コミ件数</th>
              <th className="px-3 py-2 font-medium">所在地</th>
            </tr>
          </thead>
          <tbody>
            {gyms.map((g, i) => (
              <tr key={g.name + i} className="border-t border-gray-200 align-top">
                <td className="px-3 py-2 text-gray-400">{i + 1}</td>
                <td className="px-3 py-2 font-medium">
                  {gymSlugOf(g) ? (
                    <Link href={`/gym/${gymSlugOf(g)}/`} className="text-blue-700 hover:underline">{g.name}</Link>
                  ) : g.maps ? (
                    <a href={g.maps} target="_blank" rel="nofollow noopener" className="text-blue-700 hover:underline">{g.name}</a>
                  ) : (
                    g.name
                  )}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{g.rating ?? "—"}</td>
                <td className="px-3 py-2 whitespace-nowrap">{g.reviews?.toLocaleString() ?? "—"}件</td>
                <td className="px-3 py-2 text-xs text-gray-500">{(g.address || "").replace("日本、", "")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        ※評点・口コミ件数はGoogleマップの{jaDate(db.fetchedAt)}時点の表示値をそのまま転記したもので、当サイトによる評価ではありません。営業状況・料金は、各公式サイトにてご確認ください。ジム名のリンクは、当サイトの店舗ページまたはGoogleマップの該当ページにつながります。
      </p>

      <DbCityPartners slug="nagoya" db={db as CityDb} />

      <h2 className="mt-10 text-lg font-bold">よくある質問</h2>
      <div className="mt-3 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold text-sm">{f.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-8 text-sm">
        <Link href="/area/nagoya/" className="underline text-blue-700">→ 名古屋のおすすめ8選（編集部の絞り込み）</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/area/tokyo/" className="underline text-blue-700">→ 東京エリア一覧</Link>
      </p>
    </main>
  );
}
