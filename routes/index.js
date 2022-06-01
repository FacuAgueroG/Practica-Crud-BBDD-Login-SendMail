"use strict";

const express = require ("express");
const router = express.Router();
const inventario = require("../models/inventario");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);




/* METODO GET */
router.get("/", (req,res) => {
    res.render("index");
});

router.get("/handleedit/:id", async (req,res) => {

    const row = await inventario.getProduct(req.params.id);
    const product = {
        id: row[0].id,
        modelo: row[0].modelo,
        tipo: row[0].tipo,
        descripcion: row[0].descripcion,
        cantidad: row[0].cantidad,
        img: row[0].img,
    };
    res.render("editItem", {product});
});

router.get("/deleteProduct/:id", async (req,res) => {
    const row = await inventario.getProduct(req.params.id);
    if(!row[0].img){
        await inventario.deleteProduct(req.params.id);
        res.redirect("/inventario")
    }else{
        await destroy(row[0].img);
        await inventario.deleteProduct(req.params.id);
        res.redirect("/inventario")
    }
    

})



router.post("/editProduct", async (req, res) => {
    let img_id = null;
    if(!req.files){
        img_id = req.body.prevImg}
        else {
            const row = await inventario.getProduct(req.body.id);
            await destroy(row[0].img);

            let img = req.files.imgedit;
            img_id = (await uploader(img.tempFilePath)).public_id}

const data = {
id: req.body.id,
modelo: req.body.modelo,
tipo: req.body.tipo,
descripcion: req.body.descripcion,
cantidad: req.body.cantidad,
img: img_id,
}

await inventario.modifyProduct(data, data.id);
res.redirect("/inventario")
    
})

module.exports = router;

