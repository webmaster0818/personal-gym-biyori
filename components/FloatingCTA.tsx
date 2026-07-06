'use client';

import { usePathname } from 'next/navigation';
import { AFFILIATES } from '@/lib/affiliates';

// D1: 文脈対応の固定CTA。提携ブランドのレビュー配下=そのジムの無料カウンセリング/それ以外=診断
export default function FloatingCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith('/concierge')) return null;

  const m = pathname?.match(/^\/review\/([^/]+)/);
  const slug = m?.[1];
  const aff = slug ? AFFILIATES[slug] : undefined;

  if (aff) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
        <a
          href={aff}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-colors text-sm"
        >
          無料カウンセリングを予約する（公式）
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
      <a
        href="/concierge/"
        className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-colors text-sm"
      >
        まずはパーソナルジム診断で選ぶ
      </a>
    </div>
  );
}
