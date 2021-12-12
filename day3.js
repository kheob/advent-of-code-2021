"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync("day3data.txt", "utf8");
var dataArray = data.split("\n");
var counts = Array(12).fill(0);
dataArray.forEach(function (item) {
    for (var i = 0; i < item.length; i++) {
        counts[i] += parseInt(item[i]);
    }
});
var gamma = counts.map(function (count) { return (count > 500 ? 1 : 0); }).join("");
var epsilon = counts.map(function (count) { return (count > 500 ? 0 : 1); }).join("");
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
