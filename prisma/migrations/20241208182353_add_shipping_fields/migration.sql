/*
  Warnings:

  - Added the required column `receiverCity` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderCity` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "receiverCity" TEXT NOT NULL,
ADD COLUMN     "receiverId" TEXT NOT NULL,
ADD COLUMN     "senderCity" TEXT NOT NULL,
ADD COLUMN     "senderId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Diproses';
