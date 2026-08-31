import { registerPlugin } from '@capacitor/core';
const SupremaSpikePlugin = registerPlugin('SupremaSpikePlugin', {
    web: () => import('./web').then((m) => new m.SupremaSpikePluginWeb()),
});
export * from './definitions';
export { SupremaSpikePlugin };
//# sourceMappingURL=index.js.map