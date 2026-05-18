import Link from "next/link";

export default function AuthorBox() {
  return (
    <section className="mb-12">
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-xl font-bold shrink-0">YT</div>
          <div>
            <p className="font-bold text-gray-800">山田 拓也（やまだ たくや）</p>
            <p className="text-xs text-teal-600 font-medium mt-0.5">パーソナルジム専門ライター / NSCA-CPT</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">パーソナルジム業界を5年以上取材。延べ60社以上のジムを実際に訪問・体験取材し、料金・トレーナーの質・設備を独自の基準で評価。NSCA認定パーソナルトレーナー資格保有。自身もパーソナルジムでのトレーニングを3年以上継続中。</p>
            <Link href="/about/" className="text-xs text-teal-600 hover:underline mt-2 inline-block">プロフィール詳細 →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
