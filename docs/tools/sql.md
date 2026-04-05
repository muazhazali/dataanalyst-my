---
title: SQL for Malaysian Analysts
description: Query patterns most often used for reporting.
---

# SQL

SQL is still a required skill for data analysts in banking, telco, GLCs, and startups.

## Key query patterns

1. Filter by date range
2. Group by segment (state, product, channel)
3. Rolling aggregates for trends

```sql
SELECT
  negeri,
  COUNT(*) AS total_transaksi,
  ROUND(AVG(jumlah_rm), 2) AS avg_jumlah_rm
FROM transaksi
WHERE tarikh_transaksi BETWEEN DATE '2026-01-01' AND DATE '2026-03-31'
GROUP BY negeri
ORDER BY total_transaksi DESC;
```

## Practical tips

- Understand the difference between a data warehouse and a transactional DB.
- Save reusable queries for recurring management reports.
- Keep naming conventions consistent so dashboards are easier to maintain.
