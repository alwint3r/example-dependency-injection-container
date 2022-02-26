import { IProvider } from "../../lib/providers.interface";
import { IPersistence } from "../persistence/persistence.interface";
import DeviceEntity from "./device.entity";

class DeviceService {
  constructor(private persistence: IPersistence) {}

  public getById(id: string): DeviceEntity {
    const device = this.persistence.retrieve(id);

    if (!device) {
      throw new Error(`Device with id ${id} not found`);
    }

    return device;
  }

  public insert(device: DeviceEntity) {
    this.persistence.store(device.id, device);
  }
}

export default DeviceService;

export const deviceServiceProvider: IProvider = {
  key: 'DEVICE_SERVICE',
  dependencies: ['IN_MEMORY_PERSISTENCE'],
  factory: (persistence: IPersistence) => new DeviceService(persistence),
};
