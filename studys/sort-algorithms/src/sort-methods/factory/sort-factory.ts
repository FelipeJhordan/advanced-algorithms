import { BucketMethod } from "../methods/bucket-method";
import { DefaultSortMethod } from "../methods/default-sort-method";
import { ISortFactory } from "../types/ISortFactory";
import { ISortMethod } from "../types/ISortMethod";

export class SortFactory implements ISortFactory {
  create(sortMethodName: string): ISortMethod<any, void> {
    switch (sortMethodName) {
      case "bucket":
        return new BucketMethod();

      default:
        return new DefaultSortMethod();
    }
  }
}
