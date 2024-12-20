FROM oven/bun:1.1.8-alpine

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build --no-lint

CMD ["bun", "run", "start"]