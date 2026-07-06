import Link from "next/link";
import { affiliateFor } from "@/lib/affiliates";

// D1: レビュー内CTA。提携ブランド=A8無料カウンセリング/未提携=診断+比較導線
export default function GymCta({ slug, name, variant = "mid" }: { slug: string; name: string; variant?: "top" | "mid" }) {
  const aff = affiliateFor(slug);
  if (aff) {
    return (
      <div className="my-6 rounded-xl border border-orange-200 bg-orange-50 p-5 text-center">
        <p className="font-bold text-slate-900 mb-1">{name}が気になったら、まずは無料カウンセリング</p>
        <p className="text-xs text-slate-500 mb-3">体組成測定＋プロへの相談が無料。しつこい勧誘の報告が少ないのも確認済みです</p>
        <a href={aff} target="_blank" rel="noopener noreferrer sponsored nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-sm">
          {name}の無料カウンセリングを予約する
        </a>
        <p className="text-[10px] text-slate-400 mt-2">※広告リンクを含みます</p>
      </div>
    );
  }
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="font-bold text-slate-900 mb-1">{name}と他のジム、どっちが合う？</p>
      <p className="text-xs text-slate-500 mb-3">目的・予算・エリアの3問でぴったりのジムを絞り込めます</p>
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <Link href="/concierge/" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">パーソナルジム診断で比較する</Link>
        <Link href="/price/" className="inline-block border-2 border-slate-300 hover:border-slate-500 text-slate-700 font-bold py-3 px-6 rounded-lg transition-colors text-sm">料金で比較する</Link>
      </div>
    </div>
  );
}
