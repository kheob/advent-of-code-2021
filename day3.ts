import * as fs from 'fs';

const data = fs.readFileSync('day3data.txt', 'utf8');
let dataArray: string[] = data.split('\n');

const co2 = find(dataArray, 'co2');
const oxygen = find(dataArray, 'oxygen');

console.log(parseInt(co2, 2) * parseInt(oxygen, 2));

function find(data: string[], filter: 'oxygen' | 'co2') {
  let i = 0;
  let s = [...data];

  while (s.length !== 1) {
    console.log(s.length);
    s = subset([...s], filter, i);
    i++;
  }

  return s[0];
}

function subset(
  data: string[],
  filter: 'oxygen' | 'co2',
  index: number,
): string[] {
  let [zeroes, ones] = [0, 0];
  let ret: string[] = [];

  data.forEach((number) => {
    if (number.charAt(index) === '0') {
      zeroes += 1;
    } else {
      ones += 1;
    }
  });

  data.forEach((number) => {
    switch (filter) {
      case 'co2':
        // least
        const least = zeroes <= ones ? '0' : '1';
        if (number.charAt(index) === least) {
          ret.push(number);
        }
        break;

      case 'oxygen':
        // most
        const most = zeroes > ones ? '0' : '1';
        if (number.charAt(index) === most) {
          ret.push(number);
        }
        break;
    }
  });

  return ret;
}
