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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "パーソナルジムコンシェルジュ｜あなたに合ったジムを診断",
        "url": "https://personal-gym-biyori.com/concierge/",
        "description": "6つの質問に答えるだけで、あなたに最適なパーソナルジムが見つかります。"
      }) }} />
      {children}
    </>
  );
}
