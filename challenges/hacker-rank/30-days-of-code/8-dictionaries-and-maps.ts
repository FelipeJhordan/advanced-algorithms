'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

const ContactNumbersMap = new Map<string , number >()

const getKeyAndValue = (line: string, separator: string = " ") => {
    const [key, value] = line.split(separator)
    
    return {
        key,
        value
    }   
}


const verifyIfContactExists = (key: string,) : boolean => ContactNumbersMap.has(key)

const printOutput = (key: string) => {
    console.log(`${key}=${ContactNumbersMap.get(key)}`)
} 
 

const populateArray = (cases: Number) => {
    for (let i  = 0 ; i < cases; i++) {
        const {key, value} = getKeyAndValue(readLine())
        ContactNumbersMap.set(key, Number(value))
    }
}

const makeQueries = (cases: number) => {
    while(true){
        const key = readLine()
        if (!key) break;
        const hasContact = verifyIfContactExists(key)
        hasContact ? printOutput(key)  : console.log("Not found")
    }
}


function main() {
    const cases = parseInt(readLine())
    populateArray(cases)
    makeQueries(cases)
}
