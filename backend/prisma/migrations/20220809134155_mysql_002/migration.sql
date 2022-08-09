-- CreateTable
CREATE TABLE `Messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sentFrom` INTEGER NOT NULL,
    `sentTo` INTEGER NOT NULL,
    `sentDateTime` DATETIME(3) NOT NULL,
    `messageBody` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
