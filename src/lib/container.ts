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

  public init() {
    this._registries.forEach((registry) => {
      registry.providers.forEach((provider) => {
        if (provider.dependencies.length === 0) {
          this._instances[provider.key] = provider.factory();
        } else {
          const dependencies = provider.dependencies.map((dependencyKey) =>
            this.get(dependencyKey)
          );
          this._instances[provider.key] = provider.factory(...dependencies);
        }
      });
    });
  }
}

export default Container;
