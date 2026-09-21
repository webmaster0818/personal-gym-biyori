import Link from 'next/link';

// サイト規模の実数(2026-09-22時点)。コンテンツ増設時はここも更新する。
const SITE_SCALE = {
  reviews: 61, // app/review 配下のブランド数
  dbCities: 49, // app/db 配下の都市数(statsを除く)
  dbStores: '約2,700', // /db/ ハブの掲載表記に合わせる
  areas: 35, // app/area 配下のエリア数
  gymPages: 1973, // data/gym-index.json の entries 数
};

const footerLinks = [
  {
    title: `ジムのレビュー(${SITE_SCALE.reviews}ブランド)`,
    links: [
      { href: '/review/rizap/', label: 'RIZAP' },
      { href: '/review/chicken-gym/', label: 'チキンジム' },
      { href: '/review/247workout/', label: '24/7ワークアウト' },
      { href: '/review/beyond/', label: 'BEYOND' },
      { href: '/review/exercise-coach/', label: 'エクササイズコーチ' },
      { href: '/review/apple-gym/', label: 'Apple GYM' },
      { href: '/review/katagiri/', label: 'かたぎり塾' },
      { href: '/#ranking', label: `レビュー一覧を見る →` },
    ],
  },
  {
    title: `エリアから探す(${SITE_SCALE.areas}エリア)`,
    links: [
      { href: '/area/tokyo/', label: '東京' },
      { href: '/area/shinjuku/', label: '新宿' },
      { href: '/area/shibuya/', label: '渋谷' },
      { href: '/area/yokohama/', label: '横浜' },
      { href: '/area/osaka/', label: '大阪' },
      { href: '/area/nagoya/', label: '名古屋' },
      { href: '/area/fukuoka/', label: '福岡' },
      { href: '/area/', label: `全${SITE_SCALE.areas}エリア一覧 →` },
    ],
  },
  {
    title: `実測データベース(${SITE_SCALE.dbCities}都市)`,
    links: [
      { href: '/db/sapporo/', label: '札幌' },
      { href: '/db/sendai/', label: '仙台' },
      { href: '/db/saitama/', label: 'さいたま' },
      { href: '/db/kyoto/', label: '京都' },
      { href: '/db/kobe/', label: '神戸' },
      { href: '/db/hiroshima/', label: '広島' },
      { href: '/db/stats/', label: '全国の統計データ' },
      { href: '/db/', label: `全${SITE_SCALE.dbCities}都市のDB →` },
    ],
  },
  {
    title: '料金・選び方',
    links: [
      { href: '/compare/', label: '目的別おすすめ比較' },
      { href: '/price/', label: '料金相場・費用比較' },
      { href: '/#ranking', label: 'おすすめランキング' },
      { href: '/faq/', label: 'よくある質問' },
    ],
  },
  {
    title: 'サイト情報',
    links: [
      { href: '/about/', label: '運営者情報・編集方針' },
      { href: '/content-policy/', label: '記事制作ポリシー' },
      { href: '/terms/', label: '利用規約' },
      { href: '/privacy/', label: 'プライバシーポリシー' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-accent text-sm font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-10 pt-8 text-xs text-gray-500">
          <p className="text-center leading-relaxed">
            パーソナルジムびより —— {SITE_SCALE.reviews}ブランドのレビュー、全国{SITE_SCALE.dbCities}都市{SITE_SCALE.dbStores}店のGoogleマップ実測データベース、
            ジム個別ページ{SITE_SCALE.gymPages.toLocaleString('ja-JP')}件を掲載しています。
          </p>
          <p className="mt-2 text-center leading-relaxed">
            掲載している評点・口コミ件数は取得時点のGoogleマップ表示値(取得日は各ページに明記)、料金は各ジム公式サイトの表示値です。最新の料金・キャンペーンは申込前に公式サイトでご確認ください。
          </p>
          <p className="mt-3 text-center">&copy; 2026 パーソナルジムびより All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
