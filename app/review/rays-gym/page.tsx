import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "Rays GyM（レイズジム）の口コミ・評判は？料金・効果を徹底解説【2026年】",
  description:
    "Rays GyM（レイズジム）の口コミ・評判を徹底解説。トレーナー指名制の料金総額の目安、良い口コミ/気になる口コミの傾向、目的別の向き不向き、メリット・デメリット、よくある質問まで網羅。相性重視でパーソナルジムを選びたい方の判断材料に。",
};

const basicInfo = [
  { label: "ジム名", value: "Rays GyM（レイズジム）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月額30,000円〜75,000円程度" },
  { label: "エリア", value: "関東エリアを中心に展開" },
  { label: "特徴", value: "トレーナー指名制 / マンツーマン指導 / 目標別プログラム / 食事サポートあり" },
];

const strengths = [
  {
    title: "トレーナー指名制で相性の良い指導者を選べる",
    desc: "トレーナーを自分で指名できるシステムを採用。体験トレーニングで相性を確認してから、担当トレーナーを決められるため、長期的に安心して通えます。",
  },
  {
    title: "目標に応じた柔軟なプログラム設計",
    desc: "ダイエット、筋力アップ、競技パフォーマンス向上など、利用者の目標に合わせて完全オーダーメイドのプログラムを作成。進捗に応じて都度メニューを調整してくれます。",
  },
  {
    title: "質の高いトレーナー陣",
    desc: "資格保有者やコンテスト入賞経験のあるトレーナーが在籍。専門知識に基づいた的確な指導で、効率的なトレーニングを実現します。",
  },
];

const merits = [
  {
    title: "トレーナーを自分で選べる安心感",
    desc: "相性の良いトレーナーを指名できるため、モチベーション維持につながります。途中でトレーナーを変更することも可能です。",
  },
  {
    title: "経験豊富なトレーナーの指導",
    desc: "資格保有者や実績のあるトレーナーが多数在籍しており、初心者から上級者まで満足できる指導が受けられます。",
  },
  {
    title: "食事指導が充実している",
    desc: "トレーニングだけでなく、食事面からもしっかりサポート。目標達成に向けた栄養アドバイスが含まれています。",
  },
];

const demerits = [
  {
    title: "人気トレーナーは予約が取りにくい",
    desc: "指名制のため人気トレーナーに予約が集中しやすく、希望の時間帯に予約が取れないことがあります。",
  },
  {
    title: "トレーナーによって指導スタイルが異なる",
    desc: "指名制の特性上、トレーナーごとに指導方針が異なります。合わない場合は変更できますが、最初の選択に迷う方もいます。",
  },
  {
    title: "指名料が別途かかる場合がある",
    desc: "一部のトレーナーは指名料が追加で発生する場合があります。料金体系は事前に確認しておきましょう。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "60分/回", price: "月額30,000円〜", note: "週1回ペース" },
  { name: "月8回プラン", duration: "60分/回", price: "月額55,000円〜", note: "週2回ペース・人気プラン" },
  { name: "短期集中コース（16回）", duration: "60分/回", price: "総額140,000円〜", note: "2ヶ月集中" },
];

const reviewSummary = "Rays GyMの口コミでは「トレーナーを選べるのが良い」「指導の質が高い」という声が多く見られます。トレーナーの専門性と人柄に関する高評価が目立ちます。一方で「人気トレーナーの予約が取りにくい」「指名料がかかる場合がある」といった指摘もあります。トレーナーとの相性を重視する方に支持されています。";

const reviewCategories = [
  {
    title: "良い口コミ・評判の傾向",
    summary: "トレーナーを自分で選べる点と、指導の質・専門性への評価が中心です。相性の良い指導者と続けられる安心感を挙げる声が目立ちます。",
    items: [
      "相性の良いトレーナーを指名でき、モチベーションが続いたという声",
      "資格保有者など経験豊富なトレーナーの指導で、フォームが的確という評価",
      "目標に合わせたオーダーメイドのメニューで効率よく取り組めたという声",
      "食事面のサポートもあり、トレーニングと両輪で見てもらえたという評価",
    ],
  },
  {
    title: "気になる口コミ・評判の傾向",
    summary: "指名制ならではの予約の取りにくさや、追加料金に関する指摘が中心です。",
    items: [
      "人気トレーナーは予約が集中し、希望時間が取りにくいことがあるという指摘",
      "一部のトレーナーは指名料が別途かかる場合があるという声",
      "トレーナーごとに指導スタイルが異なり、最初の選択に迷ったという声",
    ],
  },
];

// 目的・悩み別の向き不向き（公開情報および口コミ傾向にもとづく一般的な整理）
const goalGuide = [
  {
    goal: "トレーナーとの相性を重視したい",
    fit: "向いている",
    desc: "トレーナー指名制のため、体験で相性を確認してから担当を選べます。合わなければ変更も可能で、相性重視の人に向きます。",
  },
  {
    goal: "本格的にボディメイク・競技力を高めたい",
    fit: "向いている",
    desc: "資格保有者やコンテスト入賞経験のあるトレーナーが在籍し、目標別のオーダーメイドプログラムに対応。効果には個人差があります。",
  },
  {
    goal: "食事面からもサポートを受けたい",
    fit: "向いている",
    desc: "トレーニングだけでなく食事サポートも含まれるとされ、栄養面からも目標達成を後押しします。詳細は公式で要確認です。",
  },
  {
    goal: "とにかく費用を抑えたい",
    fit: "要確認",
    desc: "月額30,000円〜と大手パーソナルの相場帯で、格安ジムより費用はかかります。指名料が加わる場合もあるため総額を確認しましょう。安さ重視なら回数券制のリアルボディなども比較を。",
  },
  {
    goal: "好きな時間にすぐ予約したい",
    fit: "要確認",
    desc: "人気トレーナーは予約が集中しやすい傾向です。通いたい時間が決まっている場合は、空き状況を事前に確認しておくと安心です。",
  },
];

const faqItems = [
  { q: "Rays GyMの入会金はいくらですか？", a: "入会金は20,000円〜40,000円程度です。キャンペーン期間中は割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "トレーナーの指名は無料ですか？", a: "基本的には無料で指名可能ですが、一部人気トレーナーは指名料が発生する場合があります。詳細は公式サイトでご確認ください。" },
  { q: "トレーナーの変更は可能ですか？", a: "はい、トレーナーの変更は可能です。相性が合わないと感じた場合はスタッフに相談してください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者からアスリートまで幅広いレベルに対応しています。経験に合わせたプログラムを組んでもらえます。" },
  { q: "体験トレーニングはありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。実際の指導内容やトレーナーとの相性を確認してから入会を検討できます。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "プランによって異なります。月額制プランの場合は基本的に違約金なしで退会可能です。短期集中コースなどは条件が異なる場合があるため、詳細は入会時・公式サイトでご確認ください。" },
  { q: "Rays GyMの料金は総額でいくらですか？", a: "月4回プランで月額30,000円〜、月8回プランで月額55,000円〜が目安です。短期集中の16回コースは総額140,000円〜とされています。入会金や指名料が別途かかる場合があるため、総額は公式サイトでご確認ください。" },
  { q: "Rays GyMはどのエリアにありますか？", a: "関東エリアを中心に展開しているとされています。具体的な店舗一覧・住所は公式サイトでご確認ください。" },
  { q: "女性でも通いやすいですか？", a: "はい、マンツーマン指導のため周りを気にせず取り組めます。女性トレーナーの在籍状況は店舗により異なるため、希望がある場合はカウンセリング時にご相談ください。" },
  { q: "Rays GyMの口コミ・評判は良いですか？", a: "「トレーナーを選べるのが良い」「指導の質が高い」という好意的な口コミが中心です。一方で「人気トレーナーの予約が取りにくい」「指名料がかかる場合がある」という声もあります。最新の個別レビューはGoogleマップでご確認ください。" },
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

const relatedReviews = [
  { name: "リアルボディ", href: "/review/real-body/" },
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://personal-gym-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "口コミ・レビュー", item: "https://personal-gym-biyori.com/#ranking" },
    { "@type": "ListItem", position: 3, name: "Rays GyM" },
  ],
};

export default function RaysGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rays GyM" }]} />
      <ReviewSummary gymName="Rays GyM" />
      <GymCta slug="rays-gym" name="Rays GyM" variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Rays GyM（レイズジム）の口コミ・評判は？料金・効果を徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年7月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Rays GyM（レイズジム）は<span className="font-bold bg-yellow-100 px-0.5">トレーナー指名制</span>を採用したパーソナルトレーニングジムです。相性の良いトレーナーを自分で選び、<span className="font-bold bg-yellow-100 px-0.5">目標別のオーダーメイド</span>プログラムで効率的なボディメイクを目指せます。本記事では、Rays GyMの料金総額の目安、口コミの傾向、目的別の向き不向き、メリット・デメリットを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：Rays GyMはこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>トレーナーとの相性</strong>を重視したい人（指名制・変更も可能）</li>
            <li>・<strong>本格的なボディメイク・競技力向上</strong>を目指す人（経験豊富なトレーナー・オーダーメイド）</li>
            <li>・食事面も含めてサポートを受けたい人</li>
            <li>・口コミは「トレーナーを選べる」「指導の質が高い」が中心。一方「人気トレーナーは予約が取りにくい」「指名料がかかる場合がある」という声も</li>
            <li>・料金・入会金・指名料はプランや時期で変わるため<strong>公式サイトでの確認が必要</strong></li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は公開情報をもとにした目安です。最新は公式でご確認ください。他ジムとの比較は<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>、費用重視なら回数券制の<Link href="/review/real-body/" className="text-teal-600 underline">リアルボディ</Link>もご覧ください。</p>
        </div>

        <div className="mb-12">
          <h2 className="text-base font-bold text-gray-900 mb-3">この記事でわかること（よくある4つの疑問）</h2>
          <dl className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden text-sm">
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 料金は？総額は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">月4回で月額30,000円〜、短期集中16回は総額140,000円〜が目安。指名料が加わる場合も。<a href="#pricing" className="text-teal-600 underline">料金の総額目安を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 口コミ・評判は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">「トレーナーを選べる」「指導の質が高い」が中心。一方「人気トレーナーは予約が取りにくい」という声も。<a href="#reviews" className="text-teal-600 underline">口コミの傾向を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 指名制のメリットは？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">相性の良いトレーナーを選べ、合わなければ変更も可能。モチベ維持につながる仕組みです。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どんな人に向く？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">相性重視・本格ボディメイク志向の人に向きます。費用や予約の取りやすさ重視の人は<a href="#goal" className="text-teal-600 underline">目的別の向き不向き</a>を確認のうえ比較を。</dd>
            </div>
          </dl>
        </div>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th>
                    <td className="px-4 py-3 text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3つの強み */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Rays GyMのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>{m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>{d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金 */}
        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの料金（総額の目安）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">時間</th>
                  <th className="px-4 py-3 text-left font-medium">料金</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.duration}</td>
                    <td className="px-4 py-3 text-gray-700">{plan.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。入会金・指名料が別途かかる場合があります。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 口コミ概要 */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは公開情報全般の一般的な傾向をまとめたものです。特定の投稿を引用したものではありません。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 口コミの傾向 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Rays GyMの口コミを「良い評判」「気になる評判」に分けて傾向を整理しました。以下は公開されている口コミ全般から見られる傾向をまとめたもので、個別の投稿を引用したものではありません。最新の個別レビューは<a href="https://www.google.com/maps/search/Rays%20GyM%20%E5%8F%A3%E3%82%B3%E3%83%9F" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">Googleマップ</a>でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviewCategories.map((cat, idx) => (
              <div key={cat.title} className={`rounded-lg p-5 border ${idx === 0 ? "bg-green-50 border-green-100" : "bg-orange-50 border-orange-100"}`}>
                <h3 className={`font-bold mb-2 ${idx === 0 ? "text-green-800" : "text-orange-800"}`}>{cat.title}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{cat.summary}</p>
                <ul className="space-y-2">
                  {cat.items.map((it, i) => (
                    <li key={i} className="text-sm text-gray-700 leading-relaxed">・{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 口コミの傾向を要約したものです。評価には個人差があります。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 目的別の向き不向き */}
        <section id="goal" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">目的・悩み別 Rays GyMの向き不向き</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Rays GyMが自分の目的に合うかを、よくある目的・悩み別に整理しました。以下は公開情報と口コミ傾向にもとづく一般的な整理で、効果を保証するものではありません。
          </p>
          <div className="space-y-3">
            {goalGuide.map((g) => (
              <div key={g.goal} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-gray-800 text-sm">{g.goal}</h3>
                  <span className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${g.fit === "向いている" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{g.fit}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">別タイプのジムも比べたい方は<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>もご覧ください。</p>
        </section>

        {/* FAQ */}
      <GymCta slug="rays-gym" name="Rays GyM" />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMのよくある質問</h2>
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

        {/* CTA */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Rays GyMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、あなたに合ったトレーナーを見つけましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        {/* 関連ジム */}
        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
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
