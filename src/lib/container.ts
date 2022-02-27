import { IProvider } from "./providers.interface";
import { IRegistry } from "./registry.interface";

class Container {
  private _registries: IRegistry[] = [];
  private _instances: Record<string, any> = {};

  constructor(registries: IRegistry[]) {
    this._registries = registries;
  }

  public get<T>(instanceKey: string): T | null {
    if (this._instances[instanceKey]) {
      return this._instances[instanceKey];
    }

    return null;
  }

  public async init() {
    for (const registry of this._registries) {
      for (const provider of registry.providers) {
        if (provider.dependencies.length === 0) {
          this._instances[provider.key] = await provider.factory();
        } else {
          const dependencies = provider.dependencies.map((dependencyKey) =>
            this.get(dependencyKey)
          );
          this._instances[provider.key] = await provider.factory(...dependencies);
        }
      }
    }
  }
}

export default Container;
