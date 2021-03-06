var expect = require("chai").expect
var request = require("request")
var baseUrl="http://localhost:3000/";
describe("Color code converter API",function(){
    describe("RGB to Hex Conversion",function(){
        var url = baseUrl+"rgbToHex?red=255&green=255&blue=255";
        it("returns status 200",function(done){
            request(url,function(err,resp,body){
                expect(resp.statusCode).to.equal(200);
                done();
            })

        })
        it("returns the color in hex",function(done){
           request(url,function(err,response,body){
               expect(body).to.equal("ffffff");
               done();
           })

        })
    })
    describe("Hex to RGB Conversion",function(){
        var url = baseUrl+"hexToRgb?hex=00ff00";
        it("returns status  200",function(done){
            request(url,function(err,resp,body){
                expect(resp.statusCode).to.equal(200);
                done();
            })
        })
        it("returns the color in RGB",function(done){
            request(url,function(err,resp,body){
                expect(body).to.equal("[0,255,0]");
                done();
            })

        })
    })


})