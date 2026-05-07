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
  'REXER': '/ss-lexer.jpg',
  'Laststyle': '/ss-laststyle.jpg',
  'MIYAZAKI GYM': '/ss-miyazaki-gym.jpg',
  'element': '/ss-element.jpg',
  'chocozap': '/ss-chocozap.jpg',
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
const CALORIE_TRADE_AFF = 'https://t.felmat.net/fmcl?ak=S9777P.1.F142081F.Q136169A';
const RITA_STYLE_AFF = 'https://t.felmat.net/fmcl?ak=Q8343U.1.31275172.Q136169A';
const REXER_AFF = 'https://t.felmat.net/fmcl?ak=U99728.1.M157545O.Q136169A';
const EXE_AFF = 'https://t.felmat.net/fmcl?ak=H9594M.1.O142710U.Q136169A';
const VASE_AFF = 'https://t.felmat.net/fmcl?ak=I94614.1.91387816.Q136169A';
const COCODAKARA_AFF = 'https://t.felmat.net/fmcl?ak=L10446X.1.C147837Q.Q136169A';
const LASTSTYLE_AFF = 'https://t.felmat.net/fmcl?ak=S3174N.1.E62551G.Q136169A';
const PLEZ_AFF = 'https://t.felmat.net/fmcl?ak=D3361D.1.P68082F.Q136169A';
const FIT24_AFF = 'https://t.felmat.net/fmcl?ak=M11588F.1.Q159605W.Q136169A';

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
  /* ── CALORIE TRADE JAPAN (affiliate, mid) ────────────── */
  ...mkStores('CALORIE TRADE JAPAN', {
    price: '2ヶ月 約20万円〜',
    priceCategory: 'mid',
    hours: '9:00〜22:00',
    lateNight: false,
    features: ['食事指導特化', '名古屋中心に展開', 'ダイエット指導実績豊富', '管理栄養士監修'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)'],
    affiliateUrl: CALORIE_TRADE_AFF,
  }, [
    ['愛知', '名古屋瑞穂', '/review/calorie-trade-japan/mizuho/'],
    ['愛知', '一宮', '/review/calorie-trade-japan/ichinomiya/'],
    ['愛知', '名古屋緑', '/review/calorie-trade-japan/midori/'],
    ['千葉', '松戸', '/review/calorie-trade-japan/matsudo/'],
    ['宮城', '仙台', '/review/calorie-trade-japan/sendai/'],
    ['大分', '別府', '/review/calorie-trade-japan/beppu/'],
    ['沖縄', '宜野湾', '/review/calorie-trade-japan/ginowan/'],
  ]),
  /* ── RITA STYLE (affiliate, budget) ──────────────────── */
  ...mkStores('RITA STYLE', {
    price: '2ヶ月 約16万円〜',
    priceCategory: 'budget',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['九州中心', '食事指導付き低価格', 'ダイエット特化', '完全個室'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '完全個室', '駅チカ(徒歩5分以内)'],
    affiliateUrl: RITA_STYLE_AFF,
  }, [
    ['福岡', '天神', '/review/rita-style/tenjin/'],
    ['福岡', '小倉', '/review/rita-style/kokura/'],
    ['熊本', '熊本', '/review/rita-style/kumamoto/'],
    ['佐賀', '佐賀', '/review/rita-style/saga/'],
    ['長崎', '長崎', '/review/rita-style/nagasaki/'],
    ['岡山', '岡山', '/review/rita-style/okayama/'],
  ]),
  /* ── REXER (affiliate, luxury) ───────────────────────── */
  ...mkStores('REXER', {
    price: '月額15万円〜',
    priceCategory: 'luxury',
    hours: '7:00〜23:00',
    lateNight: true,
    features: ['プレミアム空間', 'オーダーメイドプログラム', '完全個室', 'トップトレーナー'],
    purpose: ['筋肥大・ボディメイク', 'ダイエット・減量', 'ブライダル準備'],
    intensity: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    options: ['食事指導あり', '手ぶらで通える', '完全個室', '駅チカ(徒歩5分以内)'],
    affiliateUrl: REXER_AFF,
  }, [
    ['東京', '西麻布', '/review/rexer/nishiazabu/'],
    ['東京', '渋谷', '/review/rexer/shibuya/'],
    ['東京', '目黒', '/review/rexer/meguro/'],
    ['東京', '赤坂', '/review/rexer/akasaka/'],
    ['東京', '五反田', '/review/rexer/gotanda/'],
    ['大阪', '梅田中津', '/review/rexer/umeda-nakatsu/'],
  ]),
  /* ── EXE (affiliate, mid) ────────────────────────────── */
  ...mkStores('EXE', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['パーソナルトレーニング', '個別プログラム', '丁寧な指導'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)'],
    affiliateUrl: EXE_AFF,
  }, [
    ['東京', '駒沢大学', '/review/exe/komazawa/'],
    ['神奈川', '藤沢', '/review/exe/fujisawa/'],
  ]),
  /* ── VASE (affiliate, mid) ───────────────────────────── */
  ...mkStores('VASE', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['少人数制', 'きめ細かい指導', 'アットホーム'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい'],
    options: ['駅チカ(徒歩5分以内)'],
    affiliateUrl: VASE_AFF,
  }, [
    ['東京', '恵比寿', '/review/vase/ebisu/'],
    ['東京', '目黒', '/review/vase/meguro/'],
  ]),
  /* ── CoCoDakara (affiliate, mid) ─────────────────────── */
  ...mkStores('CoCoDakara', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['完全個室', '食事指導付き', 'マンツーマン指導'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '完全個室', '駅チカ(徒歩5分以内)'],
    affiliateUrl: COCODAKARA_AFF,
  }, [
    ['東京', '渋谷', '/review/cocodakara/shibuya/'],
    ['東京', '新宿', '/review/cocodakara/shinjuku/'],
    ['東京', '池袋', '/review/cocodakara/ikebukuro/'],
  ]),
  /* ── Laststyle (affiliate, mid) ──────────────────────── */
  ...mkStores('Laststyle', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['ボクシング融合', 'ストレス発散', '楽しくトレーニング', 'ダイエット効果大'],
    purpose: ['ダイエット・減量', 'ストレス発散', '筋肥大・ボディメイク'],
    intensity: ['しっかり追い込みたい', 'ゆるく楽しく'],
    options: ['手ぶらで通える', '駅チカ(徒歩5分以内)'],
    affiliateUrl: LASTSTYLE_AFF,
  }, [
    ['東京', '池袋', '/review/laststyle/ikebukuro/'],
    ['東京', '町田', '/review/laststyle/machida/'],
    ['東京', '新宿', '/review/laststyle/shinjuku/'],
    ['東京', '渋谷', '/review/laststyle/shibuya/'],
  ]),
  /* ── Plez (affiliate, budget, online) ────────────────── */
  ...mkStores('Plez', {
    price: '月額2万円〜',
    priceCategory: 'budget',
    hours: 'オンライン（24時間対応）',
    lateNight: true,
    features: ['オンライン専用', '自宅でトレーニング', '食事指導付き', '全国どこでも対応'],
    purpose: ['ダイエット・減量', '健康維持・運動不足解消'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['食事指導あり', '月額制(解約しやすい)'],
    affiliateUrl: PLEZ_AFF,
  }, [
    ['オンライン', '全国対応', '/review/plez/'],
  ]),
  /* ── FIT24 (affiliate, budget) ───────────────────────── */
  ...mkStores('FIT24', {
    price: '月額3,980円〜',
    priceCategory: 'budget',
    hours: '24時間営業',
    lateNight: true,
    features: ['24時間セルフ型', '低価格', 'マシン充実', '好きな時間に通える'],
    purpose: ['健康維持・運動不足解消', 'ストレス発散'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['深夜営業', '月額制(解約しやすい)', 'AI・マシン主導'],
    affiliateUrl: FIT24_AFF,
  }, [
    ['東京', '新宿', '/review/fit24/shinjuku/'],
  ]),
  /* ── MIYAZAKI GYM (no affiliate, mid) ────────────────── */
  ...mkStores('MIYAZAKI GYM', {
    price: '月額3万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['月額制', '有資格トレーナー', '継続しやすい', '丁寧な指導'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)', '月額制(解約しやすい)'],
  }, [
    ['東京', '新宿', '/review/miyazaki-gym/shinjuku/'],
    ['東京', '渋谷', '/review/miyazaki-gym/shibuya/'],
    ['東京', '池袋', '/review/miyazaki-gym/ikebukuro/'],
    ['東京', '目黒', '/review/miyazaki-gym/meguro/'],
    ['東京', '五反田', '/review/miyazaki-gym/gotanda/'],
    ['神奈川', '横浜', '/review/miyazaki-gym/yokohama/'],
    ['神奈川', '川崎', '/review/miyazaki-gym/kawasaki/'],
  ]),
  /* ── カーブス (no affiliate, budget, women-only) ──────── */
  ...mkStores('カーブス', {
    price: '月額6,820円〜',
    priceCategory: 'budget',
    hours: '10:00〜19:00（平日）/ 10:00〜13:00（土）',
    lateNight: false,
    features: ['女性専用', '1回30分', '予約不要', '全国2,000+店舗'],
    purpose: ['健康維持・運動不足解消', 'ダイエット・減量', '姿勢改善・腰痛改善'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['女性専用/女性トレーナー', '月額制(解約しやすい)'],
  }, [
    ['東京', '新宿', '/review/curves/shinjuku/'],
    ['東京', '渋谷', '/review/curves/shibuya/'],
    ['東京', '池袋', '/review/curves/ikebukuro/'],
    ['東京', '銀座', '/review/curves/ginza/'],
    ['神奈川', '横浜', '/review/curves/yokohama/'],
    ['埼玉', '大宮', '/review/curves/omiya/'],
    ['千葉', '船橋', '/review/curves/funabashi/'],
    ['愛知', '名古屋', '/review/curves/nagoya/'],
    ['大阪', '梅田', '/review/curves/umeda/'],
    ['福岡', '福岡', '/review/curves/fukuoka/'],
    ['北海道', '札幌', '/review/curves/sapporo/'],
  ]),
  /* ── element (no affiliate, mid) ─────────────────────── */
  ...mkStores('element', {
    price: '月額3万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['通い放題', '月額制', 'パーソナル指導', '都内中心'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい'],
    options: ['駅チカ(徒歩5分以内)', '月額制(解約しやすい)'],
  }, [
    ['東京', '新宿', '/review/element/shinjuku/'],
    ['東京', '渋谷', '/review/element/shibuya/'],
    ['東京', '池袋', '/review/element/ikebukuro/'],
    ['東京', '銀座', '/review/element/ginza/'],
    ['東京', '恵比寿', '/review/element/ebisu/'],
  ]),
  /* ── chocozap (no affiliate, budget) ─────────────────── */
  ...mkStores('chocozap', {
    price: '月額3,278円',
    priceCategory: 'budget',
    hours: '24時間営業',
    lateNight: true,
    features: ['24時間', 'セルフ型', '超低価格', '全国展開'],
    purpose: ['健康維持・運動不足解消', 'ストレス発散', 'ダイエット・減量'],
    intensity: ['ゆるく楽しく', 'まずは体験から'],
    options: ['深夜営業', '月額制(解約しやすい)', 'AI・マシン主導'],
  }, [
    ['東京', '新宿', '/review/chocozap/shinjuku/'],
    ['東京', '渋谷', '/review/chocozap/shibuya/'],
    ['東京', '池袋', '/review/chocozap/ikebukuro/'],
    ['東京', '銀座', '/review/chocozap/ginza/'],
    ['神奈川', '横浜', '/review/chocozap/yokohama/'],
    ['埼玉', '大宮', '/review/chocozap/omiya/'],
    ['大阪', '梅田', '/review/chocozap/umeda/'],
    ['愛知', '名古屋', '/review/chocozap/nagoya/'],
    ['福岡', '福岡', '/review/chocozap/fukuoka/'],
  ]),
  /* ── THE PERSONAL GYM (no affiliate, mid) ────────────── */
  ...mkStores('THE PERSONAL GYM', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['パーソナルトレーニング', '丁寧な指導', '都内主要駅'],
    purpose: ['ダイエット・減量', '筋肥大・ボディメイク', '健康維持・運動不足解消'],
    intensity: ['しっかり追い込みたい', 'まずは体験から'],
    options: ['食事指導あり', '駅チカ(徒歩5分以内)'],
  }, [
    ['東京', '新宿', '/review/the-personal-gym/shinjuku/'],
    ['東京', '六本木', '/review/the-personal-gym/roppongi/'],
    ['東京', '銀座', '/review/the-personal-gym/ginza/'],
  ]),
  /* ── リプレシャス (no affiliate, mid, women) ──────────── */
  ...mkStores('リプレシャス', {
    price: '月額4万円〜',
    priceCategory: 'mid',
    hours: '10:00〜22:00',
    lateNight: false,
    features: ['女性向け', '埼玉中心', '完全個室', '女性トレーナー'],
    purpose: ['ダイエット・減量', '姿勢改善・腰痛改善', 'ブライダル準備'],
    intensity: ['ゆるく楽しく', 'しっかり追い込みたい'],
    options: ['食事指導あり', '女性専用/女性トレーナー', '完全個室', '駅チカ(徒歩5分以内)'],
  }, [
    ['埼玉', '大宮', '/review/reprecious/omiya/'],
    ['埼玉', '浦和', '/review/reprecious/urawa/'],
    ['埼玉', '川口', '/review/reprecious/kawaguchi/'],
  ]),
];

/* ==========================================================================
   Area data
   ========================================================================== */

const prefectureAreas: Record<string, string[]> = {
  '北海道': ['札幌', '旭川'],
  '宮城': ['仙台'],
  '東京': ['新宿', '渋谷', '池袋', '銀座', '六本木', '品川', '恵比寿', '目黒', '中目黒', '上野', '赤坂', '神田', '白金台', '自由が丘', '町田', '西麻布', '五反田', '駒沢大学'],
  '神奈川': ['横浜', '川崎', '藤沢'],
  '埼玉': ['大宮', '浦和', '川口'],
  '千葉': ['船橋', '柏', '松戸'],
  '愛知': ['名古屋', '栄', '名古屋瑞穂', '一宮', '名古屋緑'],
  '大阪': ['梅田', 'なんば', '心斎橋', '天王寺', '福島', '梅田中津'],
  '京都': ['四条', '烏丸'],
  '兵庫': ['三宮', '西宮'],
  '広島': ['広島'],
  '福岡': ['天神', '博多', '小倉', '福岡'],
  '熊本': ['熊本'],
  '佐賀': ['佐賀'],
  '長崎': ['長崎'],
  '岡山': ['岡山'],
  '大分': ['別府'],
  '沖縄': ['宜野湾'],
  'オンライン': ['全国対応'],
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

/* --- 近隣エリアマッピング（駅・市区町村レベル） --- */
const nearbyAreas: Record<string, string[]> = {
  // 東京 - 山手線西側エリア
  '新宿': ['渋谷', '代々木', '池袋', '中目黒', '恵比寿', '六本木', '赤坂', '西麻布', '五反田'],
  '渋谷': ['新宿', '恵比寿', '中目黒', '目黒', '代々木', '六本木', '西麻布', '駒沢大学', '表参道'],
  '恵比寿': ['渋谷', '中目黒', '目黒', '五反田', '品川', '代官山', '広尾', '六本木'],
  '中目黒': ['恵比寿', '渋谷', '目黒', '代官山', '駒沢大学', '自由が丘'],
  '目黒': ['恵比寿', '中目黒', '五反田', '品川', '白金台', '大井町'],
  '五反田': ['目黒', '品川', '恵比寿', '大崎', '白金台', '大井町'],
  '品川': ['五反田', '目黒', '大井町', '大崎', '田町', '白金台'],
  '池袋': ['新宿', '目白', '大塚', '練馬', '赤羽', '板橋'],
  // 東京 - 山手線東側エリア
  '銀座': ['新橋', '東京', '日本橋', '有楽町', '品川', '六本木', '赤坂', '上野'],
  '上野': ['秋葉原', '銀座', '日暮里', '北千住', '御徒町', '錦糸町'],
  '六本木': ['赤坂', '西麻布', '渋谷', '恵比寿', '銀座', '麻布十番', '広尾'],
  '赤坂': ['六本木', '銀座', '新橋', '溜池山王', '青山', '西麻布', '麻布十番'],
  '西麻布': ['六本木', '渋谷', '赤坂', '恵比寿', '広尾', '麻布十番'],
  '秋葉原': ['上野', '神田', '錦糸町', '銀座', '日本橋'],
  '神田': ['秋葉原', '銀座', '東京', '日本橋', '御茶ノ水'],
  '錦糸町': ['秋葉原', '上野', '北千住', '押上', '亀戸'],
  '北千住': ['上野', '錦糸町', '秋葉原', '綾瀬', '松戸'],
  '白金台': ['目黒', '五反田', '品川', '恵比寿', '白金高輪', '麻布十番'],
  // 東京 - 郊外
  '町田': ['相模大野', '多摩センター', '橋本', '藤沢'],
  '立川': ['国分寺', '八王子', '吉祥寺', '府中'],
  '吉祥寺': ['三鷹', '立川', '荻窪', '中野'],
  '駒沢大学': ['渋谷', '中目黒', '三軒茶屋', '二子玉川', '自由が丘'],
  '練馬': ['池袋', '中野', '板橋', '石神井公園', '大泉学園'],
  // 神奈川
  '横浜': ['川崎', '藤沢', '戸塚', '武蔵小杉', '新横浜', '関内'],
  '川崎': ['横浜', '武蔵小杉', '品川', '五反田', '溝の口'],
  '武蔵小杉': ['川崎', '横浜', '渋谷', '目黒', '溝の口'],
  '藤沢': ['横浜', '大船', '茅ヶ崎', '町田', '戸塚'],
  // 埼玉
  '大宮': ['浦和', '川口', '上尾', '春日部', '所沢', '池袋'],
  '浦和': ['大宮', '川口', '池袋', '赤羽'],
  '川口': ['大宮', '浦和', '赤羽', '池袋', '北千住'],
  // 千葉
  '船橋': ['千葉', '松戸', '柏', '錦糸町', '津田沼'],
  '千葉': ['船橋', '稲毛', '蘇我'],
  '柏': ['松戸', '船橋', '我孫子', '取手'],
  '松戸': ['柏', '船橋', '北千住', '金町'],
  // 愛知
  '名古屋': ['栄', '金山', '名古屋瑞穂', '名古屋緑', '名古屋本郷', '一宮'],
  '栄': ['名古屋', '金山', '大須', '伏見'],
  // 大阪
  '梅田': ['なんば', '心斎橋', '天王寺', '梅田中津', '新大阪'],
  'なんば': ['梅田', '心斎橋', '天王寺', '堺'],
  '心斎橋': ['梅田', 'なんば', '天王寺', '本町'],
  '天王寺': ['なんば', '心斎橋', '梅田'],
  // 京都
  '京都': ['四条', '烏丸', '河原町'],
  // 兵庫
  '三宮': ['元町', '神戸', '芦屋', '西宮'],
  // 福岡
  '天神': ['博多', '薬院', '大濠'],
  '博多': ['天神', '薬院'],
  '小倉': ['博多', '天神'],
  // その他
  '仙台': ['長町', '泉中央'],
  '札幌': ['大通', 'すすきの'],
  '広島': ['本通', '紙屋町'],
};

/* --- 近隣都道府県マッピング --- */
const nearbyPrefectures: Record<string, string[]> = {
  '東京': ['神奈川', '埼玉', '千葉'],
  '神奈川': ['東京', '埼玉', '千葉'],
  '埼玉': ['東京', '神奈川', '千葉'],
  '千葉': ['東京', '神奈川', '埼玉'],
  '愛知': ['大阪', '京都', '兵庫'],
  '大阪': ['京都', '兵庫', '愛知'],
  '京都': ['大阪', '兵庫'],
  '兵庫': ['大阪', '京都'],
  '福岡': ['熊本', '佐賀', '長崎', '大分'],
  '熊本': ['福岡', '佐賀', '長崎', '大分'],
  '佐賀': ['福岡', '熊本', '長崎'],
  '長崎': ['福岡', '佐賀', '熊本'],
  '大分': ['福岡', '熊本'],
  '北海道': ['宮城'],
  '宮城': ['北海道'],
  '広島': ['岡山', '大阪'],
  '岡山': ['広島', '大阪', '兵庫'],
  '沖縄': [],
};

function scoreStores(answers: Answers): ScoredStore[] {
  const cats = budgetToPriceCategories(answers.budget);
  const wantsLateNight = answers.time === '深夜(22時以降)' || answers.options.includes('深夜営業');

  function calcScore(s: Store): number {
    let score = 0;
    if (cats.includes(s.priceCategory)) score += 20;
    if (s.purpose.includes(answers.purpose)) score += 15;
    if (s.intensity.includes(answers.intensity)) score += 10;
    if (wantsLateNight && s.lateNight) score += 8;
    score += answers.options.filter((o) => s.options.includes(o)).length * 4;
    return score;
  }

  const nearAreas = nearbyAreas[answers.area] || [];

  // Step 1: エリア完全一致（同じエリア名）
  const exactArea = stores
    .filter((s) => s.area === answers.area && s.prefecture === answers.prefecture)
    .map((s) => ({ ...s, score: calcScore(s) + 80 }));

  // Step 2: 近隣エリア（駅・市区町村レベルで近い）
  const nearbyAreaStores = stores
    .filter((s) => s.area !== answers.area && nearAreas.includes(s.area))
    .map((s) => ({ ...s, score: calcScore(s) + 55 }));

  // Step 3: 同じ都道府県の他エリア
  const samePref = stores
    .filter((s) => s.prefecture === answers.prefecture && s.area !== answers.area && !nearAreas.includes(s.area))
    .map((s) => ({ ...s, score: calcScore(s) + 30 }));

  // Step 4: 近隣都道府県
  const nearbyPrefs = nearbyPrefectures[answers.prefecture] || [];
  const nearbyPrefStores = stores
    .filter((s) => nearbyPrefs.includes(s.prefecture))
    .map((s) => ({ ...s, score: calcScore(s) + 15 }));

  // Step 5: その他（オンライン含む）
  const others = stores
    .filter((s) => s.prefecture !== answers.prefecture && !nearbyPrefs.includes(s.prefecture))
    .map((s) => ({ ...s, score: calcScore(s) }));

  // エリア優先で結合: 完全一致→近隣駅→同県→近隣県→その他
  let results: (Store & { score: number })[] = [];
  for (const pool of [exactArea, nearbyAreaStores, samePref, nearbyPrefStores, others]) {
    pool.sort((a, b) => b.score - a.score);
    results = [...results, ...pool];
    if (results.length >= 5) break;
  }

  results.sort((a, b) => b.score - a.score);
  const top = results.slice(0, 5);
  const maxScore = Math.max(top[0]?.score ?? 1, 1);

  return top.map((s) => {
    const matchPct = Math.min(99, Math.max(40, Math.round((s.score / maxScore) * 98)));
    return { ...s, matchPct, reason: buildReason(s, answers) };
  });
}

function buildReason(s: Store & { score: number }, a: Answers): string {
  const p: string[] = [];
  const isExact = s.area === a.area && s.prefecture === a.prefecture;
  const isNearby = (nearbyAreas[a.area] || []).includes(s.area);
  const loc = isExact
    ? `${a.area}で`
    : isNearby
    ? `${s.area}（${a.area}から近い）で`
    : s.prefecture === a.prefecture
    ? `${s.area}（${a.area}と同じ${s.prefecture}内）で`
    : `${s.prefecture}${s.area}（${a.prefecture}${a.area}の近隣）で`;
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
