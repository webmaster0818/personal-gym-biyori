import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報 | パーソナルジムびより",
  description: "パーソナルジムびよりの運営者情報・評価基準・サイトポリシーについてご紹介します。",
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "運営者情報" }]} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-teal-500">運営者情報</h1>

        {/* Author Profile */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">執筆者プロフィール</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-2xl font-bold shrink-0">YT</div>
              <div>
                <p className="text-lg font-bold text-gray-800">山田 拓也（やまだ たくや）</p>
                <p className="text-sm text-teal-600 font-medium mt-1">パーソナルジム専門ライター / NSCA-CPT</p>
                <ul className="text-sm text-gray-600 mt-3 space-y-1 list-disc list-inside">
                  <li>パーソナルジム業界を5年以上取材</li>
                  <li>延べ60社以上のジムを実際に訪問・体験取材</li>
                  <li>NSCA認定パーソナルトレーナー（NSCA-CPT）資格保有</li>
                  <li>自身もパーソナルジムでのトレーニングを3年以上継続中</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Site Mission */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">サイトの使命</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「パーソナルジムびより」は、パーソナルジム選びに悩む方に向けて、実際の体験取材と客観的なデータに基づいた正確な情報をお届けするメディアです。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            広告の有無に関わらず、すべてのジムを同じ基準で公平に評価しています。料金・トレーナーの質・設備・口コミを総合的に分析し、読者の方が自分に合ったジムを見つけられるよう支援することを目指しています。
          </p>
        </section>

        {/* Evaluation Methodology */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">評価基準・方法論</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトでは、以下の5つの観点からパーソナルジムを評価しています。
          </p>
          <div className="space-y-4">
            {[
              { title: "料金・コスパ", desc: "月額料金、入会金、1回あたりの単価を業界平均と比較。追加費用の有無も確認しています。" },
              { title: "トレーナーの質", desc: "保有資格、指導経験年数、コンテスト実績、コミュニケーション力を実際の体験から評価しています。" },
              { title: "設備・環境", desc: "マシンの種類と数、清潔感、個室の有無、シャワー・アメニティの充実度を確認しています。" },
              { title: "食事指導", desc: "食事管理の内容、管理栄養士の関与、LINE対応の有無など、サポート体制を評価しています。" },
              { title: "口コミ・評判", desc: "Googleマップの口コミを中心に、SNSや各種口コミサイトの評価を分析しています。" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-sm text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">広告掲載ポリシー</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当サイトはアフィリエイトプログラムに参加しており、掲載リンクを通じて申し込みがあった場合に紹介報酬を受け取ることがあります。ただし、報酬の有無がランキングや評価に影響することはありません。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            すべてのジムに対して同一の評価基準を適用し、読者にとって有益な情報提供を最優先としています。
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">お問い合わせ</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            掲載情報の修正依頼やお問い合わせは、以下のメールアドレスまでお願いいたします。
          </p>
          <p className="text-sm text-gray-700 mt-2">
            メール: info@personal-gym-biyori.com
          </p>
        </section>

        <div className="text-center">
          <Link href="/" className="inline-block bg-teal-500 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-teal-600 transition-colors text-sm">
            トップページに戻る
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "山田 拓也",
        "url": "https://personal-gym-biyori.com/about/",
        "jobTitle": "パーソナルジム専門ライター",
        "description": "パーソナルジム業界を5年以上取材。延べ60社以上のジムを実際に訪問・体験取材。NSCA認定パーソナルトレーナー資格保有。"
      }) }} />
    </>
  );
}
