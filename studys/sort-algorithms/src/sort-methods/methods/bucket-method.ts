import { Logger } from "../../logger/LoggerSingleton";
import { assignIfEmpty } from "../../util";
import { ISortMethod } from "../types/ISortMethod";

export class BucketMethod implements ISortMethod<number, void> {
  constructor() {}
  update(...args: any[]): void {
    this.execute(args[0]);
  }
  execute(values: number[]): void {
    Logger.startAndEnd(this.constructor.name, new Date().getTime());
    const result = this.sort(values, values.length);
    Logger.startAndEnd(this.constructor.name);
    Logger.showOrderArrayAndNewArray(values, result);
  }

  private sort(values: number[], n: number) {
    const buckets: any[] = this.createBuckets(values, n);
    const subSort = (a: number, b: number) => a - b;

    for (const bucket of buckets) {
      bucket?.sort(subSort);
    }

    const finalArray = this.joinBuckets(buckets, n);

    return finalArray;
  }

  private createBuckets(values: number[], n: number) {
    const buckets: any[] = [];
    for (const value of values) {
      const bucketIndex = Math.floor(n * value);

      buckets[bucketIndex] = assignIfEmpty(buckets[bucketIndex]);
      buckets[bucketIndex].push(value);
      Logger.sendLineMessage(value);
    }

    return buckets;
  }

  private joinBuckets(buckets: any[], bucketsNumber: number) {
    const finalArray = [];
    let index = 0;
    for (let i = 0; i < bucketsNumber; i++) {
      for (let j = 0; j < buckets[i]?.length; j++) {
        finalArray[index++] = buckets[i][j];
      }
    }

    return finalArray;
  }
}
