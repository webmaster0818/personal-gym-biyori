import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "パーソナルジムの料金相場【2026年・エリア別】大手・中価格帯・月額を比較",
  description:
    "パーソナルジムの料金相場を2026年版・エリア別に独自集計。大手2ヶ月コース・中価格帯月額制・低価格月額・入会金の目安を東京〜地方都市まで一覧で比較。費用を抑えるコツも解説します。",
  alternates: { canonical: "/price/" },
};

// 当サイトが各エリアページで調査・整理した料金相場（2026年時点）を横断集計
const areaPrices = [
  { name: "東京", big: "20万〜40万円", mid: "月3万〜8万円", low: "月1万〜3万円" },
  { name: "横浜", big: "20万〜38万円", mid: "月3万〜7万円", low: "月1万〜3万円" },
  { name: "さいたま", big: "20万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "千葉", big: "18万〜35万円", mid: "月3万〜7万円", low: "月1万〜3万円" },
  { name: "名古屋", big: "20万〜38万円", mid: "月3万〜7万円", low: "月1万〜3万円" },
  { name: "大阪", big: "18万〜38万円", mid: "月3万〜7万円", low: "月1万〜3万円" },
  { name: "神戸", big: "18万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "京都", big: "18万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "福岡", big: "18万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "札幌", big: "18万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "仙台", big: "18万〜35万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "広島", big: "18万〜35万円", mid: "月3万〜7万円", low: "月1万〜3万円" },
  { name: "岡山", big: "16万〜33万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
  { name: "新潟", big: "16万〜33万円", mid: "月3万〜6万円", low: "月1万〜3万円" },
];

const tokyoDistricts = [
  { name: "渋谷", big: "20万〜40万円", mid: "月3万〜8万円" },
  { name: "新宿", big: "20万〜40万円", mid: "月3万〜8万円" },
  { name: "池袋", big: "20万〜38万円", mid: "月3万〜8万円" },
  { name: "銀座", big: "22万〜40万円", mid: "月4万〜10万円" },
];

const tips = [
  { title: "総額と月々の支払いを分けて見る", desc: "大手は「2ヶ月◯◯万円」の総額表示、中〜低価格帯は月額表示が中心です。総額が大きく見えても分割で月々の負担は抑えられることがあり、逆に月額制でも長期間通えば総額が膨らみます。期間と総額・月額の両面で比較しましょう。" },
  { title: "入会金キャンペーンを活用する", desc: "入会金は0円〜5.5万円程度と幅があり、入会金無料キャンペーンを実施するジムも多くあります。タイミング次第で数万円の差になるため、申込前にキャンペーンの有無を確認しましょう。" },
  { title: "地方は都市部より相場が低め", desc: "大手2ヶ月コースの上限は、東京・渋谷で約40万円なのに対し、岡山・新潟では約33万円と、エリアによって差があります。近隣エリアも含めて検討すると選択肢が広がります。" },
  { title: "返金保証・分割払いの有無で実質負担が変わる", desc: "全額返金保証や分割払いに対応するジムなら、初期費用やリスクを抑えて始められます。料金表の数字だけでなく、保証・支払い方法まで含めて総合的に判断しましょう。" },
];

const faqs = [
  { q: "パーソナルジムの料金相場はいくらですか？", a: "2026年時点の当サイト集計では、大手の2ヶ月コースで約18万〜40万円、中価格帯の月額制で月3万〜8万円、低価格帯の月額制で月1万〜3万円が目安です。これに入会金（0円〜5.5万円程度）が加わります。エリアやジムの方針によって幅があります。" },
  { q: "なぜパーソナルジムは料金に幅があるのですか？", a: "トレーナーのマンツーマン度合い、食事管理の手厚さ、返金保証の有無、立地（家賃）などで価格が変わるためです。大手の結果コミット型は高め、月額制の通い放題型や地方の地域密着型は比較的リーズナブルな傾向があります。" },
  { q: "エリアによって料金は変わりますか？", a: "はい。当サイトの集計では、大手2ヶ月コースの上限が東京・渋谷で約40万円、岡山・新潟で約33万円と、都市部ほど高め・地方ほど低めの傾向があります。同じ通えるなら近隣エリアも比較すると費用を抑えやすくなります。" },
  { q: "できるだけ費用を抑えるにはどうすればいいですか？", a: "①入会金無料キャンペーンを狙う ②月額制・通い放題型や地域密着型を検討する ③分割払いで月々の負担を平準化する ④無料カウンセリングで複数社を比較する、が有効です。料金の数字だけでなく保証・支払い方法も含めて選びましょう。" },
];

export default function PricePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金相場" }]} />
      <main className="min-h-screen">
        <header className="bg-orange-50 py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">パーソナルジムの料金相場【2026年・エリア別】</h1>
            <p className="text-gray-700 leading-relaxed">
              パーソナルジムの料金を「大手2ヶ月コース」「中価格帯（月額制）」「低価格（月額制）」の区分で、全国主要エリア別に集計しました。費用を抑えるコツもまとめています。
            </p>
            <p className="text-xs text-gray-500 mt-3">当サイトが各エリアページで調査・整理した料金相場の横断集計です（2026年時点・税込/税抜はジムにより異なる）。実際の料金は各ジムの公式・無料カウンセリングでご確認ください。</p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-4xl py-10">
          {/* 区分の説明 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">料金の3区分と入会金</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-bold text-gray-800 mb-1">大手パーソナルジム（2ヶ月コース）</h3><p className="text-sm text-gray-600">結果コミット型。総額 <strong>約18万〜40万円</strong>。食事管理・返金保証つきが多い。</p></div>
              <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-bold text-gray-800 mb-1">中価格帯（月額制）</h3><p className="text-sm text-gray-600">月 <strong>3万〜8万円</strong>。続けやすさと指導の質のバランス型。</p></div>
              <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-bold text-gray-800 mb-1">低価格（月額制）</h3><p className="text-sm text-gray-600">月 <strong>1万〜3万円</strong>。通い放題型・地域密着型に多い。</p></div>
              <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-bold text-gray-800 mb-1">入会金</h3><p className="text-sm text-gray-600"><strong>0円〜5.5万円程度</strong>。無料キャンペーンを実施するジムも多い。</p></div>
            </div>
          </section>

          {/* エリア別相場 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">エリア別の料金相場</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-2 text-left">エリア</th>
                    <th className="border border-gray-200 p-2 text-left">大手（2ヶ月）</th>
                    <th className="border border-gray-200 p-2 text-left">中価格帯（月額）</th>
                    <th className="border border-gray-200 p-2 text-left">低価格（月額）</th>
                  </tr>
                </thead>
                <tbody>
                  {areaPrices.map((a) => (
                    <tr key={a.name}>
                      <td className="border border-gray-200 p-2 font-bold">{a.name}</td>
                      <td className="border border-gray-200 p-2">{a.big}</td>
                      <td className="border border-gray-200 p-2">{a.mid}</td>
                      <td className="border border-gray-200 p-2">{a.low}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">※低価格帯（月額制）は全エリアで月1万〜3万円が目安。入会金は0円〜5.5万円程度。</p>

            <h3 className="font-bold text-gray-700 mt-6 mb-2">東京主要エリア</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-2 text-left">エリア</th>
                    <th className="border border-gray-200 p-2 text-left">大手（2ヶ月）</th>
                    <th className="border border-gray-200 p-2 text-left">中価格帯（月額）</th>
                  </tr>
                </thead>
                <tbody>
                  {tokyoDistricts.map((a) => (
                    <tr key={a.name}>
                      <td className="border border-gray-200 p-2 font-bold">{a.name}</td>
                      <td className="border border-gray-200 p-2">{a.big}</td>
                      <td className="border border-gray-200 p-2">{a.mid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">銀座は中価格帯の上限が高め（月10万円）で、立地により相場が上がる傾向です。</p>
          </section>

          {/* 費用を抑えるコツ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">料金を抑える4つのコツ</h2>
            <div className="space-y-4">
              {tips.map((t, i) => (
                <div key={t.title} className="bg-white border border-gray-200 rounded-lg p-5 flex items-start gap-4">
                  <div className="text-2xl font-black text-orange-300 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div><h3 className="font-bold text-gray-800 mb-1">{t.title}</h3><p className="text-sm text-gray-600">{t.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-800 cursor-pointer">{faq.q}</summary>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
          </section>

          {/* 関連 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">目的・エリアから探す</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/compare/" className="bg-white border border-gray-200 rounded-lg p-3 font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">目的別パーソナルジム比較</Link>
              <Link href="/area/tokyo/" className="bg-white border border-gray-200 rounded-lg p-3 font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">東京のジムを探す</Link>
              <Link href="/area/osaka/" className="bg-white border border-gray-200 rounded-lg p-3 font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">大阪のジムを探す</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
