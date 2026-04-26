import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "パーソナルジムに関するよくある質問（FAQ）",
  description:
    "パーソナルジムに関するよくある質問をまとめました。料金相場、通う頻度、効果が出る時期、食事指導、返金保証など、入会前に知っておきたい疑問にお答えします。",
};

const faqItems = [
  {
    q: "パーソナルジムの料金相場はいくらですか？",
    a: "パーソナルジムの月額料金は6,000円〜30,000円程度が一般的です。短期集中プラン（2〜3ヶ月）の場合は総額20万円〜40万円が相場です。入会金は2〜5万円程度かかる場合が多いですが、キャンペーンで無料になることもあります。",
  },
  {
    q: "パーソナルジムに通う最適な頻度は？",
    a: "週2回（月8回）が最も推奨される頻度です。筋肉の回復期間（48〜72時間）を考慮すると、2〜3日おきのトレーニングが効率的です。忙しい方は週1回でも、正しいフォームと適切な負荷で行えば十分効果を実感できます。",
  },
  {
    q: "パーソナルジムの効果が出るまでの期間は？",
    a: "多くの方が2〜3ヶ月で見た目の変化を実感しています。体重の変化は早ければ2週間〜1ヶ月目から見られることもあります。筋肉量の増加や体脂肪率の改善は3ヶ月以上継続することで顕著になります。",
  },
  {
    q: "パーソナルジムとフィットネスジムの違いは何ですか？",
    a: "パーソナルジムは専属トレーナーがマンツーマンで指導を行い、個人に合わせたプログラムを提供します。フィットネスジムは自分で器具を使用し、自主的にトレーニングを行います。確実な結果を求める方、運動初心者にはパーソナルジムが適しています。",
  },
  {
    q: "パーソナルジムの食事指導はどんな内容ですか？",
    a: "一般的には、毎日の食事内容をトレーナーに報告し、栄養バランスや摂取カロリーについてアドバイスを受けます。LINEやアプリでの報告に対応しているジムも多く、外食時のメニュー選びまでサポートしてくれます。糖質制限の厳しさはジムによって異なります。",
  },
  {
    q: "パーソナルジムの返金保証はどんな仕組みですか？",
    a: "大手パーソナルジムでは、入会後30日以内に効果を感じられなかった場合、コース料金を全額返金する制度を設けているところがあります。RIZAPの30日間全額返金保証が代表的です。返金条件はジムによって異なるため、入会前に確認しましょう。",
  },
  {
    q: "パーソナルジムを選ぶ際のチェックポイントは？",
    a: "重要なポイントは5つあります。(1)料金体系の明確さ、(2)立地・通いやすさ、(3)トレーナーの資格・経験、(4)プログラム内容が目的に合っているか、(5)口コミ・評判です。無料カウンセリングや体験トレーニングを複数受けて比較することをおすすめします。",
  },
  {
    q: "パーソナルジムでリバウンドしないコツは？",
    a: "リバウンドを防ぐためには、(1)極端な食事制限をしないこと、(2)卒業後も適度な運動を継続すること、(3)正しい食事の知識を身につけること、(4)卒業後のサポートプログラムがあるジムを選ぶことが重要です。3食食べながら痩せるプログラムを提供するジムが増えています。",
  },
  {
    q: "パーソナルジムは女性でも通いやすいですか？",
    a: "はい、多くのパーソナルジムは女性利用者が半数以上を占めています。完全個室、女性トレーナー在籍、ウェア無料レンタルなど、女性が通いやすい環境を整えているジムが増えています。女性専用のパーソナルジムもあります。",
  },
  {
    q: "パーソナルジムの契約期間や退会方法は？",
    a: "契約期間は2ヶ月〜6ヶ月が一般的です。月額プランの場合は月単位での退会が可能です。退会は店舗での手続きが必要な場合が多く、前月の10日〜15日までに申し出が必要なケースが一般的です。中途解約の場合は違約金が発生することもあるため、契約前に確認しましょう。",
  },
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

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "よくある質問" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">パーソナルジムに関するよくある質問</h1>
        <p className="text-gray-500 text-sm mb-8">入会前に知っておきたい疑問にお答えします</p>

        <div className="space-y-4 mb-12">
          {faqItems.map((item, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-lg group">
              <summary className="px-6 py-4 cursor-pointer text-sm sm:text-base font-medium text-gray-800 flex items-center justify-between list-none">
                <span>Q{i + 1}. {item.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                A. {item.a}
              </div>
            </details>
          ))}
        </div>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">パーソナルジム選びに迷ったら</h2>
          <p className="text-teal-100 text-sm mb-6">厳選5社のランキングを参考に、あなたに合ったジムを見つけましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">各ジムの詳細レビュー</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { name: "チキンジム", href: "/review/chicken-gym/" },
              { name: "RIZAP", href: "/review/rizap/" },
              { name: "24/7ワークアウト", href: "/review/247workout/" },
              { name: "BEYOND", href: "/review/beyond/" },
              { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
            ].map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
