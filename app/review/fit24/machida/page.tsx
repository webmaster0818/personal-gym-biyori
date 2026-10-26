import type { Metadata } from "next";
import Fit24AreaPage from "@/components/Fit24AreaPage";

export const metadata: Metadata = {
  title: "FIT24 町田エリアの店舗（町田忠生店）｜住所・月会費・営業時間【公式確認】",
  description:
    "FIT24 町田エリアの店舗（町田忠生店）の住所・アクセス・営業時間・電話番号・月会費を、FIT24公式の店舗ページで確認して掲載しています。",
};

export default function Page() {
  return <Fit24AreaPage slug="machida" />;
}
