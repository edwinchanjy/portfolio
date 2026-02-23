# Build stage
FROM node:24.13.0-alpine AS builder

RUN corepack enable
RUN corepack prepare pnpm@10.30.1 --activate

# Set working directory
WORKDIR /app

# Copy package files first (for better layer caching)
COPY package.json ./
COPY .npmrc ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy required files for build
COPY . .

# Build the application for production
RUN pnpm run build

# Production stage
FROM node:24.13.0-alpine
WORKDIR /app

# Copy over build files from builder stage
COPY --from=builder /app/.output /app/.output

# Expose port 3000 to the server
EXPOSE 3000

# Run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]
