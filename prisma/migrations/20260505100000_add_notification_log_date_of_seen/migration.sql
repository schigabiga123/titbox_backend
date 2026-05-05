ALTER TABLE "NotificationLog"
ADD COLUMN "dateOfSeen" TIMESTAMP(3);

CREATE INDEX "NotificationLog_dateOfSeen_idx" ON "NotificationLog"("dateOfSeen");
