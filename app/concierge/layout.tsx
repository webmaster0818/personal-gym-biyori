import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パーソナルジムコンシェルジュ｜あなたに合ったジムを診断",
  description:
    "6つの質問に答えるだけで、あなたに最適なパーソナルジムが見つかります。",
};

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
