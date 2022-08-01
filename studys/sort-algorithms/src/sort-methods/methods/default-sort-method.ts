import { ISortMethod } from "../types/ISortMethod";

export class DefaultSortMethod implements ISortMethod<any[], void> {
  update(...args: unknown[]): void {
    throw new Error("Method not implemented.");
  }
  execute(values: any): void {
    return values.sort();
  }
}
