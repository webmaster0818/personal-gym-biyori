'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '/#ranking', label: 'ランキング' },
  { href: '/#area', label: 'エリア別' },
  { href: '/#purpose', label: '目的別' },
  { href: '/faq/', label: 'お役立ち' },
];

/*
 * ヘッダー（2026-10-10 刷新）
 *
 * 施主指示「ヘッダーはその写真の一部が溶け込む感じで、サイト名は入れる」。
 * トップでは position:fixed・背景透明で写真の上に重ね、
 * スクロールしてヒーローを抜けたら白地に切り替える。
 * 下層ページは最初から白地（重ねる写真が無いため）。
 */
export default function Header() {
  const pathname = usePathname();
  const onTop = pathname === '/' || pathname === '';
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(!onTop);

  useEffect(() => {
    if (!onTop) { setSolid(true); return; }
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onTop]);

  // メニューを開いている間は必ず読める状態にする
  const dark = solid || menuOpen;

  return (
    <>
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-200 ${
        dark ? 'border-b border-line bg-white text-ink' : 'border-b border-transparent text-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="shrink-0" aria-label="パーソナルジムびより">
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-9 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-[.08em] transition-colors duration-200 ${
                  dark ? 'text-ink-2 hover:text-accent' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <span className={`text-[10px] tracking-[.06em] ${dark ? 'text-ink-3' : 'text-white/60'}`}>
              PRを含みます
            </span>
          </nav>

          <div className="flex items-center gap-3 sm:hidden">
            <span className={`text-[10px] tracking-[.06em] ${dark ? 'text-ink-3' : 'text-white/70'}`}>
              PRを含みます
            </span>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 transition-transform duration-200 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 transition-opacity duration-200 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 transition-transform duration-200 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-white sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-line px-6 py-4 text-[14px] tracking-[.06em] text-ink transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <p className="px-6 py-3 text-[10px] tracking-[.06em] text-ink-3">PRを含みます</p>
        </nav>
      )}
    </header>
    {/* 下層ページは写真に重ねないので、fixedぶんの高さを確保する */}
    {!onTop && <div className="h-16 sm:h-20" aria-hidden />}
    </>
  );
}
