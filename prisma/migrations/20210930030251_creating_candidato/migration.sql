-- CreateTable
CREATE TABLE "Candidato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);
