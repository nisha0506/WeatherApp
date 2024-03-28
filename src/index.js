//import express from "express";
//import bodyParser from "body-parser";
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config()
const app = express();
const port = process.env.PORT || 3000; //if some other operation is going on at 3000 port then it will transfer it to another port

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
  });
  
app.get("/about",(req,res)=>{
    res.render("about.ejs")
});

app.get("/weather",(req,res)=>{
    res.render("weather.ejs")
});

app.get("*",(req,res)=>{
    res.render("error.ejs",{
        errorMsg:"Oops page not found",
    })
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
});
