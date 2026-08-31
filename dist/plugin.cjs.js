'use strict';

var core = require('@capacitor/core');

const SupremaSpikePlugin = core.registerPlugin('SupremaSpikePlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SupremaSpikePluginWeb()),
});

class SupremaSpikePluginWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SupremaSpikePluginWeb: SupremaSpikePluginWeb
});

exports.SupremaSpikePlugin = SupremaSpikePlugin;
//# sourceMappingURL=plugin.cjs.js.map
