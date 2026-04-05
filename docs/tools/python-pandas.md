---
title: Python & pandas untuk Data Analyst
description: Bila perlu guna Python dan pandas dalam kerja analyst di Malaysia.
---

# Python & pandas

Python + pandas sesuai bila data anda terlalu besar/berulang untuk manual Excel.

## Bila patut guna

- Dataset bulanan banyak fail CSV daripada agensi berbeza
- Perlu standardkan format tarikh Malaysia (`dd/mm/yyyy`)
- Perlu automasi laporan mingguan

## Starter workflow

```python
import pandas as pd

df = pd.read_csv("harga_barang.csv", encoding="utf-8")
df["tarikh"] = pd.to_datetime(df["tarikh"], dayfirst=True, errors="coerce")
df["harga"] = pd.to_numeric(df["harga"], errors="coerce")

summary = (
    df.groupby("negeri", dropna=False)["harga"]
      .mean()
      .sort_values(ascending=False)
)
print(summary.head(10))
```

## Tip Malaysia

- Semak encoding (`utf-8`, `latin-1`) untuk CSV campuran BM/English.
- Gunakan normalisasi nama negeri (contoh: `W.P. Kuala Lumpur` vs `Kuala Lumpur`).
- Simpan hasil akhir ke format yang mudah dikongsi (`.xlsx` / dashboard).
