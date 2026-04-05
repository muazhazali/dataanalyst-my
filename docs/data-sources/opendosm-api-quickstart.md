---
title: OpenDOSM API Quickstart
description: Quickstart untuk tarik data OpenDOSM secara programatik.
---

# OpenDOSM API Quickstart

## Apa anda dapat

- Endpoint yang konsisten untuk beberapa dataset utama DOSM
- Integrasi mudah dengan Python atau BI tools

## Quick test dengan Python

```python
import requests
import pandas as pd

url = "https://api.data.gov.my/data-catalogue?id=cpi_headline"
response = requests.get(url, timeout=30)
response.raise_for_status()

records = response.json()
df = pd.DataFrame(records)
print(df.head())
```

## Checklist sebelum production

- Simpan versi endpoint yang digunakan
- Log response metadata (status code, timestamp, rows)
- Tambah retry + timeout
- Sediakan fallback jika API downtime

## Rujukan seterusnya

- [Tutorial visualisasi penduduk OpenDOSM](/tutorial/visualisasi-penduduk-opendosm)
- [Sumber Data Malaysia](/data-sources/)
