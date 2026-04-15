-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('photo', 'file');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "partnerName" TEXT,
    "pocketId" TEXT,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

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
    "processedProjects" INTEGER NOT NULL DEFAULT 0,
    "createdProjects" INTEGER NOT NULL DEFAULT 0,
    "updatedProjects" INTEGER NOT NULL DEFAULT 0,
    "createdTasks" INTEGER NOT NULL DEFAULT 0,
    "updatedTasks" INTEGER NOT NULL DEFAULT 0,
    "updatedTaskFields" INTEGER NOT NULL DEFAULT 0,
    "skippedProjects" INTEGER NOT NULL DEFAULT 0,
    "skippedTaskSyncProjects" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,

    CONSTRAINT "ProjectSyncLog_pkey" PRIMARY KEY ("id")
);

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
    "updatedTaskFields" INTEGER NOT NULL DEFAULT 0,
    "skippedTaskSync" BOOLEAN NOT NULL DEFAULT false,
    "errorMessage" TEXT,
    "changeDetails" JSONB,

    CONSTRAINT "ProjectSyncLogItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "status" TEXT,
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "startReminderSentAt" TIMESTAMP(3),
    "fullAddress" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "isPickUp" BOOLEAN,
    "accepted" BOOLEAN,
    "hanging" BOOLEAN,
    "assignedUserId" TEXT,
    "assignedUserId2" TEXT,
    "submittedUserId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "submittedUserId" TEXT,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentTaggedUser" (
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CommentTaggedUser_pkey" PRIMARY KEY ("commentId","userId")
);

-- CreateTable
CREATE TABLE "TaskField" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "pocketId" TEXT,
    "name" TEXT NOT NULL,
    "data" TEXT,
    "type" TEXT,

    CONSTRAINT "TaskField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "AttachmentType" NOT NULL,
    "commentId" TEXT,
    "taskFieldId" TEXT,
    "taskEventFieldId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "note" TEXT,
    "data" TEXT,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortaChecklist" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "isUserChecked" BOOLEAN,
    "isTruckChecked" BOOLEAN,
    "isTrailerChecked" BOOLEAN,
    "isTraktorChecked" BOOLEAN,
    "isBioChecked" BOOLEAN,
    "isSzondaChecked" BOOLEAN,
    "isStarted" BOOLEAN,
    "startedAt" TIMESTAMP(3),

    CONSTRAINT "PortaChecklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libra" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "szfCode" TEXT,
    "plateNumber" TEXT,
    "assignedUserId" TEXT,
    "amount" DOUBLE PRECISION,
    "manuallyLibra" TEXT,
    "manuallyLibraComment" TEXT,
    "taskFieldId" TEXT,

    CONSTRAINT "Libra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskEvent" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "TaskEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskEventField" (
    "id" TEXT NOT NULL,
    "taskEventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data" TEXT,
    "type" TEXT,

    CONSTRAINT "TaskEventField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "success" BOOLEAN NOT NULL,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "routePath" TEXT,
    "responseStatus" INTEGER NOT NULL,
    "firebaseUid" TEXT,
    "firebaseEmail" TEXT,
    "errorMessage" TEXT,
    "params" JSONB,
    "query" JSONB,
    "body" JSONB,
    "responseBody" JSONB,
    "resourceId" TEXT,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectSyncLog_createdAt_idx" ON "ProjectSyncLog"("createdAt");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_projectId_idx" ON "ProjectSyncLog"("projectId");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_runnerName_idx" ON "ProjectSyncLog"("runnerName");

-- CreateIndex
CREATE INDEX "ProjectSyncLog_scheduleType_idx" ON "ProjectSyncLog"("scheduleType");

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_syncLogId_idx" ON "ProjectSyncLogItem"("syncLogId");

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_projectId_idx" ON "ProjectSyncLogItem"("projectId");

-- CreateIndex
CREATE INDEX "ProjectSyncLogItem_pocketProjectId_idx" ON "ProjectSyncLogItem"("pocketProjectId");

-- CreateIndex
CREATE INDEX "Attachment_commentId_idx" ON "Attachment"("commentId");

-- CreateIndex
CREATE INDEX "Attachment_taskFieldId_idx" ON "Attachment"("taskFieldId");

-- CreateIndex
CREATE INDEX "Attachment_taskEventFieldId_idx" ON "Attachment"("taskEventFieldId");

-- CreateIndex
CREATE INDEX "Inspection_taskId_idx" ON "Inspection"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "PortaChecklist_taskId_key" ON "PortaChecklist"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "Libra_taskId_key" ON "Libra"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "Libra_taskFieldId_key" ON "Libra"("taskFieldId");

-- CreateIndex
CREATE INDEX "Libra_projectId_idx" ON "Libra"("projectId");

-- CreateIndex
CREATE INDEX "TaskEvent_taskId_idx" ON "TaskEvent"("taskId");

-- CreateIndex
CREATE INDEX "TaskEventField_taskEventId_idx" ON "TaskEventField"("taskEventId");

-- AddForeignKey
ALTER TABLE "ProjectSyncLog" ADD CONSTRAINT "ProjectSyncLog_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSyncLogItem" ADD CONSTRAINT "ProjectSyncLogItem_syncLogId_fkey" FOREIGN KEY ("syncLogId") REFERENCES "ProjectSyncLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSyncLogItem" ADD CONSTRAINT "ProjectSyncLogItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentTaggedUser" ADD CONSTRAINT "CommentTaggedUser_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskField" ADD CONSTRAINT "TaskField_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_taskFieldId_fkey" FOREIGN KEY ("taskFieldId") REFERENCES "TaskField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_taskEventFieldId_fkey" FOREIGN KEY ("taskEventFieldId") REFERENCES "TaskEventField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortaChecklist" ADD CONSTRAINT "PortaChecklist_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Libra" ADD CONSTRAINT "Libra_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Libra" ADD CONSTRAINT "Libra_taskFieldId_fkey" FOREIGN KEY ("taskFieldId") REFERENCES "TaskField"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskEvent" ADD CONSTRAINT "TaskEvent_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskEventField" ADD CONSTRAINT "TaskEventField_taskEventId_fkey" FOREIGN KEY ("taskEventId") REFERENCES "TaskEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
