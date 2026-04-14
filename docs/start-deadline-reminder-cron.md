# Start Deadline Reminder Cron

A reminder job egyszer lefutó script:

```bash
npm run job:start-deadline-reminder
```

Ezért cronból vagy egy vele egyenértékű ütemezőből kell időzíteni.

## Linux szerveren

Nyisd meg a crontab-ot:

```bash
crontab -e
```

### Percenkénti futás

```cron
* * * * * cd /opt/titbox_backend && /usr/bin/npm run job:start-deadline-reminder >> /var/log/titbox/start-deadline-reminder.log 2>&1
```

### 5 percenkénti futás

```cron
*/5 * * * * cd /opt/titbox_backend && /usr/bin/npm run job:start-deadline-reminder >> /var/log/titbox/start-deadline-reminder.log 2>&1
```

## Amit át kell írni a saját szerveredhez

- `/opt/titbox_backend`: a projekt valódi szerver oldali elérési útja
- `/usr/bin/npm`: az `npm` valódi elérési útja a szerveren
- `/var/log/titbox/start-deadline-reminder.log`: a kívánt log fájl helye

Az `npm` útvonalát ezzel tudod ellenőrizni:

```bash
which npm
```

## Fontos feltételek

- A szerveren legyen fent a projekt.
- A szerveren legyen `.env` fájl a projekt gyökerében.
- A dependency-k legyenek telepítve: `npm install`
- A cron ugyanazzal a userrel fusson, amelyik hozzáfér a projekthez és a log könyvtárhoz.

## Ellenőrzés

Futtasd le kézzel először:

```bash
cd /opt/titbox_backend
npm run job:start-deadline-reminder
```

Utána ellenőrizd a cron logot:

```bash
tail -f /var/log/titbox/start-deadline-reminder.log
```
