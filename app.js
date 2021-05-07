const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//const bootstrap = require('bootstrap');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.render("home");
    //res.sendFile(__dirname + "index.html");
});

app.get("/support", function (req, res) {
    res.render("support");
});

app.get("/help", function (req, res) {
    res.render("help");
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
})