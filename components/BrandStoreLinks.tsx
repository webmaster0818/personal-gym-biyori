import Link from "next/link";
import brandStores from "@/data/brand-stores.json";

type Store = { href: string; name: string };

/** ブランド総合ページから各店舗ページへの導線（店舗ページが一覧から孤立しないように） */
export default function BrandStoreLinks({ brand, brandName }: { brand: string; brandName: string }) {
  const stores = (brandStores as Record<string, Store[]>)[brand] ?? [];
  if (stores.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">{brandName}の店舗別ページ</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stores.map((s) => (
          <Link key={s.href} href={s.href} className="block bg-gray-50 rounded-lg px-3 py-2 text-center text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors">
            {s.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
