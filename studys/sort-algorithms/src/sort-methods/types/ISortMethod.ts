import { IObserver } from "../../data-observable/type/IObserver";

export interface ISortMethod<V = any, T = void> extends IObserver<V, T> {
  execute(values: V[]): T;
}
