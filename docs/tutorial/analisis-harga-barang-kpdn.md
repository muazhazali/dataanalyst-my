---
title: Goods Price Analysis Using KPDN Data
description: A tutorial for cleaning and analyzing goods price data from data.gov.my.
---

# Goods Price Analysis Using KPDN Data

This tutorial shows a real-world workflow for government datasets that are sometimes inconsistent.

## Objektif

- Import goods price CSV data from data.gov.my
- Clean date and price formats
- Compare average prices by state

## Step 1: Download the data

1. Find the KPDN goods price dataset on data.gov.my
2. Save the file as `data/harga_barang.csv`

## Step 2: Basic cleaning

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

## Step 3: Initial insights

```python
insight = (
    df.groupby("negeri", dropna=False)["harga"]
    .agg(["mean", "median", "count"])
    .sort_values("mean", ascending=False)
)
print(insight.head(10))
```

## Common pitfalls (Malaysia edition)

- Mixed date formats: `dd/mm/yyyy` and `yyyy-mm-dd`
- Inconsistent currency symbols (`RM`, `MYR`, empty values)
- State names with inconsistent spellings/abbreviations
