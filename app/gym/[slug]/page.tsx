import type { Metadata } from "next";
import { jaDate } from "@/lib/date-ja";
import Link from "next/link";
import { notFound } from "next/navigation";
import idx from "@/data/gym-index.json";

type Entry = {
  slug: string; name: string; rating?: number | null; reviews?: number | null;
  address: string; maps: string; area: string; areaName: string; fetchedAt: string;
};

const entries = idx.entries as Entry[];

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === decodeURIComponent(slug));
  if (!e) return {};
  const head = `${e.areaName}のパーソナルジム「${e.name}」のGoogleマップ掲載データ（評点${e.rating ?? "—"}・口コミ${e.reviews?.toLocaleString()}件・${jaDate(e.fetchedAt)}取得）と所在地です。`;
  const fullDesc = `${head}評点・件数は取得時点の数値で、当サイトによる創作はありません。料金・体験については公式サイトでのご確認をおすすめします。`;
  // 店名が長い店舗は description が160字(HTMLエスケープ後)を超えるため、同じ内容を短い言い回しにする
  const escapedLen = (t: string) => t.replace(/&/g, "&amp;").replace(/[<>"']/g, "&#x00;").length;
  const candidates = [
    fullDesc,
    `${head}評点・件数は取得時点の数値です。料金・体験は公式サイトにてご確認ください。`,
    `${head}料金・体験は公式サイトにてご確認ください。`,
    head,
  ];
  const description = candidates.find((t) => escapedLen(t) <= 160) ?? head;
  return {
    title: `${e.name}（${e.areaName}）の口コミ評点【Googleマップ口コミ${e.reviews?.toLocaleString()}件】`,
    description,
    // 2026-09-28: 店舗個別ページ1,973件はsitemapの74%を占めながら、
    // Googleにクロールされず「検出 - インデックス未登録」のまま滞留していた。
    // クロール枠をレビュー・エリア・比較ページに集中させるためnoindexにする。
    // follow は維持し、このページからエリア・DBへのリンクは引き続きたどれるようにする。
    // ユーザー向けの導線(エリアページ内の一覧)は従来どおり残す。
    robots: { index: false, follow: true },
  };
}

export default async function GymPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === decodeURIComponent(slug));
  if (!e) notFound();
  const cityAll = entries.filter((x) => x.area === e.area);
  const cityPeers = cityAll.filter((x) => x.slug !== e.slug).slice(0, 5);
  const rank = cityAll.findIndex((x) => x.slug === e.slug) + 1;
  const nationalRank = entries.findIndex((x) => x.slug === e.slug) + 1;
  const cityRatings = cityAll.map((x) => x.rating).filter((r): r is number => typeof r === "number");
  const cityAvgRating = cityRatings.length ? (cityRatings.reduce((a, b) => a + b, 0) / cityRatings.length) : null;
  const cityCounts = cityAll.map((x) => x.reviews || 0).sort((a, b) => a - b);
  const cityMedianCount = cityCounts.length ? cityCounts[Math.floor(cityCounts.length / 2)] : null;
  const mapQuery = encodeURIComponent(`${e.name} ${e.address.replace("日本、", "")}`);
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "店舗データベース", "item": "https://personal-gym-biyori.com/db/" },
          { "@type": "ListItem", "position": 2, "name": e.areaName, "item": `https://personal-gym-biyori.com/db/${e.area}/` },
          { "@type": "ListItem", "position": 3, "name": e.name },
        ],
      }) }} />
      <p className="text-xs text-gray-400">
        <Link href="/db/" className="underline">店舗データベース</Link> &gt; <Link href={`/db/${e.area}/`} className="underline">{e.areaName}</Link> &gt; {e.name}
      </p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{e.name}</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {e.areaName}エリアでGoogleマップに掲載されているパーソナルジムです。以下の評点・口コミ件数は{jaDate(e.fetchedAt)}時点のGoogleマップの表示値をそのまま転記したもので、当サイトによる評価ではありません。
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm border border-gray-200">
          <tbody className="align-top">
            <tr className="border-t border-gray-200"><th className="w-44 bg-gray-50 px-3 py-2 text-left font-medium">Googleマップ評点</th><td className="px-3 py-2">{e.rating ?? "—"}（5点満点・{jaDate(e.fetchedAt)}取得）</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミ件数</th><td className="px-3 py-2">{e.reviews?.toLocaleString()}件（{e.areaName}の収録ジム中 {rank}位）</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">所在地</th><td className="px-3 py-2">{e.address.replace("日本、", "")}</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミを読む</th><td className="px-3 py-2">{e.maps ? <a href={e.maps} target="_blank" rel="nofollow noopener" className="underline text-blue-700">Googleマップで口コミ本文を確認する</a> : "—"}</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">※料金・体験・営業時間は変動するため、公式サイト・Googleマップにて最新情報をご確認ください。当ページはGoogleマップの掲載データを転記したもので、提携関係を示すものではありません。</p>

      <h2 className="mt-10 text-lg font-bold">地図・場所</h2>
      <div className="mt-3 rounded-xl overflow-hidden border border-gray-200">
        <iframe
          src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
          title={`${e.name}の地図`}
          className="w-full"
          style={{ height: 320, border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-xs text-gray-400">地図はGoogleマップのライブ表示です。最新の口コミ本文・写真・営業時間は地図内または<a href={e.maps || `https://www.google.com/maps/search/${mapQuery}`} target="_blank" rel="nofollow noopener" className="underline">Googleマップ本体</a>でご確認ください。</p>

      <h2 className="mt-10 text-lg font-bold">データで見る{e.name}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 list-disc pl-6">
        <li>口コミ件数{e.reviews?.toLocaleString()}件は、{e.areaName}の収録{cityAll.length}ジム中<strong>{rank}位</strong>・全国の収録{entries.length.toLocaleString()}ジム中<strong>{nationalRank}位</strong>です（{jaDate(e.fetchedAt)}取得）。</li>
        {typeof e.rating === "number" && cityAvgRating !== null && (
          <li>評点{e.rating}は、{e.areaName}の収録ジムの平均（{cityAvgRating.toFixed(2)}）と比べて{e.rating >= cityAvgRating ? "同等以上" : "低い水準"}です。当サイトが32都市で取得したデータでは評点4.8以上が85.7%を占めるため、店舗間の差は口コミ件数と口コミ本文で確認することをおすすめします。</li>
        )}
        {cityMedianCount !== null && (
          <li>{e.areaName}の収録ジムの口コミ件数の中央値は{cityMedianCount.toLocaleString()}件で、当ジムの件数は中央値を{(e.reviews || 0) >= cityMedianCount ? "上回っています" : "下回っています"}。</li>
        )}
      </ul>

      <h2 className="mt-10 text-lg font-bold">ジム選びの3つのチェックポイント</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-gray-600">
        <li><strong>口コミ件数と内容</strong>——当サイトが32都市1,878店で取得したデータでは評点4.8以上が85.7%を占めるため、評点よりも件数（実績の量）と本文の具体性で比較するのが実用的です（<Link href="/db/stats/" className="underline text-blue-700">全国統計</Link>）。</li>
        <li><strong>指導形式と得意分野</strong>——ダイエット特化・ボディメイク・機能改善など得意分野が店ごとに異なります。目的に合うトレーナーが在籍しているかを、体験トレーニングでご確認ください。</li>
        <li><strong>通いやすさと料金体系</strong>——週1〜2回の継続が前提となります。入会金・回数券・定額制の違いについては、公式サイトにて最新情報をご確認ください。</li>
      </ol>

      {cityPeers.length > 0 && (
        <>
          <h2 className="mt-10 text-lg font-bold">{e.areaName}の口コミ上位ジム</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border border-gray-200">
              <thead><tr className="bg-gray-50 text-left"><th className="px-3 py-2 font-medium">ジム</th><th className="px-3 py-2 font-medium whitespace-nowrap">評点</th><th className="px-3 py-2 font-medium whitespace-nowrap">口コミ件数</th></tr></thead>
              <tbody>
                {cityPeers.map((s) => (
                  <tr key={s.slug} className="border-t border-gray-200">
                    <td className="px-3 py-2"><Link href={`/gym/${s.slug}/`} className="underline text-blue-700">{s.name}</Link></td>
                    <td className="px-3 py-2">{s.rating ?? "—"}</td>
                    <td className="px-3 py-2">{s.reviews?.toLocaleString()}件</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="mt-10 text-sm">
        <Link href={`/db/${e.area}/`} className="underline text-blue-700">→ {e.areaName}の店舗データベースへ戻る</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/" className="underline text-blue-700">→ パーソナルジムの比較へ</Link>
      </p>
    </main>
  );
}
