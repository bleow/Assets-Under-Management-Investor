/*
  Warnings:

  - You are about to drop the column `userName` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `contactNo` on the `banker` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `banker` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `banker` table. All the data in the column will be lost.
  - You are about to drop the column `contactNo` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `client` table. All the data in the column will be lost.
  - Added the required column `contactNo` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `userName`,
    ADD COLUMN `contactNo` INTEGER NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `banker` DROP COLUMN `contactNo`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `contactNo`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`;
