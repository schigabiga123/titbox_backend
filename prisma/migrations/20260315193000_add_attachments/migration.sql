-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('photo', 'file');

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "AttachmentType" NOT NULL,
    "commentId" TEXT,
    "taskFieldId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Attachment_commentId_idx" ON "Attachment"("commentId");

-- CreateIndex
CREATE INDEX "Attachment_taskFieldId_idx" ON "Attachment"("taskFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskField_id_key" ON "TaskField"("id");

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_taskFieldId_fkey" FOREIGN KEY ("taskFieldId") REFERENCES "TaskField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
