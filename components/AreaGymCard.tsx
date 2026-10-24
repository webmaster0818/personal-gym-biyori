import Link from "next/link";
import { getGymMeta, getGoogleReviewUrl } from "@/lib/gym-metadata";

export type AreaGym = {
  name: string;
  price: string;
  features: string[];
  access: string;
  point?: string;
  reviewed: boolean;
  storeHref?: string;
  /** 料金の補足（公式表記） */
  priceNote?: string;
  /** 入会金（公式表記） */
  entryFee?: string;
  /** 料金の出典（公式ページ） */
  sourceUrl?: string;
  /** 店舗の出典（公式の店舗一覧） */
  storeListUrl?: string;
  /** 確認日の表記 */
  checkedNote?: string;
  /** 営業時間は店舗ごとに異なり未照合のため表示しない */
  hideHours?: boolean;
};

type Props = {
  gym: AreaGym;
  index: number;
  areaName: string;
};

export default function AreaGymCard({ gym, index, areaName }: Props) {
  const meta = getGymMeta(gym.name);
  const googleUrl = meta
    ? getGoogleReviewUrl(meta.googleMapQuery, areaName)
    : undefined;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* ジムTOPページの画像 */}
      {meta?.image && (
        <div className="relative">
          <img
            src={meta.image}
            alt={`${gym.name} 公式サイト`}
            className="w-full h-44 object-cover object-top"
          />
          <p className="text-[10px] text-gray-400 absolute bottom-1 right-2 bg-white/80 px-1 rounded">
            公式サイトより
          </p>
        </div>
      )}

      <div className="p-5">
        {/* タイトル + レビュー済バッジ */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">
            {index + 1}. {gym.name}
          </h3>
          {gym.reviewed && (
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded shrink-0 ml-2">
              レビュー済
            </span>
          )}
        </div>

        {/* 基本情報テーブル */}
        <div className="text-sm space-y-1.5 mb-3">
          <p className="text-gray-600">
            料金:{" "}
            <span className="font-medium text-gray-800">{gym.price}</span>
          </p>
          {gym.priceNote && <p className="text-xs text-gray-500">{gym.priceNote}</p>}
          {gym.entryFee && (
            <p className="text-gray-600">{gym.entryFee}</p>
          )}
          {meta?.type && (
            <p className="text-gray-600">
              タイプ:{" "}
              <span className="font-medium text-gray-800">{meta.type}</span>
            </p>
          )}
          {!gym.hideHours && meta?.hours && (
            <p className="text-gray-600">
              営業時間:{" "}
              <span className="font-medium text-gray-800">{meta.hours}</span>
            </p>
          )}
        </div>

        {/* 特徴リスト */}
        {gym.features.length > 0 && (
        <ul className="text-sm text-gray-700 space-y-1 mb-3">
          {gym.features.map((f, j) => (
            <li key={j} className="flex items-start gap-2">
              <span className="text-teal-500 shrink-0 mt-0.5">--</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        )}

        {/* アクセス */}
        <p className="text-sm text-gray-600 mb-2">{gym.checkedNote ? "店舗" : "アクセス"}: {gym.access}</p>

        {/* 確認日・出典 */}
        {gym.checkedNote && (
          <p className="text-xs text-gray-500 mb-2">
            {gym.checkedNote}（
            {gym.sourceUrl && (
              <a href={gym.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                料金の出典
              </a>
            )}
            {gym.sourceUrl && gym.storeListUrl && "・"}
            {gym.storeListUrl && (
              <a href={gym.storeListUrl} target="_blank" rel="noopener noreferrer" className="underline">
                店舗一覧
              </a>
            )}
            ）
          </p>
        )}

        {/* おすすめポイント */}
        {gym.point && (
        <div className="bg-gray-50 rounded p-3 mt-3">
          <p className="text-sm text-gray-700">
            <span className="font-medium text-teal-700">おすすめポイント:</span>{" "}
            {gym.point}
          </p>
        </div>
        )}

        {/* Google口コミリンク */}
        {googleUrl && (
          <div className="bg-yellow-50 border border-yellow-100 rounded p-3 mt-3">
            <p className="text-xs text-gray-600 mb-1">
              {areaName}エリアの{gym.name}の口コミ・評判をGoogleマップで確認できます。
            </p>
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal-600 hover:underline font-medium"
            >
              Googleマップで口コミを見る →
            </a>
          </div>
        )}

        {/* CTA導線 */}
        <div className="flex flex-wrap gap-2 mt-4">
          {gym.storeHref && (
            <Link
              href={gym.storeHref}
              className="inline-block text-sm bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              店舗詳細を見る
            </Link>
          )}
          {meta?.reviewHref && (
            <Link
              href={meta.reviewHref}
              className="inline-block text-sm bg-teal-50 text-teal-700 font-medium py-2 px-4 rounded-lg hover:bg-teal-100 transition-colors"
            >
              レビューを見る
            </Link>
          )}
          {meta?.affiliateUrl ? (
            <a
              href={meta.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block text-sm bg-orange-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              無料カウンセリングへ
            </a>
          ) : (
            gym.reviewed && meta?.reviewHref && (
              <Link
                href={meta.reviewHref}
                className="inline-block text-sm text-orange-500 hover:underline font-medium py-2"
              >
                詳細を確認する →
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
