import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "全国32都市のパーソナルジム全データベース【約1,900店・実在確認済み】",
  description:
    "全国32都市のパーソナルジム約1,900店を、Googleマップの実測データ(評点・口コミ件数・2026年8月29日取得)で都市別に一覧化した全店データベースのハブページ。提携の有無に関係なく実在確認できた店舗を口コミ件数順に掲載しています。評点・件数は取得時点の実数のみで創作はありません。",
};

const CITIES: { slug: string; name: string; region: string }[] = [
  { slug: "sapporo", name: "札幌", region: "北海道・東北" },
  { slug: "sendai", name: "仙台", region: "北海道・東北" },
  { slug: "aomori", name: "青森", region: "北海道・東北" },
  { slug: "akita", name: "秋田", region: "北海道・東北" },
  { slug: "yamagata", name: "山形", region: "北海道・東北" },
  { slug: "morioka", name: "盛岡", region: "北海道・東北" },
  { slug: "shinjuku", name: "新宿", region: "首都圏" },
  { slug: "shibuya", name: "渋谷", region: "首都圏" },
  { slug: "ikebukuro", name: "池袋", region: "首都圏" },
  { slug: "yokohama", name: "横浜", region: "首都圏" },
  { slug: "kawasaki", name: "川崎", region: "首都圏" },
  { slug: "saitama", name: "さいたま", region: "首都圏" },
  { slug: "chiba", name: "千葉", region: "首都圏" },
  { slug: "utsunomiya", name: "宇都宮", region: "北関東・甲信越" },
  { slug: "mito", name: "水戸", region: "北関東・甲信越" },
  { slug: "nagano", name: "長野", region: "北関東・甲信越" },
  { slug: "gifu", name: "岐阜", region: "東海" },
  { slug: "niigata", name: "新潟", region: "北関東・甲信越" },
  { slug: "toyama", name: "富山", region: "北陸" },
  { slug: "kanazawa", name: "金沢", region: "北陸" },
  { slug: "fukui", name: "福井", region: "北陸" },
  { slug: "nagoya", name: "名古屋", region: "東海" },
  { slug: "kyoto", name: "京都", region: "関西" },
  { slug: "osaka", name: "大阪", region: "関西" },
  { slug: "kobe", name: "神戸", region: "関西" },
  { slug: "wakayama", name: "和歌山", region: "関西" },
  { slug: "okayama", name: "岡山", region: "中国・四国" },
  { slug: "hiroshima", name: "広島", region: "中国・四国" },
  { slug: "takamatsu", name: "高松", region: "中国・四国" },
  { slug: "matsuyama", name: "松山", region: "中国・四国" },
  { slug: "kochi", name: "高知", region: "中国・四国" },
  { slug: "fukuoka", name: "福岡", region: "九州・沖縄" },
  { slug: "nagasaki", name: "長崎", region: "九州・沖縄" },
  { slug: "kumamoto", name: "熊本", region: "九州・沖縄" },
  { slug: "oita", name: "大分", region: "九州・沖縄" },
  { slug: "kagoshima", name: "鹿児島", region: "九州・沖縄" },
  { slug: "naha", name: "那覇", region: "九州・沖縄" },
];

const REGIONS = ["北海道・東北", "首都圏", "北関東・甲信越", "北陸", "東海", "関西", "中国・四国", "九州・沖縄"];

const faqs = [
  {
    q: "このデータベースはどうやって作っていますか？",
    a: "Googleマップ(Places API)で「パーソナルジム 都市名」を検索し、営業中と確認できた店舗の名称・評点・口コミ件数・所在地を機械取得したものです(最終取得2026年8月29日・各都市とも該当県の住所の事業者に限定)。当サイトとの提携有無に関係なく掲載しており、評点・件数は取得時点のGoogleマップ表示値をそのまま転記しています。",
  },
  {
    q: "どのくらいの頻度で更新されますか？",
    a: "全都市の一斉再取得を月1回程度の頻度で行う方針です(直近の一斉更新は2026年8月29日)。各都市ページに取得日を明記しています。",
  },
  {
    q: "評点だけでジムを選んで大丈夫ですか？",
    a: "パーソナルジムのGoogleマップ評点は高評価に偏る傾向があるため、評点だけでは差がつきません。①口コミ件数(実績の量)②通いやすい場所③料金体系・体験の有無——の順で絞るのがおすすめです。料金や体験の詳細は各ジムの公式サイトでご確認ください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function DbHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h1 className="text-2xl font-bold sm:text-3xl">全国32都市のパーソナルジム全データベース</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        全国32都市・約1,900店のパーソナルジムを、Googleマップの実測データ(評点・口コミ件数・2026年8月29日一斉取得)で都市別に一覧化しています。
        「まず自分の街の全体を見たい」方向けに、提携の有無に関係なく実在確認できた店舗を口コミ件数順で掲載するデータベースです。
      </p>
      <p className="mt-3 text-sm">
        <Link href="/db/stats/" className="underline text-blue-700 font-medium">→ 32都市1,878店の全国統計(評点4.8以上が85.7%という現実)を見る</Link>
      </p>

      {REGIONS.map((region) => (
        <section key={region} className="mt-8">
          <h2 className="text-lg font-bold border-l-4 border-teal-500 pl-3">{region}</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CITIES.filter((c) => c.region === region).map((c) => (
              <Link key={c.slug} href={`/db/${c.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 hover:text-teal-700 transition-colors">
                {c.name}のジムDB
              </Link>
            ))}
          </div>
        </section>
      ))}

      <h2 className="mt-10 text-lg font-bold">よくある質問</h2>
      <div className="mt-3 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border border-gray-200">
            <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{f.q}</summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm">
        <Link href="/" className="underline">→ おすすめパーソナルジムランキング</Link>
      </p>
    </main>
  );
}
