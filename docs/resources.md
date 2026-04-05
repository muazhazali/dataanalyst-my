---
title: Resources
description: A simple, single-page resource hub for data analytics in Malaysia.
---

# Resources

This page is a simplified all-in-one guide for learning and practicing data analytics in Malaysia.

## Start Here (Simple Path)

1. Learn SQL fundamentals.
2. Learn Python + pandas basics.
3. Build one dashboard in Power BI.
4. Complete one project using Malaysian public data.
5. Publish your work in a portfolio.

## Core Tools

### SQL
- Use for querying, joins, aggregations, and reporting.
- Must-have for almost every analyst role.

### Python + pandas
- Use for cleaning data, automation, repeatable workflows, and ad-hoc analysis.
- Especially useful when CSV files are too large or too messy for Excel.

### Power BI
- Use for management reporting and interactive dashboards.
- Typical page flow: executive summary, trend, breakdown, definitions.

## Malaysian Data Sources

- [data.gov.my](https://data.gov.my/) - cross-agency open data catalog.
- [OpenDOSM](https://open.dosm.gov.my/) - population, labor, CPI, trade, and GDP datasets.
- [Bank Negara Malaysia (BNM)](https://www.bnm.gov.my/) - monetary statistics and exchange rates.
- Other useful sources: Bursa Malaysia, MET Malaysia, Penang Institute, and GitHub/Kaggle community datasets.

## Practical Project Ideas

### 1) Goods Price Analysis (KPDN data)
- Pull goods price data from `data.gov.my`.
- Clean date and currency formats.
- Compare mean/median prices by state.
- Share a short write-up with business insights.

### 2) Malaysia Population Trend (OpenDOSM API)
- Pull data from the OpenDOSM API.
- Parse JSON into a DataFrame.
- Plot trends by selected states.
- Highlight any outliers or major shifts.

## SQL Quick Reference

```sql
SELECT col1, col2
FROM table_name
WHERE condition
GROUP BY col1
HAVING COUNT(*) > 10
ORDER BY col2 DESC
LIMIT 100;
```

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

## Career Snapshot (Malaysia)

- Common hiring sectors: banking/fintech, telco, GLCs/public sector digital teams, e-commerce, startups.
- Typical progression:
  - Junior: RM3,000 - RM5,000
  - Mid-level (3-5 years): RM5,500 - RM9,000
  - Senior/Lead: RM9,000 - RM15,000+
- Most requested skills: SQL, dashboarding, Python automation, and clear business storytelling.

## BM-English Mini Glossary

| English Term | BM Term |
| --- | --- |
| Data Wrangling | Pembersihan dan Penyusunan Data |
| Feature Engineering | Kejuruteraan Ciri |
| Outlier | Nilai Terpencil |
| Forecasting | Peramalan |
| Time Series | Siri Masa |
| Dashboard | Papan Pemuka |

## Community

- Data Science Malaysia
- Python Malaysia
- R User Group Malaysia
- University data clubs
- Local Meetup/Telegram/Discord groups

## Keep It Simple

If you only do three things this month:
1. Finish one SQL practice set.
2. Complete one Python data-cleaning notebook.
3. Publish one dashboard or project summary.
