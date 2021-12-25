import * as fs from 'fs';
import { exit } from 'process';

const numbersData = fs.readFileSync('day4numbers.txt', 'utf8');
const boardsData = fs.readFileSync('day4boards.txt', 'utf8');

const numbers = numbersData.split(',');
const boards = boardsData
  .split('\n\n')
  .map((board) =>
    board.split('\n').map((row) => row.split(' ').filter((i) => i != '')),
  );

numbers.forEach((calledNumber) => {
  boards.forEach((board, boardIndex) => {
    board.forEach((row, rowIndex) => {
      row.forEach((number, numIndex) => {
        if (number === calledNumber) {
          boards[boardIndex][rowIndex][numIndex] = '';
        }
      });

      if (checkBoard(board)) {
        let sum = 0;
        board.forEach((row) => {
          row.forEach((col) => {
            if (col !== '') {
              sum += parseInt(col);
            }
          });
        });
        console.log(parseInt(calledNumber) * sum);
        exit();
      }
    });
  });
});

function checkBoard(board: string[][]) {
  let found = false;

  board.forEach((row) => {
    if (row.join('') === '') {
      found = true;
    }
  });

  const inverse = board[0].map((_, colIndex) =>
    board.map((row) => row[colIndex]),
  );

  inverse.forEach((row) => {
    if (row.join('') === '') {
      found = true;
    }
  });

  return found;
}
