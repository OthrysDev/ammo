// Arguments can be either a callback function (in the case of the toggleRecord for example), or a list of unknowned arguments
type Arguments = unknown[] | ((recording: boolean) => void);

export default class MockedSocket {
    private cache: Record<string, (...args: unknown[]) => void> = {};

    private isRecording = true;

    public connected = true;

    on = (event: string, listener: (...args: unknown[]) => void): void => {
        this.cache[event] = listener;
    };

    emit = (event: string, args: Arguments): void => {
        // When we toggle, we save the new value and invoke the callback given just like the server would do
        if (event === 'toggleRecord') {
            this.isRecording = !this.isRecording;
            if (typeof args === 'function') {
                args(this.isRecording);
            }
            return undefined;
        }
        // For now, we only block the bullet event when the recorder is paused
        if (!this.isRecording && event === 'bullet') return undefined;
        return this.cache[event](args);
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
