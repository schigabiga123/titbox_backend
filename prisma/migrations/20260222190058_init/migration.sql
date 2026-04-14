/*
  Warnings:

  - The primary key for the `TaskField` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "TaskField" DROP CONSTRAINT "TaskField_pkey",
ADD COLUMN     "dbId" SERIAL NOT NULL,
ADD CONSTRAINT "TaskField_pkey" PRIMARY KEY ("dbId");
