"use strict";

const express = require ("express");
const routeEditItem = express.Router();

/* METODO GET */
routeEditItem.get("/", (req,res) => {
    res.render("editItem");
});


//

module.exports = routeEditItem;