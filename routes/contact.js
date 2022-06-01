"use strict";

const express = require ("express");
const routerContact = express.Router();
const nodemailer = require ("nodemailer");
const async = require("hbs/lib/async");
const { body, validationResult } = require('express-validator');

/* METODO GET */
routerContact.get("/", (req,res) => {
    res.render("contact");
});

/* METODO POST */
routerContact.post("/", async  (req,res) => {
const emailfrom = req.body.email;
const emailMsg = {
        to: "rey-ban@argentina.com",
        from: emailfrom,
        subject: req.body.motivo,
        html:`${req.body.name} ${req.body.apellido} envio el siguiente mensaje: ${req.body.descripcion}`,
    };    

const transport = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        auth: {
          user: process.env.user,
          pass: process.env.pass,}
      });

let sendMailStatus = await transport.sendMail(emailMsg); 
res.redirect("/");



});

module.exports = routerContact;