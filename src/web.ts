import { WebPlugin } from '@capacitor/core';

import type { SupremaSpikePluginPlugin } from './definitions';

export class SupremaSpikePluginWeb extends WebPlugin implements SupremaSpikePluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
