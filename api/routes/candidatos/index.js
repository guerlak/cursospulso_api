const {PrismaClient} =require("@prisma/client");
const express = require('express');

const route = express.Router();
const prisma = new PrismaClient();

route.get("/", (req, res) => {
    res.json({ok: true})
})

route.post("/", (req, res) => {

    const {email, nome, telefone} = req.body;

    async function main(){
        await prisma.candidato.create({
            data:{
                id: "127614576152ewe",
                email,
                nome,
                telefone
            }
        })
    }

    main();

    return res.json({ok: "Candidato was created"})
})

module.exports = route