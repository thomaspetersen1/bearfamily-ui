# syntax=docker/dockerfile:1

ARG NODE_VERSION=24-alpine

# ============================================================
# BASE — shared foundation
# ============================================================
FROM node:${NODE_VERSION} AS base
WORKDIR /app

# ============================================================
# DEPS — production dependencies only
# ============================================================
FROM base AS deps
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --omit=dev

# ============================================================
# BUILD-DEPS — all dependencies (dev + prod)
# ============================================================
FROM base AS build-deps
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci

# ============================================================
# DEV — Vite dev server (used by compose watch)
# ============================================================
FROM build-deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# ============================================================
# BUILD — compile TypeScript + bundle with Vite
# ============================================================
FROM build-deps AS build
COPY . .
RUN npm run build

# ============================================================
# PRODUCTION — nginx serving the static bundle
# ============================================================
FROM nginx:stable-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
