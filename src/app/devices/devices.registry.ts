import { IRegistry } from "../../lib/registry.interface";
import { deviceServiceProvider } from "./device.service";

const devicesRegistry: IRegistry = {
  providers: [deviceServiceProvider],
};

export default devicesRegistry;
