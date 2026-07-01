import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "Nexusジム 大船店の口コミ・評判は？料金・アクセスを解説【2026年】",
  description:
    "Nexusジム大船店（横浜市栄区・JR大船駅徒歩約5分）の口コミ・評判を解説。月額制の格安パーソナルの料金目安、営業時間などの基本情報、良い口コミ/気になる口コミの傾向、向いている人、よくある質問まで網羅。大船・栄区でパーソナルジムを探す方の判断材料に。",
};

const basicInfo = [
  { label: "店舗名", value: "Nexusジム 大船店" },
  { label: "タイプ", value: "格安月額制パーソナルジム" },
  { label: "住所", value: "〒247-0006 神奈川県横浜市栄区笠間2丁目20-7 K.C笠間1階" },
  { label: "最寄駅", value: "JR大船駅 徒歩約5分" },
  { label: "営業時間", value: "8:00〜22:00" },
  { label: "電話番号", value: "050-1790-8499" },
  { label: "料金帯", value: "月額19,800円〜（目安・最新は公式で要確認）" },
];

// 目的・悩み別の向き不向き（公開情報および口コミ傾向にもとづく一般的な整理）
const goalGuide = [
  {
    goal: "大船・栄区で近くに通いたい",
    fit: "向いている",
    desc: "JR大船駅から徒歩約5分の立地で、大船・栄区エリアで数少ない駅近のパーソナルジムです。仕事前・帰りにも寄りやすい環境です。",
  },
  {
    goal: "費用を抑えてパーソナルを試したい",
    fit: "向いている",
    desc: "Nexusジムは月額制の格安パーソナルが特徴です。高額な一括契約が不安な人でも始めやすい料金帯とされています。総額・入会金は公式で要確認です。",
  },
  {
    goal: "朝や夜の時間に通いたい",
    fit: "向いている",
    desc: "営業時間は8:00〜22:00。朝トレーニングや仕事帰りの夜の時間帯にも対応しやすいのが魅力です。",
  },
  {
    goal: "本格的な筋肥大・ボディメイクが目的",
    fit: "要確認",
    desc: "格安パーソナルはセッション時間が短めの場合があります。対応できるメニューや器具は店舗により異なるため、目的に合うかはカウンセリングで確認を。",
  },
  {
    goal: "充実した設備・アメニティを重視",
    fit: "要確認",
    desc: "低価格を実現するため設備はシンプルな場合があります。シャワーの有無やレンタル可否は店舗ごとに異なるため、事前確認がおすすめです。",
  },
];

const faqItems = [
  { q: "Nexusジム大船店の料金はいくらですか？", a: "Nexusジムは月額19,800円〜の格安パーソナルとされています。プランや入会金、大船店のキャンペーンの有無を含む最新の料金は公式サイトでご確認ください。" },
  { q: "Nexusジム大船店の場所・アクセスは？", a: "神奈川県横浜市栄区笠間2丁目20-7 K.C笠間1階にあり、JR大船駅から徒歩約5分です。詳しい行き方はGoogleマップでご確認ください。" },
  { q: "Nexusジム大船店の営業時間は？", a: "8:00〜22:00です。朝から夜まで幅広い時間帯でトレーニングが可能です。最新の営業時間・定休日は公式サイトでご確認ください。" },
  { q: "Nexusジム大船店は初心者でも大丈夫ですか？", a: "はい。Nexusジムの利用者には筋トレ初心者も多く、器具の使い方やフォームから丁寧に指導するとされています。運動経験がない方も安心して始めやすい環境です。" },
  { q: "Nexusジム大船店の体験・カウンセリングはありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。実際の指導内容やジムの雰囲気を確認してから入会を検討できます。予約は公式サイトから可能です。" },
  { q: "Nexusジム大船店は女性も通えますか？", a: "はい。Nexusジムは完全個室でのマンツーマン指導のため、他の会員と顔を合わせにくく、女性の利用者もいます。詳しい設備は公式サイトでご確認ください。" },
  { q: "Nexusジム大船店の退会に違約金はかかりますか？", a: "Nexusジムは月額制のため、基本的に違約金はないとされています。退会の申告時期など詳細は入会時・公式サイトでご確認ください。" },
  { q: "Nexusジム大船店の口コミ・評判は？", a: "大船店は比較的新しい店舗のため、個別の口コミは今後蓄積されていく段階です。Nexusジム全体では「この価格でこの指導は驚き」「トレーナーが丁寧」という声が中心です。最新の個別レビューはGoogleマップでご確認ください。" },
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://personal-gym-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "口コミ・レビュー", item: "https://personal-gym-biyori.com/#ranking" },
    { "@type": "ListItem", position: 3, name: "Nexusジム", item: "https://personal-gym-biyori.com/review/nexus/" },
    { "@type": "ListItem", position: 4, name: "大船店" },
  ],
};

const relatedStores = [
  { name: "Nexusジム 横浜元町店", href: "/review/nexus/yokohama/" },
  { name: "Nexusジム 渋谷店", href: "/review/nexus/shibuya/" },
  { name: "Nexusジム 新宿店", href: "/review/nexus/shinjuku/" },
];

const relatedReviews = [
  { name: "リアルボディ", href: "/review/real-body/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

const affiliateLink = "https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L";

export default function StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "口コミ・レビュー", href: "/#ranking" },
          { name: "Nexusジム", href: "/review/nexus/" },
          { name: "大船店" },
        ]}
      />
      <ReviewSummary gymName="Nexusジム大船店" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Nexusジム 大船店の口コミ・評判は？料金・アクセスを解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年7月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Nexusジム大船店は、<span className="font-bold bg-yellow-100 px-0.5">JR大船駅から徒歩約5分</span>（神奈川県横浜市栄区笠間）にある<span className="font-bold bg-yellow-100 px-0.5">格安・月額制</span>のパーソナルジムです。<span className="font-bold bg-yellow-100 px-0.5">月額19,800円〜</span>の料金目安と、8:00〜22:00の通いやすい営業時間が特徴。本記事では、大船店の基本情報・料金目安・口コミの傾向・向いている人を解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：Nexusジム大船店はこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>大船・栄区で駅近</strong>のパーソナルジムを探している人（JR大船駅 徒歩約5分）</li>
            <li>・<strong>費用を抑えて</strong>パーソナル指導を試したい人（月額19,800円〜の目安・月額制）</li>
            <li>・<strong>朝や夜</strong>にも通いたい人（営業8:00〜22:00）</li>
            <li>・本格的な筋肥大や充実設備を重視する人は、目的に合うかカウンセリングで確認を</li>
            <li>・料金・入会金・キャンペーンは変動するため<strong>公式サイトでの確認が必要</strong></li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は公開情報をもとにした目安です。最新は公式でご確認ください。Nexusジム全体の解説は<Link href="/review/nexus/" className="text-teal-600 underline">Nexusジムの総合レビュー</Link>、他ジムとの比較は<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>もご覧ください。</p>
        </div>

        <div className="mb-12">
          <h2 className="text-base font-bold text-gray-900 mb-3">この記事でわかること（よくある4つの疑問）</h2>
          <dl className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden text-sm">
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 料金は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">Nexusジムは月額19,800円〜の格安パーソナルとされています。プラン・入会金の詳細は<a href="#pricing" className="text-teal-600 underline">料金の目安</a>で解説（最新は公式で要確認）。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 場所・アクセスは？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">横浜市栄区笠間、JR大船駅から徒歩約5分です。<a href="#access" className="text-teal-600 underline">アクセス・地図</a>をご覧ください。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 口コミ・評判は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">大船店は比較的新しい店舗で個別口コミは蓄積段階。Nexus全体では「安いのに丁寧」が中心。<a href="#reviews" className="text-teal-600 underline">口コミの傾向</a>を見る。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どんな人に向く？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">大船周辺で安く始めたい人・初心者に向きます。<a href="#goal" className="text-teal-600 underline">目的別の向き不向き</a>を確認のうえ比較を。</dd>
            </div>
          </dl>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジム大船店の基本情報</h2>
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

        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジム大船店の料金（目安）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Nexusジムは高額な一括払いではなく<strong>月額制</strong>を採用した格安パーソナルとされています。下表はNexusジム全体の公開情報をもとにした<strong>目安</strong>で、大船店の正確な料金・入会金・キャンペーンは公式サイトでご確認ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン</th>
                  <th className="px-4 py-3 text-left font-medium">ペース</th>
                  <th className="px-4 py-3 text-left font-medium">料金（目安）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">月4回プラン</td><td className="px-4 py-3 text-gray-700">週1回ペース</td><td className="px-4 py-3 text-gray-700">月額19,800円〜</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">月8回プラン</td><td className="px-4 py-3 text-gray-700">週2回ペース</td><td className="px-4 py-3 text-gray-700">月額34,800円前後</td></tr>
                <tr className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">入会金</td><td className="px-4 py-3 text-gray-700">-</td><td className="px-4 py-3 text-gray-700">要確認（キャンペーンで変動）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。大船店の正確なプラン・入会金・キャンペーンの有無は公式サイトまたは無料カウンセリング時にご確認ください。</p>
        </section>

        <div className="mb-12 text-center">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-sm">無料カウンセリングを予約する</a>
        </div>

        <section id="access" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">アクセス・地図</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Nexusジム 大船店（横浜市栄区笠間2丁目20-7 K.C笠間1階）の所在地をGoogleマップで確認できます。</p>
            <a href="https://www.google.com/maps/search/Nexusジム+大船店+横浜市栄区笠間" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">Googleマップで見る</a>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジム大船店の口コミの傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            大船店は比較的新しい店舗のため、個別の口コミは今後蓄積されていく段階です。ここではNexusジム全体で見られる口コミの傾向を「良い評判」「気になる評判」に分けて整理しました。個別の投稿を引用したものではありません。大船店の最新レビューは<a href="https://www.google.com/maps/search/Nexus%E3%82%B8%E3%83%A0%20%E5%A4%A7%E8%88%B9%E5%BA%97%20%E5%8F%A3%E3%82%B3%E3%83%9F" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">Googleマップ</a>でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-5 border bg-green-50 border-green-100">
              <h3 className="font-bold mb-2 text-green-800">良い口コミ・評判の傾向</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">格安ながら指導が丁寧・月額制で始めやすい、というコスパと手軽さへの評価が中心です。</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 leading-relaxed">・この価格でマンツーマン指導が受けられるのは驚き、というコスパ評価</li>
                <li className="text-sm text-gray-700 leading-relaxed">・トレーナーが丁寧で、初心者にもフォームから教えてくれるという声</li>
                <li className="text-sm text-gray-700 leading-relaxed">・月額制で家計管理がしやすく、合わなければ辞めやすい安心感</li>
              </ul>
            </div>
            <div className="rounded-lg p-5 border bg-orange-50 border-orange-100">
              <h3 className="font-bold mb-2 text-orange-800">気になる口コミ・評判の傾向</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">セッション時間や設備のシンプルさに関する指摘が中心です。</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 leading-relaxed">・低価格ゆえセッション時間が短めの場合があるという指摘</li>
                <li className="text-sm text-gray-700 leading-relaxed">・設備・アメニティは大手ほど充実していない場合があるという声</li>
                <li className="text-sm text-gray-700 leading-relaxed">・人気の時間帯は予約が埋まりやすいことがあるという指摘</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">※ 口コミの傾向を要約したものです。評価には個人差があり、効果を保証するものではありません。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section id="goal" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">目的・悩み別 大船店の向き不向き</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Nexusジム大船店が自分の目的に合うかを、よくある目的・悩み別に整理しました。以下は公開情報と口コミ傾向にもとづく一般的な整理で、効果を保証するものではありません。
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
          <p className="text-xs text-gray-500 mt-4">別タイプのジムも比べたい方は<Link href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</Link>、地方在住で通いやすさ重視なら回数券制の<Link href="/review/real-body/" className="text-teal-600 underline">リアルボディ</Link>もご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジム大船店のよくある質問</h2>
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

        {/* バナー広告 */}
        <section className="mb-10 text-center">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S7941C.L119607K.Q136169A" alt="Nexusジム" width="300" height="250" className="mx-auto rounded-lg" />
          </a>
        </section>

        <section className="mb-10">
          <div className="bg-teal-50 rounded-lg p-6 text-center space-y-4">
            <p className="font-bold text-gray-800">Nexusジムの詳しい口コミ・料金情報はこちら</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/review/nexus/" className="inline-block border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">Nexusジムの総合レビューを見る</Link>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">公式サイトへ</a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの関連店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedStores.map((store) => (
              <Link key={store.href} href={store.href} className="block bg-gray-50 rounded-lg px-4 py-3 text-sm text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors text-center">{store.name}</Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
