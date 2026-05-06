ALTER TABLE "NotificationLog" ADD COLUMN "success" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "NotificationLog" ADD COLUMN "failureReason" TEXT;
