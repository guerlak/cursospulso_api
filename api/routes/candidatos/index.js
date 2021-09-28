
const express = require('express');

const route = express.Router();

route.get("/", (req, res) => {
    res.json({ok: true})
})

module.exports = route