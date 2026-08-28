import { registerPlugin } from '@capacitor/core';

import type { SupremaSpikePluginPlugin } from './definitions';

const SupremaSpikePlugin = registerPlugin<SupremaSpikePluginPlugin>('SupremaSpikePlugin', {
  web: () => import('./web').then((m) => new m.SupremaSpikePluginWeb()),
});

export * from './definitions';
export { SupremaSpikePlugin };
