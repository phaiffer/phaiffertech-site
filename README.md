# Phaiffer Tech Site

Portfolio and consulting website built with Next.js App Router, TypeScript, Tailwind, and localized routing with `next-intl`.

## Run Locally

```bash
npm ci
npm run dev
```

Open:
- `http://localhost:3000/pt-br`
- `http://localhost:3000/en-us`

The root path (`/`) redirects to `/pt-br`.

## Quality Gates

Run before shipping:

```bash
npm run lint
npm run build
```

## Locale and Translations

Configured locales:
- `pt-br` (default)
- `en-us`

Main i18n files:
- `middleware.ts`
- `src/i18n/routing.ts`
- `src/i18n/request.ts`
- `src/messages/pt-br.json`
- `src/messages/en-us.json`

### Add or Update Translation Keys

1. Add the same key in both message files:
   - `src/messages/pt-br.json`
   - `src/messages/en-us.json`
2. Read values with `getTranslations(...)` (server components) or `useTranslations(...)` (client components).
3. Keep key structure consistent across both locales.

## Route Model

Primary localized routes:
- `/{locale}`
- `/{locale}/engineering`
- `/{locale}/services`
- `/{locale}/products`
- `/{locale}/case-studies`
- `/{locale}/contact`

Engineering case routes:
- `/{locale}/engineering/iot-platform`
- `/{locale}/engineering/enterprise-data-platform`
- `/{locale}/engineering/crm-saas`
- `/{locale}/engineering/petflow`

## Adding Private Case Screenshots

Private case pages use image slots with graceful fallback placeholders.

Expected folders:
- `public/case-studies/iot-system/`
- `public/case-studies/crm-platform/`
- `public/case-studies/petflow/`

Current slot filenames:
- IoT: `overview.png`, `observability.png`
- CRM: `workspace.png`, `access-controls.png`
- PetFlow: `operations.png`, `analytics.png`

If a file is missing, the page shows a neutral placeholder box instead of a broken image.

## Lakehouse Case Study

Homepage and case-study routing include NYC TLC Lakehouse references:
- Repository: `https://github.com/phaiffer/nyc-tlc-lakehouse`
- Runbook: `https://github.com/phaiffer/nyc-tlc-lakehouse/blob/main/docs/runbook.md`
