"use strict";

const express = require ("express");
const routerStore = express.Router();
const inventario = require("../models/inventario");
const cloudinary = require("cloudinary").v2;
const util = require("util");

/* METODO GET */
routerStore.get("/",async (req,res) => {
    const products = await inventario.getProducts();
    const data = products.map((row)=>{
        const imageURL = cloudinary.url(row.img, {
         crop: "fill",
        })
        return {...row,imageURL};

    });
    res.render("store", {user: req.session.user, data});
});

module.exports = routerStore;