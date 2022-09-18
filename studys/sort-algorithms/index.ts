import { NumberArrayObservable } from "./src/data-observable/number-array-observable";
import { UniformNumberArrayObservable } from "./src/data-observable/uniform-number-array-observable";
import { SortFactory } from "./src/sort-methods/factory/sort-factory";

const sortFactory = new SortFactory();
const bucketMethod = sortFactory.create("bucket");

const numberArray = new NumberArrayObservable();
numberArray.subscribe(bucketMethod);

numberArray.notify();
