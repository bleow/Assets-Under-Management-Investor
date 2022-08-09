/*
  Warnings:

  - The primary key for the `account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `account` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `banker` DROP FOREIGN KEY `Banker_bankerId_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_managedById_fkey`;

-- DropForeignKey
ALTER TABLE `portfolioasset` DROP FOREIGN KEY `PortfolioAsset_ownedById_fkey`;

-- AlterTable
ALTER TABLE `account` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`email`);

-- AlterTable
ALTER TABLE `banker` MODIFY `bankerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `client` MODIFY `clientId` VARCHAR(191) NOT NULL,
    MODIFY `managedById` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `portfolioasset` MODIFY `ownedById` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Banker` ADD CONSTRAINT `Banker_bankerId_fkey` FOREIGN KEY (`bankerId`) REFERENCES `Account`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Account`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_managedById_fkey` FOREIGN KEY (`managedById`) REFERENCES `Banker`(`bankerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioAsset` ADD CONSTRAINT `PortfolioAsset_ownedById_fkey` FOREIGN KEY (`ownedById`) REFERENCES `Client`(`clientId`) ON DELETE RESTRICT ON UPDATE CASCADE;
