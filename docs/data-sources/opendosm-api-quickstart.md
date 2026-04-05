---
title: OpenDOSM API Quickstart
description: Quickstart for pulling OpenDOSM data programmatically.
---

# OpenDOSM API Quickstart

## What you get

- Consistent endpoints for several key DOSM datasets
- Easy integration with Python or BI tools

## Quick test with Python

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

## Pre-production checklist

- Save the endpoint version you are using
- Log response metadata (status code, timestamp, rows)
- Add retry + timeout
- Prepare a fallback for API downtime

## Next references

- [OpenDOSM population visualization tutorial](/tutorial/visualisasi-penduduk-opendosm)
- [Malaysia Data Sources](/data-sources/)
