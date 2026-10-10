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
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-accent-dark">
        <a
          href={aff}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="flex min-h-[54px] w-full items-center justify-center gap-2 bg-accent px-6 text-[14px] font-bold tracking-[.06em] text-white transition-colors duration-200 hover:bg-accent-dark"
        >
          無料カウンセリングを予約する（公式）
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/15">
      <a
        href="/concierge/"
        className="flex min-h-[54px] w-full items-center justify-center gap-2 bg-ink px-6 text-[14px] font-bold tracking-[.06em] text-white transition-colors duration-200 hover:bg-black"
      >
        まずは無料のジム診断で選ぶ
      </a>
    </div>
  );
}
