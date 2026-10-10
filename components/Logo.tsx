/*
 * ロゴ（2026-10-10 刷新・施主指示「洗練されたデザインに」）
 *
 * SVGにせずテキストで組んでいる理由: 日本語の字形をSVGに埋めると
 * 環境によって別書体に化ける。Webフォントで確実に出すためHTMLで組む。
 *
 * 色は親から継承する(currentColor)ので、写真の上では白、白地では黒で使える。
 * アクセントの赤だけは固定。
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="inline-flex items-baseline">
        <span
          className="font-bold tracking-[.06em]"
          style={{ fontSize: compact ? 17 : 19 }}
        >
          パーソナルジム
        </span>
        <span
          className="font-bold tracking-[.06em]"
          style={{ fontSize: compact ? 17 : 19 }}
        >
          びより
        </span>
        {/* 唯一の彩度のある色。drtraining のロゴのドットと同じ役割 */}
        <span
          aria-hidden
          className="ml-[3px] inline-block bg-accent"
          style={{ width: compact ? 5 : 6, height: compact ? 5 : 6 }}
        />
      </span>
      <span
        className="font-latin mt-[5px] font-medium opacity-70"
        style={{ fontSize: compact ? 8 : 9, letterSpacing: '.3em' }}
      >
        PERSONAL GYM BIYORI
      </span>
    </span>
  )
}
