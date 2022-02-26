import { IProvider } from "../../lib/providers.interface";
import { IPersistence } from "./persistence.interface";

class InMemoryPersistence implements IPersistence {
  private _db: Map<string, any> = new Map<string, any>();

  store(key: string, value: any) {
    this._db.set(key, value);
  }

  retrieve(key: string): any {
    return this._db.get(key);
  }
}

export default InMemoryPersistence;

export const inMemoryPersistenceProvider: IProvider = {
  key: 'IN_MEMORY_PERSISTENCE',
  dependencies: [],
  factory: () => new InMemoryPersistence(),
};
