import * as fs from "fs";

const data = fs.readFileSync("day2data.txt", "utf8");
const dataArray = data.split("\n");

let depth = 0,
  position = 0,
  aim = 0;

dataArray.forEach((entry) => {
  const [movement, amount] = entry.split(" ");
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
