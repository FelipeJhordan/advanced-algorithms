import { BubbleMethod } from "../methods/bubble-method";
import { BucketMethod } from "../methods/bucket-method";
import { DefaultSortMethod } from "../methods/default-sort-method";
import { InsertMethod } from "../methods/insert-method";
import { ISortFactory } from "../types/ISortFactory";
import { ISortMethod } from "../types/ISortMethod";

export class SortFactory implements ISortFactory {
  create(sortMethodName: string): ISortMethod<any, void> {
    switch (sortMethodName) {
      case "bucket":
        return new BucketMethod();
      case "bubble":
        return new BubbleMethod();

      case "insert":
        return new InsertMethod();

      default:
        return new DefaultSortMethod();
    }
  }
}
