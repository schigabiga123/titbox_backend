-- AlterTable
ALTER TABLE "ProjectSyncLog"
ADD COLUMN "processedProjects" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ProjectSyncLogItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "syncLogId" TEXT NOT NULL,
    "projectId" TEXT,
    "pocketProjectId" TEXT,
    "projectTitle" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "skipped" BOOLEAN NOT NULL DEFAULT false,
    "skippedReason" TEXT,
    "createdProjects" INTEGER NOT NULL DEFAULT 0,
    "updatedProjects" INTEGER NOT NULL DEFAULT 0,
    "createdTasks" INTEGER NOT NULL DEFAULT 0,
    "updatedTasks" INTEGER NOT NULL DEFAULT 0,
    "skippedTaskSync" BOOLEAN NOT NULL DEFAULT false,
    "errorMessage" TEXT,

    CONSTRAINT "ProjectSyncLogItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_syncLogId_idx" ON "ProjectSyncLogItem"("syncLogId");

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_projectId_idx" ON "ProjectSyncLogItem"("projectId");

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_pocketProjectId_idx" ON "ProjectSyncLogItem"("pocketProjectId");

-- AddForeignKey
ALTER TABLE "ProjectSyncLogItem" ADD CONSTRAINT "ProjectSyncLogItem_syncLogId_fkey" FOREIGN KEY ("syncLogId") REFERENCES "ProjectSyncLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSyncLogItem" ADD CONSTRAINT "ProjectSyncLogItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
