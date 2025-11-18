FROM node:22-alpine

WORKDIR /app

# Copy only CMS package files
COPY package.json pnpm-lock.yaml ./

# Copy CMS app
COPY . .

RUN corepack enable pnpm
RUN pnpm install --prod

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts

CMD ["pnpm", "start"]
