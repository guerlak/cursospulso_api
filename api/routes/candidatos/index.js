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
        try{
            await prisma.candidato.create({
                data:{
                    id: "127614576152eewe",
                    email,
                    nome,
                    telefone
                }
            })
            return res.json({ok: "Candidato was created"});
        }catch (e) {
            console.error(e);
            return res.json({err: e});
        } 
    }
    main();

})

module.exports = route