# ==============================================================================
# Velora Digital / Technovinz — Multi-Stage Production Container
# Stage 1: Build static assets via Node LTS Alpine
# Stage 2: Serve via hardened Nginx Alpine
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Builder
# ------------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first to maximize Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code and configuration
COPY tsconfig.json vite.config.ts index.html ./
COPY public ./public
COPY src ./src

# Compile production bundle
RUN npm run build

# ------------------------------------------------------------------------------
# Stage 2: Production Nginx Runtime
# ------------------------------------------------------------------------------
FROM nginx:1.27-alpine AS runner

# Remove default boilerplate configuration and static files
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx virtual host configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Setup writeable directories for read-only filesystem support
RUN mkdir -p /var/cache/nginx /var/run /tmp && \
    chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/run /tmp

# Expose standard HTTP container port
EXPOSE 80

# Health check using the internal /healthz endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/healthz || exit 1

# Launch Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
