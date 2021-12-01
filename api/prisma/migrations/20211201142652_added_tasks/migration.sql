/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Projects` table. All the data in the column will be lost.
  - Made the column `startDate` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "creationDate",
DROP COLUMN "releaseDate",
ALTER COLUMN "startDate" SET NOT NULL;

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
