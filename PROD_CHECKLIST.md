# Prod Checklist

## 1. Railway prod környezet létrehozása

- Hozz létre külön `production` Railway environmentet.
- Hozz létre külön prod PostgreSQL adatbázist.
- Ellenőrizd, hogy a backend service a prod DB-re mutat.
- Töltsd fel a szükséges env változókat:
  - `DATABASE_URL`
  - `PORT`
  - `CRON_JOB_SECRET`
  - `FIREBASE_AUTH_ENABLED`
  - `FIREBASE_SERVICE_ACCOUNT_JSON` vagy együtt:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_CLIENT_EMAIL`
  - `FIREBASE_PRIVATE_KEY`
  - `PUSH_ENABLED`
  - `PUSH_ALLOWED_USER_IDS`

## 2. Prod branch és deploy flow

- Hozz létre külön `prod` branch-et.
- Kösd rá a Railway prod service-re, hogy erről deployoljon.
- Ellenőrizd a build/start commandot.
- Fontos: a jelenlegi projektben most vannak meglévő TypeScript build hibák a `TaskEvent.status` körül, ezeket prod előtt javítani kell, ha a deploy buildel.
- Ellenőrizd, hogy induláskor lefut-e a Prisma migration:
  - a `start` script jelenleg: `npx prisma migrate deploy && node dist/index.js`

## 3. Prod DB előkészítése

- Futtasd le a prod migrationöket a prod adatbázison.
- Ellenőrizd, hogy a `NotificationLog.dateOfSeen` mező is létrejött.
- Döntsétek el, hogy teljesen üres prod DB-ről indultok-e, vagy előtöltitek adatokkal.

## 4. Firebase adatmigráció

- Lokálban állítsd a `.env`-et a prod DB-re és a megfelelő Firebase projektre.
- Futtasd le a Firebase migrációs scriptet:
  - `ts-node src/firebase/firebase_migrate.ts`
- Ellenőrizd, hogy a projektek, taskok, commentek, eventek, attachmentek rendben átmentek.
- Mivel ez adatfeltöltő script, érdemes előtte tisztázni, hogy egyszer futtatható-e biztonságosan ugyanarra a DB-re, vagy csak üres DB-re.

## 5. Push értesítések élesítése

- Prodon állítsd `PUSH_ENABLED=true`-ra, ha tényleges push menjen.
- Ha a `PUSH_ALLOWED_USER_IDS` üres vagy nincs megadva, akkor a kód minden userre megpróbál pushot küldeni.
- Ez csak azoknál a user-eknél fog ténylegesen pusholni, akik:
  - léteznek a Firebase `users` kollekcióban
  - rendelkeznek érvényes `fcmTokens` tömbbel
- Ha a `PUSH_ALLOWED_USER_IDS` be van állítva, akkor csak az abban szereplő user ID-k kapnak pushot.
- Prod előtt érdemes 1-2 teszt userrel ellenőrizni:
  - token mentés működik-e
  - push valóban megérkezik-e
  - a notification log DB-be is bekerül-e

## 6. Firebase auth ellenőrzése

- Prodon `FIREBASE_AUTH_ENABLED` maradjon bekapcsolva.
- Ellenőrizd, hogy a mobil/web kliens valóban prod Firebase tokennel hívja az API-t.
- Teszteld le, hogy auth nélkül az API 401-et ad-e a védett route-okon.

## 7. Cron jobok beállítása

- Állíts be külön cron hívásokat a Railway/cron oldalon.
- Jelenleg kint lévő cron endpointok:
  - `POST /cron/update-projects`
  - `POST /cron/start-deadline-reminder`
- Ezekhez kötelező a `CRON_JOB_SECRET`, ami mehet:
  - `Authorization: Bearer <secret>`
  - vagy `x-cron-secret` headerben
- Döntsétek el a futási gyakoriságot:
  - `update-projects`
  - `start-deadline-reminder`

## 8. Projekt sync tisztázása

- A repo-ban van `update_projects_by_minutes.ts` és `run_project_sync_cron.ts` is.
- Viszont HTTP endpoint jelenleg csak az `update-projects` syncra van.
- Ha kell a perces/okos cron logika prodra is, akkor dönteni kell:
  - vagy külön scriptként futtatjátok
  - vagy kitesztek hozzá külön endpointot

## 9. Első indulás utáni smoke test

- Swagger nyílik-e: `/api-docs`
- API elindul-e hiba nélkül
- `GET /notifications/:userId` működik-e auth-tal
- `PATCH /notifications/:id` működik-e `dateOfSeen` mezőre
- Project route-ok működnek-e auth-tal
- Cron endpointok helyes secret mellett lefutnak-e

## 10. Go-live előtti minimum ellenőrzések

- Build sikeres
- Migration sikeres
- Firebase admin credential jó
- Push tesztelve
- Cron tesztelve
- Auth tesztelve
- Prod DB backup / export stratégia legalább alap szinten tisztázva

## Nyitott kérdések

- Kell-e külön prod Firebase projekt, vagy ugyanaz marad?
- Kell-e a `run_project_sync_cron.ts` logikát is külön élesíteni?
- Kell-e seed vagy backfill a migráció után bizonyos adatokra?
- Kell-e külön monitoring vagy hibaértesítés prodra?
