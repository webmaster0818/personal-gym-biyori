import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ReviewSummary from "@/components/ReviewSummary";

export const metadata: Metadata = {
  title: "リアルボディの口コミ・評判は？料金・効果を徹底解説【2026年】",
  description:
    "リアルボディの口コミ・評判を徹底解説。1回3,500円〜の回数券制・食事指導無料・契約縛りなしという特徴、料金総額の目安、良い口コミ/悪い口コミの傾向、目的別の向き不向き、よくある質問まで網羅。仙台・東北で通えるパーソナルジム選びの判断材料に。",
};

const basicInfo = [
  { label: "ジム名", value: "リアルボディ（REAL BODY）" },
  { label: "タイプ", value: "パーソナルトレーニングジム（回数券制）" },
  { label: "料金帯", value: "1回あたり3,500円〜6,000円程度（回数券の枚数による）" },
  { label: "セッション", value: "1回45分" },
  { label: "エリア", value: "仙台・東北を中心に千葉・埼玉エリアにも展開（東京都内・新宿は店舗なし）" },
  { label: "特徴", value: "回数券制 / 食事指導無料 / 契約縛りなし / 違約金なし / 地域最安値クラス" },
];

const strengths = [
  {
    title: "回数券制で「通った分だけ」のわかりやすい料金",
    desc: "月額の継続契約ではなく、必要な回数の券を購入する回数券制を採用。2回券から購入でき、まとめ買いするほど1回あたりが安くなります。月額縛りのジムが合わなかった人にも向いています。",
  },
  {
    title: "食事指導が無料で受けられる",
    desc: "食事指導を別料金とするジムが多い中、リアルボディは食事指導が無料と明記されています。ダイエット・ボディメイク目的でも追加費用を抑えやすいのが強みです。",
  },
  {
    title: "契約縛り・違約金なしで始めやすい",
    desc: "長期契約の縛りがなく、解約時の違約金もないと案内されています。「続くか不安」「まず試したい」という初心者でも、心理的なハードルが低い料金体系です。",
  },
];

const merits = [
  {
    title: "地域最安値クラスのコストパフォーマンス",
    desc: "1回あたり3,500円〜のプランもあり、都内大手パーソナルジムの相場と比べて手頃。食事指導込みで続けやすいコスパの良さが評価されています。",
  },
  {
    title: "東北で会員数・店舗数の多いパーソナルジム",
    desc: "仙台・東北エリアを中心に複数店舗を展開しており、地方では貴重な「通いやすいパーソナルジム」の選択肢です。千葉エリアにも店舗があります。",
  },
  {
    title: "初心者・運動が苦手な人も始めやすい",
    desc: "「運動に自信がない」「ダイエットでリバウンドを繰り返してきた」という人にも向くと案内されており、アットホームな雰囲気で気軽に通えると好評です。",
  },
];

const demerits = [
  {
    title: "都市部の展開はまだ限定的",
    desc: "仙台・東北および千葉が中心のため、それ以外の地域にお住まいの方は通える店舗が見つかりにくい場合があります。",
  },
  {
    title: "全国的な知名度は大手に劣る",
    desc: "全国チェーンの大手と比べると知名度が低く、ネット上の口コミ・情報量も少なめ。事前のリサーチがしづらい面があります。",
  },
  {
    title: "予約状況によっては希望時間が取りにくいことも",
    desc: "人気の時間帯は予約が埋まりやすいという声があります。通いたい時間が決まっている場合は、事前に空き状況を確認しておくと安心です。",
  },
];

// 公式サイト（personalgym-realbody.com）記載の回数券プランをもとに目安として整理。最新は公式で要確認。
const pricingPlans = [
  { name: "2回券", duration: "45分/回・2回", price: "12,000円（1回6,000円）", note: "まず試したい人向け" },
  { name: "4回券", duration: "45分/回・4回", price: "20,000円（1回5,000円）", note: "週1回・1ヶ月の目安" },
  { name: "8回券", duration: "45分/回・8回", price: "枚数により1回4,500円前後", note: "週1〜2回ペース" },
  { name: "12回券", duration: "45分/回・12回", price: "45,000円（1回3,750円）", note: "限定・まとめ買いでお得" },
  { name: "16回券", duration: "45分/回・16回", price: "56,000円（1回3,500円）", note: "限定・1回あたり最安クラス" },
];

const reviewSummary = "リアルボディの口コミでは「料金が安いのにしっかり指導してくれる」「食事の管理も無料で助かる」「気軽に通える雰囲気」と、コスパと続けやすさを評価する声が中心です。トレーナーのアドバイスを受けながら自信を持って取り組めるという感想も見られます。一方で「店舗があるエリアが限られる」「ネット上の情報が少なくて最初は不安だった」という声もあります。";

const reviewCategories = [
  {
    title: "良い口コミ・評判の傾向",
    summary: "「料金が手頃」「食事指導が無料」「気軽に通える」というコスパ・続けやすさへの評価が中心です。地域密着ならではのアットホームさを挙げる声も目立ちます。",
    items: [
      "料金が安いのにしっかり指導してくれて、食事管理も無料という声",
      "都内大手と比べて手頃で、回数券制なので通った分だけで分かりやすいという評価",
      "トレーナーが親身で、運動が苦手・初心者でも気軽に通えたという声",
      "リバウンドを繰り返していたが、食事のアドバイスで生活習慣を見直せたという評価",
    ],
  },
  {
    title: "気になる口コミ・評判の傾向",
    summary: "店舗のあるエリアの限られ方や、情報量の少なさに関する指摘が中心です。地方展開ゆえの選択肢の限られ方に触れる声が見られます。",
    items: [
      "店舗が仙台・東北・千葉中心で、他エリアからは通いづらいという指摘",
      "全国的な知名度が低く、事前にネットの口コミ情報を集めにくかったという声",
      "人気の時間帯は予約が取りにくいことがあるという指摘",
    ],
  },
];

// 目的・悩み別の向き不向き（公開情報および口コミ傾向にもとづく一般的な整理）
const goalGuide = [
  {
    goal: "ダイエット・減量したい",
    fit: "向いている",
    desc: "食事指導が無料で受けられるため、運動と食事の両面から減量に取り組めます。リバウンドを繰り返してきた人にも向くと案内されています。効果には個人差があります。",
  },
  {
    goal: "費用を抑えたい・コスパ重視",
    fit: "向いている",
    desc: "1回あたり3,500円〜の回数券制で、大手相場より手頃。食事指導も無料のため追加費用を抑えやすく、コスパ重視の人に向きます。",
  },
  {
    goal: "運動初心者・続くか不安",
    fit: "向いている",
    desc: "契約縛り・違約金なしで、少回数の回数券から試せます。運動が苦手な人も対象と案内されており、心理的なハードルが低めです。",
  },
  {
    goal: "ボディメイク・部位を絞って鍛えたい",
    fit: "要確認",
    desc: "パーソナル指導のためフォーム習得には向きますが、対応できるメニューや器具は店舗により異なります。鍛えたい部位がある場合はカウンセリングで相談を。",
  },
  {
    goal: "仙台・東北/千葉以外で通いたい",
    fit: "不向きな場合あり",
    desc: "店舗は仙台・東北および千葉が中心です。それ以外の地域では通える店舗が見つかりにくいため、別ジムとの比較がおすすめです。",
  },
];

const faqItems = [
  { q: "リアルボディの料金はいくらですか？", a: "回数券制で、2回券12,000円（1回6,000円）から、まとめ買いの12回券・16回券では1回あたり3,500円〜3,750円程度まで下がります。1回のセッションは45分です。最新の料金・プランは公式サイトでご確認ください。" },
  { q: "リアルボディの入会金はいくらですか？", a: "入会金については公式サイトに明確な記載が確認できない場合があります。キャンペーンの有無も含め、最新の費用は公式サイトまたは無料体験時にご確認ください。" },
  { q: "食事指導は受けられますか？追加料金は？", a: "食事指導は無料と案内されています。希望しない場合は食事管理なしのプランも選べるとされています。詳細は公式サイトでご確認ください。" },
  { q: "契約の縛りや解約手数料はありますか？", a: "契約の縛りはなく、解約時の違約金もないと案内されています。回数券制のため、必要な分だけ購入できます。最新の規約は公式サイトでご確認ください。" },
  { q: "リアルボディはどのエリアに店舗がありますか？", a: "仙台・東北エリア（宮城・福島・山形・青森・岩手）を中心に、関東では千葉県・埼玉県に店舗を展開しています。東京都内・新宿には店舗がありません。具体的な店舗一覧・住所は公式サイトでご確認ください。" },
  { q: "リアルボディに新宿店はありますか？", a: "2026年時点で新宿店・東京都内の店舗はありません。新宿で探す方への最寄り店舗案内と代替ジム比較は別ページにまとめています。" },
  { q: "トレーニング初心者でも大丈夫ですか？", a: "はい。運動に自信がない方やダイエット初心者の方も対象と案内されており、基礎から指導を受けられます。" },
  { q: "無料体験はありますか？", a: "無料体験が用意されています。雰囲気やトレーナーとの相性を確かめてから入会を検討できます。" },
  { q: "リアルボディの口コミ・評判は良いですか？", a: "「料金が安いのにしっかり指導してくれる」「食事指導も無料」「気軽に通える」といった好意的な口コミが中心です。一方で「店舗のあるエリアが限られる」「情報が少ない」という声もあります。最新の個別の口コミはGoogleマップでご確認ください。" },
  { q: "リアルボディは女性も通えますか？", a: "はい、女性の利用者もいます。詳しい設備やプランは公式サイトでご確認ください。" },
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
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "24/7ワークアウト", href: "/review/247workout/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function RealBodyReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "リアルボディ" }]} />
      <ReviewSummary gymName="リアルボディ" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">リアルボディの口コミ・評判は？料金・効果を徹底解説</h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          リアルボディ（REAL BODY）は仙台・東北を中心に展開する<span className="font-bold bg-yellow-100 px-0.5">回数券制</span>のパーソナルジムです。<span className="font-bold bg-yellow-100 px-0.5">1回3,500円〜</span>の地域最安値クラスの料金と<span className="font-bold bg-yellow-100 px-0.5">食事指導無料</span>・契約縛りなしが魅力。本記事では、リアルボディの口コミ・評判の傾向、料金総額の目安、目的別の向き不向きを詳しく解説します。
        </p>

        <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">結論：リアルボディはこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>費用を抑えたい人</strong>に向く（1回3,500円〜の回数券制・食事指導も無料）</li>
            <li>・<strong>続くか不安な初心者</strong>に向く（契約縛り・違約金なし、少回数から試せる）</li>
            <li>・<strong>仙台・東北/千葉エリア</strong>で通いやすいパーソナルジムを探している人</li>
            <li>・口コミは「安いのに指導が丁寧」「気軽に通える」が中心。一方「店舗のエリアが限られる」という声も</li>
            <li>・料金・入会金・店舗はキャンペーンや時期で変わるため<strong>公式サイトでの確認が必要</strong></li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">本ページの料金は公開情報をもとにした目安です。最新は公式でご確認ください。他ジムとの比較は<a href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</a>もご覧ください。</p>
        </div>

        <div className="mb-12">
          <h2 className="text-base font-bold text-gray-900 mb-3">この記事でわかること（よくある4つの疑問）</h2>
          <dl className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden text-sm">
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 料金は？高い？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">回数券制で1回あたり3,500円〜6,000円程度。まとめ買いほど安く、食事指導も無料のためコスパは高めです。<a href="#pricing" className="text-teal-600 underline">料金の総額目安を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. 口コミ・評判は？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">「安いのに指導が丁寧」「食事管理も無料」「気軽に通える」という声が中心。一方「店舗のエリアが限られる」という声も。<a href="#reviews" className="text-teal-600 underline">口コミ概要を見る</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どこに店舗がある？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">仙台・東北エリアを中心に、関東では千葉・埼玉に展開（東京・新宿には店舗なし）。店舗一覧は<a href="https://personalgym-realbody.com/shop-list/" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 underline">公式サイト</a>でご確認ください。<a href="/review/real-body/shinjuku/" className="text-teal-600 underline">「リアルボディ 新宿」で探す方はこちら</a>。</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="font-bold text-gray-800">Q. どんな人に向く？</dt>
              <dd className="text-gray-700 mt-1 leading-relaxed">費用を抑えたい人・運動初心者・ダイエットしたい人に向きます。鍛えたい部位がある人や対象エリア外の人は<a href="#goal" className="text-teal-600 underline">目的別の向き不向き</a>を確認のうえ比較を。</dd>
            </div>
          </dl>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの基本情報</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><tbody>
            {basicInfo.map((row) => (<tr key={row.label} className="border-b border-gray-100"><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">{row.label}</th><td className="px-4 py-3 text-gray-800">{row.value}</td></tr>))}
          </tbody></table></div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (<div key={i} className="bg-teal-50 rounded-lg p-5"><h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p></div>))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">リアルボディのメリット・デメリット</h2>
          <h3 className="text-lg font-bold mb-4 text-green-700">メリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-green-600 shrink-0">[+]</span>{m.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p></div>))}
          </div>
          <h3 className="text-lg font-bold mb-4 text-red-700">デメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (<div key={i}><h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2"><span className="text-red-500 shrink-0">[-]</span>{d.title}</h4><p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p></div>))}
          </div>
        </section>

        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの料金（回数券制・総額の目安）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            リアルボディは月額の継続契約ではなく、必要な回数の券を購入する<strong>回数券制</strong>です。1回のセッションは45分で、まとめ買いするほど1回あたりの単価が下がります。下表は公開情報をもとにした目安です。
          </p>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-teal-500 text-white"><th className="px-4 py-3 text-left font-medium">プラン</th><th className="px-4 py-3 text-left font-medium">時間・回数</th><th className="px-4 py-3 text-left font-medium">料金（総額・1回あたり）</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
            <tbody>{pricingPlans.map((plan) => (<tr key={plan.name} className="border-b border-gray-100"><td className="px-4 py-3 font-medium text-gray-800">{plan.name}</td><td className="px-4 py-3 text-gray-700">{plan.duration}</td><td className="px-4 py-3 text-gray-700">{plan.price}</td><td className="px-4 py-3 text-gray-500 text-xs">{plan.note}</td></tr>))}</tbody>
          </table></div>
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。食事指導は無料、契約縛り・違約金なしと案内されています。8回券の正確な金額や入会金の有無を含む最新情報は公式サイトでご確認ください。</p>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5"><p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p></div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは公開情報全般の一般的な傾向をまとめたものです。特定の投稿を引用したものではありません。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            リアルボディの口コミを「良い評判」「気になる評判」に分けて傾向を整理しました。以下は公開されている口コミ全般から見られる傾向をまとめたもので、個別の投稿を引用したものではありません。最新の個別レビューは<a href="https://www.google.com/maps/search/%E3%83%AA%E3%82%A2%E3%83%AB%E3%83%9C%E3%83%87%E3%82%A3%20%E5%8F%A3%E3%82%B3%E3%83%9F" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">Googleマップ</a>でご確認ください。
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

        <section id="goal" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">目的・悩み別 リアルボディの向き不向き</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            リアルボディが自分の目的に合うかを、よくある目的・悩み別に整理しました。以下は公開情報と口コミ傾向にもとづく一般的な整理で、効果を保証するものではありません。
          </p>
          <div className="space-y-3">
            {goalGuide.map((g) => (
              <div key={g.goal} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-gray-800 text-sm">{g.goal}</h3>
                  <span className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${g.fit === "向いている" ? "bg-green-100 text-green-700" : g.fit === "要確認" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"}`}>{g.fit}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">対象エリア外の方や、別タイプのジムも比べたい方は<a href="/compare/" className="text-teal-600 underline">目的別おすすめ比較</a>もご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">リアルボディのよくある質問</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (<details key={i} className="bg-white border border-gray-200 rounded-lg group"><summary className="px-5 py-3 cursor-pointer text-sm font-medium text-gray-800 flex items-center justify-between list-none"><span>Q. {item.q}</span><span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">&#9660;</span></summary><div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">A. {item.a}</div></details>))}
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">リアルボディが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料体験で、料金プランやトレーナーとの相性を相談してみましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (<Link key={r.name} href={r.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors">{r.name}</Link>))}
          </div>
        </section>
      </div>
    </>
  );
}
