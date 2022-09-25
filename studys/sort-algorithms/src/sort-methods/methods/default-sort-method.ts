import { ISortMethod } from "../types/ISortMethod";

export class DefaultSortMethod implements ISortMethod<any[], void> {
  update(...args: unknown[]): void {
    this.execute(args)
  }
  execute(values: any): void {
    return values.sort();
  }
}
