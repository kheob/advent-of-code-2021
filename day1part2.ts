import * as fs from "fs";

const data = fs.readFileSync("day1data.txt", "utf8");
const dataArray = data.split("\n");

const dataArraySums = [];

for (let i = 0; i < dataArray.length; i++) {
  if (dataArray[i + 1] && dataArray[i + 2]) {
    dataArraySums.push(
      parseInt(dataArray[i]) +
        parseInt(dataArray[i + 1]) +
        parseInt(dataArray[i + 2])
    );
  }
}

let largerMeasurements = 0;
let previousReading: number;
dataArraySums.forEach((reading) => {
  if (previousReading) {
    if (reading > previousReading) {
      largerMeasurements += 1;
    }
  }
  previousReading = reading;
});

console.log(largerMeasurements);
console.log(dataArray.length);
