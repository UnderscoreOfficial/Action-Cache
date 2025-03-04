FROM node:lts-alpine AS base

# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

# Install dependencies
COPY package.json ./
COPY prisma ./prisma/
RUN npm install --omit=dev

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:node .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:node /app/.next/standalone ./
COPY --from=builder --chown=nextjs:node /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:node /app/prisma ./prisma

USER nextjs

EXPOSE 3000
ENV PORT=3000

# Set hostname to localhost
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

