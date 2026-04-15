-- CreateTable
CREATE TABLE "StartDeadlineReminderLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskId" TEXT NOT NULL,
    "projectId" TEXT,
    "userId" TEXT NOT NULL,
    "recipientRole" TEXT,

    CONSTRAINT "StartDeadlineReminderLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StartDeadlineReminderLog_taskId_idx" ON "StartDeadlineReminderLog"("taskId");

-- CreateIndex
CREATE INDEX "StartDeadlineReminderLog_projectId_idx" ON "StartDeadlineReminderLog"("projectId");

-- CreateIndex
CREATE INDEX "StartDeadlineReminderLog_userId_idx" ON "StartDeadlineReminderLog"("userId");

-- CreateIndex
CREATE INDEX "StartDeadlineReminderLog_sentAt_idx" ON "StartDeadlineReminderLog"("sentAt");

-- AddForeignKey
ALTER TABLE "StartDeadlineReminderLog" ADD CONSTRAINT "StartDeadlineReminderLog_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartDeadlineReminderLog" ADD CONSTRAINT "StartDeadlineReminderLog_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
