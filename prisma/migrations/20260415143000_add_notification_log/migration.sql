CREATE TABLE "NotificationLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "notification" JSONB NOT NULL,
    "taskId" TEXT NOT NULL,
    "subTaskId" TEXT,
    "commentId" TEXT,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "deadline" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "NotificationLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "NotificationLog_createdAt_idx" ON "NotificationLog"("createdAt");
CREATE INDEX "NotificationLog_userId_idx" ON "NotificationLog"("userId");
CREATE INDEX "NotificationLog_taskId_idx" ON "NotificationLog"("taskId");
CREATE INDEX "NotificationLog_subTaskId_idx" ON "NotificationLog"("subTaskId");
CREATE INDEX "NotificationLog_commentId_idx" ON "NotificationLog"("commentId");
