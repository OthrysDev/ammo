import { Bullet } from 'shared/types/Bullet';

type BulletReducerAction = {
    type: 'RECEIVED_BULLET' | 'RECEIVED_BULLETS';
    bullet?: Bullet;
    bullets?: Bullet[];
};

export type BulletReducerState = Bullet[];

export default function bulletReducer(
    state = [],
    action: BulletReducerAction
): BulletReducerState {
    switch (action.type) {
        case 'RECEIVED_BULLET':
            console.log('action', action);
            return [...state, action.bullet];
        case 'RECEIVED_BULLETS':
            return [...state, ...action.bullets];
        default:
            return state;
    }
}
