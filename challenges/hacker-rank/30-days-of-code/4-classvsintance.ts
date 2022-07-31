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

class Person {
  constructor(private age: number) {
    if (age < 0) {
      this.age = 0;
      console.log("Age is not valid, setting age to 0.");
    }
  }

  yearPasses() {
    this.age++;
  }

  amIOld() {
    if (this.age < 13) console.log("You are young.");
    else if (this.age < 18) console.log("You are a teenager.");
    else console.log("You are old.");
  }
}

const threeYearPasses = (person: Person): void => {
  person.yearPasses();
  person.yearPasses();
  person.yearPasses();
};

const isLastCase = (index: number, length: number) => index + 1 == length;

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  const casesCount = parseInt(readLine());

  for (let i = 0; i < casesCount; i++) {
    const personAge = parseInt(readLine());
    const personInstance = new Person(personAge);
    personInstance.amIOld();
    threeYearPasses(personInstance);
    personInstance.amIOld();
    if (!isLastCase(i, casesCount)) {
      console.log();
    }
  }
}
