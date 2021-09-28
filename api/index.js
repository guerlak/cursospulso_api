require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

const routes = require("./routes/candidatos")
app.use("/api/candidatos", routes);

app.get('/', (req, res) => {
    res.send("ok")
})

app.listen(process.env.PORT, () =>{
    console.log("Server running on PORT: " + process.env.PORT);
});