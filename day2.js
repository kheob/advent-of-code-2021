"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync("day2data.txt", "utf8");
var dataArray = data.split("\n");
var depth = 0, position = 0, aim = 0;
dataArray.forEach(function (entry) {
    var _a = entry.split(" "), movement = _a[0], amount = _a[1];
    if (movement === "forward") {
        position += parseInt(amount);
        depth += aim * parseInt(amount);
    }
    if (movement === "down") {
        aim += parseInt(amount);
    }
    if (movement === "up") {
        aim -= parseInt(amount);
    }
});
console.log("Answer:", depth * position);
