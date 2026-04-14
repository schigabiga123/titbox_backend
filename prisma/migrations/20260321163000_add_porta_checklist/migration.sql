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

CREATE UNIQUE INDEX "PortaChecklist_taskId_key" ON "PortaChecklist"("taskId");

ALTER TABLE "PortaChecklist" ADD CONSTRAINT "PortaChecklist_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
