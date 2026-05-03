import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "REXER 目黒店の口コミ・評判",
  description:
    "REXER 目黒店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "店舗名", value: "REXER 目黒店" },
  { label: "住所", value: "東京都目黒区（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "目黒駅 徒歩約5分" },
  { label: "営業時間", value: "※公式サイトでご確認ください" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "REXER目黒店の料金はいくらですか？", a: "REXERはオーダーメイドのトレーニングプランを提供しており、料金はプランにより異なります。最新の料金は公式サイトでご確認ください。" },
  { q: "REXER目黒店の最寄駅はどこですか？", a: "目黒駅から徒歩約5分の立地です。詳しいアクセスは公式サイトでご確認ください。" },
  { q: "REXER目黒店のトレーナーの特徴は？", a: "経験豊富なトレーナーがマンツーマンで指導します。個人の目標や体質に合わせたオーダーメイドプログラムが特徴です。" },
  { q: "REXER目黒店は体験トレーニングがありますか？", a: "はい、体験トレーニングを実施しています。詳細や予約は公式サイトでご確認ください。" },
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
  { name: "REXER 西麻布店", href: "/review/lexer/nishiazabu/" },
  { name: "REXER 渋谷店", href: "/review/lexer/shibuya/" },
];

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "REXER", href: "/review/lexer/" },
          { name: "目黒店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          REXER 目黒店の口コミ・評判
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            REXER の公式サイトはこちら
          </a>
        </p>

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
          <a href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              REXER 目黒店の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/REXER+目黒店"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Googleマップで見る
            </a>
          </div>
        </section>


        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/REXER%20%E7%9B%AE%E9%BB%92%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">内装やアメニティの質が高く、通うこと自体がご褒美のような感覚です。トレーニング内容もオーダーメイドで、自分だけのプログラムを組んでもらえます。</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">ハイクラスなパーソナルジムを探していてREXERに辿り着きました。期待通りの質の高いサービスで、トレーナーのレベルも非常に高いです。</p>
              <p className="text-xs text-gray-400">-- 入会1年のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">プレミアムな空間で、オーダーメイドのトレーニングプログラムを組んでもらえます。目黒店は内装も高級感があり、モチベーションが上がります。</p>
              <p className="text-xs text-gray-400">-- 入会3ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">自分の体質や目標に合わせた完全オーダーメイドのプログラムが魅力です。トレーナーさんの知識量が豊富で、毎回新しい発見があります。料金に見合った価値があると思います。</p>
              <p className="text-xs text-gray-400">-- 入会半年のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">REXERは他のジムとは一線を画すプレミアムなサービスです。目黒店のトレーナーは経験豊富で、体の状態を見ながら柔軟にメニューを調整してくれます。</p>
              <p className="text-xs text-gray-400">-- 入会8ヶ月のユーザー</p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            口コミ概要
          </h2>
          <p className="text-gray-700 leading-relaxed">
            REXER目黒店は目黒駅から徒歩5分に位置するパーソナルジムです。落ち着いた雰囲気の目黒エリアにふさわしい、上質なトレーニング環境が整っています。利用者からはトレーナーの知識の豊富さや、丁寧なカウンセリングが好評です。筋力アップだけでなく、姿勢改善や体質改善を目的とした利用者も多く、幅広いニーズに対応できる店舗として評価されています。
          </p>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">
            ※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。
          </p>
        </section>

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

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">
              REXERの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/lexer/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                REXERの総合レビューを見る
              </Link>
              <a
                href="https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                公式サイトへ
              </a>
            </div>
          </div>
        </section>

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
