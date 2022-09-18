import { NumberArrayObservable } from "./src/data-observable/number-array-observable";
import { SortFactory } from "./src/sort-methods/factory/sort-factory";

const sortFactory = new SortFactory();
// const bucketMethod = sortFactory.create("bucket");

const bubbleMethod = sortFactory.create("bubble")
const numberArray = new NumberArrayObservable();

numberArray.subscribe(bubbleMethod);

numberArray.notify();
