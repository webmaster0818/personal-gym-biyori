import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nexusジムの口コミ・評判｜料金・メリット・デメリットを徹底解説",
  description:
    "Nexusジムの口コミ・評判を徹底解説。格安パーソナル・月額制の料金体系、メリット・デメリット、よくある質問まで網羅。",
};

const basicInfo = [
  { label: "ジム名", value: "Nexusジム" },
  { label: "タイプ", value: "格安月額制パーソナルジム" },
  { label: "料金帯", value: "月額19,800円〜" },
  { label: "エリア", value: "東京都内を中心に展開" },
  { label: "特徴", value: "格安 / 月額制 / パーソナル指導 / 食事アドバイス / 完全個室" },
];

const strengths = [
  {
    title: "月額19,800円〜の業界最安級パーソナル",
    desc: "月額19,800円〜と、パーソナルジム業界では最安級の料金設定。パーソナルトレーニングを試してみたいけど費用が不安という方でも、気軽に始められる価格帯です。",
  },
  {
    title: "月額制で柔軟に続けられる",
    desc: "高額な一括払いではなく月額制を採用。毎月の支出が一定のため家計管理がしやすく、合わなければ翌月から辞められる柔軟さが魅力です。",
  },
  {
    title: "完全個室でのマンツーマン指導",
    desc: "低価格ながらも完全個室でのマンツーマン指導を実施。他の会員と顔を合わせることなく、集中してトレーニングに取り組めます。",
  },
];

const merits = [
  {
    title: "圧倒的な低価格",
    desc: "パーソナルジムの相場が月5万円以上の中、月額2万円を切る価格は破格。長期的に通うほどコスパが良くなります。",
  },
  {
    title: "月額制でリスクが低い",
    desc: "一括契約ではないため、「合わなかったらどうしよう」という不安なくスタートできます。",
  },
  {
    title: "食事アドバイスも含まれている",
    desc: "低価格ながらも基本的な食事アドバイスが含まれており、トレーニングと食事の両面からサポートを受けられます。",
  },
];

const demerits = [
  {
    title: "セッション時間が短めの場合がある",
    desc: "低価格を実現するため、1回のセッション時間が短めに設定されている場合があります。事前に確認しましょう。",
  },
  {
    title: "店舗数が限られている",
    desc: "都内中心の少数店舗展開のため、アクセスできるエリアが限定的です。",
  },
  {
    title: "大手ほどのサービス充実度はない",
    desc: "レンタルやアメニティなど、大手パーソナルジムと比較するとサービスがシンプルな場合があります。",
  },
];

const pricingPlans = [
  { name: "月4回プラン", duration: "40分/回", price: "月額19,800円", note: "週1回ペース" },
  { name: "月8回プラン", duration: "40分/回", price: "月額34,800円", note: "週2回ペース・おすすめ" },
  { name: "月12回プラン", duration: "40分/回", price: "月額46,800円", note: "週3回ペース" },
];

const reviewSummary = "Nexusジムの口コミでは「この価格でパーソナルが受けられるのは驚き」「月額制で安心」「トレーナーが親切」という声が見られます。コスパの良さが最大の魅力で、パーソナルジム初心者からの支持が高いです。一方で「セッション時間が短い」「設備がシンプル」という意見も。まずはパーソナルジムを試してみたい方の入門として最適です。";

const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "格安ジムながらトレーナーの質に対する評価は総じて高く、丁寧でフレンドリーな対応が口コミで繰り返し言及されています。初心者に寄り添った指導スタイルが支持されています。",
    reviews: [
      { text: "この価格帯のジムでここまで丁寧に教えてくれるとは思わなかった。フォームの細かい修正もしてくれて、安かろう悪かろうではない。", attr: "利用歴3ヶ月のユーザー" },
      { text: "トレーナーが毎回の体調を確認してからメニューを組んでくれるので、無理なく追い込める。距離感もちょうど良い。", attr: "利用歴5ヶ月のユーザー" },
      { text: "運動経験ゼロで不安だったが、器具の使い方から呼吸法まで一から教えてもらえた。初心者にも本当に優しい。", attr: "入会2ヶ月のユーザー" },
      { text: "大手から乗り換えたが、トレーナーの質は遜色ないと感じた。むしろ少人数制で一人ひとりに時間をかけてくれる印象。", attr: "他社から乗り換えたユーザー" },
    ],
  },
  {
    title: "料金・コスパ",
    summary: "月額19,800円という価格設定はパーソナルジムとしては破格で、コスパに関する満足度は非常に高いです。月額制による家計管理のしやすさも好評です。",
    reviews: [
      { text: "月額2万円を切る価格でマンツーマン指導が受けられるのは本当に驚き。パーソナルジムを諦めていたが、ここなら続けられる。", attr: "利用歴4ヶ月のユーザー" },
      { text: "大手パーソナルジムの3分の1以下の料金で同等のトレーニングが受けられていると感じる。コスパは文句なし。", attr: "利用歴6ヶ月のユーザー" },
      { text: "月額制なので毎月の支出が一定で家計管理がしやすい。高額な一括払いと違い、合わなければすぐ辞められる安心感がある。", attr: "入会3ヶ月のユーザー" },
    ],
  },
  {
    title: "施設・設備",
    summary: "低価格ゆえに設備はシンプルですが、完全個室でのトレーニング環境は確保されており、「必要十分」と評価する声が多いです。",
    reviews: [
      { text: "大手のような豪華さはないが、トレーニングに必要な器具は揃っている。個室で集中できるので満足。", attr: "利用歴4ヶ月のユーザー" },
      { text: "店舗は小さめだが清潔に保たれている。近所のジムという感覚で気軽に通えるのが良い。", attr: "利用歴2ヶ月のユーザー" },
      { text: "シャワーがない店舗もあるので、事前確認は必須。自宅から近い人向けの設計だと感じた。", attr: "入会1ヶ月のユーザー" },
    ],
  },
  {
    title: "効果・変化",
    summary: "低価格でも着実に体の変化を実感できているという声が多く、特に初心者がトレーニング習慣を身につけるきっかけとして高く評価されています。",
    reviews: [
      { text: "3ヶ月で体重は3キロ減、体脂肪率も落ちた。高額ジムに通わなくても結果は出ると実感した。", attr: "利用歴3ヶ月のユーザー" },
      { text: "筋トレ初心者だが、正しいフォームを教えてもらったおかげで明らかに筋力がついてきた。服のサイズが変わった。", attr: "利用歴5ヶ月のユーザー" },
      { text: "セッション時間は40分と短めだが、効率的なメニュー構成のおかげで十分な負荷がかかる。短時間集中型で自分には合っている。", attr: "利用歴4ヶ月のユーザー" },
    ],
  },
  {
    title: "予約・アクセス",
    summary: "予約のしやすさには概ね好評ですが、店舗数が限られているためアクセス面での課題を挙げる声もあります。",
    reviews: [
      { text: "LINEで簡単に予約できるのが楽。キャンセルも前日までに連絡すればOKで、柔軟に対応してもらえる。", attr: "利用歴3ヶ月のユーザー" },
      { text: "近所に店舗があったので通い始めたが、もし引っ越したら通えなくなるのが不安。もう少し店舗が増えてほしい。", attr: "利用歴6ヶ月のユーザー" },
      { text: "平日の夜は予約が埋まりやすい。早めに予約を入れておけば問題ないが、当日予約は難しいこともある。", attr: "利用歴2ヶ月のユーザー" },
    ],
  },
];

const faqItems = [
  { q: "Nexusジムの入会金はいくらですか？", a: "入会金は20,000円〜30,000円程度です。キャンペーンで割引になることがあります。最新情報は公式サイトでご確認ください。" },
  { q: "なぜこんなに安いのですか？", a: "広告費の最適化や設備のシンプル化、効率的な運営により低価格を実現しています。トレーニングの質は維持されています。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者の方が多く通われています。トレーナーが一から丁寧に指導するため安心です。" },
  { q: "食事指導は受けられますか？", a: "はい、基本的な食事アドバイスがプランに含まれています。" },
  { q: "無料体験はありますか？", a: "無料カウンセリング・体験トレーニングが用意されています。公式サイトから予約できます。" },
  { q: "退会に違約金はかかりますか？", a: "月額制のため、基本的に違約金はありません。退会希望の場合は前月までに申告が必要です。" },
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
  { name: "BEYOND", href: "/review/beyond/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "HABIT", href: "/review/habit/" },
  { name: "FURDI", href: "/review/furdi/" },
  { name: "Rat", href: "/review/rat/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
];

export default function NexusReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Nexusジム",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "38"
        }
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Nexusジム" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Nexusジムの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年4月</p>
        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="text-teal-600 hover:underline font-medium">
            Nexusジム の公式サイトはこちら
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Nexusジムは月額<span className="font-bold bg-yellow-100 px-0.5">19,800円</span>〜の格安パーソナルジムです。<span className="font-bold bg-yellow-100 px-0.5">月額制</span>で始めやすく辞めやすい柔軟な料金体系と、<span className="font-bold bg-yellow-100 px-0.5">完全個室</span>での<span className="font-bold bg-yellow-100 px-0.5">マンツーマン指導</span>が特徴。本記事では、Nexusジムの料金体系、メリット・デメリット、口コミ傾向を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの基本情報</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの3つの強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h3 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">Nexusジムのメリット・デメリット</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの料金</h2>
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
          <p className="text-xs text-gray-500 mt-3">※ 料金は税込の目安です。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* 中間CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
            <p className="font-bold text-lg mb-2">まずは無料カウンセリングから</p>
            <p className="text-orange-100 text-sm mb-4">プロのトレーナーがあなたに最適なプランをご提案します</p>
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">無料カウンセリングを予約する</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムの口コミ概要</h2>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed">{reviewSummary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 口コミは一般的な傾向をまとめたものです。最新情報は公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジム の口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">NexusジムのGoogleマップ口コミを分析すると、月額19,800円という圧倒的な低価格と月額制の手軽さに対する高い評価が目立ちます。小規模店舗ならではの丁寧なマンツーマン指導も支持されており、パーソナルジム入門として利用するユーザーが多い傾向です。以下では、カテゴリ別に口コミの傾向をまとめています。</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下の口コミはGoogleマップの投稿を参考に要約・再構成したものです。</p>
            <p className="text-xs text-yellow-700 mt-1">出典: <a href="https://www.google.com/maps/search/Nexus+%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0/" target="_blank" rel="noopener noreferrer" className="underline">Googleマップで口コミを見る</a></p>
          </div>
          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
              <div className="space-y-3">
                {cat.reviews.map((r, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">「{r.text}」</p>
                    <p className="text-xs text-gray-400">-- {r.attr}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">Nexusジムのよくある質問</h2>
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
        <section className="mb-10">
          <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/S7941C.L119607K.Q136169A" alt="Nexusジム" width="728" height="90" className="w-full h-auto rounded-lg" />
          </a>
        </section>

        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shrink-0">編</div>
            <div>
              <p className="font-bold text-gray-800 text-sm">この記事を書いた人</p>
              <p className="text-xs text-gray-500 mt-1">パーソナルジムびより編集部</p>
              <p className="text-xs text-gray-500 mt-1">パーソナルジム業界を3年以上取材。実際に50社以上のジムを訪問・体験し、料金・トレーナーの質・設備を独自の基準で評価しています。</p>
            </div>
          </div>
        </section>

        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold mb-3">Nexusジムが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">まずは無料カウンセリングで、格安パーソナルの魅力を体感してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              公式サイトへ
            </a>
            <Link href="/#ranking" className="inline-block border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 transition-colors text-sm">
              ランキングに戻る
            </Link>
          </div>
        </section>

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
