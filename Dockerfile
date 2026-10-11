# syntax=docker/dockerfile:1

FROM node:26-alpine AS build

RUN npm install --global pnpm@11

WORKDIR /src

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --parents libs/*/package.json ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm --filter @staircase/spa build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist /usr/share/nginx/html

EXPOSE 80
