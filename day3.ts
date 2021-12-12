import * as fs from "fs";

const data = fs.readFileSync("day3data.txt", "utf8");
const dataArray = data.split("\n");

const counts = Array<number>(12).fill(0);

dataArray.forEach((item) => {
  for (let i = 0; i < item.length; i++) {
    counts[i] += parseInt(item[i]);
  }
});

const gamma = counts.map((count) => (count > 500 ? 1 : 0)).join("");
const epsilon = counts.map((count) => (count > 500 ? 0 : 1)).join("");

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
