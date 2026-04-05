---
title: SQL Quick Reference
description: Query SQL paling kerap digunakan oleh analyst.
---

# SQL Quick Reference

## Top clauses

```sql
SELECT col1, col2
FROM table_name
WHERE condition
GROUP BY col1
HAVING COUNT(*) > 10
ORDER BY col2 DESC
LIMIT 100;
```

## Window function pattern

```sql
SELECT
  customer_id,
  trx_date,
  amount_rm,
  SUM(amount_rm) OVER (
    PARTITION BY customer_id
    ORDER BY trx_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total_rm
FROM transactions;
```

## Date filter safe pattern

```sql
WHERE trx_date >= DATE '2026-01-01'
  AND trx_date < DATE '2026-02-01'
```
