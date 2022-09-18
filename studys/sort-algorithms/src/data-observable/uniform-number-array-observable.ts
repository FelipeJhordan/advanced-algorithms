import { IObservable } from "./type/IObservable";
import { IObserver } from "./type/IObserver";

export class UniformNumberArrayObservable implements IObservable {
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
    if (!data || data.length < 1) this.setData(data);
    this.observers.forEach((observer) => observer.update(this.data));
  }

  setData(values?: number[]) {
    this.data = values || [
      0.51, 0.15, 0.12, 0.128, 0.22, 0.142, 0.15, 0.124, 0.12, 0.1, 0,
    ];
  }
}
