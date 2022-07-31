"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

const transformDecimalInBinary = (n: number): string => {
  if (n == 0) return "0";
  let binaryNumber = "";
  while (n != 1) {
    const { rest, result } = getRestAndDivisionResult(n);
    n = result;
    binaryNumber += rest;
  }
  binaryNumber += "1";

  return binaryNumber;
};

const getRestAndDivisionResult = (n: number) => ({
  rest: n % 2,
  result: Math.floor(n / 2),
});

const getMaxOneValue = (binary: string) => {
  let maxQtd = 0;
  let currentQtd = 0;
  for (let bit of binary) {
    if (bit == "1") {
      currentQtd++;
      if (currentQtd > maxQtd) maxQtd = currentQtd;
    } else {
      currentQtd = 0;
    }
  }

  return maxQtd;
};

function main() {
  const n: number = parseInt(readLine().trim(), 10);
  const binaryNumber = transformDecimalInBinary(n);
  console.log(getMaxOneValue(binaryNumber));
}
