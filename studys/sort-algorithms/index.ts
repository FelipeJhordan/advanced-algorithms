import { UniformNumberArrayObservable } from "./src/data-observable/uniform-number-array-observable";
import { SortFactory } from "./src/sort-methods/factory/sort-factory";

const sortFactory = new SortFactory();
const bucketMethod = sortFactory.create("bucket");

const numberArray = new UniformNumberArrayObservable();
numberArray.subscribe(bucketMethod);

numberArray.notify();
