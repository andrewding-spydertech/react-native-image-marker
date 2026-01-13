import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

/**
 * TurboModule spec for ImageMarker native module.
 *
 * Note: TurboModule specs use generic types (Object) for codegen compatibility.
 * The actual TypeScript interfaces (TextMarkOptions, ImageMarkOptions) are
 * maintained in index.ts for type-safe API usage.
 */
export interface Spec extends TurboModule {
  /**
   * Mark text on background image
   * @param opts TextMarkOptions object containing background image and text watermark options
   * @returns Promise resolving to image path or base64 string
   */
  markWithText(opts: Object): Promise<string>;

  /**
   * Mark image watermark on background image
   * @param opts ImageMarkOptions object containing background and watermark image options
   * @returns Promise resolving to image path or base64 string
   */
  markWithImage(opts: Object): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ImageMarker');
