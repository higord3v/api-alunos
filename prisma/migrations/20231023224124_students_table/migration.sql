-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "rating_first_semester" INTEGER NOT NULL,
    "rating_second_semester" INTEGER NOT NULL,
    "teacher" TEXT NOT NULL,
    "room" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
