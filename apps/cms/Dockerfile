FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY apps/cms ./apps/cms
COPY packages ./packages
COPY services ./services

RUN corepack enable pnpm
RUN pnpm install --prod

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=apps/cms/src/payload.config.ts

CMD ["pnpm", "--filter", "cms", "start"]
