---
title: Python & pandas for Data Analysts
description: When to use Python and pandas in analyst workflows in Malaysia.
---

# Python & pandas

Python + pandas are ideal when your data is too large or repetitive for manual Excel work.

## When to use it

- Monthly datasets with many CSV files from different agencies
- Need to standardize Malaysian date formats (`dd/mm/yyyy`)
- Need to automate weekly reporting

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

## Malaysia-specific tips

- Check encoding (`utf-8`, `latin-1`) for mixed Bahasa Melayu/English CSV files.
- Normalize state names (example: `W.P. Kuala Lumpur` vs `Kuala Lumpur`).
- Save final outputs in easy-to-share formats (`.xlsx` / dashboard).
