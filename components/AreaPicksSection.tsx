import Link from "next/link";
import AreaGymCard from "@/components/AreaGymCard";
import { getAreaPicks, getAreaPickCopy, getAreaDbHref, PRICE_CHECKED_ON } from "@/lib/area-picks";

/** /area/ 各ページの「おすすめ」セクション（掲載件数・見出しはデータから自動生成） */
export default function AreaPicksSection({ slug, areaName }: { slug: string; areaName: string }) {
  const gyms = getAreaPicks(slug);
  const copy = getAreaPickCopy(slug, areaName);
  const dbHref = getAreaDbHref(slug);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500">{copy.heading}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        当ページでは、各ブランド公式サイトの店舗一覧で{areaName}の店舗を確認できたジムのみを掲載しています。料金は公式サイトの表記（税込・税別の表記を含む）のまま記載し、確認日を併記しています。
      </p>
      {gyms.length <= 1 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            2026年10月に主要ブランドの公式店舗一覧を確認した結果、当エリアの店舗を確認できたブランドは{gyms.length}件でした。周辺の店舗は、Googleマップ掲載データをもとにした店舗データベースでご確認いただけます。
          </p>
          <Link href={dbHref} className="inline-block mt-3 text-sm text-teal-700 font-medium underline">
            店舗データベースを見る →
          </Link>
        </div>
      )}
      {gyms.length > 0 && (
        <div className="space-y-6">
          {gyms.map((gym, i) => (
            <AreaGymCard key={gym.name} gym={gym} index={i} areaName={areaName} />
          ))}
        </div>
      )}
      <p className="text-xs text-gray-500 mt-4">
        ※ 料金は{PRICE_CHECKED_ON}、店舗は2026年10月20〜22日に各公式サイトで確認した内容です。店舗・料金・キャンペーンは変更される場合があるため、最新情報は各公式サイトでご確認ください。駅からの所要時間は各店舗の公式ページでご確認ください。
      </p>
    </section>
  );
}
