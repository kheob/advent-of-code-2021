import * as fs from "fs";

const data = fs.readFileSync("day1data.txt", "utf8");
const dataArray = data.split("\n");

let largerMeasurements = 0;
let previousReading: number;
dataArray.forEach((reading) => {
  if (previousReading) {
    if (parseInt(reading) > previousReading) {
      largerMeasurements += 1;
    }
  }
  previousReading = parseInt(reading);
});

console.log(largerMeasurements);
console.log(dataArray.length);
