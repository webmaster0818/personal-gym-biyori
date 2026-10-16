import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エリア別パーソナルジムおすすめ一覧【全国35エリア】",
  description:
    "パーソナルジムのおすすめをエリア別にご紹介します。新宿・渋谷・銀座など東京主要エリアから、横浜・大阪・名古屋・福岡・札幌まで全国35エリアの料金相場と選び方をまとめています。都市別の全店データベースも公開しています。",
};

const REGIONS: { region: string; areas: { slug: string; name: string }[] }[] = [
  {
    region: "東京",
    areas: [
      { slug: "tokyo", name: "東京(全体)" },
      { slug: "shinjuku", name: "新宿" },
      { slug: "shibuya", name: "渋谷" },
      { slug: "ikebukuro", name: "池袋" },
      { slug: "ginza", name: "銀座" },
      { slug: "ebisu", name: "恵比寿" },
      { slug: "roppongi", name: "六本木" },
      { slug: "akasaka", name: "赤坂" },
      { slug: "azabu", name: "麻布" },
      { slug: "shinagawa", name: "品川" },
      { slug: "ueno", name: "上野" },
      { slug: "nakameguro", name: "中目黒" },
      { slug: "jiyugaoka", name: "自由が丘" },
      { slug: "kichijoji", name: "吉祥寺" },
      { slug: "machida", name: "町田" },
      { slug: "tachikawa", name: "立川" },
    ],
  },
  {
    region: "関東(東京以外)",
    areas: [
      { slug: "yokohama", name: "横浜" },
      { slug: "kawasaki", name: "川崎" },
      { slug: "chiba", name: "千葉" },
      { slug: "funabashi", name: "船橋" },
      { slug: "saitama", name: "さいたま" },
      { slug: "omiya", name: "大宮" },
      { slug: "takasaki", name: "高崎" },
    ],
  },
  {
    region: "関西",
    areas: [
      { slug: "osaka", name: "大阪" },
      { slug: "umeda", name: "梅田" },
      { slug: "namba", name: "難波" },
      { slug: "kyoto", name: "京都" },
      { slug: "kobe", name: "神戸" },
    ],
  },
  {
    region: "その他の主要都市",
    areas: [
      { slug: "sapporo", name: "札幌" },
      { slug: "sendai", name: "仙台" },
      { slug: "niigata", name: "新潟" },
      { slug: "nagoya", name: "名古屋" },
      { slug: "hiroshima", name: "広島" },
      { slug: "okayama", name: "岡山" },
      { slug: "fukuoka", name: "福岡" },
    ],
  },
];

export default function AreaIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://personal-gym-biyori.com/"},
          {"@type": "ListItem", "position": 2, "name": "エリア別", "item": "https://personal-gym-biyori.com/area/"}
        ]
      }) }} />
      <Breadcrumb items={[{ name: "エリア別" }]} />
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">エリア別パーソナルジムおすすめ一覧</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        パーソナルジムのおすすめと料金相場を、全国35エリア別にまとめています。
        候補を絞り込みたい方は下記のエリア記事を、エリア内の全店を確認したい方は
        <Link href="/db/" className="underline text-blue-700">都市別の全店データベース</Link>(Googleマップの掲載データ)をご覧ください。
      </p>

      {REGIONS.map((r) => (
        <section key={r.region} className="mt-8">
          <h2 className="text-lg font-bold">{r.region}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {r.areas.map((a) => (
              <Link
                key={a.slug}
                href={`/area/${a.slug}/`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm hover:border-orange-400 hover:text-orange-600"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-600">
        <h2 className="text-base font-bold text-gray-900">エリア記事とデータベースの違い</h2>
        <p className="mt-2">
          エリア記事は、編集部がおすすめを絞り込み、料金・特徴を比較したページです。
          <Link href="/db/" className="underline text-blue-700">都市別データベース</Link>は、提携の有無に関係なく実在を確認できた全店を口コミ件数順に掲載したページです。
          両方を併せてご覧いただくと、候補の絞り込みと見落としの確認を同時に行えます。
        </p>
      </section>
    </main>
  );
}
