# Technovinz — Corporate Profile & Engineering Showcase

> **Thoughtfully Engineered. Digitally Exceptional.**

Technovinz is a premium international digital product and software engineering consultancy. This repository contains the complete production-grade web application, featuring original editorial copywriting, an elegant cream-and-beige visual design system, custom interactive graphics, case studies, and hardened multi-stage Docker deployment configurations.

---

## Table of Contents

1. [Architectural Overview & Design System](#1-architectural-overview--design-system)
2. [Project Prerequisites](#2-project-prerequisites)
3. [Local Development](#3-local-development)
4. [Building for Production](#4-building-for-production)
5. [Docker Containerization](#5-docker-containerization)
6. [Docker Compose Orchestration](#6-docker-compose-orchestration)
7. [Operational Management & Logging](#7-operational-management--logging)
8. [Configuration & Environment Variables](#8-configuration--environment-variables)
9. [Ubuntu Server Deployment Guide](#9-ubuntu-server-deployment-guide)
10. [Firewall & Security Hardening](#10-firewall--security-hardening)
11. [HTTPS Reverse Proxy (Nginx / Certbot / Caddy)](#11-https-reverse-proxy-nginx--certbot--caddy)
12. [Troubleshooting Guide](#12-troubleshooting-guide)
13. [Verification & Validation Matrix](#13-verification--validation-matrix)

---

## 1. Architectural Overview & Design System

The application is built as a reactive Single Page Application (SPA) adhering to strict design and engineering guidelines:

- **Palette**: Warm ivory (`#F8F5EF`), soft cream (`#F1E9DC`), card surface (`#FFFCF7`), muted sand (`#D8C4A8`), taupe (`#A38B70`), deep charcoal (`#272722`), warm grey (`#777269`), hairline borders (`#E4DACE`), and dark contrast sections (`#282923`).
- **Typography**: Editorial serif (*Cormorant Garamond*), modern neutral grotesque (*Plus Jakarta Sans*), and tabular monospace (*JetBrains Mono*).
- **Visual Artifacts**: Custom SVG graphics, interactive architectural schematics, realistic product mockups for three representative concepts (*Meridian Commerce*, *Atlas Operations*, *Luma Connect*), and an interactive 5-phase delivery lifecycle stepper.
- **Central Configuration**: All company details, contact endpoints, social handles, services, and policies are managed through `src/data/config.ts`.

---

## 2. Project Prerequisites

### For Local Node.js Development
- **Node.js**: LTS version 20.x or 22.x
- **npm**: Version 10.x or newer

### For Containerized Production Hosting
- **Docker Engine**: Version 24.0 or newer
- **Docker Compose**: Plugin v2.20 or newer
- *(Note: Node.js does NOT need to be installed on target production servers when running via Docker).*

---

## 3. Local Development

Clone the repository and install dependencies reproducibly:

```bash
# Reproducible dependency installation
npm ci

# Start the Vite local development server
npm run dev
```

The development server runs by default at:
`http://localhost:3000`

---

## 4. Building for Production

Compile and bundle the production assets with TypeScript type-checking and asset minification:

```bash
# Verify TypeScript and create production bundle in /dist
npm run build

# Preview the compiled production build locally
npm run preview
```

---

## 5. Docker Containerization

The project uses a secure, multi-stage `Dockerfile`:
- **Stage 1 (Builder)**: Uses `node:20-alpine`, installs packages with `npm ci`, and executes `npm run build`.
- **Stage 2 (Runner)**: Uses `nginx:1.27-alpine`, copies the static distribution, applies custom `nginx.conf` security headers, enables gzip, and configures the `/healthz` endpoint.

To build the standalone Docker image:

```bash
docker build -t velora-digital-web:latest .
```

To run the container manually:

```bash
docker run -d --name velora_web -p 8080:80 --read-only \
  --tmpfs /tmp:rw,noexec,nosuid \
  --tmpfs /var/cache/nginx:rw,noexec,nosuid \
  --tmpfs /var/run:rw,noexec,nosuid \
  velora-digital-web:latest
```

---

## 6. Docker Compose Orchestration

A production-oriented `compose.yaml` configuration is provided with health checks, restart policies, and security isolation.

### 1. Configure the Environment
Copy the example environment template:

```bash
cp .env.example .env
```

Review and adjust `HOST_PORT` in `.env` if needed (defaults to `8080`).

### 2. Validate Compose Configuration
Verify environment variable substitution and syntax:

```bash
docker compose config
```

### 3. Build and Launch
Build the container and run in detached mode:

```bash
docker compose build
docker compose up -d
```

---

## 7. Operational Management & Logging

Use the following standard commands to manage the running services:

```bash
# Check service status and healthcheck condition
docker compose ps

# Stream live web server access and error logs
docker compose logs -f web

# Verify the health check endpoint
curl -i http://localhost:8080/healthz

# Restart the service
docker compose restart web

# Stop and remove containers and network (preserves built images)
docker compose down
```

> **Note on `docker compose down`**: This command safely stops and removes the Compose-managed containers and bridge network. It does not delete built Docker images or volumes unless explicitly instructed with `--rmi all` or `-v`.

---

## 8. Configuration & Environment Variables

Environment variables are defined in `.env.example`:

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `HOST_PORT` | `8080` | Host port mapped to container port 80 |

### Updating Brand & Contact Information
Edit `src/data/config.ts` to adjust:
- Company name and taglines
- Verified email addresses (`inquiryEmail`, `supportEmail`)
- Social media handles and URLs
- Services and engagement models
- `contact.isConfigured`: set to `true` when connecting the form to a live email relay (such as SendGrid, Resend, or an AWS SES webhook).

---

## 9. Ubuntu Server Deployment Guide

To deploy on a clean Ubuntu 22.04 / 24.04 LTS server:

### Step 1: Install Docker & Docker Compose Plugin
Follow official Docker installation instructions (do NOT use outdated apt defaults):

```bash
# Update repository index and install prerequisites
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# Add Docker official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository to Apt sources
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine, CLI, and Compose plugin
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Enable and start Docker service
sudo systemctl enable docker
sudo systemctl start docker
```

### Step 2: Clone Repository & Launch
```bash
git clone https://github.com/your-org/velora-digital.git /opt/velora-digital
cd /opt/velora-digital

cp .env.example .env
docker compose config
docker compose build
docker compose up -d
```

### Step 3: Pull Updates & Redeploy
When updating after pushing changes to GitHub:

```bash
cd /opt/velora-digital
git pull origin main
docker compose build
docker compose up -d --force-recreate
```

---

## 10. Firewall & Security Hardening

On Ubuntu, configure the Uncomplicated Firewall (`ufw`) safely:

```bash
# Allow SSH access before enabling firewall
sudo ufw allow OpenSSH

# If exposing directly on port 8080 for testing:
# sudo ufw allow 8080/tcp

# For production setups behind reverse proxy:
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
sudo ufw status
```

> **Security Rule**: In production, do NOT open port 8080 directly to the public internet. Keep port 8080 bound locally (`127.0.0.1:8080:80`) and expose HTTP (80) and HTTPS (443) exclusively through a TLS reverse proxy. Never expose Docker's daemon socket `/var/run/docker.sock`.

---

## 11. HTTPS Reverse Proxy (Nginx / Certbot / Caddy)

### Production Nginx Reverse Proxy Setup
Install Nginx on the host and configure it as a reverse proxy with Let's Encrypt SSL:

```nginx
# /etc/nginx/sites-available/velora.digital
server {
    listen 80;
    server_name velora.digital www.velora.digital;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name velora.digital www.velora.digital;

    ssl_certificate /etc/letsencrypt/live/velora.digital/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/velora.digital/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Obtain free automated TLS certificates with Certbot:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d velora.digital -d www.velora.digital
```

---

## 12. Troubleshooting Guide

### Common Issue: Port Conflict (`bind: address already in use`)
- **Symptom**: Docker returns `Error response from daemon: driver failed programming external connectivity on endpoint ...: Bind for 0.0.0.0:8080 failed: port is already allocated`.
- **Fix**: Check what process is using port 8080 with `sudo ss -tulpn | grep :8080`. Modify `HOST_PORT` in `.env` to another port (e.g., `HOST_PORT=8090`), then rerun `docker compose up -d`.

### Common Issue: Health Check Unhealthy
- **Symptom**: `docker compose ps` shows `(unhealthy)`.
- **Fix**: Inspect the container logs via `docker compose logs web`. Check if Nginx started correctly and verify the internal health check via:
  ```bash
  docker compose exec web wget -qO- http://127.0.0.1:80/healthz
  ```

### Common Issue: Client-Side Routes Return 404
- **Symptom**: Refreshing deep routes results in 404 from Nginx.
- **Fix**: The provided `nginx.conf` includes `try_files $uri $uri/ /index.html;`, which ensures all client-side routes fall back to the SPA entry point. Verify that `nginx.conf` has been properly copied during Docker build.

---

## 13. Verification & Validation Matrix

| Verification Item | Status | Verification Detail |
| :--- | :--- | :--- |
| **Package Scripts & Dependencies** | Verified | Clean dependencies, zero peer conflicts, `package-lock.json` generated. |
| **TypeScript Compilation** | Verified | `tsc --noEmit` exits with 0 errors across all components. |
| **Production Build** | Verified | `npm run build` compiles clean static bundle into `/dist`. |
| **Nginx SPA Fallback** | Verified | Configured via `try_files $uri $uri/ /index.html;` in `nginx.conf`. |
| **Health Check Endpoint** | Verified | `/healthz` returns `200 "healthy"` with zero logging overhead. |
| **Security Response Headers** | Verified | `X-Frame-Options`, `X-Content-Type-Options`, `CSP`, and `Referrer-Policy` enabled. |
| **Responsive Viewports** | Verified | Tested layout stability at 360px, 390px, 768px, 1024px, and 1440px. |
| **Form Validation & Spam Protection** | Verified | Full name, email format, honeypot bot trap, and transparent status disclaimer. |
| **Docker Compose Config** | Verified | `compose.yaml` validated with environment variable substitution. |
