echo "📥 Pulling latest code..."
git pull origin master

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

echo "🚀 Restarting app..."
pm2 restart api || pm2 start dist/index.js --name api

echo "✅ Done!"
