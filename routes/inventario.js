"use strict";

const express = require ("express");
const routerinventario = express.Router();
const inventario = require("../models/inventario");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const uploader = util.promisify(cloudinary.uploader.upload);

/* METODO GET */
routerinventario.get("/",async (req,res) => {
    const products = await inventario.getProducts();
    const data = products.map((row)=>{
        const imageURL = cloudinary.url(row.img, {
            width: 100,
            height: 100,
            crop: "fill",
        })
        return {...row,imageURL};

    });
    res.render("inventario", {user: req.session.user, data});
});


module.exports = routerinventario;