/*
  Warnings:

  - Added the required column `riskLevel` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `asset` ADD COLUMN `riskLevel` ENUM('LOW', 'MODERATE', 'HIGH') NOT NULL;
