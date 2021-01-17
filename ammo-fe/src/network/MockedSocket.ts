// Arguments can be either a callback function (in the case of the toggleRecord for example), or a list of unknowned arguments
type Arguments = unknown[];

export default class MockedSocket {
    private cache: Record<string, (...args: unknown[]) => void> = {};

    public isSubbedToBullets = true;

    public connected = true;

    on = (event: string, listener: (...args: unknown[]) => void): void => {
        this.cache[event] = listener;
    };

    emit = (event: string, args: Arguments, cbk: unknown): void => {
        // Sub to bullets channel
        if (event === 'bullets::sub') {
            const { sub } = (args as unknown) as { sub: boolean };
            this.__handleBulletsSub(sub, cbk as (subbed: boolean) => void);

            return;
        }
        // For now, we only block the bullet event when the recorder is paused
        if (!this.isSubbedToBullets && event === 'bullets::emit') return;

        this.cache[event](args);
    };

    connect = (): void => {
        this.connected = true;

        if (this.cache.connect) this.cache.connect();
    };

    disconnect = (): void => {
        this.connected = false;
        this.isSubbedToBullets = false;

        if (this.cache.disconnect) this.cache.disconnect();
    };

    // ================================================================
    // ================================================================
    // ================================================================

    __handleBulletsSub = (
        sub: boolean,
        cbk: (subbed: boolean) => void
    ): void => {
        this.isSubbedToBullets = sub;

        cbk(this.isSubbedToBullets);
    };
}
