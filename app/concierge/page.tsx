'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';

/* ==========================================================================
   Store type & database
   ========================================================================== */

type Store = {
  gymName: string;
  storeName: string;
  slug: string;
  prefecture: string;
  area: string;
  price: string;
  priceCategory: 'budget' | 'mid' | 'premium' | 'luxury';
  hours: string;
  lateNight: boolean;
  features: string[];
  purpose: string[];
  intensity: string[];
  options: string[];
  affiliateUrl?: string;
};

/* --- gym screenshot images ---------------------------------------------- */
const gymImages: Record<string, string> = {
  'BEYOND': '/ss-beyond.jpg',
  'RIZAP': '/ss-rizap.jpg',
  '24/7ワークアウト': '/ss-247workout.jpg',
  'チキンジム': '/ss-chicken-gym.jpg',
  'エクササイズコーチ': '/ss-exercise-coach.jpg',
  'HABIT': '/ss-habit.jpg',
  'FURDI': '/ss-exe.jpg',
  'Nexusジム': '/ss-lexer.jpg',
  'OUTLINE': '/ss-outline.jpg',
  'UNDEUX SUPERBODY': '/ss-undeux.jpg',
  'Dr.トレーニング': '/ss-dr-training.jpg',
  'ASPI': '/ss-exercise-coach.jpg',
  'ビーコンセプト': '/ss-b-concept.jpg',
};

/* --- helper to generate many stores for one brand ----------------------- */
function mkStores(
  gymName: string,
  base: Omit<Store, 'gymName' | 'storeName' | 'slug' | 'prefecture' | 'area'>,
  locations: [string, string, string][], // [prefecture, area, slugSuffix]
): Store[] {
  return locations.map(([prefecture, area, suffix]) => ({
    ...base,
    gymName,
    storeName: `${area}店`,
    slug: suffix,
    prefecture,
    area,
  }));
}

const BEYOND_AFF = 'https://px.a8.net/svt/ejp?a8mat=45E3Q1+1FSQEQ+4AOW+62ENL';
const RIZAP_AFF = 'https://px.a8.net/svt/ejp?a8mat=45E3Q1+EF60AA+3D3Q+6ARKX';
const FURDI_AFF = 'https://t.felmat.net/fmcl?ak=F6058J.1.T101150Z.Q136169A';
const HABIT_AFF = 'https://t.felmat.net/fmcl?ak=D113571.1.L156651H.Q136169A';
const NEXUS_AFF = 'https://t.felmat.net/fmcl?ak=S7941C.1.L119607K.A132329L';

const stores: Store[] = [
  /* ── BEYOND (affiliate, premium) ─────────────────────── */
  ...mkStores('BEYOND', {
    price: '月額8,250円〜 / 回あたり8,800円〜',
    priceCategory: 'premium',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['コンテスト入賞トレーナー', 'ボディメイク特化', '糖質制限なし食事指導'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', 'ストレス発散'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)'],
    affiliateUrl: BEYOND_AFF,
  }, [
    ['東京', '新宿', '/review/beyond/shinjuku/'],
    ['東京', '渋谷', '/review/beyond/shibuya/'],
    ['東京', '池袋', '/review/beyond/ikebukuro/'],
    ['東京', '銀座', '/review/beyond/ginza/'],
    ['東京', '六本木', '/review/beyond/roppongi/'],
    ['東京', '恵比寿', '/review/beyond/ebisu/'],
    ['神奈川', '横浜', '/review/beyond/yokohama/'],
    ['大阪', '梅田', '/review/beyond/umeda/'],
    ['愛知', '名古屋', '/review/beyond/nagoya/'],
  ]),
  /* ── RIZAP (affiliate, luxury) ───────────────────────── */
  ...mkStores('RIZAP', {
    price: '2ヶ月 約38万円〜',
    priceCategory: 'luxury',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['完全個室', '30日間返金保証', '食事管理徹底', '全国100+店舗'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', 'ブライダル準備'],
    intensity: ['ガチで結果を出したい'],
    options: ['食事指導あり', '手ぶらで通える', '完全個室', '返金保証あり', '駅チカ(徒歩5分以内)'],
    affiliateUrl: RIZAP_AFF,
  }, [
    ['東京', '新宿', '/review/rizap/shinjuku/'],
    ['東京', '渋谷', '/review/rizap/shibuya/'],
    ['東京', '池袋', '/review/rizap/ikebukuro/'],
    ['東京', '銀座', '/review/rizap/ginza/'],
    ['神奈川', '横浜', '/review/rizap/yokohama/'],
    ['大阪', '梅田', '/review/rizap/umeda/'],
    ['愛知', '名古屋', '/review/rizap/nagoya/'],
    ['福岡', '天神', '/review/rizap/tenjin/'],
  ]),
  /* ── 24/7ワークアウト (no affiliate, premium) ─────────── */
  ...mkStores('24/7ワークアウト', {
    price: '2ヶ月 約25万円〜',
    priceCategory: 'premium',
    hours: '7:00〜24:00',
    lateNight: true,
    features: ['深夜24時まで営業', '3食食べるダイエット', '完全個室', '全国80+店舗'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '手ぶらで通える', '完全個室', '深夜営業', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/247workout/shinjuku/'],
    ['東京', '渋谷', '/review/247workout/shibuya/'],
    ['東京', '池袋', '/review/247workout/ikebukuro/'],
    ['東京', '銀座', '/review/247workout/ginza/'],
    ['神奈川', '横浜', '/review/247workout/yokohama/'],
    ['大阪', '梅田', '/review/247workout/umeda/'],
    ['愛知', '名古屋', '/review/247workout/nagoya/'],
    ['福岡', '天神', '/review/247workout/tenjin/'],
    ['北海道', '札幌', '/review/247workout/sapporo/'],
  ]),
  /* ── チキンジム (no affiliate, budget) ───────────────── */
  ...mkStores('チキンジム', {
    price: '月額6,800円〜',
    priceCategory: 'budget',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['初心者向け', '手ぶらOK', 'プロテイン付き', '全国34店舗'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消', 'ストレス発散'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['手ぶらで通える', '駅チカ(徒歩5分以内)', '月額制(解約しやすい)'],
  }, [
    ['東京', '新宿', '/review/chicken-gym/shinjuku/'],
    ['東京', '渋谷', '/review/chicken-gym/shibuya/'],
    ['東京', '池袋', '/review/chicken-gym/ikebukuro/'],
    ['大阪', '心斎橋', '/review/chicken-gym/shinsaibashi/'],
    ['愛知', '名古屋', '/review/chicken-gym/nagoya/'],
    ['福岡', '天神', '/review/chicken-gym/tenjin/'],
    ['神奈川', '横浜', '/review/chicken-gym/yokohama/'],
  ]),
  /* ── エクササイズコーチ (no affiliate, budget) ────────── */
  ...mkStores('エクササイズコーチ', {
    price: '月額9,900円〜',
    priceCategory: 'budget',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['1回20分', 'AI自動調整マシン', '手ぶらOK', '全国40+店舗'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['手ぶらで通える', 'AI・マシン主導', '月額制(解約しやすい)', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/exercise-coach/shinjuku/'],
    ['東京', '渋谷', '/review/exercise-coach/shibuya/'],
    ['東京', '池袋', '/review/exercise-coach/ikebukuro/'],
    ['東京', '銀座', '/review/exercise-coach/ginza/'],
    ['大阪', '梅田', '/review/exercise-coach/umeda/'],
    ['愛知', '名古屋', '/review/exercise-coach/nagoya/'],
  ]),
  /* ── HABIT (affiliate, mid) ──────────────────────────── */
  ...mkStores('HABIT', {
    price: '月額29,800円〜',
    priceCategory: 'mid',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['初心者特化', '手ぶらOK', '完全個室', '都内中心'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消', '姿勢改善・腰痛改善'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '手ぶらで通える', '完全個室', '駅チカ(徒歩5分以内)', '月額制(解約しやすい)'],
    affiliateUrl: HABIT_AFF,
  }, [
    ['東京', '渋谷', '/review/habit/shibuya/'],
    ['東京', '恵比寿', '/review/habit/ebisu/'],
    ['東京', '銀座', '/review/habit/ginza/'],
    ['東京', '中目黒', '/review/habit/nakameguro/'],
    ['東京', '神田', '/review/habit/kanda/'],
    ['東京', '白金台', '/review/habit/shirokanedai/'],
    ['大阪', '梅田', '/review/habit/umeda/'],
  ]),
  /* ── FURDI (affiliate, budget, women-only) ───────────── */
  ...mkStores('FURDI', {
    price: '月額7,678円〜',
    priceCategory: 'budget',
    hours: '6:00〜23:00',
    lateNight: true,
    features: ['女性専用', 'AI×サーキット型', '予約不要', '1回30分'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消', 'ストレス発散'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['女性専用/女性トレーナー', 'AI・マシン主導', '月額制(解約しやすい)'],
    affiliateUrl: FURDI_AFF,
  }, [
    ['東京', '新宿', '/review/furdi/shinjuku/'],
    ['東京', '池袋', '/review/furdi/ikebukuro/'],
    ['東京', '品川', '/review/furdi/shinagawa/'],
    ['神奈川', '横浜', '/review/furdi/yokohama/'],
    ['埼玉', '大宮', '/review/furdi/omiya/'],
    ['千葉', '船橋', '/review/furdi/funabashi/'],
    ['大阪', '梅田', '/review/furdi/umeda/'],
  ]),
  /* ── Nexus (affiliate, budget) ───────────────────────── */
  ...mkStores('Nexus', {
    price: '月額18,800円〜',
    priceCategory: 'budget',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['低価格パーソナル', '都度払い対応', '完全個室', '長期継続向き'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消', '筋肥大・ボディメイク'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい', 'まずは体験から'],
    options: ['駅チカ(徒歩5分以内)', '月額制(解約しやすい)', '完全個室'],
    affiliateUrl: NEXUS_AFF,
  }, [
    ['東京', '新宿', '/review/nexus/shinjuku/'],
    ['東京', '渋谷', '/review/nexus/shibuya/'],
    ['東京', '池袋', '/review/nexus/ikebukuro/'],
    ['東京', '上野', '/review/nexus/ueno/'],
    ['神奈川', '横浜', '/review/nexus/yokohama/'],
    ['大阪', '福島', '/review/nexus/osaka-fukushima/'],
  ]),
  /* ── OUTLINE (no affiliate, mid, women-only) ─────────── */
  ...mkStores('OUTLINE', {
    price: '月額9,900円〜',
    priceCategory: 'mid',
    hours: '8:00〜23:00',
    lateNight: true,
    features: ['女性専用', '完全個室', 'ベビーサークル完備', '女性トレーナー'],
    purpose: ['ダイエット・減量', '姿勢改善・腰痛改善', 'ブライダル準備'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい'],
    options: ['食事指導あり', '女性専用/女性トレーナー', '完全個室', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/outline/shinjuku/'],
    ['東京', '渋谷', '/review/outline/shibuya/'],
    ['東京', '池袋', '/review/outline/ikebukuro/'],
    ['東京', '銀座', '/review/outline/ginza/'],
    ['神奈川', '横浜', '/review/outline/yokohama/'],
    ['千葉', '船橋', '/review/outline/funabashi/'],
  ]),
  /* ── UNDEUX SUPERBODY (no affiliate, mid, women-only) ── */
  ...mkStores('UNDEUX SUPERBODY', {
    price: '2ヶ月 約22万円〜',
    priceCategory: 'mid',
    hours: '9:00〜22:00',
    lateNight: false,
    features: ['女性専用', 'ボディメイク特化', '宅配食サービス連携', '食事管理付き'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', 'ブライダル準備'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '女性専用/女性トレーナー', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/undeux/shinjuku/'],
    ['東京', '渋谷', '/review/undeux/shibuya/'],
    ['東京', '銀座', '/review/undeux/ginza/'],
    ['大阪', '梅田', '/review/undeux/umeda/'],
    ['大阪', '心斎橋', '/review/undeux/shinsaibashi/'],
    ['京都', '四条', '/review/undeux/shijo/'],
  ]),
  /* ── Dr.トレーニング (no affiliate, mid) ─────────────── */
  ...mkStores('Dr.トレーニング', {
    price: '1回6,700円〜 / 都度払い',
    priceCategory: 'mid',
    hours: '9:00〜22:00',
    lateNight: false,
    features: ['医学的アプローチ', '都度払い可', '管理栄養士在籍', '都内20+店舗'],
    purpose: ['健康維持・運動不足解消', '姿勢改善・腰痛改善', '筋肥大・ボディメイク'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '恵比寿', '/review/dr-training/ebisu/'],
    ['東京', '中目黒', '/review/dr-training/nakameguro/'],
    ['東京', '渋谷', '/review/dr-training/shibuya/'],
    ['東京', '新宿', '/review/dr-training/shinjuku/'],
  ]),
  /* ── ASPI (no affiliate, budget) ─────────────────────── */
  ...mkStores('ASPI', {
    price: '月額6,600円〜',
    priceCategory: 'budget',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['米国資格保有トレーナー', '科学的トレーニング', '手ぶらOK', '完全予約制'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消', '姿勢改善・腰痛改善'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '手ぶらで通える', '駅チカ(徒歩5分以内)', '月額制(解約しやすい)'],
  }, [
    ['東京', '新宿', '/review/aspi/shinjuku/'],
    ['東京', '渋谷', '/review/aspi/shibuya/'],
    ['東京', '恵比寿', '/review/aspi/ebisu/'],
    ['東京', '池袋', '/review/aspi/ikebukuro/'],
    ['神奈川', '横浜', '/review/aspi/yokohama/'],
    ['大阪', '梅田', '/review/aspi/umeda/'],
  ]),
  /* ── b-concept (no affiliate, mid, women-only) ───────── */
  ...mkStores('b-concept', {
    price: '2ヶ月 約20万円〜',
    priceCategory: 'mid',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['女性専用', '下半身・脚痩せ特化', 'アフターフォロー付き', '完全個室'],
    purpose: ['ダイエット・減量', '姿勢改善・腰痛改善', 'ブライダル準備'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '女性専用/女性トレーナー', '完全個室', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/b-concept/shinjuku/'],
    ['東京', '渋谷', '/review/b-concept/shibuya/'],
    ['東京', '池袋', '/review/b-concept/ikebukuro/'],
    ['東京', '銀座', '/review/b-concept/ginza/'],
    ['大阪', '梅田', '/review/b-concept/umeda/'],
    ['愛知', '名古屋', '/review/b-concept/nagoya/'],
  ]),
];

/* ==========================================================================
   Area data
   ========================================================================== */

const prefectureAreas: Record<string, string[]> = {
  '北海道': ['札幌', '旭川'],
  '宮城': ['仙台'],
  '東京': ['新宿', '渋谷', '池袋', '銀座', '六本木', '品川', '恵比寿', '目黒', '中目黒', '上野', '赤坂', '神田', '白金台', '自由が丘', '町田'],
  '神奈川': ['横浜', '川崎'],
  '埼玉': ['大宮', '浦和'],
  '千葉': ['船橋', '柏'],
  '愛知': ['名古屋', '栄'],
  '大阪': ['梅田', 'なんば', '心斎橋', '天王寺', '福島'],
  '京都': ['四条', '烏丸'],
  '兵庫': ['三宮', '西宮'],
  '広島': ['広島'],
  '福岡': ['天神', '博多'],
};

/* ==========================================================================
   Question options
   ========================================================================== */

const frequencyOpts = ['月4回(週1)', '月8回(週2)', '月12回(週3以上)'];
const dayOpts = ['平日中心', '休日中心', '両方'];
const timeOpts = ['朝(6-10時)', '昼(10-14時)', '夕方(14-18時)', '夜(18-22時)', '深夜(22時以降)'];
const sceneOpts = ['仕事帰り', '休日の空き時間', 'ランチタイム', '在宅勤務の合間', 'その他'];
const purposeOpts = ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消', '姿勢改善・腰痛改善', 'ストレス発散', 'ブライダル準備'];
const intensityOpts = ['ゆるく楽しく', 'しっかり追い込みたい', 'ガチで結果を出したい', 'まずは体験から'];
const budgetOpts = ['月1万円以下', '月1〜3万円', '月3〜5万円', '月5万円以上', '一括20万円以下', '一括20〜40万円', '一括40万円以上'];
const optionOpts = ['食事指導あり', '手ぶらで通える', '完全個室', '女性専用/女性トレーナー', '深夜営業', '駅チカ(徒歩5分以内)', '返金保証あり', 'AI・マシン主導', '月額制(解約しやすい)'];

/* ==========================================================================
   Scoring
   ========================================================================== */

type Answers = {
  prefecture: string;
  area: string;
  frequency: string;
  day: string;
  time: string;
  scene: string;
  purpose: string;
  intensity: string;
  budget: string;
  options: string[];
};

function budgetToPriceCategories(b: string): string[] {
  switch (b) {
    case '月1万円以下': return ['budget'];
    case '月1〜3万円': return ['budget', 'mid'];
    case '月3〜5万円': return ['mid', 'premium'];
    case '月5万円以上': return ['premium', 'luxury'];
    case '一括20万円以下': return ['budget', 'mid'];
    case '一括20〜40万円': return ['mid', 'premium'];
    case '一括40万円以上': return ['premium', 'luxury'];
    default: return ['budget', 'mid', 'premium', 'luxury'];
  }
}

type ScoredStore = Store & { score: number; matchPct: number; reason: string };

function scoreStores(answers: Answers): ScoredStore[] {
  const cats = budgetToPriceCategories(answers.budget);
  const wantsLateNight = answers.time === '深夜(22時以降)' || answers.options.includes('深夜営業');

  const scored = stores.map((s) => {
    let score = 0;
    if (s.prefecture === answers.prefecture) { score += 40; if (s.area === answers.area) score += 25; }
    if (cats.includes(s.priceCategory)) score += 20;
    if (s.purpose.includes(answers.purpose)) score += 15;
    if (s.intensity.includes(answers.intensity)) score += 10;
    if (wantsLateNight && s.lateNight) score += 8;
    score += answers.options.filter((o) => s.options.includes(o)).length * 4;
    return { ...s, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 5);
  const maxScore = Math.max(top[0]?.score ?? 1, 1);

  return top.map((s) => {
    const matchPct = Math.min(99, Math.max(40, Math.round((s.score / maxScore) * 98)));
    return { ...s, matchPct, reason: buildReason(s, answers) };
  });
}

function buildReason(s: Store & { score: number }, a: Answers): string {
  const p: string[] = [];
  const loc = s.area === a.area ? `${a.area}で` : `${s.prefecture}エリアで`;
  const feat = s.features[0] || '充実した指導';
  if (a.purpose === 'ダイエット・減量') p.push(`${loc}ダイエットを始めたいあなたには、${s.gymName}の${feat}がぴったり`);
  else if (a.purpose === '筋肥大・ボディメイク') p.push(`${loc}本格ボディメイクを目指すなら、${s.gymName}の${feat}が最適`);
  else if (a.purpose === 'ブライダル準備') p.push(`${loc}ブライダル準備なら、${s.gymName}の${feat}がおすすめ`);
  else p.push(`${loc}${a.purpose}には${s.gymName}の${feat}が好相性`);
  if (s.lateNight) p.push(`${s.hours}まで営業で仕事帰りでも通えます`);
  if (s.options.includes('駅チカ(徒歩5分以内)')) p.push('駅チカでアクセスも便利');
  if (s.options.includes('手ぶらで通える')) p.push('手ぶらで通えるので荷物の心配も不要');
  if (s.options.includes('食事指導あり')) p.push('食事指導付きで効率的に結果を出せます');
  return p.slice(0, 3).join('。') + '。';
}

/* ==========================================================================
   Component
   ========================================================================== */

const TOTAL_STEPS = 8;

export default function ConciergePage() {
  const [step, setStep] = useState(0); // 0 = welcome
  const [answers, setAnswers] = useState<Answers>({
    prefecture: '',
    area: '',
    frequency: '',
    day: '',
    time: '',
    scene: '',
    purpose: '',
    intensity: '',
    budget: '',
    options: [],
  });
  const [results, setResults] = useState<ScoredStore[] | null>(null);

  const next = useCallback(() => { setStep((s) => s + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  const prev = useCallback(() => { setStep((s) => Math.max(0, s - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const finish = useCallback(() => {
    setResults(scoreStores(answers));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(TOTAL_STEPS + 1);
  }, [answers]);

  const toggleOption = useCallback((opt: string) => {
    setAnswers((prev) => ({
      ...prev,
      options: prev.options.includes(opt)
        ? prev.options.filter((o) => o !== opt)
        : [...prev.options, opt],
    }));
  }, []);

  const subAreas = useMemo(
    () => (answers.prefecture ? prefectureAreas[answers.prefecture] ?? [] : []),
    [answers.prefecture],
  );

  const progressPct = step === 0 ? 0 : Math.min(100, Math.round((step / TOTAL_STEPS) * 100));

  /* --- selection button helper --------------------------------------- */
  const Btn = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
        selected
          ? 'border-teal-500 bg-teal-50 text-teal-800 font-medium ring-1 ring-teal-400'
          : 'border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50/40'
      }`}
    >
      {label}
    </button>
  );

  /* --- card wrapper -------------------------------------------------- */
  const Card = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) => (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mb-5">{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      {children}
    </div>
  );

  /* --- navigation buttons -------------------------------------------- */
  const Nav = ({ canNext, onNext }: { canNext: boolean; onNext?: () => void }) => (
    <div className="flex justify-between mt-6 gap-3">
      {step > 1 && (
        <button type="button" onClick={prev} className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
          戻る
        </button>
      )}
      <button
        type="button"
        disabled={!canNext}
        onClick={onNext ?? next}
        className={`ml-auto px-6 py-2.5 text-sm rounded-lg font-medium transition-colors ${
          canNext
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {step === TOTAL_STEPS ? '診断結果を見る' : '次へ'}
      </button>
    </div>
  );

  /* =================================================================== */
  return (
    <>
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        {/* progress bar */}
        {step > 0 && step <= TOTAL_STEPS && (
          <div className="w-full max-w-lg mx-auto mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>ステップ {step} / {TOTAL_STEPS}</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Step 0: Welcome ──────────────────────────────────── */}
        {step === 0 && (
          <div className="w-full max-w-lg mx-auto text-center py-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              パーソナルジムコンシェルジュ
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
              どのジム・どの店舗が自分に合っているかわからない、そんなあなたにピッタリなジムを上位5つご紹介します。
            </p>
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors shadow-md"
            >
              診断スタート
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* ── Step 1 → renamed Step 2: エリア診断 ──────────────── */}
        {step === 1 && (
          <Card title="エリア診断" subtitle="どのエリアでお探しですか？">
            <p className="text-xs text-gray-400 mb-2">都道府県を選択</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.keys(prefectureAreas).map((pref) => (
                <Btn
                  key={pref}
                  label={pref}
                  selected={answers.prefecture === pref}
                  onClick={() => setAnswers((p) => ({ ...p, prefecture: pref, area: '' }))}
                />
              ))}
            </div>
            {subAreas.length > 0 && (
              <>
                <p className="text-xs text-gray-400 mb-2 mt-4">主要エリアを選択</p>
                <div className="grid grid-cols-3 gap-2">
                  {subAreas.map((a) => (
                    <Btn key={a} label={a} selected={answers.area === a} onClick={() => setAnswers((p) => ({ ...p, area: a }))} />
                  ))}
                </div>
              </>
            )}
            <Nav canNext={!!answers.prefecture && !!answers.area} />
          </Card>
        )}

        {/* ── Step 2 → renamed Step 3: 通う頻度 ───────────────── */}
        {step === 2 && (
          <Card title="通う頻度" subtitle="月あたりの回数・曜日・時間帯を教えてください">
            <p className="text-xs text-gray-400 mb-2">月あたりの回数</p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {frequencyOpts.map((f) => (
                <Btn key={f} label={f} selected={answers.frequency === f} onClick={() => setAnswers((p) => ({ ...p, frequency: f }))} />
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-2">曜日</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {dayOpts.map((d) => (
                <Btn key={d} label={d} selected={answers.day === d} onClick={() => setAnswers((p) => ({ ...p, day: d }))} />
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-2">時間帯</p>
            <div className="grid grid-cols-2 gap-2">
              {timeOpts.map((t) => (
                <Btn key={t} label={t} selected={answers.time === t} onClick={() => setAnswers((p) => ({ ...p, time: t }))} />
              ))}
            </div>
            <Nav canNext={!!answers.frequency && !!answers.day && !!answers.time} />
          </Card>
        )}

        {/* ── Step 3 → renamed Step 4: シーン選択 ──────────────── */}
        {step === 3 && (
          <Card title="シーン選択" subtitle="どんなタイミングで通いますか？">
            <div className="grid grid-cols-1 gap-2">
              {sceneOpts.map((sc) => (
                <Btn key={sc} label={sc} selected={answers.scene === sc} onClick={() => setAnswers((p) => ({ ...p, scene: sc }))} />
              ))}
            </div>
            <Nav canNext={!!answers.scene} />
          </Card>
        )}

        {/* ── Step 4 → renamed Step 5: 利用目的 ───────────────── */}
        {step === 4 && (
          <Card title="利用目的" subtitle="一番の目的を教えてください">
            <div className="grid grid-cols-1 gap-2">
              {purposeOpts.map((pu) => (
                <Btn key={pu} label={pu} selected={answers.purpose === pu} onClick={() => setAnswers((p) => ({ ...p, purpose: pu }))} />
              ))}
            </div>
            <Nav canNext={!!answers.purpose} />
          </Card>
        )}

        {/* ── Step 5 → renamed Step 6: 本気度 ─────────────────── */}
        {step === 5 && (
          <Card title="本気度" subtitle="どのくらいのペースで取り組みたいですか？">
            <div className="grid grid-cols-1 gap-2">
              {intensityOpts.map((it) => (
                <Btn key={it} label={it} selected={answers.intensity === it} onClick={() => setAnswers((p) => ({ ...p, intensity: it }))} />
              ))}
            </div>
            <Nav canNext={!!answers.intensity} />
          </Card>
        )}

        {/* ── Step 6 → renamed Step 7: 料金イメージ ────────────── */}
        {step === 6 && (
          <Card title="料金イメージ" subtitle="ご予算の目安を教えてください">
            <div className="grid grid-cols-1 gap-2">
              {budgetOpts.map((bu) => (
                <Btn key={bu} label={bu} selected={answers.budget === bu} onClick={() => setAnswers((p) => ({ ...p, budget: bu }))} />
              ))}
            </div>
            <Nav canNext={!!answers.budget} />
          </Card>
        )}

        {/* ── Step 7 → renamed Step 8: オプション ──────────────── */}
        {step === 7 && (
          <Card title="オプション" subtitle="あてはまるものを全て選んでください（複数選択可）">
            <div className="grid grid-cols-1 gap-2">
              {optionOpts.map((op) => (
                <Btn key={op} label={op} selected={answers.options.includes(op)} onClick={() => toggleOption(op)} />
              ))}
            </div>
            <Nav canNext onNext={finish} />
          </Card>
        )}

        {/* ── Step 8 → renamed Step 9 (beyond TOTAL): 結果ページ  */}
        {step === TOTAL_STEPS + 1 && results && (
          <div className="w-full max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">あなたにおすすめのジム</h2>
              <p className="text-sm text-gray-500">
                {answers.prefecture} {answers.area}エリア / {answers.purpose} / {answers.intensity}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center">
                <p className="text-lg font-bold text-gray-800 mb-3">該当するジムが見つかりませんでした</p>
                <p className="text-sm text-gray-500 mb-6">選択されたエリアに掲載ジムがない可能性があります。お住まいの住所を入力いただければ、近くのおすすめジムをお探しします。</p>
                <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); alert(`ありがとうございます。${fd.get('address')} 周辺のおすすめジムを後日ご案内いたします。`); }} className="max-w-md mx-auto">
                  <input name="address" type="text" placeholder="例: 東京都世田谷区三軒茶屋1-1-1" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" required />
                  <button type="submit" className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm">送信する</button>
                </form>
                <div className="mt-6">
                  <Link href="/#ranking" className="text-sm text-teal-600 hover:underline">ランキングページから探す</Link>
                </div>
              </div>
            ) : (
            <div className="space-y-5">
              {results.map((r, i) => {
                const isAffiliate = !!r.affiliateUrl;
                return (
                  <div
                    key={`${r.gymName}-${r.storeName}`}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* gym image */}
                    {gymImages[r.gymName] && (
                      isAffiliate && r.affiliateUrl ? (
                        <a href={r.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="block">
                          <img src={gymImages[r.gymName]} alt={`${r.gymName} 公式サイト`} className="w-full h-40 object-cover object-top" />
                        </a>
                      ) : (
                        <Link href={r.slug}>
                          <img src={gymImages[r.gymName]} alt={`${r.gymName} 公式サイト`} className="w-full h-40 object-cover object-top" />
                        </Link>
                      )
                    )}

                    {/* header */}
                    <div className="flex items-center justify-between px-5 pt-5 pb-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-bold text-gray-900 text-base sm:text-lg leading-tight">
                            {r.gymName} {r.storeName}
                          </p>
                          <p className="text-xs text-gray-400">{r.prefecture} {r.area}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 text-sm font-bold px-3 py-1 rounded-full">
                        {r.matchPct}%
                        <span className="text-xs font-normal">マッチ</span>
                      </span>
                    </div>

                    {/* body */}
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-3">
                        {r.reason}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span className="inline-block bg-gray-100 px-2 py-0.5 rounded">料金: {r.price}</span>
                        <span className="inline-block bg-gray-100 px-2 py-0.5 rounded">{r.hours}</span>
                      </div>

                      {/* feature tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {r.features.map((f) => (
                          <span key={f} className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        {isAffiliate ? (
                          <a
                            href={r.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex-1 text-center px-5 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors text-sm"
                          >
                            無料カウンセリングへ
                          </a>
                        ) : (
                          <Link
                            href={r.slug}
                            className="flex-1 text-center px-5 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors text-sm"
                          >
                            詳細を見る
                          </Link>
                        )}
                        <Link
                          href={r.slug}
                          className="flex-1 text-center px-5 py-2.5 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
                        >
                          店舗詳細ページへ
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}

            {/* retry */}
            <div className="text-center mt-8 mb-12">
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setResults(null);
                  setAnswers({
                    prefecture: '', area: '', frequency: '', day: '', time: '',
                    scene: '', purpose: '', intensity: '', budget: '', options: [],
                  });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-sm font-medium"
              >
                もう一度診断する
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
        .animate-fade-in { animation: fadeIn .4s ease-out both }
      `}</style>
    </>
  );
}
