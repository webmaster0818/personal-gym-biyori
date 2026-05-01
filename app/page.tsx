import Link from "next/link";

const services = [
  {
    rank: 1,
    name: "チキンジム",
    tagline: "初心者でも続けやすいパーソナルジム",
    price: "月額6,800円〜",
    features: ["全国30店舗以上", "初心者向けプログラム", "手ぶらOK", "ウェア・シューズ無料レンタル"],
    pros: ["業界最安クラスの料金設定", "駅近で通いやすい立地", "トレーナーの丁寧な指導が好評"],
    cons: ["店舗によって混雑する時間帯あり", "上級者向けプログラムが少ない"],
    recommend: "コスパ重視で、無理なく通い続けたい方におすすめ。",
    reviewPath: "/review/chicken-gym/",
    comment: "初めてのパーソナルジムならここ！低価格で始めやすく、トレーナーの対応も丁寧です。",
  },
  {
    rank: 2,
    name: "RIZAP",
    tagline: "結果にコミットするパーソナルジム",
    price: "月額9,900円〜",
    features: ["結果にコミット", "食事指導付き", "30日間全額返金保証", "専属トレーナー制"],
    pros: ["圧倒的な実績と知名度", "食事管理まで徹底サポート", "返金保証で安心して始められる"],
    cons: ["他社と比べて料金が高め", "食事制限が厳しいと感じる方も"],
    recommend: "本気で体を変えたい方、短期間で結果を出したい方向け。",
    reviewPath: "/review/rizap/",
    comment: "本気で結果を出したいなら間違いなし。食事管理の徹底度が他社とは段違いです。",
  },
  {
    rank: 3,
    name: "24/7ワークアウト",
    tagline: "3食食べて痩せるダイエットジム",
    price: "月額7,500円〜",
    features: ["3食食べるダイエット", "深夜営業対応", "完全個室", "全額返金保証"],
    pros: ["食事制限がゆるめで続けやすい", "深夜まで営業で仕事帰りもOK", "リバウンド率が低い"],
    cons: ["店舗数がやや少ない", "人気トレーナーは予約が取りにくい"],
    recommend: "食事を楽しみながらダイエットしたい方に最適。",
    reviewPath: "/review/247workout/",
    comment: "食事を我慢したくない方にはベストな選択肢。リバウンドしにくいのも魅力的ですね。",
  },
  {
    rank: 4,
    name: "BEYOND",
    tagline: "ボディメイク特化のパーソナルジム",
    price: "月額8,250円〜",
    features: ["ボディメイク特化", "コンテスト入賞トレーナー在籍", "糖質制限なし", "都市部中心展開"],
    pros: ["トレーナーの質が非常に高い", "見た目の変化にこだわれる", "食事指導が柔軟"],
    cons: ["店舗が都市部に集中", "プラン料金がやや複雑"],
    recommend: "見た目を変えたい方、ボディメイクにこだわりたい方向け。",
    reviewPath: "/review/beyond/",
    comment: "筋肉をつけて見た目を変えたいなら、トレーナーの質が高いBEYONDが最適です。",
  },
  {
    rank: 5,
    name: "エクササイズコーチ",
    tagline: "AI搭載マシンで効率的なトレーニング",
    price: "月額9,900円〜",
    features: ["AI搭載マシン", "1回20分の時短トレーニング", "月4回からOK", "全国展開中"],
    pros: ["1回20分で忙しい方にぴったり", "AIが最適な負荷を自動調整", "低価格で始めやすい"],
    cons: ["フリーウェイトが少ない", "トレーナーとの関係が薄め"],
    recommend: "忙しくて時間がない方、効率重視の方におすすめ。",
    reviewPath: "/review/exercise-coach/",
    comment: "忙しいビジネスパーソンには革命的。20分で効果が出るのは時間効率が最高ですね。",
  },
];

const faqItems = [
  {
    q: "パーソナルジムの相場はいくらですか？",
    a: "パーソナルジムの月額料金は、一般的に月額6,000円〜30,000円程度です。短期集中プランの場合は総額20万円〜40万円が相場となります。本サイトで紹介しているジムは月額6,800円〜9,900円と、比較的リーズナブルなプランを提供しています。",
  },
  {
    q: "パーソナルジムは初心者でも大丈夫ですか？",
    a: "はい、むしろ初心者にこそおすすめです。専属トレーナーが一人ひとりのレベルに合わせたメニューを作成するため、運動経験がなくても安心して始められます。正しいフォームも指導してもらえるため、怪我のリスクも低くなります。",
  },
  {
    q: "パーソナルジムに通う頻度はどのくらいですか？",
    a: "一般的には週2回のペースが推奨されています。筋肉の回復期間を考慮すると、2〜3日おきのトレーニングが効果的です。忙しい方は週1回からでも効果を実感できるジムもあります。",
  },
  {
    q: "パーソナルジムの効果はいつ頃から出ますか？",
    a: "個人差はありますが、多くの方が2〜3ヶ月で見た目の変化を実感しています。体重の変化は1ヶ月目から見られることもあります。食事管理を並行して行うことで、より早く効果を実感できます。",
  },
  {
    q: "パーソナルジムと普通のジムの違いは？",
    a: "パーソナルジムは専属トレーナーがマンツーマンで指導するため、効率的なトレーニングが可能です。一般的なジムは自由に器具を使えますが、正しいフォームや最適なメニューは自分で調べる必要があります。確実に結果を出したい方はパーソナルジムがおすすめです。",
  },
  {
    q: "パーソナルジムの食事指導とは？",
    a: "多くのパーソナルジムでは、トレーニングと併せて食事の指導を行います。毎食の食事内容を報告し、栄養バランスやカロリーのアドバイスを受けられます。LINEでの相談に対応しているジムも増えています。",
  },
  {
    q: "パーソナルジムの返金保証とは？",
    a: "一部のパーソナルジムでは、効果を感じられなかった場合に全額返金する保証制度を設けています。RIZAPの30日間全額返金保証や、24/7ワークアウトの全額返金制度などが代表的です。入会前に条件を確認しましょう。",
  },
  {
    q: "パーソナルジムを選ぶポイントは？",
    a: "重要なポイントは、料金体系・立地（通いやすさ）・トレーナーの質・プログラム内容・口コミ評価の5点です。無料カウンセリングや体験トレーニングを活用して、実際の雰囲気を確かめることをおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

function CharacterComment({
  comment,
}: {
  comment: string;
}) {
  return (
    <div className="flex items-start gap-3 mt-3 p-3 rounded-lg bg-accent-50 border border-accent-100">
      <img
        src="/chara-energy.jpg"
        alt="タクヤ"
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      <div>
        <span className="text-xs font-bold text-accent-700">タクヤのコメント</span>
        <p className="text-sm text-gray-600 mt-1">{comment}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero with background image */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-energy.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            あなたに合った<br className="sm:hidden" />パーソナルジムが見つかる
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            厳選15社のパーソナルジムを料金・口コミ・特徴から徹底比較。
            初心者からボディメイク志望まで、目的に合ったジム選びをサポートします。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-10 rounded-lg transition-colors text-lg shadow-lg"
          >
            ランキングを見る
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "15社", label: "厳選比較" },
              { value: "全国", label: "対応エリア" },
              { value: "料金", label: "徹底比較" },
              { value: "口コミ", label: "多数掲載" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="py-16 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            パーソナルジムおすすめランキング
          </h2>
          <p className="text-center text-gray-500 mb-10">
            料金・口コミ・サービス内容を総合的に評価
          </p>

          <div className="space-y-8">
            {services.map((service) => (
              <article
                key={service.rank}
                className="card-base overflow-hidden"
              >
                {/* Rank header */}
                <div className="bg-primary text-white px-6 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                      {service.rank}
                    </span>
                    <h3 className="text-xl font-bold">{service.name}</h3>
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.tagline}</p>

                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="bg-accent-50 text-accent-700 text-xs font-medium px-3 py-1.5 rounded-full border border-accent-100"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-700 mb-2">良い点</h4>
                      <ul className="space-y-1.5">
                        {service.pros.map((p) => (
                          <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600 shrink-0 mt-0.5 font-bold">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-red-700 mb-2">注意点</h4>
                      <ul className="space-y-1.5">
                        {service.cons.map((c) => (
                          <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-500 shrink-0 mt-0.5 font-bold">-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommend */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-accent">おすすめ：</span>
                      {service.recommend}
                    </p>
                  </div>

                  {/* Character comment */}
                  <CharacterComment
                    comment={service.comment}
                  />

                  <div className="mt-5">
                    <Link
                      href={service.reviewPath}
                      className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm"
                    >
                      {service.name}の口コミ・詳細を見る
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Area */}
      <section id="area" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">エリア別で探す</h2>
          <p className="text-center text-gray-500 mb-8">お住まいの地域からパーソナルジムを探す</p>
          <h3 className="text-sm font-bold text-gray-600 mb-3">主要都市</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
            {[
              { name: "東京", slug: "tokyo" }, { name: "大阪", slug: "osaka" }, { name: "横浜", slug: "yokohama" },
              { name: "名古屋", slug: "nagoya" }, { name: "福岡", slug: "fukuoka" }, { name: "札幌", slug: "sapporo" },
              { name: "仙台", slug: "sendai" }, { name: "神戸", slug: "kobe" }, { name: "京都", slug: "kyoto" },
              { name: "さいたま", slug: "saitama" },
            ].map((area) => (
              <Link key={area.slug} href={`/area/${area.slug}/`} className="block card-base p-4 text-center hover:border-accent hover:shadow-md transition-all">
                <p className="font-bold text-gray-800">{area.name}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-sm font-bold text-gray-600 mb-3">東京エリア</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2 mb-6">
            {[
              { name: "新宿", slug: "shinjuku" }, { name: "渋谷", slug: "shibuya" }, { name: "池袋", slug: "ikebukuro" },
              { name: "銀座", slug: "ginza" }, { name: "六本木", slug: "roppongi" }, { name: "恵比寿", slug: "ebisu" },
              { name: "品川", slug: "shinagawa" }, { name: "上野", slug: "ueno" }, { name: "中目黒", slug: "nakameguro" },
              { name: "自由が丘", slug: "jiyugaoka" }, { name: "町田", slug: "machida" }, { name: "立川", slug: "tachikawa" },
              { name: "吉祥寺", slug: "kichijoji" }, { name: "麻布十番", slug: "azabu" }, { name: "赤坂", slug: "akasaka" },
            ].map((area) => (
              <Link key={area.slug} href={`/area/${area.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-2.5 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
          <h3 className="text-sm font-bold text-gray-600 mb-3">その他のエリア</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {[
              { name: "大宮", slug: "omiya" }, { name: "川崎", slug: "kawasaki" }, { name: "船橋", slug: "funabashi" },
              { name: "広島", slug: "hiroshima" }, { name: "なんば", slug: "namba" }, { name: "梅田", slug: "umeda" },
              { name: "高崎", slug: "takasaki" }, { name: "千葉", slug: "chiba" }, { name: "新潟", slug: "niigata" },
              { name: "岡山", slug: "okayama" },
            ].map((area) => (
              <Link key={area.slug} href={`/area/${area.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-2.5 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section id="purpose" className="py-16 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">目的別で探す</h2>
          <p className="text-center text-gray-500 mb-8">あなたの目的に合ったジムを見つけよう</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "ダイエット", desc: "食事管理+運動で効率的に痩せたい方", badge: "人気" },
              { title: "ボディメイク", desc: "筋肉をつけて理想の体型を目指す方", badge: "注目" },
              { title: "健康維持", desc: "運動不足を解消し健康的な体づくり", badge: "おすすめ" },
            ].map((purpose) => (
              <div
                key={purpose.title}
                className="card-base p-6 hover:shadow-md transition-all"
              >
                <span className="inline-block bg-accent-50 text-accent-700 text-xs font-bold px-2.5 py-1 rounded-full border border-accent-100 mb-3">
                  {purpose.badge}
                </span>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{purpose.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{purpose.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Gyms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-2">全ジム一覧</h2>
          <p className="text-gray-500 text-center text-sm mb-8">50社以上のパーソナルジムを徹底比較</p>

          <h3 className="text-sm font-bold text-accent mb-3">主要パーソナルジム</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {[
              { name: "チキンジム", slug: "chicken-gym" },
              { name: "RIZAP", slug: "rizap" },
              { name: "24/7ワークアウト", slug: "247workout" },
              { name: "BEYOND", slug: "beyond" },
              { name: "エクササイズコーチ", slug: "exercise-coach" },
              { name: "chocoZAP", slug: "chocozap" },
              { name: "カーブス", slug: "curves" },
              { name: "Dr.トレーニング", slug: "dr-training" },
              { name: "UNDEUX SUPERBODY", slug: "undeux" },
              { name: "OUTLINE", slug: "outline" },
            ].map((gym) => (
              <Link key={gym.slug} href={`/review/${gym.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                {gym.name}
              </Link>
            ))}
          </div>

          <h3 className="text-sm font-bold text-accent mb-3">提携パーソナルジム</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {[
              { name: "HABIT", slug: "habit" },
              { name: "Laststyle", slug: "laststyle" },
              { name: "プレズ", slug: "plez" },
              { name: "CoCoDakara", slug: "cocodakara" },
              { name: "ビーコンセプト", slug: "b-concept" },
              { name: "ELEMENT", slug: "element" },
              { name: "MIYAZAKI GYM", slug: "miyazaki-gym" },
              { name: "ASPI", slug: "aspi" },
              { name: "CALORIE TRADE", slug: "calorie-trade" },
              { name: "RITA STYLE", slug: "rita-style" },
            ].map((gym) => (
              <Link key={gym.slug} href={`/review/${gym.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                {gym.name}
              </Link>
            ))}
          </div>

          <h3 className="text-sm font-bold text-accent mb-3">その他のパーソナルジム</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { name: "1to1", slug: "1to1" },
              { name: "4F GYM", slug: "4f-gym" },
              { name: "ACCEPT", slug: "accept" },
              { name: "Alesco", slug: "alesco" },
              { name: "ARISANFIT", slug: "arisanfit" },
              { name: "ASmake", slug: "asmake" },
              { name: "base BODY", slug: "base-body" },
              { name: "BBB", slug: "bbb" },
              { name: "BELION", slug: "belion" },
              { name: "Bellpha", slug: "bellpha" },
              { name: "Carat", slug: "carat" },
              { name: "E9th PRIVATE GYM", slug: "e9th" },
              { name: "fis.lady's", slug: "fis-ladys" },
              { name: "FIT24", slug: "fit24" },
              { name: "FURDI", slug: "furdi" },
              { name: "ハコジム", slug: "hakogym" },
              { name: "LALA FIT", slug: "lala-fit" },
              { name: "LEADING", slug: "leading" },
              { name: "レクサー", slug: "lexer" },
              { name: "Lino U", slug: "lino-u" },
              { name: "メルメイク", slug: "melmake" },
              { name: "more fit", slug: "more-fit" },
              { name: "Nexusジム", slug: "nexus" },
              { name: "NINE", slug: "nine" },
              { name: "PEACH GYM", slug: "peach-gym" },
              { name: "PLUME", slug: "plume" },
              { name: "RACINE", slug: "racine" },
              { name: "Rat", slug: "rat" },
              { name: "Rays GyM", slug: "rays-gym" },
              { name: "リアルボディ", slug: "real-body" },
              { name: "リプレシャス", slug: "reprecious" },
              { name: "スターライト", slug: "starlight" },
              { name: "STUDIO KOMPAS", slug: "studio-kompas" },
              { name: "THE PERSONAL GYM", slug: "the-personal-gym" },
              { name: "TOKIEL", slug: "tokiel" },
              { name: "トリプルM", slug: "triple-m" },
              { name: "UNDEUX LIFE", slug: "undeux-life" },
            ].map((gym) => (
              <Link key={gym.slug} href={`/review/${gym.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                {gym.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">よくある質問</h2>
          <p className="text-center text-gray-500 mb-8">パーソナルジムに関する疑問にお答えします</p>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="card-base group"
              >
                <summary className="px-6 py-4 cursor-pointer text-sm sm:text-base font-medium text-gray-800 flex items-center justify-between list-none">
                  <span>Q. {item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0 text-xs">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  A. {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            まずは無料カウンセリングから始めよう
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            多くのパーソナルジムでは、無料カウンセリングや体験トレーニングを実施しています。
            気になるジムがあれば、まずは相談してみましょう。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-10 rounded-lg transition-colors text-lg shadow-lg"
          >
            ランキングに戻る
          </Link>
        </div>
      </section>
    </>
  );
}
