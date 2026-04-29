'use client';

import { useState } from 'react';
import Link from 'next/link';

type Gym = {
  name: string;
  slug: string;
  url: string;
  tagline: string;
  price: string;
  features: string[];
  areas: string[];
  budgetMatch: string[];
  styleMatch: string[];
  durationMatch: string[];
  options: string[];
};

const gyms: Gym[] = [
  {
    name: 'チキンジム',
    slug: '/review/chicken-gym/',
    url: 'https://chicken-gym.jp/',
    tagline: '月額6,800円〜の圧倒的コスパ',
    price: '月額6,800円〜',
    features: ['初心者向け', '手ぶらOK', 'プロテイン付き', '全国34店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡'],
    budgetMatch: ['〜1万円（とにかく安く）', '1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['手ぶらで通える', 'とにかく低価格', '駅チカ'],
  },
  {
    name: 'RIZAP',
    slug: '/review/rizap/',
    url: 'https://www.rizap.jp/',
    tagline: '結果にコミットする30日間返金保証',
    price: '月額約16万円',
    features: ['食事管理徹底', '完全個室', '30日返金保証', '全国100+店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['5万円以上（最高のサービスを）'],
    styleMatch: ['ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '手ぶらで通える', '駅チカ'],
  },
  {
    name: '24/7ワークアウト',
    slug: '/review/247workout/',
    url: 'https://247workout.jp/',
    tagline: '深夜24時まで営業＆3食食べるダイエット',
    price: '月額7,500円〜',
    features: ['深夜24時まで', '食事制限ゆるめ', '完全個室', '全国80+店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '深夜も営業', '駅チカ'],
  },
  {
    name: 'BEYOND',
    slug: '/review/beyond/',
    url: 'https://beyond-gym.com/',
    tagline: 'コンテスト入賞トレーナーによる本格指導',
    price: '月額8,250円〜',
    features: ['コンテスト実績', 'ボディメイク特化', '糖質制限なし', '全国90+店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'エクササイズコーチ',
    slug: '/review/exercise-coach/',
    url: 'https://exercisecoach.co.jp/',
    tagline: 'AI×マシンで1回20分の時短トレーニング',
    price: '月額9,900円〜',
    features: ['1回20分', 'AI自動調整', '手ぶらOK', '全国40+店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '大阪', '名古屋'],
    budgetMatch: ['〜1万円（とにかく安く）', '1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['手ぶらで通える', 'とにかく低価格'],
  },
  {
    name: 'OUTLINE',
    slug: '/review/outline/',
    url: 'https://www.outline-gym.com/',
    tagline: '女性専用の完全個室パーソナルジム',
    price: '月額9,900円〜',
    features: ['女性専用', '完全個室', 'ベビーサークル完備', '駅チカ'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'ASPI',
    slug: '/review/aspi/',
    url: 'https://aspirest.com/',
    tagline: '米国資格保有トレーナーの科学的指導',
    price: '月額6,600円〜',
    features: ['米国資格保有', '科学的トレーニング', '手ぶらOK', '完全予約制'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['〜1万円（とにかく安く）', '1〜3万円（コスパ重視）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '手ぶらで通える', '駅チカ'],
  },
  {
    name: 'かたぎり塾',
    slug: '/review/katagiri/',
    url: 'https://katagirijuku.jp/',
    tagline: '月額6,750円〜の低価格パーソナル',
    price: '月額6,750円〜',
    features: ['低価格', '完全個室', '国家資格保有', '全国100+店舗'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋'],
    budgetMatch: ['〜1万円（とにかく安く）', '1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['とにかく低価格', '駅チカ'],
  },
  {
    name: 'ミヤザキジム',
    slug: '/review/miyazaki-gym/',
    url: 'https://miyazaki-gym.jp/',
    tagline: '一生使える正しいトレーニングフォーム',
    price: '月額8,800円〜',
    features: ['フォーム重視', '科学的根拠', '完全個室', '都内中心'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'パーソナルジムRat',
    slug: '/review/rat/',
    url: 'https://rat-gym.com/',
    tagline: '女性専用で深夜23時まで営業',
    price: '月額7,700円〜',
    features: ['女性専用', '深夜23時まで', '完全個室', '都内中心'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['深夜も営業', '女性トレーナー対応', '駅チカ'],
  },
];

type Question = {
  title: string;
  subtitle: string;
  options: string[];
  multi?: boolean;
};

const questions: Question[] = [
  {
    title: 'エリア',
    subtitle: '通いたいエリアを選んでください',
    options: [
      '東京（新宿・渋谷・池袋）',
      '東京（銀座・六本木・品川）',
      '横浜・神奈川',
      '大阪',
      '名古屋',
      '福岡',
      'その他',
    ],
  },
  {
    title: '月額予算',
    subtitle: '毎月かけられる予算を選んでください',
    options: [
      '〜1万円（とにかく安く）',
      '1〜3万円（コスパ重視）',
      '3〜5万円（しっかり投資）',
      '5万円以上（最高のサービスを）',
    ],
  },
  {
    title: '通う頻度',
    subtitle: '理想の頻度を選んでください',
    options: ['週1回', '週2回', '週3回以上'],
  },
  {
    title: '通う期間',
    subtitle: '想定している通う期間を選んでください',
    options: [
      '1〜2ヶ月（短期集中）',
      '3〜6ヶ月（じっくり）',
      '半年以上（長期継続）',
    ],
  },
  {
    title: 'トレーニングスタイル',
    subtitle: 'あなたに合うスタイルを選んでください',
    options: [
      'ゆるく楽しく続けたい',
      'しっかり追い込みたい',
      'ガチで結果を出したい',
    ],
  },
  {
    title: '重視するオプション',
    subtitle: '当てはまるものを全て選んでください（複数選択可）',
    options: [
      '食事指導あり',
      '手ぶらで通える',
      '深夜も営業',
      'とにかく低価格',
      '駅チカ',
      '女性トレーナー対応',
    ],
    multi: true,
  },
];

function calculateScores(answers: (string | string[])[]) {
  return gyms
    .map((gym) => {
      let score = 0;
      const area = answers[0] as string;
      if (area && gym.areas.includes(area)) score += 3;

      const budget = answers[1] as string;
      if (budget && gym.budgetMatch.includes(budget)) score += 3;

      const style = answers[4] as string;
      if (style && gym.styleMatch.includes(style)) score += 2;

      const duration = answers[3] as string;
      if (duration && gym.durationMatch.includes(duration)) score += 1;

      const selectedOptions = answers[5] as string[];
      if (selectedOptions) {
        for (const opt of selectedOptions) {
          if (gym.options.includes(opt)) score += 1;
        }
      }

      return { gym, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

export default function ConciergePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | string[])[]>([
    '', '', '', '', '', [],
  ]);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const totalSteps = questions.length;
  const currentQuestion = questions[step];

  function handleSelect(option: string) {
    const newAnswers = [...answers];
    if (currentQuestion.multi) {
      const current = (newAnswers[step] as string[]) || [];
      if (current.includes(option)) {
        newAnswers[step] = current.filter((o) => o !== option);
      } else {
        newAnswers[step] = [...current, option];
      }
      setAnswers(newAnswers);
    } else {
      newAnswers[step] = option;
      setAnswers(newAnswers);
      if (step < totalSteps - 1) {
        setDirection('forward');
        setTimeout(() => setStep(step + 1), 200);
      } else {
        setTimeout(() => setShowResult(true), 200);
      }
    }
  }

  function handleNext() {
    if (step < totalSteps - 1) {
      setDirection('forward');
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleBack() {
    if (step > 0) {
      setDirection('back');
      setStep(step - 1);
    }
  }

  function handleRestart() {
    setStep(0);
    setAnswers(['', '', '', '', '', []]);
    setShowResult(false);
    setDirection('forward');
  }

  function isSelected(option: string) {
    if (currentQuestion.multi) {
      return ((answers[step] as string[]) || []).includes(option);
    }
    return answers[step] === option;
  }

  const results = calculateScores(answers);

  if (showResult) {
    return (
      <section className="py-16 bg-section-bg min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              あなたにおすすめのパーソナルジム
            </h1>
            <p className="text-gray-500">
              回答内容をもとに最適なジムを厳選しました
            </p>
          </div>

          <div className="space-y-6">
            {results.map(({ gym, score }, index) => (
              <article
                key={gym.name}
                className="card-base overflow-hidden"
                style={{
                  animation: `fadeSlideUp 0.5s ease ${index * 0.15}s both`,
                }}
              >
                <div className="bg-primary text-white px-6 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                    <h2 className="text-xl font-bold">{gym.name}</h2>
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    適合度 {score}pt
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-2">{gym.tagline}</p>
                  <p className="text-accent font-bold text-lg mb-4">
                    {gym.price}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {gym.features.map((f) => (
                      <span
                        key={f}
                        className="bg-accent-50 text-accent-700 text-xs font-medium px-3 py-1.5 rounded-full border border-accent-100"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={gym.slug}
                      className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm text-center"
                    >
                      口コミ・詳細を見る
                    </Link>
                    <a
                      href={gym.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm text-center"
                    >
                      公式サイトへ
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={handleRestart}
              className="inline-block border-2 border-gray-300 text-gray-600 hover:border-accent hover:text-accent font-bold py-3 px-8 rounded-lg transition-colors"
            >
              もう一度診断する
            </button>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="py-16 bg-section-bg min-h-[80vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            パーソナルジムコンシェルジュ
          </h1>
          <p className="text-gray-500 text-sm">
            6つの質問に答えるだけで、あなたに最適なジムが見つかります
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              質問 {step + 1} / {totalSteps}
            </span>
            <span className="text-sm font-medium text-accent">
              {Math.round(((step + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-accent h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          key={step}
          className="card-base p-6 sm:p-8"
          style={{
            animation: direction === 'forward'
              ? 'slideInRight 0.3s ease'
              : 'slideInLeft 0.3s ease',
          }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            {currentQuestion.title}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {currentQuestion.subtitle}
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium text-sm sm:text-base ${
                  isSelected(option)
                    ? 'border-accent bg-accent-light text-accent-700 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-accent/50 hover:shadow-sm'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected(option)
                        ? 'border-accent bg-accent'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected(option) && (
                      <span className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handleBack}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                step > 0
                  ? 'text-gray-600 hover:text-accent hover:bg-gray-100'
                  : 'text-transparent pointer-events-none'
              }`}
            >
              戻る
            </button>

            {currentQuestion.multi && (
              <button
                onClick={handleNext}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-8 rounded-lg transition-colors text-sm shadow-sm"
              >
                {step === totalSteps - 1 ? '診断する' : '次へ'}
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
