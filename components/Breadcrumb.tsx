import Link from 'next/link';

type BreadcrumbItem = { name: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-teal-600">ホーム</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? <Link href={item.href} className="hover:text-teal-600">{item.name}</Link> : <span className="text-gray-700">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
