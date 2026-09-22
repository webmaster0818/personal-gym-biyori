import type { Metadata } from "next";
import GmapStats from "@/components/GmapStats";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ReviewSummary from "@/components/ReviewSummary";
import GymCta from "@/components/GymCta";

export const metadata: Metadata = {
  title: "24/7ワークアウトの口コミ・評判は？料金総額・痩せない/失敗の理由を解説【2026年】",
  description:
    "24/7ワークアウトの口コミ・評判を徹底解説。深夜24時まで営業、3食食べるダイエット指導、月額と総額の目安（料金シミュレーション）、痩せない・失敗と言われる理由と対策、Googleマップの口コミ分析、全国店舗一覧まで網羅。",
};

/* ---------- 基本情報 ---------- */
const basicInfo = [
  { label: "運営会社", value: "株式会社トゥエンティーフォーセブン" },
  { label: "店舗数", value: "全国80店舗以上（2026年4月時点）" },
  { label: "営業時間", value: "7:00〜24:00（店舗により異なる）" },
  { label: "特徴", value: "完全個室 / 深夜営業 / 3食食べるダイエット / ウェア無料レンタル" },
  { label: "公式URL", value: "https://247-workout.jp/", isLink: true },
];

/* ---------- 3つの強み ---------- */
const strengths = [
  {
    title: "深夜24時まで営業で忙しい人も通いやすい",
    desc: "24/7ワークアウトは朝7時から深夜24時まで営業しており、仕事が遅くなりがちなビジネスパーソンでも無理なく通える時間帯を確保しています。完全予約制のため待ち時間もなく、限られた時間を有効に使えるのが大きな魅力です。",
  },
  {
    title: "3食しっかり食べるダイエット指導",
    desc: "極端な糖質制限や食事制限ではなく、3食しっかり食べながら痩せるメソッドを採用しています。管理栄養士の監修による食事指導で、日常生活を大きく変えることなく無理のないダイエットが可能です。食べることを我慢しなくていいため、挫折しにくいと評判です。",
  },
  {
    title: "月額7,500円〜の手頃な価格設定",
    desc: "大手パーソナルジムのRIZAPと比較すると半額以下の料金設定で、パーソナルトレーニングを始められます。分割払いにも対応しており、月額7,500円〜（分割時）というパーソナルジムとしては手頃な価格帯が、幅広い層に支持されています。",
  },
];

/* ---------- メリット ---------- */
const merits = [
  {
    title: "深夜まで通えるから仕事帰りでも安心",
    desc: "24時まで営業しているため、残業が多い方や不規則な勤務の方でも退勤後にトレーニングの時間を確保できます。「ジムの営業時間に合わせて生活する」のではなく、「自分の生活に合わせてジムに通える」のは大きなメリットです。完全予約制なので、深夜でもトレーナーがしっかり待機しています。",
  },
  {
    title: "食事制限がゆるめで続けやすい",
    desc: "3食きちんと食べる食事指導が基本なので、空腹に耐えるストレスが少なく済みます。糖質を完全にカットするのではなく、適切な量とタイミングで摂取する方法を教えてもらえます。食事の楽しみを維持しながらダイエットできるため、長期的な継続がしやすいです。",
  },
  {
    title: "RIZAPの半額以下で本格パーソナルトレーニング",
    desc: "月額33,000円〜の月額制プランで、入会金無料でパーソナルトレーニングを始められます。RIZAPと比較して手頃な価格設定で、「パーソナルジムに興味はあるが、高額な一括払いは避けたい」という方に人気を集めています。",
  },
];

/* ---------- デメリット ---------- */
const demerits = [
  {
    title: "トレーナーの質にばらつきがある",
    desc: "店舗数が多い分、トレーナーの経験や指導力にばらつきがあるとの声が見られます。経験豊富なトレーナーに当たれば質の高い指導を受けられますが、新人トレーナーの場合は説明が不十分だったり、メニューが画一的に感じることがあるようです。相性が合わない場合はトレーナー変更を依頼することも可能です。",
  },
  {
    title: "施設が狭い店舗がある",
    desc: "駅近の便利な立地を確保するためか、スペースがやや狭い店舗が一部あります。完全個室のマンツーマンなので他の利用者と鉢合わせることはありませんが、トレーニングスペースの広さに物足りなさを感じるケースもあります。入会前に店舗見学で確認することをおすすめします。",
  },
  {
    title: "解約条件が複雑",
    desc: "契約期間中の途中解約については、解約手数料が発生する場合があります。また、解約申請の期限や手続き方法が分かりにくいとの声も。契約前に解約条件をしっかり確認し、不明点はカウンセリング時に質問しておくことが重要です。",
  },
];

/* ---------- 料金プラン ---------- */
const pricingPlans = [
  { name: "月額プラン（月4回）", duration: "50分/回", price: "月額33,000円〜", note: "税込・入会金無料" },
  { name: "月額プラン（月8回）", duration: "50分/回", price: "月額55,000円〜", note: "税込・入会金無料" },
];

/* ---------- 口コミデータ ---------- */
const reviewCategories = [
  {
    title: "トレーナーの質・対応",
    summary: "トレーナーの対応に関しては「親切で丁寧」という好意的な声が多い一方で、店舗や担当者による差を指摘する口コミも見られます。担当制ではない店舗もあるため、指導の一貫性に課題を感じる方もいます。",
  },
  {
    title: "料金・コスパ",
    summary: "RIZAPと比較して手頃な価格設定が評価される一方で、「安い=良い」とは限らないという意見もあります。コスパの評価は、求めるサービス内容によって分かれる傾向です。",
  },
  {
    title: "結果・効果",
    summary: "食事制限がゆるめながらも、しっかり結果が出ているという口コミが多く見られます。ただし、効果の出方には個人差があり、期待値の管理が重要です。",
  },
  {
    title: "食事指導",
    summary: "3食食べるスタイルの食事指導は多くの利用者から支持されています。過度な制限がないため続けやすく、プログラム終了後も実践しやすい内容との評価です。",
  },
  {
    title: "施設・設備",
    summary: "完全個室でプライバシーが守られている点は高評価です。一方で、スペースの広さや設備の充実度は店舗によってばらつきがあります。",
  },
  {
    title: "予約の取りやすさ",
    summary: "深夜まで営業している分、予約枠は比較的多い印象です。ただし、人気の時間帯は早めの予約が必要との声もあります。",
  },
  {
    title: "勧誘・営業",
    summary: "カウンセリング時の対応は店舗により異なります。丁寧で押し売り感がないという声がある一方、契約を急かされたと感じた方もいます。",
  },
  {
    title: "立地・アクセス",
    summary: "主要駅の近くに出店しているため、アクセスの良さは高く評価されています。全国80店舗以上の展開で、地方でも通いやすくなっています。",
  },
  {
    title: "解約・手続き",
    summary: "解約手続きに関しては、条件が分かりにくいという指摘が多く見られます。契約前に解約条件を十分に確認しておくことが重要です。",
  },
  {
    title: "継続のしやすさ",
    summary: "深夜営業と3食食べられる食事指導が、継続のしやすさに大きく貢献しています。無理のないペースで通える点が、多くの利用者に支持されています。",
  },
];

/* ---------- FAQ ---------- */
const faqItems = [
  { q: "24/7ワークアウトの入会金はいくらですか？", a: "現在、入会金は無料です。月額制プランで気軽に始められます。最新情報は公式サイトでご確認ください。" },
  { q: "深夜24時まで本当に営業していますか？", a: "はい、多くの店舗で24時まで営業しています。ただし、店舗により営業時間が異なる場合がありますので、ご利用予定の店舗の営業時間を事前にご確認ください。" },
  { q: "食事制限は厳しいですか？", a: "3食しっかり食べるスタイルの食事指導です。極端な糖質制限は行わず、食べるものの質とタイミングを調整する方法のため、比較的続けやすいと評判です。" },
  { q: "1回のトレーニング時間はどのくらいですか？", a: "1回あたり50分です。効率的に全身を鍛えるプログラムが組まれています。" },
  { q: "途中解約はできますか？", a: "途中解約は可能ですが、手数料が発生する場合があります。契約前に解約条件をしっかり確認し、不明点はカウンセリング時に質問しておくことをおすすめします。" },
  { q: "トレーナーの変更はできますか？", a: "トレーナーとの相性が合わない場合は、変更を申し出ることが可能です。スタッフに相談してください。" },
  { q: "女性でも通いやすい環境ですか？", a: "完全個室のマンツーマンなので、性別を問わず通いやすい環境です。女性トレーナーを希望する場合も相談可能です。" },
  { q: "無料体験やカウンセリングはありますか？", a: "無料カウンセリングが用意されています。体の悩みや目標のヒアリング、店舗見学などが含まれます。公式サイトから予約できます。" },
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

/* ---------- 店舗一覧 ---------- */
type StoreItem = { name: string; href?: string };
const storesByRegion: { region: string; stores: StoreItem[] }[] = [
  { region: "北海道", stores: [{ name: "札幌店", href: "/review/247workout/sapporo/" }] },
  { region: "宮城", stores: [{ name: "仙台店" }] },
  { region: "東京", stores: [{ name: "新宿店", href: "/review/247workout/shinjuku/" }, { name: "池袋店", href: "/review/247workout/ikebukuro/" }, { name: "渋谷店", href: "/review/247workout/shibuya/" }, { name: "上野店" }, { name: "秋葉原店" }, { name: "銀座店", href: "/review/247workout/ginza/" }, { name: "六本木店", href: "/review/247workout/roppongi/" }, { name: "赤坂店" }, { name: "北千住店" }, { name: "錦糸町店" }, { name: "町田店", href: "/review/247workout/machida/" }, { name: "立川店" }, { name: "八王子店" }, { name: "吉祥寺店" }, { name: "自由が丘店" }, { name: "恵比寿店" }, { name: "中目黒店" }, { name: "蒲田店" }, { name: "西葛西店" }, { name: "三軒茶屋店" }] },
  { region: "神奈川", stores: [{ name: "横浜店", href: "/review/247workout/yokohama/" }, { name: "川崎店", href: "/review/247workout/kawasaki/" }, { name: "藤沢店" }, { name: "戸塚店" }, { name: "溝の口店" }, { name: "本厚木店" }] },
  { region: "埼玉", stores: [{ name: "大宮店", href: "/review/247workout/saitama/" }, { name: "浦和店" }, { name: "川口店" }, { name: "所沢店" }, { name: "川越店" }] },
  { region: "千葉", stores: [{ name: "千葉店" }, { name: "船橋店" }, { name: "柏店" }, { name: "松戸店" }] },
  { region: "愛知", stores: [{ name: "名古屋栄店", href: "/review/247workout/nagoya/" }, { name: "名駅店" }, { name: "金山店" }, { name: "豊田店" }] },
  { region: "大阪", stores: [{ name: "梅田店", href: "/review/247workout/umeda/" }, { name: "なんば店", href: "/review/247workout/namba/" }, { name: "天王寺店" }, { name: "心斎橋店" }, { name: "堺東店" }, { name: "高槻店" }] },
  { region: "京都", stores: [{ name: "京都河原町店" }] },
  { region: "兵庫", stores: [{ name: "神戸三宮店" }, { name: "西宮店" }] },
  { region: "広島", stores: [{ name: "広島店" }] },
  { region: "福岡", stores: [{ name: "天神店", href: "/review/247workout/fukuoka/" }, { name: "博多店" }] },
];

/* ---------- 関連ジム ---------- */
const relatedReviews = [
  { name: "チキンジム", href: "/review/chicken-gym/" },
  { name: "RIZAP", href: "/review/rizap/" },
  { name: "エクササイズコーチ", href: "/review/exercise-coach/" },
  { name: "リアルボディ", href: "/review/real-body/" },
];

/* ---------- 目次 ---------- */
const toc = [
  { id: "basic-info", label: "24/7ワークアウトの基本情報" },
  { id: "overview", label: "24/7ワークアウトの概要" },
  { id: "merit-demerit", label: "24/7ワークアウトのメリット・デメリット" },
  { id: "pricing", label: "24/7ワークアウトの料金" },
  { id: "total-cost", label: "月額と総額の目安（料金シミュレーション）" },
  { id: "vs", label: "他社（チキンジム・RIZAP）との比較" },
  { id: "reviews", label: "24/7ワークアウトの口コミ分析" },
  { id: "fail", label: "「痩せない・失敗」の理由と対策" },
  { id: "faq", label: "24/7ワークアウトのよくある質問" },
  { id: "stores", label: "24/7ワークアウトの店舗一覧" },
];

export default function Workout247Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "24/7ワークアウト" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* ---------- H1 + Hero ---------- */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          24/7ワークアウトの口コミ・評判｜料金・メリット・デメリットを徹底解説
        </h1>
        <figure className="mt-4 mb-2 overflow-hidden rounded-xl border border-gray-200">
          <img src="/brand-ss/247workout.jpg" alt="24/7ワークアウトの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-gray-400 mb-6">24/7ワークアウト 公式サイトのスクリーンショット(2026年9月16日取得)。最新の料金・キャンペーンは公式サイトをご確認ください。</p>
        <p className="text-gray-500 text-sm mb-6">最終更新: 2026年6月</p>
        <GymCta slug="247workout" name="24/7ワークアウト" variant="top" />
        <h2 id="s1" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">この記事を書いた人</h2>
        <AuthorBox />
        <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal-600 hover:underline">この記事を書いた人</a></li>
            <li><a href="#s2" className="text-teal-600 hover:underline">結論：24/7ワークアウトはこんな人におすすめ</a></li>
            <li><a href="#s3" className="text-teal-600 hover:underline">24/7ワークアウトの基本情報</a></li>
            <li><a href="#s4" className="text-teal-600 hover:underline">24/7ワークアウトの概要</a></li>
            <li><a href="#s5" className="text-teal-600 hover:underline">24/7ワークアウトのメリット・デメリット</a></li>
            <li><a href="#s6" className="text-teal-600 hover:underline">24/7ワークアウトの料金</a></li>
            <li><a href="#s7" className="text-teal-600 hover:underline">24/7ワークアウトの月額と総額の目安（料金シミュレーション）</a></li>
            <li><a href="#s8" className="text-teal-600 hover:underline">他社（チキンジム・RIZAP）との比較</a></li>
            <li><a href="#s9" className="text-teal-600 hover:underline">24/7ワークアウトの口コミ分析</a></li>
            <li><a href="#s10" className="text-teal-600 hover:underline">24/7ワークアウトで「痩せない・失敗」と言われる理由と対策</a></li>
            <li><a href="#s11" className="text-teal-600 hover:underline">24/7ワークアウトの口コミの傾向——実際の口コミを読んだ編集部要約(2026年9月6日取得)</a></li>
            <li><a href="#s12" className="text-teal-600 hover:underline">24/7ワークアウトのよくある質問</a></li>
            <li><a href="#s13" className="text-teal-600 hover:underline">24/7ワークアウトの店舗一覧</a></li>
            <li><a href="#s14" className="text-teal-600 hover:underline">24/7ワークアウトが気になった方へ</a></li>
            <li><a href="#s15" className="text-teal-600 hover:underline">他のパーソナルジムも見る</a></li>
          </ol>
        </nav>
        <ReviewSummary gymName="24/7ワークアウト" />

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-247workout.jpg" alt="24/7ワークアウト 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          24/7ワークアウトは全国80店舗以上を展開する大手パーソナルトレーニングジムです。深夜24時まで営業という業界随一の営業時間と、3食しっかり食べるダイエット指導が特徴。RIZAPの半額以下という手頃な料金設定で、「パーソナルジムは高くて手が出ない」と感じていた層にも支持されています。本記事では、24/7ワークアウトの料金体系、メリット・デメリット、実際の口コミ傾向を詳しく解説します。
        </p>

        {/* ---------- 結論ボックス ---------- */}
        <div id="conclusion" className="rounded-xl border border-teal-200 bg-teal-50/60 p-5 mb-10">
          <h2 id="s2" className="font-bold text-gray-900 mb-3">結論：24/7ワークアウトはこんな人におすすめ</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・<strong>仕事帰りや深夜</strong>に通いたい人（多くの店舗で7:00〜24:00営業）</li>
            <li>・<strong>3食食べながら</strong>無理のない食事指導で痩せたい人（極端な糖質制限が苦手な人）</li>
            <li>・大手の中では<strong>比較的手頃な料金</strong>で本格パーソナルを試したい人</li>
            <li>・口コミは「続けやすい」「結果が出た」が中心。一方「トレーナーの質に差」「解約条件が分かりにくい」という声も</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">料金・営業時間・キャンペーンは店舗で異なります。最新は公式でご確認ください。<a href="/compare/247workout-vs-chicken-gym-vs-rizap/" className="text-teal-600 underline">チキンジム・RIZAPとの比較</a>や<a href="/compare/" className="text-teal-600 underline">目的別比較</a>もご覧ください。</p>
        </div>

        {/* ---------- 目次 ---------- */}
        

        {/* ---------- 基本情報 ---------- */}
        <section id="basic-info" className="mb-12">
          <h2 id="s3" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {basicInfo.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-32 whitespace-nowrap">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-800">
                      {row.isLink ? (
                        <a href={row.value} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- 概要・3つの強み ---------- */}
        <section id="overview" className="mb-12">
          <h2 id="s4" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの概要</h2>
          <h3 className="text-lg font-bold mb-4">24/7ワークアウトの3つの強み</h3>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-2">{i + 1}. {s.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- メリット・デメリット ---------- */}
        <section id="merit-demerit" className="mb-12">
          <h2 id="s5" className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">24/7ワークアウトのメリット・デメリット</h2>

          <h3 className="text-lg font-bold mb-4 text-green-700">24/7ワークアウトのメリット</h3>
          <div className="space-y-6 mb-8">
            {merits.map((m, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-green-600 shrink-0">[+]</span>
                  {m.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{m.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-4 text-red-700">24/7ワークアウトのデメリット</h3>
          <div className="space-y-6">
            {demerits.map((d, i) => (
              <div key={i}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-red-500 shrink-0">[-]</span>
                  {d.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 料金 ---------- */}
        <section id="pricing" className="mb-12">
          <h2 id="s6" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの料金</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            24/7ワークアウトの料金はコースごとに設定されています。以下は代表的なプランの一覧です。入会金は無料です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">プラン名</th>
                  <th className="px-4 py-3 text-left font-medium">回数 / 期間</th>
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
          <p className="text-xs text-gray-500 mt-3">
            ※ 料金は税込です。入会金は無料です。料金はキャンペーンにより変動する場合があります。
          </p>
        </section>

        {/* ---------- 料金総額シミュレーション ---------- */}
        <section id="total-cost" className="mb-12">
          <h2 id="s7" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの月額と総額の目安（料金シミュレーション）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「月額7,500円〜」という広告表示は<strong>分割払い時の月々の支払い額</strong>を指すことが多く、契約の総額とは異なります。口コミでも「月額だけ見て契約したら総額は20万円以上だった」という声が見られます。実際に検討するときは、<strong>月々の支払い</strong>と<strong>コース総額</strong>の両方を必ず確認しましょう。以下は当ページ掲載のプランをもとにした概算の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">通うペース</th>
                  <th className="px-4 py-3 text-left font-medium">プランの目安</th>
                  <th className="px-4 py-3 text-left font-medium">月額の目安</th>
                  <th className="px-4 py-3 text-left font-medium">2ヶ月の総額目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">週1回ペース</td>
                  <td className="px-4 py-3 text-gray-700">月4回・50分/回</td>
                  <td className="px-4 py-3 text-gray-700">月額33,000円〜</td>
                  <td className="px-4 py-3 text-gray-700">約66,000円〜</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">週2回ペース</td>
                  <td className="px-4 py-3 text-gray-700">月8回・50分/回</td>
                  <td className="px-4 py-3 text-gray-700">月額55,000円〜</td>
                  <td className="px-4 py-3 text-gray-700">約110,000円〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は当ページ掲載の月額プランから算出した概算の目安です（税込・入会金無料）。実際の総額はコース・回数・期間・キャンペーン・分割手数料の有無により変わります。正確な金額は無料カウンセリングまたは公式サイトで要確認です。
          </p>
        </section>

        {/* ---------- 他社比較 ---------- */}
        <section id="vs" className="mb-12">
          <h2 id="s8" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">他社（チキンジム・RIZAP）との比較</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            24/7ワークアウトと同じ「大手・低価格〜中価格帯」で比較されやすいのが、低価格のチキンジムと、結果重視のRIZAPです。料金や特徴をまとめて比べたい方は、3社の比較ページもご覧ください。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium">ジム</th>
                  <th className="px-4 py-3 text-left font-medium">料金の目安</th>
                  <th className="px-4 py-3 text-left font-medium">向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">24/7ワークアウト</td>
                  <td className="px-4 py-3 text-gray-700">月額33,000円〜（入会金無料）</td>
                  <td className="px-4 py-3 text-gray-700">深夜まで通い、3食食べながら手頃に続けたい人</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/review/chicken-gym/" className="text-teal-600 hover:underline">チキンジム</Link></td>
                  <td className="px-4 py-3 text-gray-700">月々6,800円〜（分割払い時の目安）</td>
                  <td className="px-4 py-3 text-gray-700">月々の負担を最優先したい初心者</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/review/rizap/" className="text-teal-600 hover:underline">RIZAP</Link></td>
                  <td className="px-4 py-3 text-gray-700">16回327,800円（2ヶ月）/ 月額22,000円〜</td>
                  <td className="px-4 py-3 text-gray-700">費用がかかっても確実に結果を出したい人（30日間返金保証）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            <Link href="/compare/247workout-vs-chicken-gym-vs-rizap/" className="text-teal-600 font-medium hover:underline">▶ 24/7ワークアウト・チキンジム・RIZAPの詳しい比較はこちら</Link>
          </p>
          <p className="text-xs text-gray-500 mt-2">※ 各社の料金は税込・目安です。最新の料金・保証条件は各公式サイトでご確認ください。</p>
        </section>

        {/* ---------- 口コミ分析 ---------- */}
        <section id="reviews" className="mb-12">
          <h2 id="s9" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの口コミ分析</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            24/7ワークアウトのGoogleマップ口コミを分析すると、コストパフォーマンスの高さと深夜営業の利便性が好評な一方で、トレーナーの質のばらつきや解約条件への指摘が見られます。以下では、カテゴリ別に口コミの傾向をまとめています。
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-xs text-yellow-800">※ 以下は、Googleマップに投稿された口コミを当サイト編集部が読み、<strong>どんな傾向の声が多いかを要約したもの</strong>です。個別の投稿文は掲載していません（投稿を書き換えて載せることはしない方針のため）。実際の投稿は下記リンクからGoogleマップでご確認ください。検証できる数値は、上の「Googleマップ実測データ」に掲載しています。</p>
            <p className="text-xs text-yellow-700 mt-1">
              出典: <a href="https://www.google.com/maps/search/24%2F7%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A2%E3%82%A6%E3%83%88/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">https://www.google.com/maps/search/24/7ワークアウト/</a>
            </p>
          </div>

          <GmapStats slug="247workout" brand="24/7ワークアウト" />

          {reviewCategories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cat.summary}</p>
            </div>
          ))}
        </section>

        {/* ---------- 痩せない・失敗の対策 ---------- */}
        <section id="fail" className="mb-12">
          <h2 id="s10" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトで「痩せない・失敗」と言われる理由と対策</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「24/7ワークアウトで痩せない」「失敗した」という声も一部に見られます。多くは<strong>取り組み方やジムとの相性のミスマッチ</strong>が原因です。失敗を避けるための注意点を整理しました。
          </p>
          <div className="space-y-4">
            {[
              { title: "終了後に食事・運動を元に戻してリバウンド", desc: "短期集中で結果が出ても、終了後に以前の生活へ完全に戻すとリバウンドしやすくなります。卒業後も続けられる食事・運動習慣をトレーナーと相談し、無理のない範囲で維持することが大切です。" },
              { title: "食事管理の指示を守れていない", desc: "「3食しっかり食べる」方式でも、間食や飲酒など指示外の摂取が多いと効果は出にくくなります。記録アプリやLINEサポートを活用し、正直に申告して軌道修正することが結果につながります。" },
              { title: "担当・店舗との相性が合わない", desc: "担当制でない店舗もあり、指導の一貫性に差を感じるケースがあります。相性が合わないと感じたら、早めに担当変更や店舗相談を申し出ましょう。無料カウンセリング時に指導方針を確認しておくと安心です。" },
              { title: "期間・回数が目標に対して不足", desc: "目標体重や体型に対してコース期間・回数が不足していると、十分な結果が出ないことがあります。カウンセリングで現実的な目標設定と必要期間をすり合わせてから契約しましょう。" },
            ].map((f, i) => (
              <div key={i} className="bg-orange-50 rounded-lg p-5">
                <h3 className="font-bold text-orange-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※効果には個人差があります。上記は一般的な注意点で、特定の結果を保証するものではありません。</p>
        </section>

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 id="s11" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの口コミの傾向——実際の口コミを読んだ編集部要約(2026年9月6日取得)</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">よく見られる好意的な声</span>——「2ヶ月で10kg」「3ヶ月で7kg」など具体的な減量報告が多いのが最大の特徴です。「1人だと追い込めない・客観的なフィードバックが欲しい」という経験者の入会理由や、毎週の計測で身が引き締まるという仕組み面の評価、体調に合わせたメニュー調整の声もあります。</p>
            <p><span className="font-semibold text-rose-700">気になる点・読み方の注意</span>——「体重はさほど落ちていないが体型・姿勢は変わった」という中立的な声もあり、成果の出方には個人差があります。個室のフリー利用(別サービス会員)の口コミが混在する店舗もあるため、パーソナル指導の評価とは分けて読むのが安全です。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗(新宿・梅田・横浜ほか)の直近口コミをPlaces APIで取得し、編集部が読んだ上で傾向を要約したものです(本文の転載はしていません)。個々の体験は店舗・トレーナー・時期により異なります。</p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
      <GymCta slug="247workout" name="24/7ワークアウト" />

        <section id="faq" className="mb-12">
          <h2 id="s12" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトのよくある質問</h2>
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

        {/* ---------- 店舗一覧 ---------- */}
        <section id="stores" className="mb-12">
          <h2 id="s13" className="text-xl font-bold mb-4 pb-2 border-b-2 border-teal-500">24/7ワークアウトの店舗一覧</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            24/7ワークアウトは全国80店舗以上を展開しています（2026年4月時点）。以下は主要エリアの店舗一覧です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-3 text-left font-medium w-28">エリア</th>
                  <th className="px-4 py-3 text-left font-medium">店舗名</th>
                </tr>
              </thead>
              <tbody>
                {storesByRegion.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {row.stores.map((s, i) => (
                        <span key={s.name}>
                          {i > 0 && "、"}
                          {s.href ? <Link href={s.href} className="text-teal-600 hover:underline">{s.name}</Link> : s.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 店舗情報は2026年4月時点のものです。最新の店舗情報は公式サイトでご確認ください。
          </p>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-teal-500 text-white rounded-xl p-8 text-center mb-10">
          <h2 id="s14" className="text-xl font-bold mb-3">24/7ワークアウトが気になった方へ</h2>
          <p className="text-teal-100 text-sm mb-6">
            まずは無料カウンセリングで、あなたに合ったコースを相談してみましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-teal-600 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ランキングに戻る
          </Link>
        </section>

        {/* ---------- 関連ジム ---------- */}
        <section>
          <h2 id="s15" className="text-lg font-bold mb-4">他のパーソナルジムも見る</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedReviews.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-500 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
