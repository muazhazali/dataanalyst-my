# Contributing to dataanalyst.my

Thanks for helping build a Malaysian-first data analytics resource.

## Content frontmatter template

Use this template at the top of every new markdown page:

```md
---
title: "Your Resource Title"
category: tools | tutorial | datasource | career | cheatsheet | glossary | learning-path | community
tags: ["python", "beginner", "dosm"]
author: "Your Name"
date: 2026-04-05
---
```

## Quality checklist

- Content is relevant to Malaysian learners or practitioners.
- Links are valid and not broken.
- Steps are reproducible and clear for beginners.
- Code snippets are minimal and runnable.
- Terms are clear (BM-English when helpful).

## Contribution flow

1. Fork repository
2. Create branch: `feature/your-topic`
3. Add or update markdown file under `docs/`
4. Run local checks:
   - `pnpm install`
   - `pnpm docs:build`
5. Submit pull request with:
   - What changed
   - Why this helps Malaysian data community
   - Any source links used

## Editorial notes

- Maintain practical tone over theoretical depth.
- Prefer real Malaysian datasets over generic toy datasets.
- Avoid adding gated or pirated resources.

## Package manager policy

- This repo is `pnpm`-only.
- Do not commit `package-lock.json` or use `npm install`.
- Use `pnpm install` to add/update dependencies and lockfile.
