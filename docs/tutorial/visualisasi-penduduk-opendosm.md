---
title: Malaysia Population Visualization from the OpenDOSM API
description: Pull DOSM API data and build a simple population trend chart.
---

# Malaysia Population Visualization from the OpenDOSM API

OpenDOSM provides API endpoints that are suitable for automated data pulling.

## Objektif

- Call an OpenDOSM API endpoint
- Parse JSON ke DataFrame
- Plot population trends

## Step 1: Call the API

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

## Step 2: Basic normalization

```python
df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["value"] = pd.to_numeric(df["value"], errors="coerce")
df = df.dropna(subset=["date", "value", "state"])
```

## Step 3: Plot trends

```python
sample = df[df["state"].isin(["Selangor", "Johor", "Sabah"])]
for state, g in sample.groupby("state"):
    plt.plot(g["date"], g["value"], label=state)

plt.title("Population Trends by State")
plt.xlabel("Year")
plt.ylabel("Population")
plt.legend()
plt.tight_layout()
plt.show()
```

## Important notes

- Dataset endpoints may change; keep a fallback endpoint in your notebook.
- API docs can be minimal, so check the `payload` structure before automation.
