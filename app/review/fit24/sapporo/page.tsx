import type { Metadata } from "next";
import Fit24AreaPage from "@/components/Fit24AreaPage";

export const metadata: Metadata = {
  title: "FIT24 札幌エリアの店舗（札幌西岡店・狸小路2丁目店ほか全5店舗）｜住所・月会費・営業時間【公式確認】",
  description:
    "FIT24 札幌エリアの店舗（札幌西岡店・狸小路2丁目店ほか全5店舗）の住所・アクセス・営業時間・電話番号・月会費を、FIT24公式の店舗ページで確認して掲載しています。",
};

export default function Page() {
  return <Fit24AreaPage slug="sapporo" />;
}
