"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync("day1data.txt", "utf8");
var dataArray = data.split("\n");
var largerMeasurements = 0;
var previousReading;
dataArray.forEach(function (reading) {
    if (previousReading) {
        if (parseInt(reading) > previousReading) {
            largerMeasurements += 1;
        }
    }
    previousReading = parseInt(reading);
});
console.log(largerMeasurements);
console.log(dataArray.length);
