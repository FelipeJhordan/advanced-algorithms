import { IObservable } from "./type/IObservable";
import { IObserver } from "./type/IObserver";

export class NumberArrayObservable implements IObservable {
  private data: number[] = [];
  private observers: IObserver[] = [];
  subscribe(observer: IObserver<unknown, void>): void {
    this.observers.push(observer);
  }
  unsubscribe(observer: IObserver<unknown, void>): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(data?: number[]): void {
    if (data && data.length > 0) this.setData(data);
    this.observers.forEach((observer) => observer.update(this.data));
  }

  setData(values?: number[]) {
    this.data = values || [1, 21, 13, 31, 245, 321, 54, 321, 54, 3];
  }
}
