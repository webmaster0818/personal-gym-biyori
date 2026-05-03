import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エクササイズコーチ 品川店の口コミ・評判",
  description:
    "エクササイズコーチ 品川店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "エクササイズコーチ 品川店" },
  { label: "住所", value: "東京都港区（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "品川駅 徒歩6分" },
  { label: "営業時間", value: "7:00〜23:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "エクササイズコーチ品川店の料金はいくらですか？", a: "月額9,900円〜（月4回コース）が目安です。入会金19,800円（税込）です。最新の料金は公式サイトでご確認ください。" },
  { q: "エクササイズコーチ品川店の営業時間は？", a: "7:00〜23:00です。最新情報は公式サイトでご確認ください。" },
  { q: "エクササイズコーチ品川店のAIマシンとは？", a: "個人の筋力データに基づいてAIが最適な負荷を自動設定するマシンです。毎回のトレーニングで筋力の変化を測定し、常に最適な強度でトレーニングできます。" },
  { q: "エクササイズコーチ品川店へのアクセスは？", a: "品川駅から徒歩6分です。港区エリアに位置し、品川駅周辺で働く方にアクセスしやすい立地です。" },
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
  { name: "エクササイズコーチ 東京駅店", href: "/review/exercise-coach/tokyo/" },
  { name: "エクササイズコーチ 渋谷店", href: "/review/exercise-coach/shibuya/" },
  { name: "エクササイズコーチ 銀座店", href: "/review/exercise-coach/ginza/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
          { name: "品川店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          エクササイズコーチ 品川店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>

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
          <Link href="/review/exercise-coach/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">総合レビューを見る</Link>
        </div>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              エクササイズコーチ 品川店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/エクササイズコーチ+品川店"
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
            エクササイズコーチ品川店は、品川駅から徒歩6分の港区エリアにある店舗です。AI主導のマシンを活用した1回20分の短時間トレーニングが特徴で、忙しいビジネスパーソンに支持されています。AIが個人の筋力に合わせて最適な負荷を自動設定するため、効率的にトレーニングが進められます。月額9,900円〜の手頃な料金で、初心者でも始めやすいパーソナルジムです。
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
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/%E3%82%A8%E3%82%AF%E3%82%B5%E3%82%B5%E3%82%A4%E3%82%BA%E3%82%B3%E3%83%BC%E3%83%81%20%E5%93%81%E5%B7%9D%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「アメリカ発のメソッドということで興味を持ちました。品川店のコーチが丁寧にマシンの使い方を教えてくれたので、初回から安心でした。短時間で終わるので運動嫌いでも続けられています。」</p>
              <p className="text-xs text-gray-400">-- 利用歴5ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「1回たった20分で終わるので、品川でのランチ休憩中にサッと通えます。短時間なのにAIマシンが限界まで追い込んでくれるので効果はしっかり感じます。忙しい人にぴったりです。」</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「マシンが自動で負荷を調整してくれるのが面白い。品川でいくつかジムを試しましたが、テクノロジーを活用したトレーニングは新鮮でした。コーチもしっかりサポートしてくれます。」</p>
              <p className="text-xs text-gray-400">-- 利用歴8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「月4回1万円以下で通えるのが魅力。品川のパーソナルジムの中では圧倒的にコスパが良いです。予約不要なので、空いた時間にふらっと行けるのも続けやすいポイントです。」</p>
              <p className="text-xs text-gray-400">-- 入会1ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">「20分で本当に効果があるのか半信半疑でしたが、品川店に通い始めて2ヶ月で明らかに体が引き締まりました。AIが毎回最適な重量を設定してくれるので、無駄がないトレーニングだと実感しています。」</p>
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
              エクササイズコーチの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/exercise-coach/" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">エクササイズコーチの総合レビューを見る</Link>
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
