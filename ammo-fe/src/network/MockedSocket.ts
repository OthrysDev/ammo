export default class MockedSocket {
    private cache: Record<string, (...args: unknown[]) => void> = {};

    public connected = true;

    on = (event: string, listener: (...args: unknown[]) => void): void => {
        this.cache[event] = listener;
    };

    emit = (event: string, ...args: unknown[]): void => {
        this.cache[event](...args);
    };

    connect = (): void => {
        this.connected = true;

        if (this.cache.connect) this.cache.connect();
    };

    disconnect = (): void => {
        this.connected = false;

        if (this.cache.disconnect) this.cache.disconnect();
    };
}
