-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "accessCount" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
