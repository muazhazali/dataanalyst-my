---
title: SQL untuk Analyst Malaysia
description: Query patterns yang paling kerap digunakan untuk reporting.
---

# SQL

SQL masih kemahiran wajib untuk data analyst di bank, telco, GLC, dan startup.

## Query pattern penting

1. Filter by date range
2. Group by segment (negeri, produk, channel)
3. Rolling aggregates untuk trend

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

## Tip kerja sebenar

- Faham perbezaan data warehouse vs transactional DB.
- Simpan query reusable untuk recurring management report.
- Pastikan naming konsisten supaya dashboard mudah maintain.
