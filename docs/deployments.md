Here is your **complete `docs/deployments.md` file** — formatted, structured, and ready to drop into your `/docs` folder.

I’ve also included **placeholders** for screenshots so you can upload them later.

---

# 📦 **WaveNation Monorepo – Deployment Documentation**

**File:** `/docs/deployments.md`
**Last Updated:** {{DATE}}

---

# 🚀 Deployment Overview

WaveNation uses a **multi-environment, multi-service deployment pipeline**:

| App                        | Platform         | Deployment Method                          |
| -------------------------- | ---------------- | ------------------------------------------ |
| **Web** (`apps/web`)       | **Vercel**       | Automatic Git deployments (main/dev)       |
| **CMS** (`apps/cms`)       | **Render**       | Dockerized deployment + PostgreSQL + S3/R2 |
| **Mobile** (`apps/mobile`) | Local Dev / Expo | Manual builds (EAS)                        |
| **TV Apps** (`apps/tv`)    | Local Build      | Manual (Xcode, Android TV, Roku)           |

This document explains:

* How CI/CD is configured
* How deployments are triggered
* Required environment variables
* Screenshot placeholders for documentation

---

# 🔧 1. CI/CD Architecture

```
.github/workflows
├── deploy-web.yml           # Deploys apps/web to Vercel
├── deploy-cms.yml           # Deploys apps/cms to Render
└── ci.yml                   # Lint, Typecheck, Tests for all PRs
```

Each merge to the protected branches triggers:

### `main` branch

✔ Production deploy
✔ All required checks
✔ Signed commits
✔ PR-only merges

### `dev` branch

✔ Staging deploys
✔ Preview builds
✔ Fast CI checks

---

# 🌐 2. Web App (apps/web) — Vercel Deployment

### 📌 Automatic Deployments

Vercel is connected via:

```
metrowave-digital/wavenation-monorepo
```

**Vercel deploys automatically when:**

* A PR is opened → creates a Preview
* `dev` is updated → Staging Deployment
* `main` is updated → Production Deployment

### 📁 Root Directory

```
apps/web
```

### 🏗 Build Settings

| Setting          | Value                              |
| ---------------- | ---------------------------------- |
| Build Command    | `pnpm run build`                   |
| Install Command  | `pnpm install`                     |
| Output Directory | `.vercel/output` (Next.js default) |
| Node Version     | 22.x                               |

### 🔑 Required Environment Variables

| Key                 | Description                |
| ------------------- | -------------------------- |
| NEXT_PUBLIC_WEB_URL | Web app URL                |
| AUTH0_DOMAIN        | Used for SSO               |
| AUTH0_CLIENT_ID     | —                          |
| AUTH0_CLIENT_SECRET | Stored as encrypted secret |
| GRAPHQL_API_URL     | API endpoint               |

### 📸 **Screenshot Placeholder**

```
![Vercel Project Settings](./images/vercel-settings.png)
```

---

# 🐳 3. CMS App (apps/cms) — Render Deployment

The Payload CMS runs with **Docker** and requires:

* PostgreSQL (Neon/Postgres)
* S3 or R2 Storage
* Render Web Service

### 🐳 Dockerfile Location

```
apps/cms/Dockerfile
```

### ⚙ Render Blueprint

| Setting       | Value                               |
| ------------- | ----------------------------------- |
| Environment   | Node 22                             |
| Start Command | `node server.js`                    |
| Build Command | `npm run build` or `pnpm run build` |
| Health Check  | `/health`                           |
| Disk          | 1GB persistent                      |

### 🔑 Required Environment Variables

| Key                  | Description            |
| -------------------- | ---------------------- |
| PAYLOAD_SECRET       | Required by Payload    |
| DATABASE_URI         | Neon connection string |
| S3_BUCKET            | Bucket name            |
| S3_REGION            | AWS region             |
| S3_ACCESS_KEY_ID     | —                      |
| S3_SECRET_ACCESS_KEY | —                      |
| PUBLIC_WEB_URL       | For auth redirects     |

### 📸 **Screenshot Placeholder**

```
![Render Environment Variables](./images/render-env.png)
```

---

# 🧪 4. CI Pipeline — GitHub Actions

### Pipeline Sequence

1. **Lint**
   `pnpm run lint`

2. **Typecheck**
   `pnpm run typecheck:full`

3. **Tests**
   `pnpm run test`

4. **Build Verification**
   TurboRepo ensures build works before deployment

### Required Status Checks (protecting main/dev)

| Check      | Description           |
| ---------- | --------------------- |
| Lint       | `turbo run lint`      |
| TypeScript | `turbo run typecheck` |
| Tests      | `turbo run test`      |

### 📸 **Screenshot Placeholder**

```
![GitHub Protection Rules](./images/github-protection-rules.png)
```

---

# 🔗 5. Deployment Triggers

### ✔ Push to `main`

→ Production deployment (Vercel + Render)

### ✔ Push to `dev`

→ Staging deployment (Vercel Preview)

### ✔ PR opened

→ Vercel Preview URL posted in comments

### ✔ Manually

From Vercel or Render dashboard

### ✔ Via Deploy Hooks

(Optional)
Useful for rebuilding CMS after schema changes.

---

# 📝 6. How to Verify a Deployment

### Web

Visit:

```
yourproject.vercel.app
```

Check:

* Homepage loads
* Streaming player loads
* GraphQL API connected

### CMS

Visit:

```
cms.example.com/admin
```

Verify:

* Login works
* Uploads go to S3/R2
* Health check

```
/health
```

### Logs

* Vercel → Deployments → Logs
* Render → Dashboard → Events / Logs
* GitHub → Actions → Workflow Runs

---

# 📂 7. File Structure Reference

```
docs/
└── deployments.md
└── images/
    ├── vercel-settings.png
    ├── render-env.png
    ├── github-protection-rules.png
```

---
