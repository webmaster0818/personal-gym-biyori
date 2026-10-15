import type { Metadata } from "next";
import Link from "next/link";
import cityPartners from "@/data/db-city-partners.json";
import { BRAND_FACTS, FACTS_CHECKED_AT } from "@/data/brand-facts";
import { BRAND_PRICES, FEE_SURVEYED_AT } from "@/data/brand-prices";

/*
 * /db/<都市>/ の共通部品（2026-10-15 打ち手3）。
 * - title/description と冒頭の要約は data/gym-db/<都市>.json から機械集計した数字だけを使う
 *   （店舗数・口コミ100件以上の店舗数・評点の中央値・区/市ごとの件数・店名に「女性専用」等を含む店舗数）。
 * - 提携ブランドの導線は data/db-city-partners.json（scripts/gen-db-city-partners.py が作る。
 *   10/15 の公式店舗一覧との照合で存在を確認できた店舗だけ）。料金は data/brand-facts.ts（10/14確認）
 *   → 無ければ data/brand-prices.ts（10/8確認）の公式掲載値。
 */

export type DbGym = { name: string; rating?: number; reviews?: number; address?: string; maps?: string };
export type CityDb = { city: string; fetchedAt: string; query: string; gyms: DbGym[] };

/** 検索語に合わせた地名（Googleマップで検索した語と同じ範囲） */
const LABEL: Record<string, string> = {
  chiba: "千葉市", shibuya: "渋谷", ikebukuro: "池袋", shinjuku: "新宿", yokohama: "横浜", kawasaki: "川崎市",
  osaka: "大阪", nagoya: "名古屋", kyoto: "京都", kobe: "神戸", fukuoka: "福岡", hiroshima: "広島",
  sapporo: "札幌", sendai: "仙台", saitama: "さいたま市（大宮・浦和）", niigata: "新潟市", okayama: "岡山市",
};

export function cityLabel(slug: string, db: CityDb): string {
  return LABEL[slug] ?? db.city;
}

const WOMEN = /女性専用|女性専門|レディース|lady/i;

function areaOf(address = ""): string | null {
  const a = address.replace(/^日本、/, "").replace(/^〒[\d-]+\s*/, "").replace(/^(東京都|北海道|京都府|大阪府|.{2,3}県)/, "");
  const m = a.match(/^([^市区町村\s]+?市)?([^市区町村\s]+?区)?/);
  if (!m) return null;
  return m[2] ?? m[1] ?? null;
}

export function cityStats(db: CityDb) {
  const gyms = db.gyms;
  const ratings = gyms.map((g) => g.rating).filter((r): r is number => typeof r === "number").sort((a, b) => a - b);
  const mid = ratings.length ? (ratings.length % 2 ? ratings[(ratings.length - 1) / 2] : (ratings[ratings.length / 2 - 1] + ratings[ratings.length / 2]) / 2) : null;
  const areas = new Map<string, number>();
  for (const g of gyms) {
    const k = areaOf(g.address);
    if (k) areas.set(k, (areas.get(k) ?? 0) + 1);
  }
  return {
    n: gyms.length,
    over100: gyms.filter((g) => (g.reviews ?? 0) >= 100).length,
    median: mid === null ? null : Math.round(mid * 100) / 100,
    rated: ratings.length,
    areas: [...areas.entries()].sort((a, b) => b[1] - a[1]),
    women: gyms.filter((g) => WOMEN.test(g.name)),
    top: [...gyms].sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0)).slice(0, 3),
  };
}

type PartnerStore = { href: string; name: string; area: string; indexable: boolean };
type Partner = { brand: string; name: string; href: string; stores: PartnerStore[] };

/** 提携ブランドの店舗を判定した市区名（例: shibuya → 渋谷区） */
export function partnerArea(slug: string, db: CityDb): string {
  return (cityPartners.areas as Record<string, string>)[slug] ?? cityLabel(slug, db);
}

export function partnersOf(slug: string): Partner[] {
  const list = ((cityPartners.cities as Record<string, Partner[]>)[slug] ?? []).slice();
  return list.sort((a, b) => b.stores.length - a.stores.length);
}

function shortBrand(name: string) {
  return name.replace(/（.*?）/g, "").replace(/^パーソナルジム/, "");
}

function fmtDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}年${m}月${day}日`;
}

/** title・description（数字はすべて db から集計） */
export function dbCityMetadata(slug: string, db: CityDb): Metadata {
  const L = cityLabel(slug, db);
  const s = cityStats(db);
  const p = partnersOf(slug);
  const title =
    `${L}のパーソナルジム全${s.n}店を口コミ件数順に比較` +
    (s.women.length >= 2 ? `｜女性専用${s.women.length}店` : "") +
    (p.length ? `${s.women.length >= 2 ? "・" : "｜"}公式料金つき` : "");
  const brands = p.slice(0, 3).map((b) => shortBrand(b.name)).join("・");
  const description =
    `${L}のパーソナルジム${s.n}店をGoogleマップの口コミ件数順に全掲載（${fmtDate(db.fetchedAt)}取得）。口コミ100件以上は${s.over100}店` +
    (s.women.length ? `、女性専用・女性専門は${s.women.length}店` : "") +
    (p.length ? `。${brands}${p.length > 3 ? "など" : ""}の店舗と公式料金も掲載。` : "。") +
    "安い・おすすめを探す前の全体比較に。";
  return { title, description };
}

/** 冒頭の要約（h1 の直後） */
export function DbCitySummary({ slug, db }: { slug: string; db: CityDb }) {
  const L = cityLabel(slug, db);
  const s = cityStats(db);
  const p = partnersOf(slug);
  const areas = s.areas.length > 1 ? s.areas.slice(0, 4) : [];
  return (
    <section className="mt-5 rounded-lg border border-teal-200 bg-teal-50/60 p-4 text-sm leading-relaxed" aria-label="このページの要約">
      <p className="font-bold">{L}のパーソナルジム：データで見る要点（Googleマップ {fmtDate(db.fetchedAt)} 取得値の集計）</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          掲載 <b>{s.n}店</b>。口コミ100件以上は <b>{s.over100}店</b>
          {s.median !== null && <>、評点の中央値は <b>{s.median}</b>（評点のある{s.rated}店）</>}。評点は高い値に偏るため、口コミ件数と場所で絞るのが実用的です。
        </li>
        {areas.length > 0 && (
          <li>
            エリア別：{areas.map(([k, v]) => `${k} ${v}店`).join("・")}
          </li>
        )}
        <li>
          口コミ件数が多い順：
          {s.top.map((g, i) => (
            <span key={g.name}>
              {i > 0 && "／"}
              {g.name}（{g.reviews?.toLocaleString() ?? "—"}件）
            </span>
          ))}
        </li>
        {s.women.length > 0 ? (
          <li>
            女性向け：店名に「女性専用」「女性専門」などを含む店舗が <b>{s.women.length}店</b>（{s.women.slice(0, 4).map((g) => g.name).join("／")}
            {s.women.length > 4 ? " ほか" : ""}）。店名で機械的に数えたもので、女性トレーナー在籍などは各店の公式サイトでご確認ください。
          </li>
        ) : (
          <li>女性向け：店名に「女性専用」「女性専門」を含む店舗はこの{s.n}店の中にはありません（店名での判定）。</li>
        )}
        {p.length > 0 && (
          <li>
            料金を比べたい方へ：{partnerArea(slug, db)}に公式サイトで店舗を確認できた提携ブランドは{" "}
            {p.map((b, i) => (
              <span key={b.brand}>
                {i > 0 && "・"}
                <Link href={b.href} className="text-blue-700 underline">{shortBrand(b.name)}</Link>
              </span>
            ))}
            。公式の料金は<a href="#partners" className="text-blue-700 underline">下の表</a>にまとめています。
          </li>
        )}
      </ul>
    </section>
  );
}

function priceOf(brand: string): { text: string; src: string | null; checked: string } | null {
  const f = BRAND_FACTS[brand]?.facts.filter((x) => x.label.startsWith("料金"));
  if (f && f.length) return { text: f.map((x) => x.value).join("／"), src: f[0].src ?? null, checked: FACTS_CHECKED_AT };
  const p = BRAND_PRICES.find((b) => b.slug === brand);
  if (p) return { text: p.price, src: p.officialUrl, checked: FEE_SURVEYED_AT };
  return null;
}

/** この都市に公式で店舗を確認できた提携ブランド → /review/ への導線 */
export function DbCityPartners({ slug, db }: { slug: string; db: CityDb }) {
  const L = partnerArea(slug, db);
  const p = partnersOf(slug);
  if (p.length === 0) return null;
  return (
    <section id="partners" className="mt-10">
      <h2 className="text-lg font-bold">{L}に店舗がある提携ブランドの口コミ・評判と公式料金</h2>
      <p className="mt-2 text-xs text-gray-500">
        各ブランドの公式店舗一覧で、{L}の店舗が存在することを2026年10月15日に確認できたものだけを載せています。料金は公式サイトの掲載値（確認日を併記）で、店舗により異なる場合があります。
      </p>
      <div className="mt-4 space-y-3">
        {p.map((b) => {
          const pr = priceOf(b.brand);
          return (
            <div key={b.brand} className="rounded border border-gray-200 p-4 text-sm">
              <p className="font-bold">
                <Link href={b.href} className="text-blue-700 hover:underline">{b.name}の口コミ・評判</Link>
              </p>
              <p className="mt-1 text-gray-700">
                {L}の店舗：
                {b.stores.map((s, i) => (
                  <span key={s.href}>
                    {i > 0 && "・"}
                    {s.indexable ? <Link href={s.href} className="text-blue-700 hover:underline">{s.name}</Link> : s.name}
                  </span>
                ))}
              </p>
              {pr && (
                <p className="mt-1 text-xs text-gray-600">
                  公式の料金：{pr.text}（
                  {pr.src ? <a href={pr.src} target="_blank" rel="nofollow noopener" className="underline">公式サイト</a> : "公式サイト"}・{pr.checked}確認）
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
