import Bullet from 'shared/types/Bullet';
// Must use relative path because of Cypress
import WSBulletsEvent from '../shared/types/WSBulletsEvent';

type SubscribeCbk = (subscribed: boolean) => void;

type Subscribe = {
    subscribe: boolean;
};

type SendBullet = {
    bullet: Bullet;
};

// Let's type emit arguments more accurately
type Arguments = Subscribe | SendBullet;

// Will provide the proper casting
function isSubscribeEvent(
    event: WSBulletsEvent,
    args: Arguments
): args is Subscribe {
    return event === WSBulletsEvent.SUBSCRIBE;
}

export default class MockedSocket {
    private cache: Record<string, (...args: unknown[]) => void> = {};

    public isSubscribedToBullets = true;

    public connected = true;

    on = (event: string, listener: (...args: unknown[]) => void): void => {
        this.cache[event] = listener;
    };

    emit = (
        event: WSBulletsEvent,
        args: Arguments,
        cbk: SubscribeCbk
    ): void => {
        // Subscribe to bullets channel
        if (isSubscribeEvent(event, args)) {
            const { subscribe } = args;
            this.__handleBulletsSubscribe(subscribe, cbk);

            return;
        }

        // For now, we only block the bullet event when the recorder is paused
        if (!this.isSubscribedToBullets && event === WSBulletsEvent.EMIT)
            return;

        this.cache[event](args);
    };

    connect = (): void => {
        this.connected = true;

        if (this.cache.connect) this.cache.connect();
    };

    disconnect = (): void => {
        this.connected = false;
        this.isSubscribedToBullets = false;

        if (this.cache.disconnect) this.cache.disconnect();
    };

    // ================================================================
    // ================================================================
    // ================================================================

    __handleBulletsSubscribe = (
        subscribe: boolean,
        cbk: SubscribeCbk
    ): void => {
        this.isSubscribedToBullets = subscribe;

        cbk(this.isSubscribedToBullets);
    };
}
