import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nexusジム 上野店の口コミ・評判",
  description:
    "Nexusジム 上野店の口コミ・評判を紹介。住所・アクセス・営業時間などの基本情報から、実際の利用者の評価傾向まで詳しく解説します。",
};

const basicInfo = [
  { label: "店舗名", value: "Nexusジム 上野店" },
  { label: "住所", value: "東京都台東区（※最新情報は公式サイトでご確認ください）" },
  { label: "最寄駅", value: "稲荷町駅 徒歩3分" },
  { label: "営業時間", value: "※公式サイトでご確認ください" },
  { label: "電話番号", value: "※公式サイトでご確認ください" },
];

const faqItems = [
  { q: "Nexusジム上野店の料金はいくらですか？", a: "Nexusジムはコースにより料金が異なります。最新の料金プランは公式サイトでご確認ください。" },
  { q: "Nexusジム上野店の最寄駅はどこですか？", a: "稲荷町駅から徒歩3分の立地です。詳しいアクセスは公式サイトでご確認ください。" },
  { q: "Nexusジム上野店のトレーナーの特徴は？", a: "資格を持つ専門トレーナーがマンツーマンで指導します。目標に合わせた個別プログラムの作成が特徴です。" },
  { q: "Nexusジム上野店は体験トレーニングがありますか？", a: "はい、体験トレーニングを実施しています。詳細や予約は公式サイトでご確認ください。" },
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
  { name: "Nexusジム 池袋店", href: "/review/nexus/ikebukuro/" },
  { name: "Nexusジム 新宿店", href: "/review/nexus/shinjuku/" },
  { name: "Nexusジム 白山店", href: "/review/nexus/hakusan/" },
];

const affiliateLink = "https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L";

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Nexusジム", href: "/review/nexus/" }, { name: "上野店" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Nexusジム 上野店の口コミ・評判</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年5月</p>
        <p className="text-sm mb-6"><a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">Nexusジム の公式サイトはこちら</a></p>
        <section className="mb-10"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">基本情報</h2><div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>{basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}</tbody></table></div></section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>
        <section className="mb-10"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2><div className="bg-gray-100 rounded-lg p-8 text-center"><p className="text-gray-600 mb-4">Nexusジム 上野店の所在地をGoogleマップで確認できます。</p><a href="https://www.google.com/maps/search/Nexus+ジム+上野店" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a></div></section>
        <section className="mb-10"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">口コミ概要</h2><p className="text-gray-700 leading-relaxed">Nexusジム上野店は稲荷町駅から徒歩3分の好立地にあるパーソナルジムです。上野・御徒町エリアで通いやすいパーソナルジムを探している方に最適で、トレーナーの専門知識と親しみやすさが評価されています。初心者でも安心して通えると好評です。</p><p className="text-xs text-gray-500 mt-4 bg-gray-50 rounded p-3">※口コミはGoogleマップの投稿を参考に要約・再構成したものです。個人の感想であり、効果を保証するものではありません。</p></section>

        {/* ---------- Google口コミ ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">利用者の口コミ</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。実際の投稿をそのまま引用したものではありません。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/Nexus%E3%82%B8%E3%83%A0%20%E4%B8%8A%E9%87%8E%E5%BA%97" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">Googleマップで口コミを見る</a></p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">格安の月額制パーソナルジムを探していてNexusジムを見つけました。価格が安いのにトレーニングの質は高く、コスパ最高です。</p>
              <p className="text-xs text-gray-400">-- 入会半年のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">上野のNexusジムに通い始めて4ヶ月です。月額制で通い放題なので、自分のペースで週3回通っています。体重が5kg減って見た目も変わりました。</p>
              <p className="text-xs text-gray-400">-- 入会4ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">月額19,800円〜でマンツーマンのパーソナルトレーニングが受けられるのは本当にお得です。トレーナーさんも親切で、初心者の自分でも楽しく通えています。</p>
              <p className="text-xs text-gray-400">-- 入会2ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">大手パーソナルジムの半額以下で同等のサービスが受けられます。月額制なので追加料金の心配もなく、安心して通い続けられます。</p>
              <p className="text-xs text-gray-400">-- 入会8ヶ月のユーザー</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">月額19,800円からパーソナルトレーニングが受けられるのは破格だと思います。上野店のトレーナーさんは経験豊富で、毎回的確なアドバイスをくれます。</p>
              <p className="text-xs text-gray-400">-- 入会3ヶ月のユーザー</p>
            </div>
          </div>
        </section>
        <section className="mb-10"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2><div className="space-y-4">{faqItems.map((item, i) => (<details key={i} className="group bg-gray-50 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors"><span className="pr-4">{item.q}</span><span className="text-teal-600 shrink-0 transition-transform group-open:rotate-45">+</span></summary><div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">{item.a}</div></details>))}</div></section>
        {/* ---------- バナー広告 ---------- */}
        <section className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S7941C.L119607K.Q136169A" alt="Nexusジム" width="301" height="251" className="mx-auto rounded-lg" />
          </a>
        </section>

        <section className="mb-10"><div className="bg-teal-50 rounded-lg p-6 text-center space-y-4"><p className="font-bold text-gray-800">Nexusジムの詳しい口コミ・料金情報はこちら</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/review/nexus/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">Nexusジムの総合レビューを見る</Link><a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a></div></div></section>
        <section className="mb-10"><h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">関連店舗</h2><div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedStores.map((store) => (<Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>))}</div></section>
      </div>
    </>
  );
}
