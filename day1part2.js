"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync("day1data.txt", "utf8");
var dataArray = data.split("\n");
var dataArraySums = [];
for (var i = 0; i < dataArray.length; i++) {
    if (dataArray[i + 1] && dataArray[i + 2]) {
        dataArraySums.push(parseInt(dataArray[i]) +
            parseInt(dataArray[i + 1]) +
            parseInt(dataArray[i + 2]));
    }
}
var largerMeasurements = 0;
var previousReading;
dataArraySums.forEach(function (reading) {
    if (previousReading) {
        if (reading > previousReading) {
            largerMeasurements += 1;
        }
    }
    previousReading = reading;
});
console.log(largerMeasurements);
console.log(dataArray.length);
