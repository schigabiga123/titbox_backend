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

-- CreateIndex
CREATE INDEX "Inspection_taskId_idx" ON "Inspection"("taskId");

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
