import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  markWithText(opts: Object): Promise<string>;
  markWithImage(opts: Object): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ImageMarker');
