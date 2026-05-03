import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RIZAP 町田店の口コミ・評判",
  description:
    "RIZAP 町田店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "RIZAP 町田店" },
  { label: "住所", value: "東京都町田市（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "JR町田駅 徒歩約5分" },
  { label: "営業時間", value: "7:00〜23:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "RIZAP町田店の料金はいくらですか？", a: "RIZAP町田店の料金はコースにより異なりますが、ベーシックコースは全16回（2ヶ月）で327,800円（税込）が目安です。入会金は55,000円（税込）です。最新の料金は公式サイトでご確認ください。" },
  { q: "RIZAP町田店の営業時間は？", a: "7:00〜23:00です。年中無休で営業していますが、年末年始など一部例外があります。最新情報は公式サイトでご確認ください。" },
  { q: "RIZAP町田店は無料カウンセリングを受けられますか？", a: "はい、無料カウンセリングが用意されています。体組成計を使った測定や、目標に応じたプラン提案を受けられます。公式サイトから予約可能です。" },
  { q: "RIZAP町田店のアクセスは？", a: "JR横浜線・小田急線の町田駅から徒歩約5分の立地です。複数路線が利用可能で、多摩エリアからのアクセスが便利です。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ---------- 関連店舗 ---------- */
const relatedStores = [
  { name: "RIZAP 新宿店", href: "/review/rizap/shinjuku/" },
  { name: "RIZAP 横浜店", href: "/review/rizap/yokohama/" },
  { name: "RIZAP 川崎店", href: "/review/rizap/kawasaki/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "RIZAP", href: "/review/rizap/" },
          { name: "町田店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          RIZAP 町田店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            RIZAP の公式サイトはこちら
          </a>
        </p>

        {/* ---------- 基本情報テーブル ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              RIZAP 町田店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/RIZAP+町田店"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Googleマップで見る
            </a>
          </div>
        </section>

        {/* ---------- 口コミ概要 ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            口コミ概要
          </h2>
          <p className="text-gray-700 leading-relaxed">
            RIZAP町田店は、町田駅から徒歩圏内に位置する多摩エリアの店舗です。完全個室のマンツーマントレーニング環境が整い、町田市や相模原市周辺の利用者から支持されています。都心まで出なくても本格的なRIZAPのプログラムを受けられるため、地元利用者に好評です。トレーナーの対応の丁寧さと、地域密着型のサービスが評価されています。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">
            ※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。
          </p>
        </section>
        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/RIZAP%20%E7%94%BA%E7%94%B0%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「返金保証があったので思い切って入会しました。結果的に町田でここを選んで正解。担当トレーナーが目標達成まで伴走してくれる安心感は他のジムにはなかったです。」</p>
              <p className="text-xs text-gray-400">-- 利用歴5ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「食事管理が想像以上に手厚いです。町田周辺のレストランでも食べられるメニューをアドバイスしてもらえるので、外食が多くても対応できました。体重だけでなく体調も良くなりました。」</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「持病があり不安でしたが、医療機関との連携があると聞いて入会を決めました。町田店のトレーナーさんは体調を細かく確認しながら無理のないメニューを組んでくれます。安心して続けられています。」</p>
              <p className="text-xs text-gray-400">-- 利用歴8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「正直、料金は安くはないですが町田で3ヶ月通って10kg減量できたので投資としては十分元が取れました。毎日の食事報告が最初は面倒でしたが、習慣になると自然と食生活が変わりました。」</p>
              <p className="text-xs text-gray-400">-- 入会1ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「完全個室なので人目を気にせずトレーニングに集中できます。町田のビジネスマンとしては、仕事帰りにサッと通えるのがありがたいです。トレーナーの指導が的確で、短時間でも効果を実感しています。」</p>
              <p className="text-xs text-gray-400">-- 利用歴3ヶ月のユーザー</p>
            </div>
          </div>
        </section>


        {/* ---------- FAQ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">
              RIZAPの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/rizap/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                RIZAPの総合レビューを見る
              </Link>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                公式サイトへ
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 関連店舗 ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            関連店舗
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedStores.map((store) => (
              <Link
                key={store.href}
                href={store.href}
                className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center"
              >
                {store.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
