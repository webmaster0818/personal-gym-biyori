import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import StoreGmapBox from "@/components/StoreGmapBox";
import StorePrice from "@/components/StorePrice";
import StoreJsonLd from "@/components/StoreJsonLd";

/*
 * 2026-11-02 新設（施主判断「あるなら作る」）。
 * 公式の新宿・代々木店ページ（https://www.last-style.com/shinjuku/）を2026-11-02に確認した値だけを掲載。
 * 公式の店舗一覧（/gym/）には池袋東口本店のみ掲載されている点も本文に明記する。
 */

const CHECKED = "2026年11月2日";
const SRC = {
  shinjuku: "https://www.last-style.com/shinjuku/",
  gym: "https://www.last-style.com/gym/",
};

export const metadata: Metadata = {
  title: "Lastyle 新宿・代々木店の料金・営業時間・アクセス",
  description:
    "Lastyle（ラスタイル）新宿・代々木店の住所・営業時間・アクセス・料金を、公式の店舗ページで2026年11月2日に確認した内容でまとめました。JR代々木駅から徒歩1分、スタンダード16回コースは1回13,200円（税込）です。",
};

/* ---------- 基本情報（公式 新宿・代々木店ページ） ---------- */
const basicInfo = [
  { label: "店舗名", value: "ラスタイル 新宿・代々木店" },
  { label: "住所", value: "東京都渋谷区代々木1丁目31-17 麻緒ビル 3F" },
  { label: "営業時間", value: "平日 9:00〜22:30（最終受付 21:00）／土日祝日 10:00〜20:30（最終受付 19:00）。研修会や機材メンテナンス等により休館となる場合があります" },
  { label: "アクセス", value: "JR代々木駅 徒歩1分／JR新宿駅 徒歩8分／小田急線 南新宿駅 徒歩6分／副都心線 北参道駅 徒歩7分" },
  { label: "電話番号", value: "03-5924-6810（受付時間 10時〜22時）" },
  { label: "支払い方法", value: "銀行振込・クレジットカード" },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "Lastyle新宿・代々木店の料金はいくらですか？", a: "公式の新宿・代々木店ページの料金表では、スタンダード16回コース（1回60分）が1回12,000円（税込13,200円）です。入会金は通常50,000円（税抜）のところ、キャンペーンで25,000円（税込27,500円）と記載されています（2026年11月2日確認）。" },
  { q: "Lastyle新宿・代々木店の営業時間を教えてください。", a: "平日は9:00〜22:30（最終受付21:00）、土日祝日は10:00〜20:30（最終受付19:00）です。研修会や機材メンテナンス等により休館となる場合があると公式に記載されています。" },
  { q: "Lastyle新宿・代々木店は最寄り駅から近いですか？", a: "JR代々木駅から徒歩1分です。JR新宿駅からは徒歩8分、小田急線 南新宿駅から徒歩6分、副都心線 北参道駅から徒歩7分と記載されています。" },
  { q: "Lastyle新宿・代々木店で体験はできますか？", a: "公式の予約フォームでは「無料カウンセリング（60分）」と「無料カウンセリング＋体験トレーニング（60分）」を選べます。体験トレーニングは通常8,800円（税込）のところ0円と記載されています。" },
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

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline">
      {children}
    </a>
  );
}

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StoreJsonLd k="laststyle/shinjuku-yoyogi" storeName="Lastyle 新宿・代々木店" brandSlug="laststyle" brandName="Laststyle" pageUrl="https://personal-gym-biyori.com/review/laststyle/shinjuku-yoyogi/" mapsSearchUrl="https://www.google.com/maps/search/ラスタイル+新宿・代々木店" />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "Laststyle", href: "/review/laststyle/" },
          { name: "新宿・代々木店" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Lastyle 新宿・代々木店の料金・営業時間・アクセス
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: {CHECKED}（公式の店舗ページで確認）</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Laststyle の公式サイトはこちら
          </a>
        </p>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Lastyle（ラスタイル）新宿・代々木店は、JR代々木駅から徒歩1分の完全個室のパーソナルジムです。
            公式の店舗ページでは、筋トレ・ボクシング・有酸素運動を組み合わせたトレーニング、有酸素スペース・シャワールーム・キッズスペースの設備、
            ウェア・シューズ・タオル・バスタオルの無料貸し出しが案内されています。
          </p>
          <p className="text-xs text-gray-500 mt-3">
            ※{CHECKED}時点で、公式の<Src href={SRC.gym}>店舗一覧ページ</Src>に掲載されているのは池袋東口本店のみです。新宿・代々木店は、公式サイトのメニューと<Src href={SRC.shinjuku}>新宿・代々木店の店舗ページ</Src>（予約フォームあり）で確認しています。来店前に公式サイトか電話でご確認ください。
          </p>
        </section>

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
          <p className="text-xs text-gray-500 mt-2">出典: <Src href={SRC.shinjuku}>公式 新宿・代々木店ページ</Src>（{CHECKED}確認）</p>
        </section>
        {/* CTA ボタン */}
        <div className="mb-10 text-center">
          <a href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        {/* ---------- 料金・キャッシュバック ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            料金とキャッシュバック（新宿・代々木店ページの掲載内容）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">コース</th>
                  <td className="px-4 py-3 text-gray-800">スタンダード16回コース（1回60分）1回12,000円（税込13,200円）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">入会金</th>
                  <td className="px-4 py-3 text-gray-800">通常50,000円（税抜）→ キャンペーンで25,000円（税込27,500円）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">キャッシュバック</th>
                  <td className="px-4 py-3 text-gray-800">8回コースは1kg減るごとに5,000円（最大5万円）、16回コースは1kg減るごとに10,000円（最大10万円）。購入額の最低金額133,100円・期間2ヶ月。初回セッションから2ヶ月後のセッションで体重が1kg以上減少していることが条件です</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">体験</th>
                  <td className="px-4 py-3 text-gray-800">無料カウンセリング（60分）／無料カウンセリング＋体験トレーニング（60分）通常8,800円（税込）→ 0円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典: <Src href={SRC.shinjuku}>公式 新宿・代々木店ページ</Src>の料金表（画像）・キャッシュバック適用条件（{CHECKED}確認）。料金表は池袋東口本店のページと同じ内容です。8回コースの金額は料金表に記載がありません。返金規定の対象外条件は<Link href="/review/laststyle/" className="underline">Lastyleのレビュー</Link>にまとめています。
          </p>
        </section>

        {/* ---------- Google Map エリア ---------- */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">
            アクセス・地図
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Lastyle 新宿・代々木店（渋谷区代々木1丁目31-17 麻緒ビル 3F）の所在地をGoogleマップで確認できます。
            </p>
            <a
              href="https://www.google.com/maps/search/ラスタイル+新宿・代々木店"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Googleマップで見る
            </a>
          </div>
        </section>

        <StorePrice brandSlug="laststyle" brandName="Laststyle" />
        <StoreGmapBox k="laststyle/shinjuku-yoyogi" storeName="Lastyle 新宿・代々木店" brandSlug="laststyle" brandName="Laststyle" mapsSearchUrl="https://www.google.com/maps/search/ラスタイル+新宿・代々木店" />

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
              Laststyleの詳しい口コミ・料金情報はこちら
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/review/laststyle/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Laststyleの総合レビューを見る
              </Link>
              <Link
                href="/review/laststyle/ikebukuro/"
                className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                池袋店のページを見る
              </Link>
              <a
                href="https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                公式サイトへ
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
