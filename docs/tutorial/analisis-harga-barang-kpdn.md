---
title: Analisis Harga Barang Menggunakan Data KPDN
description: Tutorial membersihkan dan menganalisis data harga barang dari data.gov.my.
---

# Analisis Harga Barang Menggunakan Data KPDN

Tutorial ini menunjukkan aliran kerja real-world untuk data kerajaan yang kadang kala tidak konsisten.

## Objektif

- Import CSV harga barang dari data.gov.my
- Bersihkan format tarikh dan harga
- Bandingkan harga purata mengikut negeri

## Langkah 1: Muat turun data

1. Cari dataset harga barang KPDN di portal data.gov.my
2. Simpan fail sebagai `data/harga_barang.csv`

## Langkah 2: Cleaning asas

```python
import pandas as pd

df = pd.read_csv("data/harga_barang.csv", encoding="utf-8")
df.columns = [c.strip().lower() for c in df.columns]
df["tarikh"] = pd.to_datetime(df["tarikh"], dayfirst=True, errors="coerce")
df["harga"] = (
    df["harga"]
    .astype(str)
    .str.replace("RM", "", regex=False)
    .str.replace(",", "", regex=False)
)
df["harga"] = pd.to_numeric(df["harga"], errors="coerce")
df = df.dropna(subset=["tarikh", "harga", "negeri"])
```

## Langkah 3: Insight awal

```python
insight = (
    df.groupby("negeri", dropna=False)["harga"]
    .agg(["mean", "median", "count"])
    .sort_values("mean", ascending=False)
)
print(insight.head(10))
```

## Pitfall biasa (Malaysia edition)

- Tarikh campur `dd/mm/yyyy` dan `yyyy-mm-dd`
- Simbol mata wang tidak konsisten (`RM`, `MYR`, kosong)
- Nama negeri berbeza ejaan/singkatan
