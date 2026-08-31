export interface SupremaSpikePluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
