-- AlterTable
ALTER TABLE "ProjectSyncLog"
ADD COLUMN "updatedTaskFields" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProjectSyncLogItem"
ADD COLUMN "updatedTaskFields" INTEGER NOT NULL DEFAULT 0;
