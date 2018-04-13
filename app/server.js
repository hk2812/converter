var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex",function(req,resp){
    var red = parseInt(req.query.red,10);
    var green = parseInt(req.query.green,10);
    var blue  = parseInt(req.query.blue, 10);

    var hex = converter.rgbToHex(red, green, blue);
    resp.send(hex);

});

app.get("/hexToRgb",function(req,res){
    var hex = req.query.hex;

    var rgb = converter.hexToRgb(hex);

    res.send(JSON.stringify(rgb))

});

app.listen(3000);