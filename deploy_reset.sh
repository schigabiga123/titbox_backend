#!/usr/bin/env bash

set -euo pipefail

APP_NAME="api"
BRANCH="${1:-master}"

echo "📥 Pulling latest code from branch: ${BRANCH}"
git pull origin "${BRANCH}"

echo "📦 Installing dependencies..."
npm install

echo "🧹 Resetting database schema from current Prisma schema..."
npx prisma db push --force-reset --skip-generate

echo "🧬 Generating Prisma client..."
npx prisma generate

echo "🔨 Building project..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart "${APP_NAME}" || pm2 start dist/index.js --name "${APP_NAME}"

echo "💾 Saving PM2 process list..."
pm2 save

echo "✅ Deploy completed successfully."
