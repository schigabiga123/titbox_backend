/*
  Warnings:

  - You are about to drop the `ProjectUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectUser" DROP CONSTRAINT "ProjectUser_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "userIds" TEXT[];

-- DropTable
DROP TABLE "ProjectUser";
