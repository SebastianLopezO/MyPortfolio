# ===============================
# Stage 1: Build
# ===============================
FROM node:20-alpine AS build

WORKDIR /app

# Activar pnpm
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

# Copiar dependencias primero (mejor cache)
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del proyecto
COPY . .

# Build Vite
RUN pnpm run build


# ===============================
# Stage 2: Producción (Nginx)
# ===============================
FROM nginx:alpine

# Eliminar config default de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Configuración personalizada para SPA (Vite)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build compilado
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto HTTP
EXPOSE 80

# Ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]