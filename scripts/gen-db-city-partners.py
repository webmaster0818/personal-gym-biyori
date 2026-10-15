#!/usr/bin/env python3
"""/db/<都市>/ に出す「この都市に店舗がある提携ブランド」を作る（2026-10-15）。

  python3 scripts/gen-db-city-partners.py <gym-noindex-YYYYMMDD.tsv>
  → data/db-city-partners.json

根拠にするのは提携16ブランドの店舗ページ（app/review/<brand>/<store>/page.tsx）のうち、
10/15 の公式店舗一覧との全件照合で not_found / uncertain になったもの（TSV に載っている店舗）を除いた
「公式で存在を確認済み」の店舗だけ。所在地は店舗ページの基本情報（エリア）の市区名で判定する。
Googleマップの検索結果（data/gym-db）は公式の確認ではないので根拠にしない。
"""
import csv
import glob
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PARTNERS = [
    ("beyond", "BEYOND（ビヨンド）"), ("rizap", "RIZAP（ライザップ）"), ("furdi", "FURDI（ファディー）"),
    ("habit", "HABIT PERSONAL GYM（ハビット）"), ("nexus", "Nexusジム"), ("calorie-trade", "CALORIE TRADE JAPAN"),
    ("rita-style", "RITA STYLE（リタスタイル）"), ("lexer", "ReXeR（レクサー）"), ("exe", "EXE（エグゼ）"),
    ("vase", "VASE（ベイス）"), ("cocodakara", "CoCoDakara Body Design"), ("laststyle", "Lastyle（ラスタイル）"),
    ("plez", "プレズ（Plez）"), ("fit24", "FiT24（フィット24）"), ("apple-gym", "Apple GYM（アップルジム）"),
    ("rat", "パーソナルジムRat（ラット）"),
]

# /db/<slug>/ と店舗所在地の市区名の対応
CITY = {
    "chiba": "千葉市", "shibuya": "渋谷区", "ikebukuro": "豊島区", "shinjuku": "新宿区", "yokohama": "横浜市",
    "kawasaki": "川崎市", "osaka": "大阪市", "nagoya": "名古屋市", "kyoto": "京都市", "kobe": "神戸市",
    "fukuoka": "福岡市", "hiroshima": "広島市", "sapporo": "札幌市", "sendai": "仙台市", "saitama": "さいたま市",
    "niigata": "新潟市", "okayama": "岡山市", "kumamoto": "熊本市", "kagoshima": "鹿児島市", "naha": "那覇市",
    "shizuoka": "静岡市", "kanazawa": "金沢市", "matsuyama": "松山市", "takamatsu": "高松市",
    "utsunomiya": "宇都宮市", "nara": "奈良市", "gifu": "岐阜市", "otsu": "大津市", "wakayama": "和歌山市",
    "oita": "大分市", "nagasaki": "長崎市", "toyama": "富山市", "tsu": "津市", "mito": "水戸市",
    "maebashi": "前橋市", "morioka": "盛岡市", "nagano": "長野市", "saga": "佐賀市", "akita": "秋田市",
    "aomori": "青森市", "fukui": "福井市", "fukushima": "福島市", "yamagata": "山形市", "kochi": "高知市",
    "tottori": "鳥取市", "tokushima": "徳島市", "kofu": "甲府市", "matsue": "松江市", "yamaguchi": "山口市",
}


def main():
    tsv = sys.argv[1]
    excluded = {r["path"]: r["verdict"] for r in csv.DictReader(open(tsv, encoding="utf-8"), delimiter="\t")}
    out = {k: [] for k in CITY}
    for brand, bname in PARTNERS:
        per_city = {}
        for f in sorted(glob.glob(str(ROOT / f"app/review/{brand}/*/page.tsx"))):
            src = Path(f).read_text(encoding="utf-8")
            path = "/" + str(Path(f).relative_to(ROOT / "app").parent) + "/"
            if path in excluded:
                continue
            name = re.search(r'label: "店舗名", value: "([^"]*)"', src)
            area = re.search(r'label: "(?:エリア|住所)", value: "([^"]*)"', src)
            if not (name and area):
                continue
            a = area.group(1).split("（")[0]
            for slug, c in CITY.items():
                # 都道府県名の直後か先頭に市区名がある場合だけ（「大津市」に「津市」が当たらないように）
                if re.search(r"(^|[都道府県]|〒[\d-]+\s*\S*?[都道府県])" + re.escape(c), a):
                    per_city.setdefault(slug, []).append({
                        "href": path,
                        "name": name.group(1),
                        "area": a,
                        "indexable": "index: false" not in src,
                    })
                    break
        for slug, stores in per_city.items():
            out[slug].append({"brand": brand, "name": bname, "href": f"/review/{brand}/", "stores": stores})
    dst = ROOT / "data/db-city-partners.json"
    dst.write_text(json.dumps({"generatedAt": "2026-10-15", "basis": "公式店舗一覧との照合(2026-10-15)で存在を確認できた提携ブランドの店舗ページ", "areas": CITY, "cities": out}, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    for slug, v in out.items():
        if v:
            print(slug, [(b["brand"], len(b["stores"])) for b in v])


if __name__ == "__main__":
    main()
