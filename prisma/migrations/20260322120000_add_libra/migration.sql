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

CREATE UNIQUE INDEX "Libra_taskId_key" ON "Libra"("taskId");
CREATE UNIQUE INDEX "Libra_taskFieldId_key" ON "Libra"("taskFieldId");
CREATE INDEX "Libra_projectId_idx" ON "Libra"("projectId");

ALTER TABLE "Libra" ADD CONSTRAINT "Libra_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Libra" ADD CONSTRAINT "Libra_taskFieldId_fkey" FOREIGN KEY ("taskFieldId") REFERENCES "TaskField"("id") ON DELETE SET NULL ON UPDATE CASCADE;
