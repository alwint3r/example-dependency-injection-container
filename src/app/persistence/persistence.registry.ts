import { IRegistry } from "../../lib/registry.interface";
import { inMemoryPersistenceProvider } from "./in-memory.persistence";

const persistenceRegistry: IRegistry = {
  providers: [inMemoryPersistenceProvider],
};

export default persistenceRegistry;
