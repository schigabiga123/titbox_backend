-- CreateTable
CREATE TABLE "ProjectSyncLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,
    "success" BOOLEAN NOT NULL,
    "runnerName" TEXT NOT NULL,
    "scheduleType" TEXT NOT NULL,
    "selectedProjectTitle" TEXT,
    "projectId" TEXT,
    "createdProjects" INTEGER NOT NULL DEFAULT 0,
    "updatedProjects" INTEGER NOT NULL DEFAULT 0,
    "createdTasks" INTEGER NOT NULL DEFAULT 0,
    "updatedTasks" INTEGER NOT NULL DEFAULT 0,
    "skippedProjects" INTEGER NOT NULL DEFAULT 0,
    "skippedTaskSyncProjects" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,

    CONSTRAINT "ProjectSyncLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectSyncLog_createdAt_idx" ON "ProjectSyncLog"("createdAt");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_projectId_idx" ON "ProjectSyncLog"("projectId");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_runnerName_idx" ON "ProjectSyncLog"("runnerName");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_scheduleType_idx" ON "ProjectSyncLog"("scheduleType");

-- AddForeignKey
ALTER TABLE "ProjectSyncLog" ADD CONSTRAINT "ProjectSyncLog_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
