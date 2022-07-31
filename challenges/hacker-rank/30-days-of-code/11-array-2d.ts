'use strict';

import { createWriteStream, WriteStream } from "fs";
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

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr: number[][]): number {
    const HUGE_NEGATIVE_NUMBER = -10000
    let bigger = HUGE_NEGATIVE_NUMBER
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++ ) {
            let sum =  getHouglassSumByRowAndColumn(i, j, arr)
            console.log(sum)
            if(sum > bigger) bigger = sum
        }
    }
    
    return bigger
}

function getHouglassSumByRowAndColumn(row: number, col: number, targetArr: number[][]) : number {
    let firstRow = targetArr[row][col] + targetArr[row][col+1] + targetArr[row][col+2]
    let middleRow = targetArr[row+1][col+1]
    let lastRow = targetArr[row+2][col] + targetArr[row+2][col+1] + targetArr[row+2][col+2]
    return (firstRow + middleRow + lastRow)
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    let arr: number[][] = Array(6);

    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    const result: number = hourglassSum(arr);
    console.log(result)
    ws.write(result + '\n');

    ws.end();
}   