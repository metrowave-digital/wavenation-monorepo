FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable pnpm

# Copy package files first (layer caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy CMS source
COPY . .

# Build Next.js / Payload admin
RUN pnpm build

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts

# Start production server
CMD ["pnpm", "start"]
