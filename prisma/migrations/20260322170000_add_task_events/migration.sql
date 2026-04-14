CREATE TABLE "TaskEvent" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "TaskEvent_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TaskEventField" (
    "id" TEXT NOT NULL,
    "taskEventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data" TEXT,
    "type" TEXT,

    CONSTRAINT "TaskEventField_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Attachment"
ADD COLUMN "taskEventFieldId" TEXT;

CREATE INDEX "TaskEvent_taskId_idx" ON "TaskEvent"("taskId");
CREATE INDEX "TaskEventField_taskEventId_idx" ON "TaskEventField"("taskEventId");
CREATE INDEX "Attachment_taskEventFieldId_idx" ON "Attachment"("taskEventFieldId");

ALTER TABLE "TaskEvent" ADD CONSTRAINT "TaskEvent_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TaskEventField" ADD CONSTRAINT "TaskEventField_taskEventId_fkey" FOREIGN KEY ("taskEventId") REFERENCES "TaskEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_taskEventFieldId_fkey" FOREIGN KEY ("taskEventFieldId") REFERENCES "TaskEventField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
