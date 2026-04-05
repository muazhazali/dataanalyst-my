---
title: Visualisasi Data Penduduk Malaysia dari OpenDOSM API
description: Ambil data API DOSM dan bina visual ringkas untuk trend populasi.
---

# Visualisasi Data Penduduk Malaysia dari OpenDOSM API

OpenDOSM menyediakan API yang sesuai untuk data pulling automatik.

## Objektif

- Panggil endpoint API OpenDOSM
- Parse JSON ke DataFrame
- Plot trend populasi

## Langkah 1: Call API

```python
import requests
import pandas as pd
import matplotlib.pyplot as plt

url = "https://api.data.gov.my/data-catalogue?id=population_state"
res = requests.get(url, timeout=30)
res.raise_for_status()
payload = res.json()
df = pd.DataFrame(payload)
```

## Langkah 2: Normalisasi asas

```python
df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["value"] = pd.to_numeric(df["value"], errors="coerce")
df = df.dropna(subset=["date", "value", "state"])
```

## Langkah 3: Plot trend

```python
sample = df[df["state"].isin(["Selangor", "Johor", "Sabah"])]
for state, g in sample.groupby("state"):
    plt.plot(g["date"], g["value"], label=state)

plt.title("Trend Penduduk Mengikut Negeri")
plt.xlabel("Tahun")
plt.ylabel("Populasi")
plt.legend()
plt.tight_layout()
plt.show()
```

## Nota penting

- Endpoint dataset boleh berubah; simpan fallback endpoint dalam notebook.
- Dokumentasi API sering ringkas, jadi semak struktur `payload` sebelum automation.
