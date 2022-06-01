"use strict";

const express = require ("express");
const routeraddItem = express.Router();
const productModels = require("../models/inventario");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const uploader = util.promisify(cloudinary.uploader.upload);

/* METODO GET */


routeraddItem.get("/", (req,res) => {
    res.render("addItem");
});

    
routeraddItem.post("/", async (req,res) =>{
    let img = req.files.imageFile;
    const img_id = (await uploader(img.tempFilePath)).public_id


    await productModels.addProducts({...req.body, img: img_id});
    res.redirect("inventario")
    })
    
module.exports = routeraddItem;