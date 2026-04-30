import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事制作ポリシー｜パーソナルジムびより",
  description:
    "パーソナルジムびよりの記事制作ポリシーです。評価基準、記事制作フロー、情報の正確性への取り組みについてご説明します。",
};

const evaluationCriteria = [
  {
    title: "料金・コスパ",
    description:
      "入会金、月額料金、コース総額、1回あたりの料金を調査し、提供されるサービス内容と照らし合わせたコストパフォーマンスを評価します。キャンペーンや割引制度の有無も考慮します。",
  },
  {
    title: "トレーナーの質",
    description:
      "トレーナーの保有資格（NSCA-CPT、NESTA-PFT等）、指導経験年数、研修制度の充実度を調査します。トレーナーの指名制度や担当制の有無も評価対象とします。",
  },
  {
    title: "設備・清潔感",
    description:
      "トレーニング機器の種類と充実度、施設の清潔さ、更衣室・シャワー室の有無と状態、完全個室かどうかなどを評価します。",
  },
  {
    title: "食事指導",
    description:
      "食事指導の有無、指導方法（LINE対応、アプリ管理等）、管理栄養士の監修有無、食事制限の厳しさなどを総合的に評価します。",
  },
  {
    title: "口コミ評価",
    description:
      "Google口コミ、SNS、各種レビューサイトに掲載された利用者の声を幅広く収集・分析します。良い口コミだけでなく、改善点に関する意見も公平に取り上げます。",
  },
  {
    title: "アクセス・通いやすさ",
    description:
      "最寄り駅からの距離、営業時間、予約の取りやすさ、店舗数・展開エリアを評価します。継続的に通えるかどうかという観点を重視しています。",
  },
];

const productionFlow = [
  {
    step: "1. 調査",
    description:
      "対象のパーソナルジムに関する公式サイト情報、料金プラン、口コミ、SNS投稿などを網羅的に調査します。可能な限り複数の情報源を確認し、情報の信頼性を担保します。",
  },
  {
    step: "2. 執筆",
    description:
      "調査結果に基づき、独自の評価基準に沿って記事を執筆します。客観的な事実と主観的な評価を明確に区別し、読者が判断しやすい構成を心がけます。",
  },
  {
    step: "3. レビュー",
    description:
      "執筆された記事は、編集チームによるファクトチェックと品質チェックを経てから公開します。情報の正確性、表現の適切さ、景品表示法への準拠を確認します。",
  },
  {
    step: "4. 公開",
    description:
      "レビューを通過した記事を公開します。公開日を明記し、情報の鮮度が利用者にわかるようにしています。",
  },
  {
    step: "5. 定期更新",
    description:
      "公開済みの記事は、定期的に情報の見直しを行います。料金改定、サービス内容の変更、新店舗のオープンなど、重要な変更があった場合は速やかに記事を更新します。更新日も記事に反映させます。",
  },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "記事制作ポリシー" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          記事制作ポリシー
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          最終更新日: 2026年4月21日
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 space-y-10">
          {/* 基本方針 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              基本方針
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              パーソナルジムびよりは、利用者が自分に合ったパーソナルジムを選べるよう、正確で公平な情報を提供することを最も大切にしています。当サイトのすべての記事は、独自の調査と評価基準に基づいて作成しており、特定のジムを不当に優遇したり、不利に扱ったりすることはありません。
            </p>
          </section>

          {/* 評価基準 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              評価基準（6項目）
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サイトでは、以下の6つの観点からパーソナルジムを総合的に評価しています。各項目を均等に評価し、偏りのない総合評価を算出しています。
            </p>
            <div className="space-y-4">
              {evaluationCriteria.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 記事制作フロー */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              記事制作フロー
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              すべての記事は、以下のフローに従って制作しています。
            </p>
            <div className="space-y-4">
              {productionFlow.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                      {item.step}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 情報の正確性 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              情報の正確性への取り組み
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              当サイトでは、掲載情報の正確性を確保するために以下の取り組みを行っています。
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  公式サイトを一次情報源とし、料金やサービス内容は公式情報に基づいて記載します
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  複数の情報源を照合し、情報の信頼性を確認します
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  情報に変更があった場合は、速やかに記事を更新します
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  誤りを発見した場合は、訂正内容を明記した上で修正します
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  利用者からの情報提供やご指摘も積極的に受け付け、記事品質の向上に努めます
                </span>
              </li>
            </ul>
          </section>

          {/* ランキング方針 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              ランキング方針
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              当サイトのランキングは、上記6項目の評価基準に基づき、総合的なスコアによって順位を決定しています。ランキングの順位は、アフィリエイト報酬の有無や金額によって左右されることはありません。すべてのジムを同じ基準で評価し、利用者にとって真に有益な情報を提供することを優先しています。
            </p>
          </section>

          {/* アフィリエイト開示 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              アフィリエイト広告について
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              当サイトは、アフィリエイトプログラムに参加しており、記事内のリンクを経由して商品・サービスの購入や申し込みが行われた場合、当社が報酬を受け取ることがあります。これは当サイトの運営費に充てられ、より良いコンテンツの提供に活用されます。アフィリエイト報酬の有無は、記事の内容や評価に影響を与えません。
            </p>
          </section>

          {/* 景品表示法対応 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              景品表示法への対応
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              当サイトは、不当景品類及び不当表示防止法（景品表示法）を遵守し、以下の点に留意して記事を制作しています。
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  優良誤認表示や有利誤認表示にあたる表現を使用しません
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  広告であることが明確にわかるよう、適切な表記を行います
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  比較表示を行う場合は、客観的なデータに基づき、公正な比較を行います
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">・</span>
                <span>
                  「No.1」等の最上級表現を使用する場合は、調査の根拠を明示します
                </span>
              </li>
            </ul>
          </section>

          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            <p>制定日: 2026年4月21日</p>
            <p className="mt-1">株式会社MediaX</p>
          </div>
        </div>
      </div>
    </>
  );
}
