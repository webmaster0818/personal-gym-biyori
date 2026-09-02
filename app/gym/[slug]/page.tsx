import type { Metadata } from "next";
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
  return {
    title: `${e.name}(${e.areaName})の口コミ評点【Googleマップ実測${e.reviews?.toLocaleString()}件】`,
    description: `${e.areaName}のパーソナルジム「${e.name}」のGoogleマップ実測データ(評点${e.rating ?? "—"}・口コミ${e.reviews?.toLocaleString()}件・${e.fetchedAt}取得)と所在地。評点・件数は取得時点の実数のみで創作はありません。料金・体験は公式サイトでの確認を推奨しています。`,
  };
}

export default async function GymPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === decodeURIComponent(slug));
  if (!e) notFound();
  const cityPeers = entries.filter((x) => x.area === e.area && x.slug !== e.slug).slice(0, 5);
  const rank = entries.filter((x) => x.area === e.area).findIndex((x) => x.slug === e.slug) + 1;
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs text-gray-400">
        <Link href="/db/" className="underline">全店データベース</Link> &gt; <Link href={`/db/${e.area}/`} className="underline">{e.areaName}</Link> &gt; {e.name}
      </p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{e.name}</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {e.areaName}エリアで実在確認できたパーソナルジムです。以下の評点・口コミ件数は{e.fetchedAt}時点のGoogleマップ表示値をそのまま転記した実数で、当サイトによる評価ではありません。
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm border border-gray-200">
          <tbody className="align-top">
            <tr className="border-t border-gray-200"><th className="w-44 bg-gray-50 px-3 py-2 text-left font-medium">Gマップ評点</th><td className="px-3 py-2">{e.rating ?? "—"}(5点満点・{e.fetchedAt}取得)</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミ件数</th><td className="px-3 py-2">{e.reviews?.toLocaleString()}件({e.areaName}の収録ジム中 {rank}位)</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">所在地</th><td className="px-3 py-2">{e.address.replace("日本、", "")}</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミを読む</th><td className="px-3 py-2">{e.maps ? <a href={e.maps} target="_blank" rel="nofollow noopener" className="underline text-blue-700">Googleマップで口コミ本文を確認する</a> : "—"}</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">※料金・体験・営業時間は変動するため、必ず公式サイト・Googleマップで最新情報をご確認ください。当ページは実測データの転記であり、提携関係を意味しません。</p>

      <h2 className="mt-10 text-lg font-bold">ジム選びの3つのチェックポイント</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-gray-600">
        <li><strong>口コミ件数と内容</strong>——当サイトの32都市1,878店の実測では評点4.8以上が85.7%を占めるため、評点よりも件数(実績の量)と本文の具体性で比較するのが実用的です(<Link href="/db/stats/" className="underline text-blue-700">全国統計</Link>)。</li>
        <li><strong>指導形式と得意分野</strong>——ダイエット特化・ボディメイク・機能改善など得意分野が店ごとに異なります。目的に合うトレーナーがいるかを体験で確認しましょう。</li>
        <li><strong>通いやすさと料金体系</strong>——週1〜2回の継続が前提です。入会金・回数券・サブスク型の違いは公式サイトで最新情報をご確認ください。</li>
      </ol>

      {cityPeers.length > 0 && (
        <>
          <h2 className="mt-10 text-lg font-bold">{e.areaName}の口コミ上位ジム</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {cityPeers.map((s) => (
              <li key={s.slug}>
                <Link href={`/gym/${s.slug}/`} className="underline text-blue-700">{s.name}</Link>
                <span className="text-gray-400 ml-2">{s.reviews?.toLocaleString()}件・{s.rating}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-10 text-sm">
        <Link href={`/db/${e.area}/`} className="underline text-blue-700">→ {e.areaName}の全店データベースへ戻る</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/" className="underline text-blue-700">→ パーソナルジムの比較へ</Link>
      </p>
    </main>
  );
}
