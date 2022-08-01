export interface IObserver<U = unknown, R = void> {
  update(...args: U[]): R;
}
