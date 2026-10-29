import type { Metadata } from "next";
import { BRAND_PRICES, FEE_SURVEYED_AT, brandsByKind } from "@/data/brand-prices";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "パーソナルジムの料金を60ブランド実査【2026年10月】公式サイトの掲載額一覧",
  description:
    "パーソナルジム60ブランドの公式サイトを1件ずつ確認し、掲載されている金額のみを転記しています（2026年10月8日実査）。月額制・コース制・都度払いに分けて安い順に掲載し、入会金と公式ページのリンクも併記しています。金額が公表されていない8ブランドは、推定せず「公表していない」と記載しています。",
  alternates: { canonical: "/price/" },
};

const tips = [
  { title: "総額と月々の支払いを分けて見る", desc: "大手は「2ヶ月◯◯万円」の総額表示、中〜低価格帯は月額表示が中心です。総額が大きく見えても分割で月々の負担は抑えられることがあり、逆に月額制でも長期間通えば総額が膨らみます。期間と総額・月額の両面で比較することをおすすめします。" },
  { title: "入会金キャンペーンを活用する", desc: "当サイトが公式サイトで入会金を確認できたブランドでは、0円から55,000円（税込）まで幅がありました。「体験当日の入会で無料」などの条件付きキャンペーンを公式に掲載しているブランドもあるため、お申し込み前に条件をご確認ください。" },
  { title: "「月々◯円〜」が分割払いの月額でないか確認する", desc: "「月々◯円〜」という表示には、コース料金を分割した場合の月額を示しているものがあります。例えば、チキンジムについて他サイトに掲載されている「月々6,800円〜」は分割払い時の月額で、公式の月額プランは月2回18,900円からです。コース総額・入会金・分割手数料を含めて比較してください。" },
  { title: "返金保証・分割払いの有無で実質負担が変わる", desc: "全額返金保証や分割払いに対応するジムなら、初期費用やリスクを抑えて始められます。料金表の数字だけでなく、保証・支払い方法まで含めて総合的に判断することをおすすめします。" },
];

const baseFaqs = [
  { q: "なぜパーソナルジムは料金に幅があるのですか？", a: "トレーナーのマンツーマン度合い、食事管理の手厚さ、返金保証の有無、立地（家賃）などで価格が変わるためです。大手の結果コミット型は高め、月額制の通い放題型や地方の地域密着型は比較的リーズナブルな傾向があります。" },
  { q: "エリアによって料金は変わりますか？", a: "当サイトでは、エリア別の料金差を公式サイトの値で集計できていないため、エリア別の目安は掲載していません。同じブランドでも店舗によって料金が異なる場合があり、公式サイトに「一部店舗によって料金が異なります」（FURDI）、「北海道の店舗は一部料金形態が異なります」（BEYOND）と記載しているブランドもあります。通う店舗の料金は、公式サイトの店舗ページでご確認ください。" },
  { q: "費用をできるだけ抑える方法を教えてください。", a: "①入会金無料キャンペーンを活用する ②月額制・通い放題型や地域密着型を検討する ③分割払いで月々の負担を平準化する ④無料カウンセリングで複数社を比較する、といった方法が有効です。料金の数字だけでなく、保証・支払い方法も含めて選ぶことをおすすめします。" },
];

export default function PricePage() {
  const unpublished = BRAND_PRICES.filter((b) => b.kind === "未公表");
  const published = BRAND_PRICES.filter((b) => b.lowest !== null);
  const median = (xs: number[]) => {
    const a = [...xs].sort((x, y) => x - y);
    const m = Math.floor(a.length / 2);
    return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
  };
  const dist = (["月額制", "コース制", "都度払い"] as const)
    .map((kind) => {
      const xs = BRAND_PRICES.filter((b) => b.kind === kind && b.lowest !== null).map((b) => b.lowest as number);
      return { kind, n: xs.length, med: median(xs), min: Math.min(...xs), max: Math.max(...xs) };
    })
    .filter((d) => d.n > 0);
  const mo = dist.find((d) => d.kind === "月額制");
  const co = dist.find((d) => d.kind === "コース制");
  const y = (n: number) => n.toLocaleString();
  const faqs = [
    {
      q: "パーソナルジムの料金相場はいくらですか？",
      a: `当サイトが${FEE_SURVEYED_AT}に${BRAND_PRICES.length}ブランドの公式サイトで確認した各ブランドの最安プランでは、${mo ? `月額制（${mo.n}ブランド）が月${y(mo.min)}円〜${y(mo.max)}円（中央値${y(mo.med)}円）` : ""}${mo && co ? "、" : ""}${co ? `コース制（${co.n}ブランド）がコース総額${y(co.min)}円〜${y(co.max)}円（中央値${y(co.med)}円）` : ""}です。月額制にはAIマシンや個室ジムなど、トレーナーが毎回つかない形態も含まれます。金額を公表していないブランドが${unpublished.length}ブランドあるため、目安としてご覧ください。`,
    },
    ...baseFaqs,
  ];

  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金相場" }]} />
      <main className="min-h-screen">
        <header className="bg-orange-50 py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">パーソナルジムの料金を{BRAND_PRICES.length}ブランド実査【2026年10月】</h1>
            <p className="text-gray-700 leading-relaxed">
              当ページでは、料金の出典を明確にするため、<strong>{BRAND_PRICES.length}ブランドの公式サイトを1件ずつ確認し、掲載されていた金額のみ</strong>を掲載しています。
              各ブランドには公式ページへのリンクを付けているため、その場で金額をご確認いただけます。
            </p>
            <p className="text-xs text-gray-500 mt-3">実査日：{FEE_SURVEYED_AT}。税込・税抜の表記はジムにより異なるため、公式サイトの表記のまま掲載しています。料金・キャンペーンは変更される場合がありますので、お申し込み前に公式サイトまたは無料カウンセリングにて最新情報をご確認ください。</p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-4xl py-10">
          {/* 実査データから計算した分布（2026-10-08） */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">実査{BRAND_PRICES.length}ブランドの価格分布</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              公式サイトで金額が公表されている{published.length}ブランドについて、<strong>各ブランドの最も安いプラン</strong>を集計しています。
              支払い方式によって金額の意味が異なるため、方式ごとに分けて集計しています（月額と総額は直接比較できません）。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dist.map((d) => (
                <div key={d.kind} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-800 mb-1">{d.kind}（{d.n}ブランド）</h3>
                  <p className="text-sm text-gray-600">
                    {d.n === 1 ? (
                      <>最安プラン <strong>{d.med.toLocaleString()}円</strong></>
                    ) : (
                      <>
                        最安プランの中央値 <strong>{d.med.toLocaleString()}円</strong>
                        <span className="block mt-1">
                          幅：{d.min.toLocaleString()}円 〜 {d.max.toLocaleString()}円（{Math.round(d.max / d.min)}倍）
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-1">公式サイトで金額を公表していないブランド</h3>
                <p className="text-sm text-gray-600">
                  <strong>{unpublished.length}ブランド</strong>です。総額の確認には問い合わせが必要なため、比較の最後に検討されることをおすすめします。
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">※「最安プラン」は、月額制では最も安い月額、コース制では最も安いコース総額、都度払いでは1回あたりの金額を指します。方式をまたいだ比較はできないため、分けて集計しています。</p>
          </section>

          {/* ブランド別の公表料金（2026-10-08 全ブランド再実査） */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              ブランド別の公表料金（{BRAND_PRICES.length}ブランドを公式サイトで実査）
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {FEE_SURVEYED_AT}に、{BRAND_PRICES.length}ブランドすべての公式サイトを1件ずつ確認し、
              <strong>掲載されている金額のみ</strong>を転記しました。各行の「公式」のリンク先が、その金額を掲載しているページです。
              公式サイトで金額が公表されていないブランドは、推定で補完せず
              <strong>「公表していない」と記載しています</strong>（{unpublished.length}ブランド）。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              支払い方式の異なる料金は同じ基準で比較できないため、
              <strong>月額制・コース制・都度払いに分けて、それぞれ安い順</strong>に掲載しています。
            </p>

            {([
              { kind: "月額制" as const, lead: "毎月決まった額を支払う方式です。継続しやすさや退会のしやすさを重視する方に向いています。" },
              { kind: "コース制" as const, lead: "回数と期間をまとめて契約する方式です。期限までに結果を出したい方に向いています。" },
              { kind: "都度払い" as const, lead: "利用した分だけ支払う方式です。通う頻度が定まらない方に向いています。" },
            ]).map(({ kind, lead }) => {
              const rows = brandsByKind(kind);
              if (rows.length === 0) return null;
              return (
                <div key={kind} className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-1">{kind}（{rows.length}ブランド・安い順）</h3>
                  <p className="text-xs text-gray-600 mb-2">{lead}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-2 text-left whitespace-nowrap">ブランド</th>
                          <th className="border border-gray-200 p-2 text-left">公式サイトに掲載されている料金</th>
                          <th className="border border-gray-200 p-2 text-left whitespace-nowrap">入会金</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((b) => (
                          <tr key={b.slug}>
                            <td className="border border-gray-200 p-2 font-bold whitespace-nowrap align-top">
                              <a href={`/review/${b.slug}/`} className="text-orange-600 hover:underline">{b.name}</a>
                              <span className="block font-normal text-[11px] text-gray-500 mt-1">{b.area}</span>
                              {b.officialUrl && (
                                <a
                                  href={b.officialUrl}
                                  target="_blank"
                                  rel="nofollow noopener"
                                  className="block font-normal text-[11px] text-gray-500 underline mt-0.5"
                                >
                                  公式
                                </a>
                              )}
                            </td>
                            <td className="border border-gray-200 p-2 text-xs leading-relaxed align-top">
                              {b.price}
                              {b.note && <span className="block text-[11px] text-gray-500 mt-1">※{b.note}</span>}
                            </td>
                            <td className="border border-gray-200 p-2 text-xs align-top">{b.entry}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}

            {unpublished.length > 0 && (
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-1">公式サイトで料金を公表していないブランド（{unpublished.length}）</h3>
                <p className="text-xs text-gray-600 mb-2">
                  金額の確認に問い合わせが必要なブランドです。他サイトに掲載されている金額は出典を確認できないため、当ページには掲載していません。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-2 text-left whitespace-nowrap">ブランド</th>
                        <th className="border border-gray-200 p-2 text-left">公式サイトで確認できたこと</th>
                      </tr>
                    </thead>
                    <tbody>
                      {unpublished.map((b) => (
                        <tr key={b.slug}>
                          <td className="border border-gray-200 p-2 font-bold whitespace-nowrap align-top">
                            <a href={`/review/${b.slug}/`} className="text-orange-600 hover:underline">{b.name}</a>
                            <span className="block font-normal text-[11px] text-gray-500 mt-1">{b.area}</span>
                            {b.officialUrl && (
                              <a href={b.officialUrl} target="_blank" rel="nofollow noopener" className="block font-normal text-[11px] text-gray-500 underline mt-0.5">公式</a>
                            )}
                          </td>
                          <td className="border border-gray-200 p-2 text-xs leading-relaxed align-top">
                            {b.price}
                            <span className="block text-[11px] text-gray-500 mt-1">入会金：{b.entry}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              ※{FEE_SURVEYED_AT}に各ブランドの公式サイトで確認した掲載値です。税込・税抜の表記はジムにより異なるため、公式サイトの表記のまま掲載しています。
              「月々◯円〜」として<strong>分割払い時の月額</strong>を表示しているジムがあり、総額とは異なります。コース料金・入会金・分割手数料を含めた総額で比較してください。
              店舗・キャンペーンにより変動するため、お申し込み前に公式サイトまたは無料カウンセリングにて最新情報をご確認ください。
            </p>
          </section>

          {/* 費用を抑えるコツ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">料金を抑える4つのポイント</h2>
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
