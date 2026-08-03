import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "4Fのパーソナルジムに新宿店はある？用賀店の情報と新宿の代替ジム比較【2026年】",
  description:
    "「4Fのパーソナルジム 新宿」で探す方へ。4Fのパーソナルジムは東京都世田谷区用賀の1店舗のみで、新宿店は公式サイトで確認できません（2026年8月3日確認）。用賀店の住所・営業時間・料金と、新宿で通えるパーソナルジムの比較をご案内します。",
};

// 公式サイト（4fgym.com）で確認できる唯一の店舗（2026年8月3日確認）。
const yogaStoreInfo = [
  { label: "店舗名", value: "4Fのパーソナルジム（用賀）" },
  { label: "住所", value: "東京都世田谷区用賀4丁目1-5 東京コーポレーション第10ビル4階" },
  { label: "アクセス", value: "用賀駅 徒歩2分（※公式サイト内に徒歩5分の表記もあり）" },
  { label: "営業時間", value: "7:00〜21:00・年中無休" },
  { label: "電話番号", value: "03-6411-7730" },
  { label: "体験", value: "無料カウンセリングあり（体験トレーニングの価格は公式サイトに記載なし）" },
];

const faqItems = [
  {
    q: "4Fのパーソナルジムに新宿店はありますか？",
    a: "公式サイトで確認できる店舗は東京都世田谷区用賀の1店舗のみで、新宿店は確認できません（2026年8月3日確認）。最新の店舗状況は公式サイトでご確認ください。",
  },
  {
    q: "4Fのパーソナルジムの店舗はどこにありますか？",
    a: "東京都世田谷区用賀4丁目1-5 東京コーポレーション第10ビル4階です。用賀駅から徒歩2分（公式サイト内に徒歩5分の表記もあり）で、営業時間は7:00〜21:00・年中無休です。",
  },
  {
    q: "4Fのパーソナルジムの料金はいくらですか？",
    a: "月額コースはQUICK DIET TRIAL 4が26,620円（月4回・30分）、TRIAL 8が51,040円（月8回・30分）。コースはLIGHT 202,400円（2ヶ月16回・60分）などがあり、25歳以下割引・モニター割引（20%オフ）も用意されています（いずれも税込・2026年8月3日確認）。詳しくは総合レビューと公式サイトをご確認ください。",
  },
  {
    q: "新宿でパーソナルジムを探すには？",
    a: "4Fのパーソナルジムは新宿に店舗が確認できないため、新宿エリアで通いたい場合は当サイトの「新宿のパーソナルジム比較」で料金やアクセスから比較するのがおすすめです。",
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

export default function FourFGymShinjukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "4Fのパーソナルジム", href: "/review/4f-gym/" },
          { name: "新宿で探す方へ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 mt-6">
          4Fのパーソナルジムに新宿店はある？用賀店の情報と新宿のジム比較
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年8月</p>

        {/* 結論ボックス */}
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-2">結論：4Fのパーソナルジムに新宿店は確認できません（2026年8月3日確認）</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            4Fのパーソナルジムの公式サイトで確認できる店舗は、<strong>東京都世田谷区用賀の1店舗のみ</strong>です。
            <strong>新宿店の存在は公式サイトで確認できません</strong>。「4Fのパーソナルジム 新宿」で検索された方に向けて、実在する用賀店の店舗情報と、新宿で通えるパーソナルジムの比較をご案内します。
          </p>
        </div>

        {/* 実在店舗（用賀店）の情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">4Fのパーソナルジムの店舗情報（用賀）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            公式サイトで確認できる店舗は次の1店舗です。用賀駅徒歩2分・朝7時から夜21時まで年中無休で営業しており、用賀駅周辺に通える方には利用しやすいジムです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {yogaStoreInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 店舗情報は公式サイトにもとづく2026年8月3日時点の情報です。出店状況は変わる可能性があるため、最新は公式サイトでご確認ください。
          </p>
        </section>

        {/* 総合レビューへの導線 */}
        <div className="mb-12 text-center">
          <Link href="/review/4f-gym/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors text-sm">4Fのパーソナルジムの総合レビュー（料金・口コミ）を見る</Link>
        </div>

        {/* 新宿で探す方への案内（内部リンク） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">新宿でパーソナルジムを探している方へ</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            4Fのパーソナルジムは新宿に店舗が確認できないため、新宿エリアで通えるパーソナルジムをお探しの場合は、料金・特徴・アクセスから比較するのがおすすめです。4Fのパーソナルジムのような、マンツーマンでプライベート感を重視できるジムも比較できます。
          </p>
          <div className="bg-teal-50 rounded-lg p-6 space-y-3">
            <Link href="/area/shinjuku/" className="block bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors text-center text-sm">
              新宿のパーソナルジム比較を見る →
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/review/4f-gym/" className="block border border-teal-600 text-teal-600 py-2.5 px-4 rounded-lg hover:bg-teal-50 transition-colors text-center text-sm">
                4Fのパーソナルジムの総合レビュー
              </Link>
              <Link href="/area/shibuya/" className="block border border-teal-600 text-teal-600 py-2.5 px-4 rounded-lg hover:bg-teal-50 transition-colors text-center text-sm">
                渋谷のパーソナルジム比較
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">よくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">4Fのパーソナルジム（用賀）の料金・口コミをもっと知る</h2>
          <p className="text-teal-100 text-sm mb-6">用賀駅徒歩2分・朝7時から年中無休。料金プランや口コミの傾向は、総合レビューで詳しく解説しています。</p>
          <Link href="/review/4f-gym/" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            4Fのパーソナルジムの総合レビューを見る
          </Link>
        </section>
      </div>
    </>
  );
}
