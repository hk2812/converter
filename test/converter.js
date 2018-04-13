var expect = require("chai").expect;
var converter = require("../app/converter");
describe("Color code converter", function() {
    describe("RGB to HEX Conversion",function(){
        it("converts the basic colors",function(){
            var redHex = converter.rgbToHex(255,0,0);
            var blueHex = converter.rgbToHex(0,255,0);
            var greenHex = converter.rgbToHex(0,0,255);
            expect(redHex).to.equal("ff0000");
            expect(blueHex).to.equal("00ff00");
            expect(greenHex).to.equal("0000ff");

        })
        it("test padding functionality",function(){
            var hexCodeRed=255
            var padResult = converter.pad(hexCodeRed.toString(16));
            console.log("pad res:"+padResult);
            expect(padResult).to.equal("ff");

        })    

    });
    describe("HEX to RGB Conversion",function(){
        it("converts the basic colors",function(){
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);

        })

    });

});
