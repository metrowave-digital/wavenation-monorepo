# 🌍 Environment Variables Guide

**Project:** WaveNation Monorepo  
**Applies To:** Web, CMS, Mobile, TV, Packages

---

## 📦 Environment Files

| File                | Purpose                                |
| ------------------- | -------------------------------------- |
| `.env.local`        | Local overrides for all environments   |
| `.env.development`  | Default values for dev builds          |
| `.env.production`   | Production values (Hostinger / Render) |
| `apps/*/.env.local` | Optional per-app overrides             |

---

## ⚙️ Core Variables

| Variable                | Description                                    | Used In         | Example                                 |
| ----------------------- | ---------------------------------------------- | --------------- | --------------------------------------- |
| `NODE_ENV`              | Environment mode (`development`, `production`) | All             | `development`                           |
| `DATABASE_URL`          | PostgreSQL connection string                   | CMS             | `postgresql://user:pass@neon.tech/db`   |
| `CMS_URL`               | Base URL for Payload CMS                       | Web, API Client | `https://cms.wavenation.online`         |
| `NEXT_PUBLIC_API_URL`   | Public GraphQL API endpoint                    | Web             | `https://api.wavenation.online/graphql` |
| `NEXT_PUBLIC_SITE_NAME` | Branding for UI                                | Web             | `WaveNation`                            |
| `AUTH0_DOMAIN`          | Auth0 domain                                   | Web, CMS        | `wavenation.us.auth0.com`               |
| `AUTH0_CLIENT_ID`       | Auth0 app client ID                            | Web             | `abc123XYZ`                             |
| `AUTH0_SECRET`          | Auth0 app secret                               | CMS, Server     | `super_secret_key`                      |
| `AWS_S3_BUCKET`         | Storage bucket name                            | CMS, API        | `wavenation-media`                      |
| `AWS_REGION`            | S3 region                                      | CMS, API        | `us-east-1`                             |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Stream account                      | Web, CMS        | `xxxxxx`                                |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API token                           | CMS, Deploy     | `cf_api_token_here`                     |

---

## 🔐 Security Tips

- Never commit `.env` files to Git.
- Use `.env.example` (no secrets) to share structure with team.
- Always prefix frontend variables with `NEXT_PUBLIC_`.
- For Hostinger, add env variables directly via the VPS **Environment panel** or `~/.bashrc`.

---

## 💡 Example `.env.local`

```bash
# General
NODE_ENV=development

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
CMS_URL=http://localhost:3001
DATABASE_URL=postgres://user:password@localhost:5432/wavenation

# Auth
AUTH0_DOMAIN=wavenation.eu.auth0.com
AUTH0_CLIENT_ID=abc123
AUTH0_SECRET=mysecretkey

# Storage
AWS_S3_BUCKET=wavenation-media
AWS_REGION=us-east-1
CLOUDFLARE_ACCOUNT_ID=xxxxxx
CLOUDFLARE_API_TOKEN=xxxxxx
```
