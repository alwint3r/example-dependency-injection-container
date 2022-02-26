export interface IPersistence {
  store(key: string, value: any): void;
  retrieve(key: string): any;
}
