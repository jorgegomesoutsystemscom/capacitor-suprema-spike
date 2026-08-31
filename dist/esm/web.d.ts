import { WebPlugin } from '@capacitor/core';
import type { SupremaSpikePluginPlugin } from './definitions';
export declare class SupremaSpikePluginWeb extends WebPlugin implements SupremaSpikePluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
