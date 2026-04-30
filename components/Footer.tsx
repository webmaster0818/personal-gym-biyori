import Link from 'next/link';

const footerLinks = [
  {
    title: '口コミ・レビュー',
    links: [
      { href: '/review/chicken-gym/', label: 'チキンジム' },
      { href: '/review/rizap/', label: 'RIZAP' },
      { href: '/review/247workout/', label: '24/7ワークアウト' },
      { href: '/review/beyond/', label: 'BEYOND' },
      { href: '/review/exercise-coach/', label: 'エクササイズコーチ' },
    ],
  },
  {
    title: 'エリア別',
    links: [
      { href: '/#area', label: '東京' },
      { href: '/#area', label: '大阪' },
      { href: '/#area', label: '名古屋' },
      { href: '/#area', label: '福岡' },
    ],
  },
  {
    title: 'お役立ち',
    links: [
      { href: '/faq/', label: 'よくある質問' },
      { href: '/#ranking', label: 'ランキング' },
    ],
  },
  {
    title: 'サイト情報',
    links: [
      { href: '/terms/', label: '利用規約' },
      { href: '/privacy/', label: 'プライバシーポリシー' },
      { href: '/content-policy/', label: '記事制作ポリシー' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
        <div className="border-t border-gray-600 mt-10 pt-8 text-center text-xs text-gray-500">
          <p>パーソナルジムびより - あなたに合ったパーソナルジムが見つかる</p>
          <p className="mt-1">&copy; 2026 パーソナルジムびより All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
