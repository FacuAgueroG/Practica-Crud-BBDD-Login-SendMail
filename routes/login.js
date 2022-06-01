"use strict";

const express = require ("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const async = require("hbs/lib/async");
const routerlogin = express.Router();
const usuarios = require ("../models/usuarios")


/* METODO GET */
routerlogin.get("/", (req,res) => {
    res.render("login");
});
routerlogin.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/")});

/* METODO POST */
routerlogin.post("/", async (req,res) => {
const {user,pass} = req.body;
const data = await usuarios.getUser(user,pass);
if (data != undefined) {
    req.session.user = user
    res.redirect("inventario");
}
    else {
        const message = "Usuario y/o contraseña incorrecta"
        res.render("login", {message})
    }



});
module.exports = routerlogin;