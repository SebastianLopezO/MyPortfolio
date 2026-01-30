# ===============================
# Stage 1: Build
# ===============================
FROM node:20-alpine AS build

WORKDIR /app

# Activar pnpm
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate

# Copiar dependencias primero (mejor cache)
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Copiar resto del proyecto
COPY . .

# Build Vite
RUN pnpm run build


# ===============================
# Stage 2: Producción (serve)
# ===============================
FROM node:20-alpine

WORKDIR /app

# Activar pnpm
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate

# Instalar servidor liviano
RUN pnpm add -g serve

# Copiar build compilado
COPY --from=build /app/dist ./dist

# Exponer puerto Vite/Serve
EXPOSE 5173

# Ejecutar servidor
CMD ["serve", "-s", "dist", "-l", "5173"]