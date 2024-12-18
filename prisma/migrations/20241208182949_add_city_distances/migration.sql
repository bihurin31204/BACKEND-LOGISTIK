-- CreateTable
CREATE TABLE "CityDistance" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,

    CONSTRAINT "CityDistance_pkey" PRIMARY KEY ("id")
);
