FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable pnpm

# Copy only CMS package files
COPY package.json pnpm-lock.yaml ./

# Install deps (NO frozen-lockfile because monorepo lockfiles won't match)
RUN pnpm install --prod

# Copy CMS app source
COPY . .

# Build Next.js (creates .next folder)
RUN pnpm build

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts

# Start production server
CMD ["pnpm", "start"]
