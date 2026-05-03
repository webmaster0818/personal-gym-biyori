import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "HABIT 中目黒店の口コミ・評判",
  description:
    "HABIT 中目黒店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "HABIT 中目黒店" },
  { label: "住所", value: "東京都目黒区青葉台1-16-12" },
  { label: "最寄駅", value: "中目黒駅 徒歩6分" },
  { label: "営業時間", value: "7:00〜23:00（※最新情報は公式サイトでご確認ください）" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

const faqItems = [
  { q: "HABIT 中目黒店の料金はいくらですか？", a: "月額制で通いやすい料金体系です。最新の料金は公式サイトでご確認ください。" },
  { q: "HABIT 中目黒店の営業時間は？", a: "7:00〜23:00です。最新情報は公式サイトでご確認ください。" },
  { q: "HABIT 中目黒店は初心者でも大丈夫ですか？", a: "はい、初心者の方も多く通われています。トレーナーが一から丁寧に指導します。" },
  { q: "HABIT 中目黒店の体験トレーニングはありますか？", a: "はい、体験トレーニングが用意されています。公式サイトから予約できます。" },
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

const relatedStores = [
  { name: "HABIT 恵比寿店", href: "/review/habit/ebisu/" },
  { name: "HABIT 池尻大橋店", href: "/review/habit/ikejiriohashi/" },
  { name: "HABIT 学芸大学店", href: "/review/habit/gakugeidaigaku/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "HABIT", href: "/review/habit/" },
          { name: "中目黒店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">HABIT 中目黒店の口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">HABIT の公式サイトはこちら</a>
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">HABIT 中目黒店の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/HABIT+中目黒" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2>
          <p className="text-gray-700 leading-relaxed">
            HABIT中目黒店は、目黒川沿いの人気エリア・青葉台に位置するパーソナルジムです。中目黒駅から徒歩6分で、代官山や恵比寿からも徒歩圏内という好立地が魅力です。おしゃれなライフスタイルを大切にする20〜30代の利用者が多く、トレーニングを日常の一部として楽しんでいる方が目立ちます。目黒川の桜並木を散歩がてら通えるロケーションも好評です。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p>
        </section>


        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/HABIT%20%E4%B8%AD%E7%9B%AE%E9%BB%92%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">中目黒駅から近くて通いやすいです。月額制で回数を気にせず通えるので、週2〜3回ペースで利用しています。体脂肪率が3ヶ月で5%落ちました。</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">完全プライベート空間でのトレーニングなので、周りの目を気にせず集中できます。東京の住宅街にあるとは思えないほど設備が整っていて快適です。</p>
              <p className="text-xs text-gray-400">-- 入会1年のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">以前は大手ジムに通っていましたが、HABITに変えてから成果が出るスピードが全然違います。中目黒店のトレーナーさんは知識が豊富で、食事のアドバイスもしてくれます。</p>
              <p className="text-xs text-gray-400">-- 入会8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">住宅街の中にあるので人目を気にせず通えるのが良いです。中目黒のHABITはマンツーマン指導で、自分のペースでトレーニングできます。月額制なので料金を気にせず通えるのもありがたいです。</p>
              <p className="text-xs text-gray-400">-- 入会3ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">トレーナーさんが毎回フォームを丁寧にチェックしてくれるので、効果を実感しやすいです。マンツーマンだから質問もしやすく、初心者の自分でも安心して続けられています。</p>
              <p className="text-xs text-gray-400">-- 入会半年のユーザー</p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">HABITの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/habit/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">HABITの総合レビューを見る</Link>
              <a href="https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">関連店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedStores.map((store) => (
              <Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
