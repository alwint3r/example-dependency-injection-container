export interface IProvider {
  key: string;
  dependencies: string[];
  factory: (...args: any[]) => any;
}