import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パーソナルジムコンシェルジュ｜条件に合うジムを診断",
  description:
    "6つの質問に回答いただくと、条件に合うパーソナルジムをご紹介します。",
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
        "name": "パーソナルジムコンシェルジュ｜条件に合うジムを診断",
        "url": "https://personal-gym-biyori.com/concierge/",
        "description": "6つの質問に回答いただくと、条件に合うパーソナルジムをご紹介します。"
      }) }} />
      {children}
    </>
  );
}
