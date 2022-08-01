import { ISortMethod } from "./ISortMethod";

export interface ISortFactory {
  create(sortMethodName: string): ISortMethod;
}
