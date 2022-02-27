import DeviceEntity from "./app/devices/device.entity";
import DeviceService from "./app/devices/device.service";
import devicesRegistry from "./app/devices/devices.registry";
import persistenceRegistry from "./app/persistence/persistence.registry";
import Container from "./lib/container";

const container = new Container([persistenceRegistry, devicesRegistry]);

async function main() {
  await container.init();

  const deviceService = container.get<DeviceService>(DeviceService.name);

  if (!deviceService) {
    throw new Error("Device service not found");
  }

  deviceService.insert(new DeviceEntity("123", "device-1"));

  const storedDevice = deviceService.getById("123");
  console.log(storedDevice);
}

main();
