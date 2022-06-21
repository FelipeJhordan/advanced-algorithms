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

const printFirstTenMultOf = (x: number) => {
  const [ONE, TEN] = [1, 10];
  const operator = "x";

  for (let i = ONE; i <= TEN; i++) {
    console.log(`${x} ${operator} ${i} = ${multiExec(x, i)}`);
  }
};

const multiExec = (n1: number, n2: number) => n1 * n2;

function main() {
  const n: number = parseInt(readLine().trim(), 10);
  printFirstTenMultOf(n);
}
