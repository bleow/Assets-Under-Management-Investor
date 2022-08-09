-- CreateTable
CREATE TABLE `Account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Banker` (
    `bankerId` INTEGER NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `contactNo` INTEGER NOT NULL,

    UNIQUE INDEX `Banker_bankerId_key`(`bankerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `clientId` INTEGER NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `contactNo` INTEGER NOT NULL,
    `investedCapital` DOUBLE NOT NULL,
    `balanceCapital` DOUBLE NOT NULL,
    `estimatedBeta` DOUBLE NOT NULL,
    `managedById` INTEGER NOT NULL,

    UNIQUE INDEX `Client_clientId_key`(`clientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioAsset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `investedCapital` DOUBLE NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL,
    `ownedById` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asset` (
    `stockName` VARCHAR(191) NOT NULL,
    `assetClass` ENUM('SAVINGS_ACCOUNTS', 'FIXED_DEPOSITS', 'ENDOWMENT_PLANS', 'BONDS', 'GOVERNMENT_BONDS', 'CASH', 'MONEY_MARKET_FUNDS', 'UNIT_TRUSTS_OR_MUTUAL_FUNDS', 'STOCKS', 'EXCHANGE_TRADED_FUNDS', 'REAL_ESTATE', 'FUTURES', 'OPTIONS', 'COMMODITIES', 'CRYPTOCURRENCIES', 'COLLECTIBLES') NOT NULL,
    `sentiment` VARCHAR(191) NOT NULL,
    `beta` DOUBLE NOT NULL,

    UNIQUE INDEX `Asset_stockName_key`(`stockName`),
    PRIMARY KEY (`stockName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Banker` ADD CONSTRAINT `Banker_bankerId_fkey` FOREIGN KEY (`bankerId`) REFERENCES `Account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_managedById_fkey` FOREIGN KEY (`managedById`) REFERENCES `Banker`(`bankerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioAsset` ADD CONSTRAINT `PortfolioAsset_ownedById_fkey` FOREIGN KEY (`ownedById`) REFERENCES `Client`(`clientId`) ON DELETE RESTRICT ON UPDATE CASCADE;
