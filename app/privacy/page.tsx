import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜パーソナルジムびより",
  description:
    "パーソナルジムびよりのプライバシーポリシーです。個人情報の取扱いについてご説明します。",
};

const articles = [
  {
    title: "第1条（個人情報の定義）",
    content:
      "本プライバシーポリシーにおいて「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」といいます）に定義される個人情報を指し、生存する個人に関する情報であって、氏名、メールアドレス、その他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。",
  },
  {
    title: "第2条（収集する情報）",
    content:
      "当サイトでは、以下の情報を収集することがあります。\n・お問い合わせフォームを通じてご提供いただく氏名、メールアドレス等\n・当サイトへのアクセスに関する情報（IPアドレス、ブラウザの種類、閲覧ページ、アクセス日時等）\n・Cookie等の技術を通じて自動的に収集される情報\n・端末情報（デバイスの種類、画面解像度、OS情報等）",
  },
  {
    title: "第3条（利用目的）",
    content:
      "当社は、収集した情報を以下の目的で利用いたします。\n・お問い合わせへの回答および対応\n・当サイトのコンテンツおよびサービスの改善\n・アクセス状況の分析およびサイト運営の最適化\n・広告の配信および効果測定\n・利用規約に違反する行為への対応\n・その他、上記利用目的に付随する目的",
  },
  {
    title: "第4条（第三者提供）",
    content:
      "当社は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。\n・利用者の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要であり、利用者の同意を得ることが困難な場合\n・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合",
  },
  {
    title: "第5条（Cookieの使用）",
    content:
      "当サイトでは、利用者の利便性向上およびサービス改善の目的でCookieを使用しています。Cookieとは、ウェブサイトがブラウザを通じて利用者の端末に保存する小さなテキストファイルです。利用者は、ブラウザの設定によりCookieの受け取りを拒否することができます。ただし、Cookieを無効にした場合、当サイトの一部機能が正常に動作しない場合があります。",
  },
  {
    title: "第6条（アクセス解析ツール）",
    content:
      "当サイトでは、以下のアクセス解析ツールを使用しています。\n\n【Google Analytics】\n当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsは、Cookieを使用して利用者のアクセス情報を収集します。収集される情報は匿名であり、個人を特定するものではありません。Google Analyticsの利用規約についてはGoogleのサイトをご確認ください。利用者は、Google Analyticsオプトアウトアドオンをインストールすることで、データ収集を無効にできます。\n\n【Microsoft Clarity】\n当サイトでは、Microsoft社が提供するヒートマップ・セッション記録ツール「Microsoft Clarity」を使用しています。Clarityは、利用者のサイト上での行動（クリック、スクロール、ページ遷移等）を記録・分析します。収集されたデータは、サイトの使いやすさ向上のために使用されます。詳細はMicrosoftのプライバシーポリシーをご確認ください。",
  },
  {
    title: "第7条（安全管理措置）",
    content:
      "当社は、個人情報の漏えい、滅失またはき損を防止するため、適切な安全管理措置を講じます。個人情報を取り扱う従業者に対して、必要かつ適切な監督を行います。",
  },
  {
    title: "第8条（開示・訂正・削除の請求）",
    content:
      "利用者は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止または第三者提供の停止を請求することができます。請求があった場合、当社は本人確認を行った上で、個人情報保護法に基づき、合理的な期間内に対応いたします。請求にあたっては、下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "第9条（プライバシーポリシーの変更）",
    content:
      "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。重要な変更がある場合は、当サイト上で通知いたします。",
  },
  {
    title: "第10条（お問い合わせ窓口）",
    content:
      "個人情報の取扱いに関するお問い合わせは、下記の窓口までご連絡ください。\n\n運営会社: 株式会社MediaX\n所在地: 〒150-0011 東京都渋谷区東一丁目27番10号\nメール: お問い合わせフォームよりご連絡ください",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "プライバシーポリシー" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          最終更新日: 2026年4月21日
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 space-y-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            株式会社MediaX（以下「当社」といいます）は、当社が運営するウェブサイト「パーソナルジムびより」（以下「当サイト」といいます）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>

          {articles.map((article, i) => (
            <section key={i}>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                {article.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </section>
          ))}

          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            <p>制定日: 2026年4月21日</p>
            <p className="mt-1">株式会社MediaX</p>
          </div>
        </div>
      </div>
    </>
  );
}
