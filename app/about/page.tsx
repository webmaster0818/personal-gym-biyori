import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報 | パーソナルジムびより",
  description: "パーソナルジムびよりの運営者情報・評価基準・サイトポリシーについてご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "運営者情報" }]} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-teal-500">運営者情報</h1>

        {/* Editorial Team */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">運営体制</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-lg font-bold text-gray-800">パーソナルジムびより編集部</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              当サイトは、実測データにもとづいてパーソナルジム情報を整理・比較する編集部が運営しています。特定の個人の体験談や資格を根拠にするのではなく、
              「誰でも検証できる一次データ」だけを掲載することを編集方針としています。
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1 list-disc list-inside">
              <li>全国49都市・約2,800店のパーソナルジムをGoogleマップの公開データ(評点・口コミ件数)で機械的に実測(取得日を各ページに明記)</li>
              <li>料金・営業時間などのジム情報は各社公式サイトの記載のみを採用(伝聞・推定値は不採用)</li>
              <li>口コミの創作は行いません。評点・件数は取得時点の実数のみを掲載します</li>
              <li>掲載後も定期的に再実測し、変動があれば更新します</li>
            </ul>
          </div>
        </section>

        {/* Site Mission */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">サイトの使命</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「パーソナルジムびより」は、パーソナルジム選びに悩む方に向けて、Googleマップの実測データと各社公式サイトの一次情報に基づいた、検証可能な情報だけをお届けするメディアです。
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
              { title: "トレーナーの質", desc: "公式サイトで公開されている保有資格・研修制度・在籍トレーナー情報を確認し、記載の範囲で整理しています。" },
              { title: "設備・環境", desc: "個室の有無、シャワー・アメニティ等の設備情報を各社公式サイトの記載から確認しています。" },
              { title: "食事指導", desc: "食事管理の内容、管理栄養士の関与、LINE対応の有無など、サポート体制を評価しています。" },
              { title: "口コミ・評判", desc: "Googleマップの評点・口コミ件数を機械的に取得し、実数のまま掲載しています(創作・改変はしません)。" },
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
        "@type": "Organization",
        "name": "パーソナルジムびより編集部",
        "url": "https://personal-gym-biyori.com/about/",
        "description": "全国49都市・約2,800店のパーソナルジムをGoogleマップの公開データで実測し、各社公式サイトの一次情報とあわせて比較する編集部。"
      }) }} />
    </>
  );
}
