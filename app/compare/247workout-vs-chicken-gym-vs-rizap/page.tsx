import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "24/7ワークアウト・チキンジム・RIZAPを比較【2026年】料金・特徴・どっちがおすすめ？",
  description:
    "24/7ワークアウト・チキンジム・RIZAPの3大パーソナルジムを料金・営業時間・特徴・向いている人で徹底比較。「安さで選ぶか結果で選ぶか」で迷う人向けに、月額と総額の見方、選び方のポイントまで整理しました。",
  alternates: { canonical: "/compare/247workout-vs-chicken-gym-vs-rizap/" },
};

/* ---------- 比較対象（各ジムの当サイトレビュー記載・公開情報にもとづく整理。2026年6月時点） ---------- */
type GymRow = {
  name: string;
  slug: string;
  company: string;
  stores: string;
  hours: string;
  priceShort: string;
  feature: string;
  refund: string;
};

const gyms: GymRow[] = [
  {
    name: "24/7ワークアウト",
    slug: "247workout",
    company: "株式会社トゥエンティーフォーセブン",
    stores: "全国80店舗以上",
    hours: "7:00〜24:00（店舗により異なる）",
    priceShort: "月額33,000円〜（月4回・入会金無料）",
    feature: "深夜24時まで営業 / 3食食べる食事指導 / 完全個室",
    refund: "公式で要確認",
  },
  {
    name: "チキンジム",
    slug: "chicken-gym",
    company: "株式会社CHICKEN GYM",
    stores: "全国34店舗",
    hours: "7:00〜23:00（店舗により異なる）",
    priceShort: "月々6,800円〜（分割払い時の目安）",
    feature: "初心者特化 / 手ぶらOK / ウェア・シューズ無料レンタル",
    refund: "公式で要確認",
  },
  {
    name: "RIZAP（ライザップ）",
    slug: "rizap",
    company: "RIZAP株式会社",
    stores: "全国100店舗以上",
    hours: "10:00〜22:00（店舗により異なる）",
    priceShort: "シェイプアップ16回 327,800円（2ヶ月）/ PRIMEプラン 月額22,000円〜",
    feature: "専属トレーナー / 管理栄養士サポート / 結果にコミット",
    refund: "30日間全額返金保証（条件は公式で要確認）",
  },
];

/* ---------- 比較表の行定義 ---------- */
const compareCols: { label: string; key: keyof GymRow }[] = [
  { label: "運営会社", key: "company" },
  { label: "店舗数", key: "stores" },
  { label: "営業時間", key: "hours" },
  { label: "料金の目安", key: "priceShort" },
  { label: "主な特徴", key: "feature" },
  { label: "返金保証", key: "refund" },
];

/* ---------- こんな人におすすめ ---------- */
const recommendations = [
  {
    name: "24/7ワークアウト",
    slug: "247workout",
    points: [
      "仕事帰りや深夜（〜24時）に通いたい人",
      "極端な糖質制限が苦手で、3食食べながら痩せたい人",
      "大手の中では手頃な料金で本格パーソナルを試したい人",
    ],
  },
  {
    name: "チキンジム",
    slug: "chicken-gym",
    points: [
      "とにかく月々の負担を抑えてパーソナルを始めたい初心者",
      "手ぶらで通いたい人（ウェア・シューズ無料レンタル）",
      "まずは低価格でパーソナルジムの雰囲気を試したい人",
    ],
  },
  {
    name: "RIZAP（ライザップ）",
    slug: "rizap",
    points: [
      "費用がかかっても短期間で確実に結果を出したい人",
      "専属トレーナー＋管理栄養士の手厚いサポートを求める人",
      "返金保証があると安心して始められる人",
    ],
  },
];

/* ---------- 選び方 ---------- */
const selectionPoints = [
  {
    title: "「月額」だけでなく「総額」で比べる",
    desc: "3社とも「月々◯◯円〜」という分割・月額表示と、コース総額の表示が混在します。たとえば月々の数字が小さくても、契約回数や期間によっては総額が数十万円になることがあります。必ず総額と支払い期間の両方を確認しましょう。",
  },
  {
    title: "「安さ重視」か「結果重視」かで方向性が変わる",
    desc: "月々の負担を最優先するなら低価格帯のチキンジム、結果と手厚いサポートを優先するならRIZAP、その中間でバランスを取りたいなら24/7ワークアウトが候補になります。何を一番大切にするかを先に決めると選びやすくなります。",
  },
  {
    title: "営業時間と通いやすさを確認する",
    desc: "続けられるかどうかは立地と営業時間に大きく左右されます。深夜まで通いたいなら24時まで営業の24/7ワークアウト、というように、自分の生活リズムに合う営業時間かを確認しましょう。",
  },
  {
    title: "無料カウンセリングで相性を見る",
    desc: "3社とも無料カウンセリングを用意しています。料金・保証条件・トレーナーとの相性は、実際に足を運んで複数を比較するのが確実です。",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "24/7ワークアウトとRIZAPはどっちがおすすめ？",
    a: "料金を抑えつつ3食食べながら続けたい人には24/7ワークアウト、費用がかかっても短期間で確実に結果を出したい人にはRIZAPが向いています。RIZAPには30日間全額返金保証がありますが、料金はRIZAPの方が高めです。最新の料金・保証条件は各公式サイトでご確認ください。",
  },
  {
    q: "一番安いのはどれですか？",
    a: "当サイト掲載の目安では、月々の表示額が最も低いのはチキンジム（月々6,800円〜・分割払い時の目安）です。ただし月々の額が小さくても総額は契約回数・期間で変わるため、必ず総額も確認してください。",
  },
  {
    q: "返金保証があるのはどれですか？",
    a: "3社の中ではRIZAPが30日間全額返金保証を設けています。24/7ワークアウト・チキンジムの保証については各公式サイトで要確認です。保証は「30日以内」「条件あり」など範囲がジムごとに異なります。",
  },
  {
    q: "深夜まで通えるのはどれですか？",
    a: "3社の中では24/7ワークアウトが最も遅く、多くの店舗で24時まで営業しています（店舗により異なる）。チキンジムは23時まで、RIZAPは22時までが目安です。利用予定店舗の営業時間は公式でご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CompareThreeGyms() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "目的別に比較", href: "/compare/" }, { name: "24/7ワークアウト・チキンジム・RIZAP比較" }]} />

      <main className="min-h-screen">
        <header className="bg-orange-50 py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              24/7ワークアウト・チキンジム・RIZAPを比較【2026年】どっちがおすすめ？
            </h1>
            <p className="text-gray-700 leading-relaxed">
              「大手のパーソナルジムで迷っている」「安さで選ぶか、結果で選ぶか決められない」——そんな方向けに、
              <strong>24/7ワークアウト・チキンジム・RIZAP</strong>の3社を、料金・営業時間・特徴・向いている人で比較しました。
              月額と総額の見方や選び方のポイントもまとめています。
            </p>
            <p className="text-xs text-gray-500 mt-3">
              各ジムの情報は当サイト各レビューの記載および各ジムの公開情報にもとづく整理です（2026年6月時点）。料金・保証・営業時間の最新内容は各公式サイトでご確認ください。
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-4xl py-10">
          {/* ---------- 結論ボックス ---------- */}
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
            <h2 className="font-bold text-gray-900 mb-3">結論：目的で選ぶならこの3パターン</h2>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>とにかく月々を安く始めたい</strong>初心者 → <Link href="/review/chicken-gym/" className="text-teal-600 underline">チキンジム</Link></li>
              <li>・<strong>深夜まで通え、3食食べながら</strong>手頃に続けたい → <Link href="/review/247workout/" className="text-teal-600 underline">24/7ワークアウト</Link></li>
              <li>・<strong>費用がかかっても確実に結果</strong>を出したい → <Link href="/review/rizap/" className="text-teal-600 underline">RIZAP</Link>（30日間全額返金保証）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">※月々の表示額が小さくても、契約回数・期間で総額は変わります。必ず総額も確認しましょう。</p>
          </div>

          {/* ---------- 比較表 ---------- */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-orange-200">3社の比較表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="px-4 py-3 text-left font-medium w-28 whitespace-nowrap">項目</th>
                    {gyms.map((g) => (
                      <th key={g.slug} className="px-4 py-3 text-left font-medium">{g.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareCols.map((col) => (
                    <tr key={col.key} className="border-b border-gray-100 align-top">
                      <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">{col.label}</th>
                      {gyms.map((g) => (
                        <td key={g.slug} className="px-4 py-3 text-gray-800">{g[col.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              ※ 料金は税込・目安です。プランやキャンペーンにより変動します。各社の詳しい料金・口コミは各レビューをご覧ください。
            </p>
          </section>

          {/* ---------- こんな人におすすめ ---------- */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-200">それぞれこんな人におすすめ</h2>
            <div className="space-y-6">
              {recommendations.map((r) => (
                <div key={r.slug} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-800 mb-3">
                    <Link href={`/review/${r.slug}/`} className="text-orange-600 hover:underline">{r.name}</Link>
                  </h3>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {r.points.map((p, i) => (
                      <li key={i}>・{p}</li>
                    ))}
                  </ul>
                  <p className="text-sm mt-3">
                    <Link href={`/review/${r.slug}/`} className="text-orange-600 font-medium hover:underline">▶ {r.name}の口コミ・料金を詳しく見る</Link>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- 選び方 ---------- */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-orange-200">3社で迷ったときの選び方</h2>
            <div className="space-y-4">
              {selectionPoints.map((p, i) => (
                <div key={p.title} className="bg-white border border-gray-200 rounded-lg p-5 flex items-start gap-4">
                  <div className="text-2xl font-black text-orange-300 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- FAQ ---------- */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-orange-200">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-800 cursor-pointer">{f.q}</summary>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ---------- 関連 ---------- */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">関連ページ</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <Link href="/compare/" className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">目的別に比較</Link>
              <Link href="/price/" className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">料金相場</Link>
              <Link href="/review/247workout/" className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">24/7ワークアウト</Link>
              <Link href="/review/rizap/" className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">RIZAP</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
