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

type StringType = {
  oddString: string;
  evenString: string;
};

const divideString = (str: string): StringType => {
  let oddString = "";
  let evenString = "";
  let i = 0;
  for (let char of str) {
    if (i != 0 && i % 2 != 0) oddString += char;
    else evenString += char;
    i++;
  }

  return {
    evenString,
    oddString,
  };
};

const joinEvenAndOddenString = (evenString: string, oddString: string) =>
  evenString + " " + oddString;

function main() {
  const cases = parseInt(readLine());
  for (let i = 0; i < cases; i++) {
    const caseStr = readLine();
    const { evenString, oddString } = divideString(caseStr);

    console.log(joinEvenAndOddenString(evenString, oddString));
  }
}
