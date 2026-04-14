/*
  Warnings:

  - You are about to drop the column `taskId` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `taskDbId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskDbId` to the `TaskField` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TaskField" DROP CONSTRAINT "TaskField_taskId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "taskId",
ADD COLUMN     "taskDbId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ADD COLUMN     "dbId" SERIAL NOT NULL,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("dbId");

-- AlterTable
ALTER TABLE "TaskField" ADD COLUMN     "taskDbId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_taskDbId_fkey" FOREIGN KEY ("taskDbId") REFERENCES "Task"("dbId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskField" ADD CONSTRAINT "TaskField_taskDbId_fkey" FOREIGN KEY ("taskDbId") REFERENCES "Task"("dbId") ON DELETE CASCADE ON UPDATE CASCADE;
