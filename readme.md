# titbox-backend

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Create `.env` in project root:
```env
PORT=3000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public
```

3. Generate Prisma Client + Zod schemas:
```bash
npx prisma generate
```

4. Apply database migrations (local dev):
```bash
npx prisma migrate dev --name init
```

5. Start in development mode:
```bash
npm run dev
```

API docs: `http://localhost:PORT/api-docs`

## Scripts

- Development server:
```bash
npm run dev
```

- Build TypeScript:
```bash
npm run build
```

- Run built app:
```bash
npm start
```

- One-off Firebase migration script:
```bash
npm run migrate:one
```

- Percenkenti project sync runner:
```bash
npm run job:project-sync-cron
```

## Prisma / Zod useful commands

- Regenerate Prisma Client + `src/generated/zod` (run after `prisma/schema.prisma` changes):
```bash
npx prisma generate
```

- Create and apply a new migration:
```bash
npx prisma migrate dev --name <migration_name>
```

- Reset local database (destructive):
```bash
npx prisma migrate reset
```

- Apply existing migrations in production/CI:
```bash
npx prisma migrate deploy
```

- Update only one project
$env:PROJECT_TITLE="SZF-26-0003682"; npx ts-node src/firebase/update_projects.ts

- Run add new filed
npx ts-node src/scripts/task-field-backfills/add_delivery_desc_to_delivery_tasks.ts

* * * * * cd /opt/titbox_backend && /usr/bin/npm run job:project-sync-cron >> /var/log/titbox/project-sync-cron.log 2>&1
