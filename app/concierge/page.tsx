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
  // --- 既存10社（更新済み） ---
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
    options: ['食事指導あり', '手ぶらで通える', '深夜も営業', '駅チカ'],
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
    budgetMatch: ['3〜5万円（しっかり投資）'],
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
    options: ['手ぶらで通える', '深夜も営業', '女性トレーナー対応', '駅チカ'],
  },
  // --- 追加44社 ---
  {
    name: 'chocoZAP',
    slug: '/review/chocozap/',
    url: 'https://chocozap.jp/',
    tagline: 'RIZAP監修・月額3,278円のコンビニジム',
    price: '月額3,278円',
    features: ['RIZAP監修', '24時間365日', '着替え不要', 'セルフエステ付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['〜1万円（とにかく安く）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['手ぶらで通える', '深夜も営業', 'とにかく低価格', '駅チカ'],
  },
  {
    name: 'Dr.トレーニング',
    slug: '/review/dr-training/',
    url: '#',
    tagline: '医学的根拠に基づくトレーニング',
    price: '1回6,700円〜',
    features: ['医学的アプローチ', '都度払い可', '管理栄養士在籍', '都内20店舗+'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'ELEMENT',
    slug: '/review/element/',
    url: '#',
    tagline: 'マシンピラティス×パーソナル通い放題',
    price: '月額38,280円〜',
    features: ['通い放題', 'マシンピラティス', 'パーソナル融合', '30分セッション'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['駅チカ'],
  },
  {
    name: 'CALORIE TRADE JAPAN',
    slug: '/review/calorie-trade/',
    url: '#',
    tagline: 'ダイエット専門・全国30店舗以上',
    price: '月額24,200円〜',
    features: ['ダイエット専門', '全国30店舗+', '低価格', '食事指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'RITA STYLE',
    slug: '/review/rita-style/',
    url: '#',
    tagline: '九州発・食事指導付き低価格パーソナル',
    price: '2ヶ月156,200円〜',
    features: ['九州発', '食事指導付き', '低価格', '完全個室'],
    areas: ['福岡', 'その他'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'ビーコンセプト',
    slug: '/review/b-concept/',
    url: '#',
    tagline: '下半身・脚痩せ特化の女性専用ジム',
    price: '2ヶ月199,650円〜',
    features: ['下半身特化', '女性専用', '脚痩せメソッド', 'アフターフォロー付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'UNDEUX SUPERBODY',
    slug: '/review/undeux/',
    url: '#',
    tagline: '女性専用・宅配食連携のボディメイク',
    price: '月額60,000円〜',
    features: ['女性専用', 'ボディメイク特化', '宅配食サービス連携', '食事管理付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '大阪'],
    budgetMatch: ['3〜5万円（しっかり投資）', '5万円以上（最高のサービスを）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'THE PERSONAL GYM',
    slug: '/review/the-personal-gym/',
    url: '#',
    tagline: 'ダイエット×ボディメイク特化の都内ジム',
    price: '月額26,400円〜',
    features: ['ダイエット特化', 'ボディメイク', '低価格', '食事指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'Laststyle',
    slug: '/review/laststyle/',
    url: '#',
    tagline: 'ボクシング×パーソナルトレーニング融合',
    price: '月額40,000円〜',
    features: ['ボクシング融合', 'マンツーマン指導', 'ダイエット特化', 'ストレス発散'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'Reprecious',
    slug: '/review/reprecious/',
    url: '#',
    tagline: '女性専用・業界最安級パーソナルジム',
    price: '2ヶ月87,120円〜',
    features: ['女性専用', '低価格', '完全個室', '食事指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '女性トレーナー対応', 'とにかく低価格', '駅チカ'],
  },
  {
    name: 'LALA FIT',
    slug: '/review/lala-fit/',
    url: '#',
    tagline: '女性向け・業界最安級の低価格パーソナル',
    price: '月額15,000円〜',
    features: ['女性向け', '低価格', '短時間集中', 'ダイエット特化'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['とにかく低価格', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'TOKIEL',
    slug: '/review/tokiel/',
    url: '#',
    tagline: '女性専用・美容×フィットネス融合',
    price: '月額28,000円〜',
    features: ['女性専用', '女性トレーナー在籍', '美容×フィットネス', 'ボディメイク'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'fis.lady\'s',
    slug: '/review/fis-ladys/',
    url: '#',
    tagline: '女性専用・関西最安級ダイエット特化',
    price: '月額20,000円〜',
    features: ['女性専用', 'ダイエット特化', '関西最安級', '食事指導込み'],
    areas: ['大阪'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '女性トレーナー対応', 'とにかく低価格'],
  },
  {
    name: 'FURDI',
    slug: '/review/furdi/',
    url: '#',
    tagline: 'AI×女性専用サーキット型フィットネス',
    price: '月額7,678円〜',
    features: ['AI指導', '女性専用', 'サーキット型', '予約不要'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['〜1万円（とにかく安く）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['とにかく低価格', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'カーブス',
    slug: '/review/curves/',
    url: '#',
    tagline: '女性専用30分フィットネス・全国2000店舗',
    price: '月額6,820円〜',
    features: ['女性専用', '30分完結', '予約不要', '全国2,000店舗+'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['〜1万円（とにかく安く）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['とにかく低価格', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'PEACH GYM',
    slug: '/review/peach-gym/',
    url: '#',
    tagline: '女性向けヒップ特化パーソナルジム',
    price: '月額30,000円〜',
    features: ['女性向け', 'お尻特化', '美尻メイク', 'マンツーマン指導'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'RACINE',
    slug: '/review/racine/',
    url: '#',
    tagline: '女性専用・ボディメイク特化パーソナル',
    price: '月額35,000円〜',
    features: ['女性専用', 'ボディメイク特化', '完全個室', '栄養指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '女性トレーナー対応', '駅チカ'],
  },
  {
    name: 'ハコジム',
    slug: '/review/hakogym/',
    url: '#',
    tagline: '完全個室レンタルジム・月額3,800円〜',
    price: '月額3,800円〜',
    features: ['完全個室', 'セルフトレーニング', '低価格', '24時間利用可'],
    areas: ['その他'],
    budgetMatch: ['〜1万円（とにかく安く）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['とにかく低価格', '深夜も営業'],
  },
  {
    name: 'FIT24',
    slug: '/review/fit24/',
    url: '#',
    tagline: '24時間営業・月額3,980円〜のセルフジム',
    price: '月額3,980円〜',
    features: ['24時間営業', 'セルフ型', '低価格', '快活CLUB併設'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川', '大阪', '名古屋', '福岡', 'その他'],
    budgetMatch: ['〜1万円（とにかく安く）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['半年以上（長期継続）'],
    options: ['深夜も営業', 'とにかく低価格', '駅チカ'],
  },
  {
    name: 'Nexusジム',
    slug: '/review/nexus/',
    url: '#',
    tagline: '月額19,800円〜の業界最安級パーソナル',
    price: '月額19,800円〜',
    features: ['格安', '月額制', 'パーソナル指導', '完全個室'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['〜1万円（とにかく安く）', '1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['とにかく低価格', '駅チカ'],
  },
  {
    name: 'スターライトフィットネス',
    slug: '/review/starlight/',
    url: '#',
    tagline: '24時間営業のパーソナルジム',
    price: '月額20,000円〜',
    features: ['24時間営業', '深夜早朝対応', 'セキュリティ完備', '柔軟な予約'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['深夜も営業', '駅チカ'],
  },
  {
    name: 'Alesco',
    slug: '/review/alesco/',
    url: '#',
    tagline: 'リバウンド保証付き・名古屋発パーソナル',
    price: '月額40,000円〜',
    features: ['完全個室', 'リバウンド保証', '食事指導付き', '名古屋中心'],
    areas: ['名古屋'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'リアルボディ',
    slug: '/review/real-body/',
    url: '#',
    tagline: '仙台発・地域密着型パーソナルジム',
    price: '月額20,000円〜',
    features: ['仙台発', '地域密着型', 'リーズナブル', '丁寧なカウンセリング'],
    areas: ['その他'],
    budgetMatch: ['1〜3万円（コスパ重視）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['とにかく低価格', '駅チカ'],
  },
  {
    name: 'ピラティス&ジム1to1',
    slug: '/review/1to1/',
    url: '#',
    tagline: 'ピラティス×パーソナルトレーニング融合',
    price: '月額20,000円〜',
    features: ['ピラティス×筋トレ融合', 'マンツーマン', '姿勢改善', 'ボディメイク'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['駅チカ'],
  },
  {
    name: '4Fのパーソナルジム',
    slug: '/review/4f-gym/',
    url: '#',
    tagline: '隠れ家的空間のプライベートジム',
    price: '月額30,000円〜',
    features: ['隠れ家的空間', 'マンツーマン', 'プライベート感重視', 'アットホーム'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['駅チカ'],
  },
  {
    name: 'ACCEPT',
    slug: '/review/accept/',
    url: '#',
    tagline: '完全個室・月額制パーソナルジム',
    price: '月額30,000円〜',
    features: ['完全個室', '月額制', 'マンツーマン指導', '食事サポートあり'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'ARISANFIT',
    slug: '/review/arisanfit/',
    url: '#',
    tagline: '少人数制・ボディメイク特化パーソナル',
    price: '月額25,000円〜',
    features: ['少人数制', 'ボディメイク特化', '食事指導あり', 'アットホーム'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'ASmake',
    slug: '/review/asmake/',
    url: '#',
    tagline: '姿勢改善×ボディメイクの同時実現',
    price: '月額30,000円〜',
    features: ['姿勢改善×ボディメイク', '根本原因アプローチ', 'マンツーマン', '食事指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'base BODY',
    slug: '/review/base-body/',
    url: '#',
    tagline: 'ボディメイク×コンディショニング融合',
    price: '月額25,000円〜',
    features: ['ボディメイク×コンディショニング', '姿勢改善', 'ストレッチ', '食事指導'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'BBB（トリプルビー）',
    slug: '/review/bbb/',
    url: '#',
    tagline: 'ボディメイク特化・体組成分析つき',
    price: '月額25,000円〜',
    features: ['ボディメイク特化', '体組成分析', '食事指導', '完全個室'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'BELION',
    slug: '/review/belion/',
    url: '#',
    tagline: 'カスタマイズプログラムのパーソナルジム',
    price: '月額40,000円〜',
    features: ['マンツーマン指導', 'カスタマイズプログラム', 'ダイエット対応', '食事指導'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'Bellpha',
    slug: '/review/bellpha/',
    url: '#',
    tagline: '美しいボディライン重視の指導',
    price: '月額30,000円〜',
    features: ['マンツーマン', 'ボディメイク', '食事指導', 'カスタマイズプログラム'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'Carat',
    slug: '/review/carat/',
    url: '#',
    tagline: '都内好立地のオーダーメイドパーソナル',
    price: '月額35,000円〜',
    features: ['マンツーマン', 'オーダーメイド', '都内アクセス良好', '食事指導対応'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'E9th PRIVATE GYM',
    slug: '/review/e9th/',
    url: '#',
    tagline: '完全プライベート空間のパーソナルジム',
    price: '月額40,000円〜',
    features: ['完全プライベート空間', '1対1指導', '高級感のある内装', 'オーダーメイド'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）', '5万円以上（最高のサービスを）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['駅チカ'],
  },
  {
    name: 'LEADING',
    slug: '/review/leading/',
    url: '#',
    tagline: '結果にこだわるモチベーション管理',
    price: '月額35,000円〜',
    features: ['マンツーマン', '結果重視', '食事管理', 'モチベーションサポート'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'レクサー',
    slug: '/review/lexer/',
    url: '#',
    tagline: 'トレーナーの質にこだわるボディメイク',
    price: '2ヶ月180,000円〜',
    features: ['完全個室', 'マンツーマン', '食事指導付き', 'ボディメイク特化'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）', '5万円以上（最高のサービスを）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'Lino U',
    slug: '/review/lino-u/',
    url: '#',
    tagline: 'ライフスタイルに寄り添うパーソナル',
    price: '月額30,000円〜',
    features: ['マンツーマン', 'ライフスタイル重視', '食事指導', '長期サポート'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'メルメイク',
    slug: '/review/melmake/',
    url: '#',
    tagline: '完全個室ボディメイク・食事指導付き',
    price: '月額30,000円〜',
    features: ['完全個室', 'ボディメイク特化', '食事指導付き', 'オーダーメイド'],
    areas: ['東京（新宿・渋谷・池袋）', '大阪', '名古屋'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'more fit',
    slug: '/review/more-fit/',
    url: '#',
    tagline: '初心者に寄り添うパーソナルジム',
    price: '月額25,000円〜',
    features: ['初心者歓迎', 'マンツーマン指導', '丁寧なカウンセリング', '食事指導付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'NINE',
    slug: '/review/nine/',
    url: '#',
    tagline: 'トレーニング×食事指導で結果を出す',
    price: '月額35,000円〜',
    features: ['トレーニング×食事指導', '科学的アプローチ', '完全マンツーマン', 'リバウンド防止'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '大阪'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['1〜2ヶ月（短期集中）', '3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'PLUME',
    slug: '/review/plume/',
    url: '#',
    tagline: 'おしゃれ空間で女性人気のパーソナル',
    price: '月額30,000円〜',
    features: ['おしゃれな空間', '女性人気', 'SNS映え', 'ボディメイク特化'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい', 'しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['駅チカ'],
  },
  {
    name: 'Rays GyM',
    slug: '/review/rays-gym/',
    url: '#',
    tagline: 'トレーナー指名制のパーソナルジム',
    price: '月額30,000円〜',
    features: ['トレーナー指名制', 'マンツーマン指導', '目標別プログラム', '食事サポート'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '横浜・神奈川'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['しっかり追い込みたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'STUDIO KOMPAS',
    slug: '/review/studio-kompas/',
    url: '#',
    tagline: '機能改善・姿勢矯正特化パーソナル',
    price: '月額30,000円〜',
    features: ['機能改善特化', '姿勢矯正', '慢性痛改善', '理学療法士在籍'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['駅チカ'],
  },
  {
    name: 'トリプルM',
    slug: '/review/triple-m/',
    url: '#',
    tagline: 'ボディメイク×メンタルケア融合',
    price: '月額50,000円〜',
    features: ['メンタルケア融合', 'ボディメイク', 'ストレス管理', 'オーダーメイド'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）'],
    budgetMatch: ['3〜5万円（しっかり投資）', '5万円以上（最高のサービスを）'],
    styleMatch: ['しっかり追い込みたい', 'ガチで結果を出したい'],
    durationMatch: ['3〜6ヶ月（じっくり）'],
    options: ['食事指導あり', '駅チカ'],
  },
  {
    name: 'UNDEUX SUPERBODY LIFE',
    slug: '/review/undeux-life/',
    url: '#',
    tagline: 'ライフスタイル向けUNDEUX派生プラン',
    price: '月額20,000円〜',
    features: ['UNDEUX派生', 'ライフスタイル重視', '長期継続型', '食事管理付き'],
    areas: ['東京（新宿・渋谷・池袋）', '東京（銀座・六本木・品川）', '大阪'],
    budgetMatch: ['1〜3万円（コスパ重視）', '3〜5万円（しっかり投資）'],
    styleMatch: ['ゆるく楽しく続けたい'],
    durationMatch: ['3〜6ヶ月（じっくり）', '半年以上（長期継続）'],
    options: ['食事指導あり', '女性トレーナー対応', '駅チカ'],
  },
];

/* ---------- エリア別店舗リンクマッピング ---------- */
const areaStoreLinks: Record<string, Record<string, { label: string; href: string }[]>> = {
  '東京（新宿・渋谷・池袋）': {
    'RIZAP': [{ label: '新宿店', href: '/review/rizap/shinjuku/' }, { label: '渋谷店', href: '/review/rizap/shibuya/' }, { label: '池袋店', href: '/review/rizap/ikebukuro/' }],
    'BEYOND': [{ label: '新宿店', href: '/review/beyond/shinjuku/' }, { label: '渋谷店', href: '/review/beyond/shibuya/' }, { label: '池袋店', href: '/review/beyond/ikebukuro/' }],
    '24/7ワークアウト': [{ label: '新宿店', href: '/review/247workout/shinjuku/' }, { label: '渋谷店', href: '/review/247workout/shibuya/' }, { label: '池袋店', href: '/review/247workout/ikebukuro/' }],
    'チキンジム': [{ label: '池袋店', href: '/review/chicken-gym/ikebukuro/' }],
    'エクササイズコーチ': [{ label: '新宿店', href: '/review/exercise-coach/shinjuku/' }, { label: '渋谷店', href: '/review/exercise-coach/shibuya/' }],
  },
  '東京（銀座・六本木・品川）': {
    'RIZAP': [{ label: '銀座店', href: '/review/rizap/ginza/' }, { label: '六本木店', href: '/review/rizap/roppongi/' }, { label: '品川店', href: '/review/rizap/shinagawa/' }],
    'BEYOND': [{ label: '銀座店', href: '/review/beyond/ginza/' }, { label: '六本木店', href: '/review/beyond/roppongi/' }],
    '24/7ワークアウト': [{ label: '銀座店', href: '/review/247workout/ginza/' }, { label: '六本木店', href: '/review/247workout/roppongi/' }, { label: '品川店', href: '/review/247workout/shinagawa/' }],
  },
  '横浜・神奈川': {
    'RIZAP': [{ label: '横浜店', href: '/review/rizap/yokohama/' }],
    'BEYOND': [{ label: '横浜店', href: '/review/beyond/yokohama/' }],
    '24/7ワークアウト': [{ label: '横浜店', href: '/review/247workout/yokohama/' }],
  },
  '大阪': {
    'RIZAP': [{ label: '梅田店', href: '/review/rizap/umeda/' }, { label: 'なんば店', href: '/review/rizap/namba/' }],
    'BEYOND': [{ label: '梅田店', href: '/review/beyond/umeda/' }, { label: 'なんば店', href: '/review/beyond/namba/' }],
    '24/7ワークアウト': [{ label: 'なんば店', href: '/review/247workout/namba/' }, { label: '梅田店', href: '/review/247workout/umeda/' }],
  },
  '名古屋': {
    'RIZAP': [{ label: '名古屋店', href: '/review/rizap/nagoya/' }],
    'BEYOND': [{ label: '名古屋店', href: '/review/beyond/nagoya/' }],
    '24/7ワークアウト': [{ label: '名古屋店', href: '/review/247workout/nagoya/' }],
  },
  '福岡': {
    'RIZAP': [{ label: '天神店', href: '/review/rizap/fukuoka/' }],
    'BEYOND': [{ label: '福岡天神店', href: '/review/beyond/fukuoka/' }],
    '24/7ワークアウト': [{ label: '天神店', href: '/review/247workout/fukuoka/' }],
  },
};

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

                  {/* 近くの店舗リンク */}
                  {answers[0] && areaStoreLinks[answers[0] as string]?.[gym.name] && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-2">近くの店舗</p>
                      <div className="flex flex-wrap gap-2">
                        {areaStoreLinks[answers[0] as string][gym.name].map((store) => (
                          <Link
                            key={store.href}
                            href={store.href}
                            className="text-sm text-orange-500 hover:underline"
                          >
                            {store.label} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
