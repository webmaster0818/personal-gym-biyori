import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "Rays GyM（レイズジム）の口コミ・評判｜料金・効果の解説【2026年】",
  description:
    "Rays GyM（レイズジム）の口コミ・評判をご紹介します。トレーナー指名制の料金総額の目安、目的別の向き不向き、メリット・デメリット、よくある質問について解説します。トレーナーとの相性を重視してパーソナルジムを選びたい方の参考情報としてご活用ください。",
};

const basicInfo = [
  { label: "ジム名", value: "Rays GyM（レイズジム）" },
  { label: "タイプ", value: "パーソナルトレーニングジム" },
  { label: "料金帯", value: "月会員 月額19,800円〜／回数券10回99,000円〜（税込・公式料金表・2026年11月25日確認）" },
  { label: "エリア", value: "埼玉県川越市（川越駅徒歩3分）" },
  { label: "特徴", value: "トレーナーの指名が可能 / マンツーマン指導 / 目標別プログラム / 食事サポートあり" },
];

const strengths = [
  {
    title: "担当トレーナーを指名できる",
    desc: "公式サイトでは「トレーナーのご指名も可能です」と案内されています。公式のよくある質問によると、基本的にはカウンセリング・体験トレーニングを担当したトレーナーが毎回担当し、担当を希望するトレーナーがいる場合は予約フォームに名前を記入する形です（2026年11月23日確認）。",
  },
  {
    title: "目標に応じた柔軟なプログラム設計",
    desc: "ダイエット、筋力アップ、競技パフォーマンス向上など、利用者の目標に合わせて完全オーダーメイドのプログラムを作成します。進捗に応じて、その都度メニューを調整します。",
  },
  {
    title: "医療系国家資格などを持つトレーナーが在籍",
    desc: "公式サイトのトレーナー紹介には4名が掲載されており、臨床工学技士・柔道整復師（いずれも医療系国家資格）、NSCA-CSCS、NSCA-CPT、NESTA-PFTなどの資格と、ボディメイク大会の実績が記載されています。公式トップページでは、女性トレーナーも常勤していると案内されています（2026年11月23日確認）。",
  },
];

const merits = [
  {
    title: "トレーナーを指名できる",
    desc: "公式サイトのトレーナー紹介で経歴や資格を確認したうえで、担当を希望するトレーナーを予約時に伝えられます（2026年11月23日確認）。",
  },
  {
    title: "食事指導が充実している",
    desc: "トレーニングだけでなく、食事面からもサポートします。目標達成に向けた栄養アドバイスが含まれています。",
  },
];

const demerits = [
  {
    title: "店舗が川越市の2店舗に限られる",
    desc: "公式サイトに掲載されている店舗は、埼玉県川越市の川越店（菅原町）と川越アカシア通り店（脇田町）の2店舗です（2026年11月23日確認）。通える範囲に店舗があるか、事前にご確認ください。",
  },
];

const pricingPlans = [
  { name: "入会金", duration: "−", price: "5,500円", note: "公式料金表では無料キャンペーン中と表示" },
  { name: "体験トレーニング（カウンセリング込み）", duration: "−", price: "5,500円", note: "公式料金表では無料キャンペーン中と表示（カウンセリングのみは無料）" },
  { name: "月会員コース 月2回", duration: "60分/回", price: "月額19,800円", note: "1回あたり9,900円" },
  { name: "月会員コース 月4回", duration: "60分/回", price: "月額37,400円", note: "1回あたり9,350円" },
  { name: "月会員コース 月6回", duration: "60分/回", price: "月額52,800円", note: "1回あたり8,800円" },
  { name: "回数券コース 10回", duration: "60分/回", price: "99,000円", note: "1回あたり9,900円" },
  { name: "回数券コース 20回", duration: "60分/回", price: "187,000円", note: "1回あたり9,350円" },
  { name: "回数券コース 30回", duration: "60分/回", price: "264,000円", note: "1回あたり8,800円" },
  { name: "回数券＋食事指導コース 16回", duration: "60分/回", price: "236,500円", note: "食事指導2ヶ月（オンライン対応）" },
  { name: "回数券＋食事指導コース 24回", duration: "60分/回", price: "316,800円", note: "食事指導2ヶ月（オンライン対応）" },
];

const reviewSummary = "Rays GyMの口コミについて、当サイトでは掲載先のURLと取得日を示せる形で集計していないため、口コミの傾向の要約は掲載していません。実際の口コミは、ページ上部の「Googleマップで最新の口コミを見る」からご確認ください。";


// 目的・悩み別の向き不向き（公開情報にもとづく一般的な整理）
const goalGuide = [
  {
    goal: "トレーナーとの相性を重視したい",
    fit: "向いている",
    desc: "公式サイトでトレーナーの指名が可能と案内されています。基本的には体験を担当したトレーナーが毎回担当するため、体験の段階で指導の相性を確認しておくことをおすすめします（2026年11月23日確認）。",
  },
  {
    goal: "本格的にボディメイク・競技力を高めたい",
    fit: "向いている",
    desc: "公式サイトのトレーナー紹介には、医療系国家資格やトレーナー資格、ボディメイク大会の実績が記載されています（2026年11月23日確認）。効果には個人差があります。",
  },
  {
    goal: "食事面からもサポートを受けたい",
    fit: "向いている",
    desc: "トレーニングだけでなく食事サポートも含まれるとされ、栄養面からも目標達成を後押しします。詳細は公式サイトでご確認ください。",
  },
  {
    goal: "とにかく費用を抑えたい",
    fit: "要確認",
    desc: "公式料金表では、月会員コースが月2回19,800円〜（税込・1回あたり8,800〜9,900円）です（2026年11月25日確認）。費用を重視する場合は、回数券制のリアルボディなどとの比較をおすすめします。",
  },
  {
    goal: "好きな時間にすぐ予約したい",
    fit: "要確認",
    desc: "通いたい時間帯が決まっている場合は、体験の予約時に空き状況をご確認ください。",
  },
];

const faqItems = [
  { q: "Rays GyMの入会金はいくらですか？", a: "公式の料金表では、入会金は5,500円（税込）で、無料キャンペーン中と表示されています（2026年11月25日確認）。キャンペーンの期間は公式サイトでご確認ください。" },
  { q: "トレーナーの指名はできますか？", a: "公式サイトでは、トレーナーの指名が可能と案内されています。担当を希望するトレーナーがいる場合は、予約フォームの「その他お問い合わせ」に名前を記入する形です（2026年11月23日確認）。指名料の有無は公式サイトの料金表に記載がないため、カウンセリング時にご確認ください。" },
  { q: "トレーナーは毎回同じですか？", a: "公式のよくある質問では、基本的にカウンセリング・体験トレーニングを担当したトレーナーが毎回担当すると案内されています（2026年11月23日確認）。担当の変更を希望する場合は、店舗にご相談ください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者からアスリートまで幅広いレベルに対応しています。経験に合わせたプログラムが組まれます。" },
  { q: "体験トレーニングはありますか？", a: "公式の料金表では、体験トレーニング（カウンセリング込み）は5,500円（税込）で、無料キャンペーン中と表示されています。カウンセリングのみの場合は無料です（2026年11月25日確認）。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "公式の料金表には退会・解約の条件が記載されていないため（2026年11月25日確認）、入会時にご確認ください。" },
  { q: "Rays GyMの料金は総額でいくらですか？", a: "公式の料金表では、月会員コースが月2回19,800円・月4回37,400円・月6回52,800円、回数券コースが10回99,000円〜30回264,000円、回数券＋食事指導コースが16回236,500円・24回316,800円です（すべて税込・60分・2026年11月25日確認）。入会金5,500円（税込）は無料キャンペーン中と表示されています。" },
  { q: "Rays GyMはどのエリアにありますか？", a: "公式サイトに掲載されている店舗は、埼玉県川越市の2店舗（川越市菅原町・川越市脇田町）です（2026年11月23日確認）。住所・営業時間は公式サイトのアクセスページでご確認ください。" },
  { q: "女性でも通いやすい環境ですか？", a: "はい、マンツーマン指導のため周りを気にせず取り組めます。公式サイトでは女性トレーナーも常勤していると案内されています（2026年11月23日確認）。担当を希望する場合は予約時にお伝えください。" },
  { q: "Rays GyMの口コミ・評判の傾向を教えてください。", a: "当サイトでは、掲載先のURLと取得日を示せる形で口コミを集計していないため、傾向の要約は掲載していません。実際の口コミはGoogleマップでご確認ください。" },
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
    { "@type": "ListItem", position: 2, name: "Rays GyM" },
  ],
};

export default function RaysGymReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rays GyM" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Rays GyM（レイズジム）の口コミ・評判｜料金・効果の解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/rays-gym.jpg" alt="Rays GyM（レイズジム）の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">Rays GyM（レイズジム） 公式サイトのスクリーンショットです（2026年9月16日取得）。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年11月25日</p>
        <GymCta slug="rays-gym" name="Rays GyM" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">Rays GyMが適している方</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">この記事で解説する内容（よくある4つの質問）</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">Rays GyMの基本情報</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">Rays GyMの3つの強み</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">Rays GyMのメリット・デメリット</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">Rays GyMの料金（総額の目安）</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">Rays GyMの口コミについて</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">目的・悩み別 Rays GyMの向き不向き</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">Rays GyMのよくある質問</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">Rays GyMが気になった方へ</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="Rays GyM" />

        <p className="text-gray-700 leading-relaxed mb-6">
          Rays GyM（レイズジム）は埼玉県川越市の<span className="font-bold bg-yellow-100 px-0.5">トレーナーの指名ができる</span>パーソナルトレーニングジムです。担当を希望するトレーナーを予約時に伝えられ、<span className="font-bold bg-yellow-100 px-0.5">目標別のオーダーメイド</span>プログラムで効率的なボディメイクを目指せます。本記事では、Rays GyMの料金総額の目安、口コミの傾向、目的別の向き不向き、メリット・デメリットを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 id="s2" className="font-bold text-gray-900 mb-3">Rays GyMが適している方</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>トレーナーとの相性</strong>を重視したい方に向いています（トレーナーの指名が可能）</li>
            <li>・<strong>本格的なボディメイク・競技力向上</strong>を目指す方に向いています（資格・大会実績を公開しているトレーナー・オーダーメイド）</li>
            <li>・食事面も含めてサポートを受けたい方に向いています</li>
            <li>・料金・入会金はプランや時期で変わるため、<strong>公式サイトでのご確認が必要</strong>です</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は公式サイトの料金表（2026年11月25日確認）にもとづいています。最新情報は公式サイトでご確認ください。他ジムとの比較は<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>、費用重視なら回数券制の<Link href="/review/real-body/" className="text-teal-600 underline">リアルボディ</Link>もご覧ください。</p>
        </div>

        <div className="mb-12">
          <h2 id="s3" className="text-base font-bold text-gray-900 mb-3">この記事で解説する内容（よくある4つの質問）</h2>
          <dl className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden text-sm">
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 料金と総額を教えてください。</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">公式料金表では、月4回で月額37,400円、食事指導付きの16回は236,500円です（税込・2026年11月25日確認）。<a href="#pricing" className="text-teal-600 underline">料金の総額目安を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 口コミ・評判の傾向を教えてください。</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">当サイトでは、出典を示せる形で口コミを集計していないため、傾向の要約は掲載していません。<a href="#reviews" className="text-teal-600 underline">口コミの確認方法を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. トレーナーは指名できますか？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">公式サイトでは指名が可能と案内されています。基本的には体験を担当したトレーナーが毎回担当します（2026年11月23日確認）。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どのような方に向いていますか？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">トレーナーとの相性や本格的なボディメイクを重視する方に向いています。費用を重視する方は、<a href="#goal" className="text-teal-600 underline">目的別の向き不向き</a>をご確認のうえ、比較をおすすめします。</dd>
            </div>
          </dl>
        </div>

        {/* 基本情報 */}
        <section className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの基本情報</h2>
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
          <h2 id="s5" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">トレーナーに関する記載の出典: <a href="https://www.raysgym.jp/trainer" target="_blank" rel="noopener noreferrer" className="underline">Rays GyM 公式サイト トレーナー紹介</a>・<a href="https://www.raysgym.jp/" target="_blank" rel="noopener noreferrer" className="underline">公式トップページ</a>・<a href="https://www.raysgym.jp/q-a" target="_blank" rel="noopener noreferrer" className="underline">よくある質問</a>（2026年11月23日確認）</p>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Rays GyMのメリット・デメリット</h2>
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
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの料金（総額の目安）</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 金額はすべて税込です。出典: <a href="https://www.raysgym.jp/raysgymprice" target="_blank" rel="noopener noreferrer" className="underline">Rays GyM 公式サイト 料金表</a>（2026年11月25日確認）。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 口コミ概要 */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMの口コミについて</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
        </section>

        {/* 口コミの傾向 */}

        {/* 目的別の向き不向き */}
        <section id="goal" className="mb-12 scroll-mt-20">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">目的・悩み別 Rays GyMの向き不向き</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Rays GyMがご自身の目的に合うかどうかを、よくある目的・悩み別に整理しています。以下は公開情報にもとづく一般的な整理で、効果を保証するものではありません。
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
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Rays GyMのよくある質問</h2>
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
          <h2 id="s12" className="text-xl font-bold mb-3">Rays GyMが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、ご自身に合ったトレーナーをお探しください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            ランキングに戻る
          </Link>
        </section>

        {/* 関連ジム */}
        <section>
          <h2 id="s13" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
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
