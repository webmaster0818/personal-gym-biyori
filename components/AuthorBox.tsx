import Link from "next/link";

export default function AuthorBox() {
  return (
    <section className="mb-12">
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-sm font-bold shrink-0">編集部</div>
          <div>
            <p className="font-bold text-gray-800">パーソナルジムびより編集部</p>
            <p className="text-xs text-teal-600 font-medium mt-0.5">実測データ主義のパーソナルジム比較メディア</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              全国49都市・約2,800店のパーソナルジムをGoogleマップの公開データ(評点・口コミ件数・取得日明記)で機械的に実測し、料金・設備などのジム情報は各社公式サイトの記載のみを採用しています。口コミの創作は行わず、評点・件数は取得時点の実数のまま掲載します。
            </p>
            <p className="text-xs mt-2">
              <Link href="/about/" className="text-teal-600 hover:underline">運営者情報</Link>
              <span className="mx-2 text-gray-300">|</span>
              <Link href="/content-policy/" className="text-teal-600 hover:underline">記事制作ポリシー</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
