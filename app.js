"use strict";

const express = require ("express");
const session = require("express-session")
const path = require ("path");
const hbs = require ("hbs");
const fileupload = require("express-fileupload");
require("dotenv").config();
//const session = require("express-session");
const PORT = process.env.PORT || 3000
hbs.registerPartials(path.join(__dirname,"./views/partials"));
const fileupload = require("express-fileupload");

const routeIndex = require ("./routes/index")
const routeContact = require ("./routes/contact")
const routeStore = require ("./routes/store")
const routelogin = require ("./routes/login")
const routerinventario = require ("./routes/inventario");
const routeraddItem = require("./routes/addItem");
const routeEditItem = require("./routes/edititem");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
}));

const secured = async (req, res, next)=>{
    if(req.session.user){next();} 
    else {
        res.render("login");}
    };
    
    const isAuth = (req,res,next) => {
        app.locals.loggedUser =req.session.user;
        next();
    }
    
    app.use(fileupload ({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    }) )

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname,"./public")))

app.use("/", isAuth, routeIndex);
app.use("/contact", routeContact);
app.use("/store", routeStore);
app.use("/login", routelogin);
app.use("/inventario", secured, routerinventario);
app.use("/addItem", secured, routeraddItem);
app.use("/editItem", secured, routeEditItem);



app.listen(PORT, () => {
    console.warn(`Server running in http://localhost:${PORT}`);
});


app.get("*", (req,res)=>{
    res.redirect("/")
})

