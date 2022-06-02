"use strict";

const express = require ("express");
const { body, validationResult } = require("express-validator");
const routerContact = express.Router();
const nodemailer = require ("nodemailer");
//const async = require("hbs/lib/async");

/* METODO GET */
routerContact.get("/", (req,res) => {
    res.render("contact");
});

/* METODO POST */
// routerContact.post("/", async  (req,res) => {
//   const emailMsg = {
//     to: "rey-ban@argentina.com",
//     from: req.body.email,
//     subject: "Mensaje de usuario",
//     html:`${req.body.name} envio el siguiente mensaje: ${req.body.message}`
//     };    

//   const transport = nodemailer.createTransport({
//     host: process.env.MAILTRAP_HOST,
//     port: process.env.MAILTRAP_PORT,
//     auth: {
//       user: process.env.MAILTRAP_USER,
//       pass: process.env.MAILTRAP_PASS,
//     }
//   });

// let sendMailStatus = await transport.sendMail(emailMsg); 

// res.redirect("/");

// });


routerContact.post("/", async  (req,res) => {
  const emailMsg = {
    to: "rey-ban@argentina.com",
    from: "asdasd",
    subject: "Mensaje de usuario",
    html:"asdasdasd"
    };    

  const transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    }
  });

let sendMailStatus = await transport.sendMail(emailMsg); 

res.redirect("/");

});

module.exports = routerContact;