FROM oven/bun:1.1.8-alpine AS base

WORKDIR /app

FROM base as deps

COPY package.json bun.lockb ./
RUN bun install

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1.1.8-distroless AS final
USER nonroot

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

CMD ["./node_modules/next/dist/bin/next", "start"]